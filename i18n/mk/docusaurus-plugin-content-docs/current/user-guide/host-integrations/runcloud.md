---
title: Интеграција со RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Интеграција со RunCloud

## Преглед {#overview}
RunCloud е облачна платформа за управување со сервери која ви овозможува лесно да го разместите и управувате веб апликациите на вашите сопствени облачни сервери. Ова интегрира автоматско синхронизирање на домените и управување со SSL сертификатите помеѓу Ultimate Multisite и RunCloud.

## Функции {#features}
- Автоматско синхронизирање на домените
- Управување со SSL сертификати
- Прекинување на доменet кога ќе се бришат мапирањата (mappings)

## Задолжинија {#requirements}
Следни константи мора да бидат дефинирани во вашата `wp-config.php` дафат:

```php
define('WU_RUNCLOUD_API_KEY', 'ваша_api_ключ');
define('WU_RUNCLOUD_API_SECRET', 'ваша_api_секрет');
define('WU_RUNCLOUD_SERVER_ID', 'ваши_сервер_иди');
define('WU_RUNCLOUD_APP_ID', 'ваши_апликациски_иди');
```

## Инструкции за поставување {#setup-instructions}

### 1. добијте вашите RunCloud API податоци {#1-get-your-runcloud-api-credentials}

1. Најавете се во вашата RunCloud административна панел (dashboard).
2. Одете на "User Profile" (најдете ја иконата на вашиот профил во горниот десен агол)
3. Изберете "API" од менюто
4. Кликнете на "Generate API Key" ако не го имате веќе
5. Копирајте го својот API Key и API Secret

### 2. добијте вашите ID-и за сервер и апликација {#2-get-your-server-and-app-ids}

1. Во вашата RunCloud административна панел, отидете на "Servers" (Сервери)
2. Изберете серверот каде е хостиран вашиот WordPress multisite
3. Server ID е видлив во URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Одете на "Web Applications" и изберете ја вашата WordPress апликација
5. App ID е видлив во URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. додадете константи во wp-config.php {#3-add-constants-to-wp-configphp}

Додадете ги следните константи во вашата `wp-config.php` дафат:

```php
define('WU_RUNCLOUD_API_KEY', 'ваша_api_ключ');
define('WU_RUNCLOUD_API_SECRET', 'ваша_api_секрет');
define('WU_RUNCLOUD_SERVER_ID', 'ваши_сервер_иди');
define('WU_RUNCLOUD_APP_ID', 'ваши_апликациски_иди');
```

### 4. активирајте ја интеграцијата {#4-enable-the-integration}

1. Во WordPress администратор, отидете на Ultimate Multisite > Settings (Поставки)
2. Направите се на табот "Domain Mapping" (Мапирање домен)
3. Пролијте надолу до "Host Integrations" (Интеграции со хост)
4. Вклучете интеграцијата RunCloud
5. Кликнете на "Save Changes" (Зачувај промени)

## Како работи {#how-it-works}

Кога домен се мапира во Ultimate Multisite:

1. Интеграцијата испраќа барање на API-то на RunCloud за да го додаде доменот во вашата апликација
2. Ако дометот успешно се додаде, интеграцијата ќе редеплојува и сертификатите SSL
3. Кога мапирање на домен е отстрането, интеграцијата ќе го отстрани дометот од RunCloud

За инсталации на поддомените, интеграцијата автоматски ќе ги обработува создавањето на поддомени во RunCloud кога се додадени нови сайтови во вашата мрежа.

## Решавање проблеми (Troubleshooting) {#troubleshooting}

### Проблеми со врска на API {#api-connection-issues}
- Проверете дали вашите API податоци (credentials) се правилни
- Проверете дали вашите ID за сервер и апликација (app IDs) се правилни
- Убедете се дека вашата RunCloud сметка има потребните дозволи

### Проблеми со сертификатите SSL {#ssl-certificate-issues}
- RunCloud може да им потребно време за издавање на сертификати SSL
- Проверете дали вашите домени добро насочуваат кон IP адресата на вашиот сервер
- Проверете ги поставките за SSL во RunCloud за вашата апликација

### Домен не е додаден {#domain-not-added}
- Проверете ги логатите на Ultimate Multisite за било какви пораки за грешки
- Убедете се дека дометот веќе не е додаден во RunCloud
- Убедете се дека вашиот план во RunCloud поддржува повеќе домени
