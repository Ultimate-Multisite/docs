---
title: Uburyo bwo gukoresha WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Uburyo uko nshobora gukoresha WordPress Multisite?

WordPress Multisite yagushobora kugira uburenganzira bwo kubyara impinduka (sites) mu gihe runaka cyangwa mu gihe runaka gishobora. Iki ni ikintu cyari kigize mu gihe runaka, ariko ntabwo kirimo gukoreshwa mu gihe runaka rwa mbere.

:::tip
Ultimate Multisite yifashije **[Built-in Multisite Setup Wizard](./multisite-setup-wizard)** uburyo bwo gukora iki cyose mu gihe runaka. He ugiye kugira Ultimate Multisite, twagushobora gukoresha iyo wizard cyangwa gukora ibyerekosho by'ingenzi byo ku mwanya uyu munsi.
:::

Kugira ngo umwe yiri mu rwego rwa mbere kurya impinduka (sites) ya Multisite, mu gihe runaka uyu, ugiye kwiga uko ugomba gukora no gutera multisite network ya WordPress mu buryo bw'ingenzi. Iki kigize ku [Uburyo bwo gukoresha no gutera WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), ku WPBeginner.

**Icyo ugomba kwishimira mbere y'uburyo bwo gukora multisite network yawe:**

  * Shaka hosting ya WordPress yiza! Impinduka (sites) ziri mu rwego rwa mbere zikoresha ibintu by'ingenzi byo server cyangwa se.

  * Mu gihe hari impinduka ikiribwa cyane n'ubwoko bw'umunsi, hosting w'uburyo bwo gukora (shared hosting) uza kuba ari uko uza gushobora gukoresha.

  * Inshuti nyinshi z'hosting ya WordPress **Managed** zifashije Multisite mu gihe runaka (yagufasha kugira WordPress yikoreshwa na Multisite yari yakoreshejwe kandi yakurikirana kuwe). Iki ni ikintu cyari kuri WP Engine, Closte, Cloudways, n'ibindi. He uza gukora iki, ugomba kwandikira umwanya w'uburyo bwo gukora (support) mbere y'ugenzura iki mu gihe runaka.

  * Ni nziza kandi kugira uburyo bwo gukoresha WordPress no gutera ibyereka (editing files) binyuze mu FTP.

_**IKINTI KIKINZI**_ **:** Iyo ugomba gukora multisite network kuwezi wari uri mu website ya WordPress yari yakoreye, ushaka kwishimira ko uza gukora iki:

  * Yitera backup ikomeye ry'impinduka (site) yawe ya WordPress.

  * Gukoresha impinduka (plugins) nyinshi kuwezi wari mu plugin page kandi ugomba gukoresha _Deactivate_ mu bulk actions mbere y'ugenzura _Apply_.

Iyi kugira ngo ubonde Multisite, mbere, gukorera umwujiza (FTP client) cyangwa cPanel file manager kugira ngo utangire, kandi ugira umbwire mu file wp-config.php kugira ngo ubone.

Mbere y'indwara "Uranze, ugaragaza! Urakoza ku kwandika!" (That’s all, stop editing! Happy blogging.), yandika uburyo bwa code cyo mu gihe:

define('WP_ALLOW_MULTISITE', true);

Saveya kandi ugurira file wp-config.php ku server.

Ntabwo ugiye gukoresha ikoranabuhinduzi (multisite feature) kuri site yawe, uyu munsi ni igihe cyo gutera inyandiko zawe mu rwego rwawe.

Gukora **Tools » Network Setup**

Uyu munsi ugomba kumenya WordPress ukoresha uburyo bwo gukoresha domain (domain structure) ku gihe cyo gukoresha sites mu rwego rwawe: subdomains cyangwa subdirectories.

Niba wumva subdomains, ugomba guhindura DNS settings zawe ku mwandiko y'domain mapping kandi uza kumenya **wildcard subdomains** kuri multisite network yawe.

Zera ku Network Setup, ugira izina (title) kuri network yawe kandi uza kumenya ko email address mu Network admin email ni yiza. Click _Install_ kugira ngo utangire.

Gusobanura uburyo bwa code bucuroye n'WordPress, cyangwa **wp-config.php** yawe:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Kandi uburyo bwa code bucuroye n'WordPress, cyangwa file **.htaccess** yawe:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Use FTP client cyangwa file manager (niba ugiye gukoresha ibyo nko cPanel, oya) kugira ngo utagire ubushobozi bwo kuguherera kandi wumva code iyi.

Nyuma, yitera mu iki gihe cyo kwihangira (re-login) ku WordPress yawe kugira ngo ugerageze gukoresha urugero rwa multisite yawe.

**Ni byiza cyane kumenya no gufata umwanya kandi wumva ko uza gutera subsite kuri WordPress Multisite yawe mbere y'izingiramo Ultimate Multisite.**

Kugira ngo utoretse subsite:

  1. Fura wp-admin yawe
  2. Gukoresha My Sites > Sites (/wp-admin/network/sites.php)
  3. Kora Add New ku gice cy'ingenzi
  4. Gukoresha ibyo byose:

* Site Address — Ahori kugira ngo utagire "www"
* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
* Site Title — Umuco w'ubwoko, uza kuba ufite ubushobozi bwo gukoresha mu gihe cyo guhererwa

* Admin Email — Gufata nk'umukoresha w'ibanze kandi w'ibigo y'ubwoko (subsite)

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Nyuma yo gukoresha ibyo, kora "Add site". Icyiza cyane ko subsite yawe yari yagizeye, ugira ngo ugerageze gukoresha kandi wumva ko yari iteje.

## Ibibazo by'ubwoko:

### 1. Nshobora gutera subsite nyaho ariko ntabyo nshobora kumenya.

Niba wamukoresheye subdomains, ushobora kandi gufata uburyo bwo gukoresha wildcard subdomains kuri multisite yawe.

Kugira ngo ubyerekeze ibi, gukoresha dashboard ya hosting yawe (nko cPanel/Plesk/Direct Admin cyangwa se) y'ubwoko wako.

Gushaka igice cyo "Domains" cyangwa "Subdomains". Mu gihe runaka, iri mu gice cyo "Domain administration".

Ku rubuga rwa subdomain, wumva asterisk (*). Nyuma, izwi rikugira ngo ushije domain name uhoze gukoreshwa kuwozi waba ugiye kubyera.

Urururo rwa domain name uhoze gukoreshwa uzashobora kumenya mu buryo bw'ibindi. Shobora gukora button ya _Create_ cyangwa _Save_ kugira ngo ushije subdomain yose (wildcard). Icyo cyiza kizaba ni ifoto: “*.[mydomain.com](http://mydomain.com)”
