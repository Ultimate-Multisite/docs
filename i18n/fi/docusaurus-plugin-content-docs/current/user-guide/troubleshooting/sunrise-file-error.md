---
title: Auringonnousu tiedoston virhe
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Virhe WordPress-tiedoston asennuksessa

`sunrise.php`-tiedosto on erityinen tiedosto, jota WordPress etsii käynnistyessään. Jotta WordPress pystyy havaitsemaan `sunrise.php`-tiedoston, se täytyy sijaita **wp-content -kansioon**.

Kun aktivoit Ultimate Multisitea ja suoritat asennusohjelman kuten kuvassa näkyvän ohjauksen, Ultimate Multisite yrittää kopioida `sunrise.php`-tiedoston wp-content -kansioon.

<!-- Kuvakaappaus saatavilla: Asennusohjelman sivu, joka näyttää sunrise.php-asennustapa -->

Useimmitoin pystymme onnistuneesti kopioimaan tiedoston ja kaikki toimii. Kuitenkin jos jokin ei ole asetettu oikein (esimerkiksi kansiorajoitukset), saatat kohdata tilanteen, jossa Ultimate Multisite ei pysty kopioimaan tiedostoa.

Jos luet virheilmoituksen Ultimo antaa sinulle, näet siinä juuri sen: **Sunrise copy failed** (Sunrise-kopio epäonnistui).

<!-- Kuvakaappaus saatavilla: Virheilmoitus, joka näyttää Sunrise copy failed -->

Tämän korjaamiseksi voit yksinkertaisesti kopioida `sunrise.php`-tiedoston wp-ultimo -lisäosan kansiosta ja liittää sen omaan wp-content -kansioon. Sen jälkeen lataa ohjauksen sivu uudelleen, ja tarkistukset pitäisi läpäistä.

<!-- Kuvakaappaus saatavilla: Tiedostinhallinta, joka näyttää sunrise.php wp-ultimo -lisäosan kansiossa --> Mistä riippumatta tämä voi vaatia yleisen tarkastelun kansiorajoituksillesi välttääksesi ongelmia tulevaisuudessa (ei vain Ultimate Multisitea vastaan, vaan myös muiden lisäosien ja teemojen kanssa).

WordPressin **Health Check -työkalu** (pääset siihen pääsivuston **admin panel > Tools > Health Check** kautta) pystyy kertomaan sinulle, jos kansiorajoitukset on asetettu arvoihin, jotka voivat aiheuttaa ongelmia WordPressille.

<!-- Kuvakaa ei ole saatavilla: WordPressin tilatarkistustyökalu näyttää kansiorivien käyttöoikeudet -->
