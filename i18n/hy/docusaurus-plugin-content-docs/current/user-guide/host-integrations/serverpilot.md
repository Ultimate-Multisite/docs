---
title: ServerPilot ինտեգրում
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Ինտեգրումը (Integration)

## Ընդհանուր տեսքը (Overview) {#overview}
ServerPilot-ը Cloud հարթակ է, որը թույլ է տալիս WordPress և այլ PHP կայքեր հենվել սերվերների վրա՝ DigitalOcean, Amazon, Google կամ ցանկացած այլ սերվեր պրովայդերի սերվերներում։ Այս ინտեգրումը թույլ է տալիս ավտոմատ ենթադիր անունների (domain) սինխրոնիզացիա և SSL վկայագրականների կառավարում Ultimate Multisite-ի և ServerPilot-ի միջև։

## Առանձնահատկություններ (Features) {#features}
- Ինտելեկտուալ ենթադիր անունների ավտոմատ սինխրոնիզացիա (Automatic domain syncing)
- Let's Encrypt-ով SSL վկայագրականների կառավարում
- Ավտոմատ SSL թարմացում

## Պահանջներ (Requirements) {#requirements}
Հետևյալ հաստատունները պետք է սահմանվեն ձեր `wp-config.php` ֆայլում.

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Կàiառուեցման ինստրուկումներ (Setup Instructions) {#setup-instructions}

### 1. Ստացեք ձեր ServerPilot API հավաստագրերը (Credentials) {#1-get-your-serverpilot-api-credentials}
1. Մուտք գործեք ձեր ServerPilot-ի դաշտբարը (dashboard)։
2. Գնացեք "Account" > "API" (Հաշիան > API)։
3. Ստեղծեք նոր API key, եթե ունեք չունենաք։
4. Պահպանեք ձեր Client ID-ն և API Key-ը։

### 2. Ստացեք ձեր App ID-ն {#2-get-your-app-id}
1. Ձեր ServerPilot դաշտբարում գնացեք "Apps" (Աplikացիաներ)։
2. Ընտրեք այն app-ը, որտեղ տեղադրված է ձեր WordPress multisite-ը։
3. App ID-ն երևում է URL-ում. `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Ավելացրեք հաստատունները wp-config.php-ին {#3-add-constants-to-wp-configphp}
Ավելացրեք հետևյալ հաստատունները ձեր `wp-config.php` ֆայլի մեջ.

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Թողարկեք ინտեգրումը (Enable the Integration) {#4-enable-the-integration}
1. Ձեր WordPress-ի ադմինից գնացեք Ultimate Multisite > Settings (Կարգավորումներ)։
2. Գնացեք "Domain Mapping" (Անունների քարտեզագրում) տաբին։
3. Կանգնեք ներքև և գտնեք "Host Integrations" (Հոස් ინտեգրումներ) բաժինը։
4. Թողարկեք ServerPilot-ի ინտեգրումը։
5. Սեղմեք "Save Changes" (Փոփոխությունները պահել)։

## Ինչպես է աշխատում (How It Works) {#how-it-works}

### Անունների սինխրոնիզացիա (Domain Syncing) {#domain-syncing}

Երբ անունը քարտեզագրվում է Ultimate Multisite-ում.

1. Інтеграцията отримує поточний список доменів із ServerPilot
2. Вона додає новий домен до списку (разом з версією www, якщо це застосовно)
3. Вона надсилає оновлений список у ServerPilot через API
4. ServerPilot оновлює список доменів для вашого застосунку

### Управління SSL-сертифікатами {#ssl-certificate-management}

Після синхронізації доменів:

1. Інтеграція автоматично вмикає AutoSSL для вашого застосунку
2. ServerPilot займається видачею та встановленням SSL-сертифікатів за допомогою Let's Encrypt
3. ServerPilot також відповідає за автоматичне поновлення SSL-сертифікатів

## Перевірка SSL-сертифікатів {#ssl-certificate-verification}

Інтеграція налаштована на збільшення кількості спроб перевірки SSL-сертифікатів для ServerPilot, оскільки ServerPilot може зайняти деякий час на видачу та встановлення цих сертифікатів. За замовчуванням вона пробує до 5 разів, але це можна змінити за допомогою фільтрів.

## Усунення несправностей {#troubleshooting}

### Проблеми з підключенням API {#api-connection-issues}
- Перевірте, чи правильні ваші Client ID та API Key
- Переконайтеся, що ваш App ID правильний
- Переконайтеся, що у вашого облікового запису ServerPilot є необхідні права доступу

### Проблеми зі SSL-сертифікатами {#ssl-certificate-issues}
- ServerPilot вимагає, щоб домени мали дійсні DNS-записи, які вказують на ваш сервер перед видачею SSL-сертифікатів
- Якщо SSL-сертифікати не видаються, перевірте, чи ваші домени правильно вказують на IP-адресу вашого сервера
- ServerPilot може зайняти деякий час на видачу та встановлення SSL-сертифікатів (зазвичай 5-15 хвилин)

### Домен не додано {#domain-not-added}
- Перевірте логи Ultimate Multisite на наявність будь-яких повідомлень про помилки
- Переконайтеся, що домен ще не доданий у ServerPilot
- Переконайтеся, що ваш план ServerPilot підтримує кількість доменів, які ви додаєте

### Դոմենի հեռացում {#domain-removal}
- Ընթացիկ պահին ServerPilot API-ը թույլ չի տալիս անհատական դոմեններ հեռացնել։
- Երբ Ultimate Multisite-ում հեռացվում է դոմենի քարտեզագրումը (domain mapping), ինտեգրումը ServerPilot-ի դոմենների ցուցակը թարմացնում է՝ հեռացված դոմենը բացառելով։
