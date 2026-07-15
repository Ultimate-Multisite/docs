---
title: Kādu WordPress Multisite instalēt?
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kā kādu man ir jāinstalē WordPress Multisite?

WordPress Multisite ļauj jums turēt tīklu vietnes vienā instalācijā. Tas ir iekļauts funkcija, bet pēc defaulta tā nav aktīva.

:::tip
Ultimate Multisite ietver **[ieiet multisite konfigurācijas palīdzības programmu](./multisite-setup-wizard)**, kas automāлізуē šo visu procesu. Ja jums ir instalēts Ultimate Multisite, mēs rekomendējam izmantot šo palīdzību viet instead of sekoji manuālajiem soļiem zemāk.
:::

Tā kā Ultimate Multisite ir tīkla (network-only) plugin, šajā tutorialā jūs iemācīsieties instalēt un konfigurēt WordPress Multisite manuāli. Šis teksts balstīts uz [Kā instalēt un konfigurēt WordPress Multisite tīklu](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), no WPBeginner.

**Līdz to, kas jāņem vērā pirms jums veicāt multisite tīkla izveidi:**

  * iegūsti labu WordPress hostingu! Tīklas vietnes dalās vienām servera resursiem.

  * ja jums ir tikai dažas vietnes ar zema trafiku, šaredais hosting varētu būt pietiekams.

  * lielākā daļa **Managed WordPress hosting providers** piedāvā Multisite bez konfigurācijas (out-of-the-box) (tās instalē WordPress ar Multisite jau aktivizētu un konfiguriētu jums). Tas ir slikta situācija, ja jūs neesat droši, vai tas ir slikta situācija jūsu hostings sniedzējam, savāji kontaktējieties ar viņu atbalstu pirms turpina šo tutorialu.

  * arī labi būtu pazīstams WordPress instalēšanu un failu rediģēšanu FTP ar.

_**SVARĪGI!**_ **:** Ja jūs konfigurāt multisite tīklu jau eksistējā WordPress vietnē, negaudiet:

  * izveidot pilnu rezervi (backup) jūsu WordPress vietnes

  * deaktvēt visus pluginus savā vietnē, dodieties uz savu pluginu lapu un izvēlieties _Deactivate_ bulk actions no tā menu noformātā un pēc tam nospressiet _Apply_

Lai atspējot Multisite, vispirms savācieties ar savu vietni FTP klientu vai cPanel faila pārvaldniec ar, un atveriet savu `wp-config.php` failu rediģēšanai.

Pirms līniju _*Tas ir viss, stopi rediģēšanu! Laiks labām postojumiem.*_ pievienojiet šo kodu:

```php
define('WP_ALLOW_MULTISITE', true);
```

Saglabājiet un uzskaitiet savu `wp-config.php` failu atpakaļ serverā.

Ar Multisite funkciju ieslēgtu vietnē, tagad ir laiks iestatīt jūsu tīklu.

Dodieties uz **Tools » Network Setup** (Rīki » Tīkla iestatījumi)

Tagad jums jāapstāv WordPressu, kādu domānu struktūru izmantotiet savos vietnēm tīklā: subdomēnus vai subdirektori.

Ja jūs izvēlaties subdomēnus, jums ir jāmaina DNS iestatījumi domānu mapiņai un jāpārāda _**wildcard subdomēni**_ jūsu Multisite tīklam.

Atgriezieties uz Tīkla iestatījumus, sniedziet nosaukumu savai tīklam un pārliecinieties, ka e-pasta adrese Tīkļa admina e-pastā ir pareiza. Nospiediet _Install_ (Iestatīt), lai turpinātu.

Pievienojiet šo kodu, ko sniedz WordPress, savam _**wp-config.php**_ failam:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Un šo kodu, ko sniedz WordPress, savam _**.htaccess**_ failam:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# pievienojiet pēdējās slēgšanas (trailing slash) /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Izmantojiet FTP klientu vai failu menago (ja izmantojat kaut ko, piemēram cPanel), lai kopētu un iekļaut šo kodu šajos divos failos.

Visbeidzami, atjauninājiet loginu uz savu WordPress vietni, lai piekļūtu savai multisite tīkli.

**Labi ir svarīgi pārtests un pārliecināties, ka varat izveidot subvietni savā WordPress Multisite instalācijā pirms Ultimate Multisite instalēšanas.**

Lai izveidotu subvietni:

  1. Atveriet savas vietnes wp-admin

  2. Navigējieties uz My Sites > Sites (/wp-admin/network/sites.php)

  3. Nospressiet "Add New" augšpusē

  4. Pievienojiet visus laukus:

  * Site Address — Nekad neizmantojiet “www”

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Vietnes nosaukums, var mainīt vēlāk

  * Admin Email — Iestati kā pirmais admin lietotājs subvietnei

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Pēc lauku aizpildīšanas nospressiet pogu "Add site". Kad ja jaunais subviets ir izveidots, dodieties pie tā un pārbaudiet, vai subviets darbojas.

## Kopas problēmas: {#add-a-trailing-slash-to-wp-admin}

### 1. Es varu izveidot jaunas vietnes, bet tās nav pieejamas. {#common-problems}

Ja jūs izvēlējāt subdomēnus, jums ir arī jāizmanto viltru subdomēni (wildcard subdomains) savā multisite tīklā.

Lai to darītu, dodieties uz jūsu vietnes hostings konta kontrolpanelas dashboardu (piemēram cPanel/Plesk/Direct Admin atkarībā no jūsu hostingu sniedzēja).

Atrodiet opciju "Domains" vai "Subdomains". dažos kontrolpanelās to nosaukums ir "Domain administration".

Subdomēna laukā ievadiet zvaigzi (*). Tad jums būs jāizvēlas domēna nosaukums, kurā vēlaties pievienot šo subdomēnu.

Izvēlētās domēnas galvenās vietnes (document root) automātiski tiek atrastas. Nospressiet "_Create_" vai "_Save_" pogu, lai pievienotu savu wildcard subdomēnu. Ievads būs tāds: “*.[mydomain.com](http://mydomain.com)”
