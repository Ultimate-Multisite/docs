---
title: GitHub-viipaleet
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Kuinka käyttää Ultimate Multisite -nappia GitHub-repositoristosi avulla

GitHub-repositoristossa on saatavilla koodinappia, joita Ultimate Multisite -käyttäjät pyytävät usein lisättäkseen pieniä toimintoja, kuten Google Analytics -skriptin lisäämisen rekisteröitymissivuille tai meta-laatikon piilottamisen hallintapaneelista.

Tässä artikkelissa näytämme sinulle, miten käyttää näitä koodejä tai tarkemmin, mihin niitä kannattaa sijoittaa.

Voit löytää nappien linkistä:

https://github.com/next-press/wp-ultimo-snippets/

Koodin lisäämiseen on kaksi tapaa:

  1. Teeman functions.php -tiedostoon.

  2. Must-Use Plugins (mu-plugins).

# Kuinka lisätä nappi teeman functions.php -tiedostoon

  1. Kirjaudu sisään WordPress Network admin -paneeliin ja siirry Themes > Theme Editoriin (Katso alla olevaa kuvaa).

  2. "Edit Themes" -sivulla varmista, että olet valinnut aktiivisen teeman pudotusvalikosta, joka sijaitsee näytön oikeassa yläkulmassa (#3 alla olevassa kuvassa).

  3. Napsauta "Theme Files" -osion alla olevaa functions.php -tiedostoa lataaksesi tiedoston. Selaa alas alareunaan ja liitä GitHub-repositoristosta saatua Ultimate Multisite -nappia.

<!-- Kuvakaavaa ei ole saatavilla: WordPress Theme Editor näyttää functions.php -tiedoston muokkaamisen -->

# Kuinka luoda Must-Use Plugins (mu-plugins)

WordPressissä on ominaisuus, jolla voit ladata räätälöityä toiminnallisuutta nimellä "Must-Use Plugins" tai lyhyemmin "mu-plugins".

Nämä erityiset mu-plugins ladataan ennen kaikkia muita normaaleja plugin-lisäosia ja niitä ei voi poistaa käytöstä. Multisite-verkossa nämä mu-plugins -koodit ladataan asennuksen kaikilla sivustoilla.

1. Käytä FTP:tä tai SSH:ta päästäksesi WordPress-asennuksen tiedostojärjestelmään.

2. WordPress-asennuksen `wp-content`-hakemistoon luo uuden hakemiston nimellä: `mu-plugins`.

<!-- Kuvakaavaa ei ole saatavilla: Tiedostonhallinta näyttää wp-content -hakemiston ja mu-plugins -hakemiston -->

3. Luo tietokoneellasi uusi PHP-tiedosto nimellä `wu-snippet.php` käyttämällä Notepadia tai mitä tahansa koodieditoria.

4. Aseta Ultimate Multisite -koodinpätkä, jonka löysit GitHub-repositorionsta, tähän tiedostoon ja tallenna se. Voit myös lisätä tämän koodin koodinpätkän päälle merkiksi mu-pluginisi nimittämiseksi.
