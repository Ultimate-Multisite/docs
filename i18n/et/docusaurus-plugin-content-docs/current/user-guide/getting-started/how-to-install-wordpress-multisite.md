---
title: Kuidas installida WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kuidas installi WordPress Multisite?

WordPress Multisite võimaldab teil luua sotsiaalset võrku veebilehtide ühe installatsiooni all. See on sissejuhatav funktsioon, kuid see ei ole oletuks aktiveeritud.

:::tip
Ultimate Multisite sisaldab **[sissejuhatava Multisite seadistusvära](https://ultimate-multisite.com/wp-content/plugins/ultimate-multisite/multisite-setup-wizard)**, mis automatiseerib kogu selle protsessi. Kui teil on Ultimate Multisite installitud, soovitamme kasutada seda vära manuaalsete sammude järgmist sijada.
:::

Sest Ultimate Multisite on võrku jaoks mõeldud plugin, õpime selles tutori all kuidas WordPress Multisite manuaaliselt installida ja seadistada. See tekst põhineb [Kuidas installida ja seadistada WordPress Multisite võrk](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), WPBeginnerist.

**Asja, mida tuleb arvestada enne multisite võrku loomist:**

  * Pide hea WordPress hoost! Võrku veebilehted jaovad ühtes samas serveri ressurssidest.

  * Kui teil on vaid kaks või kolm lehte, millel liiklust on vähe, võib shared hosting teie jaoks toimida.

  * Ühel **Managed WordPress hoosta** pakutaja on Multisite valmi (nad installivad WordPressi juba aktiveeritud ja konfiguratsiooniga multisitega). See on juhtum WP Engine, Closte, Cloudways jne. Kui te ei ole kindel, kas see on teie host pakutaja jaoks nii, kontaktige nende toetust enne edasi liikumist selle tutori all.

  * On ka hea olla tuttav WordPressi installimise ja failide redigeerimise FTP abil.

_**TÄHTIS**_ **:** Kui te seadistate multisite võrku olemasoleva WordPress veebilehtile, ära unustage:

  * Loomist täieliku varjenduse oma WordPress veebilehtile

  * Deaktiveerida kõik pluginid teie veebilehtil käymise pluginide lehel ja valides bulk-tegevuste välja _Deactivate_ ja klikides sellele _Apply_.

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite aktivateeramiseks seadmete tuleb kõigepealt ühendada oma sisse FTP-klientiga või cPanel faili haldamise abil ja avada `wp-config.php` fail mueditamiseks.

Eelise `_That’s all, stop editing! Happy blogging._` linja juurde lisage järgmine koodi fragment:

```php
define('WP_ALLOW_MULTISITE', true);
```

Salvestage ja ülesannendage oma `wp-config.php` fail tagasi serverile.

Multisite funktsioon aktiivseks pärast seda, kui olete selle sisse pannud omale veebile, on aeg seadistada oma võrku.

Minimeerige **Tools » Network Setup** (Nüüd tööriistid » Võrkust seadistamine)

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Nüüd peate WordPressile ütlemise, millise domeenistruktuuri kasutamist teeksite oma võrku sille veebitele: subdomääride või subdirektoriumide.

Kui valite subdomääride, peate muuta oma DNS-seadmeid domeenimappingu jaoks ja veenduda selle kohta, et seadistaks _**wildcard subdomains**_ (wildcard subdomäärid) oma multisite võrku jaoks.

Tagasi Network Setupile, annate võrkule otsingut ja veenduge selle kohta, et e-posti aadressi Network admin emailis oleks õige. Klõpsake _Install_ (Installeer), et jätkata.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Lisage see kood, mida WordPress annab, oma _**wp-config.php**_ failile:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Ja see kood, mida WordPress annab, oma _**.htaccess**_ failile:

```apache
RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# lisage lõpp-täht (trailing slash) /wp-admini jaoks

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Kopi ja liiki koodi FTP-klientiga või faili haldamise (näiteks cPanel, kui seda kasutate) abil.

Lõpuks logige uuesti sisse oma WordPressi juurde, et päästa oma multisite võrku.

**On oluline testida ja veenduda sellest, et saate luua alsubsite oma WordPress Multisite installatsioonil enne Ultimate Multisite'i paigutamist.**

Alsubsite loomiseks:

  1. Avage oma veebilehtide wp-admin
  2. Minu sites (My Sites) > Sitat (Sites) (/wp-admin/network/sites.php) menüüpunktisse liiguge
  3. Klõpsake üles "Lisa uus" (Add New)
  4. Täita kõik väljad:

* Site Address — Ära kasutage "www"-t.

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Veebilehti pealkiri, mida saab hiljem muuta

* Admin Email — Asetage seda aluseks olevaks admin kasutajana alsubsite jaoks

![Lisa uue veebilehti formaat WordPress Multisite'is](/img/admin/sites-list.png)

Väljad täidetud pärast klõpsake "Lisa site" (Add site) nupul. Kui uus alsubsite on loodud, päästa selle kasutamiseks ja veenduda sellest, et alsubsite toimib.

## Tavaliselt esinevad probleemid:

### 1. Mul saan uusi sisse luua, kuid neid ei ole kättesaadav.

Kui te valisite subdomaane, peate ka seadistama wildcard-subdomainid oma multisite võrku jaoks.

See teha jaoks liiguge oma veebilehtide hoitamise kontori kontrollpaneeliga (nt cPanel/Plesk/Direct Admin sõltuvalt teie hoitjaest).

Leidske valik "Domainid" või "Subdomainid". Mõi kontrollpanelitades see on nimetatud "Domeeni administreerimine".

Subdoomein-väljelduslahusele kirjutage tähti (\*). Seejärel küsib süsteem teid valima domaini nimi, mille alla soovite subdoomeini lisada.

Valitud domaini root (kujutusjuur) tuvastatakse automaatselt. Klõpsake _Create_ või _Save_ nupul, et lisa oma wildcard-subdoomeen. Sisendi pealkiri peaks näima " *.[mydomain.com](http://mydomain.com)".
