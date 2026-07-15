---
title: Kako instalirati WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kako instalirati WordPress Multisite?

WordPress Multisite vam omogućava da imate mrežu sajtova na jednoj instalaciji. Ovo je ugrađena značajka, ali nije aktivna po defaultu.

:::tip
Ultimate Multisite uključuje **[ugrađeni Multisite Setup Wizard](./multisite-setup-wizard)** koji automatski obavlja ceo ovaj proces. Ako imate instaliran Ultimate Multisite, preporučujemo da koristite wizard umjesto da pratite ručne korake ispod.
:::

Pošto je Ultimate Multisite plugin samo za mreže, u ovom tutorijalu naučićete kako da ručno instalirate i postavite WordPress Multisite. Ovaj tekst zasnovan je na [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), od WPBeginner-a.

**Stvari na koje treba obratiti pažnju prije kreiranja vaše multisite mreže:**

  * Nabavite dobar WordPress hosting! Sajtovi na mreži dijele iste resurse servera.

  * Ako imate samo nekoliko sajtova sa niskim prometom, shared hosting će vam vjerovatno biti dovoljan.

  * Većina **Managed WordPress hosting provajdera** nudi Multisite "iz kutije" (instaliraju WordPress sa Multisite-om već aktiviranim i konfigurisanim za vas). To je slučaj kod WP Engine, Closte, Cloudways, itd. Ako niste sigurni da li je to slučaj sa vašim hosting provajderom, kontaktirajte njihovu podršku prije nego što nastavite sa ovim tutorijalom.

  * Takođe je dobro biti upoznat sa instalacijom WordPressa i uređivanjem fajlova pomoću FTP-a.

_**VAŽNO**_ **:** Ako postavljate multisite mrežu na postojeći WordPress sajt, nemojte zaboraviti:

  * Napraviti kompletnu backup vašeg WordPress sajta

  * Deaktivirati sve pluginove na sajtu tako što ćete otići na stranicu pluginova, odabrati _Deactivate_ iz masovnih akcija i zatim kliknuti _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Da biste omogućili Multisite, prvo se povežite sa svojim sajtom pomoću FTP klijenta ili cPanel file manager-a, i otvorite svoj wp-config.php fajl za uređivanje.

Prije linije _*That’s all, stop editing! Happy blogging.*_, dodajte sljedeći kod:

define('WP_ALLOW_MULTISITE', true);

Sačuvajte i ponovo učitajte svoj wp-config.php fajl na server.

Sada kada je multisite značajka omogućena na vašem sajtu, vrijeme je za postavljanje mreže.

Idite na **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Sada morate reći WordPressu koji tip strukture domena ćete koristiti za sajtove u vašoj mreži: poddomene ili poddirektorije.

Ako izaberete poddomene, morate promijeniti DNS postavke za mapiranje domena i osigurati da postavite _**wildcard subdomains**_ za vašu multisite mrežu.

Nazad na Network Setup, unesite naslov za svoju mrežu i pobrinite se da je e-mail adresa u Network admin email tačna. Kliknite _Install_ da nastavite.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Dodajte ovaj kod, koji je dostavio WordPress, u vaš _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

I ovaj kod, takođe dostavljen od strane WordPressa, u vaš _**.htaccess**_ fajl:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Koristite FTP klijent ili file manager (ako koristite nešto poput cPanel-a, na primjer) da kopirate i zalijepite kod u ova dva fajla.

Na kraju, ponovo se prijavite na svoj WordPress sajt kako biste pristupili svojoj multisite mreži.

**Važno je testirati i osigurati da ste u stanju da kreirate pod-sajt na vašoj WordPress Multisite instalaciji prije nego što instalirate Ultimate Multisite.**

Da biste kreirali pod-sajt:

  1. Otvorite wp-admin vašeg sajta

  2. Idite na My Sites > Sites (/wp-admin/network/sites.php)

  3. Kliknite Add New na vrhu

  4. Popunite sva polja:

  * Site Address — Nikada ne koristite "www"

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Naslov sajta, može se promijeniti kasnije

  * Admin Email — Postavite kao početnog admin korisnika za pod-sajt

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Nakon popunjavanja polja, kliknite na dugme "Add site". Kada se novi pod-sajt kreira, idite i pristupite mu kako biste bili sigurni da je pod-sajt funkcionalan.

## Uobičajeni problemi: {#common-problems}

### 1. Mogu kreirati nove sajtove, ali nisu dostupni. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Ako ste izabrali poddomene, morate postaviti i wildcard poddomene za vašu multisite mrežu.

Da biste to uradili, idite na kontrolni panel vašeg hosting naloga (npr. cPanel/Plesk/Direct Admin, ovisno o vašem hosting provajderu).

Pronađite opciju za "Domains" ili "Subdomains". U nekim kontrol panelima to je označeno kao "Domain administration".

U polje za poddomen, unesite zvjezdicu (*). Zatim bi trebalo da vas pita da izaberete naziv domena pod kojim želite da se poddomen doda.

Root direktorijum za izabrani naziv domena biće automatski detektovan. Kliknite na dugme _Create_ ili _Save_ da dodate svoj wildcard poddomen. Unos bi trebao izgledati kao “*.[mydomain.com](http://mydomain.com)”
