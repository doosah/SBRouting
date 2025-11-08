# 📦 Миграция с v1.0 на v2.0

## Обзор изменений

Проект был полностью рефакторен с монолитной архитектуры на модульную. Этот документ поможет понять, как мигрировать существующий функционал.

---

## 🔄 Структурные изменения

### Было (v1.0):
```
SBReport/
├── sb-report.html
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js (2690 строк)
```

### Стало (v2.0):
```
src/
├── index.html
├── main.js (250 строк)
├── core/
│   ├── state/
│   ├── router/
│   └── storage/
├── components/
├── data/
└── utils/
```

---

## 📝 Таблица соответствий

### Global State

**v1.0:**
```javascript
const state = {
    region: '',
    type: '',
    warehouse: '',
    // ...
};
```

**v2.0:**
```javascript
import { store } from '@core/state/store';

// Get state
const region = store.get('region');

// Set state
store.setState({ region: 'СЗФО' });

// Subscribe to changes
store.subscribe((newState, oldState) => {
    console.log('Changed:', newState);
});
```

---

### Warehouses Data

**v1.0:**
```javascript
const warehouses = {
    'СЗФО': {
        'FullFilment': [...],
        'Логистика': [...]
    },
    // ...
};
```

**v2.0:**
```javascript
import { 
    getRegions, 
    getWarehouseTypes, 
    getWarehouses 
} from '@data/warehouses';

const regions = getRegions();
const types = getWarehouseTypes('СЗФО');
const warehouses = getWarehouses('СЗФО', 'FullFilment');
```

---

### LocalStorage Operations

**v1.0:**
```javascript
// Сохранение
localStorage.setItem('key', JSON.stringify(data));

// Загрузка
const data = JSON.parse(localStorage.getItem('key'));
```

**v2.0:**
```javascript
import * as storage from '@core/storage/localStorage';

// Сохранение (с обработкой ошибок)
storage.save('key', data);

// Загрузка (с default значением)
const data = storage.load('key', defaultValue);

// Проверка существования
if (storage.has('key')) { /* ... */ }

// Удаление
storage.remove('key');

// Очистка всего
storage.clear();
```

---

### Navigation / Routing

**v1.0:**
```javascript
function goToLevel(level) {
    // Hide all
    document.querySelectorAll('.level-container').forEach(el => {
        el.classList.remove('active');
    });
    // Show target
    document.getElementById(level).classList.add('active');
}

function goBack() {
    // Custom logic...
}
```

**v2.0:**
```javascript
import { router } from '@core/router';

// Navigate to level
router.goToLevel('level2');

// Go back
router.goBack();

// Go home
router.goHome();

// Check if can go back
if (router.canGoBack()) { /* ... */ }

// Get current level
const level = router.getCurrentLevel();
```

---

### Breadcrumb Updates

**v1.0:**
```javascript
state.breadcrumbs.push('New Item');
updateBreadcrumb();

function updateBreadcrumb() {
    const container = document.getElementById('breadcrumb');
    container.innerHTML = '';
    state.breadcrumbs.forEach((item, index) => {
        // Manual DOM manipulation...
    });
}
```

**v2.0:**
```javascript
import { store } from '@core/state/store';

// Add breadcrumb
store.addBreadcrumb('New Item');

// Update breadcrumbs
store.updateBreadcrumbs(['Главная', 'Регион', 'Тип']);

// Go to breadcrumb level
store.goToBreadcrumb(1);

// Breadcrumb component updates automatically via subscription
```

---

### Creating Buttons

**v1.0:**
```javascript
const button = document.createElement('button');
button.className = 'main-button';
button.textContent = 'Click Me';
button.addEventListener('click', () => {
    // handler
});
container.appendChild(button);
```

**v2.0:**
```javascript
import { Button } from '@components/common/Button';

const button = new Button({
    text: 'Click Me',
    className: 'main-button',
    onClick: () => {
        // handler
    }
});

button.mount(container);
// или
button.mount('#container-id');
```

---

### Validation

**v1.0:**
```javascript
if (!email || email.trim() === '') {
    alert('Email is required');
    return;
}
if (!email.includes('@')) {
    alert('Invalid email format');
    return;
}
```

**v2.0:**
```javascript
import { required, email, compose } from '@utils/validators';

// Single validator
const error = required(value);
if (error) {
    alert(error);
    return;
}

// Compose validators
const validateEmail = compose(required, email);
const error = validateEmail(emailValue);
if (error) {
    alert(error);
    return;
}

// Validate entire form
const { isValid, errors } = validateForm(fields, {
    email: [required, email],
    phone: [required, phone],
});
if (!isValid) {
    console.error('Validation errors:', errors);
    return;
}
```

---

### Formatting

**v1.0:**
```javascript
// Currency
const formatted = amount.toLocaleString('ru-RU') + ' ₽';

// Date
const d = new Date(date);
const day = String(d.getDate()).padStart(2, '0');
const month = String(d.getMonth() + 1).padStart(2, '0');
const year = d.getFullYear();
const formatted = `${day}.${month}.${year}`;

// Number
const formatted = number.toLocaleString('ru-RU');
```

**v2.0:**
```javascript
import { 
    formatCurrency, 
    formatDate, 
    formatNumber,
    formatPercent 
} from '@utils/formatters';

// Currency
const formatted = formatCurrency(1500000); // "1 500 000 ₽"

// Date
const formatted = formatDate(new Date()); // "08.11.2025"

// Number
const formatted = formatNumber(12345.67, 2); // "12 345,67"

// Percent
const formatted = formatPercent(85.5); // "85.5%"
```

---

### Helper Functions

