---
title: Як встановити WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Як встановити WordPress Multisite?

WordPress Multisite дозволяє мати мережу сайтів на одній інсталяції. Це вбудована функція, але за замовчуванням вона не активна.

:::tip
Ultimate Multisite включає **[вбудований Майстер налаштування Multisite](./multisite-setup-wizard)**, який автоматизує весь цей процес. Якщо у вас встановлено Ultimate Multisite, рекомендуємо скористатися майстром замість ручних кроків, описаних нижче.
:::

Оскільки Ultimate Multisite — це плагін лише для мережі, у цьому посібнику ви дізнаєтеся, як встановити та налаштувати WordPress Multisite вручну. Цей текст базується на статті [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) від WPBeginner.

**На що звернути увагу перед створенням мережі multisite:**

  * Оберіть якісний WordPress-хостинг! Сайти в мережі використовують спільні ресурси сервера.

  * Якщо у вас лише кілька сайтів із невеликим трафіком, shared-хостинг, ймовірно, підійде.

  * Більшість **провайдерів керованого WordPress-хостингу** пропонують Multisite «з коробки» (вони встановлюють WordPress із уже активованим та налаштованим Multisite). Це стосується WP Engine, Closte, Cloudways тощо. Якщо ви не впевнені, чи це так у вашого хостинг-провайдера, зверніться до їхньої підтримки перед продовженням цього посібника.

  * Також корисно вміти встановлювати WordPress та редагувати файли через FTP.

_**ВАЖЛИВО**_ **:** Якщо ви налаштовуєте мережу multisite на існуючому WordPress-сайті, не забудьте:

  * Створити повну резервну копію вашого WordPress-сайту

  * Деактивувати всі плагіни на сайті, перейшовши на сторінку плагінів, вибравши _Деактивувати_ в масових діях і натиснувши _Застосувати_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Щоб увімкнути Multisite, спочатку підключіться до свого сайту за допомогою FTP-клієнта або файлового менеджера cPanel і відкрийте файл wp-config.php для редагування.

Перед рядком _*That's all, stop editing! Happy blogging.*_ додайте наступний код:

define('WP_ALLOW_MULTISITE', true);

Збережіть файл wp-config.php та завантажте його назад на сервер.

Тепер, коли функцію multisite увімкнено на вашому сайті, час налаштувати мережу.

Перейдіть до **Інструменти » Налаштування мережі**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Тепер потрібно вказати WordPress, яку структуру доменів ви будете використовувати для сайтів у мережі: субдомени чи підкаталоги.

Якщо ви оберете субдомени, вам потрібно змінити налаштування DNS для прив'язки домену та переконатися, що налаштовано _**wildcard-субдомени**_ для вашої мережі multisite.

Повернувшись до Налаштування мережі, вкажіть назву мережі та переконайтеся, що email-адреса в полі адміністратора мережі правильна. Натисніть _Встановити_, щоб продовжити.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Додайте цей код, наданий WordPress, до вашого _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

А цей код, також наданий WordPress, до вашого файлу _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Використовуйте FTP-клієнт або файловий менеджер (якщо ви користуєтеся, наприклад, cPanel), щоб скопіювати та вставити код у ці два файли.

Нарешті, повторно увійдіть на свій WordPress-сайт, щоб отримати доступ до мережі multisite.

**Важливо перевірити та переконатися, що ви можете створити підсайт на вашій інсталяції WordPress Multisite, перш ніж встановлювати Ultimate Multisite.**

Щоб створити підсайт:

  1. Відкрийте wp-admin вашого сайту

  2. Перейдіть до Мої сайти > Сайти (/wp-admin/network/sites.php)

  3. Натисніть «Додати новий» угорі

  4. Заповніть усі поля:

  * Адреса сайту — Ніколи не використовуйте «www»

  * Субдомен: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Підкаталог: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Назва сайту — Назва сайту, можна змінити пізніше

  * Email адміністратора — Встановлюється як початковий адміністратор підсайту

![Форма додавання нового сайту в WordPress Multisite](/img/admin/sites-list.png)

Після заповнення полів натисніть кнопку «Додати сайт». Коли новий підсайт буде створено, перейдіть на нього, щоб переконатися, що він працює.

## Поширені проблеми:

### 1\. Я можу створювати нові сайти, але вони недоступні.

Якщо ви обрали субдомени, вам також потрібно налаштувати wildcard-субдомени для вашої мережі multisite.

Для цього перейдіть до панелі керування хостинг-акаунтом вашого сайту (наприклад, cPanel/Plesk/Direct Admin залежно від вашого хостинг-провайдера).

Знайдіть опцію «Домени» або «Субдомени». У деяких панелях керування вона називається «Адміністрування доменів».

У полі субдомену введіть зірочку (*). Потім вам запропонують вибрати доменне ім'я, до якого буде додано субдомен.

Кореневий каталог для вибраного доменного імені буде визначено автоматично. Натисніть кнопку _Створити_ або _Зберегти_, щоб додати ваш wildcard-субдомен. Запис має виглядати як "*.[mydomain.com](http://mydomain.com)"
