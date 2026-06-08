---
title: Интеграция с CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Интеграция с CyberPanel

Това ръководство обяснява как да конфигурирате интеграцията Ultimate Multisite CyberPanel, така че мапираните домейни в вашата мрежа автоматично да се добавят (и премахват) като виртуални хостове в CyberPanel, с опционално автоматично предоставяне на SSL сертификати чрез Let's Encrypt.

## Какво прави

- Когато домейнът бъде мапиран в Ultimate Multisite, интеграцията извиква CyberPanel API, за да създаде виртуален хост за този домейн.
- Когато мапирането на домейн бъде премахнато, интеграцията извиква API, за да изтрие съответния виртуален хост.
- Когато автоматичното SSL е активирано, интеграцията инициира издаването на сертификат Let's Encrypt веднага след създаването на виртуалния хост.
- Опционално добавя/премахва алиаса `www.` в зависимост от настройката ви "Auto-create www subdomain" в настройките на Domain Mapping.

## Предварителни изисквания

- Работеща инстанция на CyberPanel (препоръчва се v2.3 или по-нова), достъпна от вашия WordPress сървър.
- Съществуващ уебсайт в CyberPanel, който вече обслужва основната директория на вашата WordPress мрежа. Интеграцията добавя новите виртуални хостове към този сървър.
- Активиран достъп до CyberPanel API. Аутентикацията използва потребителското име и паролата на вашия администратор в CyberPanel.
- DNS записите за мапираните домейни трябва вече да показват IP адреса на вашия сървър, преди автоматичното SSL да може да издаде валиден сертификат.

## Изисквания

Следните константи трябва да бъдат дефинирани във файла `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Опционално, можете също да дефинирате:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // По подразбиране: true — издава Let's Encrypt SSL след създаването на домейна
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // По подразбиране: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Използва се за контакт при SSL сертификати
```

## Инструкции за настройка

### 1. Активиране на CyberPanel API

1. Влезте в панела (dashboard) на CyberPanel като администратор.
2. Отидете на **Security** > **SSL** и потвърдете, че SSL е активен и на самия интерфейс на CyberPanel (това е необходимо за силни API заявки).
3. CyberPanel API е достъпен по подразбиране на `https://your-server-ip:8090/api/`. Няма нужда от допълнителни стъпки за активиране — той е включен по подразбиране за административни потребители.

### 2. Добавяне на константи в wp-config.php

