---
title: Интеграција со ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Интеграција со ServerPilot

## Преглед {#overview}
ServerPilot е облачна услуга за хостирање на WordPress и други PHP веб-сајтови на сервери од DigitalOcean, Amazon, Google или било кои други провајдери на сервери. Ова интегрира автоматско синхронизирање на домените и управување со SSL сертификати помеѓу Ultimate Multisite и ServerPilot.

## Функции {#features}
- Автоматско синхронизирање на домените
- Управување со SSL сертификати со Let's Encrypt
- Автоматско обновено на SSL

## Задолжинија {#requirements}
Следни константи мора да бидат дефинирани во вашата `wp-config.php` датотека:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'вашиот_client_id');
define('WU_SERVER_PILOT_API_KEY', 'вашата_api_key');
define('WU_SERVER_PILOT_APP_ID', 'вашиот_app_id');
```

## Инструкции за поставување {#setup-instructions}

### 1. добијте вашите ServerPilot API податоци {#1-get-your-serverpilot-api-credentials}

1. Најавете се во вашата ServerPilot административна табла (dashboard)
2. Одете на "Account" > "API"
3. Создадете нов API клуч ако немате веќе
4. Копирајте го вашиот Client ID и API Key

### 2. добијте свој App ID {#2-get-your-app-id}

1. Во вашата ServerPilot административна табла, отидете на "Apps"
2. Изберете ја апликацијата каде е хостиран вашиот WordPress multisite
3. App ID е видлив во URL-от: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Додадете константи во wp-config.php {#3-add-constants-to-wp-configphp}

Додадете ги следните константи во вашата `wp-config.php` датотека:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'вашиот_client_id');
define('WU_SERVER_PILOT_API_KEY', 'вашата_api_key');
define('WU_SERVER_PILOT_APP_ID', 'вашиот_app_id');
```

### 4. Вклучете интеграцијата {#4-enable-the-integration}

1. Во вашата WordPress административна панел, отидете на Ultimate Multisite > Settings
2. Најдете ја табот "Domain Mapping" (Мапирање на домените)
3. Пролискувајте надолу до "Host Integrations" (Интеграции со хостови)
4. Вклучете ServerPilot интеграцијата
5. Кликнете на "Save Changes" (Зачувај промени)

## Како работи {#how-it-works}

### Синхронизација на домените {#domain-syncing}

Кога некој домен е мапиран во Ultimate Multisite:

1. Интеграцијата го презема моменталната листа на домени од ServerPilot
2. Таа додаде новиот домен во листата (заедно со верзија со www, ако е примарно)
3. Таа испраќа ажурираната листа на ServerPilot преку API
4. ServerPilot го ажурира списокот на домените за вашата апликација

### Управување со SSL сертификати {#ssl-certificate-management}

По синхронизирањето на домените:

1. Интеграцијата автоматски вклучува AutoSSL за вашата апликација
2. ServerPilot го управува издавањето и инсталирањето на SSL сертификатите користејќи Let's Encrypt
3. ServerPilot исто така го управува автоматското обновено на SSL сертификатите

## Проверка на SSL сертификати {#ssl-certificate-verification}

Интеграцијата е конфигурирана да зголеми бројот на проби на проверка на SSL сертификати за ServerPilot, бидејќи може време за тоа што ServerPilot ќе издаде и инсталира SSL сертификати. По дефолт, таа ќе се обиде до 5 пати, но ова може да се прилагоди користејќи филтри.

## Решавање проблеми (Troubleshooting) {#troubleshooting}

### Проблеми со врската на API {#api-connection-issues}
- Проверете дали вашите Client ID и API Key се правилни
- Проверете дали вашиот App ID е правилен
- Сигурно секогаш проверете дали вашата ServerPilot сметка има потребните дозволи

### Проблеми со SSL сертификати {#ssl-certificate-issues}
- ServerPilot бара дека домените мора да имаат валидни DNS записи кои укажуваат на вашиот сервер пред издавањето на SSL сертификати
- Ако не се издаваат SSL сертификати, проверете дали вашите домени правилно укажуваат на IP адресата на вашиот сервер
- Може време за тоа што ServerPilot ќе издаде и инсталира SSL сертификати (обично 5-15 минути)

### Домен не е додаден {#domain-not-added}
- Проверете ги логатите на Ultimate Multisite за било какви пораки за грешки
- Проверете дали доменet веќе не е додаден во ServerPilot
- Сигурно секогаш проверете дали вашиот план на ServerPilot поддржува бројот на домени што го додавате

### Сеќалива на домен (Domain Removal) {#domain-removal}
- В момента API на ServerPilot не нуди начин да се ударат индивидуални domeni.
- Кога ќе се откаже мапирање на домен во Ultimate Multisite, интеграцијата ќе ажурира списокот на domeni во ServerPilot за да го исклучи отстранениот домен.
