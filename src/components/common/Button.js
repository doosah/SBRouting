/**
 * Reusable Button component
 */

export class Button {
  constructor(options = {}) {
    this.text = options.text || '';
    this.className = options.className || 'main-button';
    this.onClick = options.onClick || (() => {});
    this.type = options.type || 'button';
    this.disabled = options.disabled || false;
    this.icon = options.icon || '';
  }

  /**
   * Render button element
   */
  render() {
    const button = document.createElement('button');
    button.type = this.type;
    button.className = this.className;
    button.textContent = `${this.icon} ${this.text}`.trim();
    button.disabled = this.disabled;
    
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (!this.disabled) {
        this.onClick(e);
      }
    });

    return button;
  }

  /**
   * Create button and append to container
   */
  mount(container) {
    const element = this.render();
    if (typeof container === 'string') {
      document.querySelector(container).appendChild(element);
    } else {
      container.appendChild(element);
    }
    return element;
  }

  /**
   * Enable button
   */
  enable() {
    this.disabled = false;
  }

  /**
   * Disable button
   */
  disable() {
    this.disabled = true;
  }

  /**
   * Update button text
   */
  setText(text) {
    this.text = text;
  }
}

/**
 * Create button helper
 */
export const createButton = (options) => {
  return new Button(options);
};
