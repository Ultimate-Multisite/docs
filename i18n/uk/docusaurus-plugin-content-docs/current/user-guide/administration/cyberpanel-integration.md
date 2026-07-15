---
title: Інтеграція CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Інтеграція з CyberPanel

Цей гайд пояснює, як налаштувати інтеграцію Ultimate Multisite з CyberPanel, щоб домени, зіставлені у вашій мережі, автоматично додавалися (і видалялися) як віртуальні хости в CyberPanel, з можливістю автоматичного надання SSL-сертифіката через Let's Encrypt.

## Що це робить {#what-it-does}

*   Коли домен зіставляється в Ultimate Multisite, інтеграція викликає API CyberPanel для створення віртуального хоста для цього домену.
*   Коли зіставлення домену видаляється, інтеграція викликає API для видалення відповідного віртуального хоста.
*   Якщо увімкнено auto-SSL, інтеграція негайно ініціює видачу сертифіката Let's Encrypt після створення віртуального хоста.
*   Опціонально додає/видаляє псевдонім `www.` залежно від вашого налаштування «Автоматичне створення піддомену www» у налаштуваннях зіставлення доменів.

## Передумови {#prerequisites}

*   Працюючий екземпляр CyberPanel (рекомендовано v2.3 або новіший), доступний із вашого сервера WordPress.
*   Існуючий сайт у CyberPanel, який вже обслуговує кореневий рівень вашої мережі WordPress. Інтеграція додає нові віртуальні хости до цього сервера.
*   Увімкнено доступ до API CyberPanel. Для автентифікації використовуються ваш адміністративний логін та пароль CyberPanel.
*   Ваші DNS-записи для зіставлених доменів повинні вже вказувати на IP-адресу вашого сервера, перш ніж auto-SSL зможе видати дійсний сертифікат.

## Вимоги {#requirements}

У файлі `wp-config.php` мають бути визначені наступні константи:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Опціонально ви також можете визначити:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // За замовчуванням: true — видача SSL Let's Encrypt після створення домену
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // За замовчуванням: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Використовується для контакту при SSL-сертифікації
```

## Інструкції з налаштування {#setup-instructions}

### 1. Увімкнення API CyberPanel {#1-enable-the-cyberpanel-api}

1. Увійдіть до дашборду CyberPanel як адміністратор.
2. Перейдіть до **Security** > **SSL** та переконайтеся, що SSL активний безпосередньо в інтерфейсі CyberPanel (це необхідно для безпечних викликів API).
3. API CyberPanel за замовчуванням доступний за адресою `https://your-server-ip:8090/api/`. Додаткові кроки для його активації не потрібні — він увімкнено за замовчуванням для адміністративних користувачів.

### 2. Додавання констант до wp-config.php {#2-add-constants-to-wp-configphp}

