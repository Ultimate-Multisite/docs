---
title: Kako instalirati WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kako namestiti WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite vam omogoča, da imate mrežno delo spletnih strani na eni instalaciji. To je vgrajen funkcija, vendar ni aktivna po podrazmerju.

:::tip
Ultimate Multisite vključuje **[multisite-setup-wizard](./multisite-setup-wizard)**, ki automatizira celoten proces namestitve. Če imate nameščen Ultimate Multisite, vam priporočamo uporabo tega wizardja namesto sledenja navodil spodaj.
:::

Ker je Ultimate Multisite plugin namenjen samo mreži, v tem vodič se naučite, kako ručno namestiti in nastavit WordPress Multisite. Ta tekst je zasnovan na podlagi [Kako namestiti in nastavit WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), od WPBeginner.

**Več, ki jih morate upoštevati pred ustvarjanjem svoje multisite mreže:**

  * Dobri WordPress hosting! Spletni strani na mreži delijo iste serverne resurse.

  * Če imate samo par strani z nizko trafikom, vam bo verjetno deloval shared hosting.

  * Večina **Managed WordPress hosting providerjev** ponuja Multisite "out-of-the-box" (namestijo WordPress s aktiviranim in konfiguriranim Multisite za vas). To je primer WP Engine, Closte, Cloudways itd. Če niste prepričani, ali se to nanaša na vašga hosta, se pred nadaljnjo uporabo tega vodiča obavestite njihove podporne centre.

  * Tudi je dobro biti vedel, kako namestiti WordPress in urediti datoteke z uporabo FTP-ja.

_**POMEMBNO**_ **:** Če nastavljate multisite mrežno delo na obstoječi WordPress strani ne pozabite:

  * Ustvariti popolno rezervno kopijo vaše WordPress strani

  * Deaktivirati vse pluginove na svoji strani, s čimer grete na stran z pluginovi in izberete _Deactivate_ iz bulk actionov in nato kliknete na _Apply_.

Za vključitev Multisite najprej povežite se na svojo spletno stran preko FTP klienta ali upravljalca datotek cPanel in odprite svoj fajl `wp-config.php` za urejanje.

Pred vrstico _*To je vse, preprosto! Veseli blogovanje.*_ dodajte naslednji kod:

```php
define('WP_ALLOW_MULTISITE', true);
```

Shrani in vnaši svoj fajl `wp-config.php` nazaj na server.

S multisite funkcijo vključeno na svoji strani je čas za nastavitvo vaše mreže.

Idi na **Tools » Network Setup** (Alat » Nastavitva mreže)

Zdaj morate WordPressu povedati, kakšno strukturo domen boste uporabljali za strani v vašoj mreži: poddomene ali poddirektori.

Če izberete poddome, morate spremeniti svoje DNS nastavitve za mapiranje domen in se osredotočiti na nastavitvo _**wildcard subdomains**_ (wildcard poddome) za vaš multisite omrežje.

Sprej na Network Setup, dajte naslov svoji mreži in prepričajte se, da je e-poštni naslov v e-pošti admina mreže pravilno. Kliknite na _Install_ (Instaliraj), da nadaljujete.

Dodajte ta kod, ki ga WordPress zagotavlja, v svoj _**wp-config.php**_:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

In ta kod, ki ga WordPress zagotavlja, v svoj fajl _**.htaccess**_:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# dodaj zadnji slajš za /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Uporabite FTP stranke ali upravljalnik datotek (če uporabljate nekaj kot cPanel, na primer) za kopiranje in lepljenje kode v ta dva datoteka.

Na koncu se ponovno prijavo na vaš WordPress spletni domena, da boste mogli dostopati do svoje multisite mreže.

**Je pomembno preizkusiti in prepričati se, da lahko ustvarjate podspletne strani na svoji instalaciji WordPress Multisite pred instalacijo Ultimate Multisite.**

Za ustvarjanje podspletne strani:

  1. Odprite svoje spletne domene wp-admin

  2. Navigirajte do My Sites > Sites (/wp-admin/network/sites.php)

  3. Kliknite na Add New zgoraj

  4. Popolniti vse polja:

  * Site Address — Nikoli ne uporabljajte „www“

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Naslov strani, lahko spremenite kasneje

  * Admin Email — Ustavite kot začetnega administratorja za podspletno stran

![Dodaj novo stran v WordPress Multisite](/img/admin/sites-list.png)

Po zapolnjenju polj kliknite gumb "Add site". Ko je nova podspletna stran ustvarjena, jo dostopajte in preizkusite, da se zagotite, da deluje.

## Pogostejše težave: {#add-a-trailing-slash-to-wp-admin}

### 1. Lahko ustvarjam nove strani, vendar jih ni dostopne. {#common-problems}

Če ste izbrali poddomene, morate tudi nastaviti wildcard poddomene za vašo multisite mrežno.

Za to gre do kontrolne panela hospodstva vaše spletne domene (npr. cPanel/Plesk/Direct Admin v skladu z vašim dostavalcem).

Poiščite možnost "Domains" ali "Subdomains". V nekaterih kontrolnih panelih je označena kot "Domain administration".

V polje poddomena vpisati zvezico (*). Nato bo se pričevalo, da izberete domeno, kjer želite dodati poddomeno.

Slovenija bosta sam preverila kot osnovno razvršanje (document root) za izbrane domen. Kliknite na gumb _Create_ ali _Save_, da dodate svojo wildcard poddomeno. Vpis bi izgledal kot „*.[mydomain.com](http://mydomain.com)“.
