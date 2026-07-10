---
title: Miten asentaa WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Miten asennan WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite mahdollistaa useiden sivustojen hallinnan yhden asennuksen kautta. Tämä on sisäänrakennettu ominaisuus, mutta se ei ole aktiivinen oletuksena.

:::tip
Ultimate Multisite sisältää **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** -työkalun, joka automatisoi koko tämän prosessin. Jos sinulla on Ultimate Multisite asennettuna, suosittelemme käyttämään työkaluja sen sijaan, että seuraat alla olevia manuaalisia vaiheita.
:::

Koska Ultimate Multisite on verkkoon perustuva plugin, tässä ohjeessa opit asentamaan ja määrittämään WordPress Multisiten manuaalisesti. Tämä teksti perustuu [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), WPBeginnerin ohjeeseen.

**Asioita, joihin kannattaa kiinnittää huomiota ennen multisite-verkoston luomista:**

  * Hanki hyvä WordPress-hostaus! Verkossa olevat sivustot jakavat saman palvelimen resurssit.

  * Jos sinulla on vain muutamia sivustoja vähäliikenteellä, yhteishostaus saattaa sopia sinulle.

  * Useimmat **Managed WordPress hosting providers** tarjoavat Multisiten valmiiksi (he asennetaan WordPressillä jo aktivoitu ja konfiguroitu). Tämä koskee esimerkiksi WP Engineia, Closteia, Cloudwaysia jne. Jos et ole varma, onko tämä tapaus hostauksen tarjoajallesi, ota heidän tukikohtaalle yhteyttä ennen jatkamista tätä ohjetta.

  * On myös hyvä olla tuttu WordPressin asentamisesta ja tiedostojen muokkaamisesta FTP:llä.

_**TÄRKEÄÄ**_ **:** Jos asennat multisite-verkoston olemassa olevalle WordPress-sivustolle älä unohda:

  * Luo täydellinen varmuuskopio WordPress-sivustostasi
  * Deaktivoi kaikki pluginit sivustollasi siirtyäksesi pluginien sivulle ja valitsemalla _Deactivate_ massotoiminnosta ja napsauttamalla sitten _Apply_

<!-- Kuvakaappia ei saatavilla: WordPress pluginien sivu näyttää massiivisen poistamisen toiminnon -->

Multisiten käytön mahdollistamiseksi yhdistä ensin sivustosi FTP-asiakasohjelmistolla tai cPanel tiedostonhallintatyökalulla ja avaa `wp-config.php` -tiedoston muokkausta varten.

Lauseen _*Valmis, lopeta muokkaaminen! Hyvää blogaamista.*_ ennen sitä lisää seuraavan koodinpätkän:

```php
define('WP_ALLOW_MULTISITE', true);
```

Tallenna ja lataa `wp-config.php` -tiedosto takaisin palvelimelle.

Kun multisite-ominaisuus on käytössä sivustollasi, nyt on aika asettaa verkko.

Siirry **Työkalut » Verkon asetus** (Tools » Network Setup)

<!-- Kuvakaappia ei saatavilla: WordPress Työkalujen valikko näyttää Verkon asetukset -vaihtoehdon -->

Nyt sinun täytyy kertoa WordPressille, millaisen domeenirakenteen käytät verkossasi sivustoille: alavalikoita (subdomains) vai alikansioita (subdirectories).

Jos valitset alavalikot, sinun on muutettava DNS-asetuksia domeenin kartoitukseen ja varmistettava _wildcard subdomains_ -asetukset multisite-verkkoasi varten.

Takaisin Verkon asetuksiin anna nimeä verkossasi ja varmista, että Network admin email -kentässä oleva sähköpostiosoite on oikein. Napsauta _Asenna_ (Install) jatkaaksesi.

<!-- Kuvakaappia ei saatavilla: WordPress Verkon asetus sivu verkko-nimen ja ylläpitäjän sähköpostikentät -->

Lisää tämä koodi, jonka WordPress tarjoaa, `wp-config.php` -tiedostoonsi:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Ja tämä koodi, jonka WordPress tarjoaa, `**.htaccess**` -tiedostoonsi:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# lisää loppujohdon /wp-adminiin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Käytä FTP-asiakasohjelmaa tai tiedostonhallintaa (jos käytät esimerkiksi cPanelia), kopioimalla ja liittämällä koodia näihin kahteen tiedostoon.

Lopuksi kirjaudu uudelleen WordPress-sivustollesi päästäksesi multisite-verkkoosi.

**On tärkeää testata ja varmistaa, että pystyt luomaan alisivuston WordPress Multisite -asennuksesi ennen Ultimate Multisiten asennusta.**

Alisivuston luominen:

  1. Avaa sivustosi wp-admin
  2. Siirry My Sites > Sites (/wp-admin/network/sites.php) -kohtaan
  3. Napsauta Add New (Lisää uusi) ylhäältä
  4. Täytä kaikki kentät:

* Site Address — Älä koskaan käytä "www":ta

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Sivuston nimi, jonka voit muuttaa myöhemmin

* Admin Email — Aseta se aloituskäyttäjänä alisivustolle

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Täytettyä jälkeen napsauta "Add site" (Lisää sivusto) -painiketta. Kun uusi alisivusto on luotu, siirry siihen varmistaaksesi, että se toimii.

## Yleisiä ongelmia: {#add-a-trailing-slash-to-wp-admin}

### 1. Voin luoda uusia sivustoja, mutta niihin ei pääse käsiksi. {#common-problems}

Jos valitsit alisivustot (subdomains), sinun on myös asetettava erikoisalueet (wildcard subdomains) multisite-verkkoosi varten.

Tämän tekemiseksi siirry verkkosivuston isännän hallintapaneeliin (esim. cPanel/Plesk/Direct Admin riippuen isännästäsi).

Etsi vaihtoehto "Domains" tai "Subdomains". Jotkin hallintapaneeleissa se on merkitty nimellä "Domain administration" (Verkkotunnusten hallinta).

Subdomain-kenttään syötetään tähden (*). Tämän jälkeen järjestelmä pyytää sinua valitsemaan verkkotunnuksen, jolle haluat lisätä alalohkon (subdomain).

Valitsemasi verkkotunnuksen dokumentin juuri tunnistetaan automaattisesti. Klikkaa _Create_ tai _Save_ -painiketta lisätäksesi tähden (*) sisältävän alalohkon. Kirjautumisen pitäisi näyttää esimerkiksi ”*.[mydomain.com](http://mydomain.com)”.
