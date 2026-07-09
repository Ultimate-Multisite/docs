---
title: RunCloud Integration
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Интеграция с RunCloud {#runcloud-integration}

## Преглед {#overview}
RunCloud е облачна платформа за управление на сървъри, която ви позволява лесно да разполагате и управлявате уеб приложения върху собствените си облачни сървъри. Тази интеграция осигурява автоматично синхронизиране на домейни и управление на SSL сертификати между Ultimate Multisite и RunCloud.

## Характеристики {#features}
- Автоматично синхронизиране на домейни
- Управление на SSL сертификати
- Премахване на домен при изтриване на маппинга

## Изисквания {#requirements}
Следните константи трябва да бъдат дефинирани във файла `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Инструкции за настройка {#setup-instructions}

### 1. Получаване на API данни за RunCloud {#1-get-your-runcloud-api-credentials}

1. Влезте в вашия RunCloud dashboard
2. Отидете на "User Profile" (кликнете върху профилната си снимка в горния десен ъгъл)
3. Изберете "API" от менюто
4. Кликнете върху "Generate API Key", ако вече не сте генерирали
5. Копирайте API Key и API Secret

### 2. Получаване на ID на сървъра и на приложението {#2-get-your-server-and-app-ids}

1. В RunCloud dashboard, отидете на "Servers"
2. Изберете сървъра, където е хостван вашият WordPress multisite
3. Server ID е видим в URL-адресата: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Отидете на "Web Applications" и изберете вашето WordPress приложение
5. App ID е видим в URL-адресата: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Добавяне на константи в wp-config.php {#3-add-constants-to-wp-configphp}

Добавете следните константи във файла `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Активиране на интеграцията {#4-enable-the-integration}

1. В административния панел на WordPress, отидете на Ultimate Multisite > Settings
2. Навигирайте до таба "Domain Mapping"
3. Извишете до "Host Integrations"
4. Активирайте интеграцията с RunCloud
5. Кликнете върху "Save Changes"

## Как работи {#how-it-works}
Когато домен бъде мапиран в Ultimate Multisite:

1. Интеграцията изпраща заявка към API на RunCloud, за да добави домена към вашето приложение
2. Ако доменът бъде успешно добавен, интеграцията също ще преразположи SSL сертификатите
3. Когато маппингът на домен бъде премахнат, интеграцията ще премахне домена от RunCloud

За инсталации на поддомейни, интеграцията автоматично ще управлява създаването на поддомейни в RunCloud, когато в мрежата ви бъдат добавени нови сайтове.

## Отстраняване на неизправности {#troubleshooting}

### Проблеми с връзката към API {#api-connection-issues}
- Проверете дали API данните са коректни
- Проверете дали ID на сървъра и на приложението са правилни
- Уверете се, че вашият RunCloud account има необходимите права

### Проблеми с SSL сертификатите {#ssl-certificate-issues}
- RunCloud може да отнеме известно време за издаване на SSL сертификати
- Проверете дали домейните ви показват правилно към IP адреса на сървъра
- Проверете настройките за SSL на RunCloud за вашето приложение

### Доменът не е добавен {#domain-not-added}
- Проверете лог файловете на Ultimate Multisite за съобщения за грешки
- Проверете дали доменът вече не е добавен към RunCloud
- Уверете се, че планът ви в RunCloud поддържа множество домейни
