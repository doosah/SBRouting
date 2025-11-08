/**
 * State management - Global application state
 */

class Store {
  constructor(initialState = {}) {
    this.state = {
      region: '',
      type: '',
      warehouse: '',
      date: '',
      period: 'month',
      calendarDate: new Date(),
      selectedDate: null,
      checkType: '',
      incidentCategory: '',
      incidentType: '',
      appealType: '',
      breadcrumbs: ['Главная'],
      currentLevel: 'level1',
      ...initialState,
    };
    this.listeners = [];
  }

  /**
   * Get current state
   */
  getState() {
    return { ...this.state };
  }

  /**
   * Get specific state value
   */
  get(key) {
    return this.state[key];
  }

  /**
   * Set state value(s)
   */
  setState(updates) {
    const oldState = { ...this.state };
    this.state = { ...this.state, ...updates };
    this.notify(oldState, this.state);
  }

  /**
   * Reset state to initial values
   */
  reset() {
    this.state = {
      region: '',
      type: '',
      warehouse: '',
      date: '',
      period: 'month',
      calendarDate: new Date(),
      selectedDate: null,
      checkType: '',
      incidentCategory: '',
      incidentType: '',
      appealType: '',
      breadcrumbs: ['Главная'],
      currentLevel: 'level1',
    };
    this.notify({}, this.state);
  }

  /**
   * Subscribe to state changes
   */
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  /**
   * Notify all listeners about state change
   */
  notify(oldState, newState) {
    this.listeners.forEach((listener) => listener(newState, oldState));
  }

  /**
   * Update breadcrumbs
   */
  updateBreadcrumbs(breadcrumbs) {
    this.setState({ breadcrumbs });
  }

  /**
   * Add breadcrumb
   */
  addBreadcrumb(item) {
    const breadcrumbs = [...this.state.breadcrumbs, item];
    this.setState({ breadcrumbs });
  }

  /**
   * Go to breadcrumb level
   */
  goToBreadcrumb(index) {
    const breadcrumbs = this.state.breadcrumbs.slice(0, index + 1);
    this.setState({ breadcrumbs });
  }
}

// Create and export singleton instance
export const store = new Store();

// Export class for testing
export { Store };