Добавете следните константи във файла `wp-config.php` преди реда `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

За активиране на автоматично SSL (препоръчително):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Активиране на интеграцията

1. В административния панел на вашата WordPress мрежа отидете на **Ultimate Multisite** > **Settings**.
2. Навигирайте до таба **Domain Mapping**.
3. Извишете до **Host Integrations**.
4. Активирайте интеграцията **CyberPanel**.
5. Кликнете върху **Save Changes**.

### 4. Проверка на свързаността

Използвайте вградения тест за свързаност в помощния (settings) wizard:

1. Отидете на **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Кликнете върху **Test Connection**.
3. Съобщение за успех потвърждава, че плагинът може да достигне до CyberPanel API и да се аутентикзира правилно.

## Как работи

### Domain Mapping

Когато домейнът бъде мапиран в Ultimate Multisite:

1. Интеграцията изпраща `POST` заявка към `/api/createWebsite` на вашия CyberPanel хост.
2. CyberPanel създава нов виртуален хост за домейна в рамките на конфигурирания пакет.
3. Root директорията се задава да сочи към директорията на основната директория на вашата WordPress мрежа.
4. Когато мапирането на домейн бъде премахнато, интеграцията извиква `/api/deleteWebsite`, за да почисти виртуалния хост.

### Auto-SSL

Когато `WU_CYBERPANEL_AUTO_SSL` е `true`:

1. След създаването на виртуалния хост, интеграцията извиква `/api/issueSSL` за домейна.
2. CyberPanel изисква сертификат Let's Encrypt, използвайки ACME HTTP-01 challenge.
3. Сертификатът се обновява автоматично от CyberPanel преди да изтече.

> **Важно:** DNS записите трябва да са напълно разпространени (propagated) до IP адреса на вашия сървър, преди Let's Encrypt да може да валидира домейна. Ако издаването на SSL се провали веднага след мапирането, изчакайте разпространението на DNS и повторно инициирайте SSL от панела на CyberPanel в секцията **SSL** > **Manage SSL**.

### www Subdomain

Ако **Auto-create www subdomain** е активирано в настройките на Domain Mapping, интеграцията също създава виртуален хост алиас за `www.<домейн>` и, когато автоматичното SSL е включено, издава сертификат, покриващ както основния (apex), така и www варианта.

### Email Forwarders

Когато аддонът [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) е активен, CyberPanel може също да предоставя email forwarders за клиенти. Forwarders препращат съобщения от домейн адрес към друга входяща кутия, без да създават пълна mailbox, което е полезно за алиаси като `info@customer-domain.test` или `support@customer-domain.test`.

Преди активиране на forwarders за клиенти:

1. Потвърдете, че константите на CyberPanel по-горе са конфигурирани и тестът за свързаност е успешен.
2. Активирайте доставчика на имейли на CyberPanel в настройките на аддона Emails.
3. Потвърдете, че домейнът на клиента вече съществува в CyberPanel, преди да създадете forwarder.
4. Създайте тестови forwarder и изпратете съобщение през него, преди да предлагате функцията в производствените планове.

Ако създаването на forwarder се провали, първо проверете активните логове на Ultimate Multisite, след което потвърдете в CyberPanel, че източникът домейн съществува и че потребителят на API има права за управление на имейли.

## Референтен справочник за конфигурация

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | Пълна URL адреса до вашата инстанция на CyberPanel, включително порт, напр. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | Потребителско име на администратор в CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | Парола на администратор в CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | Пакет за хостинг на CyberPanel, който да се присвои на новите виртуални хостове |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Издава ли Let's Encrypt SSL сертификат след създаването на домейна |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | Версия на PHP за новите виртуални хостове (трябва да съответства на версия, инсталирана в CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Имейл за контакт за регистрация на SSL сертификат |

## Важни бележки

- API на CyberPanel използва аутентикация с токени, базирана на сесии. Интеграцията автоматично управлява придобиването на токени при всяк API заявка.
- Административният акаунт на CyberPanel трябва да има права за създаване и изтриване на уебсайтове.
- CyberPanel работи по подразбиране на порт `8090`. Ако вашият сървър използва firewall, уверете се, че този порт е достъпен от сървъра на приложението WordPress.
- Интеграцията не управлява DNS записи. Трябва да насочите DNS на домейна към IP адреса на вашия сървър, преди да мапирате домейна в Ultimate Multisite.
- Ако използвате OpenLiteSpeed (OLS), автоматично се инициира плавен рестарт след промени в виртуалните хостове. Не е необходима ръчна намеса.

## Отстраняване на неизправности

### API Connection Refused (Отказ на свързването с API)

- Проверете дали порт `8090` е отворен във firewall на вашия сървър.
- Потвърдете, че стойността на `WU_CYBERPANEL_HOST` включва правилния протокол (`https://`) и порт.
- Проверете дали SSL сертификатът на CyberPanel е валиден; самоподписаните сертификати могат да причинят грешки при TLS верификацията. Уставете `WU_CYBERPANEL_VERIFY_SSL` на `false` само в доверена частна мрежа.

### Authentication Errors (Грешки при аутентикация)

- Потвърдете дали `WU_CYBERPANEL_USERNAME` и `WU_CYBERPANEL_PASSWORD` са правилни, като влезете директно в CyberPanel.
- CyberPanel заключва акаунтите след повторени неуспешни опити за вход. Проверете **Security** > **Brute Force Monitor** в CyberPanel, ако се случват блокировки.

### Domain Not Created (Домейнът не е създаден)

- Проверете активните логове на Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) за съобщения за грешки на API.
- Проверете дали пакетът, дефиниран в `WU_CYBERPANEL_PACKAGE`, съществува в CyberPanel (**Packages** > **List Packages**).
- Уверете се, че домейнът вече не е регистриран като уебсайт в CyberPanel — създаването на дублиращ се уебсайт връща грешка.

### SSL Certificate Not Issued (SSL сертификатът не е издаден)

- Потвърдете, че DNS е напълно разпространен: `dig +short your-domain.com` трябва да върне IP адреса на вашия сървър.
- Let's Encrypt прилага лимити за честотата. Ако наскоро сте издали няколко сертификата за един и същ домейн, изчакайте преди да опитате отново.
- Проверете логовете на SSL на CyberPanel в **Logs** > **Error Logs** за подробности за грешки при издаването на сертификати.
- Като алтернатива, можете ръчно да издадете SSL от CyberPanel: **SSL** > **Manage SSL** > изберете домейна > **Issue SSL**.

## References

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