**v1.0:**
```javascript
// Generate ID
const id = Date.now() + '-' + Math.random().toString(36).substr(2, 9);

// Deep clone
const cloned = JSON.parse(JSON.stringify(obj));

// Debounce
let timeout;
function debounce(func, wait) {
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
```

**v2.0:**
```javascript
import { 
    generateId, 
    deepClone, 
    debounce,
    sortBy,
    groupBy,
    unique 
} from '@utils/helpers';

// Generate ID
const id = generateId();

// Deep clone
const cloned = deepClone(obj);

// Debounce
const debouncedFn = debounce(myFunction, 300);

// Sort array of objects
const sorted = sortBy(array, 'name', 'asc');

// Group by key
const grouped = groupBy(array, 'category');

// Get unique values
const uniqueValues = unique(array);
```

---

## 🔧 Пошаговая миграция функционала

### Шаг 1: Миграция состояния

1. Найти все места, где используется `state`
2. Заменить на `store.get()` и `store.setState()`
3. Добавить подписки где нужно

```javascript
// До
state.region = 'СЗФО';

// После
import { store } from '@core/state/store';
store.setState({ region: 'СЗФО' });
```

### Шаг 2: Миграция навигации

1. Найти все вызовы `goToLevel()`, `goBack()`
2. Заменить на методы `router`

```javascript
// До
goToLevel('level2');

// После
import { router } from '@core/router';
router.goToLevel('level2');
```

### Шаг 3: Миграция данных

1. Переместить константы в `data/constants.js`
2. Использовать функции из `data/warehouses.js`

```javascript
// До
const regions = Object.keys(warehouses);

// После
import { getRegions } from '@data/warehouses';
const regions = getRegions();
```

### Шаг 4: Миграция UI компонентов

1. Заменить ручное создание элементов на компоненты
2. Использовать классы компонентов

```javascript
// До
const button = document.createElement('button');
button.className = 'main-button';
button.textContent = 'Click';
button.addEventListener('click', handler);
container.appendChild(button);

// После
import { Button } from '@components/common/Button';
new Button({ text: 'Click', onClick: handler }).mount(container);
```

### Шаг 5: Миграция валидации

1. Заменить inline проверки на валидаторы
2. Использовать `validateForm()` для форм

```javascript
// До
if (!value) {
    alert('Required');
    return;
}

// После
import { required } from '@utils/validators';
const error = required(value);
if (error) {
    alert(error);
    return;
}
```

---

## 📊 Статистика улучшений

| Метрика | v1.0 | v2.0 | Изменение |
|---------|------|------|-----------|
| Строк в main.js | 2690 | 250 | ↓ 91% |
| Количество файлов | 3 | 25+ | ↑ 733% |
| Модульность | 0% | 100% | ✅ |
| Переиспользование кода | Низкое | Высокое | ✅ |
| Тестируемость | Сложно | Легко | ✅ |
| Поддерживаемость | ⚠️ | ✅ | ✅ |
| Масштабируемость | ⚠️ | ✅ | ✅ |

---

## 🎯 Чеклист миграции

- [ ] Установлены зависимости (`npm install`)
- [ ] Проект запускается (`npm run dev`)
- [ ] Мигрировано глобальное состояние (state → store)
- [ ] Мигрирована навигация (функции → router)
- [ ] Мигрированы данные (глобальные переменные → модули)
- [ ] Мигрированы компоненты (DOM manipulation → классы)
- [ ] Мигрирована валидация (inline → validators)
- [ ] Мигрировано форматирование (inline → formatters)
- [ ] Мигрирован LocalStorage (прямые вызовы → storage модуль)
- [ ] Обновлены import'ы (относительные пути → алиасы)
- [ ] Проверена работа всех функций
- [ ] Написаны тесты (опционально, но рекомендуется)

---

## 🚨 Возможные проблемы и решения

### Проблема 1: "Cannot find module"

**Причина:** Неправильные import пути

**Решение:**
```javascript
// ❌ Не работает
import { store } from './core/state/store';

// ✅ Работает (используйте алиасы)
import { store } from '@core/state/store';
```

### Проблема 2: "store is not defined"

**Причина:** Забыли импортировать

**Решение:**
```javascript
// Добавьте в начало файла
import { store } from '@core/state/store';
```

### Проблема 3: Старые данные в localStorage

**Причина:** v1.0 использовал другой формат

**Решение:**
```javascript
import * as storage from '@core/storage/localStorage';

// Очистить старые данные
storage.clear();

// Или мигрировать
const oldData = JSON.parse(localStorage.getItem('sbReports'));
if (oldData) {
    storage.save('sbReports_incidents', oldData.incidents || []);
    storage.save('sbReports_checks', oldData.checks || []);
    // ...
    localStorage.removeItem('sbReports');
}
```

### Проблема 4: Компоненты не рендерятся

**Причина:** Не вызван `.render()` или `.mount()`

**Решение:**
```javascript
// ❌ Неправильно
const button = new Button({ text: 'Click' });

// ✅ Правильно
const button = new Button({ text: 'Click' });
button.mount('#container');

// Или
const element = button.render();
container.appendChild(element);
```

---

## 📚 Дополнительные ресурсы

- [ROADMAP.md](ROADMAP.md) — План дальнейшего развития
- [README_v2.md](README_v2.md) — Документация v2.0
- [ANALYSIS.md](ANALYSIS.md) — Анализ проблем v1.0

---

## 🎉 Заключение

Миграция на v2.0 дает:

✅ Чистый и поддерживаемый код  
✅ Модульную архитектуру  
✅ Переиспользуемые компоненты  
✅ Готовность к тестированию  
✅ Масштабируемость  

**Время миграции:** 2-4 часа для основного функционала

**Удачи в миграции! 🚀**
