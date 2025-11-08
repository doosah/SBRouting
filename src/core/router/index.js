/**
 * Router for navigation between levels
 */

import { store } from '../state/store.js';
import { ROUTES } from '../../data/constants.js';

class Router {
  constructor() {
    this.currentLevel = ROUTES.HOME;
    this.history = [ROUTES.HOME];
  }

  /**
   * Navigate to a level
   */
  goToLevel(level) {
    // Hide all levels
    const levels = document.querySelectorAll('.level-container');
    levels.forEach((el) => el.classList.remove('active'));

    // Show target level
    const targetLevel = document.getElementById(level);
    if (targetLevel) {
      targetLevel.classList.add('active');
      this.currentLevel = level;
      this.history.push(level);
      store.setState({ currentLevel: level });
    }
  }

  /**
   * Go back to previous level
   */
  goBack() {
    if (this.history.length > 1) {
      this.history.pop();
      const previousLevel = this.history[this.history.length - 1];
      this.goToLevel(previousLevel);
      
      // Update breadcrumbs
      const breadcrumbs = store.get('breadcrumbs');
      if (breadcrumbs.length > 1) {
        breadcrumbs.pop();
        store.updateBreadcrumbs(breadcrumbs);
      }
    }
  }

  /**
   * Go to home
   */
  goHome() {
    this.history = [ROUTES.HOME];
    this.goToLevel(ROUTES.HOME);
    store.setState({
      region: '',
      type: '',
      warehouse: '',
      date: '',
      checkType: '',
      incidentCategory: '',
      incidentType: '',
      appealType: '',
      breadcrumbs: ['Главная'],
    });
  }

  /**
   * Get current level
   */
  getCurrentLevel() {
    return this.currentLevel;
  }

  /**
   * Check if can go back
   */
  canGoBack() {
    return this.history.length > 1;
  }
}

// Create and export singleton instance
export const router = new Router();

// Export class for testing
export { Router };
