---
title: Інтеграція з Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Інтеграція з Hostinger (hPanel) {#hostinger-hpanel-integration}

## Огляд {#overview}

Hostinger — популярний провайдер веб-хостингу з сучасною панеллю керування під назвою hPanel. Інтеграція Ultimate Multisite з Hostinger дозволяє автоматично синхронізувати домени між Ultimate Multisite та hPanel Hostinger, даючи змогу керувати мапінгом доменів та піддоменами безпосередньо з адмін-панелі WordPress.

## Функції {#features}

- Автоматичне створення доменів-додатків (addon domain) у hPanel
- Автоматичне створення піддоменів у hPanel (для встановлень multisite з піддоменами)
- Видалення домену при видаленні мапінгу
- Безшовна інтеграція з API керування доменами hPanel

## Вимоги {#requirements}

Для використання інтеграції Hostinger вам знадобиться:

1. Обліковий запис Hostinger з доступом до hPanel
2. Токен API від Hostinger
3. Визначення наступних констант у файлі `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

За бажанням, ви також можете визначити:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Інструкції зі встановлення {#setup-instructions}

### 1. Створення токена API Hostinger {#1-generate-your-hostinger-api-token}

1. Увійдіть у свій обліковий запис Hostinger та відкрийте hPanel
2. Перейдіть до **Account Settings** → **API Tokens**
3. Натисніть **Create New Token**
4. Присвойте токену описну назву (наприклад, "Ultimate Multisite")
5. Виберіть необхідні дозволи:
   - Domain management (Керування доменами)
   - Subdomain management (Керування піддоменами)
6. Скопіюйте згенерований токен та зберігайте його у безпечному місці

### 2. Знаходження ID облікового запису {#2-find-your-account-id}

1. У hPanel перейдіть до **Account Settings** → **Account Information**
2. Ваш ID облікового запису відображається на цій сторінці
3. Скопіюйте та збережіть цей ID для наступного кроку

### 3. Додавання констант до wp-config.php {#3-add-constants-to-wp-configphp}

Додайте наступні константи до вашого файлу `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Якщо ваш обліковий запис Hostinger використовує інший кінцевий API-адрес, ви можете його налаштувати:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Увімкнення інтеграції {#4-enable-the-integration}

1. В адмін-панелі WordPress перейдіть до **Ultimate Multisite > Settings**
2. Перейдіть на вкладку **Domain Mapping**
3. Прокрутіть униз до **Host Integrations**
4. Увімкніть інтеграцію **Hostinger (hPanel)**
5. Натисніть **Save Changes**

## Як це працює {#how-it-works}

### Домени-додатки (Addon Domains) {#addon-domains}

Коли ви мапите домен в Ultimate Multisite:

1. Інтеграція надсилає запит до API Hostinger для додавання домену як домену-додатка.
2. Домен налаштовується на вказівник вашого кореневого каталогу.
3. Коли мапінг домену видаляється, інтеграція автоматично видаляє домен-додаток з hPanel.

### Піддомени (Subdomains) {#subdomains}

Для встановлень multisite з піддоменами, коли створюється новий сайт:

1. Інтеграція витягує частину піддомену з повного домену.
2. Вона надсилає запит до API Hostinger для додавання піддомену.
3. Піддомен налаштовується на вказівник вашого кореневого каталогу.

## Важливі примітки {#important-notes}

- Інтеграція використовує REST API Hostinger для зв'язку з вашим обліковим записом.
- Ваш токен API повинен мати необхідні дозволи для керування доменами та піддоменами.
- Інтеграція не займається налаштуванням DNS; домени повинні бути попередньо спрямовані на ваш обліковий запис Hostinger.
- Запити API надсилаються безпечно через HTTPS.
- Зберігайте свій токен API у безпеці та ніколи не публікуйте його.

## Усунення несправностей {#troubleshooting}

### Проблеми з підключенням API {#api-connection-issues}

- Перевірте, чи є ваш токен API коректним і чи не закінчився термін його дії.
- Переконайтеся, що ваш ID облікового запису правильний.
- Перевірте, чи має ваш токен API необхідні дозволи для керування доменами.
- Переконайтеся, що ваш обліковий запис Hostinger активний та перебуває у належному стані.

### Домен не додано {#domain-not-added}

- Перевірте журнали Ultimate Multisite на наявність повідомлень про помилки.
- Переконайтеся, що домен ще не додано до вашого облікового запису Hostinger.
- Переконайтеся, що ваш обліковий запис Hostinger не досяг ліміту на кількість доменів-додатків.
- Підтвердіть, що домен належним чином спрямований на ваш nameservers Hostinger.

### Проблеми з SSL-сертифікатами {#ssl-certificate-issues}

- Інтеграція не займається видачею SSL-сертифікатів.
- Hostinger зазвичай надає безкоштовні SSL-сертифікати через AutoSSL.
- Ви можете керувати SSL-сертифікатами безпосередньо в hPanel у розділі **SSL/TLS**.
- Як альтернатива, використовуйте Let's Encrypt з функцією AutoSSL Hostinger.

## Підтримка {#support}

Для отримання додаткової допомоги з інтеграцією Hostinger, будь ласка, зверніться до:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
