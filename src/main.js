/**
 * Main Application Entry Point
 */

import { store } from './core/state/store.js';
import { router } from './core/router/index.js';
import { initBreadcrumb } from './components/navigation/Breadcrumb.js';
import { getRegions, getWarehouseTypes, getWarehouses } from './data/warehouses.js';
import { Button } from './components/common/Button.js';
import * as storage from './core/storage/localStorage.js';
import { STORAGE_KEYS } from './data/constants.js';

/**
 * Initialize application
 */
function initApp() {
  console.log('🚀 Initializing SBReport v2.0...');

  // Initialize breadcrumb
  initBreadcrumb('breadcrumb');

  // Setup event listeners
  setupEventListeners();

  // Load data from localStorage
  loadData();

  // Update dashboard
  updateDashboard();

  console.log('✅ Application initialized successfully');
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Back button
  const backButton = document.getElementById('backButton');
  if (backButton) {
    backButton.addEventListener('click', () => {
      router.goBack();
      updateBackButton();
    });
  }

  // Main report button
  const mainReportBtn = document.getElementById('mainReportBtn');
  if (mainReportBtn) {
    mainReportBtn.addEventListener('click', () => {
      showRegionSelection();
    });
  }

  // Summary button
  const summaryBtn = document.getElementById('summaryBtn');
  if (summaryBtn) {
    summaryBtn.addEventListener('click', () => {
      showSummary();
    });
  }

  // Reset data button
  const resetDataBtn = document.getElementById('resetDataBtn');
  if (resetDataBtn) {
    resetDataBtn.addEventListener('click', () => {
      resetTestData();
    });
  }

  // Subscribe to state changes
  store.subscribe((newState, oldState) => {
    // Update back button visibility
    updateBackButton();
  });
}

/**
 * Update back button visibility
 */
function updateBackButton() {
  const backButton = document.getElementById('backButton');
  if (backButton) {
    backButton.style.display = router.canGoBack() ? 'block' : 'none';
  }
}

/**
 * Show region selection
 */
function showRegionSelection() {
  const regions = getRegions();
  const container = document.getElementById('regionButtons');
  container.innerHTML = '';

  regions.forEach((region) => {
    const button = new Button({
      text: region,
      className: 'main-button region-button',
      onClick: () => {
        store.setState({ region });
        store.addBreadcrumb(region);
        showTypeSelection(region);
      },
    });
    button.mount(container);
  });

  router.goToLevel('level2');
  store.addBreadcrumb('Выбор региона');
}

/**
 * Show type selection
 */
function showTypeSelection(region) {
  const types = getWarehouseTypes(region);
  const container = document.getElementById('typeButtons');
  container.innerHTML = '';

  types.forEach((type) => {
    const button = new Button({
      text: type,
      className: 'main-button type-button',
      onClick: () => {
        store.setState({ type });
        store.addBreadcrumb(type);
        showWarehouseSelection(region, type);
      },
    });
    button.mount(container);
  });

  router.goToLevel('level3');
  store.addBreadcrumb('Выбор типа');
}

/**
 * Show warehouse selection
 */
function showWarehouseSelection(region, type) {
  const warehouses = getWarehouses(region, type);
  const container = document.getElementById('warehouseList');
  container.innerHTML = '';

  warehouses.forEach((warehouse) => {
    const item = document.createElement('div');
    item.className = 'warehouse-item';
    item.textContent = warehouse;
    item.addEventListener('click', () => {
      store.setState({ warehouse });
      store.addBreadcrumb(warehouse);
      showFormSelection();
    });
    container.appendChild(item);
  });

  router.goToLevel('level4');
  store.addBreadcrumb('Выбор склада');
}

/**
 * Show form selection
 */
function showFormSelection() {
  const container = document.getElementById('formTypeButtons');
  container.innerHTML = '';

  const formTypes = [
    { text: '📝 Инцидент', value: 'incident' },
    { text: '✓ Проверка СБ', value: 'check' },
    { text: '📞 Обращение', value: 'appeal' },
    { text: '🔍 Расследование', value: 'investigation' },
    { text: '👮 Мероприятия СБ-ЧОППК', value: 'activity' },
  ];

  formTypes.forEach(({ text, value }) => {
    const button = new Button({
      text,
      className: 'main-button',
      onClick: () => {
        showForm(value);
      },
    });
    button.mount(container);
  });

  router.goToLevel('level5');
  store.addBreadcrumb('Выбор отчета');
}

