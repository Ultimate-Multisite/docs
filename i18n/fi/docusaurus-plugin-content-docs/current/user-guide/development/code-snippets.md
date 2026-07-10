---
title: Koodinpätkät
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Koodinpätkiä v2:lle {#code-snippets-for-v2}

Perusidea on, että **WordPress** -koodinpätkiä käytetään tekemään tiettyjä toimintoja, jotka muuten vaatisivat erillistä pienempää pluginia. Tällaisia koodinpätkiä sijoitetaan joko WordPressin ydintoimintojen tai teeman tiedostoihin (yleensä teeman `functions.php`-tiedostoon) tai ne voidaan käyttää MU-pluginina.

Tässä artikkelissa esitellään kolme koodinpätkkiä, joita voit käyttää **Ultimate Multisite v2**:lla:

  * [**Tilauksen valikon sijainnin muuttaminen**](#changing-the-position-of-the-account-menu-item)

  * [**Miten tarkistaa, onko käyttäjä tietyn suunnitelman alla ja/tai hänellä aktiivinen tilaus**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**CORS-ongelmien korjaaminen Font-Iconsilla mappatuissa domaineissa**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Tilauksen valikon sijainnin muuttaminen {#changing-the-position-of-the-account-menu-item}

Jotta voit muuttaa tilauksen valikon sijaintia asiakkaan Dashboardissa, lisää seuraava koodinpätkä teeman `functions.php`-tiedostoon pääsivustosi aktiivisessa teemassa. Voit myös sijoittaa koodinpätkän johonkin MU-plugin tai omaan pluginisi sisälle.

add_filter('wu_my_account_menu_position', function() { return 10; // Säädä tätä arvoa valikon haluttuun sijaintiin.

Tarkistaaksesi tilaus onko aktiivinen, voit käyttää funktiota:

`wu_is_active_subscriber($user_id)`

Alla on esimerkki siitä, miten tarkistat, onko käyttäjä tietyn suunnitelman (_Plan ID 50_) alla ja onko käyttäjän tilaus aktiivinen.

```php
$user_id = get_current_user_id();
$plan_id = 50;
if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // KÄYTTÄJÄ ON SUUNNITELMAN JÄLLE JA TIETOUSSA TILAUS ON AKTIIVINEN, TEKA TÄMÄ
} else { // KÄYTTÄJÄ EI OLE SUUNNITELMAN JÄLLE -- TAI -- TIETOUSSA TILAUS EI OLE AKTIIVINEN, TEKA MUUTA
}
```

Huomaa, että `_wu_has_plan_` vaatii "Plan ID":n toimimiseksi.

Suunnitelman ID saat voit mennä **Ultimate Multisite > Products** -osioon. Jokaisen tuotteen ID näkyy taulukon oikealla puolella.

Huomaa, että käyttäjät voivat tilata vain **suunnitelman (Plan)**, eivät pakettia tai palvelua, sillä ne ovat vain lisäominaisuuksia **suunnitelmalle**.

![Tuotelistauksessa näkyvät suunnitelmien ID:t](/img/admin/products-list.png)

## CORS-ongelmien korjaaminen Font-Iconsilla mappatuissa domaineissa {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## Fixing CORS issues with Font-Icons in mapped domains {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Kun mappasit domeenin aliasitteeksi, saatat huomata, että sivustolla on ongelmia ulkoisten fonttien lataamisessa. Tämä johtuu ristikkopäätöksestä (cross-origin block) palvelinasetuksissasi.

Koska fontit ladataan lähes aina suoraan CSS:stä, meidän domeenimappauslisäosa ei pysty muuttamaan URL-osoitteita käyttämään mappattua domeenia sen sijaan alkuperäisen sijasta. Siksi ongelman korjaamiseksi sinun on muutettava palvelinasetustasi tiedostoja.

Apache

Lisää .htaccess-tiedostoon seuraava rivi:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Lisää palvelimen konfiguraatiotiedostoon (sijainti vaihtelee palvelimesta toiseen) seuraava kohta:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
