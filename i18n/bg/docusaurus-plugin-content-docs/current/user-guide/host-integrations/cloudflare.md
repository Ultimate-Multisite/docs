---
title: Интеграция с Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Интеграция с Cloudflare {#cloudflare-integration}

## Преглед {#overview}
Cloudflare е водеща мрежа за доставка на съдържание (CDN) и доставчик на сигурност, който помага за защита и ускоряване на уебсайтовете. Тази интеграция позволява автоматично управление на домейн имената между Ultimate Multisite и Cloudflare, особено за инсталации с поддомейни (subdomain multisite).

## Характеристики {#features}
- Автоматично създаване на поддомейни в Cloudflare
- Поддръжка на проксираните поддомейни (Proxied subdomain support)
- Управление на DNS записи
- Подобрен изглед на DNS записи в админ панела на Ultimate Multisite

## Изисквания {#requirements}
В следните константи трябва да бъдат дефинирани във вашия файл `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Инструкции за настройка {#setup-instructions}

### 1. Получаване на API ключ на Cloudflare {#1-get-your-cloudflare-api-key}

1. Влезте в панела (dashboard) на Cloudflare
2. Отидете на "My Profile" (кликнете върху имейла си в горния десен ъгъл)
3. Изберете "API Tokens" от менюто
4. Създайте нов API токен с следните разрешения:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Копирайте API токена си

### 2. Получаване на Zone ID {#2-get-your-zone-id}

1. В панела (dashboard) на Cloudflare, изберете домейна, който искате да използвате
2. Zone ID е видим в таба "Overview", в дясната странична лента под "API"
3. Копирайте Zone ID

### 3. Добавяне на константи в wp-config.php {#3-add-constants-to-wp-configphp}

Добавете следните константи във вашия файл `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Активиране на интеграцията {#4-enable-the-integration}

1. В админ панела на WordPress, отидете на Ultimate Multisite > Settings
2. Навигирайте до таба "Domain Mapping"
3. Извишете до "Host Integrations"
4. Активирайте интеграцията с Cloudflare
5. Кликнете "Save Changes"

## Как работи {#how-it-works}

### Управление на поддомейни (Subdomain Management) {#subdomain-management}

Когато се създаде нов сайт в инсталация с поддомейни:

1. Интеграцията изпраща заявка към API на Cloudflare, за да добави CNAME запис за поддомейна
2. Поддомейнът по подразбиране е конфигуриран да бъде проксиран през Cloudflare (това може да се промени с филтри)
3. Когато сайтът бъде изтрит, интеграцията ще премахне поддомейна от Cloudflare

### Изглед на DNS записи {#dns-record-display}

Интеграцията подобрява изгледа на DNS записи в админ панела на Ultimate Multisite, като:

1. Извлича DNS записи директно от Cloudflare
2. Показва дали записите са проксирани или не
3. Показва допълнителна информация за DNS записите

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (преди наречен "Cloudflare for SaaS") е функция на Cloudflare, която позволява на вашите клиенти да използват собствените си домейни с SSL върху вашата мрежа с множество сайтове (multisite). Това е препоръчителният подход за инсталации с мапиране на домейни (domain-mapped multisite), които използват Cloudflare, защото Cloudflare автоматично управлява издаването и обновяването на SSL сертификати за всеки кастомен домейн.

### Как се различава от стандартната интеграция с Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Стандартна интеграция | Cloudflare Custom Hostnames |
|---|---|---|
| **Цел** | Автоматично създава DNS записи за поддомейни | Позволява кастоми (мапирани) домейни с SSL, управляван от Cloudflare |
| **Най-добро за** | Multisite с поддомейни | Multisite с мапирани домейни |
| **SSL** | Управлява се отделно | Управлява се автоматично от Cloudflare |

### Настройване на Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. В панела (dashboard) на Cloudflare, отворете зоната за вашия основен домейн.
2. Отидете на **SSL/TLS > Custom Hostnames**.
3. Добавете fallback origin, насочен към IP или hostname на вашия сървър.
4. За всеки клиентски домейн, мапиран в Ultimate Multisite, добавете запис Custom Hostname в Cloudflare. Можете да автоматизирате този процес, използвайки Cloudflare API.
5. Cloudflare издава и обновява TLS сертификатите за всеки кастомен хост име автоматично, след като DNS на клиента бъде насочен към вашата мрежа.

За пълна API референция, вижте [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Актуализация на терминологията
Начинос от Ultimate Multisite v2.6.1, тази функция се нарича **Cloudflare Custom Hostnames** във всички настройки и етикети на плагина. По-старите версии използваха името "Cloudflare for SaaS", което е основното наименование на продукта Cloudflare.
:::

## Важни бележки {#important-notes}

С последните актуализации на Cloudflare, wildcard проксирането вече е налично за всички клиенти. Това означава, че стандартната интеграция с DNS на Cloudflare е по-малко критична за инсталации с поддомейни от преди, тъй като просто можете да настроите wildcard DNS запис в Cloudflare.

## Отстраняване на неизправности {#troubleshooting}

### Проблеми с връзката към API {#api-connection-issues}
- Проверете дали API токенът е коректен и има необходимите разрешения
- Проверете дали Zone ID е верен
- Уверете се, че вашият акаунт в Cloudflare има необходимите разрешения

### Поддомейнът не е добавен {#subdomain-not-added}
- Проверете лог файловете на Ultimate Multisite за съобщения за грешки
- Проверете дали поддомейнът вече не е добавен в Cloudflare
- Уверете се, че планът ви в Cloudflare поддържа броя DNS записи, които създавате

### Проблеми с проксирането {#proxying-issues}
- Ако не искате поддомейните да бъдат проксирани, можете да използвате филтъра `wu_cloudflare_should_proxy`
- Някои функции може да не работят правилно, когато са проксирани (напр. определени функции на админ панела на WordPress)
- Помислете за използването на Page Rules на Cloudflare, за да заобиколите кеша за админ паниците
