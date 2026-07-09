---
title: Hoe om WordPress Multisite te installeer
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Hoe installeer ek WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite laat jou toe om 'n netwerk van webtuistes op een enkele installasie te hê. Dit is 'n ingeboude funksie, maar dit is nie standaard aktief nie.

:::tip
Ultimate Multisite sluit 'n **[ingeboude Multisite Setup Wizard](./multisite-setup-wizard)** in wat hierdie hele proses outomatiseer. As jy Ultimate Multisite geïnstalleer het, raai ons aan om die wizard te gebruik in plaas daarvan om die handmatige stappe hieronder te volg.
:::

Aangesien Ultimate Multisite slegs 'n netwerk-plugin is, gaan jy in hierdie tutorial leer hoe om WordPress Multisite handmatig te installeer en op te stel. Hierdie teks is gebaseer op [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), van WPBeginner.

**Dinge waar jy op moet let voordat jy jou multisite-netwerk skep:**

  * Kry goeie WordPress hosting! Webskakels op 'n netwerk deel dieselfde bedienershulpbronne.

  * As jy net 'n paar webtuistes met lae verkeer het, sal gedeelde hosting waarskynlik vir jou werk.

  * Die meeste **Managed WordPress hosting providers** bied Multisite out-of-the-box (hulle installeer WordPress met Multisite reeds geaktiveer en vir jou gekonfigureer). Dit is die geval vir WP Engine, Closte, Cloudways, ens. As jy nie seker is of dit die geval is vir jou hostingprovider nie, kontak hul ondersteuning voordat jy met hierdie tutorial voortgaan.

  * Dit is ook goed om bekend te wees met die installering van WordPress en die redigeer van lêers met FTP.

_**BELANGRIK**_ **:** As jy 'n multisite-netwerk op 'n bestaande WordPress-webwerf opstel, moenie vergeet om:

  * 'n Volledige backup van jou WordPress-webwerf te skep

  * Alle plugins op jou webwerf te deaktiveer deur na jou plugins-bladsy te gaan en _Deactivate_ uit die bulkaksies te kies en dan op _Apply_ te klik

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Om Multisite te aktiveer, skakel eers by jou webwerf met 'n FTP-kliënt of cPanel lêerbestuurder, en maak jou wp-config.php lêer oop vir redigering.

Voordat die _*That’s all, stop editing! Happy blogging.*_ lyn, voeg die volgende kodeblok by:

define('WP_ALLOW_MULTISITE', true);

Stoor en laai jou wp-config.php lêer terug na die bediener.

Met die multisite-funksie op jou webwerf geaktiveer, is dit nou tyd om jou netwerk op te stel.

Gaan na **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Nou moet jy vir WordPress sê watter soort domeinstruktuur jy vir die webtuistes in jou netwerk sal gebruik: subdomeine of subdirektories.

As jy subdomeine kies, moet jy jou DNS-instellings vir domeinmappering verander en seker maak dat jy _**wildcard subdomeine**_ vir jou multisite-netwerk opstel.

Terug na die Network Setup, gee 'n titel vir jou netwerk en maak seker dat die e-posadres in die Network admin email korrek is. Klik op _Install_ om voort te gaan.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Voeg hierdie kode, verskaf deur WordPress, by jou _**wp-config.php**_ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

En hierdie kode, ook verskaf deur WordPress, by jou _**.htaccess**_ lêer:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Gebruik 'n FTP-kliënt of 'n lêerbestuurder (as jy iets soos cPanel gebruik) om die kode in hierdie twee lêers te kopieer en te plak.

Laastens, log weer in op jou WordPress-webwerf om jou multisite-netwerk te bereik.

**Dit is belangrik om te toets en seker te maak dat jy in staat is om 'n subwebwerf op jou WordPress Multisite-installasie te skep voordat jy Ultimate Multisite installeer.**

Om 'n subwebwerf te skep:

  1. Maak jou webwerf se wp-admin oop

  2. Navigeer na My Sites > Sites (/wp-admin/network/sites.php)

  3. Klik op Add New bo-op

  4. Vul al die velde in:

  * Site Address — Gebruik nooit “www” nie

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Titel van die webwerf, kan later verander word

  * Admin Email — Stel as die aanvanklike admin-gebruiker vir die subwebwerf

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Nadat jy die velde ingevul het, klik op die "Add site" knoppie. Sodra die nuwe subwebwerf geskep is, gaan dan na hierdie webwerf om te verseker dat die subwebwerf funksioneel is.

## Algemene Probleme: {#common-problems}

### 1. Ek kan nuwe webwerwe skep, maar hulle is nie toeganklik nie. {#1-i-can-create-new-sites-but-they-are-not-accessible}

As jy subdomeine gekies het, moet jy ook wildcard subdomeine vir jou multisite-netwerk opstel.

Om dit te doen, gaan na die beheerdashboard van jou Webwerf se hostingrekening (bv. cPanel/Plesk/Direct Admin afhangende van jou hostingprovider).

Soek na 'n opsie vir “Domains” of “Subdomains”. In sommige beheerdashboards word dit gemerk as “Domain administration”.

Voer 'n asterisk (*) in die subdomain-veld. Dan moet dit jou vra om 'n domeinam te kies waar jy die subdomein onder wil hê.

Die dokumentroot vir die gekose domeinam sal outomaties gedetekteer word. Klik op die _Create_ of _Save_ knoppie om jou wildcard subdomein by te voeg. Die invoer moet lyk soos “*.[mydomain.com](http://mydomain.com)”