/**
 * Show form
 */
function showForm(formType) {
  const container = document.getElementById('formContainer');
  container.innerHTML = `
    <div class="form-container">
      <h2>Форма: ${formType}</h2>
      <p>Форма будет реализована в следующей итерации</p>
      <button class="submit-button" onclick="alert('Функционал в разработке')">
        Отправить отчет
      </button>
    </div>
  `;
}

/**
 * Show summary
 */
function showSummary() {
  const container = document.getElementById('summaryContent');
  container.innerHTML = `
    <div class="summary-page">
      <h1 class="summary-title">Свод по РФ</h1>
      <p class="summary-meta">Сводная аналитика по всем регионам</p>
      <div class="summary-section">
        <h3>Статистика</h3>
        <p>Данные будут загружены из localStorage в следующей итерации</p>
      </div>
    </div>
  `;
  router.goToLevel('summary');
  store.updateBreadcrumbs(['Главная', 'Свод по РФ']);
}

/**
 * Load data from localStorage
 */
function loadData() {
  const incidents = storage.load(STORAGE_KEYS.INCIDENTS, []);
  const checks = storage.load(STORAGE_KEYS.CHECKS, []);
  const appeals = storage.load(STORAGE_KEYS.APPEALS, []);
  const investigations = storage.load(STORAGE_KEYS.INVESTIGATIONS, []);

  console.log('📊 Data loaded:', {
    incidents: incidents.length,
    checks: checks.length,
    appeals: appeals.length,
    investigations: investigations.length,
  });
}

/**
 * Update dashboard
 */
function updateDashboard() {
  const investigations = storage.load(STORAGE_KEYS.INVESTIGATIONS, []);
  const incidents = storage.load(STORAGE_KEYS.INCIDENTS, []);

  // Update investigations stats
  let totalWorked = 0;
  let totalDetected = 0;
  let totalReturned = 0;

  investigations.forEach((inv) => {
    totalWorked += inv.workedAmount || 0;
    totalDetected += inv.detectedDamage || 0;
    totalReturned += inv.returnedAmount || 0;
  });

  const totalDelta = totalDetected - totalReturned;
  const percentReturned = totalDetected > 0 ? (totalReturned / totalDetected) * 100 : 0;

  document.getElementById('globalTotalInvestigations').textContent = investigations.length;
  document.getElementById('globalTotalWorked').textContent = `${totalWorked.toLocaleString('ru-RU')} ₽`;
  document.getElementById('globalTotalDetected').textContent = `${totalDetected.toLocaleString('ru-RU')} ₽`;
  document.getElementById('globalTotalReturned').textContent = `${totalReturned.toLocaleString('ru-RU')} ₽`;
  document.getElementById('globalTotalDelta').textContent = `${totalDelta.toLocaleString('ru-RU')} ₽`;
  document.getElementById('globalPercentReturned').textContent = `${percentReturned.toFixed(1)}%`;

  // Update incidents table
  document.getElementById('globalIncidentTotal').textContent = incidents.length;

  // Group incidents by category
  const incidentsByCategory = {};
  incidents.forEach((inc) => {
    const category = inc.category || 'Другое';
    if (!incidentsByCategory[category]) {
      incidentsByCategory[category] = {
        count: 0,
        regions: new Set(),
      };
    }
    incidentsByCategory[category].count++;
    if (inc.region) {
      incidentsByCategory[category].regions.add(inc.region);
    }
  });

  const tableBody = document.getElementById('globalIncidentTable');
  if (Object.keys(incidentsByCategory).length === 0) {
    tableBody.innerHTML = '<tr><td colspan="3" class="empty">Нет данных</td></tr>';
  } else {
    tableBody.innerHTML = Object.entries(incidentsByCategory)
      .sort((a, b) => b[1].count - a[1].count)
      .map(([category, data]) => `
        <tr>
          <td>${category}</td>
          <td>${data.count}</td>
          <td>${Array.from(data.regions).join(', ') || '—'}</td>
        </tr>
      `)
      .join('');
  }
}

/**
 * Reset test data
 */
function resetTestData() {
  if (confirm('Вы уверены, что хотите сбросить все данные?')) {
    storage.clear();
    console.log('🗑️ All data cleared');
    alert('Данные успешно сброшены!');
    location.reload();
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Export for global access (for debugging)
window.sbReport = {
  store,
  router,
  storage,
};
