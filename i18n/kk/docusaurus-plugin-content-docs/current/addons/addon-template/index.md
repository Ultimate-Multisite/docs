---
title: Қосымша үлгісі
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Қосымша үлгісі

Қосымша үлгісі — Ultimate Multisite.

## Талаптар {#requirements}

- WordPress 5.3 немесе одан жоғары
- PHP 7.4 немесе одан жоғары
- Multisite Ultimate плагині (белсенді)

## Орнату {#installation}

1. Қосымша файлдарын `/wp-content/plugins/` каталогыңызға жүктеңіз
2. Плагинді WordPress ішіндегі 'Plugins' мәзірі арқылы белсендіріңіз
3. Қосымша параметрлерін желі әкімшісінде баптаңыз

## Әзірлеу {#development}

### Баптау {#setup}

```bash
# Install dependencies
composer install
npm install

# Run tests
npm run test

# Run code standards checks
vendor/bin/phpcs
vendor/bin/phpstan

# Fix code style issues
vendor/bin/phpcbf

# Build for production
npm run build
```

### Жоба құрылымы {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP кластары және қосылатын файлдар
│   ├── class-multisite-ultimate-updater.php  # Жаңарту өңдегіші
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Негізгі функционал
├── tests/                        # Модульдік тесттер
│   ├── bootstrap.php            # Тест bootstrap
│   ├── class-*-base.php         # Негізгі тест класы
│   └── class-*-test.php         # Тест жағдайлары
├── views/                       # Үлгі файлдары
├── assets/                      # Статикалық ресурстар
│   ├── css/                     # Стиль кестелері
│   ├── js/                      # JavaScript файлдары
│   └── images/                  # Суреттер
├── lang/                        # Тіл файлдары
├── composer.json                # PHP тәуелділіктері
├── package.json                 # Node.js тәуелділіктері
├── phpunit.xml.dist             # PHPUnit конфигурациясы
├── .phpcs.xml.dist              # Код стандарттары конфигурациясы
└── rector.php                   # Кодты жаңғырту ережелері
```

### Тестілеу {#testing}

Қосымша кешенді тестілеу фреймворкін қамтиды:

- **Модульдік тесттер**: WordPress тест жиынтығымен PHPUnit негізіндегі тесттер
- **Негізгі тест класы**: Жиі кездесетін тест сценарийлері үшін көмекші әдістерді ұсынады
- **Тест қамтуы**: Код қамтуын бақылауға бапталған
- **Multisite тестілеу**: Тесттер multisite ортасында орындалады

### Код стандарттары {#code-standards}

- **WordPress кодтау стандарттары**: PHPCS арқылы міндеттеледі
- **PHP 7.4+ үйлесімділігі**: Заманауи PHP мүмкіндіктеріне қолдау көрсетіледі
- **Статикалық талдау**: Түрлерді тексеру үшін PHPStan интеграциясы
- **Кодты жаңғырту**: PHP жаңартуларына арналған Rector ережелері

### Құрастыру жүйесі {#build-system}

- **Ресурстарды өңдеу**: CSS/JS файлдары үшін кішірейту
- **Аударма**: POT файлын жасау
- **Қаптау**: Таратуға арналған архив жасау
- **Әзірлеу режимі**: Қателерді түзетуге арналған кішірейтілмеген ресурстар

## Конфигурация {#configuration}

Қосымша желі әкімшісі интерфейсі арқылы қолжетімді әртүрлі конфигурация опцияларын қолдайды.

## Hooks және Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Қосымша инициализациясынан кейін іске қосылады
- `ultimate-multisite-addon-template_loaded` - Барлық қосымша файлдары жүктелгеннен кейін іске қосылады

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Қосымша параметрлерін өзгерту
- `ultimate-multisite-addon-template_enabled` - Қосымшаны қосу/өшіру күйін қайта анықтау

## Лицензия {#license}

Бұл қосымша GPL v3 немесе одан кейінгі нұсқа бойынша лицензияланған.

## Қолдау {#support}

Қолдау және құжаттама үшін [MultisiteUltimate.com](https://multisiteultimate.com) сайтына кіріңіз
## Өзгерістер журналы {#changelog}

- Нұсқа 1.0.1 (2025-09-28): префиксті ultimate-multisite етіп қайта атау; text domain жаңарту; нұсқаны көтеру.


- Нұсқа  (2025-09-28): префиксті ultimate-multisite етіп қайта атау; text domain жаңарту; нұсқаны көтеру.
