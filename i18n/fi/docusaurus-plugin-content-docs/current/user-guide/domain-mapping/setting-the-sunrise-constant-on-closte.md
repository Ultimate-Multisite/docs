---
title: Auringonnousukon asettaminen Clostiin
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Auringon vakion asettaminen `wp-config.php`-tiedostoon Clostessa

Joillakin isännöijillä on lukittu `wp-config.php` -tiedosto turvallisuussyistä. Tämä tarkoittaa, että Ultimate Multisite ei pysty muokkaamaan tiedostoa automaattisesti sisällyttää tarvittavia vakioita domainmappauksen ja muiden ominaisuuksien toimimiseksi. Closte on yksi tällaisista isännöijöistä.

Kuitenkin Closte tarjoaa tapa lisätä vakioita `wp-config.php`-tiedostoon turvallisella tavalla. Sinun tarvitsee vain noudattaa alla olevia vaiheita:

## Closten hallintapaneelissa

Aloita kirjautumalla sisään [Closte-tilillesi](https://app.closte.com/), klikkaamalla Sites -valikkoa ja sitten Dashboard-linkkiä siinä sivulla, jolla työskentelet tällä hetkellä:

<!-- Kuvakaappausta ei ole saatavilla: Closten hallintapaneeli näyttää Sites-valikon ja Dashboard-linkin -->

Sinulle ilmestyy vasemmalle ruudun puolelle useita uusia valikkokohoksia. Navigoi **Asetukset** -sivulle käyttämällä sitä valikkoa:

<!-- Kuvakaappausta ei ole saatavilla: Closten vasemman sivupalkin valikko näyttää Asetukset-vaihtoehdon -->

Sitten **Asetuksissa** etsi WP-Config -välilehti ja sen jälkeen välitystä "Additional wp-config.php content" -kenttään:

<!-- Kuvakaappausta ei ole saatavilla: Closten Asetussivu näyttää WP-Config-välilehden ja Additional wp-config.php content -kentän -->

Ultimate Multisiten asennuksen yhteydessä sinun täytyy lisätä auringon (sunrise) vakio kyseiseen kenttään. Lisää yksinkertaisesti uusi rivi ja liitä alle oleva rivi. Sen jälkeen klikkaa **Save All** -painiketta.

define('SUNRISE', true);

Valmis! Palaa Ultimate Multisite asennusohjelmaan ja päivitä sivu jatkaaksesi prosessia.
