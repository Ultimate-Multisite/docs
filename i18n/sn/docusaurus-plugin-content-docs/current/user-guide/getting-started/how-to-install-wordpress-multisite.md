---
title: Ndiri kuenda sei WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Ndiri kuimba WordPress Multisite sei sei? {#how-do-i-install-wordpress-multisite}

WordPress Multisite inakuweipa uwezera kuva ne network ye sites dzakawanda dzinogara munyaya imwe. Iyi feature inotanga neWordPress, asi haisi inoratidwa nekuti inenge inotanga.

:::tip
Ultimate Multisite inosanganisa **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** inosanganisa izvi zvose zvinotanga. Kana uchida Ultimate Multisite, tinokubatsira kuenda neWizard pane kutaura mazwi anotsanangura pano.
:::

Kuti Ultimate Multisite iwe plugin inogona kutanga network chete, munyaya iyi, uchaona sei kuimba nekugadzirisa WordPress Multisite manually. Iyi nzira iyi inotanga mune [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), kubva kuWPBeginner.

**Zvimbo dzinotanga kuona pfungwa pakutanga network yako ye multisite:**

  * Ndinoda hosting yakakwana yaWordPress! Websites dzakawanda dzinogara munyaya imwe, zvichishandisa resources dzine server.

  * Kana uine sites maviri kana miviri netraffic yakanyanya, shared hosting inozvaka zvakanaka kune iwe.

  * Zvose **Managed WordPress hosting providers** vanoita Multisite nekuti inotanga (vanogadzira WordPress neMultisite inotanga inoratidwa uye inogadzirwa kwako). Iyi ndiyo nzira ya WP Engine, Closte, Cloudways, nani. Kana usina chokwadi kana iweine host provider iyi, ndichida kuva munhu anoziva kuti unenge uri munhu anoziva nekuti iweine support panguva iyu pane kutaura mazwi pano.

  * Kunyangwe kunge kune zvinotanga WordPress uye kutambura files neFTP.

_**ZVINYANYA**_ **:** Kana uchida kuimba multisite network munyaya weWordPress wako uyu, usina kukosha kuti:

  * Uingine backup yakakwana ye site yako yaWordPress

  * Kuti unapara plugins dzose pamusoro pesite yako, undaenda kwenye plugins page uye utange _Deactivate_ kubva mu bulk actions ndichida kuita _Apply_.

WordPress Multisite-a

Iziitira WordPress Multisite. Kuti ungeramba, ndichatanga zvakare kuti iwe unofanira kuita izvi:

Kutangamira Multisite, pano unofanira kuitanisa (connect) site yako nekuti unenge uchishandisa FTP client kana cPanel file manager, uye utange kupfunctiona mupfumbiro we wp-config.php.

Panguva iwe uri munenge ukanga ndiri kuita kuti "That’s all, stop editing! Happy blogging" (Izvi zvose zvinotanga, usawane kuita editing! Ndinenge uchidzidza). Panguva iye, unofanira kuita izvi:

```php
define('WP_ALLOW_MULTISITE', true);
```

Save uye upload wp-config.php yako pama server.

Nekuti feature ya Multisite yakazivikanwa (enabled) mune site yako, ndizvi zvakare kuti uita setup yenyaya yako:

Panda **Tools » Network Setup** (Zuva refu » Setup Yenyaya).

Uchida kutaura WordPress kuti unoda aina ye domain structure inozivikanwa (subdomains kana subdirectories) kuti sites dzako dzinenge dziri munyaya yakakaita sei.

Kana uva subdomains, unofanira kuunda DNS settings yako kuti upanise mapping ya domain uye kuita setup **wildcard subdomains** (subdomains dzakawanda).

Zuva refu Network Setup, shandisa zita (title) yenyaya yako uye usinonakira kuti email address mune Network admin email inenge yakakwana. Click **Install** kuti utangane.

Panguva iwe uri munenge ukanga ndiri kuita izvi, unofanira kuita izvi:

Add this code, provided by WordPress, to your **wp-config.php**:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Ndiye iwe, add this code, provided by WordPress, to your **.htaccess** file:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Gara muenda kuita FTP client kana uchikopya uye utaipaste mune zvinhu zvinotatu.

Hapana, rine zvakakosha kuti uone uye uone kuti uri kuita subsite munzira yako ya WordPress Multisite panguva unozviratidza Ultimate Multisite.

Kuti utore subsite:

  1. Funga wp-admin yavo websites

  2. Enda ku My Sites > Sites (/wp-admin/network/sites.php)

  3. Chibvumira Add New pamusoro.

  4. Shandisa zvinhu zvose:

  * Site Address — Hama usazivikanzi "www"

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Zita rewebsite, kunogone kuwedzera panguva unozviratidza

  * Admin Email — Shandisa iwe wese weadmin kuti uwe mwana weadmin wesubsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Panguva unotsvaga zvinhu, chibvumira "Add site". Panguva subsite yakagadzirwa, enda uye one kuti uone kuti subsite inenge inogona kushanda.

## Matambudziko Anogona Kuonekwa: {#add-a-trailing-slash-to-wp-admin}

### 1. Ndinogona kuita sites dzine chinhu chinobva asi haziingone kuone. {#common-problems}

Kana uri kuita subdomains, unofanira kutaura subdomains dzakawanda (wildcard) panguva inenge iwe munzira yako ya multisite.

Kuti urambe iye, enda ku dashboard yezvinhu zvinotevera ye hosting yako (kuti cPanel/Plesk/Direct Admin kunyanya).

Tsvaga chine option yakaita "Domains" kana "Subdomains". Mune zvinhu zvakawanda, inosanganiswe se "Domain administration".

Musi famba ku chineiro chesubdomain, ndingai i asterisk (*). Ndapana, idzvinoda kutaura nezve domain name unoda subdomain uonekane pano.

Document root yekuti domain name yakoseledwa inozvibatsirwa nekuvimbisa. Chibvumira kuita _Create_ kana _Save_ button kuti uingire subdomain yako ya wildcard. Chishanduro chineonekwa chinofanira kuita “*.[mydomain.com](http://mydomain.com)”