Додайте наступні константи до файлу `wp-config.php` перед рядком `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Щоб увімкнути auto-SSL (рекомендовано):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Увімкнення інтеграції {#3-enable-the-integration}

1. У адміністративній панелі мережі WordPress перейдіть до **Ultimate Multisite** > **Settings**.
2. Перейдіть на вкладку **Domain Mapping**.
3. Прокрутіть униз до **Host Integrations**.
4. Увімкніть інтеграцію **CyberPanel**.
5. Натисніть **Save Changes**.

### 4. Перевірка підключення {#4-verify-connectivity}

Використовуйте вбудований тест підключення в майстрі налаштування:

1. Перейдіть до **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Натисніть **Test Connection**.
3. Повідомлення про успіх підтверджує, що плагін може зв'язатися з API CyberPanel та правильно пройти автентифікацію.

## Як це працює {#how-it-works}

### Зіставлення доменів (Domain Mapping) {#domain-mapping}

Коли домен зіставляється в Ultimate Multisite:

1. Інтеграція надсилає `POST` запит до `/api/createWebsite` на ваш хост CyberPanel.
2. CyberPanel створює новий віртуальний хост для домену в рамках налаштованого пакету.
3. Корінь документа встановлюється на каталог кореневого рівня вашої мережі WordPress.
4. Коли зіставлення домену видаляється, інтеграція викликає `/api/deleteWebsite` для очищення віртуального хоста.

### Auto-SSL {#auto-ssl}

Коли `WU_CYBERPANEL_AUTO_SSL` дорівнює `true`:

1. Після створення віртуального хоста інтеграція викликає `/api/issueSSL` для домену.
2. CyberPanel запитує сертифікат Let's Encrypt, використовуючи виклик ACME HTTP-01.
3. Сертифікат автоматично поновлюється CyberPanel до закінчення терміну дії.

> **Важливо:** DNS має бути повністю поширено до IP-адреси вашого сервера, перш ніж Let's Encrypt зможе валідувати домен. Якщо видача SSL не вдалася одразу після зіставлення, зачекайте поширення DNS і повторно ініціюйте SSL з дашборду CyberPanel у розділі **SSL** > **Manage SSL**.

### Піддомен www {#www-subdomain}

Якщо **Auto-create www subdomain** увімкнено в налаштуваннях зіставлення доменів, інтеграція також створює віртуальний хост-псевдонім для `www.<домен>` і, якщо увімкнено auto-SSL, видає сертифікат, що покриває як apex, так і www варіанти.

### Email Forwarders (Переадресація електронної пошти) {#email-forwarders}

Коли активний аддон [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/), CyberPanel також може надавати клієнтські переадресації електронної пошти. Переадресатори маршрутують повідомлення з адреси домену на іншу скриньку без створення повноцінної поштової скриньки, що корисно для псевдонімів, таких як `info@customer-domain.test` або `support@customer-domain.test`.

Перед увімкненням переадресаторів для клієнтів:

1. Переконайтеся, що константи CyberPanel вище налаштовані, і тест підключення пройшов успішно.
2. Увімкніть постачальника електронної пошти CyberPanel у налаштуваннях аддону Emails.
3. Переконайтеся, що домен клієнта вже існує в CyberPanel перед створенням переадресатора.
4. Створіть тестовий переадресатор і надішліть через нього повідомлення, перш ніж пропонувати цю функцію на продакшн-планах.

Якщо створення переадресатора не вдалося, спочатку перевірте журнали активності Ultimate Multisite, а потім підтвердіть у CyberPanel, що вихідний домен існує і що користувач API має дозволи на керування електронною поштою.

## Довідник конфігурації {#configuration-reference}

| Константа | Обов'язково | За замовчуванням | Опис |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Так | — | Повна URL-адреса вашого екземпляра CyberPanel, включаючи порт, наприклад, `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Так | — | Адміністративний логін CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Так | — | Адміністративний пароль CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Так | `Default` | Пакет хостингу CyberPanel, який буде призначено для нових віртуальних хостів |
| `WU_CYBERPANEL_AUTO_SSL` | Ні | `true` | Видавати сертифікат SSL Let's Encrypt після створення домену |
| `WU_CYBERPANEL_PHP_VERSION` | Ні | `PHP 8.2` | Версія PHP для нових віртуальних хостів (має відповідати версії, встановленій у CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Ні | — | Контактна електронна пошта для реєстрації SSL-сертифіката |

## Важливі примітки {#important-notes}

*   API CyberPanel використовує аутентифікацію токеном на основі сеансів. Інтеграція автоматично обробляє отримання токена при кожному виклику API.
*   Ваш адміністративний обліковий запис CyberPanel повинен мати дозволи на створення та видалення сайтів.
*   CyberPanel за замовчуванням працює на порту `8090`. Якщо ваш сервер використовує брандмауер, переконайтеся, що цей порт доступний із сервера додатків WordPress.
*   Інтеграція не керує DNS-записами. Ви повинні вказати DNS домену на IP-адресу вашого сервера, перш ніж зіставляти домен в Ultimate Multisite.
*   Якщо ви використовуєте OpenLiteSpeed (OLS), після змін віртуального хоста автоматично ініціюється м'який перезапуск. Ручне втручання не потрібне.

## Усунення несправностей {#troubleshooting}

### Відмовлено у підключенні API (API Connection Refused) {#api-connection-refused}

*   Перевірте, чи відкритий порт `8090` у брандмауері вашого сервера.
*   Підтвердіть, що значення `WU_CYBERPANEL_HOST` включає правильний протокол (`https://`) та порт.
*   Перевірте, чи дійсний ваш SSL-сертифікат CyberPanel; самопідписані сертифікати можуть спричинити збої перевірки TLS. Встановлюйте `WU_CYBERPANEL_VERIFY_SSL` на `false` лише у довіреному приватній мережі.

### Помилки автентифікації (Authentication Errors) {#authentication-errors}

*   Підтвердіть, що ваші `WU_CYBERPANEL_USERNAME` та `WU_CYBERPANEL_PASSWORD` правильні, увійшовши до CyberPanel безпосередньо.
*   CyberPanel блокує облікові записи після багаторазових невдалих спроб входу. Перевірте **Security** > **Brute Force Monitor** у CyberPanel, якщо виникають блокування.

### Домен не створено (Domain Not Created) {#domain-not-created}

*   Перевірте журнал активності Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) на наявність повідомлень про помилки API.
*   Переконайтеся, що пакет, визначений у `WU_CYBERPANEL_PACKAGE`, існує в CyberPanel (**Packages** > **List Packages**).
*   Переконайтеся, що домен ще не зареєстрований як сайт у CyberPanel — подвійне створення сайту повертає помилку.

### SSL-сертифікат не видано (SSL Certificate Not Issued) {#ssl-certificate-not-issued}

*   Підтвердіть, що DNS повністю поширено: `dig +short your-domain.com` має повернути IP-адресу вашого сервера.
*   Let's Encrypt встановлює ліміти швидкості. Якщо ви нещодавно видавали кілька сертифікатів для того ж домену, зачекайте, перш ніж повторювати спробу.
*   Перевірте журнали SSL CyberPanel у розділі **Logs** > **Error Logs** на деталі збоїв видачі сертифіката.
*   Як запасний варіант, ви можете вручну видати SSL у CyberPanel: **SSL** > **Manage SSL** > вибрати домен > **Issue SSL**.

## Посилання {#references}

- Документація API CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Управління SSL CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Ліміти швидкості Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
