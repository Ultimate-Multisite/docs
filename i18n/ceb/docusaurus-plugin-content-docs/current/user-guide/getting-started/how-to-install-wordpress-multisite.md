---
title: Unsaon pag-install sa WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Unsaon pag-install sa WordPress Multisite?

Ang WordPress Multisite nagtugot kanimo nga maghimo og usa ka network sa mga website sulod sa usa lang ka installation. Kini usa ka built-in feature, pero dili kini aktibo sa default.

:::tip
Ang Ultimate Multisite naglakip og usa ka **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** nga nag-automate niining tibuok proseso. Kung naa kay Ultimate Multisite installed, among girekomenda nga gamiton ang wizard imbes nga sundon ang manual steps sa ubos.
:::

Tungod kay ang Ultimate Multisite usa ka plugin nga network-only, sa tutorial ani, makat-onan ka unsaon pag-install ug pag-set up sa WordPress Multisite manually. Kini nga text base sa [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), gikan sa WPBeginner.

**Mga butang nga kinahanglan nimong bantayan sa dili pa maghimo og multisite network:**

  * Kuhaa og maayong WordPress hosting! Ang mga website sa usa ka network nag-share sa parehas nga server resources.

  * Kung naa kay duha o pipila lang ka sites nga gamay ra ang traffic, ang shared hosting siguro makatabang nimo.

  * Kadaghanan sa **Managed WordPress hosting providers** naghatag og Multisite out-of-the-box (mag-install sila og WordPress uban na og aktibo ug configured para nimo). Kini ang kaso alang sa WP Engine, Closte, Cloudways, etc. Kung dili ka sigurado kung mao ba kini para sa imong host provider, kontaka ang ilang support sa dili pa magpadayon niining tutorial.

  * Maayo usab nga mahimong pamilyar sa pag-install og WordPress ug pag-edit og files gamit ang FTP .

_**IMPORTANTE**_ **:** Kung nag-set up ka og multisite network sa usa na nga existing WordPress website ayaw kalimti nga:

  * Paghimo og kompleto nga backup sa imong WordPress site

  * I-deactivate ang tanang plugins sa imong site pinaagi sa pag-adto sa imong plugins page ug pagpili og _Deactivate_ gikan sa bulk actions ug dayon i-click ang _Apply_

Para ma-enable ang Multisite, una konektado ka sa imong site gamit ang FTP client o cPanel file manager, ug buksan ang imong `wp-config.php` file para i-edit.

Sa dili pa ang linya nga _*That’s all, stop editing! Happy blogging.*_, magdugang og mosunod nga code snippet:

```php
define('WP_ALLOW_MULTISITE', true);
```

I-save ug i-upload pagbalik sa imong `wp-config.php` file sa server.

Kung na-enable na ang multisite feature sa imong site, karon na ang panahon para mag-setup sa inyong network.

Punta sa **Tools » Network Setup**

Karon kinahanglan nimo ipasabot sa WordPress kung uns nga klase sa domain structure ang imong gamiton para sa mga site sa imong network: subdomains o subdirectories.

Kung mopili ka og subdomains, kinahanglan nimong usbon ang imong DNS settings para sa domain mapping ug siguruha nga setup ang _**wildcard subdomains**_ para sa imong multisite network.

Balik sa Network Setup, hatag og titulo para sa imong network ug siguruha nga tama ang email address sa Network admin email. I-click ang _Install_ aron magpadayon.

Idugang niining code, gihatag sa WordPress, sa imong _**wp-config.php**_:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Ug kining code, gihatag usab sa WordPress, sa imong _**.htaccess**_ file:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Gamit ang FTP client o file manager (kung gamiton nimo ang cPanel, pananglitan) para kopyahon ug i-paste ang code niining duha ka files.

Sa katapusan, mag-login pag-usab sa imong WordPress site aron ma-access ang imong multisite network.

**Importante nga mag-test ug siguruha nga makakagamit ka og subsite sa imong WordPress Multisite installation sa dili pa ikabit ang Ultimate Multisite.**

Para makakabukod og subsite:

  1. Buksan ang imong websites wp-admin

  2. Maglakaw ngadto sa My Sites > Sites (/wp-admin/network/sites.php)

  3. I-click ang Add New sa taas

  4. Pun-on ang tanang fields:

  * Site Address — Ayaw gyud gamiton ang “www”

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Ang titulo sa site, pwede pa usbon pagkahuman

  * Admin Email — I-set ni isip initial admin user para sa subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Paghuman pun-on ang mga fields, i-click ang "Add site" button. Pagka-create na sa bag-ong subsite, mag-access kini aron masiguro nga functional ang subsite.

## Mga Kasagaran nga Problema:

### 1. Makakagamit ko og bag-ong sites pero dili ma-access.

Kung pilion nimo ang mga subdomain, kinahanglan pud nimong i-setup ang wildcard subdomains para sa imong multisite network.

Para buhaton na kana, maglakaw sa control panel dashboard sa hosting account sa imong Website (pananglitan cPanel/Plesk/Direct Admin depende sa imong provider).

Pagpangita og option nga "Domains" o "Subdomains". Sa pipila ka control panels, kini gi-label isip “Domain administration”.

Sa field nga subdomain, i-type lang ang isang asterisk (*). Unya, magapangayo kini kanimo og domain name kung asa gusto nimo iapil ang imong subdomain.

Awtomatikong madetete sa document root para sa napiling domain name. I-click ang _Create_ o _Save_ button aron ma-add nimo ang imong wildcard subdomain. Ang entry kinahanglan magpakita sama ni “*.[mydomain.com](http://mydomain.com)”
