---
title: Интеграция с Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Интеграция с Hostinger (hPanel)

## Преглед {#overview}

Hostinger е популярен доставчик на уеб хостинг, който използва модерен контролен панел, наречен hPanel. Интеграцията Ultimate Multisite Hostinger позволява автоматично синхронизиране на домейните между Ultimate Multisite и hPanel на Hostinger, което ви дава възможност да управлявате автоматично мапирането на домейни и поддомейни директно от административната част на WordPress.

## Характеристики {#features}

- Автоматично създаване на добавени домейни (addon domains) в hPanel
- Автоматично създаване на поддомейни в hPanel (за инсталации с поддомейн мултисайт)
- Изтриване на домейни, когато мапиранията бъдат премахнати
- Безпроблемна интеграция с API за управление на домейни на hPanel

## Изисквания {#requirements}

За да използвате интеграцията с Hostinger, е необходимо:

1. Акаунт в Hostinger с достъп до hPanel
2. API токен от Hostinger
3. Следните константи, дефинирани във файла `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

По избор, можете също да дефинирате:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Инструкции за настройка {#setup-instructions}

### 1. Генериране на API токена на Hostinger {#1-generate-your-hostinger-api-token}

1. Влезте в акаунта си в Hostinger и достъпете hPanel
2. Навигирайте до **Account Settings** → **API Tokens**
3. Натиснете **Create New Token**
4. Дайте описателно име на токена си (напр. "Ultimate Multisite")
5. Изберете необходимите разрешения:
   - Domain management
   - Subdomain management
6. Копирайте генерирания токен и го съхранявайте в безопасно място

### 2. Намиране на ID на акаунта {#2-find-your-account-id}

1. В hPanel отидете на **Account Settings** → **Account Information**
2. Вашият Account ID се показва на тази страница
3. Копирайте и запазете този ID за следващата стъпка

### 3. Добавяне на константи в wp-config.php {#3-add-constants-to-wp-configphp}

Добавете следните константи във файла `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ако акаунтът ви в Hostinger използва различен API endpoint, можете да го персонализирате:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Активиране на интеграцията {#4-enable-the-integration}

1. В административната част на WordPress отидете на **Ultimate Multisite > Settings**
2. Навигирайте до таба **Domain Mapping**
3. Извишете до **Host Integrations**
4. Активирайте интеграцията **Hostinger (hPanel)**
5. Натиснете **Save Changes**

## Как работи {#how-it-works}

### Добавени домейни (Addon Domains) {#addon-domains}

Когато мапирате домейн в Ultimate Multisite:

1. Интеграцията изпраща заявка към API на Hostinger, за да добави домейна като добавен домейн (addon domain)
2. Домейнът се конфигурира да сочи към основната ви директория
3. Когато мапиранието на домейн бъде премахнато, интеграцията автоматично премахва добавения домейн от hPanel

### Поддомейни (Subdomains) {#subdomains}

За инсталации с поддомейн мултисайт, когато се създава нов сайт:

1. Интеграцията извлича частта на поддомейна от пълния домейн
2. Изпраща заявка към API на Hostinger, за да добави поддомейна
3. Поддомейнът се конфигурира да сочи към основната ви директория

## Важни бележки {#important-notes}

- Интеграцията използва REST API на Hostinger за комуникация с вашия акаунт
- Вашият API токен трябва да има необходимите разрешения за управление на домейни и поддомейни
- Интеграцията не управлява DNS конфигурацията; домейните трябва вече да сочат към вашия акаунт в Hostinger
- Заявките към API се правят в безопасност през HTTPS
- Запазете API токена си в безопасност и никога не го споделяйте публично

## Отстраняване на неизправности {#troubleshooting}

### Проблеми с връзката към API {#api-connection-issues}

- Проверете дали API токенът ви е коректен и не е изтекъл
- Проверете дали Account ID е верен
- Уверете се, че API токенът има необходимите разрешения за управление на домейни
- Проверете дали акаунтът ви в Hostinger е активен и в добро състояние

### Домейнът не е добавен {#domain-not-added}

- Проверете лог файловете на Ultimate Multisite за съобщения за грешки
- Проверете дали домейнът вече не е добавен към акаунта ви в Hostinger
- Уверете се, че акаунтът ви в Hostinger не е достигнал лимита си за добавени домейни
- Потвърдете дали домейнът е правилно насочен към имениците (nameservers) на Hostinger

### Проблеми с SSL сертификати {#ssl-certificate-issues}

- Интеграцията не управлява издаването на SSL сертификати
- Hostinger обикновено предоставя безплатни SSL сертификати чрез AutoSSL
- Можете да управлявате SSL сертификатите директно в hPanel под **SSL/TLS**
- Алтернативно, използвайте Let's Encrypt с функцията AutoSSL на Hostinger

## Поддръжка {#support}

За допълнителна помощ с интеграцията с Hostinger, моля, се обърнете към:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
