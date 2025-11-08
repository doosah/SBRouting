/**
 * Constants and configuration
 */

// Month names
export const MONTH_NAMES = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

// Weekday names
export const WEEKDAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// Violator types
export const VIOLATOR_TYPES = [
  'OzonJob',
  'Штат',
  'Курьер',
  'Селлер/поставщик',
  'Транспортная компания',
  'ПВЗ',
  'Клининг',
  'ЧОП',
];

// Incident categories
export const INCIDENT_CATEGORIES = [
  'Хищение',
  'Недостача',
  'Мошенничество',
  'ДТП',
  'Пожар',
  'Порча имущества',
  'Травматизм',
  'Нарушение КТ',
  'Нарушение ПП',
  'Другое',
  'Конфликт',
  'Противоправные действия',
  'Наркотики',
];

// Check types
export const CHECK_TYPES = {
  CAMERA: 'Проверка камер',
  FIRE: 'Проверка ПБ',
  KT: 'Проверка КТ',
  SECURITY: 'Проверка СБ',
  COMPLEX: 'Комплексная проверка',
};

// Appeal types
export const APPEAL_TYPES = {
  CLIENT: 'Обращение клиента',
  INTERNAL: 'Внутреннее обращение',
  HOTLINE: 'Горячая линия',
  OTHER: 'Другое',
};

// Report types
export const REPORT_TYPES = {
  INCIDENT: 'incident',
  CHECK: 'check',
  APPEAL: 'appeal',
  INVESTIGATION: 'investigation',
  ACTIVITY: 'activity',
};

// Calendar periods
export const CALENDAR_PERIODS = {
  WEEK: 'week',
  MONTH: 'month',
};

// Storage keys
export const STORAGE_KEYS = {
  INCIDENTS: 'sbReports_incidents',
  CHECKS: 'sbReports_checks',
  APPEALS: 'sbReports_appeals',
  INVESTIGATIONS: 'sbReports_investigations',
  ACTIVITIES: 'sbReports_activities',
  TEST_DATA: 'sbReports_testData',
  STATE: 'sbReports_state',
};

// Local storage key (legacy)
export const LOCAL_STORAGE_KEY = 'sbReports';

// Application routes
export const ROUTES = {
  HOME: 'level1',
  REGIONS: 'level2',
  TYPES: 'level3',
  WAREHOUSES: 'level4',
  FORM: 'level5',
  SUMMARY: 'summary',
};
