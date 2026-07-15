---
title: Како да инсталирате WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Како да инсталирам WordPress Multisite?

WordPress Multisite ви овозможува да имате мрежа од страници на една иста инсталација. Ова е вградена функција, но не е активна по дефолт.

:::tip
Ultimate Multisite вклучува **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** кој автоматски го прави целиот процес. Ако имате инсталиран Ultimate Multisite, препорачуваме да го користите wizards вместо да следите ручните чекори подолу.
:::

Бидејќи Ultimate Multisite е плагин само за мрежи (network-only plugin), во овој туториал ќе научите како да инсталирате и да поставите WordPress Multisite на рачно. Овој текст се базира на [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), од WPBeginner.

**Работите на следниве работи пред да креирате ја вашата multisite мрежа:**

  * Најдете добро WordPress хостинг! Страниците во мрежа споделуваат иста ресурси на серверот.

  * Во случај што имате само неколку страници со низок трафик, споделен хостинг веројатно ќе ви реши проблемите.

  * Повеќето **Managed WordPress hosting providers** нудат Multisite од почетно (ти прекуставуваат WordPress со Multisite веќе активиран и конфигуриран за вас). Ова е случај за WP Engine, Closte, Cloudways итн. Ако не сте сигурни дали тоа е применливо за вашиот хостинг провајдер, контактирајте ги нив пре него што да продолжиме со овој туториал.

  * Исто така е добро да бидете факултирани за инсталирање WordPress и уредување на датотеки користејќи FTP.

_**ВАЖНО**_ **:** Ако го поставувате Multisite мрежа на постоечки WordPress веб-страница, не заборавите да:

  * Создадете целосна резерва за вашиот WordPress сайт

  * Деактивирајте сите плагини на вашата страница преку отидење на вашата страница на плагини и изборавте _Deactivate_ од масовните акции (bulk actions) а потоа кликнете на _Apply_.

За да активирате Multisite, прво се поврзете со својот сайт користејќи FTP клиент или файловиот мена на cPanel и отворете го вашиот `wp-config.php` файл за уредување.

Пред редот на редот _*Тоа е тоа, престанете со уредување! Среќно пишување.*_ додадете го следниот код:

```php
define('WP_ALLOW_MULTISITE', true);
```

Зачувајте и повторно прикачете го вашиот `wp-config.php` файл на серверот.

Со Multisite функцијата активирана на вашиот сайт, сега е време да го подредите вашата мрежа.

Одете на **Tools » Network Setup** (Инструменти » Настройка на мрежата)

Сега ќе треба да кажете на WordPress кој тип структура на домен ќе ја користите за саборите во вашата мрежа: субаддомени или подречија.

Ако изберете субаддомени, мора да ги промените поставките за DNS за мапирање на domeni и да се осигурате дека е подготвена _**wildcard subdomains**_ (вилдкард субаддомени) за вашата Multisite мрежа.

Враќајте се на Network Setup, дајте на вашата мрежа наслов и осигурајте се дека е-адресот во административниот е-пошта на Мрежата е точен. Кликнете на _Install_ (Инсталирај) за да продолжиме.

Додадете го овој код, fourni од WordPress, во вашиот _**wp-config.php**_:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

И овој код, исто така fourni од WordPress, во вашиот _**.htaccess**_ файл:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# додади краен скрачен коц за /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Користите FTP клиент или менаџер на датоте (ако користите нешто како cPanel, на пример) за копирање и лепање овој код во овие два дела.

На крајот, повторно се најавете во вашата WordPress страница за да добиете пристап до вашата мрежа со Multisite.

**Важно е да тестирате и да си осигурате дека можете да креирате под-саит на вашата инсталација на WordPress Multisite пред да го инсталирате Ultimate Multisite.**

За креирање на под-саит:

  1. Отворете вашиот wp-admin за веб-страниците.

  2. Најдете My Sites > Sites (/wp-admin/network/sites.php).

  3. Кликнете Add New од врвот.

  4. Попуните сите текстови:

  * Site Address — Никогаш не користите „www“.

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Наслов на сајтот, може да се промени подоцна.

  * Admin Email — Поставете како почетен администраторски корисник за под-сајтот.

![Додавање нов облик за форми во WordPress Multisite](/img/admin/sites-list.png)

По пополнување на сите текстови, кликнете на копчето "Add site" (Додај сајт). Кога ќе се креира новиот под-саит, отидете и пристапете до него за да проверите дали под-сајтот работи.

## Чести проблеми: {#add-a-trailing-slash-to-wp-admin}

### 1. Можам да креирам нови сајтови, но тие не се пристапуваат. {#common-problems}

Ако сте избрале поддомени, исто така треба да ги поставите варлибите поддомени (wildcard subdomains) за вашата мрежа со Multisite.

За тоа, отидете во контролната табла на хостинг сметката на вашиот веб-сајт (на пример cPanel/Plesk/Direct Admin во зависност од вашиот провајдер на хостинг).

Најдете опција за „Domains“ или „Subdomains“. Во некои контролни таблици е означена како „Domain administration“ (Администрација на домените).

Во полето за поддомен, внесете звезди (*). Потоа ќе ви побара да изберете домен名 каде сакате да се додаде поддоменот.

Корениот директориум (document root) за избраниот домен ќе биде автоматски идентификуван. Кликнете на копчето _Create_ или _Save_ за да го додадете вашиот вајлди (wildcard) поддомен. Влезниот текст треба да изгледа како „*.[mydomain.com](http://mydomain.com)“.
