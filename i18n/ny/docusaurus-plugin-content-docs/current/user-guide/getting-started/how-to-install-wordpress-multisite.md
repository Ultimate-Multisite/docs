---
title: Mwayi kuita WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kodi ndilipo nji WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite imapereka kuti muli ndi sites ingokhazikitsa m'moyo wosangalatsa wosangalatsa. Iyi ndi chinthu chomwe chimapereka, koma si yomwe imaperekedwa m'moyo wosangalatsa.

:::tip
Ultimate Multisite imapereka **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** yomwe imaperekera ntchito yomwe yote. Ngati muli ndi Ultimate Multisite, timapereka kuti muli ndi wizard imene kukhazikitsa ndemera yomwe yote.
:::

Chonse chifukwa Ultimate Multisite ndi plugin yomwe imaperekera ntchito ya network, m'moyo wosangalatsa ulipeza kuphunzira kuti muli ndi WordPress Multisite m'moyo wosangalatsa. M'moyo wosangalatsa umene umbuka pa [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), kuchokera kwa WPBeginner.

**Zinthu zomwe muli ndi kuyenera kupeza pansi pa kupanga network yanu ya multisite:**

  * Pempani hosting la WordPress lolimba! Websites m'moyo wosangalatsa imapereka zinthu zina za server.

  * Kuti muli ndi sites pambuyo ndi zinthu zingapo zomwezi siyo, shared hosting zimene kumapereka ntchito kwake.

  * Zomwe zambiri **Managed WordPress hosting providers** zimapereka Multisite m'moyo wosangalatsa (zimaperekera WordPress ndi Multisite yomwe imaperekedwa kwa inu). Iyi ndi chinthu chomwe WP Engine, Closte, Cloudways, ndi zina zimene. Ngati simukuti kuti ndiyo m'moyo wosangalatsa wanu, muli ndi chidziwitso ndi kukhala ndi support yanu pambuyo pa kupita ku ntchito ya multisite.

  * Kuti muli ndi kuyenera kusintha WordPress ndi kutengera files monga FTP.

_**CHONCHO**_ **:** Ngati muli ndi kupanga network yomwe yosangalatsa pa website ya WordPress yomwe imapereka, musintha kuti:

  * Upange backup wosangalatsa wanu wa WordPress wosangalatsa wanu.

  * Zikwera (Deactivate) plugins zonse m'moyo wosangalatsa wanu monga momwe muli pa plugins page ndi kuyesa _Deactivate_ kuchokera kwa bulk actions ndipo ukulemba _Apply_.

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Kuti Multisite kukhala, mwachangu mwakulu, muwoneka ndi kuwamba n'mwebu wanu mwa FTP client kapena cPanel file manager, ndipo utse wp-config.php file kuti uleke.

Mwa m'lino mwa line _*That’s all, stop editing! Happy blogging.*_ mu, tamba code snippet iliyonse:

define('WP_ALLOW_MULTISITE', true);

Tseka ndipo utse wp-config.php file ku m'mwebu wanu.

Ndikuti Multisite kukhala kwa m'mwebu wanu, mwa lino ndi nthawi yomwe mukufuna kukonza m'mwebu wanu.

Tseka **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Mwa lino mwa, mukuwoneka kuti WordPress ndi chiyani cha mapulogalamu mwa m'mwebu wanu mwa sita mwa m'mwebu wanu: subdomains kapena subdirectories.

Ngati mukuwoneka subdomains, mukuwoneka kuti mukucheza DNS settings kuti mwayiwo mwa domain mapping ndipo mukuonetsa _**wildcard subdomains**_ kwa multisite network yanu.

Mwa Network Setup, tambani titolo (title) ya network yanu ndipo mukuonetsa kuti email address mwa Network admin ndi liyenera. Tambani _Install_ kuti mwayiwo.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Tambani code ili, iliyonse mwa _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Ndipo code ili, iliyonse mwa file _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# tambani trailing slash ku /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Use FTP client mwezi wopambiri kapena file manager (mwachuso womwe utendeka n'mwayi wopambiri, monga momwe utagwiritsa ntchiri cPanel, monga mwezi) ukokopanya ndi kopyera code ku mapulani omwe.

Mwachidule, redzetsa m'login wopambiri wanu kuti muwoneza m'mwayi wanu wopambiri wopambiri (multisite network).

**Kuti ndi kuyesa ndikukonza kuti muli ndi ulemu wopambiri kapena kukhala ndi subsite pa WordPress Multisite yanu mopambiri pansi pa kuinstalira Ultimate Multisite.**

Kuti utere subsite:

  1. Opere websites wp-admin wanu
  2. Tiyeni ku My Sites > Sites (/wp-admin/network/sites.php)
  3. Kuli Add New m'moyo wopambiri
  4. Lipereka zonse zofunika:

  * Site Address — Musamukonza "www"
  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
  * Site Title — M'cholo wa site, mungathe kubweretsa m'moyo

  * Admin Email — Lipereka monga ulemu wopambiri woyamba kwa subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Pansi pa kupereka zonse zofunika, kuli Add site button. Pamene subsite wanu wamukonzedwa, kuli kuyesa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri wamukonzedwa kuti muli ndi ulemu wopambiri

Na fita ya subdomain, chira asterisk (*). Kuti, itashika kuomba kuti utoe domain name wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote wote.

Moyo wa domain name ulioperekedwa utachungulidwa kuliye kwa ajili ya domain name iliyochoseka. Chonza button ya _Create_ au _Save_ kuti kuongeza subdomain yako ya wildcard. Kufoto chake kutaonekana kama “*.[mydomain.com](http://mydomain.com)”
