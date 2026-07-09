---
title: Как да инсталирате WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Как да инсталирам WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite ви позволява да имате мрежа от сайтове в една инсталация. Това е вградена функция, но не е активна по подразбиране.

:::tip
Ultimate Multisite включва **[вграден Multisite Setup Wizard](./multisite-setup-wizard)**, който автоматизира целия процес. Ако сте инсталирали Ultimate Multisite, препоръчваме да използвате този wizard, вместо да следвате ръчните стъпки по-долу.
:::

Тъй като Ultimate Multisite е plugin, предназначен само за мрежи, в този урок ще научите как ръчно да инсталирате и настроите WordPress Multisite. Този текст е базиран на [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) от WPBeginner.

**Неща, върху които трябва да обърнете внимание преди създаването на мрежовата си инсталация:**

  * Направете си добър WordPress хостинг! Сайтовете в мрежа споделят един и същ набор от ресурси на сървъра.

  * Ако имате само няколко сайта с ниско посещение, споделен хостинг вероятно ще ви пасне.

  * Повечки **Managed WordPress hosting providers** предлагат Multisite "из кутията" (т.е. инсталират WordPress с Multisite вече активиран и конфигуриран за вас). Това е случаят с WP Engine, Closte, Cloudways и др. Ако не сте сигурни дали вашият хостинг доставчик прави същото, свържете се с техния support, преди да продължите с този урок.

  * Също така е добре да имате опит с инсталирането на WordPress и редактирането на файлове чрез FTP.

_**ВАЖНО**_ **:** Ако настройвате мрежова инсталация на вече съществуващ WordPress сайт, не забравяйте да:

  * Създадете пълна резервна копие (backup) на вашия WordPress сайт

  * Деактивирате всички plugins на сайта, като отидете на страницата на plugins, изберете _Deactivate_ от масовите действия (bulk actions) и след това натиснете _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

За да активирате Multisite, първо свържете се със своя сайт чрез FTP клиент или file manager на cPanel и отворете файла wp-config.php за редактиране.

Преди линията _*That’s all, stop editing! Happy blogging.*_, добавете следния код:

define('WP_ALLOW_MULTISITE', true);

Запазете и качвайте файла wp-config.php обратно на сървъра.

С активираната функция Multisite на сайта си, сега е време да настроите мрежата си.

Отидете на **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Сега трябва да кажете на WordPress какъв тип домейн структура ще използвате за сайтовете в вашата мрежа: поддомейни (subdomains) или поддиректории (subdirectories).

Ако изберете поддомейни, трябва да промените настройките на DNS за мапване на домейни и да се уверите, че сте настроили _**wildcard поддомейни**_ за вашата мрежа Multisite.

Връщайки се към Network Setup, задайте заглавие на мрежата си и се уверете, че имейл адресът в Network admin email е коректен. Натиснете _Install_, за да продължите.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Добавете този код, предоставен от WordPress, в _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

И този код, също предоставен от WordPress, във вашия файл _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Използвайте FTP клиент или file manager (ако използвате нещо като cPanel, например), за да копирате и поточите кода в тези два файла.

Накрая, повторно се логинирайте в своя WordPress сайт, за да получите достъп до мрежовата си инсталация Multisite.

**Важно е да тествате и да се уверите, че можете да създадете подсайт в вашата WordPress Multisite инсталация, преди да инсталирате Ultimate Multisite.**

За да създадете подсайт:

  1. Отворете wp-admin на вашия сайт

  2. Навигирайте до My Sites > Sites (/wp-admin/network/sites.php)

  3. Натиснете Add New отгоре

  4. Попълнете всички полета:

  * Site Address — Никога не използвайте „www“

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Заглавие на сайта, може да бъде променено по-късно

  * Admin Email — Задайте като първоначален администратор на подсайта

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

След попълване на полетата, натиснете бутона "Add site". След като новият подсайт бъде създаден, продължете и го посетете, за да се уверите, че подсайтът работи коректно.

## Чести проблеми: {#common-problems}

### 1. Мога да създавам нови сайтове, но те не са достъпни. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Ако сте избрали поддомейни, трябва също така да настроите wildcard поддомейни за вашата мрежа Multisite.

За това отидете в control panel dashboard на хостинг акаунта на вашия сайт (напр. cPanel/Plesk/Direct Admin, в зависимост от вашия хостинг доставчик).

Намерете опция за „Domains“ или „Subdomains“. В някои control панели тя е обозначена като „Domain administration“.

В полето за поддомейн, въведете звездичка (*). След това, трябва да бъдете подканени да изберете домейн името, под което искате да бъде добавен поддомейн.

Root директорията за избраното домейн име ще бъде автоматично открита. Натиснете бутона _Create_ или _Save_, за да добавите вашия wildcard поддомейн. Записът трябва да изглежда като „*.[mydomain.com](http://mydomain.com)“
