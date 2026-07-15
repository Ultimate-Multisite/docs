---
title: Интеграция с Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Интеграция с Cloudways

## Общ преглед {#overview}
Cloudways е управлявана облачна хостинг платформа, която ви позволява да разполагате WordPress сайтове на различни облачни доставчици като DigitalOcean, AWS, Google Cloud и други. Тази интеграция осигурява автоматично синхронизиране на домейни и управление на SSL сертификати между Ultimate Multisite и Cloudways.

## Характеристики {#features}
- Автоматично синхронизиране на домейни
- Управление на SSL сертификати
- Поддръжка за допълнителни домейни
- Валидация на DNS за SSL сертификати

## Изисквания {#requirements}
Следните константи трябва да бъдат дефинирани във файла `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

По избор, можете също да дефинирате:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Инструкции за настройка {#setup-instructions}

### 1. Получаване на API данни за Cloudways {#1-get-your-cloudways-api-credentials}

1. Влезте в dashboard на Cloudways
2. Отидете на "Account" > "API Keys"
3. Създайте API ключ, ако нямате
4. Копирайте имейла и API ключа си

### 2. Получаване на ID на сървъра и приложението {#2-get-your-server-and-application-ids}

1. В dashboard на Cloudways, отидете на "Servers"
2. Изберете сървъра, където е хостван вашият WordPress Multisite
3. Server ID е видим в URL-адресата: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Отидете на "Applications" и изберете вашето WordPress приложение
5. App ID е видим в URL-адресата: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Добавяне на константи в wp-config.php {#3-add-constants-to-wp-configphp}

Добавете следните константи във файла `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ако имате допълнителни **външни** домейни (извън мрежата на вашия Multisite), които винаги трябва да остават в списъка с псевдоними (aliases) на Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Не включвайте wildcard за собствената си мрежа
**Не** добавяйте `*.your-network.com` (или какъвто и да е шаблон за поддомейни на вашата мрежа) към
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Вижте [Важно — проблем с wildcard SSL](#important--wildcard-ssl-pitfall)
по-долу за причината, поради която това предотвратява издаването на SSL сертификати за всеки наемател.
:::

### 4. Активиране на интеграцията {#4-enable-the-integration}

1. В административната част на WordPress, отидете на Ultimate Multisite > Settings
2. Навигирайте до раздела "Domain Mapping"
3. Извишете до "Host Integrations"
4. Активирайте интеграцията с Cloudways
5. Натиснете "Save Changes"

## Как работи {#how-it-works}

### Синхронизиране на домейни {#domain-syncing}

Когато домейн бъде мапиран в Ultimate Multisite:

1. Интеграцията извлича всички текущо мапирани домейни
2. Добавя новия домейн към списъка (вместе с версията www, ако е приложимо)
3. Изпраща пълния списък към Cloudways чрез API
4. Cloudways актуализира псевдонимите на домейните за вашето приложение

Забележка: API на Cloudways изисква изпращане на пълния списък домейни всеки път, а не просто добавяне или премахване на отделни домейни.

### Управление на SSL сертификати {#ssl-certificate-management}

След синхронизирането на домейните:

1. Интеграцията проверява кои домейни имат валидни DNS записи, насочващи към вашия сървър
2. Изпраща заявка към Cloudways за инсталиране на Let's Encrypt SSL сертификати за тези домейни
3. Cloudways управлява издаването и инсталирането на SSL сертификатите

Интеграцията винаги изисква **стандартни** (не-wildcard) Let's Encrypt сертификати от Cloudways. Ако в `WU_CLOUDWAYS_EXTRA_DOMAINS` е задан wildcard шаблон, предходният `*.` се премахва преди заявката за SSL — самият wildcard никога не се инсталира от тази интеграция. За да използвате wildcard сертификат в Cloudways, трябва да го инсталирате ръчно, но това блокира издаването на Let's Encrypt за домейни на всеки потребител, мапирани с кастомизация (вижте проблема по-долу).

## Допълнителни домейни {#extra-domains}

Константата `WU_CLOUDWAYS_EXTRA_DOMAINS` ви позволява да зададете допълнителни **външни** домейни, които винаги трябва да остават в списъка с псевдоними на приложението в Cloudways. Използвайте я за:

- Външни домейни, които не се управляват от Ultimate Multisite (напр. отделен маркетингов сайт, който споделя едно и също приложение в Cloudways)
- Паркирани или staging домейни, които искате да останат в списъка с псевдоними на приложението

**Не** използвайте тази константа за wildcard поддомейн на собствената си мрежа (напр. `*.your-network.com`). Вижте проблема с wildcard SSL по-долу.

## Важно — Проблем с wildcard SSL {#important--wildcard-ssl-pitfall}

Честа грешка при следването на стандартната настройка на Cloudways е добавянето на wildcard като `*.your-network.com` към `WU_CLOUDWAYS_EXTRA_DOMAINS` или ръчно инсталирането на wildcard SSL сертификат на Cloudways за този wildcard.

**Ако направите това, Cloudways ще откаже да издаде Let's Encrypt сертификати за домейните на всеки потребител, които Ultimate Multisite мапира.** Cloudways замества активния SSL сертификат на приложението всеки път, а предварително съществуващ wildcard сертификат на приложението блокира издаването на Let's Encrypt за домейни на всеки потребител, на което разчита интеграцията.

### Препоръчителна настройка на SSL в Cloudways за мрежа Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. В раздела **SSL Certificate** на приложението в Cloudways, инсталирайте **стандартен Let's Encrypt сертификат**, покриващ само `your-network.com` и `www.your-network.com` — **не** wildcard.
2. **Не** поставяйте `*.your-network.com` (или какъвто и да е шаблон за поддомейни на вашата мрежа) в `WU_CLOUDWAYS_EXTRA_DOMAINS`. Запазете тази константа само за **външни** домейни.
3. Създайте wildcard за поддомейни на ниво **DNS** само (A запис за `*.your-network.com`, насочващ към IP адреса на сървъра ви в Cloudways), за да работят подсайтовете. SSL за отделните мапирани домейни след това се издава автоматично от интеграцията чрез Let's Encrypt.

Ако кастомизираните домейни на вашите наематели са блокирани без SSL, проверете раздела SSL Certificate в Cloudways. Ако там е активен wildcard сертификат, премахнете го, издайте отново стандартен Let's Encrypt сертификат само за основния домейн на мрежата (`your-network.com`, `www.your-network.com`) и премахнете всички wildcard записи от `WU_CLOUDWAYS_EXTRA_DOMAINS`. След това повторно задействайте мапирането на домейни (или изчакайте следващото) и интеграцията отново ще започне да изисква сертификати за всеки домейн.

## Отстраняване на неизправности {#troubleshooting}

### Проблеми с връзката към API {#api-connection-issues}
- Проверете дали имейлът и API ключът са коректни
- Проверете дали ID на сървъра и приложението са коректни
- Уверете се, че вашият акаунт в Cloudways има необходимите права

### Проблеми с SSL сертификати {#ssl-certificate-issues}
- Cloudways изисква домейните да имат валидни DNS записи, насочващи към вашия сървър, преди да издаде SSL сертификати
- Интеграцията валидира DNS записи, преди да изпрати заявка за SSL сертификати
- Ако SSL сертификатите не се издават, проверете дали домейните ви точно показват към IP адреса на сървъра ви
- **Кастомизирани домейни на наематели блокирани без SSL?** Проверете раздела SSL Certificate на приложението в Cloudways. Ако е активен wildcard сертификат (ръчно инсталиран или покриващ `*.your-network.com`), Cloudways няма да издаде Let's Encrypt сертификати за отделно мапирани кастомизирани домейни. Заменете го със стандартен Let's Encrypt сертификат, покриващ само основния домейн на мрежата (`your-network.com`, `www.your-network.com`) и премахнете всички wildcard записи от `WU_CLOUDWAYS_EXTRA_DOMAINS`. След това повторно задействайте мапирането на домейни (или изчакайте следващото) и интеграцията отново ще изисква сертификати за всеки домейн.

### Домейнът не е добавен {#domain-not-added}
- Проверете лог файловете на Ultimate Multisite за съобщения за грешки
- Проверете дали домейнът вече не е добавен към Cloudways
- Уверете се, че планът ви в Cloudways поддържа броя домейни, които добавяте
