# 🗺️ План развития проекта SBReport

## 📅 Дорожная карта: От прототипа к production

---

## Этап 1: Подготовка (1 неделя)

### ✅ Задачи

#### 1.1 Создание рабочей среды
```bash
# Инициализация Git-flow
git branch develop
git branch feature/refactoring

# Создание структуры проекта
mkdir -p {src,tests,docs,config}
npm init -y

# Установка основных инструментов
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev babel-loader @babel/core @babel/preset-env
npm install --save-dev eslint prettier husky
npm install --save-dev jest @testing-library/jest-dom
```

#### 1.2 Настройка линтеров и форматирования
```json
// .eslintrc.json
{
  "extends": ["eslint:recommended"],
  "env": {
    "browser": true,
    "es2021": true
  },
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error"
  }
}
```

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

#### 1.3 Документация
- [ ] Создать CONTRIBUTING.md
- [ ] Создать CODE_OF_CONDUCT.md
- [ ] Описать архитектуру в ARCHITECTURE.md
- [ ] Создать API_SPEC.md для будущего API

**Результат:** Подготовленная среда разработки

---

## Этап 2: Рефакторинг Frontend (2-3 недели)

### 🎯 Цель: Модульная архитектура

### Неделя 1: Разделение на модули

#### 2.1 Создание структуры
```
src/
├── index.html
├── main.js
├── core/
│   ├── state/
│   │   ├── index.js
│   │   ├── store.js
│   │   └── actions.js
│   ├── router/
│   │   ├── index.js
│   │   └── routes.js
│   └── storage/
│       ├── index.js
│       └── localStorage.js
├── components/
│   ├── navigation/
│   │   ├── Breadcrumb.js
│   │   ├── LevelNavigation.js
│   │   └── BackButton.js
│   ├── calendar/
│   │   ├── Calendar.js
│   │   ├── CalendarGrid.js
│   │   └── CalendarControls.js
│   ├── forms/
│   │   ├── IncidentForm.js
│   │   ├── CheckForm.js
│   │   ├── AppealForm.js
│   │   └── InvestigationForm.js
│   ├── charts/
│   │   ├── ChartContainer.js
│   │   └── chartConfig.js
│   ├── filters/
│   │   ├── FilterPanel.js
│   │   └── FilterChip.js
│   └── common/
│       ├── Button.js
│       ├── Card.js
│       └── Table.js
├── data/
│   ├── warehouses.js
│   ├── incidents.js
│   ├── checkTypes.js
│   └── constants.js
├── utils/
│   ├── helpers.js
│   ├── validators.js
│   ├── formatters.js
│   └── dateUtils.js
└── styles/
    ├── main.css
    ├── components/
    └── variables.css
```

#### 2.2 Миграция кода (по порядку)
1. **День 1-2:** Вынести данные складов в `data/warehouses.js`
2. **День 3:** Создать `core/state/store.js` для управления состоянием
3. **День 4-5:** Разделить календарь на компоненты
4. **День 6-7:** Разделить формы на отдельные модули

### Неделя 2: Компоненты и утилиты

#### 2.3 Создание переиспользуемых компонентов
```javascript
// src/components/common/Button.js
export class Button {
  constructor(text, type = 'primary', onClick) {
    this.text = text;
    this.type = type;
    this.onClick = onClick;
  }

  render() {
    const button = document.createElement('button');
    button.className = `button button--${this.type}`;
    button.textContent = this.text;
    button.addEventListener('click', this.onClick);
    return button;
  }
}
```

#### 2.4 Утилиты
```javascript
// src/utils/validators.js
export const validators = {
  required: (value) => !!value || 'Поле обязательно',
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Неверный email',
  phone: (value) => /^\+?[0-9]{10,11}$/.test(value) || 'Неверный телефон',
};

// src/utils/formatters.js
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(amount);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('ru-RU').format(new Date(date));
};
```

### Неделя 3: Интеграция и тестирование

#### 2.5 Настройка Webpack
```javascript
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
  },
};
```

#### 2.6 Написание unit тестов
```javascript
// tests/utils/validators.test.js
import { validators } from '../../src/utils/validators';

describe('Validators', () => {
  describe('required', () => {
    it('should return error for empty value', () => {
      expect(validators.required('')).toBeTruthy();
      expect(validators.required(null)).toBeTruthy();
    });

    it('should pass for non-empty value', () => {
      expect(validators.required('test')).toBe(true);
    });
  });
});
```

**Результат:** Модульная архитектура с переиспользуемыми компонентами

---

## Этап 3: Backend разработка (3-4 недели)

### 🎯 Цель: REST API + База данных

### Неделя 1: Проектирование и настройка

#### 3.1 Выбор технологий
```javascript
// Рекомендуемый стек:
- Node.js 18+
- Express.js / Fastify
- PostgreSQL 14+
- Prisma ORM
- JWT для аутентификации
- bcrypt для хеширования паролей
```

