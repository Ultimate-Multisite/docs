---
title: Kako instalirati WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kako instalirati WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite omogućava da imate mrežu sajtova na jednoj instalaciji. Ovo je ugrađena funkcija, ali nije aktivna podrazumevano.

:::tip
Ultimate Multisite uključuje **[Multisite Setup Wizard](./multisite-setup-wizard)** koji automatski obrađuje ceo taj proces. Ako imate Ultimate Multisite instaliran, preporučujemo korišćenje ovog asistenta umesto praćenja manualnih koraka ispod.
:::

Pošto je Ultimate Multisite plugin namenjen samo mreži sajtova, u ovom tutorijalu ćete naučiti kako da ručno instalirate i podesite WordPress Multisite. Ovaj tekst zasnovan je na [Kako instalirati i postaviti WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), od WPBeginner.

**Stvari na koje treba obratiti pažnju pre nego što kreirate svoju multisite mrežu:**

  * Dobar WordPress hosting! Sajtovi u mreži dele iste resurse servera.

  * U slučaju da imate samo par sajtova sa niskim prometom, shared hosting će vam verovatno odgovarati.

  * Većina **Managed WordPress hosting providera** nudi Multisite "out-of-the-box" (instaliraju WordPress sa aktiviranim i podešenim Multisite za vas). To je slučaj kod WP Engine, Closte, Cloudways itd. Ako niste sigurni da li se to odnosi na vaš hosting provider, kontaktirajte njihovu podršku pre nego što nastavite sa ovim tutorijalom.

  * Takođe je dobro upoznati instaliranje WordPressa i uređivanje fajlova pomoću FTP-a.

_**VAŽNO**_ **:** Ako postavljate multisite mrežu na postojeći WordPress sajt, ne zaboravite da:

  * Kreirate kompletan backup svog WordPress sajta

  * Deaktivirate sve pluginove na svom sajtu idąc na stranicu pluginova i izaberite _Deactivate_ iz opcija za masovno delovanje (bulk actions) a zatim kliknite na _Apply_.

Da biste omogućili Multisite, prvo se povežite sa svojim sajtom pomoću FTP klijenta ili menadžera datoteka cPanelom i otvorite vaš fajl `wp-config.php` za uređivanje.

Pre linije _*To je sve, prestanite da uređujete! Srećno blogovanje.*_ dodajte sledeći kod:

```php
define('WP_ALLOW_MULTISITE', true);
```

Sačuvajte i ponovo otpremite fajl `wp-config.php` na server.

Kada je Multisite funkcija omogućena na vašem sajtu, vreme je da postavite svoju mrežu.

Idite na **Alatovi » Network Setup** (Alatovi » Podešavanje mreže)

Sada morate reći WordPressu kakvu strukturu domena ćete koristiti za sajtove u vašoj mreži: poddomene ili poddirektorijume.

Ako izaberete poddomene, morate promeniti DNS podešavanja za mapiranje domena i osigurati da je podešavanje _**wildcard poddomena**_ (wildcard subdomains) postavljeno za vaš Multisite network.

Vratite se na Podešavanje mreže, dajte naslov svojoj mreži i uverite se da je e-mail adresa u e-mailu administratora mreže ispravna. Kliknite na _Install_ (Instaliraj) da nastavite.

Dodajte ovaj kod, koji vam pruža WordPress, u vaš `wp-config.php`:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

I ovaj kod, takođe pružen od strane WordPressa, u vašu fajl `.htaccess`:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# dodajte zadnju slajdnu crtu na /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Koristite FTP klijenta ili menadžer fajlova (ako koristite nešto poput cPanel-a, na primer) da kopirate i zalepite kod u ova dva fajla.

Na kraju, ponovo se prijavite na svoj WordPress sajt kako biste pristupili svojoj multisite mreži.

**Važno je testirati i proveriti da možete kreirati subsajt na vašoj instalaciji WordPress Multisite pre nego što instalirate Ultimate Multisite.**

Kako kreirati subsajt:

  1. Otvorite admin panel svojih sajtova wp-admin

  2. Idite na My Sites > Sites (/wp-admin/network/sites.php)

  3. Kliknite Add New na vrhu

  4. Popunite sve polja:

  * Site Address — Nikada ne koristite „www“

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Naslov sajta, može se promeniti kasnije

  * Admin Email — Postavite kao početnog admin korisnika za subsajt

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Nakon što popunite polja, kliknite dugme "Add site" (Dodaj sajt). Kada se novi subsajt kreira, pristupite mu da biste proverili da li je subsajt funkcionalan.

## Česta problema: {#add-a-trailing-slash-to-wp-admin}

### 1. Mogu da kreiram nove sajtove, ali nisu dostupni. {#common-problems}

Ako ste izabrali subdomene, takođe morate podesiti wildcard subdomene za vašu multisite mrežu.

Da biste to uradili, idite na kontrolni panel hosting svog sajta (npr. cPanel/Plesk/Direct Admin u zavisnosti od vašeg provajdera usluga).

Nađite opciju za „Domains“ ili „Subdomains“. U nekim kontrolnim panelima ona je označena kao „Domain administration“ (Upravljanje domenima).

U polju poddomena unesite asterisks (*). Zatim će vas sistem pitati da izaberete domen na kojem želite da se poddomena doda.

Koren dokumenta za izabran domen će biti automatski prepoznat. Kliknite na dugme _Create_ (Kreiraj) ili _Save_ (Sačuvaj) da dodate svoju wildcard poddomenu. Unos treba da izgleda kao „*.[mydomain.com](http://mydomain.com)“.
