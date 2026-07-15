---
title: Кошумча модулдун шаблону
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Кошумча модулдун шаблону

Кошумча модулдун шаблону — Ultimate Multisite.

## Талаптар {#requirements}

- WordPress 5.3 же жогору
- PHP 7.4 же жогору
- Multisite Ultimate плагини (активдүү)

## Орнотуу {#installation}

1. Кошумча модулдун файлдарын `/wp-content/plugins/` каталогуңузга жүктөңүз
2. Плагинди WordPress ичиндеги 'Плагиндер' менюсу аркылуу активдештириңиз
3. Кошумча модулдун жөндөөлөрүн тармак админ панелинде конфигурациялаңыз

## Иштеп чыгуу {#development}

### Жөндөө {#setup}

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

### Долбоордун түзүмү {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP класстары жана кошуулар
│   ├── class-multisite-ultimate-updater.php  # Жаңыртуу иштетүүчүсү
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Негизги функционалдуулук
├── tests/                        # Модулдук тесттер
│   ├── bootstrap.php            # Тест bootstrap
│   ├── class-*-base.php         # Негизги тест классы
│   └── class-*-test.php         # Тест учурлары
├── views/                       # Шаблон файлдары
├── assets/                      # Статикалык ресурстар
│   ├── css/                     # Стиль таблицалары
│   ├── js/                      # JavaScript файлдары
│   └── images/                  # Сүрөттөр
├── lang/                        # Тил файлдары
├── composer.json                # PHP көзкарандылыктары
├── package.json                 # Node.js көзкарандылыктары
├── phpunit.xml.dist             # PHPUnit конфигурациясы
├── .phpcs.xml.dist              # Код стандарттарынын конфигурациясы
└── rector.php                   # Кодду заманбапташтыруу эрежелери
```

### Тестирлөө {#testing}

Кошумча модуль ар тараптуу тестирлөө алкагын камтыйт:

- **Модулдук тесттер**: WordPress тест топтому менен PHPUnit негизиндеги тесттер
- **Негизги тест классы**: Жалпы тест сценарийлери үчүн жардамчы ыкмаларды камсыздайт
- **Тест камтуусу**: Код камтуусун көзөмөлдөө үчүн конфигурацияланган
- **Multisite тестирлөөсү**: Тесттер multisite чөйрөсүндө иштетилет

### Код стандарттары {#code-standards}

- **WordPress код стандарттары**: PHPCS аркылуу мажбурлап колдонулат
- **PHP 7.4+ шайкештиги**: Заманбап PHP функциялары колдоого алынат
- **Статикалык талдоо**: Типтерди текшерүү үчүн PHPStan интеграциясы
- **Кодду заманбапташтыруу**: PHP жаңыртуулары үчүн Rector эрежелери

### Куруу системасы {#build-system}

- **Ресурстарды иштетүү**: CSS/JS файлдарын кичирейтүү
- **Котормо**: POT файлын түзүү
- **Таңгактоо**: Таркатуу үчүн архив түзүү
- **Иштеп чыгуу режими**: Мүчүлүштүктөрдү оңдоо үчүн кичирейтилбеген ресурстар

## Конфигурация {#configuration}

Кошумча модуль тармак админ интерфейси аркылуу жеткиликтүү болгон ар кандай конфигурация параметрлерин колдойт.

## Hooks жана Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Кошумча модуль инициализациялангандан кийин иштетилет
- `ultimate-multisite-addon-template_loaded` - Кошумча модулдун бардык файлдары жүктөлгөндөн кийин иштетилет

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Кошумча модулдун жөндөөлөрүн өзгөртүү
- `ultimate-multisite-addon-template_enabled` - Кошумча модулду иштетүү/өчүрүү абалын кайра аныктоо

## Лицензия {#license}

Бул кошумча модуль GPL v3 же андан кийинки лицензия боюнча лицензияланган.

## Колдоо {#support}

Колдоо жана документация үчүн [MultisiteUltimate.com](https://multisiteultimate.com) сайтына кириңиз
## Өзгөртүүлөр журналы {#changelog}

- Version 1.0.1 (2025-09-28): префиксти ultimate-multisite кылып өзгөртүү; текст доменди жаңыртуу; версияны жогорулатуу.


- Version  (2025-09-28): префиксти ultimate-multisite кылып өзгөртүү; текст доменди жаңыртуу; версияны жогорулатуу.