#### 3.2 Структура backend
```
backend/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── environment.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── reportController.js
│   │   ├── warehouseController.js
│   │   └── summaryController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Report.js
│   │   ├── Incident.js
│   │   └── Warehouse.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── reports.js
│   │   ├── warehouses.js
│   │   └── summary.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── reportService.js
│   │   └── analyticsService.js
│   └── utils/
│       ├── jwt.js
│       └── logger.js
├── tests/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── .env.example
├── package.json
└── README.md
```

#### 3.3 Схема базы данных
```prisma
// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  name      String
  role      Role     @default(USER)
  region    String?
  reports   Report[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  ADMIN
  MANAGER
  USER
  VIEWER
}

model Report {
  id             String       @id @default(uuid())
  type           ReportType
  region         String
  warehouse      String
  date           DateTime
  data           Json
  userId         String
  user           User         @relation(fields: [userId], references: [id])
  createdAt      DateTime     @default(now())
  updatedAt      DateTime     @updatedAt
}

enum ReportType {
  INCIDENT
  CHECK
  APPEAL
  INVESTIGATION
}

model Incident {
  id            String   @id @default(uuid())
  reportId      String
  category      String
  subcategory   String?
  description   String
  financialLoss Float?
  resolved      Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Warehouse {
  id        String   @id @default(uuid())
  name      String
  region    String
  type      String   // "FullFilment" | "Логистика"
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Неделя 2-3: Разработка API

#### 3.4 Аутентификация
```javascript
// src/controllers/authController.js
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const register = async (req, res) => {
  try {
    const { email, password, name, region } = req.body;

    // Проверка существования пользователя
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Пользователь уже существует' });
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание пользователя
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        region,
      },
    });

    // Генерация токена
    const token = generateToken({ id: user.id, email: user.email });

    res.status(201).json({
      user: { id: user.id, email: user.email, name: user.name },
      token,
    });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при регистрации' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Поиск пользователя
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Неверные credentials' });
    }

    // Проверка пароля
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Неверные credentials' });
    }

    // Генерация токена
    const token = generateToken({ id: user.id, email: user.email });

    res.json({
      user: { id: user.id, email: user.email, name: user.name },
      token,
    });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при входе' });
  }
};

module.exports = { register, login };
```

#### 3.5 CRUD для отчетов
```javascript
// src/controllers/reportController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createReport = async (req, res) => {
  try {
    const { type, region, warehouse, date, data } = req.body;
    const userId = req.user.id; // Из middleware

    const report = await prisma.report.create({
      data: {
        type,
        region,
        warehouse,
        date: new Date(date),
        data,
        userId,
      },
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при создании отчета' });
  }
};

const getReports = async (req, res) => {
  try {
    const { region, type, startDate, endDate } = req.query;
    const userId = req.user.id;

    const where = { userId };
    if (region) where.region = region;
    if (type) where.type = type;
    if (startDate && endDate) {
      where.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    const reports = await prisma.report.findMany({
      where,
      include: { user: { select: { name: true, email: true } } },
      orderBy: { createdAt: 'desc' },
    });

    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении отчетов' });
  }
};

// ... другие CRUD операции

module.exports = { createReport, getReports /* ... */ };
```

### Неделя 4: Тестирование и документация

#### 3.6 API тесты
```javascript
// tests/api/reports.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Reports API', () => {
  let authToken;

  beforeAll(async () => {
    // Авторизация
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@test.com', password: 'password' });
    authToken = response.body.token;
  });

  describe('POST /api/reports', () => {
    it('should create a new report', async () => {
      const response = await request(app)
        .post('/api/reports')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          type: 'INCIDENT',
          region: 'СЗФО',
          warehouse: 'ПСЦ Колпино',
          date: '2025-11-08',
          data: { category: 'Хищение' },
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
    });
  });
});
```

#### 3.7 API документация (Swagger)
```javascript
// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SBReport API',
      version: '1.0.0',
      description: 'API для системы отчетности СБ',
    },
    servers: [
      { url: 'http://localhost:5000', description: 'Development' },
      { url: 'https://api.sbreport.com', description: 'Production' },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsDoc(options);
module.exports = specs;
```

**Результат:** Полноценный REST API с аутентификацией и базой данных

---

## Этап 4: Безопасность (1 неделя)

### 🎯 Цель: Защита приложения

### 4.1 Middleware для безопасности
```javascript
// src/middleware/security.js
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

// Helmet для безопасных headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100, // максимум 100 запросов
  message: 'Слишком много запросов, попробуйте позже',
});
app.use('/api', limiter);

// Защита от NoSQL injection
app.use(mongoSanitize());

// Защита от XSS
app.use(xss());
```

### 4.2 Валидация входящих данных
```javascript
// src/middleware/validation.js
const { body, validationResult } = require('express-validator');

const validateReport = [
  body('type').isIn(['INCIDENT', 'CHECK', 'APPEAL', 'INVESTIGATION']),
  body('region').trim().notEmpty(),
  body('warehouse').trim().notEmpty(),
  body('date').isISO8601(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateReport };
```

### 4.3 CORS конфигурация
```javascript
// src/config/cors.js
const cors = require('cors');

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
```

### 4.4 Логирование
```javascript
// src/utils/logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console());
}

