---
title: Як усталяваць WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Як ўсталяваць WordPress Multisite?

WordPress Multisite дазваляе вам мець сетку сайтаў адныму ўстаноўленні. Гэта ўбудаваная функцыя, але па спецыя.

:::tip
Ultimate Multisite ўключае **[ўбудаваны Wizard для налады Multisite](./multisite-setup-wizard)**, які аўтаматызуе увесь гэты працэс. Калі ў вас ўсталяваны Ultimate Multisite, мы рэкамендуем выкарыстоўваць Wizard, а не выконваць ручную інструкцыю ніжэй.
:::

Калі Ultimate Multisite — гэта plugin толькі для сеткі, у гэтым туторыпале вы напаўняце, як ўсталяваць і наладзіць WordPress Multisite на мануалаў. Гэты тэкст аснованы на [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) ад WPBeginner.

**На што звярнуць увагу, перш чым ствараць сетку Multisite:**

  * Пачніце з добрага хостынгу WordPress! Сайт у сетцы выкарыстоўвае тыя ж рэсурсы сервера.

  * Калі ў вас проста некалькі сайтаў з невялікім трафікам, shared hosting, верагодна, вам падойдзе.

  * Большасць **Managed WordPress hosting providers** прапануюць Multisite "з корак" (яны ўсталёўваюць WordPress, ужо актываваўшы і наладзіўшы Multisite для вас). Так, напрыклад, WP Engine, Closte, Cloudways і г.п. Калі вы не ўпэўнены, ці так з вашым хостайнерам, сцежыцеся з іх падтрымкай, перш чым праходзіць гэты туторыпал.

  * Таж добра ведаць, як ставіць WordPress і рэдагаваць файлы праз FTP.

_**ВАЖНА**_ **:** Калі вы наладжаеце сетку Multisite на існуюм сайце WordPress, не забывайце:

  * Стварыць поўнае камбінаванне (backup) вашага сайта WordPress

  * Деактываваць усе plugins на вашым сайце, зайшоўшы на адкаранне plugins і выбершы _Deactivate_ у масовых дзеяннях (bulk actions), а потым націснуць _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Каб актываваць Multisite, перш усё — падключыцеся да сайта праз FTP client або cPanel file manager і адкройце файл wp-config.php для рэдагавання.

Папярэдні _*That’s all, stop editing! Happy blogging.*_ пастаўце наступны код:

define('WP_ALLOW_MULTISITE', true);

Захавайце і загрузіце ваш файл wp-config.php на сервер.

З актываванаму Multisite на вашым сайце, цяпер час наладзіць сетку.

Зайдзіце ў **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Цяпер вам трэба сказаць WordPress, які тып структуры домена вы будзеце выкарыстоўваць для сайтаў у вашай сетцы: subdomains ці subdirectories.

Калі вы выбіраеце subdomains, вам трэба змяніць налады DNS для мапінг-доменаў і пераканаўвацца, што вы наладзілі _**wildcard subdomains**_ для вашай сеткі Multisite.

Павярніцеся ў Network Setup, дайце назву для вашай сеткі і пераканаўцеся, што адрас адмінатора ў Network admin email правільны. Націсніце _Install_, каб працягнуць.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Дадайце гэты код, прадастаўлены WordPress, у ваш _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

І гэты код, таксама прадастаўлены WordPress, у ваш файл _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Выкарыстоўце FTP client або file manager (калі вы выкарыстоўваеце нешта, напрыклад, cPanel), каб skóпіяваць і ўставіць код у гэтыя два файлы.

Нарэшце, перазайдзіце ў свой сайт WordPress, каб атрымаць доступ да вашай сеткі Multisite.

**Важна пратэсціраваць і пераканавацца, што вы можаце стварыць subsite на вашай ўстаноўцы WordPress Multisite, перш чым вы ўсталяваць Ultimate Multisite.**

Каб стварыць subsite:

  1. Адкройце wp-admin вашага сайта.

  2. Патрэбне дайсці па шляху My Sites > Sites (/wp-admin/network/sites.php)

  3. Націсніце Add New у верхняй частцы.

  4. Зафарніце ўсе поля:

  * Site Address — Ніколі не выкарыстоўвайце “www”

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Назва сайта, яе можна змяніць пазней

  * Admin Email — Уставіце як пачатковага адмінатора для subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Пасля зафарнення паляў, націсніце кнопку "Add site". Як толькі створаецца новы subsite, прайце і аткройце яго, каб пераканавацца, што subsite працуе.

## Час выйступлення:

### 1\. Я магу ствараць новыя сайты, але яны не даступныя.

Калі вы выбіралі subdomains, вам таксама трэба наладзіць wildcard subdomains для вашай сеткі Multisite.

Для гэтага зайдзіце ў панель кіравання (dashboard) хостынгу вашага сайта (напрыклад, cPanel/Plesk/Direct Admin, залежна ад вашага хостайнера).

Знайдзіце варыяльнасць для “Domains” або “Subdomains”. У некаторых панелях кіравання яно называецца “Domain administration”.

У полі subdomain ўвесція азірку (*). Пасля гэтага яно павінна паشيць просіць вас выбраць назву домена, пад якой вы хочаце, каб subdomain быў дададзены.

Корёнь дамена (document root) для выбранага домена будзе выяўлены аўтаматычна. Націсніце кнопку _Create_ або _Save_, каб дадаць ваш wildcard subdomain. Запіс павінен выглядаць “*.[mydomain.com](http://mydomain.com)”
