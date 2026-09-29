export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();

    const selectedItem = Vue.computed(() => {
      return itemsStore.items.find((item) => item.id === route.params.id);
    });

    const getSuccessRate = (fix) => {
      if (fix.attempts === 0) {
        return 0;
      }
      return (fix.successes / fix.attempts) * 100;
    };

    const formatSuccessRate = (fix) => {
      return `${getSuccessRate(fix).toFixed(0)}%`;
    };

    const rankedFixes = Vue.computed(() => {
      if (!selectedItem.value) {
        return [];
      }

      return [...selectedItem.value.fixes].sort((firstFix, secondFix) => {
        return getSuccessRate(secondFix) - getSuccessRate(firstFix);
      });
    });

    return {
      itemsStore,
      selectedItem,
      rankedFixes,
      formatSuccessRate,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <router-link to="/items" class="btn btn-link ps-0 mb-3">Back to issues</router-link>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading issue details...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="!selectedItem" class="alert alert-warning" role="alert">
        Issue not found.
      </div>

      <article v-else>
        <h1 class="h3 mb-2">{{ selectedItem.name }}</h1>
        <p class="text-muted mb-4">Fixes ranked by success rate.</p>

        <div class="list-group">
          <article
            v-for="(fix, index) in rankedFixes"
            :key="fix.id"
            class="list-group-item">
            <div class="d-flex justify-content-between align-items-start gap-3">
              <div>
                <h2 class="h5 mb-2">Fix {{ index + 1 }}</h2>
                <p class="mb-2">{{ fix.description }}</p>
                <p class="text-muted mb-0">
                  <strong>Attempts:</strong> {{ fix.attempts }}
                </p>
              </div>
              <span class="badge text-bg-primary fs-6">
                {{ formatSuccessRate(fix) }}
              </span>
            </div>
          </article>
        </div>
      </article>
    </section>
  `,
};
