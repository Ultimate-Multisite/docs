---
title: Интеграция с GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Интеграция с GridPane {#gridpane-integration}

## Общ преглед {#overview}
GridPane е специализиран панел за управление на хостинг на WordPress, предназначен за професионалисти, които се занимават сериозно с WordPress. Тази интеграция автоматично синхронизира домейните и управлява SSL сертификатите между Ultimate Multisite и GridPane.

## Характеристики {#features}
- Автоматично синхронизиране на домейни
- Управление на SSL сертификати
- Автоматична конфигурация на константата SUNRISE

## Изисквания {#requirements}
В следните константи трябва да бъдат дефинирани във файла `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Инструкции за настройка {#setup-instructions}

### 1. Получаване на API данни за GridPane {#1-get-your-gridpane-api-credentials}

1. Влезте в dashboard на GridPane
2. Отидете на "Settings" > "API"
3. Създайте API ключ, ако все още нямате
4. Копирайте API ключа си

### 2. Получаване на ID на сървъра и на сайта {#2-get-your-server-and-site-ids}

1. В dashboard на GridPane, отидете на "Servers"
2. Изберете сървъра, където е хостван вашият WordPress multisite
3. Забележете Server ID (видим в URL или на страницата с детайли на сървъра)
4. Отидете на "Sites" и изберете вашия WordPress сайт
5. Забележете Site ID (видим в URL или на страницата с детайли на сайта)

### 3. Добавяне на константи в wp-config.php {#3-add-constants-to-wp-configphp}

Добавете следните константи във файла `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Активиране на интеграцията {#4-enable-the-integration}

1. В административната част на WordPress, отидете на Ultimate Multisite > Settings
2. Навигирайте до таба "Domain Mapping"
3. Извишете до "Host Integrations"
4. Активирайте интеграцията с GridPane
5. Натиснете "Save Changes"

## Как работи {#how-it-works}
Когато домейнът бъде мапиран в Ultimate Multisite:

1. Интеграцията изпраща заявка към API на GridPane, за да добави домейна към вашия сайт
2. GridPane автоматично управлява предоставянето на SSL сертификати
3. Когато мапирането на домейн бъде премахнато, интеграцията ще премахне домейна от GridPane

Интеграцията също автоматично управлява константата SUNRISE във файла `wp-config.php`, което е необходимо за правилното мапиране на домейни.

## Управление на константата SUNRISE {#sunrise-constant-management}
Една от уникалните функции на интеграцията с GridPane е, че тя автоматично връща константата SUNRISE във файла `wp-config.php`, за да предотврати конфликти с собствената система за мапиране на домейни на GridPane. Това гарантира, че двете системи могат да работят заедно без проблеми.

## Отстраняване на неизправности {#troubleshooting}

### Проблеми с връзката към API {#api-connection-issues}
- Проверете дали API ключът е коректен
- Проверете дали ID на сървъра и на сайта са правилни
- Уверете се, че акаунтът ви в GridPane има необходимите права

### Проблеми с SSL сертификатите {#ssl-certificate-issues}
- GridPane може да отнеме известно време за издаване на SSL сертификати
- Проверете дали домейните ви показват правилно към IP адреса на сървъра
- Проверете настройките за SSL в GridPane за вашия сайт

### Домейнът не е добавен {#domain-not-added}
- Проверете лог файловете на Ultimate Multisite за съобщения за грешки
- Проверете дали домейнът вече не е добавен в GridPane
- Уверете се, че DNS записите на домейна са правилно конфигурирани
