export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const searchQuery = Vue.ref('');
    const showBookmarkedOnly = Vue.ref(false);
    const filteredIssues = Vue.computed(() => {
      const query = searchQuery.value.trim().toLowerCase();
      return itemsStore.items.filter((issue) => {
        return issue.name.toLowerCase().includes(query)
          && (!showBookmarkedOnly.value || issue.isBookmarked);
      });
    });
    const toggleBookmark = (issue) => {
      issue.isBookmarked = !issue.isBookmarked;
    };

    return {
      itemsStore,
      searchQuery,
      showBookmarkedOnly,
      filteredIssues,
      toggleBookmark,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="h3 mb-0">Issues</h1>
        <span class="badge text-bg-light border">{{ filteredIssues.length }} shown</span>
      </div>

      <p class="text-muted">Search known issues by name.</p>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading issues...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="itemsStore.items.length === 0" class="alert alert-warning" role="alert">
        No issues found.
      </div>

      <div v-else>
        <label for="issue-search" class="form-label">Search issues</label>
        <input
          id="issue-search"
          v-model="searchQuery"
          type="search"
          class="form-control mb-3"
          placeholder="Search Issues..." />

        <div class="form-check mb-3">
          <input
            id="bookmarked-only"
            v-model="showBookmarkedOnly"
            class="form-check-input"
            type="checkbox" />
          <label class="form-check-label" for="bookmarked-only">
            Show bookmarked only
          </label>
        </div>

        <div v-if="filteredIssues.length === 0" class="alert alert-light border" role="status">
          {{ showBookmarkedOnly ? 'No bookmarked issues match your search.' : 'No issues match your search.' }}
        </div>

        <div v-else class="list-group">
          <div
            v-for="issue in filteredIssues"
            :key="issue.id"
            class="list-group-item d-flex justify-content-between align-items-center gap-3 p-0">
            <router-link
              :to="'/items/' + issue.id"
              class="list-group-item-action d-flex flex-grow-1 justify-content-between align-items-center gap-3 p-3 text-decoration-none text-body">
              <span>{{ issue.name }}</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </router-link>
            <button
              type="button"
              class="btn btn-secondary btn-sm me-3"
              :aria-label="(issue.isBookmarked ? 'Remove bookmark from ' : 'Bookmark ') + issue.name"
              :aria-pressed="issue.isBookmarked"
              @click="toggleBookmark(issue)">
              <i :class="issue.isBookmarked ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
};
