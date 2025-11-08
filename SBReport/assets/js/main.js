        // Global State
        const state = {
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
            breadcrumbs: ['Главная']
        };

        // Warehouses Data
        const warehouses = {
            'СЗФО': {
                'FullFilment': [
                    'ПСЦ Колпино',
                    'ПСЦ Софийская',
                    'ПСЦ Бугры',
                    'ПСЦ Шушары',
                    'ПСЦ Волхонское КГТ',
                    'ПСЦ Шушары КГТ',
                    'МРФЦ Калининград'
                ],
                'Логистика': [
                    'ЛЦ Волхонское',
                    'ЛЦ Горское',
                    'ЛЦ Парголово',
                    'ЛЦ Шушары',
                    'СЦ Петрозаводск',
                    'СЦ Архангельск',
                    'СЦ Сыктывкар',
                    'СЦ Мурманск',
                    'СЦ Великий Новгород',
                    'СЦ Череповец',
                    'СЦ Вологда',
                    'СЦ Псков'
                ]
            },
            'Урал': {
                'FullFilment': [
                    'ПСЦ Оренбург',
                    'ПСЦ Тюмень',
                    'ПСЦ Пермь',
                    'ПСЦ Уфа',
                    'ПСЦ Екатеринбург',
                    'ПСЦ Екатеринбург КГТ'
                ],
                'Логистика': [
                    'ЛЦ Екатеринбург Черняховского',
                    'ЛЦ Екатеринбург',
                    '3PL Курган',
                    'СЦ Нижневартовск',
                    'СЦ Сургут Аграрная',
                    '3PL Новый Уренгой',
                    'СЦ Челябинск Линейная',
                    'СЦ Екатеринбург Пышма',
                    'СЦ Златоуст',
                    'СЦ Магнитогорск Моховая',
                    'СЦ Магнитогорск Красноармейская',
                    'СЦ Миасс',
                    'СЦ Нижневартовск Северный',
                    'СЦ Нижний Тагил Восточное',
                    'СЦ Ноябрьск',
                    'СЦ Октябрьский',
                    'СЦ Оренбург Базовая',
                    'СЦ Оренбург Шевченко',
                    'СЦ Пермь Аэлита',
                    'СЦ Салават',
                    'СЦ Сургут Нефтеюганское',
                    'СЦ Тюмень Тобольского',
                    'СЦ Тюмень Широтная',
                    'ЛЦ Уфа',
                    'СЦ Ханты Мансийск',
                    'СЦ Челябинск Танкограда',
                    'СЦ Челябинск Шагольская',
                    'СЦ Югорск',
                    'СЦ Нижний Тагил Метро',
                    'СЦ Тюмень Победы'
                ]
            },
            'МСК - 1/2': {
                'FullFilment': [
                    'ПСЦ Радумля КГТ',
                    'ПСЦ Минск',
                    'ПСЦ Хоругвино',
                    'ПСЦ Ярославль',
                    'ПСЦ Давыдовское КГТ',
                    'ПСЦ Ногинск',
                    'ПСЦ Новая Рига КГТ',
                    'ПСЦ Петровское',
                    'ПСЦ Истра Петровское',
                    'ПСЦ Тверь',
                    'ПСЦ Пушкино 1',
                    'ПСЦ Пушкино 2'
                ],
                'Логистика': [
                    'СЦ Владимир Хлебозаводская',
                    'СЦ Иваново',
                    'СЦ Ленинградский',
                    'СЦ Черная Грязь',
                    'ЛЦ Молжаниново',
                    'ЛЦ Никольское',
                    'ЛЦ Новая Рига',
                    'ЛЦ Осташковский',
                    'СЦ Скотопрогонная',
                    'СЦ Владимир Мостостроевская',
                    'СЦ Владимир Мещерская',
                    'СЦ Химки',
                    'СЦ Строгино',
                    'СЦ Смоленск Индустриальная',
                    'СЦ Тверь Коняевская 1',
                    'СЦ Тверь Коняевская 2',
                    'СЦ Ярославль',
                    'ЛЦ Истра',
                    'ЛЦ Медведково',
                    'ЛЦ Вешки',
                    'СЦ Тверь',
                    'ЛЦ Пушкино',
                    'ЛЦ Солнечногорск',
                    'СЦ Брянск',
                    'СЦ_Рябиновая',
                    'СЦ Успенский'
                ]
            },
            'МСК - 3/ЮГ': {
                'FullFilment': [
                    'МРФЦ Ереван',
                    'ПСЦ Жуковский',
                    'ПСЦ Домодедово',
                    'ПСЦ Невинномысск',
                    'ПСЦ Краснодар КГТ',
                    'ПСЦ Адыгейск',
                    'МРФЦ Волгоград',
                    'ПСЦ Воронеж',
                    'ПСЦ Воронеж 2',
                    'ПСЦ Воронеж КГТ',
                    'ПСЦ Гривно',
                    'ПСЦ Краснодар',
                    'ПСЦ Махачкала',
                    'ПСЦ Новороссийск',
                    'ПСЦ Ростов',
                    'ПСЦ Софьино',
                    'ПСЦ Краснодар 2'
                ],
                'Логистика': [
                    'ЛЦ Волгоградский',
                    'ЛЦ Быково',
                    'СЦ Нижнее Велино 2',
                    'СЦ Нижнее Велино',
                    'СЦ Волгодонск Степная',
                    'ЛЦ Замоскворечье',
                    'ЛЦ Кавказский',
                    'СЦ Каменск',
                    'СЦ Краснодар Осокина',
                    'СЦ Краснодар Победитель',
                    '3PL Махачкала',
                    'ЛЦ Домодедово',
                    'СЦ Львовский',
                    'СЦ Новороссийск',
                    'СЦ Пятигорск',
                    'СЦ Ростов Аксайская',
                    'СЦ Рязань',
                    '3PL Тамань',
                    'СЦ Тула Луначарского',
                    'СЦ Армавир Лавриенко',
                    'СЦ Армавир Тоннельная',
                    'СЦ Астрахань',
                    'СЦ Белгород Кирпичный',
                    'СЦ Белгород Волчанская',
                    'СЦ Белгород Коммунальная',
                    'СЦ Волгоград',
                    'ЛЦ Волгоград',
                    'ЛЦ Воронеж',
                    'СЦ Грозный',
                    'СЦ Калуга Академическая',
                    'СЦ Калуга Новый',
                    'СЦ Краснодар Октябрьская',
                    'ЛЦ Краснодар',
                    'СЦ Краснодар',
                    'СЦ Курск Моковский',
                    'СЦ Курск Октября',
                    'СЦ Липецк Гагарина',
                    'СЦ Минеральные Воды',
                    'ЛЦ Ростов',
                    'СЦ Ростов Новочеркасское',
                    'СЦ Рязань Добролюбова',
                    'ЛЦ Саларьево',
                    'СЦ Сочи Барановское',
                    'СЦ Сочи Лазаревский',
                    'СЦ Сочи Труда',
                    'СЦ Ставрополь Кулакова',
                    'СЦ Ставрополь Ракитная',
                    '3PL Таганрог',
                    'СЦ Тамбов Магистральная',
                    'СЦ Тула Щегловская',
                    'СЦ Щербинка',
                    'СЦ Нижнее Велино 1',
                    'СЦ Рязань Окружная',
                    'СЦ Рязань Локиметр',
                    'СЦ Внуково',
                    'СЦ Липецк Трубный',
                    'СЦ Орел',
                    'СЦ Ростов'
                ]
            },
            'Поволжье': {
                'FullFilment': [
                    'ПСЦ Казань КГТ',
                    'ПСЦ Самара КГТ',
                    'ПСЦ Саратов',
                    'МРФЦ Алматы',
                    'ПСЦ Алматы',
                    'ПСЦ Астана',
                    'ПСЦ Казань',
                    'КАЗАНЬ_ПСЦ_НОВЫЙ',
                    'ПСЦ Нижний Новгород',
                    'ПСЦ Самара'
                ],
                'Логистика': [
                    'СЦ Казань Тэцевская',
                    '3PL Актобе',
                    '3PL Атырау',
                    'ЛЦ Зеленодольск',
                    '3PL Костанай',
                    'ЛЦ Нижний Новгород',
                    'СЦ Нижний Новгород Тепличная',
                    'СЦ Пенза',
                    'ЛЦ Самара Южная',
                    'СЦ Тольятти Транспортная',
                    'СЦ Ульяновск Азовская',
                    'СЦ Ульяновск инженерный',
                    '3PL Бишкек',
                    'СЦ Ижевск',
                    'СЦ Казань Аэропорт',
                    'СЦ Киров',
                    'СЦ Набережные Челны Альметьевский',
                    'СЦ Набережные Челны Нариманова',
                    'СЦ Нижний Новгород Индустриальная',
                    'СЦ Нижний Новгород Красный Якорь',
                    'СЦ Нижний Новгород Кудьма',
                    'СЦ Новочебоксарск Гулливер',
                    'СЦ Новочебоксарск Коммунальная',
                    'СЦ Пенза Совхозная',
                    'СЦ Самара Индустриальная',
                    'СЦ Самара Московское Шоссе',
                    'СЦ Самара Преображенка',
                    'СЦ Саранск Восточное',
                    'СЦ Саратов Трофимовский',
                    'СЦ Саратов Хутор',
                    '3PL Ташкент',
                    'СЦ Тольятти Магистральная',
                    'СЦ Ульяновск Магистральная',
                    '3PL Усть-Каменогорск',
                    '3PL Шымкент',
                    'СЦ Набережные Челны Яшьлек'
                ]
            },
            'СДВ': {
                'FullFilment': [
                    'МРФЦ Красноярск',
                    'ПСЦ Хабаровск',
                    'ПСЦ Новосибирск',
                    'ПСЦ Омск'
                ],
                'Логистика': [
                    'СЦ Абакан',
                    'ЛЦ Владивосток',
                    'ЛЦ Красноярск',
                    'СЦ Благовещенск',
                    'СЦ Владивосток Дальнозаводская',
                    'СЦ Кемерово Тухачевского',
                    'СЦ Кемерово',
                    'ЛЦ Новосибирск Петухова',
                    'СЦ Омск Солнечная',
                    'СЦ Томск Зоркальцево',
                    'СЦ Улан Удэ',
                    'СЦ Хабаровск Суворова',
                    'СЦ Хабаровск Ракитное',
                    'СЦ Артем Западная',
                    'СЦ Барнаул',
                    'СЦ Иркутск',
                    'СЦ Красноярск',
                    'СЦ Новокузнецк Автотранспортная',
                    'ЛЦ Новосибирск',
                    'СЦ Новосибирск',
                    'СЦ Томск Профсоюзная',
                    'СЦ Хабаровск Индустриальная',
                    'СЦ Новокузнецк Куйбышева',
                    'СЦ Новокузнецк Моховая',
                    'СЦ Омск Айвазовского',
                    'СЦ Томск Иркутский Проезд',
                    'СЦ Чита Автостроителей',
                    'СЦ Чита'
                ]
            }
        };

        window.warehouses = warehouses;

        // Month names for summaries
        const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

        // Violator types for dropdown
        const violatorTypes = [
            'OzonJob',
            'Штат',
            'Курьер',
            'Селлер/поставщик',
            'Транспортная компания',
            'ПВЗ',
            'Клининг',
            'ЧОП'
        ];

        // Check type field configurations
        const checkTypeFields = {
            'ФРОД': ['violator', 'violatorInfo'],
            'КРАЖА': ['sumDetected', 'violator', 'violatorInfo', 'materialsLink'],
            'MPCRM + Торг 2': ['materialsLink', 'supplier'],
            'AFF': ['materialsLink', 'supplier'],
            'default': []
        };

        const incidentCategoryConfig = {
            'Инциденты (попадающие под приказ)': {
                topTypes: [
                    'Возгорание, теракт, обрушение здания и его частей, обстрел, нападение',
                    'Смертельный случай, тяжёлая травма (отрыв частей тела, подтверждённая травма позвоночника)',
                    'Массовый (3 и более участников) конфликт на территории объекта, массовые нарушения общественного порядка',
                    'Проверка ФМС, МВД, ФСБ, другое прибытие сотрудников правоохранительных органов',
                    'Прибытие государственных надзорных органов (МЧС, Роспотребнадзор, Роструд, Роскомнадзор и т.п.)',
                    'Прибытие СМИ, в т.ч. блогеров'
                ],
                otherTypes: [
                    'Прибытие сотрудников ФНС, представителей страховых компаний, иных контролирующих органов',
                    'Другое'
                ]
            },
            'Инциденты (непопадающие)': {
                topTypes: [
                    'Происшествие по ПБ',
                    'Происшествие технического характера',
                    'Происшествие с транспортом',
                    'Конфликты/драки',
                    'Травмы/СМП',
                    'Приезд правоохранительных органов.'
                ],
                otherTypes: [
                    'Другое'
                ]
            }
        };

        const appealTypeConfig = {
            topTypes: [
                'Жалоба на допуск на объект',
                'Не корректное поведение охраны',
                'Жалоба на блокировку',
                'Жалоба на СБ'
            ],
            otherTypes: [
                'Прочее'
            ]
        };

        // Navigation Functions
        function goToLevel(level) {
            document.querySelectorAll('.level-container').forEach(el => el.classList.remove('active'));
            document.getElementById(`level${level}`).classList.add('active');
            updateBreadcrumb(level);
        }

        function selectRegion(region) {
            state.region = region;
            state.type = '';
            state.warehouse = '';
            state.selectedDate = null;
            state.date = '';
            state.period = 'week';

            state.breadcrumbs = ['Главная', 'Регионы', region];
            updateBreadcrumb();

            const selectedDateDisplay = document.getElementById('selectedDateDisplay');
            if (selectedDateDisplay) {
                selectedDateDisplay.textContent = 'Не выбрано';
            }

            const weekBtn = document.getElementById('weekPeriodBtn');
            const monthBtn = document.getElementById('monthPeriodBtn');
            if (weekBtn && monthBtn) {
                weekBtn.classList.add('active');
                monthBtn.classList.remove('active');
            }

        const reportTypes = document.getElementById('reportTypes');
        if (reportTypes) {
            reportTypes.style.display = 'none';
        }
        
        const regionSummaryButton = document.getElementById('regionSummaryButton');
        if (regionSummaryButton) {
            regionSummaryButton.style.display = '';
        }

        const summaryButtons = document.getElementById('summaryButtons');
        if (summaryButtons) {
            summaryButtons.style.display = 'none';
        }

        const calendarLayout = document.getElementById('calendarLayout');
        if (calendarLayout) {
            calendarLayout.style.display = 'none';
        }

        updateReportAccess();

        const regionDashboards = document.getElementById('regionDashboards');
        if (regionDashboards) {
            regionDashboards.style.display = 'flex';
        }

        const typeDashboardsContainer = document.getElementById('typeDashboards');
        if (typeDashboardsContainer) {
            typeDashboardsContainer.style.display = 'none';
        }

        const typeSummaryCallout = document.getElementById('typeSummaryCallout');
        if (typeSummaryCallout) {
            typeSummaryCallout.style.display = 'none';
        }

        const warehouseList = document.getElementById('warehouseList');
        if (warehouseList) {
            warehouseList.innerHTML = '';
        }

        const regionSummaryLabel = document.getElementById('regionSummaryButtonLabel');
        if (regionSummaryLabel) {
            regionSummaryLabel.textContent = region;
        }

        document.querySelectorAll('.type-button').forEach(btn => {
            btn.classList.remove('active');
            btn.style.display = '';
        });

        updateRegionDashboards();
            goToLevel(3);
        }

        function selectType(type) {
            state.type = type;
            state.warehouse = '';
            state.selectedDate = null;
            state.date = '';
            state.calendarDate = new Date();
            state.period = 'week';

            state.breadcrumbs = ['Главная', 'Регионы', state.region, type];
            updateBreadcrumb();
            
        const summaryButtons = document.getElementById('summaryButtons');
        if (summaryButtons) {
            summaryButtons.style.display = 'none';
        }

        const regionSummaryButton = document.getElementById('regionSummaryButton');
        if (regionSummaryButton) {
            regionSummaryButton.style.display = 'none';
        }

        const calendarLayout = document.getElementById('calendarLayout');
        if (calendarLayout) {
            calendarLayout.style.display = 'grid';
        }

        updateReportAccess();

        const regionDashboards = document.getElementById('regionDashboards');
        if (regionDashboards) {
            regionDashboards.style.display = 'none';
        }

        const typeDashboardsContainer = document.getElementById('typeDashboards');
        if (typeDashboardsContainer) {
            typeDashboardsContainer.style.display = 'flex';
        }

        const reportTypes = document.getElementById('reportTypes');
        if (reportTypes) {
            reportTypes.style.display = 'none';
        }

        const selectedDateDisplay = document.getElementById('selectedDateDisplay');
        if (selectedDateDisplay) {
            selectedDateDisplay.textContent = 'Не выбрано';
        }

        const weekBtn = document.getElementById('weekPeriodBtn');
        const monthBtn = document.getElementById('monthPeriodBtn');
        if (weekBtn && monthBtn) {
            weekBtn.classList.add('active');
            monthBtn.classList.remove('active');
        }
            
            const list = warehouses[state.region]?.[type] || [];
            
            const container = document.getElementById('warehouseList');
            container.innerHTML = '';
            
            list.forEach(warehouse => {
                const item = document.createElement('div');
                item.className = 'warehouse-item';
                item.textContent = warehouse;
                item.onclick = () => selectWarehouse(warehouse, item);
                container.appendChild(item);
            });

        document.querySelectorAll('.type-button').forEach(btn => {
            const isSelected = btn.dataset.type === type;
            btn.classList.toggle('active', isSelected);
            btn.style.display = isSelected ? '' : 'none';
        });

        const typeSummaryCallout = document.getElementById('typeSummaryCallout');
        if (typeSummaryCallout) {
            typeSummaryCallout.style.display = 'grid';
        }
        const typeSummaryLabel = document.getElementById('typeSummaryButtonLabel');
        if (typeSummaryLabel) {
            typeSummaryLabel.textContent = `${type} ${state.region}`;
        }

        updateTypeDashboards();
            
            // Initialize calendar
            renderCalendar();
        }

        function selectWarehouse(warehouse, element) {
            document.querySelectorAll('.warehouse-item').forEach(el => el.classList.remove('selected'));
            element.classList.add('selected');
            state.warehouse = warehouse;

            const trail = ['Главная', 'Регионы', state.region, state.type, warehouse];
            if (state.selectedDate) {
                trail.push(state.selectedDate);
            }
            state.breadcrumbs = trail;
            updateBreadcrumb();

            updateReportAccess();

            renderCalendar();
        }

        // Calendar Functions
        function switchCalendarPeriod(period) {
            state.period = period;
            
            // Update button styles
            document.getElementById('weekPeriodBtn').classList.remove('active');
            document.getElementById('monthPeriodBtn').classList.remove('active');
            
            if (period === 'week') {
                document.getElementById('weekPeriodBtn').classList.add('active');
            } else {
                document.getElementById('monthPeriodBtn').classList.add('active');
            }
            
            renderCalendar();
        }

        function navigateCalendar(direction) {
            if (state.period === 'week') {
                // Move by 7 days
                if (direction === 'prev') {
                    state.calendarDate.setDate(state.calendarDate.getDate() - 7);
                } else {
                    state.calendarDate.setDate(state.calendarDate.getDate() + 7);
                }
            } else {
                // Move by month
                if (direction === 'prev') {
                    state.calendarDate.setMonth(state.calendarDate.getMonth() - 1);
                } else {
                    state.calendarDate.setMonth(state.calendarDate.getMonth() + 1);
                }
            }
            renderCalendar();
        }

        function selectCalendarDate(dateStr) {
            state.selectedDate = dateStr;
            state.date = dateStr;
            
            // Update display
            const date = new Date(dateStr);
            const dayLabel = Number.isNaN(date.getTime()) ? dateStr : String(date.getDate()).padStart(2, '0');
            document.getElementById('selectedDateDisplay').textContent = dayLabel;
            
            // Re-render to update selected state
            renderCalendar();
            
            const trail = ['Главная', 'Регионы', state.region, state.type];
            if (state.warehouse) {
                trail.push(state.warehouse);
            }
            if (state.selectedDate) {
                trail.push(dateStr);
            }
            state.breadcrumbs = trail;
            updateBreadcrumb();

            updateReportAccess();
        }

        function renderCalendar() {
            const grid = document.getElementById('calendarGrid');
            
            if (state.period === 'week') {
                renderWeekView(grid);
            } else {
                renderMonthView(grid);
            }
        }

        function renderWeekView(grid) {
            const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
            
            // Get start of week (Monday)
            const date = new Date(state.calendarDate);
            const day = date.getDay();
            const diff = date.getDate() - day + (day === 0 ? -6 : 1);
            const weekStart = new Date(date.setDate(diff));
            
            grid.className = 'calendar-grid calendar-grid--week';
            let html = '';
            
            // Headers
            weekDays.forEach(dayName => {
                html += `<div class="calendar-header">${dayName}</div>`;
            });
            
            // Days
            for (let i = 0; i < 7; i++) {
                const currentDate = new Date(weekStart);
                currentDate.setDate(weekStart.getDate() + i);
                const dateStr = currentDate.toISOString().split('T')[0];
                const isSelected = state.selectedDate === dateStr;
                
                html += `
                    <div class="calendar-day ${isSelected ? 'selected' : ''}" 
                         onclick="selectCalendarDate('${dateStr}')">
                        ${currentDate.getDate()}
                    </div>
                `;
            }
            
            grid.innerHTML = html;
        }

        function renderMonthView(grid) {
            const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
            const year = state.calendarDate.getFullYear();
            const month = state.calendarDate.getMonth();
            
            // First day of month
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            
            // Adjust to Monday as first day
            const firstDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
            
            grid.className = 'calendar-grid calendar-grid--month';
            let html = '';
            
            // Headers
            weekDays.forEach(dayName => {
                html += `<div class="calendar-header">${dayName}</div>`;
            });
            
            // Empty cells before month starts
            for (let i = 0; i < firstDayOfWeek; i++) {
                const prevDate = new Date(year, month, -(firstDayOfWeek - i - 1));
                html += `<div class="calendar-day other-month">${prevDate.getDate()}</div>`;
            }
            
            // Days of month
            for (let day = 1; day <= lastDay.getDate(); day++) {
                const currentDate = new Date(year, month, day);
                const dateStr = currentDate.toISOString().split('T')[0];
                const isSelected = state.selectedDate === dateStr;
                
                html += `
                    <div class="calendar-day ${isSelected ? 'selected' : ''}" 
                         onclick="selectCalendarDate('${dateStr}')">
                        ${day}
                    </div>
                `;
            }
            
            // Fill remaining cells
            const totalCells = firstDayOfWeek + lastDay.getDate();
            const remainingCells = 7 - (totalCells % 7);
            if (remainingCells < 7) {
                for (let i = 1; i <= remainingCells; i++) {
                    html += `<div class="calendar-day other-month">${i}</div>`;
                }
            }
            
            grid.innerHTML = html;
        }

        function openReport(reportType) {
            document.querySelectorAll('.level-container').forEach(el => el.classList.remove('active'));
            const container = document.getElementById(`level4-${reportType}`);
            container.classList.add('active');

            if (reportType === 'incidents') {
                resetIncidentUI();
            }

            if (reportType === 'appeals') {
                resetAppealUI();
                buildAppealTypes();
            }
        }

        function updateBreadcrumb(level) {
            const breadcrumb = document.getElementById('breadcrumb');
            let items = ['Главная'];
            
            if (state.region) items.push(state.region);
            if (state.type) items.push(state.type);
            if (state.warehouse) items.push(state.warehouse);
            
            breadcrumb.innerHTML = items.map((item, index) => 
                `<span class="breadcrumb-item" onclick="navigateToBreadcrumb(${index})">${item}</span>
                ${index < items.length - 1 ? '<span class="breadcrumb-separator">→</span>' : ''}`
            ).join('');
        }

        function navigateToBreadcrumb(index) {
            if (index === 0) {
                goToLevel(1);
                state.region = '';
                state.type = '';
                state.warehouse = '';
                state.date = '';
            } else if (index === 1) {
                goToLevel(2);
                state.type = '';
                state.warehouse = '';
                state.date = '';
            }
            updateBreadcrumb();
        }

        // Investigation Form Functions
        function selectCheckType(type) {
            state.checkType = type;
            document.getElementById('otherCheckTypes').value = '';
            showFormFields(type);
        }

        function selectCheckTypeFromDropdown() {
            const select = document.getElementById('otherCheckTypes');
            const type = select.value;
            if (type) {
                state.checkType = type;
                showFormFields(type);
            }
        }

        // SB-CHOP Activities Functions
        function selectActivityType(type) {
            state.activityType = type;
            document.getElementById('otherActivityTypes').value = '';
            showActivityForm();
        }

        function selectActivityTypeFromDropdown() {
            const select = document.getElementById('otherActivityTypes');
            const type = select.value;
            if (type) {
                state.activityType = type;
                showActivityForm();
            }
        }

        function showActivityForm() {
            document.getElementById('activityForm').classList.add('active');
        }

        function selectKind(kind) {
            document.querySelectorAll('#activityMainForm .option-button').forEach(btn => {
                if (btn.textContent.trim() === kind) {
                    btn.classList.add('selected');
                } else if (btn.textContent.trim() === 'Тренировка' || btn.textContent.trim() === 'Реальная') {
                    btn.classList.remove('selected');
                }
            });
            document.getElementById('activityKind').value = kind;
        }

        function selectChopResult(result) {
            const buttons = document.querySelectorAll('#activityMainForm .option-button');
            buttons.forEach(btn => {
                if (btn.textContent.trim() === result && (result === 'Удовлетворительно' || result === 'Неудовлетворительно')) {
                    const parent = btn.parentElement.previousElementSibling;
                    if (parent && parent.textContent.includes('Результат ЧОП')) {
                        btn.classList.add('selected');
                    }
                } else if (btn.parentElement.previousElementSibling && btn.parentElement.previousElementSibling.textContent.includes('Результат ЧОП')) {
                    btn.classList.remove('selected');
                }
            });
            document.getElementById('chopResult').value = result;
        }

        function selectChpoResult(result) {
            const buttons = document.querySelectorAll('#activityMainForm .option-button');
            buttons.forEach(btn => {
                const parent = btn.parentElement.previousElementSibling;
                if (parent && parent.textContent.includes('Результат ЧПО')) {
                    if ((btn.textContent.trim() === result) || (result === '' && btn.textContent.trim() === 'Не применимо')) {
                        btn.classList.add('selected');
                    } else {
                        btn.classList.remove('selected');
                    }
                }
            });
            document.getElementById('chpoResult').value = result;
        }

        function submitActivityForm() {
            const formData = {
                region: state.region,
                type: state.type,
                warehouse: state.warehouse,
                date: state.date,
                period: state.period,
                activityType: state.activityType,
                kind: document.getElementById('activityKind').value,
                chopResult: document.getElementById('chopResult').value,
                chopResponseTime: document.getElementById('chopResponseTime').value,
                chopName: document.getElementById('chopName').value,
                chpoResult: document.getElementById('chpoResult').value,
                chpoResponseTime: document.getElementById('chpoResponseTime').value,
                chpoName: document.getElementById('chpoName').value,
                comment: document.getElementById('activityComment').value,
                materialsLink: document.getElementById('activityMaterialsLink').value,
                timestamp: new Date().toISOString()
            };

            // Save to localStorage
            let activities = JSON.parse(localStorage.getItem('sb_activities') || '[]');
            activities.push(formData);
            localStorage.setItem('sb_activities', JSON.stringify(activities));
            if (typeof updateGlobalDashboards === 'function') {
                updateGlobalDashboards();
            }

            // Show success message
            const successMsg = document.getElementById('activitySuccessMessage');
            successMsg.classList.add('show');
            
            setTimeout(() => {
                successMsg.classList.remove('show');
                
                // Reset form for next entry
                document.getElementById('activityMainForm').reset();
                document.getElementById('activityForm').classList.remove('active');
                document.querySelectorAll('#activityMainForm .option-button').forEach(btn => btn.classList.remove('selected'));
            }, 2000);
        }

        function saveActivityAndFinish() {
            const hasData = document.getElementById('activityComment').value || 
                           document.getElementById('chopResult').value;
            
            if (hasData) {
                submitActivityForm();
                setTimeout(() => {
                    finishWork();
                }, 2500);
            } else {
                finishWork();
            }
        }

        function resetIncidentUI() {
            state.incidentCategory = '';
            state.incidentType = '';

            const incidentForm = document.getElementById('incidentMainForm');
            const incidentFormContainer = document.getElementById('incidentForm');
            const incidentTypeBlock = document.getElementById('incidentTypeBlock');
            if (incidentForm) {
                incidentForm.reset();
            }
            if (incidentFormContainer) {
                incidentFormContainer.classList.remove('active');
            }
            if (incidentTypeBlock) {
                incidentTypeBlock.classList.remove('active');
            }

            const topTypesContainer = document.getElementById('incidentTopTypes');
            const otherTypesContainer = document.getElementById('incidentOtherTypes');
            if (topTypesContainer) {
                topTypesContainer.innerHTML = '';
            }
            if (otherTypesContainer) {
                otherTypesContainer.innerHTML = '';
                otherTypesContainer.style.display = 'none';
            }

            document.querySelectorAll('#incidentCategoryButtons .check-type-button').forEach(btn => btn.classList.remove('selected'));
            document.querySelectorAll('#incidentTopTypes .option-button').forEach(btn => btn.classList.remove('selected'));
            document.querySelectorAll('#incidentOtherTypes .option-button').forEach(btn => btn.classList.remove('selected'));
        }

        function resetAppealUI() {
            state.appealType = '';

            const appealForm = document.getElementById('appealMainForm');
            if (appealForm) {
                appealForm.reset();
            }

            document.getElementById('appealResult').value = '';

            const buttonsContainer = document.getElementById('appealTypeButtons');
            if (buttonsContainer) {
                buttonsContainer.innerHTML = '';
                document.querySelectorAll('#appealTypeButtons .check-type-button').forEach(btn => btn.classList.remove('selected'));
            }

            document.querySelectorAll('#appealMainForm .option-button').forEach(btn => btn.classList.remove('selected'));

            const otherButtons = document.getElementById('appealOtherTypeButtons');
            if (otherButtons) {
                otherButtons.innerHTML = '';
                otherButtons.style.display = 'none';
            }

            const formFields = document.getElementById('appealForm');
            if (formFields) {
                formFields.classList.remove('active');
            }
        }

        function selectIncidentCategory(category, button) {
            state.incidentCategory = category;
            state.incidentType = '';

            const buttons = document.querySelectorAll('#incidentCategoryButtons .check-type-button');
            buttons.forEach(btn => {
                const isActive = btn === button;
                btn.classList.toggle('selected', isActive);
            });

            buildIncidentTypes(category);

            document.getElementById('incidentTypeBlock').classList.add('active');
            document.getElementById('incidentForm').classList.remove('active');
            document.getElementById('incidentMainForm').reset();
        }

        function buildIncidentTypes(category) {
            const config = incidentCategoryConfig[category];
            const topTypesContainer = document.getElementById('incidentTopTypes');
            const otherTypesContainer = document.getElementById('incidentOtherTypes');

            if (topTypesContainer) {
                topTypesContainer.innerHTML = '';
            }
            if (otherTypesContainer) {
                otherTypesContainer.innerHTML = '';
                otherTypesContainer.style.display = 'none';
            }

            if (!config || !topTypesContainer) {
                return;
            }

            const createTypeButton = (type, container) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'option-button';
                button.textContent = type;
                button.onclick = () => selectIncidentType(type, button);
                container.appendChild(button);
            };

            config.topTypes.forEach(type => createTypeButton(type, topTypesContainer));

            if (config.otherTypes && config.otherTypes.length > 0 && otherTypesContainer) {
                otherTypesContainer.style.display = 'flex';
                config.otherTypes.forEach(type => createTypeButton(type, otherTypesContainer));
            }
        }

        function selectIncidentType(type, button) {
            state.incidentType = type;
            document.querySelectorAll('#incidentTopTypes .option-button, #incidentOtherTypes .option-button').forEach(btn => {
                btn.classList.toggle('selected', btn === button);
            });

            showIncidentForm();
        }

        function showIncidentForm() {
            document.getElementById('incidentForm').classList.add('active');
        }

        function buildAppealTypes() {
            const buttonsContainer = document.getElementById('appealTypeButtons');
            const otherButtonsContainer = document.getElementById('appealOtherTypeButtons');

            if (!buttonsContainer) {
                return;
            }

            buttonsContainer.innerHTML = '';
            if (otherButtonsContainer) {
                otherButtonsContainer.innerHTML = '';
                otherButtonsContainer.style.display = 'none';
            }

            appealTypeConfig.topTypes.forEach(type => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'check-type-button';
                button.textContent = type;
                button.onclick = () => selectAppealType(type, button);
                buttonsContainer.appendChild(button);
            });

            if (appealTypeConfig.otherTypes && appealTypeConfig.otherTypes.length > 0 && otherButtonsContainer) {
                otherButtonsContainer.style.display = 'flex';
                appealTypeConfig.otherTypes.forEach(type => {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'option-button';
                    button.textContent = type;
                    button.onclick = () => selectAppealType(type, button);
                    otherButtonsContainer.appendChild(button);
                });
            }
        }

        function selectAppealType(type, button) {
            state.appealType = type;
            if (button) {
                document.querySelectorAll('#level4-appeals .check-type-button').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            }
            document.getElementById('appealForm').classList.add('active');
        }

        function selectAppealResult(result, button) {
            document.querySelectorAll('#appealMainForm .option-button').forEach(btn => btn.classList.remove('selected'));
            if (button) {
                button.classList.add('selected');
            }
            document.getElementById('appealResult').value = result;
        }

        function submitIncidentForm() {
            if (!state.incidentCategory || !state.incidentType) {
                alert('Выберите категорию и тип инцидента');
                return false;
            }

            const formData = {
                region: state.region,
                type: state.type,
                warehouse: state.warehouse,
                date: state.date,
                category: state.incidentCategory,
                incidentType: state.incidentType,
                incidentTime: document.getElementById('incidentTime').value,
                comment: document.getElementById('incidentComment').value,
                materialsLink: document.getElementById('incidentMaterialsLink').value,
                timestamp: new Date().toISOString()
            };

            const storageKey = 'sb_incidents';
            const incidents = JSON.parse(localStorage.getItem(storageKey) || '[]');
            incidents.push(formData);
            localStorage.setItem(storageKey, JSON.stringify(incidents));
            if (typeof updateGlobalDashboards === 'function') {
                updateGlobalDashboards();
            }

            const successMsg = document.getElementById('incidentSuccessMessage');
            successMsg.classList.add('show');

            setTimeout(() => {
                successMsg.classList.remove('show');
                document.getElementById('incidentMainForm').reset();
                document.getElementById('incidentForm').classList.remove('active');
                document.querySelectorAll('#incidentTopTypes .option-button, #incidentOtherTypes .option-button').forEach(btn => btn.classList.remove('selected'));
                state.incidentType = '';
            }, 2000);

            return true;
        }

        function saveIncidentAndFinish() {
            const hasData = document.getElementById('incidentTime').value ||
                           document.getElementById('incidentComment').value ||
                           document.getElementById('incidentMaterialsLink').value;

            if (hasData) {
                const saved = submitIncidentForm();
                if (saved) {
                    setTimeout(() => {
                        finishWork();
                    }, 2500);
                }
            } else {
                finishWork();
            }
        }

        function submitAppealForm() {
            if (!state.appealType) {
                alert('Выберите вид обращения');
                return false;
            }

            if (!document.getElementById('appealResult').value) {
                alert('Укажите результат (типовой)');
                return false;
            }

            const formData = {
                region: state.region,
                type: state.type,
                warehouse: state.warehouse,
                date: state.date,
                appealType: state.appealType,
                result: document.getElementById('appealResult').value,
                logins: document.getElementById('appealLogins').value,
                comment: document.getElementById('appealComment').value,
                threadLink: document.getElementById('appealThreadLink').value,
                timestamp: new Date().toISOString()
            };

            const storageKey = 'sb_appeals';
            const appeals = JSON.parse(localStorage.getItem(storageKey) || '[]');
            appeals.push(formData);
            localStorage.setItem(storageKey, JSON.stringify(appeals));
            if (typeof updateGlobalDashboards === 'function') {
                updateGlobalDashboards();
            }

            const successMsg = document.getElementById('appealSuccessMessage');
            successMsg.classList.add('show');

            setTimeout(() => {
                successMsg.classList.remove('show');
                document.getElementById('appealMainForm').reset();
                document.querySelectorAll('#appealMainForm .option-button').forEach(btn => btn.classList.remove('selected'));
                document.getElementById('appealResult').value = '';
                state.appealType = '';
                resetAppealUI();
                buildAppealTypes();
            }, 2000);

            return true;
        }

        function saveAppealAndFinish() {
            const hasData = document.getElementById('appealLogins').value ||
                           document.getElementById('appealComment').value ||
                           document.getElementById('appealThreadLink').value;

            if (hasData) {
                const saved = submitAppealForm();
                if (saved) {
                    setTimeout(() => {
                        finishWork();
                    }, 2500);
                }
            } else {
                finishWork();
            }
        }

        function showFormFields(checkType) {
            const form = document.getElementById('investigationForm');
            const dynamicFields = document.getElementById('dynamicFields');
            
            form.classList.add('active');
            dynamicFields.innerHTML = '';
            
            // Add dynamic fields based on check type
            const fields = checkTypeFields[checkType] || checkTypeFields.default;
            
            fields.forEach(field => {
                if (field === 'violator') {
                    dynamicFields.innerHTML += `
                        <div class="form-group">
                            <label>Вид нарушителя</label>
                            <select id="violator" name="violator">
                                <option value="">-- Выберите --</option>
                                ${violatorTypes.map(v => `<option value="${v}">${v}</option>`).join('')}
                            </select>
                        </div>
                    `;
                } else if (field === 'violatorInfo') {
                    dynamicFields.innerHTML += `
                        <div class="form-group">
                            <label>Логины/ФИО нарушителей/виновных</label>
                            <input type="text" id="violatorInfo" name="violatorInfo" onfocus="checkClipboard(this)">
                        </div>
                    `;
                } else if (field === 'sumDetected') {
                    dynamicFields.innerHTML += `
                        <div class="form-group">
                            <label>Сумма выявленного ущерба</label>
                            <input type="number" id="sumDetected" name="sumDetected" step="0.01">
                        </div>
                    `;
                } else if (field === 'materialsLink') {
                    dynamicFields.innerHTML += `
                        <div class="form-group">
                            <label>Ссылка на материалы</label>
                            <input type="text" id="materialsLink" name="materialsLink" onfocus="checkClipboard(this)">
                        </div>
                    `;
                } else if (field === 'supplier') {
                    dynamicFields.innerHTML += `
                        <div class="form-group">
                            <label>Поставщик (для ТОРГ2)</label>
                            <input type="text" id="supplier" name="supplier" onfocus="checkClipboard(this)">
                        </div>
                    `;
                }
            });
        }

        function selectResult(result, button) {
            document.querySelectorAll('#mainForm .option-button').forEach(btn => btn.classList.remove('selected'));
            if (button) {
                button.classList.add('selected');
            }
            document.getElementById('result').value = result;
        }

        // Auto-paste from clipboard
        async function checkClipboard(inputElement) {
            try {
                const text = await navigator.clipboard.readText();
                if (text && text.trim() !== '' && inputElement.value === '') {
                    inputElement.value = text;
                }
            } catch (err) {
                // Clipboard access denied or not available
                console.log('Clipboard access not available');
            }
        }

        // Form Submission
        function submitForm() {
            const formData = {
                region: state.region,
                type: state.type,
                warehouse: state.warehouse,
                date: state.date,
                checkType: state.checkType,
                result: document.getElementById('result').value,
                identifiers: document.getElementById('identifiers').value,
                productName: document.getElementById('productName').value,
                sumWorked: document.getElementById('sumWorked').value,
                comment: document.getElementById('comment').value,
                timestamp: new Date().toISOString()
            };

            // Add dynamic fields
            const dynamicFields = document.getElementById('dynamicFields').querySelectorAll('input, select, textarea');
            dynamicFields.forEach(field => {
                formData[field.name] = field.value;
            });

            // Save to localStorage
            let investigations = JSON.parse(localStorage.getItem('investigations') || '[]');
            investigations.push(formData);
            localStorage.setItem('investigations', JSON.stringify(investigations));
            if (typeof updateGlobalDashboards === 'function') {
                updateGlobalDashboards();
            }

            // Show success message
            const successMsg = document.getElementById('successMessage');
            successMsg.classList.add('show');
            
            setTimeout(() => {
                successMsg.classList.remove('show');
                
                // Reset form for next entry
                document.getElementById('mainForm').reset();
                document.getElementById('dynamicFields').innerHTML = '';
                document.getElementById('investigationForm').classList.remove('active');
                document.querySelectorAll('.option-button').forEach(btn => btn.classList.remove('selected'));
            }, 2000);
        }

        function saveAndFinish() {
            // Check if there's data to save
            const hasData = document.getElementById('identifiers').value || 
                           document.getElementById('productName').value || 
                           document.getElementById('sumWorked').value;
            
            if (hasData) {
                // Save the current form
                submitForm();
                
                // Wait for save animation then go to main page
                setTimeout(() => {
                    finishWork();
                }, 2500);
            } else {
                // No data to save, just finish
                finishWork();
            }
        }

        function finishWork() {
            // Reset state and go to main page
            goToLevel(1);
            state.region = '';
            state.type = '';
            state.warehouse = '';
            state.date = '';
            state.selectedDate = null;
            state.checkType = '';
            resetIncidentUI();
            resetAppealUI();
            document.getElementById('reportTypes').style.display = 'none';
            document.getElementById('warehouseList').innerHTML = '';
            document.getElementById('reportDate').value = '';
        const calendarLayout = document.getElementById('calendarLayout');
        if (calendarLayout) {
            calendarLayout.style.display = 'none';
        }
            updateBreadcrumb();
            if (typeof updateTypeDashboards === 'function') {
                updateTypeDashboards();
            }
        const regionSummaryButton = document.getElementById('regionSummaryButton');
        if (regionSummaryButton) {
            regionSummaryButton.style.display = '';
        }
        }

        function goToSummary() {
            alert('Раздел "Сводная информация" в разработке');
        }

        function openSummary(summaryType) {
            document.querySelectorAll('.level-container').forEach(el => el.classList.remove('active'));
            const summaryPage = document.getElementById(`summary-${summaryType}`);
            summaryPage.classList.add('active');
            
            const summaryTitles = {
                general: 'Свод по РФ',
                object: 'Свод по объекту',
                months: 'Динамика по месяцам',
                weeks: 'Динамика по неделям'
            };

            if (summaryType === 'general') {
                state.region = '';
                state.type = '';
                state.warehouse = '';
                state.selectedDate = null;
                state.date = '';
                state.breadcrumbs = ['Главная', summaryTitles.general];
            } else {
                const trail = ['Главная'];
                if (state.region) {
                    trail.push('Регионы', state.region);
                }
                if (state.type) {
                    trail.push(state.type);
                }
                if (state.warehouse) {
                    trail.push(state.warehouse);
                }
                trail.push(summaryTitles[summaryType] || 'Свод');
                state.breadcrumbs = trail.filter(Boolean);
            }
            updateBreadcrumb();

            const metaStrongElements = summaryPage.querySelectorAll('.summary-meta strong');
            if (metaStrongElements.length) {
                if (metaStrongElements[0]) {
                    metaStrongElements[0].textContent = state.region || 'Все регионы';
                }
                if (metaStrongElements[1]) {
                    metaStrongElements[1].textContent = state.type || 'Все типы';
                }
                if (metaStrongElements[2]) {
                    metaStrongElements[2].textContent = state.warehouse || '—';
                }
            if (metaStrongElements[3]) {
                const rawDate = state.selectedDate || state.date || '';
                if (rawDate) {
                    const metaDate = new Date(rawDate);
                    const label = Number.isNaN(metaDate.getTime())
                        ? rawDate
                        : String(metaDate.getUTCDate()).padStart(2, '0');
                    metaStrongElements[3].textContent = label;
                } else {
                    metaStrongElements[3].textContent = '—';
                }
            }
            }
            
            // Load and display data
            loadSummaryData(summaryType);

            if (typeof updateBackButtonVisibility === 'function') {
                updateBackButtonVisibility();
            }
        }

        function loadSummaryData(summaryType, options = {}) {
            const investigations = JSON.parse(localStorage.getItem('investigations') || '[]');
            const incidents = JSON.parse(localStorage.getItem('sb_incidents') || '[]');
            const activities = JSON.parse(localStorage.getItem('sb_activities') || '[]');
            const appeals = JSON.parse(localStorage.getItem('sb_appeals') || '[]');

            const filterByContext = item => {
                if (!item) {
                    return false;
                }

                const lockRegion = summaryType !== 'general';
                const lockType = summaryType === 'type' || summaryType === 'object' || summaryType === 'months' || summaryType === 'weeks';
                const lockWarehouse = summaryType === 'object' || summaryType === 'months' || summaryType === 'weeks';
                const lockDate = summaryType === 'object';

                if (lockRegion && state.region && item.region !== state.region) {
                    return false;
                }

                if (lockType && state.type && item.type !== state.type) {
                    return false;
                }

                if (lockWarehouse && state.warehouse && item.warehouse !== state.warehouse) {
                    return false;
                }

                if (lockDate && state.selectedDate) {
                    const rawDate = item.date || (item.timestamp ? String(item.timestamp).split('T')[0] : '');
                    if (rawDate !== state.selectedDate) {
                        return false;
                    }
                }

                return true;
            };

            const filteredInvestigations = investigations.filter(filterByContext);
            const filteredIncidents = incidents.filter(filterByContext);
            const filteredActivities = activities.filter(filterByContext);
            const filteredAppeals = appeals.filter(filterByContext);
            
            if (summaryType === 'general' || summaryType === 'region' || summaryType === 'type') {
                const chartKey = `${summaryType}Investigations`;
                const canvasId = `${summaryType}InvestigationsChart`;
                renderInvestigationSummary(filteredInvestigations, `${summaryType}InvestigationsSummary`, {
                    chartKey,
                    canvasId,
                    datasetLabel: 'Количество расследований'
                });
                const incidentOptions = summaryType === 'general'
                    ? { dimension: 'region', dimensionLabel: 'Регионы' }
                    : { dimension: 'warehouse', dimensionLabel: 'Склады' };
                renderIncidentsSummary(filteredIncidents, `${summaryType}IncidentsSummary`, {
                    dimension: incidentOptions.dimension,
                    dimensionLabel: incidentOptions.dimensionLabel,
                    chartKey: `${summaryType}Incidents`,
                    canvasId: `${summaryType}IncidentsChart`,
                    datasetLabel: 'Количество инцидентов'
                });
                renderActivitiesSummary(filteredActivities, `${summaryType}ActivitiesSummary`, {
                    chartKey: `${summaryType}Activities`,
                    canvasId: `${summaryType}ActivitiesChart`,
                    datasetLabel: 'Количество мероприятий'
                });
                renderAppealsSummary(filteredAppeals, `${summaryType}AppealsSummary`, {
                    chartKey: `${summaryType}Appeals`,
                    canvasId: `${summaryType}AppealsChart`,
                    datasetLabel: 'Количество обращений'
                });
            } else if (summaryType === 'object') {
                displayObjectSummary(filteredInvestigations, filteredIncidents, filteredActivities, filteredAppeals);
            } else if (summaryType === 'months') {
                displayMonthsSummary(filteredInvestigations, filteredIncidents, filteredActivities, filteredAppeals);
            } else if (summaryType === 'weeks') {
                displayWeeksSummary(filteredInvestigations, filteredIncidents, filteredActivities, filteredAppeals);
            }
        }

        const summaryCharts = {};

        function formatCurrency(value) {
            const numeric = Number(value) || 0;
            return `${numeric.toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} ₽`;
        }

        function updateReportAccess() {
            const shouldShow = Boolean(state.warehouse && state.selectedDate);
            const summaryButtons = document.getElementById('summaryButtons');
            const reportTypes = document.getElementById('reportTypes');
            if (summaryButtons) {
                summaryButtons.style.display = shouldShow ? 'grid' : 'none';
            }
            if (reportTypes) {
                reportTypes.style.display = shouldShow ? 'grid' : 'none';
            }
        }

        function renderSummaryBarChart(chartKey, canvasId, labels, values, datasetLabel, {
            valueFormatter = value => Number(value).toLocaleString('ru-RU')
        } = {}) {
            const canvas = document.getElementById(canvasId);
            if (!canvas) {
                return;
            }

            if (!labels.length) {
                if (summaryCharts[chartKey]) {
                    summaryCharts[chartKey].destroy();
                    summaryCharts[chartKey] = null;
                }
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
                return;
            }

            if (summaryCharts[chartKey]) {
                summaryCharts[chartKey].destroy();
            }

            summaryCharts[chartKey] = new Chart(canvas, {
                type: 'bar',
                data: {
                    labels,
                    datasets: [
                        {
                            label: datasetLabel,
                            data: values,
                            backgroundColor: 'rgba(79, 195, 247, 0.65)',
                            borderColor: 'rgba(79, 195, 247, 1)',
                            borderWidth: 2,
                            borderRadius: 8,
                            maxBarThickness: 38
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { labels: { color: '#e0f7fa' } },
                        tooltip: {
                            callbacks: {
                                label: context => `${datasetLabel}: ${valueFormatter(context.parsed.y)}`
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: { color: '#e0f7fa' },
                            grid: { color: 'rgba(255, 255, 255, 0.08)' }
                        },
                        y: {
                            ticks: {
                                color: '#e0f7fa',
                                callback: valueFormatter
                            },
                            grid: { color: 'rgba(255, 255, 255, 0.08)' }
                        }
                    }
                }
            });
        }

        function renderInvestigationSummary(data, containerId, chartOptions) {
            const container = document.getElementById(containerId);
            if (!container) {
                return;
            }

            if (!data.length) {
                container.innerHTML = '<p class="summary-empty">Нет данных для отображения</p>';
                if (chartOptions && chartOptions.chartKey && chartOptions.canvasId) {
                    renderSummaryBarChart(
                        chartOptions.chartKey,
                        chartOptions.canvasId,
                        [],
                        [],
                        chartOptions.datasetLabel || 'Количество расследований'
                    );
                }
                return;
            }

            const total = data.length;
            const totalWorked = data.reduce((sum, inv) => sum + parseFloat(inv.sumWorked || 0), 0);
            const totalDetected = data.reduce((sum, inv) => sum + parseFloat(inv.sumDetected || 0), 0);
            const totalReturned = data.reduce((sum, inv) => sum + parseFloat(inv.sumReturned || 0), 0);
            const totalDelta = totalDetected - totalReturned;
            const percentReturned = totalDetected > 0 ? ((totalReturned / totalDetected) * 100).toFixed(1) : 0;
            
            const byCheckType = {};
            data.forEach(inv => {
                const type = inv.checkType || 'Не указан';
                if (!byCheckType[type]) {
                    byCheckType[type] = { count: 0, worked: 0, detected: 0, returned: 0 };
                }
                byCheckType[type].count += 1;
                byCheckType[type].worked += parseFloat(inv.sumWorked || 0);
                byCheckType[type].detected += parseFloat(inv.sumDetected || 0);
                byCheckType[type].returned += parseFloat(inv.sumReturned || 0);
            });
            
            const entries = Object.entries(byCheckType).sort((a, b) => b[1].count - a[1].count);
            const headers = [
                'Названия строк',
                'Кол-во',
                'Отработано',
                'Выявленного ущерба',
                'Возмещённого, предотвращённого ущерба',
                'Дельта',
                '% Возмещения'
            ];

            const rows = entries.map(([type, stats]) => {
                const delta = stats.detected - stats.returned;
                const percent = stats.detected > 0 ? ((stats.returned / stats.detected) * 100).toFixed(1) + '%' : '—';
                return [
                    type,
                    stats.count.toLocaleString('ru-RU'),
                    formatCurrency(stats.worked),
                    formatCurrency(stats.detected),
                    formatCurrency(stats.returned),
                    formatCurrency(delta),
                    percent
                ];
            });

            const footer = [
                'Общий итог',
                total.toLocaleString('ru-RU'),
                formatCurrency(totalWorked),
                formatCurrency(totalDetected),
                formatCurrency(totalReturned),
                formatCurrency(totalDelta),
                `${percentReturned}%`
            ];

            container.innerHTML = `
                <p class="summary-total">Всего расследований: <strong>${total.toLocaleString('ru-RU')}</strong></p>
                ${generateTableHTML(headers, rows, { footer })}
            `;
            initializeSummaryTableFilters(container);

            if (chartOptions && chartOptions.chartKey && chartOptions.canvasId) {
                renderSummaryBarChart(
                    chartOptions.chartKey,
                    chartOptions.canvasId,
                    entries.map(([type]) => type),
                    entries.map(([, stats]) => stats.count),
                    chartOptions.datasetLabel || 'Количество расследований',
                    chartOptions.tooltipOptions
                );
            }
        }

        function renderIncidentsSummary(data, containerId, {
            dimension = 'warehouse',
            dimensionLabel = 'Склады',
            chartKey,
            canvasId,
            datasetLabel = 'Количество инцидентов'
        } = {}) {
            const container = document.getElementById(containerId);
            if (!container) {
                return;
            }

            if (!data.length) {
                container.innerHTML = '<p class="summary-empty">Нет данных для отображения</p>';
                if (chartKey && canvasId) {
                    renderSummaryBarChart(chartKey, canvasId, [], [], datasetLabel);
                }
                return;
            }

            const total = data.length;
            const byType = {};
            data.forEach(item => {
                const category = item.category || 'Не указана';
                const type = item.incidentType || 'Не указан';
                const key = `${category}|||${type}`;
                if (!byType[key]) {
                    byType[key] = { count: 0, warehouses: new Set() };
                }
                byType[key].count += 1;
                const targetValue = dimension === 'region' ? item.region : item.warehouse;
                if (targetValue) {
                    if (!byType[key].warehouses) {
                        byType[key].warehouses = new Set();
                    }
                    byType[key].warehouses.add(String(targetValue));
                }
            });

            const categoryTotals = {};
            const rows = Object.entries(byType)
                .map(([key, stats]) => {
                    const [category, type] = key.split('|||');
                    const warehouses = stats.warehouses.size
                        ? Array.from(stats.warehouses).sort((a, b) => a.localeCompare(b, 'ru')).join(', ')
                        : '—';
                    categoryTotals[category] = (categoryTotals[category] || 0) + stats.count;
                    return [
                        category,
                        type,
                        stats.count.toLocaleString('ru-RU'),
                        warehouses
                    ];
                })
                .sort((a, b) => parseInt(b[2], 10) - parseInt(a[2], 10));

            container.innerHTML = `
                <p class="summary-total">Всего инцидентов: <strong>${total.toLocaleString('ru-RU')}</strong></p>
                ${generateTableHTML(['Категория', 'Тип', 'Кол-во', dimensionLabel], rows)}
            `;
            initializeSummaryTableFilters(container);

            if (chartKey && canvasId) {
                const chartEntries = Object.entries(categoryTotals)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 8);
                renderSummaryBarChart(
                    chartKey,
                    canvasId,
                    chartEntries.map(([category]) => category),
                    chartEntries.map(([, count]) => count),
                    datasetLabel
                );
            }
        }

        function renderActivitiesSummary(data, containerId, {
            chartKey,
            canvasId,
            datasetLabel = 'Количество мероприятий'
        } = {}) {
            const container = document.getElementById(containerId);
            if (!container) {
                return;
            }

            if (!data.length) {
                container.innerHTML = '<p class="summary-empty">Нет данных для отображения</p>';
                if (chartKey && canvasId) {
                    renderSummaryBarChart(chartKey, canvasId, [], [], datasetLabel);
                }
                return;
            }

            const total = data.length;
            const byType = {};
            data.forEach(item => {
                const type = item.activityType || 'Не указан';
                if (!byType[type]) {
                    byType[type] = { count: 0, training: 0, real: 0 };
                }
                byType[type].count++;
                if (item.kind === 'Тренировка') byType[type].training++;
                if (item.kind === 'Реальная') byType[type].real++;
            });

            const rows = Object.entries(byType)
                .map(([type, stats]) => [
                    type,
                    stats.count.toLocaleString('ru-RU'),
                    stats.training.toLocaleString('ru-RU'),
                    stats.real.toLocaleString('ru-RU')
                ])
                .sort((a, b) => parseInt(b[1], 10) - parseInt(a[1], 10));

            container.innerHTML = `
                <p class="summary-total">Всего мероприятий: <strong>${total.toLocaleString('ru-RU')}</strong></p>
                ${generateTableHTML(['Тип', 'Кол-во', 'Тренировки', 'Реальные'], rows)}
            `;
            initializeSummaryTableFilters(container);

            if (chartKey && canvasId) {
                const chartEntries = Object.entries(byType)
                    .sort((a, b) => b[1].count - a[1].count);
                renderSummaryBarChart(
                    chartKey,
                    canvasId,
                    chartEntries.map(([type]) => type),
                    chartEntries.map(([, stats]) => stats.count),
                    datasetLabel
                );
            }
        }

        function renderAppealsSummary(data, containerId, {
            chartKey,
            canvasId,
            datasetLabel = 'Количество обращений'
        } = {}) {
            const container = document.getElementById(containerId);
            if (!container) {
                return;
            }

            if (!data.length) {
                container.innerHTML = '<p class="summary-empty">Нет данных для отображения</p>';
                if (chartKey && canvasId) {
                    renderSummaryBarChart(chartKey, canvasId, [], [], datasetLabel);
                }
                return;
            }

            const total = data.length;
            const byType = {};
            data.forEach(item => {
                const type = item.appealType || 'Не указан';
                if (!byType[type]) {
                    byType[type] = { count: 0, ok: 0, violation: 0 };
                }
                byType[type].count++;
                if (item.result === 'Нарушений не выявлено') byType[type].ok++;
                if (item.result === 'Выявлено нарушение') byType[type].violation++;
            });

            const rows = Object.entries(byType)
                .map(([type, stats]) => [
                    type,
                    stats.count.toLocaleString('ru-RU'),
                    stats.ok.toLocaleString('ru-RU'),
                    stats.violation.toLocaleString('ru-RU')
                ])
                .sort((a, b) => parseInt(b[1], 10) - parseInt(a[1], 10));

            container.innerHTML = `
                <p class="summary-total">Всего обращений: <strong>${total.toLocaleString('ru-RU')}</strong></p>
                ${generateTableHTML(['Вид обращения', 'Кол-во', 'Нарушений не выявлено', 'Выявлено нарушение'], rows)}
            `;
            initializeSummaryTableFilters(container);

            if (chartKey && canvasId) {
                const chartEntries = Object.entries(byType)
                    .sort((a, b) => b[1].count - a[1].count);
                renderSummaryBarChart(
                    chartKey,
                    canvasId,
                    chartEntries.map(([type]) => type),
                    chartEntries.map(([, stats]) => stats.count),
                    datasetLabel
                );
            }
        }

        let summaryTableIdCounter = 0;

        function generateTableHTML(headers, rows, options = {}) {
            const { footer } = options;
            const tableId = `summary-table-${++summaryTableIdCounter}`;
            let html = `
                <div class="summary-table-filter">
                    <input type="text" class="summary-table-search" placeholder="Фильтр по таблице" data-table-target="${tableId}">
                </div>
                <table class="summary-table" id="${tableId}"><thead><tr>`;
            headers.forEach(header => {
                html += `<th>${header}</th>`;
            });
            html += '</tr></thead><tbody>';

            if (rows && rows.length) {
                rows.forEach(row => {
                    html += '<tr>';
                    row.forEach(cell => {
                        html += `<td>${cell}</td>`;
                    });
                    html += '</tr>';
                });
            } else {
                html += `<tr class="summary-table-empty-row"><td colspan="${headers.length}" class="summary-table-empty">Нет данных</td></tr>`;
            }

            html += '</tbody>';

            if (footer && footer.length) {
                html += '<tfoot><tr>';
                footer.forEach(cell => {
                    html += `<td>${cell}</td>`;
                });
                html += '</tr></tfoot>';
            }

            html += '</table>';
            return html;
        }

        function initializeSummaryTableFilters(scope = document) {
            const root = scope instanceof Element ? scope : document;
            const inputs = Array.from(root.querySelectorAll('.summary-table-search'));

            inputs.forEach(input => {
                if (input.dataset.enhanced === 'true') {
                    return;
                }
                const tableId = input.dataset.tableTarget;
                const table = root.querySelector(`#${tableId}`) || document.getElementById(tableId);
                if (!table) {
                    return;
                }
                input.dataset.enhanced = 'true';
                input.addEventListener('input', () => {
                    filterSummaryTable(table, input.value);
                });
            });
        }

        function filterSummaryTable(table, query) {
            const tbody = table.tBodies[0];
            if (!tbody) {
                return;
            }

            const normalized = (query || '').trim().toLowerCase();
            const rows = Array.from(tbody.rows).filter(row =>
                !row.classList.contains('summary-table-empty-row') &&
                !row.classList.contains('summary-table-empty')
            );

            if (!normalized) {
                rows.forEach(row => {
                    row.style.display = '';
                });
                updateTableNoResultsState(table);
                return;
            }

            rows.forEach(row => {
                const text = row.textContent ? row.textContent.toLowerCase() : '';
                row.style.display = text.includes(normalized) ? '' : 'none';
            });

            updateTableNoResultsState(table);
        }

        function updateTableNoResultsState(table) {
            const tbody = table.tBodies[0];
            if (!tbody) {
                return;
            }

            const dataRows = Array.from(tbody.rows).filter(row =>
                !row.classList.contains('summary-table-empty-row') &&
                !row.classList.contains('summary-table-empty')
            );
            const visibleRows = dataRows.filter(row => row.style.display !== 'none');

            let emptyRow = tbody.querySelector('.summary-table-empty-row');
            if (!emptyRow) {
                emptyRow = document.createElement('tr');
                emptyRow.className = 'summary-table-empty-row';
                const colspan = table.tHead?.rows[0]?.cells.length || 1;
                emptyRow.innerHTML = `<td colspan="${colspan}" class="summary-table-empty">Нет данных</td>`;
                tbody.appendChild(emptyRow);
            }
            emptyRow.style.display = visibleRows.length ? 'none' : '';
        }

        function displayIncidentsGeneralSummary(data) {
            const container = document.getElementById('incidentsGeneralSummary');
            if (!container) return;

            if (!data.length) {
                container.innerHTML = '<p class="summary-empty">Нет данных для отображения</p>';
                return;
            }

            const total = data.length;
            const byType = {};
            data.forEach(item => {
                const category = item.category || 'Не указана';
                const type = item.incidentType || 'Не указан';
                const key = `${category}|||${type}`;
                byType[key] = (byType[key] || 0) + 1;
            });

            const rows = Object.entries(byType)
                .map(([key, count]) => {
                    const [category, type] = key.split('|||');
                    return [category, type, count];
                })
                .sort((a, b) => b[2] - a[2]);

            container.innerHTML = `<p style="margin-bottom: 12px;">Всего инцидентов: <strong>${total}</strong></p>` +
                generateTableHTML(['Категория', 'Тип', 'Кол-во'], rows);
        initializeSummaryTableFilters(container);
        }

        function displayActivitiesGeneralSummary(data) {
            const container = document.getElementById('activitiesGeneralSummary');
            if (!container) return;

            if (!data.length) {
                container.innerHTML = '<p class="summary-empty">Нет данных для отображения</p>';
                return;
            }

            const total = data.length;
            const byType = {};
            data.forEach(item => {
                const type = item.activityType || 'Не указан';
                if (!byType[type]) {
                    byType[type] = { count: 0, real: 0, training: 0 };
                }
                byType[type].count++;
                if (item.kind === 'Реальная') byType[type].real++;
                if (item.kind === 'Тренировка') byType[type].training++;
            });

            const rows = Object.entries(byType)
                .map(([type, stats]) => [
                    type,
                    stats.count,
                    stats.training,
                    stats.real
                ])
                .sort((a, b) => b[1] - a[1]);

            container.innerHTML = `<p style="margin-bottom: 12px;">Всего мероприятий: <strong>${total}</strong></p>` +
                generateTableHTML(['Тип', 'Кол-во', 'Тренировки', 'Реальные'], rows);
        initializeSummaryTableFilters(container);
        }

        function displayAppealsGeneralSummary(data) {
            const container = document.getElementById('appealsGeneralSummary');
            if (!container) return;

            if (!data.length) {
                container.innerHTML = '<p class="summary-empty">Нет данных для отображения</p>';
                return;
            }

            const total = data.length;
            const byType = {};
            data.forEach(item => {
                const type = item.appealType || 'Не указан';
                if (!byType[type]) {
                    byType[type] = { count: 0, ok: 0, violation: 0 };
                }
                byType[type].count++;
                if (item.result === 'Нарушений не выявлено') byType[type].ok++;
                if (item.result === 'Выявлено нарушение') byType[type].violation++;
            });

            const rows = Object.entries(byType)
                .map(([type, stats]) => [
                    type,
                    stats.count,
                    stats.ok,
                    stats.violation
                ])
                .sort((a, b) => b[1] - a[1]);

            container.innerHTML = `<p style="margin-bottom: 12px;">Всего обращений: <strong>${total}</strong></p>` +
                generateTableHTML(['Вид обращения', 'Кол-во', 'Нарушений не выявлено', 'Выявлено нарушение'], rows);
        initializeSummaryTableFilters(container);
        }

        function summarizeByMonth(data) {
            const summary = {};
            data.forEach(item => {
                if (!item.date) return;
                const date = new Date(item.date);
                if (Number.isNaN(date.getTime())) return;
                const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                summary[key] = (summary[key] || 0) + 1;
            });

            return Object.entries(summary)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([key, count]) => {
                    const [, month] = key.split('-');
                    return [String(parseInt(month, 10)), count];
                });
        }

        function summarizeByWeek(data) {
            const summary = {};
            data.forEach(item => {
                if (!item.date) return;
                const date = new Date(item.date);
                if (Number.isNaN(date.getTime())) return;
                const week = getWeekNumber(date);
                const year = date.getFullYear();
                const key = `${year}-W${String(week).padStart(2, '0')}`;
                summary[key] = (summary[key] || 0) + 1;
            });

            return Object.entries(summary)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([key, count]) => {
                    const [, weekPart] = key.split('-W');
                    return [String(parseInt(weekPart, 10)), count];
                });
        }

        function displayObjectSummary(investigations, incidents, activities, appeals) {
            const byObject = {};
            investigations.forEach(inv => {
                const obj = inv.warehouse || 'Не указан';
                if (!byObject[obj]) {
                    byObject[obj] = { count: 0, worked: 0 };
                }
                byObject[obj].count++;
                byObject[obj].worked += parseFloat(inv.sumWorked || 0);
            });
            const objectEntries = Object.entries(byObject).sort((a, b) => b[1].worked - a[1].worked);
            const objectHeaders = ['Склад', 'Количество', 'Сумма отработанного'];
            let objectRows = objectEntries.map(([obj, stats]) => [
                obj,
                stats.count.toLocaleString('ru-RU'),
                formatCurrency(stats.worked)
            ]);

            const objectContainer = document.getElementById('objectBreakdown');
            if (!objectRows.length) {
                objectRows = [['—', '0', formatCurrency(0)]];
            }
        objectContainer.innerHTML = generateTableHTML(objectHeaders, objectRows);
        initializeSummaryTableFilters(objectContainer);

            const investigationChartLabels = objectEntries.length ? objectEntries.map(([warehouse]) => warehouse) : ['—'];
            const investigationChartValues = objectEntries.length ? objectEntries.map(([, stats]) => stats.count) : [0];
            renderSummaryBarChart(
                'objectInvestigations',
                'objectInvestigationsChart',
                investigationChartLabels,
                investigationChartValues,
                'Количество расследований'
            );

            const incidentsByWarehouse = {};
            incidents.forEach(item => {
                const obj = item.warehouse || 'Не указан';
                incidentsByWarehouse[obj] = (incidentsByWarehouse[obj] || 0) + 1;
            });
            const incidentsRows = Object.entries(incidentsByWarehouse)
                .map(([warehouse, count]) => [warehouse, count.toLocaleString('ru-RU')])
                .sort((a, b) => b[1] - a[1]);
            const incidentsContainer = document.getElementById('incidentsObjectSummary');
            if (incidentsContainer) {
                const normalized = incidentsRows.length ? incidentsRows : [['—', '0']];
            incidentsContainer.innerHTML = generateTableHTML(['Склад', 'Кол-во'], normalized);
            initializeSummaryTableFilters(incidentsContainer);
            }

            const activitiesByWarehouse = {};
            activities.forEach(item => {
                const obj = item.warehouse || 'Не указан';
                activitiesByWarehouse[obj] = (activitiesByWarehouse[obj] || 0) + 1;
            });
            const activitiesRows = Object.entries(activitiesByWarehouse)
                .map(([warehouse, count]) => [warehouse, count.toLocaleString('ru-RU')])
                .sort((a, b) => b[1] - a[1]);
            const activitiesContainer = document.getElementById('activitiesObjectSummary');
            if (activitiesContainer) {
                const normalized = activitiesRows.length ? activitiesRows : [['—', '0']];
            activitiesContainer.innerHTML = generateTableHTML(['Склад', 'Кол-во'], normalized);
            initializeSummaryTableFilters(activitiesContainer);
            }

            const appealsByWarehouse = {};
            appeals.forEach(item => {
                const obj = item.warehouse || 'Не указан';
                appealsByWarehouse[obj] = (appealsByWarehouse[obj] || 0) + 1;
            });
            const appealsRows = Object.entries(appealsByWarehouse)
                .map(([warehouse, count]) => [warehouse, count.toLocaleString('ru-RU')])
                .sort((a, b) => b[1] - a[1]);
            const appealsContainer = document.getElementById('appealsObjectSummary');
            if (appealsContainer) {
                const normalized = appealsRows.length ? appealsRows : [['—', '0']];
            appealsContainer.innerHTML = generateTableHTML(['Склад', 'Кол-во'], normalized);
            initializeSummaryTableFilters(appealsContainer);
            }
        }

        function displayMonthsSummary(investigations, incidents, activities, appeals) {
            const byMonth = {};

            investigations.forEach(inv => {
                if (!inv.date) return;
                const date = new Date(inv.date);
                if (Number.isNaN(date.getTime())) return;
                const monthIndex = date.getMonth();
                if (!byMonth[monthIndex]) {
                    byMonth[monthIndex] = {
                        count: 0,
                        worked: 0,
                        detected: 0,
                        returned: 0
                    };
                }

                byMonth[monthIndex].count += 1;
                byMonth[monthIndex].worked += parseFloat(inv.sumWorked || 0);
                byMonth[monthIndex].detected += parseFloat(inv.sumDetected || 0);
                byMonth[monthIndex].returned += parseFloat(inv.sumReturned || 0);
            });

            const sortedMonths = Object.keys(byMonth).map(Number).sort((a, b) => a - b);
            const labels = sortedMonths.map(index => String(index + 1));
            const counts = sortedMonths.map(index => byMonth[index].count);
            const worked = sortedMonths.map(index => byMonth[index].worked);
            const detected = sortedMonths.map(index => byMonth[index].detected);
            const returned = sortedMonths.map(index => byMonth[index].returned);

            const ctx = document.getElementById('monthsChart');
            if (ctx) {
                if (window.monthsChartInstance) {
                    window.monthsChartInstance.destroy();
                }

                window.monthsChartInstance = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels,
                        datasets: [
                            {
                                label: 'Количество расследований',
                                data: counts,
                                backgroundColor: 'rgba(79, 195, 247, 0.7)',
                                borderColor: 'rgba(79, 195, 247, 1)',
                                borderWidth: 2,
                                yAxisID: 'y'
                            },
                            {
                                label: 'Отработано (₽)',
                                data: worked,
                                backgroundColor: 'rgba(67, 233, 123, 0.5)',
                                borderColor: 'rgba(67, 233, 123, 1)',
                                borderWidth: 2,
                                type: 'line',
                                yAxisID: 'y1'
                            },
                            {
                                label: 'Выявлено ущерба (₽)',
                                data: detected,
                                backgroundColor: 'rgba(255, 193, 7, 0.5)',
                                borderColor: 'rgba(255, 193, 7, 1)',
                                borderWidth: 2,
                                type: 'line',
                                yAxisID: 'y1'
                            },
                            {
                                label: 'Возмещено (₽)',
                                data: returned,
                                backgroundColor: 'rgba(76, 175, 80, 0.5)',
                                borderColor: 'rgba(76, 175, 80, 1)',
                                borderWidth: 2,
                                type: 'line',
                                yAxisID: 'y1'
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        interaction: { mode: 'index', intersect: false },
                        plugins: {
                            title: {
                                display: true,
                                text: 'Динамика по месяцам',
                                color: '#4fc3f7',
                                font: { size: 16, weight: '600' }
                            },
                            legend: { labels: { color: '#e0e0e0' } }
                        },
                        scales: {
                            y: {
                                type: 'linear',
                                display: true,
                                position: 'left',
                                title: { display: true, text: 'Количество', color: '#4fc3f7' },
                                ticks: { color: '#e0e0e0' },
                                grid: { color: 'rgba(255, 255, 255, 0.1)' }
                            },
                            y1: {
                                type: 'linear',
                                display: true,
                                position: 'right',
                                title: { display: true, text: 'Сумма (₽)', color: '#43e97b' },
                                ticks: {
                                    color: '#e0e0e0',
                                    callback: value => value.toLocaleString('ru-RU')
                                },
                                grid: { drawOnChartArea: false }
                            },
                            x: {
                                ticks: { color: '#e0e0e0' },
                                grid: { color: 'rgba(255, 255, 255, 0.1)' }
                            }
                        }
                    }
                });
            }

            const incidentsRows = summarizeByMonth(incidents);
            const incidentsMonthsContainer = document.getElementById('incidentsMonthsSummary');
            if (incidentsMonthsContainer) {
                incidentsMonthsContainer.innerHTML = incidentsRows.length
                    ? generateTableHTML(['Месяц', 'Кол-во'], incidentsRows)
                    : '<p class="summary-empty">Нет данных для отображения</p>';
                initializeSummaryTableFilters(incidentsMonthsContainer);
            }

            const activitiesRows = summarizeByMonth(activities);
            const activitiesMonthsContainer = document.getElementById('activitiesMonthsSummary');
            if (activitiesMonthsContainer) {
                activitiesMonthsContainer.innerHTML = activitiesRows.length
                    ? generateTableHTML(['Месяц', 'Кол-во'], activitiesRows)
                    : '<p class="summary-empty">Нет данных для отображения</p>';
                initializeSummaryTableFilters(activitiesMonthsContainer);
            }

            const appealsRows = summarizeByMonth(appeals);
            const appealsMonthsContainer = document.getElementById('appealsMonthsSummary');
            if (appealsMonthsContainer) {
                appealsMonthsContainer.innerHTML = appealsRows.length
                    ? generateTableHTML(['Месяц', 'Кол-во'], appealsRows)
                    : '<p class="summary-empty">Нет данных для отображения</p>';
                initializeSummaryTableFilters(appealsMonthsContainer);
            }
        }

        function displayWeeksSummary(investigations, incidents, activities, appeals) {
            // Группировка по году и ISO-неделе
            const byWeek = {};
            
            investigations.forEach(inv => {
                if (!inv.date) {
                    return;
                }

                const date = new Date(inv.date);
                if (Number.isNaN(date.getTime())) {
                    return;
                }

                const week = getWeekNumber(date);
                const year = date.getFullYear();
                const key = `${year}-W${String(week).padStart(2, '0')}`;
                
                if (!byWeek[key]) {
                    byWeek[key] = {
                        count: 0,
                        worked: 0,
                        detected: 0,
                        returned: 0
                    };
                }
                
                byWeek[key].count++;
                byWeek[key].worked += parseFloat(inv.sumWorked || 0);
                byWeek[key].detected += parseFloat(inv.sumDetected || 0);
                byWeek[key].returned += parseFloat(inv.sumReturned || 0);
            });
            
            // Сортировка по ключу "год-неделя"
            const sortedWeeks = Object.keys(byWeek).sort((a, b) => a.localeCompare(b));
            const labels = sortedWeeks.map(key => {
                const [, weekPart] = key.split('-W');
                return String(parseInt(weekPart, 10));
            });
            const counts = sortedWeeks.map(key => byWeek[key].count);
            const worked = sortedWeeks.map(key => byWeek[key].worked);
            const detected = sortedWeeks.map(key => byWeek[key].detected);
            const returned = sortedWeeks.map(key => byWeek[key].returned);
            
            // Create chart
            const ctx = document.getElementById('weeksChart');
            if (ctx) {
                if (window.weeksChartInstance) {
                    window.weeksChartInstance.destroy();
                }

                window.weeksChartInstance = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels,
                        datasets: [
                            {
                                label: 'Количество расследований',
                                data: counts,
                                backgroundColor: 'rgba(79, 195, 247, 0.2)',
                                borderColor: 'rgba(79, 195, 247, 1)',
                                borderWidth: 3,
                                fill: true,
                                tension: 0.4,
                                yAxisID: 'y'
                            },
                            {
                                label: 'Отработано (₽)',
                                data: worked,
                                backgroundColor: 'rgba(67, 233, 123, 0.2)',
                                borderColor: 'rgba(67, 233, 123, 1)',
                                borderWidth: 3,
                                fill: true,
                                tension: 0.4,
                                yAxisID: 'y1'
                            },
                            {
                                label: 'Выявлено ущерба (₽)',
                                data: detected,
                                backgroundColor: 'rgba(255, 193, 7, 0.2)',
                                borderColor: 'rgba(255, 193, 7, 1)',
                                borderWidth: 3,
                                fill: false,
                                tension: 0.4,
                                yAxisID: 'y1'
                            },
                            {
                                label: 'Возмещено (₽)',
                                data: returned,
                                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                                borderColor: 'rgba(76, 175, 80, 1)',
                                borderWidth: 3,
                                fill: false,
                                tension: 0.4,
                                yAxisID: 'y1'
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        interaction: {
                            mode: 'index',
                            intersect: false
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: 'Динамика по неделям',
                                color: '#4fc3f7',
                                font: {
                                    size: 18,
                                    weight: 'bold'
                                }
                            },
                            legend: {
                                labels: {
                                    color: '#e0e0e0'
                                }
                            }
                        },
                        scales: {
                            y: {
                                type: 'linear',
                                display: true,
                                position: 'left',
                                title: {
                                    display: true,
                                    text: 'Количество',
                                    color: '#4fc3f7'
                                },
                                ticks: {
                                    color: '#e0e0e0'
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.1)'
                                }
                            },
                            y1: {
                                type: 'linear',
                                display: true,
                                position: 'right',
                                title: {
                                    display: true,
                                    text: 'Сумма (₽)',
                                    color: '#43e97b'
                                },
                                ticks: {
                                    color: '#e0e0e0',
                                    callback: function(value) {
                                        return value.toLocaleString('ru-RU');
                                    }
                                },
                                grid: {
                                    drawOnChartArea: false
                                }
                            },
                            x: {
                                ticks: {
                                    color: '#e0e0e0'
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.1)'
                                }
                            }
                        }
                    }
                });
            }

            const incidentsRows = summarizeByWeek(incidents);
            const incidentsWeeksContainer = document.getElementById('incidentsWeeksSummary');
            if (incidentsWeeksContainer) {
                incidentsWeeksContainer.innerHTML = incidentsRows.length
                    ? generateTableHTML(['Неделя', 'Кол-во'], incidentsRows)
                    : '<p class="summary-empty">Нет данных для отображения</p>';
                initializeSummaryTableFilters(incidentsWeeksContainer);
            }

            const activitiesRows = summarizeByWeek(activities);
            const activitiesWeeksContainer = document.getElementById('activitiesWeeksSummary');
            if (activitiesWeeksContainer) {
                activitiesWeeksContainer.innerHTML = activitiesRows.length
                    ? generateTableHTML(['Неделя', 'Кол-во'], activitiesRows)
                    : '<p class="summary-empty">Нет данных для отображения</p>';
                initializeSummaryTableFilters(activitiesWeeksContainer);
            }

            const appealsRows = summarizeByWeek(appeals);
            const appealsWeeksContainer = document.getElementById('appealsWeeksSummary');
            if (appealsWeeksContainer) {
                appealsWeeksContainer.innerHTML = appealsRows.length
                    ? generateTableHTML(['Неделя', 'Кол-во'], appealsRows)
                    : '<p class="summary-empty">Нет данных для отображения</p>';
                initializeSummaryTableFilters(appealsWeeksContainer);
            }
        }

        function getWeekNumber(date) {
            const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
            const dayNum = d.getUTCDay() || 7;
            d.setUTCDate(d.getUTCDate() + 4 - dayNum);
            const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
            return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        }

        function goBack() {
            const currentLevel = document.querySelector('.level-container.active').id;
            
            if (currentLevel === 'summary-general') {
                goToLevel(1);
                state.region = '';
                state.type = '';
                state.warehouse = '';
                state.selectedDate = null;
                state.date = '';
                state.breadcrumbs = ['Главная'];
            } else if (currentLevel.startsWith('level4-') || (currentLevel.startsWith('summary-') && currentLevel !== 'summary-general')) {
                // From forms/summaries back to level 3
                goToLevel(3);
            } else if (currentLevel === 'level3') {
                // From level 3 back to level 2
                goToLevel(2);
                state.type = '';
                state.warehouse = '';
                state.date = '';
                state.selectedDate = null;
                document.getElementById('summaryButtons').style.display = 'none';
                document.getElementById('warehouseList').innerHTML = '';
                document.getElementById('reportTypes').style.display = 'none';
                const selectedDateDisplay = document.getElementById('selectedDateDisplay');
                if (selectedDateDisplay) {
                    selectedDateDisplay.textContent = 'Не выбрано';
                }
                const typeSummaryCallout = document.getElementById('typeSummaryCallout');
                if (typeSummaryCallout) {
                    typeSummaryCallout.style.display = 'none';
                }
                const calendarLayout = document.getElementById('calendarLayout');
                if (calendarLayout) {
                    calendarLayout.style.display = 'none';
                }
                const regionSummaryButton = document.getElementById('regionSummaryButton');
                if (regionSummaryButton) {
                    regionSummaryButton.style.display = '';
                }
                const regionDashboards = document.getElementById('regionDashboards');
                if (regionDashboards) {
                    regionDashboards.style.display = state.region ? 'flex' : 'none';
                }
                document.querySelectorAll('.type-button').forEach(btn => btn.classList.remove('active'));
            } else if (currentLevel === 'level2') {
                // From level 2 back to level 1
                goToLevel(1);
                state.region = '';
            }
            updateBreadcrumb();
            if (typeof updateRegionDashboards === 'function') {
                updateRegionDashboards();
            }
            if (typeof updateTypeDashboards === 'function') {
                updateTypeDashboards();
            }
        }

        function updateBackButtonVisibility() {
            const backButton = document.getElementById('backButton');
            const currentLevel = document.querySelector('.level-container.active').id;
            
            if (currentLevel === 'level1') {
                backButton.classList.remove('show');
            } else {
                backButton.classList.add('show');
            }
        }

        // Override goToLevel to update back button
        const originalGoToLevel = goToLevel;
        goToLevel = function(level) {
            originalGoToLevel(level);
            updateBackButtonVisibility();
        };
        updateBackButtonVisibility();

        // Initialize with test data
        function initializeTestData() {
            const existing = localStorage.getItem('investigations');
            
            // Check if we have test data
            if (!existing || existing === '[]' || JSON.parse(existing).length === 0) {
                // Load test data
                localStorage.setItem('investigations', JSON.stringify(TEST_DATA));
                console.log('✓ Загружено ' + TEST_DATA.length + ' тестовых записей');
                console.log('✓ По всем складам СЗФО');
                console.log('✓ За весь сентябрь 2025');
            } else {
                const existingData = JSON.parse(existing);
                console.log('✓ Уже есть ' + existingData.length + ' записей');
            }
        }

        function resetTestData() {
            if (confirm('Это удалит все текущие данные и загрузит 500 тестовых записей. Продолжить?')) {
                localStorage.setItem('investigations', JSON.stringify(TEST_DATA));
                alert('✓ Загружено ' + TEST_DATA.length + ' тестовых записей по всем складам СЗФО за сентябрь 2025');
                console.log('✓ Тестовые данные перезагружены');
            }
        }

        // Test data embedded
        const TEST_DATA = [{"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-20", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/41316609/general", "productName": "Товар #8072", "sumWorked": 96000.54, "comment": "Тестовая запись 1", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-18", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/59820287/general", "productName": "Товар #1187", "sumWorked": 95190.76, "comment": "Тестовая запись 2", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-28", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/90982568/general", "productName": "Товар #2906", "sumWorked": 23365.68, "comment": "Тестовая запись 3", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-15", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/40562902/general", "productName": "Товар #7951", "sumWorked": 39957.17, "comment": "Тестовая запись 4", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-05", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/57458941/general", "productName": "Товар #8421", "sumWorked": 96904.27, "comment": "Тестовая запись 5", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-18", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/67231282/general", "productName": "Товар #9140", "sumWorked": 41861.44, "comment": "Тестовая запись 6", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-18", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/57501480/general", "productName": "Товар #8149", "sumWorked": 53033.92, "comment": "Тестовая запись 7", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-16", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/97889377/general", "productName": "Товар #4789", "sumWorked": 88193.4, "comment": "Тестовая запись 8", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-30", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/27610442/general", "productName": "Товар #9592", "sumWorked": 65947.64, "comment": "Тестовая запись 9", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-04", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/17147070/general", "productName": "Товар #3276", "sumWorked": 95939.65, "comment": "Тестовая запись 10", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-30", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/66697992/general", "productName": "Товар #5621", "sumWorked": 10441.76, "comment": "Тестовая запись 11", "timestamp": "2025-09-30T00:00:00", "sumDetected": 21914.6, "sumReturned": 10669.45, "violator": "Селлер/поставщик", "violatorInfo": "ID74673054"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-07", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/35545829/general", "productName": "Товар #2184", "sumWorked": 20336.81, "comment": "Тестовая запись 12", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-07", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/62786135/general", "productName": "Товар #2334", "sumWorked": 86463.1, "comment": "Тестовая запись 13", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-27", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/91744816/general", "productName": "Товар #1757", "sumWorked": 54743.56, "comment": "Тестовая запись 14", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-02", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/73048568/general", "productName": "Товар #5311", "sumWorked": 90199.28, "comment": "Тестовая запись 15", "timestamp": "2025-09-02T00:00:00", "sumDetected": 28225.84, "sumReturned": 18220.3, "violator": "Курьер", "violatorInfo": "ID55071238"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-30", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/25886887/general", "productName": "Товар #3008", "sumWorked": 90244.0, "comment": "Тестовая запись 16", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-13", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/40331561/general", "productName": "Товар #7181", "sumWorked": 64836.3, "comment": "Тестовая запись 17", "timestamp": "2025-09-13T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-12", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/58762206/general", "productName": "Товар #6967", "sumWorked": 4646.71, "comment": "Тестовая запись 18", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-01", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/44406960/general", "productName": "Товар #6647", "sumWorked": 21261.89, "comment": "Тестовая запись 19", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-25", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78994780/general", "productName": "Товар #7372", "sumWorked": 96994.17, "comment": "Тестовая запись 20", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-06", "checkType": "AFF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/23333937/general", "productName": "Товар #5579", "sumWorked": 82858.41, "comment": "Тестовая запись 21", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-05", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/19028715/general", "productName": "Товар #1523", "sumWorked": 26502.56, "comment": "Тестовая запись 22", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-23", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/58460097/general", "productName": "Товар #4522", "sumWorked": 69082.94, "comment": "Тестовая запись 23", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-23", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/66320740/general", "productName": "Товар #3449", "sumWorked": 15554.72, "comment": "Тестовая запись 24", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-29", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/77418994/general", "productName": "Товар #5668", "sumWorked": 99605.84, "comment": "Тестовая запись 25", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-06", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/22021064/general", "productName": "Товар #3936", "sumWorked": 68813.07, "comment": "Тестовая запись 26", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-29", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/11590956/general", "productName": "Товар #5600", "sumWorked": 61476.84, "comment": "Тестовая запись 27", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-20", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/89161547/general", "productName": "Товар #7543", "sumWorked": 77564.82, "comment": "Тестовая запись 28", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-24", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/97664577/general", "productName": "Товар #5048", "sumWorked": 2226.5, "comment": "Тестовая запись 29", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-28", "checkType": "Проверка C2C", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/14604057/general", "productName": "Товар #2217", "sumWorked": 62319.39, "comment": "Тестовая запись 30", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-30", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/31214315/general", "productName": "Товар #3521", "sumWorked": 38256.94, "comment": "Тестовая запись 31", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-03", "checkType": "POSS", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/36247962/general", "productName": "Товар #5420", "sumWorked": 80617.45, "comment": "Тестовая запись 32", "timestamp": "2025-09-03T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-28", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/16458517/general", "productName": "Товар #9973", "sumWorked": 5921.33, "comment": "Тестовая запись 33", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-19", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/79433344/general", "productName": "Товар #6374", "sumWorked": 30610.84, "comment": "Тестовая запись 34", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-15", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/20894375/general", "productName": "Товар #9706", "sumWorked": 50663.64, "comment": "Тестовая запись 35", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-19", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/23842024/general", "productName": "Товар #9633", "sumWorked": 61792.4, "comment": "Тестовая запись 36", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-13", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/85536856/general", "productName": "Товар #5765", "sumWorked": 42863.24, "comment": "Тестовая запись 37", "timestamp": "2025-09-13T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-08", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/21890017/general", "productName": "Товар #3708", "sumWorked": 38043.0, "comment": "Тестовая запись 38", "timestamp": "2025-09-08T00:00:00", "sumDetected": 19646.15, "sumReturned": 13849.61, "violator": "Селлер/поставщик", "violatorInfo": "ID79710877"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-15", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/67327346/general", "productName": "Товар #6422", "sumWorked": 86887.78, "comment": "Тестовая запись 39", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-13", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/81467726/general", "productName": "Товар #4919", "sumWorked": 30930.68, "comment": "Тестовая запись 40", "timestamp": "2025-09-13T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-20", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/80414496/general", "productName": "Товар #4147", "sumWorked": 72479.87, "comment": "Тестовая запись 41", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-11", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/32555004/general", "productName": "Товар #5042", "sumWorked": 28993.46, "comment": "Тестовая запись 42", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-12", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/56052333/general", "productName": "Товар #9507", "sumWorked": 58597.03, "comment": "Тестовая запись 43", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-22", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/34001645/general", "productName": "Товар #6810", "sumWorked": 91594.5, "comment": "Тестовая запись 44", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-21", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/16906887/general", "productName": "Товар #6775", "sumWorked": 83556.97, "comment": "Тестовая запись 45", "timestamp": "2025-09-21T00:00:00", "sumDetected": 36091.23, "sumReturned": 19814.84, "violator": "Курьер", "violatorInfo": "ID55877247"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-07", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/13343710/general", "productName": "Товар #9010", "sumWorked": 55862.44, "comment": "Тестовая запись 46", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-18", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/19315524/general", "productName": "Товар #8148", "sumWorked": 16045.77, "comment": "Тестовая запись 47", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-02", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/19814212/general", "productName": "Товар #7038", "sumWorked": 47361.24, "comment": "Тестовая запись 48", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-11", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/12876450/general", "productName": "Товар #8020", "sumWorked": 39516.35, "comment": "Тестовая запись 49", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-06", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/68940239/general", "productName": "Товар #5576", "sumWorked": 70343.31, "comment": "Тестовая запись 50", "timestamp": "2025-09-06T00:00:00", "sumDetected": 20596.88, "sumReturned": 3013.52, "violator": "OzonJob", "violatorInfo": "ID16625553"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-30", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/75369236/general", "productName": "Товар #5203", "sumWorked": 94495.28, "comment": "Тестовая запись 51", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-26", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/29034227/general", "productName": "Товар #6077", "sumWorked": 69190.33, "comment": "Тестовая запись 52", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-01", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/46188493/general", "productName": "Товар #2629", "sumWorked": 32330.89, "comment": "Тестовая запись 53", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-22", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/61788740/general", "productName": "Товар #1421", "sumWorked": 83927.27, "comment": "Тестовая запись 54", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-22", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/84067171/general", "productName": "Товар #9945", "sumWorked": 81749.39, "comment": "Тестовая запись 55", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-16", "checkType": "AFF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/45381454/general", "productName": "Товар #1148", "sumWorked": 35558.39, "comment": "Тестовая запись 56", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-16", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/93843667/general", "productName": "Товар #6929", "sumWorked": 53709.64, "comment": "Тестовая запись 57", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-08", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/31765348/general", "productName": "Товар #2829", "sumWorked": 23139.72, "comment": "Тестовая запись 58", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-15", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/44854656/general", "productName": "Товар #1526", "sumWorked": 79136.99, "comment": "Тестовая запись 59", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-21", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/75506905/general", "productName": "Товар #5040", "sumWorked": 94367.33, "comment": "Тестовая запись 60", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-09", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/81393395/general", "productName": "Товар #3129", "sumWorked": 9981.81, "comment": "Тестовая запись 61", "timestamp": "2025-09-09T00:00:00", "sumDetected": 32968.84, "sumReturned": 7587.02, "violator": "Курьер", "violatorInfo": "ID24110356"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-05", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/99612684/general", "productName": "Товар #9736", "sumWorked": 45258.7, "comment": "Тестовая запись 62", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-10", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/95069408/general", "productName": "Товар #3469", "sumWorked": 23610.32, "comment": "Тестовая запись 63", "timestamp": "2025-09-10T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-06", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/94219718/general", "productName": "Товар #6453", "sumWorked": 77263.32, "comment": "Тестовая запись 64", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-12", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/98814466/general", "productName": "Товар #8415", "sumWorked": 20097.45, "comment": "Тестовая запись 65", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-23", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/50766993/general", "productName": "Товар #2162", "sumWorked": 76089.22, "comment": "Тестовая запись 66", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-09", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/30101586/general", "productName": "Товар #2463", "sumWorked": 54381.86, "comment": "Тестовая запись 67", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-29", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/25471781/general", "productName": "Товар #3134", "sumWorked": 34937.05, "comment": "Тестовая запись 68", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-05", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/64212424/general", "productName": "Товар #8484", "sumWorked": 6880.5, "comment": "Тестовая запись 69", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-25", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/26381786/general", "productName": "Товар #1500", "sumWorked": 10312.0, "comment": "Тестовая запись 70", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-07", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/13784808/general", "productName": "Товар #7201", "sumWorked": 75619.72, "comment": "Тестовая запись 71", "timestamp": "2025-09-07T00:00:00", "sumDetected": 12765.94, "sumReturned": 7280.05, "violator": "Штат", "violatorInfo": "ID64808282"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-17", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/86221032/general", "productName": "Товар #1989", "sumWorked": 70990.88, "comment": "Тестовая запись 72", "timestamp": "2025-09-17T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-07", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/35112121/general", "productName": "Товар #9414", "sumWorked": 41138.7, "comment": "Тестовая запись 73", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-04", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/92655430/general", "productName": "Товар #9220", "sumWorked": 57696.4, "comment": "Тестовая запись 74", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-09", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/68478252/general", "productName": "Товар #5240", "sumWorked": 98959.39, "comment": "Тестовая запись 75", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-18", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/75893065/general", "productName": "Товар #7357", "sumWorked": 48066.33, "comment": "Тестовая запись 76", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-28", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/59404309/general", "productName": "Товар #7829", "sumWorked": 86920.07, "comment": "Тестовая запись 77", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-15", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/82187148/general", "productName": "Товар #4516", "sumWorked": 38383.1, "comment": "Тестовая запись 78", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-24", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/95965128/general", "productName": "Товар #6928", "sumWorked": 32447.04, "comment": "Тестовая запись 79", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-11", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/70134240/general", "productName": "Товар #9806", "sumWorked": 61603.58, "comment": "Тестовая запись 80", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-12", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/43363764/general", "productName": "Товар #2876", "sumWorked": 19688.41, "comment": "Тестовая запись 81", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-15", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/50235829/general", "productName": "Товар #1876", "sumWorked": 90825.73, "comment": "Тестовая запись 82", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-09", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/31741773/general", "productName": "Товар #8641", "sumWorked": 21978.83, "comment": "Тестовая запись 83", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-07", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/30746558/general", "productName": "Товар #6998", "sumWorked": 82939.26, "comment": "Тестовая запись 84", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-07", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/18798170/general", "productName": "Товар #3883", "sumWorked": 58038.39, "comment": "Тестовая запись 85", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-23", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/19706710/general", "productName": "Товар #7827", "sumWorked": 86444.48, "comment": "Тестовая запись 86", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-02", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/76836574/general", "productName": "Товар #9782", "sumWorked": 25914.67, "comment": "Тестовая запись 87", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-05", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/65886049/general", "productName": "Товар #6886", "sumWorked": 73681.72, "comment": "Тестовая запись 88", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-29", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/10319819/general", "productName": "Товар #2333", "sumWorked": 1532.86, "comment": "Тестовая запись 89", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-19", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/36186862/general", "productName": "Товар #4556", "sumWorked": 45231.65, "comment": "Тестовая запись 90", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-10", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/57391180/general", "productName": "Товар #4953", "sumWorked": 73330.05, "comment": "Тестовая запись 91", "timestamp": "2025-09-10T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-29", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78137860/general", "productName": "Товар #3859", "sumWorked": 4579.89, "comment": "Тестовая запись 92", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-08", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/21752326/general", "productName": "Товар #5365", "sumWorked": 5912.6, "comment": "Тестовая запись 93", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-26", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78978365/general", "productName": "Товар #4879", "sumWorked": 71763.92, "comment": "Тестовая запись 94", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-20", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/18394288/general", "productName": "Товар #6738", "sumWorked": 17335.31, "comment": "Тестовая запись 95", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-14", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/87457389/general", "productName": "Товар #1827", "sumWorked": 37484.3, "comment": "Тестовая запись 96", "timestamp": "2025-09-14T00:00:00", "sumDetected": 21660.73, "sumReturned": 5229.33, "violator": "OzonJob", "violatorInfo": "ID26294940"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-02", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/75311439/general", "productName": "Товар #1002", "sumWorked": 73953.62, "comment": "Тестовая запись 97", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-26", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/98050436/general", "productName": "Товар #4439", "sumWorked": 86803.08, "comment": "Тестовая запись 98", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-24", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/55607100/general", "productName": "Товар #2047", "sumWorked": 54466.22, "comment": "Тестовая запись 99", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-16", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/84394581/general", "productName": "Товар #5122", "sumWorked": 35808.63, "comment": "Тестовая запись 100", "timestamp": "2025-09-16T00:00:00", "sumDetected": 30117.77, "sumReturned": 12836.87, "violator": "Селлер/поставщик", "violatorInfo": "ID50483792"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-08", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/63599850/general", "productName": "Товар #8982", "sumWorked": 74609.74, "comment": "Тестовая запись 101", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-27", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/59920437/general", "productName": "Товар #5642", "sumWorked": 36521.93, "comment": "Тестовая запись 102", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-17", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/23360946/general", "productName": "Товар #3002", "sumWorked": 14133.94, "comment": "Тестовая запись 103", "timestamp": "2025-09-17T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-04", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/26992288/general", "productName": "Товар #1272", "sumWorked": 13009.8, "comment": "Тестовая запись 104", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-18", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/13573721/general", "productName": "Товар #5649", "sumWorked": 57050.38, "comment": "Тестовая запись 105", "timestamp": "2025-09-18T00:00:00", "sumDetected": 31471.29, "sumReturned": 19550.71, "violator": "Селлер/поставщик", "violatorInfo": "ID11501531"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-04", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/85074543/general", "productName": "Товар #2098", "sumWorked": 87597.32, "comment": "Тестовая запись 106", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-02", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/92404659/general", "productName": "Товар #8676", "sumWorked": 31186.64, "comment": "Тестовая запись 107", "timestamp": "2025-09-02T00:00:00", "sumDetected": 2689.29, "sumReturned": 128.36, "violator": "Селлер/поставщик", "violatorInfo": "ID55203227"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-20", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78283977/general", "productName": "Товар #5482", "sumWorked": 77476.63, "comment": "Тестовая запись 108", "timestamp": "2025-09-20T00:00:00", "sumDetected": 33192.12, "sumReturned": 23922.92, "violator": "Штат", "violatorInfo": "ID18504954"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-11", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/82914613/general", "productName": "Товар #1120", "sumWorked": 80522.85, "comment": "Тестовая запись 109", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-26", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78303523/general", "productName": "Товар #5287", "sumWorked": 57927.19, "comment": "Тестовая запись 110", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-29", "checkType": "POSS", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/90969219/general", "productName": "Товар #4175", "sumWorked": 70140.99, "comment": "Тестовая запись 111", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-15", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/26609258/general", "productName": "Товар #3192", "sumWorked": 25720.78, "comment": "Тестовая запись 112", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-17", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/71927570/general", "productName": "Товар #5136", "sumWorked": 28423.75, "comment": "Тестовая запись 113", "timestamp": "2025-09-17T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-22", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/15335248/general", "productName": "Товар #9096", "sumWorked": 94863.45, "comment": "Тестовая запись 114", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-05", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/15492409/general", "productName": "Товар #4481", "sumWorked": 29029.39, "comment": "Тестовая запись 115", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-09", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/43351182/general", "productName": "Товар #4923", "sumWorked": 53245.54, "comment": "Тестовая запись 116", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-10", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78980375/general", "productName": "Товар #1532", "sumWorked": 1574.22, "comment": "Тестовая запись 117", "timestamp": "2025-09-10T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-14", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/49349085/general", "productName": "Товар #7557", "sumWorked": 36861.41, "comment": "Тестовая запись 118", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-19", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/69517364/general", "productName": "Товар #8036", "sumWorked": 85155.24, "comment": "Тестовая запись 119", "timestamp": "2025-09-19T00:00:00", "sumDetected": 17162.42, "sumReturned": 5525.53, "violator": "Селлер/поставщик", "violatorInfo": "ID64780345"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-01", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/85600046/general", "productName": "Товар #4039", "sumWorked": 57215.14, "comment": "Тестовая запись 120", "timestamp": "2025-09-01T00:00:00", "sumDetected": 26602.42, "sumReturned": 20412.79, "violator": "OzonJob", "violatorInfo": "ID85823800"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-29", "checkType": "КРАЖА", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/90360690/general", "productName": "Товар #2696", "sumWorked": 4449.29, "comment": "Тестовая запись 121", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-11", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/58661328/general", "productName": "Товар #9267", "sumWorked": 58810.43, "comment": "Тестовая запись 122", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-07", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/15770930/general", "productName": "Товар #9447", "sumWorked": 47164.59, "comment": "Тестовая запись 123", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-01", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/49109970/general", "productName": "Товар #4658", "sumWorked": 26271.38, "comment": "Тестовая запись 124", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-01", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/84452682/general", "productName": "Товар #8322", "sumWorked": 18914.94, "comment": "Тестовая запись 125", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-27", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/83444097/general", "productName": "Товар #4722", "sumWorked": 59148.82, "comment": "Тестовая запись 126", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-29", "checkType": "Проверка C2C", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/50185861/general", "productName": "Товар #1025", "sumWorked": 91726.1, "comment": "Тестовая запись 127", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-21", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/22075973/general", "productName": "Товар #1696", "sumWorked": 63723.94, "comment": "Тестовая запись 128", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-05", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/74558682/general", "productName": "Товар #8301", "sumWorked": 83505.8, "comment": "Тестовая запись 129", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-07", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/81390534/general", "productName": "Товар #7499", "sumWorked": 22850.49, "comment": "Тестовая запись 130", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-05", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/65083753/general", "productName": "Товар #4725", "sumWorked": 6558.6, "comment": "Тестовая запись 131", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-06", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/34017689/general", "productName": "Товар #6217", "sumWorked": 97626.73, "comment": "Тестовая запись 132", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-30", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/44801132/general", "productName": "Товар #7517", "sumWorked": 54049.63, "comment": "Тестовая запись 133", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-02", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/94428727/general", "productName": "Товар #9411", "sumWorked": 80853.37, "comment": "Тестовая запись 134", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-14", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/64351429/general", "productName": "Товар #2656", "sumWorked": 94053.78, "comment": "Тестовая запись 135", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-26", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/77479413/general", "productName": "Товар #9941", "sumWorked": 77961.91, "comment": "Тестовая запись 136", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-06", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/55608810/general", "productName": "Товар #9751", "sumWorked": 63695.37, "comment": "Тестовая запись 137", "timestamp": "2025-09-06T00:00:00", "sumDetected": 31933.35, "sumReturned": 9034.23, "violator": "Селлер/поставщик", "violatorInfo": "ID82814420"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-19", "checkType": "POSS", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/93322703/general", "productName": "Товар #8599", "sumWorked": 23461.48, "comment": "Тестовая запись 138", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-24", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/95196577/general", "productName": "Товар #3412", "sumWorked": 88197.05, "comment": "Тестовая запись 139", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-14", "checkType": "POSS", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/44439150/general", "productName": "Товар #5471", "sumWorked": 64899.47, "comment": "Тестовая запись 140", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-07", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/89906592/general", "productName": "Товар #1654", "sumWorked": 71287.45, "comment": "Тестовая запись 141", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-16", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/84108594/general", "productName": "Товар #2289", "sumWorked": 50028.38, "comment": "Тестовая запись 142", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-29", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/77866470/general", "productName": "Товар #9552", "sumWorked": 55227.95, "comment": "Тестовая запись 143", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-18", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/69949364/general", "productName": "Товар #9929", "sumWorked": 68448.57, "comment": "Тестовая запись 144", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-11", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/12548617/general", "productName": "Товар #3084", "sumWorked": 35117.55, "comment": "Тестовая запись 145", "timestamp": "2025-09-11T00:00:00", "sumDetected": 48379.77, "sumReturned": 28636.1, "violator": "Курьер", "violatorInfo": "ID56068721"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-03", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/32290124/general", "productName": "Товар #4827", "sumWorked": 74514.73, "comment": "Тестовая запись 146", "timestamp": "2025-09-03T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-21", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/62260349/general", "productName": "Товар #1484", "sumWorked": 99277.67, "comment": "Тестовая запись 147", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-07", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/39402348/general", "productName": "Товар #2634", "sumWorked": 25238.34, "comment": "Тестовая запись 148", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-14", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/70433297/general", "productName": "Товар #3023", "sumWorked": 42915.65, "comment": "Тестовая запись 149", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-15", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78634601/general", "productName": "Товар #7678", "sumWorked": 64136.78, "comment": "Тестовая запись 150", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-20", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/59576752/general", "productName": "Товар #1388", "sumWorked": 8669.57, "comment": "Тестовая запись 151", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-10", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/46422298/general", "productName": "Товар #1748", "sumWorked": 91538.94, "comment": "Тестовая запись 152", "timestamp": "2025-09-10T00:00:00", "sumDetected": 5552.95, "sumReturned": 3746.22, "violator": "OzonJob", "violatorInfo": "ID52573455"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-16", "checkType": "КРАЖА", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/63494791/general", "productName": "Товар #8436", "sumWorked": 49210.89, "comment": "Тестовая запись 153", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-19", "checkType": "AFF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/41971044/general", "productName": "Товар #6802", "sumWorked": 66367.36, "comment": "Тестовая запись 154", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-08", "checkType": "КРАЖА", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/60395468/general", "productName": "Товар #2118", "sumWorked": 42595.3, "comment": "Тестовая запись 155", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-09", "checkType": "AFF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/89245947/general", "productName": "Товар #7883", "sumWorked": 45960.88, "comment": "Тестовая запись 156", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-11", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/43248882/general", "productName": "Товар #8389", "sumWorked": 76687.07, "comment": "Тестовая запись 157", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-23", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/35731183/general", "productName": "Товар #6918", "sumWorked": 47840.41, "comment": "Тестовая запись 158", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-04", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/87150828/general", "productName": "Товар #7393", "sumWorked": 64510.03, "comment": "Тестовая запись 159", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-11", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/36009348/general", "productName": "Товар #9918", "sumWorked": 70618.01, "comment": "Тестовая запись 160", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-16", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/23019001/general", "productName": "Товар #4027", "sumWorked": 96913.92, "comment": "Тестовая запись 161", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-23", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/38088313/general", "productName": "Товар #6762", "sumWorked": 15107.81, "comment": "Тестовая запись 162", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-23", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/31588374/general", "productName": "Товар #9703", "sumWorked": 84770.3, "comment": "Тестовая запись 163", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-24", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/79971318/general", "productName": "Товар #5745", "sumWorked": 59018.71, "comment": "Тестовая запись 164", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-05", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/94128047/general", "productName": "Товар #6545", "sumWorked": 65530.8, "comment": "Тестовая запись 165", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-29", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/57120181/general", "productName": "Товар #4205", "sumWorked": 44244.16, "comment": "Тестовая запись 166", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-15", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/22171022/general", "productName": "Товар #8827", "sumWorked": 34657.97, "comment": "Тестовая запись 167", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-30", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/25985156/general", "productName": "Товар #5308", "sumWorked": 97837.41, "comment": "Тестовая запись 168", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-09", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/54684017/general", "productName": "Товар #1438", "sumWorked": 20818.88, "comment": "Тестовая запись 169", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-09", "checkType": "КРАЖА", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/91208911/general", "productName": "Товар #6652", "sumWorked": 13378.36, "comment": "Тестовая запись 170", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-11", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/88336496/general", "productName": "Товар #7447", "sumWorked": 97256.17, "comment": "Тестовая запись 171", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-07", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/62554115/general", "productName": "Товар #2956", "sumWorked": 91123.88, "comment": "Тестовая запись 172", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-09", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/73829102/general", "productName": "Товар #8352", "sumWorked": 38523.5, "comment": "Тестовая запись 173", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-02", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/29085531/general", "productName": "Товар #4094", "sumWorked": 15762.91, "comment": "Тестовая запись 174", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-03", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/45033495/general", "productName": "Товар #1724", "sumWorked": 34950.49, "comment": "Тестовая запись 175", "timestamp": "2025-09-03T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-24", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/80121861/general", "productName": "Товар #8910", "sumWorked": 26777.74, "comment": "Тестовая запись 176", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-03", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/72473637/general", "productName": "Товар #1766", "sumWorked": 66624.4, "comment": "Тестовая запись 177", "timestamp": "2025-09-03T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-28", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/85105021/general", "productName": "Товар #1895", "sumWorked": 87142.1, "comment": "Тестовая запись 178", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-08", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/72213233/general", "productName": "Товар #7534", "sumWorked": 25143.92, "comment": "Тестовая запись 179", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-02", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/34465888/general", "productName": "Товар #8321", "sumWorked": 36156.88, "comment": "Тестовая запись 180", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-10", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/56069051/general", "productName": "Товар #2360", "sumWorked": 96534.3, "comment": "Тестовая запись 181", "timestamp": "2025-09-10T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-29", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/56284336/general", "productName": "Товар #7479", "sumWorked": 10792.16, "comment": "Тестовая запись 182", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-08", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/59742201/general", "productName": "Товар #9393", "sumWorked": 38680.12, "comment": "Тестовая запись 183", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-25", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/32619947/general", "productName": "Товар #4587", "sumWorked": 52706.48, "comment": "Тестовая запись 184", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-16", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/55887949/general", "productName": "Товар #5843", "sumWorked": 99579.58, "comment": "Тестовая запись 185", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-14", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/42337754/general", "productName": "Товар #5095", "sumWorked": 26036.68, "comment": "Тестовая запись 186", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-20", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/72895793/general", "productName": "Товар #8031", "sumWorked": 69473.25, "comment": "Тестовая запись 187", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-14", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/71823156/general", "productName": "Товар #9802", "sumWorked": 64296.21, "comment": "Тестовая запись 188", "timestamp": "2025-09-14T00:00:00", "sumDetected": 48574.32, "sumReturned": 38126.0, "violator": "Селлер/поставщик", "violatorInfo": "ID38734418"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-17", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/72590082/general", "productName": "Товар #9730", "sumWorked": 3666.23, "comment": "Тестовая запись 189", "timestamp": "2025-09-17T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-10", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/98257452/general", "productName": "Товар #1940", "sumWorked": 35669.73, "comment": "Тестовая запись 190", "timestamp": "2025-09-10T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-07", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/64333854/general", "productName": "Товар #7187", "sumWorked": 35689.2, "comment": "Тестовая запись 191", "timestamp": "2025-09-07T00:00:00", "sumDetected": 19723.13, "sumReturned": 6146.77, "violator": "Штат", "violatorInfo": "ID99328101"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-28", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/18493808/general", "productName": "Товар #5189", "sumWorked": 70855.58, "comment": "Тестовая запись 192", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-01", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/92242973/general", "productName": "Товар #8446", "sumWorked": 34132.13, "comment": "Тестовая запись 193", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-27", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/28462736/general", "productName": "Товар #5533", "sumWorked": 77277.76, "comment": "Тестовая запись 194", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-09", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/28195991/general", "productName": "Товар #7846", "sumWorked": 54108.27, "comment": "Тестовая запись 195", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-30", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/21907185/general", "productName": "Товар #4254", "sumWorked": 65297.59, "comment": "Тестовая запись 196", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-16", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/12911697/general", "productName": "Товар #4637", "sumWorked": 5722.82, "comment": "Тестовая запись 197", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-30", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/82449678/general", "productName": "Товар #5235", "sumWorked": 6157.38, "comment": "Тестовая запись 198", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-26", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/48534401/general", "productName": "Товар #8250", "sumWorked": 60656.2, "comment": "Тестовая запись 199", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-14", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/16367358/general", "productName": "Товар #6997", "sumWorked": 18231.35, "comment": "Тестовая запись 200", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-11", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/67247466/general", "productName": "Товар #8216", "sumWorked": 84711.56, "comment": "Тестовая запись 201", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-01", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/21109090/general", "productName": "Товар #3118", "sumWorked": 54961.14, "comment": "Тестовая запись 202", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-18", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/27416927/general", "productName": "Товар #8051", "sumWorked": 85894.49, "comment": "Тестовая запись 203", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-17", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/67041774/general", "productName": "Товар #5731", "sumWorked": 53424.17, "comment": "Тестовая запись 204", "timestamp": "2025-09-17T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-29", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/25395372/general", "productName": "Товар #4438", "sumWorked": 83328.36, "comment": "Тестовая запись 205", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-20", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/86583056/general", "productName": "Товар #5814", "sumWorked": 59180.39, "comment": "Тестовая запись 206", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-24", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/70467850/general", "productName": "Товар #7326", "sumWorked": 31114.31, "comment": "Тестовая запись 207", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-02", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/73899009/general", "productName": "Товар #4579", "sumWorked": 66787.09, "comment": "Тестовая запись 208", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-02", "checkType": "Проверка C2C", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/72994911/general", "productName": "Товар #9592", "sumWorked": 2224.09, "comment": "Тестовая запись 209", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-23", "checkType": "POSS", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/74951333/general", "productName": "Товар #8359", "sumWorked": 16864.59, "comment": "Тестовая запись 210", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-04", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/83217308/general", "productName": "Товар #3518", "sumWorked": 82631.35, "comment": "Тестовая запись 211", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-21", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78990228/general", "productName": "Товар #5295", "sumWorked": 78238.2, "comment": "Тестовая запись 212", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-11", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/25386614/general", "productName": "Товар #7915", "sumWorked": 51898.74, "comment": "Тестовая запись 213", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-15", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/96983690/general", "productName": "Товар #1402", "sumWorked": 38961.02, "comment": "Тестовая запись 214", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-16", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/86399912/general", "productName": "Товар #1666", "sumWorked": 20337.25, "comment": "Тестовая запись 215", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-19", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/58684676/general", "productName": "Товар #8113", "sumWorked": 58304.4, "comment": "Тестовая запись 216", "timestamp": "2025-09-19T00:00:00", "sumDetected": 5039.36, "sumReturned": 3412.92, "violator": "Селлер/поставщик", "violatorInfo": "ID70748922"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-17", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/89305622/general", "productName": "Товар #6623", "sumWorked": 55378.15, "comment": "Тестовая запись 217", "timestamp": "2025-09-17T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-01", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/89793466/general", "productName": "Товар #7542", "sumWorked": 85674.6, "comment": "Тестовая запись 218", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-03", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/28017144/general", "productName": "Товар #3100", "sumWorked": 3375.78, "comment": "Тестовая запись 219", "timestamp": "2025-09-03T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-14", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/18032800/general", "productName": "Товар #2502", "sumWorked": 81099.37, "comment": "Тестовая запись 220", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-19", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/10017907/general", "productName": "Товар #1096", "sumWorked": 47793.99, "comment": "Тестовая запись 221", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-19", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78567010/general", "productName": "Товар #5963", "sumWorked": 98830.3, "comment": "Тестовая запись 222", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-17", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/54789048/general", "productName": "Товар #6067", "sumWorked": 96253.64, "comment": "Тестовая запись 223", "timestamp": "2025-09-17T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-20", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/77557211/general", "productName": "Товар #4833", "sumWorked": 77051.43, "comment": "Тестовая запись 224", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-30", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/40032937/general", "productName": "Товар #6150", "sumWorked": 48382.85, "comment": "Тестовая запись 225", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-28", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/52726227/general", "productName": "Товар #8452", "sumWorked": 53789.28, "comment": "Тестовая запись 226", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-18", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/55122699/general", "productName": "Товар #1874", "sumWorked": 17196.75, "comment": "Тестовая запись 227", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-24", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/74101594/general", "productName": "Товар #2666", "sumWorked": 63746.59, "comment": "Тестовая запись 228", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-14", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/27640242/general", "productName": "Товар #5740", "sumWorked": 72968.08, "comment": "Тестовая запись 229", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-27", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/60548894/general", "productName": "Товар #1310", "sumWorked": 98607.03, "comment": "Тестовая запись 230", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-20", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/38307838/general", "productName": "Товар #3183", "sumWorked": 80084.44, "comment": "Тестовая запись 231", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-16", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/80150198/general", "productName": "Товар #9197", "sumWorked": 21131.94, "comment": "Тестовая запись 232", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-22", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/35267889/general", "productName": "Товар #9370", "sumWorked": 68405.36, "comment": "Тестовая запись 233", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-05", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/47846343/general", "productName": "Товар #1970", "sumWorked": 97061.85, "comment": "Тестовая запись 234", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-03", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/96717739/general", "productName": "Товар #2035", "sumWorked": 51519.89, "comment": "Тестовая запись 235", "timestamp": "2025-09-03T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-28", "checkType": "POSS", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/81817623/general", "productName": "Товар #7152", "sumWorked": 68456.95, "comment": "Тестовая запись 236", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-30", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/37876294/general", "productName": "Товар #3813", "sumWorked": 81941.83, "comment": "Тестовая запись 237", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-01", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/40920412/general", "productName": "Товар #5437", "sumWorked": 59136.65, "comment": "Тестовая запись 238", "timestamp": "2025-09-01T00:00:00", "sumDetected": 38717.78, "sumReturned": 21777.42, "violator": "Курьер", "violatorInfo": "ID15930072"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-16", "checkType": "КРАЖА", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/12264896/general", "productName": "Товар #6413", "sumWorked": 18002.36, "comment": "Тестовая запись 239", "timestamp": "2025-09-16T00:00:00", "sumDetected": 15482.99, "sumReturned": 4254.46, "violator": "Селлер/поставщик", "violatorInfo": "ID10092704"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-04", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/82893916/general", "productName": "Товар #2906", "sumWorked": 14172.43, "comment": "Тестовая запись 240", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-23", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/60596550/general", "productName": "Товар #7154", "sumWorked": 72728.74, "comment": "Тестовая запись 241", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-20", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/35958415/general", "productName": "Товар #8000", "sumWorked": 2306.92, "comment": "Тестовая запись 242", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-11", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/69097165/general", "productName": "Товар #9647", "sumWorked": 24661.16, "comment": "Тестовая запись 243", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-28", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/90904155/general", "productName": "Товар #9933", "sumWorked": 37631.69, "comment": "Тестовая запись 244", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-26", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/81577135/general", "productName": "Товар #6012", "sumWorked": 2231.75, "comment": "Тестовая запись 245", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-24", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/55095419/general", "productName": "Товар #3624", "sumWorked": 21971.93, "comment": "Тестовая запись 246", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-06", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/99902436/general", "productName": "Товар #4936", "sumWorked": 94223.16, "comment": "Тестовая запись 247", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-22", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/85895505/general", "productName": "Товар #4109", "sumWorked": 5089.83, "comment": "Тестовая запись 248", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-29", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/62606178/general", "productName": "Товар #4658", "sumWorked": 30215.94, "comment": "Тестовая запись 249", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-21", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/34175400/general", "productName": "Товар #8822", "sumWorked": 14547.97, "comment": "Тестовая запись 250", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-13", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/70858897/general", "productName": "Товар #6258", "sumWorked": 99387.47, "comment": "Тестовая запись 251", "timestamp": "2025-09-13T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-02", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/65442927/general", "productName": "Товар #9880", "sumWorked": 23546.85, "comment": "Тестовая запись 252", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-20", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/39873514/general", "productName": "Товар #2271", "sumWorked": 27952.05, "comment": "Тестовая запись 253", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-27", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/89142598/general", "productName": "Товар #1733", "sumWorked": 61884.31, "comment": "Тестовая запись 254", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-14", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/23012161/general", "productName": "Товар #7186", "sumWorked": 13540.08, "comment": "Тестовая запись 255", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-11", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/86091438/general", "productName": "Товар #5595", "sumWorked": 38051.43, "comment": "Тестовая запись 256", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-19", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/61185469/general", "productName": "Товар #2502", "sumWorked": 37433.65, "comment": "Тестовая запись 257", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-03", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/57402583/general", "productName": "Товар #1165", "sumWorked": 51384.93, "comment": "Тестовая запись 258", "timestamp": "2025-09-03T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-18", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/23395288/general", "productName": "Товар #9558", "sumWorked": 31411.08, "comment": "Тестовая запись 259", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-18", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78935883/general", "productName": "Товар #5603", "sumWorked": 31024.99, "comment": "Тестовая запись 260", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-23", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/89469088/general", "productName": "Товар #2425", "sumWorked": 20124.23, "comment": "Тестовая запись 261", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-18", "checkType": "КРАЖА", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/96891587/general", "productName": "Товар #6187", "sumWorked": 93773.86, "comment": "Тестовая запись 262", "timestamp": "2025-09-18T00:00:00", "sumDetected": 24197.13, "sumReturned": 17594.05, "violator": "Штат", "violatorInfo": "ID55015118"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-25", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/17783563/general", "productName": "Товар #5943", "sumWorked": 95725.37, "comment": "Тестовая запись 263", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-07", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/11571590/general", "productName": "Товар #7995", "sumWorked": 88464.01, "comment": "Тестовая запись 264", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-19", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/76390678/general", "productName": "Товар #1381", "sumWorked": 1134.44, "comment": "Тестовая запись 265", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-28", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/22783116/general", "productName": "Товар #1862", "sumWorked": 22147.42, "comment": "Тестовая запись 266", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-09", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/50470920/general", "productName": "Товар #1844", "sumWorked": 62675.59, "comment": "Тестовая запись 267", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-11", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/13997110/general", "productName": "Товар #4171", "sumWorked": 74950.46, "comment": "Тестовая запись 268", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-05", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/72251943/general", "productName": "Товар #9765", "sumWorked": 52354.67, "comment": "Тестовая запись 269", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-24", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/60981856/general", "productName": "Товар #7101", "sumWorked": 10344.62, "comment": "Тестовая запись 270", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-05", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/34816398/general", "productName": "Товар #2038", "sumWorked": 21300.65, "comment": "Тестовая запись 271", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-01", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/98808177/general", "productName": "Товар #8514", "sumWorked": 97341.72, "comment": "Тестовая запись 272", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-21", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/75644469/general", "productName": "Товар #8948", "sumWorked": 47175.6, "comment": "Тестовая запись 273", "timestamp": "2025-09-21T00:00:00", "sumDetected": 16460.65, "sumReturned": 10717.86, "violator": "OzonJob", "violatorInfo": "ID78122220"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-27", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/80614705/general", "productName": "Товар #1169", "sumWorked": 52650.95, "comment": "Тестовая запись 274", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-12", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/76675644/general", "productName": "Товар #5912", "sumWorked": 39158.03, "comment": "Тестовая запись 275", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-24", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/90454575/general", "productName": "Товар #1502", "sumWorked": 2149.86, "comment": "Тестовая запись 276", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-12", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/74841081/general", "productName": "Товар #8936", "sumWorked": 73523.97, "comment": "Тестовая запись 277", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-29", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/72888976/general", "productName": "Товар #6760", "sumWorked": 84857.34, "comment": "Тестовая запись 278", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-03", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/50704353/general", "productName": "Товар #8066", "sumWorked": 43486.19, "comment": "Тестовая запись 279", "timestamp": "2025-09-03T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-21", "checkType": "AFF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/26303256/general", "productName": "Товар #9846", "sumWorked": 75187.97, "comment": "Тестовая запись 280", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-08", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/65076207/general", "productName": "Товар #5232", "sumWorked": 20672.41, "comment": "Тестовая запись 281", "timestamp": "2025-09-08T00:00:00", "sumDetected": 9465.54, "sumReturned": 4784.23, "violator": "Курьер", "violatorInfo": "ID57797992"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-13", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/79862871/general", "productName": "Товар #7599", "sumWorked": 17725.06, "comment": "Тестовая запись 282", "timestamp": "2025-09-13T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-22", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/62693630/general", "productName": "Товар #6654", "sumWorked": 44548.8, "comment": "Тестовая запись 283", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-03", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/53913545/general", "productName": "Товар #5102", "sumWorked": 18768.42, "comment": "Тестовая запись 284", "timestamp": "2025-09-03T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-02", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/15457868/general", "productName": "Товар #7029", "sumWorked": 96149.57, "comment": "Тестовая запись 285", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-22", "checkType": "КРАЖА", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/47300860/general", "productName": "Товар #8319", "sumWorked": 87380.62, "comment": "Тестовая запись 286", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-22", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/72775244/general", "productName": "Товар #8307", "sumWorked": 72325.65, "comment": "Тестовая запись 287", "timestamp": "2025-09-22T00:00:00", "sumDetected": 10087.24, "sumReturned": 3110.58, "violator": "Штат", "violatorInfo": "ID27425995"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-21", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/65389549/general", "productName": "Товар #1836", "sumWorked": 94354.41, "comment": "Тестовая запись 288", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-23", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/87854581/general", "productName": "Товар #6848", "sumWorked": 72940.28, "comment": "Тестовая запись 289", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-22", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/30503858/general", "productName": "Товар #4666", "sumWorked": 10813.71, "comment": "Тестовая запись 290", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-15", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78161330/general", "productName": "Товар #6368", "sumWorked": 64121.97, "comment": "Тестовая запись 291", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-04", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/17019135/general", "productName": "Товар #8971", "sumWorked": 70515.23, "comment": "Тестовая запись 292", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-12", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/56775361/general", "productName": "Товар #2424", "sumWorked": 11487.97, "comment": "Тестовая запись 293", "timestamp": "2025-09-12T00:00:00", "sumDetected": 20317.58, "sumReturned": 12543.63, "violator": "Курьер", "violatorInfo": "ID20477952"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-18", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/10012854/general", "productName": "Товар #2009", "sumWorked": 7461.25, "comment": "Тестовая запись 294", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-07", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/30869170/general", "productName": "Товар #8749", "sumWorked": 59081.53, "comment": "Тестовая запись 295", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-30", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/98817921/general", "productName": "Товар #7766", "sumWorked": 44409.13, "comment": "Тестовая запись 296", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-26", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/16918488/general", "productName": "Товар #9761", "sumWorked": 31984.78, "comment": "Тестовая запись 297", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-28", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/33048868/general", "productName": "Товар #9984", "sumWorked": 6446.05, "comment": "Тестовая запись 298", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-25", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/28933663/general", "productName": "Товар #1371", "sumWorked": 44791.3, "comment": "Тестовая запись 299", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-14", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/33375567/general", "productName": "Товар #1777", "sumWorked": 59820.15, "comment": "Тестовая запись 300", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-30", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/56257576/general", "productName": "Товар #6186", "sumWorked": 79409.13, "comment": "Тестовая запись 301", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-25", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/86639004/general", "productName": "Товар #9067", "sumWorked": 15318.96, "comment": "Тестовая запись 302", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-10", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/89654240/general", "productName": "Товар #7896", "sumWorked": 94271.65, "comment": "Тестовая запись 303", "timestamp": "2025-09-10T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-12", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/96208483/general", "productName": "Товар #2863", "sumWorked": 40435.08, "comment": "Тестовая запись 304", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-09", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/20502393/general", "productName": "Товар #6203", "sumWorked": 62104.49, "comment": "Тестовая запись 305", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-23", "checkType": "КРАЖА", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/94696331/general", "productName": "Товар #3035", "sumWorked": 27778.85, "comment": "Тестовая запись 306", "timestamp": "2025-09-23T00:00:00", "sumDetected": 43275.25, "sumReturned": 33509.37, "violator": "Курьер", "violatorInfo": "ID77964643"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-22", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/38706795/general", "productName": "Товар #2671", "sumWorked": 28131.94, "comment": "Тестовая запись 307", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-15", "checkType": "КРАЖА", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/25546291/general", "productName": "Товар #9767", "sumWorked": 91689.72, "comment": "Тестовая запись 308", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-20", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/98651905/general", "productName": "Товар #9019", "sumWorked": 84965.34, "comment": "Тестовая запись 309", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-01", "checkType": "AFF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/37388899/general", "productName": "Товар #3687", "sumWorked": 33496.46, "comment": "Тестовая запись 310", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-09", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/67009316/general", "productName": "Товар #2899", "sumWorked": 82649.43, "comment": "Тестовая запись 311", "timestamp": "2025-09-09T00:00:00", "sumDetected": 10742.18, "sumReturned": 3449.57, "violator": "Курьер", "violatorInfo": "ID12797653"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-17", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/88945072/general", "productName": "Товар #9372", "sumWorked": 64596.45, "comment": "Тестовая запись 312", "timestamp": "2025-09-17T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-16", "checkType": "Проверка C2C", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/58348350/general", "productName": "Товар #4069", "sumWorked": 31885.31, "comment": "Тестовая запись 313", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-26", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/26752768/general", "productName": "Товар #9145", "sumWorked": 52043.75, "comment": "Тестовая запись 314", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-13", "checkType": "Проверка C2C", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/39127145/general", "productName": "Товар #3341", "sumWorked": 33698.8, "comment": "Тестовая запись 315", "timestamp": "2025-09-13T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-11", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/27142032/general", "productName": "Товар #7838", "sumWorked": 12105.19, "comment": "Тестовая запись 316", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-30", "checkType": "POSS", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/63307829/general", "productName": "Товар #2908", "sumWorked": 92215.05, "comment": "Тестовая запись 317", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-04", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/70369468/general", "productName": "Товар #6723", "sumWorked": 59954.66, "comment": "Тестовая запись 318", "timestamp": "2025-09-04T00:00:00", "sumDetected": 46256.15, "sumReturned": 4450.05, "violator": "Селлер/поставщик", "violatorInfo": "ID95880495"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-17", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/21091894/general", "productName": "Товар #6928", "sumWorked": 79233.08, "comment": "Тестовая запись 319", "timestamp": "2025-09-17T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-05", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/83068854/general", "productName": "Товар #3810", "sumWorked": 4311.14, "comment": "Тестовая запись 320", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-01", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/96101938/general", "productName": "Товар #2881", "sumWorked": 86877.19, "comment": "Тестовая запись 321", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-05", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/44115119/general", "productName": "Товар #7781", "sumWorked": 96916.05, "comment": "Тестовая запись 322", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-05", "checkType": "AFF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/14204199/general", "productName": "Товар #8076", "sumWorked": 78938.62, "comment": "Тестовая запись 323", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-08", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/20886703/general", "productName": "Товар #4535", "sumWorked": 96410.22, "comment": "Тестовая запись 324", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-20", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/17678272/general", "productName": "Товар #4803", "sumWorked": 49583.47, "comment": "Тестовая запись 325", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-24", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/97395210/general", "productName": "Товар #8216", "sumWorked": 30101.73, "comment": "Тестовая запись 326", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-29", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/54623772/general", "productName": "Товар #5912", "sumWorked": 35240.44, "comment": "Тестовая запись 327", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-21", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/27511630/general", "productName": "Товар #1726", "sumWorked": 13804.6, "comment": "Тестовая запись 328", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-23", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/60692246/general", "productName": "Товар #3225", "sumWorked": 26330.84, "comment": "Тестовая запись 329", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-26", "checkType": "Проверка C2C", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/22061053/general", "productName": "Товар #1433", "sumWorked": 54887.15, "comment": "Тестовая запись 330", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-22", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/26267074/general", "productName": "Товар #3447", "sumWorked": 56359.24, "comment": "Тестовая запись 331", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-04", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/70525625/general", "productName": "Товар #8546", "sumWorked": 50690.43, "comment": "Тестовая запись 332", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-20", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/90486836/general", "productName": "Товар #4792", "sumWorked": 1983.79, "comment": "Тестовая запись 333", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-26", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/97418350/general", "productName": "Товар #4467", "sumWorked": 49280.43, "comment": "Тестовая запись 334", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-19", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/21849640/general", "productName": "Товар #9148", "sumWorked": 3805.18, "comment": "Тестовая запись 335", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-21", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/67607200/general", "productName": "Товар #2471", "sumWorked": 20306.67, "comment": "Тестовая запись 336", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-21", "checkType": "AFF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/10763791/general", "productName": "Товар #8797", "sumWorked": 71602.01, "comment": "Тестовая запись 337", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-15", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/37527528/general", "productName": "Товар #6890", "sumWorked": 58101.74, "comment": "Тестовая запись 338", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-19", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/24267582/general", "productName": "Товар #8744", "sumWorked": 67536.46, "comment": "Тестовая запись 339", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-06", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/93109258/general", "productName": "Товар #2214", "sumWorked": 24151.02, "comment": "Тестовая запись 340", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-05", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/75635939/general", "productName": "Товар #2966", "sumWorked": 21014.06, "comment": "Тестовая запись 341", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-15", "checkType": "КРАЖА", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/67768554/general", "productName": "Товар #7838", "sumWorked": 49268.18, "comment": "Тестовая запись 342", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-15", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/58159878/general", "productName": "Товар #9563", "sumWorked": 94098.86, "comment": "Тестовая запись 343", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-08", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/88817859/general", "productName": "Товар #2267", "sumWorked": 19773.48, "comment": "Тестовая запись 344", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-06", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/24260157/general", "productName": "Товар #2851", "sumWorked": 2189.16, "comment": "Тестовая запись 345", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-12", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/38125872/general", "productName": "Товар #5749", "sumWorked": 37925.65, "comment": "Тестовая запись 346", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-25", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/46236196/general", "productName": "Товар #6064", "sumWorked": 16217.77, "comment": "Тестовая запись 347", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-22", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/61415854/general", "productName": "Товар #1166", "sumWorked": 15066.27, "comment": "Тестовая запись 348", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-24", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/25782533/general", "productName": "Товар #7957", "sumWorked": 13248.41, "comment": "Тестовая запись 349", "timestamp": "2025-09-24T00:00:00", "sumDetected": 18342.86, "sumReturned": 13818.61, "violator": "OzonJob", "violatorInfo": "ID26133655"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-06", "checkType": "КРАЖА", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/19944974/general", "productName": "Товар #4465", "sumWorked": 55830.67, "comment": "Тестовая запись 350", "timestamp": "2025-09-06T00:00:00", "sumDetected": 15460.22, "sumReturned": 5953.47, "violator": "Штат", "violatorInfo": "ID93016221"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-08", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/16754957/general", "productName": "Товар #4487", "sumWorked": 82538.93, "comment": "Тестовая запись 351", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-26", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/61054083/general", "productName": "Товар #2930", "sumWorked": 80054.85, "comment": "Тестовая запись 352", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-04", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/76478512/general", "productName": "Товар #8702", "sumWorked": 60641.66, "comment": "Тестовая запись 353", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-12", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/64232987/general", "productName": "Товар #9803", "sumWorked": 16217.09, "comment": "Тестовая запись 354", "timestamp": "2025-09-12T00:00:00", "sumDetected": 16966.3, "sumReturned": 2437.81, "violator": "Курьер", "violatorInfo": "ID44047742"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-04", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/78517146/general", "productName": "Товар #4126", "sumWorked": 84963.8, "comment": "Тестовая запись 355", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-11", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/85407610/general", "productName": "Товар #1733", "sumWorked": 85119.55, "comment": "Тестовая запись 356", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-02", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/12398691/general", "productName": "Товар #4663", "sumWorked": 82660.09, "comment": "Тестовая запись 357", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-06", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/60550112/general", "productName": "Товар #7411", "sumWorked": 81389.74, "comment": "Тестовая запись 358", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-08", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/89534407/general", "productName": "Товар #7691", "sumWorked": 69235.02, "comment": "Тестовая запись 359", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-03", "checkType": "POSS", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/15535465/general", "productName": "Товар #5257", "sumWorked": 46518.26, "comment": "Тестовая запись 360", "timestamp": "2025-09-03T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-15", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/35404951/general", "productName": "Товар #7647", "sumWorked": 30810.6, "comment": "Тестовая запись 361", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-16", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/85772502/general", "productName": "Товар #8041", "sumWorked": 49976.83, "comment": "Тестовая запись 362", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-20", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/56291705/general", "productName": "Товар #9227", "sumWorked": 39208.24, "comment": "Тестовая запись 363", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-25", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/92203625/general", "productName": "Товар #9491", "sumWorked": 83930.63, "comment": "Тестовая запись 364", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-19", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/34041121/general", "productName": "Товар #5665", "sumWorked": 3530.52, "comment": "Тестовая запись 365", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-02", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/85939705/general", "productName": "Товар #7181", "sumWorked": 1071.99, "comment": "Тестовая запись 366", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-12", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/27251949/general", "productName": "Товар #9520", "sumWorked": 28340.43, "comment": "Тестовая запись 367", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-26", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/24979869/general", "productName": "Товар #3266", "sumWorked": 17289.03, "comment": "Тестовая запись 368", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-30", "checkType": "Проверка C2C", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/40437693/general", "productName": "Товар #2338", "sumWorked": 24123.82, "comment": "Тестовая запись 369", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-23", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/57885415/general", "productName": "Товар #3698", "sumWorked": 56076.65, "comment": "Тестовая запись 370", "timestamp": "2025-09-23T00:00:00", "sumDetected": 4697.72, "sumReturned": 1829.2, "violator": "Штат", "violatorInfo": "ID10875599"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-09", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/72616206/general", "productName": "Товар #8487", "sumWorked": 1048.22, "comment": "Тестовая запись 371", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-21", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/63948046/general", "productName": "Товар #3427", "sumWorked": 20715.41, "comment": "Тестовая запись 372", "timestamp": "2025-09-21T00:00:00", "sumDetected": 49668.09, "sumReturned": 26366.56, "violator": "Селлер/поставщик", "violatorInfo": "ID17827663"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-16", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/47638599/general", "productName": "Товар #6251", "sumWorked": 7435.02, "comment": "Тестовая запись 373", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-27", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/56738563/general", "productName": "Товар #2565", "sumWorked": 6336.83, "comment": "Тестовая запись 374", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-14", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/38910716/general", "productName": "Товар #5746", "sumWorked": 39283.77, "comment": "Тестовая запись 375", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-14", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/10947604/general", "productName": "Товар #5242", "sumWorked": 20562.5, "comment": "Тестовая запись 376", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-24", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/59647550/general", "productName": "Товар #6663", "sumWorked": 59252.56, "comment": "Тестовая запись 377", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-18", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/54595654/general", "productName": "Товар #8020", "sumWorked": 85266.09, "comment": "Тестовая запись 378", "timestamp": "2025-09-18T00:00:00", "sumDetected": 710.9, "sumReturned": 342.07, "violator": "Селлер/поставщик", "violatorInfo": "ID53999230"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-02", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/87880993/general", "productName": "Товар #7741", "sumWorked": 71944.79, "comment": "Тестовая запись 379", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-07", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/29530645/general", "productName": "Товар #5044", "sumWorked": 3401.05, "comment": "Тестовая запись 380", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-08", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/90459802/general", "productName": "Товар #1258", "sumWorked": 67378.6, "comment": "Тестовая запись 381", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-06", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/38502489/general", "productName": "Товар #2007", "sumWorked": 51820.67, "comment": "Тестовая запись 382", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-07", "checkType": "POSS", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/26241424/general", "productName": "Товар #7283", "sumWorked": 81269.3, "comment": "Тестовая запись 383", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-01", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/66995597/general", "productName": "Товар #1473", "sumWorked": 71294.66, "comment": "Тестовая запись 384", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-04", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/24380740/general", "productName": "Товар #3503", "sumWorked": 4244.15, "comment": "Тестовая запись 385", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-22", "checkType": "КРАЖА", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/27453996/general", "productName": "Товар #8129", "sumWorked": 30269.76, "comment": "Тестовая запись 386", "timestamp": "2025-09-22T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-04", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/57746287/general", "productName": "Товар #6024", "sumWorked": 9850.08, "comment": "Тестовая запись 387", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-03", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/57083890/general", "productName": "Товар #7925", "sumWorked": 53453.33, "comment": "Тестовая запись 388", "timestamp": "2025-09-03T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-14", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/20390407/general", "productName": "Товар #4755", "sumWorked": 80395.36, "comment": "Тестовая запись 389", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-25", "checkType": "AFF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/68169056/general", "productName": "Товар #8721", "sumWorked": 74763.65, "comment": "Тестовая запись 390", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-24", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/28793670/general", "productName": "Товар #5408", "sumWorked": 62199.0, "comment": "Тестовая запись 391", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-09", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/33663654/general", "productName": "Товар #6250", "sumWorked": 74111.12, "comment": "Тестовая запись 392", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-01", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/38116323/general", "productName": "Товар #3458", "sumWorked": 88363.19, "comment": "Тестовая запись 393", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-16", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/48179325/general", "productName": "Товар #4786", "sumWorked": 14655.69, "comment": "Тестовая запись 394", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-20", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/86245379/general", "productName": "Товар #4262", "sumWorked": 8257.15, "comment": "Тестовая запись 395", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-13", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/37760346/general", "productName": "Товар #2195", "sumWorked": 63338.03, "comment": "Тестовая запись 396", "timestamp": "2025-09-13T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-06", "checkType": "POSS", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/14743936/general", "productName": "Товар #6589", "sumWorked": 22618.53, "comment": "Тестовая запись 397", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-23", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/33596240/general", "productName": "Товар #7231", "sumWorked": 22278.14, "comment": "Тестовая запись 398", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-23", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/79885972/general", "productName": "Товар #2812", "sumWorked": 92793.3, "comment": "Тестовая запись 399", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-15", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/82938386/general", "productName": "Товар #7943", "sumWorked": 37703.22, "comment": "Тестовая запись 400", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-11", "checkType": "КРАЖА", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/80503562/general", "productName": "Товар #9235", "sumWorked": 35067.84, "comment": "Тестовая запись 401", "timestamp": "2025-09-11T00:00:00", "sumDetected": 16464.38, "sumReturned": 9274.53, "violator": "Курьер", "violatorInfo": "ID68193403"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-12", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/56193075/general", "productName": "Товар #5565", "sumWorked": 42481.54, "comment": "Тестовая запись 402", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-06", "checkType": "КРАЖА", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/57818807/general", "productName": "Товар #7368", "sumWorked": 15752.65, "comment": "Тестовая запись 403", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-09", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/51067844/general", "productName": "Товар #9900", "sumWorked": 73803.39, "comment": "Тестовая запись 404", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-24", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/25287382/general", "productName": "Товар #4888", "sumWorked": 46712.52, "comment": "Тестовая запись 405", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-12", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/91252118/general", "productName": "Товар #3707", "sumWorked": 20817.9, "comment": "Тестовая запись 406", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-21", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/42917236/general", "productName": "Товар #9467", "sumWorked": 22095.78, "comment": "Тестовая запись 407", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-17", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/88032236/general", "productName": "Товар #2637", "sumWorked": 67418.52, "comment": "Тестовая запись 408", "timestamp": "2025-09-17T00:00:00", "sumDetected": 45401.08, "sumReturned": 23882.0, "violator": "Курьер", "violatorInfo": "ID29390490"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-01", "checkType": "КРАЖА", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/62947505/general", "productName": "Товар #6024", "sumWorked": 3283.63, "comment": "Тестовая запись 409", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-27", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/29663707/general", "productName": "Товар #9582", "sumWorked": 68312.0, "comment": "Тестовая запись 410", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-12", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/89994882/general", "productName": "Товар #6518", "sumWorked": 46948.32, "comment": "Тестовая запись 411", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-09", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/64425783/general", "productName": "Товар #8230", "sumWorked": 93642.22, "comment": "Тестовая запись 412", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-20", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/11294335/general", "productName": "Товар #2066", "sumWorked": 72469.93, "comment": "Тестовая запись 413", "timestamp": "2025-09-20T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-18", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/96516067/general", "productName": "Товар #8053", "sumWorked": 29913.64, "comment": "Тестовая запись 414", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-08", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/88699512/general", "productName": "Товар #2444", "sumWorked": 82315.15, "comment": "Тестовая запись 415", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-01", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/11201780/general", "productName": "Товар #2867", "sumWorked": 13149.73, "comment": "Тестовая запись 416", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-30", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/52564106/general", "productName": "Товар #9021", "sumWorked": 10852.8, "comment": "Тестовая запись 417", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-05", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/83173472/general", "productName": "Товар #4404", "sumWorked": 66079.66, "comment": "Тестовая запись 418", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-10", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/28201694/general", "productName": "Товар #1674", "sumWorked": 3527.01, "comment": "Тестовая запись 419", "timestamp": "2025-09-10T00:00:00", "sumDetected": 18981.96, "sumReturned": 1046.62, "violator": "Штат", "violatorInfo": "ID16413195"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-06", "checkType": "Проверка C2C", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/28551903/general", "productName": "Товар #2229", "sumWorked": 39330.15, "comment": "Тестовая запись 420", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-10", "checkType": "КРАЖА", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/86116025/general", "productName": "Товар #9626", "sumWorked": 94644.51, "comment": "Тестовая запись 421", "timestamp": "2025-09-10T00:00:00", "sumDetected": 34960.63, "sumReturned": 24109.42, "violator": "Селлер/поставщик", "violatorInfo": "ID83024613"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-08", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/53836204/general", "productName": "Товар #6006", "sumWorked": 21332.72, "comment": "Тестовая запись 422", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-16", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/80424047/general", "productName": "Товар #1809", "sumWorked": 11342.28, "comment": "Тестовая запись 423", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-28", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/60162430/general", "productName": "Товар #7056", "sumWorked": 55250.22, "comment": "Тестовая запись 424", "timestamp": "2025-09-28T00:00:00", "sumDetected": 2244.92, "sumReturned": 1724.59, "violator": "Курьер", "violatorInfo": "ID23144050"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-24", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/29393266/general", "productName": "Товар #7734", "sumWorked": 69327.79, "comment": "Тестовая запись 425", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-30", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/69200869/general", "productName": "Товар #6817", "sumWorked": 5292.93, "comment": "Тестовая запись 426", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-04", "checkType": "КРАЖА", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/28833534/general", "productName": "Товар #1641", "sumWorked": 70598.48, "comment": "Тестовая запись 427", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-25", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/52321430/general", "productName": "Товар #2888", "sumWorked": 81624.3, "comment": "Тестовая запись 428", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-17", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/11973202/general", "productName": "Товар #7317", "sumWorked": 80748.88, "comment": "Тестовая запись 429", "timestamp": "2025-09-17T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-28", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/15784722/general", "productName": "Товар #4423", "sumWorked": 66120.92, "comment": "Тестовая запись 430", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Волхонское КГТ", "date": "2025-09-05", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/69198194/general", "productName": "Товар #3519", "sumWorked": 59832.03, "comment": "Тестовая запись 431", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-23", "checkType": "POSS", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/62447039/general", "productName": "Товар #7095", "sumWorked": 35653.6, "comment": "Тестовая запись 432", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-16", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/20551848/general", "productName": "Товар #8395", "sumWorked": 24733.7, "comment": "Тестовая запись 433", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-08", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/46824784/general", "productName": "Товар #5561", "sumWorked": 23620.31, "comment": "Тестовая запись 434", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-19", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/38131277/general", "productName": "Товар #1869", "sumWorked": 43880.7, "comment": "Тестовая запись 435", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары", "date": "2025-09-18", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/92439994/general", "productName": "Товар #2853", "sumWorked": 33887.99, "comment": "Тестовая запись 436", "timestamp": "2025-09-18T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-30", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/22020214/general", "productName": "Товар #6164", "sumWorked": 79458.51, "comment": "Тестовая запись 437", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-21", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/39481810/general", "productName": "Товар #9827", "sumWorked": 33452.71, "comment": "Тестовая запись 438", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-14", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/53226033/general", "productName": "Товар #9172", "sumWorked": 52223.81, "comment": "Тестовая запись 439", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-14", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/17454029/general", "productName": "Товар #5920", "sumWorked": 70800.69, "comment": "Тестовая запись 440", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-15", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/44435795/general", "productName": "Товар #6534", "sumWorked": 73359.44, "comment": "Тестовая запись 441", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-27", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/44909036/general", "productName": "Товар #8460", "sumWorked": 65973.99, "comment": "Тестовая запись 442", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-14", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/68377489/general", "productName": "Товар #9692", "sumWorked": 55094.12, "comment": "Тестовая запись 443", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Волхонское", "date": "2025-09-04", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/13236325/general", "productName": "Товар #7319", "sumWorked": 49888.46, "comment": "Тестовая запись 444", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-14", "checkType": "AFF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/25587458/general", "productName": "Товар #4961", "sumWorked": 42766.92, "comment": "Тестовая запись 445", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-30", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/32995008/general", "productName": "Товар #5577", "sumWorked": 5759.82, "comment": "Тестовая запись 446", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-19", "checkType": "Проверка C2C", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/11854383/general", "productName": "Товар #5191", "sumWorked": 26725.25, "comment": "Тестовая запись 447", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-15", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/93907902/general", "productName": "Товар #8410", "sumWorked": 48066.46, "comment": "Тестовая запись 448", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-06", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/69729892/general", "productName": "Товар #3230", "sumWorked": 74989.57, "comment": "Тестовая запись 449", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-15", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/53672367/general", "productName": "Товар #5017", "sumWorked": 46964.29, "comment": "Тестовая запись 450", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-08", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/42486233/general", "productName": "Товар #9830", "sumWorked": 42325.77, "comment": "Тестовая запись 451", "timestamp": "2025-09-08T00:00:00", "sumDetected": 10461.1, "sumReturned": 4904.58, "violator": "OzonJob", "violatorInfo": "ID29280044"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-02", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/81204244/general", "productName": "Товар #1439", "sumWorked": 26307.21, "comment": "Тестовая запись 452", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-21", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/83148908/general", "productName": "Товар #9326", "sumWorked": 85849.94, "comment": "Тестовая запись 453", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-25", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/96389868/general", "productName": "Товар #7182", "sumWorked": 75079.29, "comment": "Тестовая запись 454", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-07", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/88451011/general", "productName": "Товар #8531", "sumWorked": 99726.52, "comment": "Тестовая запись 455", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-24", "checkType": "Puzzle", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/37793185/general", "productName": "Товар #2989", "sumWorked": 79306.27, "comment": "Тестовая запись 456", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-14", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/77768956/general", "productName": "Товар #2789", "sumWorked": 8679.49, "comment": "Тестовая запись 457", "timestamp": "2025-09-14T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-09", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/59855390/general", "productName": "Товар #8990", "sumWorked": 12773.56, "comment": "Тестовая запись 458", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-01", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/43569270/general", "productName": "Товар #4914", "sumWorked": 74537.49, "comment": "Тестовая запись 459", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-10", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/72249464/general", "productName": "Товар #8586", "sumWorked": 34277.01, "comment": "Тестовая запись 460", "timestamp": "2025-09-10T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Горское", "date": "2025-09-08", "checkType": "Проверка C2C", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/77408562/general", "productName": "Товар #6696", "sumWorked": 63672.49, "comment": "Тестовая запись 461", "timestamp": "2025-09-08T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Мурманск", "date": "2025-09-05", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/87879803/general", "productName": "Товар #3741", "sumWorked": 23706.13, "comment": "Тестовая запись 462", "timestamp": "2025-09-05T00:00:00", "sumDetected": 41501.42, "sumReturned": 18644.33, "violator": "Штат", "violatorInfo": "ID40639053"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-24", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/80358765/general", "productName": "Товар #1133", "sumWorked": 19519.66, "comment": "Тестовая запись 463", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-16", "checkType": "POSS", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/66356377/general", "productName": "Товар #5091", "sumWorked": 77202.81, "comment": "Тестовая запись 464", "timestamp": "2025-09-16T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-27", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/64356779/general", "productName": "Товар #8922", "sumWorked": 63835.93, "comment": "Тестовая запись 465", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-11", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/71635247/general", "productName": "Товар #2088", "sumWorked": 7661.39, "comment": "Тестовая запись 466", "timestamp": "2025-09-11T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-04", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/73310873/general", "productName": "Товар #3456", "sumWorked": 98657.87, "comment": "Тестовая запись 467", "timestamp": "2025-09-04T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-02", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/91509665/general", "productName": "Товар #5784", "sumWorked": 44255.26, "comment": "Тестовая запись 468", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-09", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/56267909/general", "productName": "Товар #8423", "sumWorked": 94989.97, "comment": "Тестовая запись 469", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-25", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/83996240/general", "productName": "Товар #2617", "sumWorked": 33135.72, "comment": "Тестовая запись 470", "timestamp": "2025-09-25T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-14", "checkType": "КРАЖА", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/68097389/general", "productName": "Товар #4334", "sumWorked": 73148.66, "comment": "Тестовая запись 471", "timestamp": "2025-09-14T00:00:00", "sumDetected": 24705.76, "sumReturned": 13441.05, "violator": "Курьер", "violatorInfo": "ID91026674"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Великий Новгород", "date": "2025-09-02", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/87879778/general", "productName": "Товар #9213", "sumWorked": 75105.97, "comment": "Тестовая запись 472", "timestamp": "2025-09-02T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-04", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/19284533/general", "productName": "Товар #1026", "sumWorked": 12358.94, "comment": "Тестовая запись 473", "timestamp": "2025-09-04T00:00:00", "sumDetected": 27880.14, "sumReturned": 12500.53, "violator": "Селлер/поставщик", "violatorInfo": "ID30245145"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-29", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/37074634/general", "productName": "Товар #1485", "sumWorked": 37492.21, "comment": "Тестовая запись 474", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-23", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/83738155/general", "productName": "Товар #1134", "sumWorked": 31931.14, "comment": "Тестовая запись 475", "timestamp": "2025-09-23T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-05", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/77860777/general", "productName": "Товар #6318", "sumWorked": 60361.07, "comment": "Тестовая запись 476", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-07", "checkType": "КРАЖА", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/82941749/general", "productName": "Товар #5745", "sumWorked": 84028.55, "comment": "Тестовая запись 477", "timestamp": "2025-09-07T00:00:00", "sumDetected": 5475.15, "sumReturned": 2679.28, "violator": "Штат", "violatorInfo": "ID74248562"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-24", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/18581591/general", "productName": "Товар #5880", "sumWorked": 11224.86, "comment": "Тестовая запись 478", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Архангельск", "date": "2025-09-15", "checkType": "Подмены", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/52977645/general", "productName": "Товар #1465", "sumWorked": 14946.3, "comment": "Тестовая запись 479", "timestamp": "2025-09-15T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-22", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/75561979/general", "productName": "Товар #3114", "sumWorked": 64821.85, "comment": "Тестовая запись 480", "timestamp": "2025-09-22T00:00:00", "sumDetected": 25600.88, "sumReturned": 5095.46, "violator": "Курьер", "violatorInfo": "ID57607034"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-24", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/18801470/general", "productName": "Товар #5342", "sumWorked": 51923.4, "comment": "Тестовая запись 481", "timestamp": "2025-09-24T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-06", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/40833416/general", "productName": "Товар #7708", "sumWorked": 4826.85, "comment": "Тестовая запись 482", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "МРФЦ Калининград", "date": "2025-09-12", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/54397365/general", "productName": "Товар #1073", "sumWorked": 76570.49, "comment": "Тестовая запись 483", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Парголово", "date": "2025-09-28", "checkType": "Puzzle", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/23083796/general", "productName": "Товар #5306", "sumWorked": 81501.6, "comment": "Тестовая запись 484", "timestamp": "2025-09-28T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Шушары КГТ", "date": "2025-09-09", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/80048387/general", "productName": "Товар #9134", "sumWorked": 20983.56, "comment": "Тестовая запись 485", "timestamp": "2025-09-09T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-27", "checkType": "Инвент (СЦ)", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/85785341/general", "productName": "Товар #2745", "sumWorked": 12649.94, "comment": "Тестовая запись 486", "timestamp": "2025-09-27T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-30", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/16572601/general", "productName": "Товар #1788", "sumWorked": 24358.99, "comment": "Тестовая запись 487", "timestamp": "2025-09-30T00:00:00", "sumDetected": 28813.17, "sumReturned": 3923.84, "violator": "Штат", "violatorInfo": "ID88529497"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Софийская", "date": "2025-09-07", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/68435824/general", "productName": "Товар #7608", "sumWorked": 35455.73, "comment": "Тестовая запись 488", "timestamp": "2025-09-07T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-29", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/22927788/general", "productName": "Товар #7192", "sumWorked": 83059.16, "comment": "Тестовая запись 489", "timestamp": "2025-09-29T00:00:00", "sumDetected": 12261.68, "sumReturned": 7912.71, "violator": "OzonJob", "violatorInfo": "ID60363729"}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Бугры", "date": "2025-09-01", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/88997881/general", "productName": "Товар #2286", "sumWorked": 4826.0, "comment": "Тестовая запись 490", "timestamp": "2025-09-01T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-12", "checkType": "POSS", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/55645390/general", "productName": "Товар #9903", "sumWorked": 4057.37, "comment": "Тестовая запись 491", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Сыктывкар", "date": "2025-09-19", "checkType": "NF", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/42748875/general", "productName": "Товар #6128", "sumWorked": 53056.74, "comment": "Тестовая запись 492", "timestamp": "2025-09-19T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Петрозаводск", "date": "2025-09-21", "checkType": "NF", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/17195620/general", "productName": "Товар #9780", "sumWorked": 69513.49, "comment": "Тестовая запись 493", "timestamp": "2025-09-21T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "ЛЦ Шушары", "date": "2025-09-26", "checkType": "Подмены", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/14710680/general", "productName": "Товар #7016", "sumWorked": 68965.83, "comment": "Тестовая запись 494", "timestamp": "2025-09-26T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Вологда", "date": "2025-09-05", "checkType": "Инвент (СЦ)", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/63705317/general", "productName": "Товар #8890", "sumWorked": 36857.64, "comment": "Тестовая запись 495", "timestamp": "2025-09-05T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-29", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/66643997/general", "productName": "Товар #4620", "sumWorked": 4304.62, "comment": "Тестовая запись 496", "timestamp": "2025-09-29T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Псков", "date": "2025-09-18", "checkType": "ФРОД", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/75938951/general", "productName": "Товар #1193", "sumWorked": 47417.74, "comment": "Тестовая запись 497", "timestamp": "2025-09-18T00:00:00", "sumDetected": 1150.98, "sumReturned": 521.66, "violator": "Курьер", "violatorInfo": "ID46267115"}, {"region": "СЗФО", "type": "Логистика", "warehouse": "СЦ Череповец", "date": "2025-09-30", "checkType": "MPCRM + Торг 2", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/71263748/general", "productName": "Товар #9762", "sumWorked": 95837.76, "comment": "Тестовая запись 498", "timestamp": "2025-09-30T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-06", "checkType": "MPCRM + Торг 2", "result": "Выявлено нарушение", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/17353761/general", "productName": "Товар #1423", "sumWorked": 46095.13, "comment": "Тестовая запись 499", "timestamp": "2025-09-06T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}, {"region": "СЗФО", "type": "FullFilment", "warehouse": "ПСЦ Колпино", "date": "2025-09-12", "checkType": "ФРОД", "result": "Нарушений не выявлено", "identifiers": "https://puzzle.o3t.ru/losses/in-transit/75059063/general", "productName": "Товар #1351", "sumWorked": 67261.49, "comment": "Тестовая запись 500", "timestamp": "2025-09-12T00:00:00", "sumDetected": 0, "sumReturned": 0, "violator": "", "violatorInfo": ""}];

        // Initialize
        initializeTestData();
        updateBreadcrumb();
        updateBackButtonVisibility();
        renderCalendar();
    