module.exports = logger;
```

**Результат:** Защищенное приложение с валидацией и логированием

---

## Этап 5: Интеграция Frontend ↔ Backend (1 неделя)

### 🎯 Цель: Связать frontend с backend

### 5.1 API клиент
```javascript
// src/services/api.js
class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('authToken');
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async get(endpoint) {
    return this.request(endpoint);
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

export default new ApiClient(process.env.API_URL || 'http://localhost:5000/api');
```

### 5.2 Сервисы для работы с данными
```javascript
// src/services/reportService.js
import api from './api';

export const reportService = {
  async createReport(reportData) {
    return await api.post('/reports', reportData);
  },

  async getReports(filters = {}) {
    const query = new URLSearchParams(filters).toString();
    return await api.get(`/reports?${query}`);
  },

  async getReportById(id) {
    return await api.get(`/reports/${id}`);
  },

  async updateReport(id, data) {
    return await api.put(`/reports/${id}`, data);
  },

  async deleteReport(id) {
    return await api.delete(`/reports/${id}`);
  },

  async getSummary(filters) {
    const query = new URLSearchParams(filters).toString();
    return await api.get(`/summary?${query}`);
  },
};
```

### 5.3 Миграция с LocalStorage
```javascript
// src/utils/migration.js
import { reportService } from '../services/reportService';

export async function migrateLocalStorageToBackend() {
  const localData = localStorage.getItem('sbReports');
  if (!localData) return;

  const reports = JSON.parse(localData);
  const results = [];

  for (const report of reports) {
    try {
      const result = await reportService.createReport(report);
      results.push(result);
    } catch (error) {
      console.error('Migration error:', error);
    }
  }

  // Бэкап старых данных
  localStorage.setItem('sbReports_backup', localData);
  
  // Очистка после успешной миграции
  localStorage.removeItem('sbReports');
  
  return results;
}
```

**Результат:** Frontend подключен к backend API

---

## Этап 6: Deployment (1 неделя)

### 🎯 Цель: Развертывание в production

### 6.1 CI/CD (GitHub Actions)
```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: |
          npm ci
          cd backend && npm ci
          
      - name: Run linter
        run: npm run lint
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build

  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}

  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Railway
        uses: bervProject/railway-deploy@v1
        with:
          railway_token: ${{ secrets.RAILWAY_TOKEN }}
          service: backend
```

### 6.2 Docker конфигурация
```dockerfile
# backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  postgres:
    image: postgres:14-alpine
    environment:
      POSTGRES_DB: sbreport
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      DATABASE_URL: postgresql://user:password@postgres:5432/sbreport
      JWT_SECRET: ${JWT_SECRET}
      NODE_ENV: production
    depends_on:
      - postgres

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      API_URL: http://backend:5000/api

volumes:
  postgres_data:
```

### 6.3 Мониторинг
```javascript
// backend/src/monitoring.js
const Sentry = require('@sentry/node');
const prometheus = require('prom-client');

// Sentry для отслеживания ошибок
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Prometheus метрики
const register = new prometheus.Registry();
prometheus.collectDefaultMetrics({ register });

const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
});
register.registerMetric(httpRequestDuration);

module.exports = { Sentry, register, httpRequestDuration };
```

**Результат:** Приложение развернуто в production с мониторингом

---

## 📊 Контрольные точки (Milestones)

| Milestone | Дата | Критерии успеха |
|-----------|------|-----------------|
| M1: Dev Environment Setup | Неделя 1 | ✅ Настроены инструменты, линтеры, Git-flow |
| M2: Frontend Refactoring | Неделя 4 | ✅ Модульная архитектура, 80%+ покрытие тестами |
| M3: Backend MVP | Неделя 8 | ✅ REST API, база данных, аутентификация |
| M4: Security Hardening | Неделя 9 | ✅ Все уязвимости закрыты, валидация на месте |
| M5: Integration | Неделя 10 | ✅ Frontend работает с backend |
| M6: Production Deploy | Неделя 11 | ✅ Приложение в production, мониторинг настроен |

---

## 🎯 KPI для оценки прогресса

### Код качество
- [ ] Code coverage >= 80%
- [ ] Linter errors = 0
- [ ] Technical debt ratio < 5%

### Производительность
- [ ] Time to Interactive < 3s
- [ ] First Contentful Paint < 1.5s
- [ ] Lighthouse score >= 90

### Безопасность
- [ ] 0 критических уязвимостей (Snyk/OWASP)
- [ ] A+ на SSL Labs
- [ ] Все данные зашифрованы

### Надежность
- [ ] Uptime >= 99.5%
- [ ] Error rate < 1%
- [ ] Response time p95 < 200ms

---

## 📞 Следующие шаги

1. **Сегодня:** Ознакомьтесь с этой дорожной картой
2. **На этой неделе:** Определите приоритеты и ресурсы
3. **Следующая неделя:** Начните с Этапа 1 (Подготовка)
4. **Через месяц:** Завершите рефакторинг frontend
5. **Через 2 месяца:** Запуск в production

---

**Удачи в развитии проекта! 🚀**
