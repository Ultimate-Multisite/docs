---
title: WordPress Multisite-a nola instalatzen da?
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Hau in Instalatu WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite-eku daite du talde batzueko web-sailak bat server-rakonarian. Hau in-built (berri) funtua da, baina default-ean ez dago aktibo.

:::tip
Ultimate Multisite-ek **[multisite-setup-wizard](./multisite-setup-wizard)** bereziko Multisite Setup Wizard bat eskaintzen du, hau guztia automatizatu egiten du. Ultimate Multisite instalatuta du, manualko irudinetan jarraitu hasten daitezkeen testuak lehenik.
:::

Ultimate Multisite-ek network-ekoa-lehiak plugin bat dela, horrela, testu honetan WordPress Multisite-a manualean instalatu eta konfiguratatu ere intxauriko du. Hau testuak WPBeginner-eko [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) artikuluaren bat da.

**Multisite network ereitez lehenago egin behar duten besteak:**

  * WordPress-ekoa ondo hostea! Network-eko web-sailak server-ren resourgia bere eskaintzen dute.

  * Hau irki du, trafiko txiki web sail batzuk dutenean, shared hosting-ekuekin funtzionatu daiteke.

  * Beste **Managed WordPress hosting providers**-ek Multisite-a "out-of-the-box" (bereziko) eskaintzen dute (WordPress-a Multisite eta konfiguratutakoan instalatzen dute). Hau WP Engine, Closte, Cloudways etsegineko da. Host provider-ekari hau ez da, ez jakin duzu? Horrek aurrera egin baino lehen, horiekarekin kontaktatu behar duzu.

  * FTP erabiliz WordPress instalatzea eta fileak editu dituen ere familiar egonduki da ondo.

_**IMPORTANTE**_ **:** Hau WordPress web-sail bat dagoen network Multisite-a konfiguratzen ari zete, ez utzi:

  * WordPress web-sailaren kopuratu backup bat egin
  * Plugin guztietan deaktibatu duzu, plugin-ekoa-lehiak (plugins page) aurkitu eta bulk actions-ek "Deactivate" (deaktibatu) aukera aldatu eta ondoren "Apply" (aplicea) klik egin.

Multisite-a-lerak eta WordPress-ek instalatzeko, lehenik, FTP client edo cPanel file manager erabiliz unitatean konektatu behar duzu eta zure `wp-config.php` funtsoa iruditzen eta editzu behar duzu.

_**Ondori da, editzzea herri da! On bloguea.**_ testuaren aurrera, hiru kodea hasi ezazu:

```php
define('WP_ALLOW_MULTISITE', true);
```

Saveatu eta zure `wp-config.php` funtsoa serverra itxitu (upload) behar duzu.

Zure sitean multisite funtzioa aktiboa duen bitartean, orain network-a konfiguratzea da.

**Tools » Network Setup** (Herri-gainak » Network Setup) funtziara jarraitu.

Orra, WordPress-i esan behar duzu zerbait: zure network-eko site-ek beste domain-ei zehaztasun edo subdirektoriak (subdirectories) erabiliko duzun.

Subdomain-ek (subdomains) aukeratzen duzu, domain-etan zehaztasunak (DNS settings) aldatu behar duzu eta multisite network-eko _**wildcard subdomains**_ konfiguratzea da.

Network Setup-era itzultu, zure network-eko titulu bat emitu eta Network admin email-eko email-a zuzena dagoela seguruatu. Kontinuua jarraitzeko _Install_ (Instaluatu) klik egin.

WordPress-ek ematen kode hau `**wp-config.php**` funtsoa hasi ezazu:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Eta WordPress-ek ematen kode hau `**.htaccess**` funtsoa hasi ezazu:

```apache
RewriteEngine On RewriteBase /
RewriteRule ^index.php$ - [L]

# wp-admin-era beste bat (trailing slash) hasi ezazu

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP client edo file manager (adibide cPanel, adibide) kopio eta pasteatu kode hauek dauekin.

Aurrera egin baino lehen, WordPress situailean irriztu ondorioz, Ultimate Multisite-aren network-a erabiliz piztu behar duzu.

**Ultimate Multisite instalatu aurretik, WordPress Multisite installazioan subsite bat ezarri dituzu jakinarazten eta probatu behar duzu.**

Subsite bat leitzeko:

  1. Irri zure situailearen wp-admin-era
  2. My Sites > Sites (/wp-admin/network/sites.php) funtziokoan jarraitu
  3. Atalean Add New (Leitu berria) klikatu
  4. All fields horiek pleratu:

* Site Address — Ez erabiltu "www"

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Situailearen titulu, hori lehen erantzuten da, ondorekin aldatu dezakezu

* Admin Email — Subsite-aren lehen admin erabiltza daingoa emitu

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Fields pleratu ondoren, "Add site" (Leitu situaile) botontik klikatu. Berria subsitea leitzituta jakinarazten duren, hori funtzionatzen duen jakinarazten eta probatzeko irriztu behar duzu.

## Problema batzuk: {#add-a-trailing-slash-to-wp-admin}

### 1. Berria situaileak ez da erantzuten. {#common-problems}

Subdomainak ere erabiltu dutenean, multisite network-eko wildcard subdomainak ere konfiguratuta behar duzu.

Horren bitartean, zure web-aren hostuing akunaren control panel dashboard-era (adibidez cPanel/Plesk/Direct Admin, hostearen kontuari aukeratzen) funtziokoan jarraitu.

"Domains" edo "Subdomains" (Subdomainak) esaitzeko opsion bat aurkitu. Kontrol panelen artean, hori "Domain administration" (Domain administrazioa) daingoa emitu dezake du.

Zirena-leazleko ir asterisko (*). Horrek, sortu dituen domain naizuna honetan auker egin behar duzu horreyaren ondoreko subdomain-a gehitu nahi duzun lekuan.

Aplikazioaren root-eko (document root) sortutako domain naizun automatically identifikatu da. Wildcard subdomain-a gehitzen artean, _Create_ edo _Save_ botontik klik egin behar duzu. Erregistroak " *.[mydomain.com](http://mydomain.com)" iruki nahi du.
