---
title: Интеграција со Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Интеграција со Hostinger (hPanel) {#hostinger-hpanel-integration}

## Преглед {#overview}

Hostinger е популарен провајдер за веб хостинг со модерен контролен панел наречен hPanel. Интеграцијата Ultimate Multisite Hostinger овозможува автоматско синхронизирање на домени помеѓу Ultimate Multisite и hPanel на Hostinger, што ви овозможува да управувате автоматично со мапирање на домените и поддомените директно од вашата WordPress административна панел.

## Функции {#features}

- Автоматско креирање дополнителни domeni во hPanel
- Автоматско креирање поддомени во hPanel (за инсталации со поддомен Multisite)
- Прекинување на доменet кога ќе се делегираат мапирањата
- Беспрекорен интеграција со API за управување со domeniте на hPanel

## Прикапи {#requirements}

За да го користите интеграцијата со Hostinger, ви треба:

1. Рачунарска сметка на Hostinger со пристап до hPanel
2. API токен од Hostinger
3. Следните константи дефинирани во вашата `wp-config.php` датотека:

```php
define('WU_HOSTINGER_API_TOKEN', 'вашиот_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'вашиот_hostinger_account_id');
```

Опционално, можете да дефинирате и:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Дефолт API конекција
```

## Инструкции за поставување {#setup-instructions}

### 1. Генерација на вашиот Hostinger API токен {#1-generate-your-hostinger-api-token}

1. Најавете се во вашата сметка на Hostinger и пристапите до hPanel
2. Одете на **Account Settings** → **API Tokens**
3. Кликнете на **Create New Token** (Создај нов токен)
4. Дајте му описен име на токенот (на пр., "Ultimate Multisite")
5. Изберете потребните дозволи:
   - Управување со domeni (Domain management)
   - Управување со поддомени (Subdomain management)
6. Копирајте генерираниот токен и го зачувајте сигурно

### 2. Пронајдете ја вашата ID на сметка {#2-find-your-account-id}

1. Во hPanel, одете на **Account Settings** → **Account Information**
2. Вашата Account ID е прикажана на оваа страница
3. Копирајте и зачувајте ја оваа ID за следниот чекор

### 3. Додадете константи во wp-config.php {#3-add-constants-to-wp-configphp}

Додадете ги следните константи во вашата `wp-config.php` датотека:

```php
define('WU_HOSTINGER_API_TOKEN', 'ваши_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'ваши_hostinger_account_id');
```

Ако вашата сметка во Hostinger користи различен API endpoint, можете да го прилагодите:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Вклучување на интеграцијата {#4-enable-the-integration}

1. Во администрацијата на WordPress, отидете на **Ultimate Multisite > Settings** (Поставки)
2. Најдете табот **Domain Mapping** (Мапирање на домените)
3. Пролискувајте надолу до **Host Integrations** (Интеграции со хостови)
4. Вклучете интеграцијата за **Hostinger (hPanel)**
5. Кликнете на **Save Changes** (Зачувај промени)

## Како работи {#how-it-works}

### Дополнителни domeni (Addon Domains) {#addon-domains}

Кога мапирате домен во Ultimate Multisite:

1. Интеграцијата испраќа барање на API-то на Hostinger за да го додаде доминот како дополнителен домен
2. Доминот е конфигуриран да укажува на вашата корен директорија (root directory)
3. Кога ќе се откаже мапирање на домен, интеграцијата автоматски го отстранува дополнителниот домен од hPanel

### Поддомени (Subdomains) {#subdomains}

За инсталации со поддомени за Multisite, кога ќе се креи нова локација:

1. Интеграцијата извлекува делот со поддомен од целиот домен
2. Испраќа барање на API-то на Hostinger за да го додаде поддоменот
3. Поддоменот е конфигуриран да укажува на вашата корен директорија

## Важни забелешки {#important-notes}

- Интеграцијата користи REST API на Hostinger за комуникација со вашата сметка
- Вашиот API токен мора да има потребните дозволи за управување со домени и поддомени
- Интеграцијата не го обработува конфигурацирањето на DNS; домените треба веќе да бидат насочени кон вашата Hostinger сметка
- Барањата на API се праќаат сигурно преку HTTPS
- Држете вашиот API токен сигурен и никогаш не го споделувај ја јавно

## Решавање проблеми (Troubleshooting) {#troubleshooting}

### Проблеми со врска на API {#api-connection-issues}

Проверете дали API токенот е правилен и не е истекал
Проверете дали вашите Account ID е правилен
Осигурете дека вашиот API токенот има потребните дозволи за управување со домен
Проверете дали вашата Hostinger сметка е активна и во добро состојба

### Домен не додаден {#domain-not-added}

- Проверете логатите на Ultimate Multisite за некои пораки за грешки
- Проверете дали доменet веќе не е додаден во вашата Hostinger сметка
- Осигурајте се дека вашата Hostinger сметка не е достигнала својата граница за домени со дополнителни услуги (addon domains)
- Потврдете дека доменet е правилно насочен кон вашите Hostinger nameservers

### Проблеми со SSL сертификати {#ssl-certificate-issues}

- Интеграцијата не управува со издавање на SSL сертификати
- Hostinger обично нуди бесплатни SSL сертификати преку AutoSSL
- Можете да ги управувате SSL сертификатите директно во hPanel под **SSL/TLS**
- Како алтернатива, користите Let's Encrypt со функцијата на AutoSSL од Hostinger

## Поддршка {#support}

За дополнителна помош со интеграцијата со Hostinger, ве молиме се обратите до:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
