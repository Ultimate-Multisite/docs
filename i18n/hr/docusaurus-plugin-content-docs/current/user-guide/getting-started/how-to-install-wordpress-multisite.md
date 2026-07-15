---
title: Kako instalirati WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kako instalirati WordPress Multisite?

WordPress Multisite omogućuje da imate mrežu web stranica na jednoj instalaciji. To je ugrađena značajka, ali nije aktivna po podrazumevanom postavkama.

:::tip
Ultimate Multisite uključuje **[wizard za postavljanje Multisite](https://ultimate-multisite.com/wp-content/plugins/ultimate-multisite/multisite-setup-wizard)** koji automatski obavlja cijeli taj proces. Ako imate instaliran Ultimate Multisite, preporučujemo korištenje tog wizard-a umjesto slijediti ručne korake ispod.
:::

Budući da je Ultimate Multisite plugin namijenjen samo za mrežu (network-only), u ovom tutorijalu ćete naučiti kako ručno instalirati i postaviti WordPress Multisite. Ovaj tekst baziran je na [Kako instalirati i postaviti WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), od WPBeginner.

**Stvari na koje trebate obratiti pažnju prije kreiranja vaše multisite mreže:**

  * Dobar WordPress hosting! Web stranice u mreži dijele iste resurse servera.

  * U slučaju da imate samo par web stranica s niskim prometom, shared hosting će vam vjerojatno biti dovoljan.

  * Većina **Managed WordPress hosting provajdera** nudi Multisite "out-of-the-box" (instaliraju WordPress s aktiviranim i konfiguriranim Multisite za vas). To je slučaj kod WP Engine-a, Closte-a, Cloudways-a itd. Ako niste sigurni jesu li tako vaš hosting provajderi, kontaktirajte njihovu podršku prije nastavka s ovim tutorijalom.

  * Također je dobro se upoznati s instalacijom WordPressa i uređivanjem datoteka putem FTP-a.

_**VAŽNO**_ **:** Ako postavljate multisite mrežu na postojeći WordPress web stranicu, ne zaboravite:

  * Kreirati kompletnu rezervnu kopiju (backup) vašeg WordPress sajta

  * Deaktivirati sve pluginove na svom sajtu idąc na stranicu za pluginove i odabiranjem _Deactivate_ iz opcija za masovno djelovanje (bulk actions), a zatim klikom na _Apply_.

Da biste omogućili Multisite, prvo se povežite na svoj sajt pomoću FTP klijenta ili menadžera datoteka cPanelom i otvorite vaš `wp-config.php` datoteku za uređivanje.

Pre linije _*To je sve, prestanite s uređivanjem! Sretno bloganje.*_ dodajte sljedeći kod:

```php
define('WP_ALLOW_MULTISITE', true);
```

Sačuvajte i priložite svoj `wp-config.php` datoteku nazad na server.

S aktivnom značajkom Multisite na vašem sajtu, sada je vrijeme za postavljanje vaše mreže.

Idite na **Alatovi » Network Setup** (Podešavanje mreže)

Sada morate reći WordPress-u kakvu strukturu domena ćete koristiti za sajtove u vašoj mreži: poddomene ili poddirektorije.

Ako odaberete poddome, morate promijeniti postavke DNS-a za mapiranje domena i osigurati da je postavljanje _**wildcard poddomena**_ (wildcard subdomains) za vaš Multisite mrežni sajtovi ispravno.

Nazad na Network Setup, dajte naslov svojoj mreži i provjerite da li je e-mail adresa u e-mailu administracije mreže ispravna. Kliknite na _Install_ (Instaliraj) za nastavak.

Dodajte ovaj kod, koji vam WordPress pruža, u svoj `wp-config.php`:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

I ovaj kod, također pružen od strane WordPress-a, u vašu `**.htaccess**` datoteku:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# dodajte završnu slivu na /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Koristite FTP klijenta ili upravitelj datotekama (ako koristite nešto poput cPanel-a, na primjer) za kopiranje i zalijepiti kod u ove dvije datoteke.

Na kraju, ponovno prijavite se na svoj WordPress sustav kako biste pristupili svojoj multisite mreži.

**Važno je testirati i provjeriti da možete kreirati subsite na vašoj instalaciji WordPress Multisite prije instaliranja Ultimate Multisite.**

Kako kreirati subsite:

  1. Otvorite wp-admin svoje web stranice

  2. Idite na My Sites > Sites (/wp-admin/network/sites.php)

  3. Kliknite Add New na vrhu

  4. Popunite sve polja:

  * Site Address — Nikada ne koristite „www“

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Naslov stranice, može se promijeniti kasnije

  * Admin Email — Postavite kao početnog korisnika admina za subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Nakon što popunite polja, kliknite gumb "Add site" (Dodaj stranicu). Kada se novi subsite kreira, pristupite mu kako biste provjerili da je subsite funkcionalan.

## Često problemi: {#add-a-trailing-slash-to-wp-admin}

### 1. Mogu kreirati nove stranice, ali nisu dostupne. {#common-problems}

Ako ste odabrali poddomene, trebate postaviti i wildcard poddomene za vašu multisite mrežu.

Za to, idite na kontrolni panel hostinge vaše web stranice (npr. cPanel/Plesk/Direct Admin ovisno o vašem dobavljaču usluga).

Pronađite opciju za „Domains“ ili „Subdomains“. U nekim kontrolnim panelima ona je označena kao „Domain administration“ (Upravljanje domenom).

U polje pod domena unesite asterisks (*). Potrijazd će vam zatim prikazati izbor domena gdje želite dodati subdomena.

Koren dokumenta za odabrani naziv domena će biti automatski prepoznat. Kliknite na dugme _Create_ ili _Save_ kako biste dodali svoj wildcard subdomen. Unos treba izgledati kao „*.[mydomain.com](http://mydomain.com)“.
