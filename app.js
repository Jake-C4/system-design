import LandingPageComponent from './components/landing-page-component.js';
import AboutPageComponent from './components/about-page-component.js';
import NavbarComponent from './components/navbar-component.js';
import CollectionPageComponent from './components/collection-page-component.js';
import ItemDetailPageComponent from './components/item-detail-page-component.js';

const routes = [
  {
    path: '/',
    component: LandingPageComponent,
  },
  {
    path: '/about',
    component: AboutPageComponent,
  },
  {
    path: '/items',
    component: CollectionPageComponent,
  },
  {
    path: '/items/:id',
    component: ItemDetailPageComponent,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  setup() {
    const itemsStore = Vue.reactive({
      items: [],
      isLoading: true,
      error: '',
    });

    const loadCsv = async (fileName, requiredFields) => {
      const response = await fetch(fileName);
      if (!response.ok) {
        throw new Error(`Could not load ${fileName}.`);
      }
      const csvText = await response.text();
      const result = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
      });

      if (result.errors.length > 0) {
        throw new Error(`There was a problem reading ${fileName}.`);
      }
      if (!requiredFields.every((field) => result.meta.fields?.includes(field))) {
        throw new Error(`${fileName} is missing required columns.`);
      }

      return result.data;
    };

    const getRequiredValue = (row, field, fileName) => {
      const value = String(row[field] ?? '').trim();
      if (!value) {
        throw new Error(`${fileName} contains a row with an empty ${field}.`);
      }
      return value;
    };

    Promise.all([
      loadCsv('issues.csv', ['id', 'name']),
      loadCsv('fixes.csv', ['id', 'issue_id', 'description', 'attempts', 'successes']),
    ])
      .then(([issueRows, fixRows]) => {
        const issuesById = new Map();
        itemsStore.items = issueRows.map((row) => {
          const issue = {
            id: getRequiredValue(row, 'id', 'issues.csv'),
            name: getRequiredValue(row, 'name', 'issues.csv'),
            isBookmarked: false,
            fixes: [],
          };
          issuesById.set(issue.id, issue);
          return issue;
        });

        fixRows.forEach((row) => {
          const issueId = getRequiredValue(row, 'issue_id', 'fixes.csv');
          const issue = issuesById.get(issueId);
          if (!issue) {
            throw new Error(`fixes.csv references unknown issue "${issueId}".`);
          }

          const attempts = Number(getRequiredValue(row, 'attempts', 'fixes.csv'));
          const successes = Number(getRequiredValue(row, 'successes', 'fixes.csv'));
          if (
            !Number.isInteger(attempts) ||
            attempts < 0 ||
            !Number.isInteger(successes) ||
            successes < 0 ||
            successes > attempts
          ) {
            throw new Error('fixes.csv contains invalid attempt or success counts.');
          }

          issue.fixes.push({
            id: getRequiredValue(row, 'id', 'fixes.csv'),
            issueId,
            description: getRequiredValue(row, 'description', 'fixes.csv'),
            attempts,
            successes,
            recentOutcome: null,
          });
        });
        itemsStore.error = '';
      })
      .catch((error) => {
        itemsStore.error = error.message;
        itemsStore.items = [];
      })
      .finally(() => {
        itemsStore.isLoading = false;
      });

    Vue.provide('itemsStore', itemsStore);

    return {};
  },
});

app.component('navbar-component', NavbarComponent);

app.use(router);
app.mount('#app');
