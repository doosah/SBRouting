/**
 * Breadcrumb navigation component
 */

import { store } from '../../core/state/store.js';
import { router } from '../../core/router/index.js';

export class Breadcrumb {
  constructor(containerId = 'breadcrumb') {
    this.containerId = containerId;
    this.container = document.getElementById(containerId);
    
    // Subscribe to state changes
    store.subscribe((newState) => {
      if (newState.breadcrumbs) {
        this.render(newState.breadcrumbs);
      }
    });
  }

  /**
   * Render breadcrumb
   */
  render(items = []) {
    if (!this.container) {
      return;
    }

    this.container.innerHTML = '';

    items.forEach((item, index) => {
      // Create breadcrumb item
      const itemEl = document.createElement('span');
      itemEl.className = 'breadcrumb-item';
      itemEl.textContent = item;
      itemEl.style.cursor = index < items.length - 1 ? 'pointer' : 'default';

      // Add click handler for navigation
      if (index < items.length - 1) {
        itemEl.addEventListener('click', () => {
          this.handleClick(index);
        });
      } else {
        itemEl.style.color = '#ffffff';
        itemEl.style.fontWeight = '600';
      }

      this.container.appendChild(itemEl);

      // Add separator
      if (index < items.length - 1) {
        const separator = document.createElement('span');
        separator.className = 'breadcrumb-separator';
        separator.textContent = '›';
        this.container.appendChild(separator);
      }
    });
  }

  /**
   * Handle breadcrumb item click
   */
  handleClick(index) {
    const breadcrumbs = store.get('breadcrumbs');
    const newBreadcrumbs = breadcrumbs.slice(0, index + 1);
    store.updateBreadcrumbs(newBreadcrumbs);

    // Navigate to appropriate level
    const levelMap = {
      0: 'level1', // Главная
      1: 'level2', // Регион
      2: 'level3', // Тип
      3: 'level4', // Склад
    };

    const level = levelMap[index] || 'level1';
    router.goToLevel(level);

    // Reset state based on level
    if (index === 0) {
      store.setState({
        region: '',
        type: '',
        warehouse: '',
      });
    } else if (index === 1) {
      store.setState({
        type: '',
        warehouse: '',
      });
    } else if (index === 2) {
      store.setState({
        warehouse: '',
      });
    }
  }

  /**
   * Initialize breadcrumb
   */
  init() {
    const breadcrumbs = store.get('breadcrumbs') || ['Главная'];
    this.render(breadcrumbs);
  }
}

/**
 * Create and initialize breadcrumb
 */
export const initBreadcrumb = (containerId) => {
  const breadcrumb = new Breadcrumb(containerId);
  breadcrumb.init();
  return breadcrumb;
};
