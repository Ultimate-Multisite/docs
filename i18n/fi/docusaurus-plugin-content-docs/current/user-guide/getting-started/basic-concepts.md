---
title: Peruskonseptit
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Perusperuste käsitteet

Uuden WordPress Multisite -käyttäjän ja henkilön, joka aloittaa Ultimate Multisiten käytön, voi aluksi olla paljon uusia sanoja ja termejä. Niiden oppiminen on tärkeää, koska sinun on ymmärrettävä alustaa ja sitä kokonaisuutena, miten se toimii.

Tässä artikkelissa yritämme määritellä ja selittää joitakin WordPressin keskeisiä käsitteitä. Jotkut niistä ovat enemmän käyttäjille relevantteja, toiset kehittäjille, ja jotkut molemmille.

## WordPress Multisite

WordPress **Multisite** on WordPress-asennustyy, joka mahdollistaa useiden verkkosivustojen luomisen ja hallinnan yhdestä WordPress-hallintapaneelista. Voit hallita kaiken, mukaan lukien sivustojen määrän, ominaisuudet, teemat ja käyttäjäroolit. On mahdollista hallita satoja ja tuhansia sivustoja.

## Verkosto (Network)

WordPressin mielessä multisite-verkko on paikka, josta useita **aliverkkosivustoja** voidaan hallita yhdestä hallintapaneelista. Vaikka multisite-verkon luominen vaihtelee isännöijän välillä, lopputulos on yleensä muutamia lisäohjeita **wp-config.php** -tiedostoon, jotta WordPress ymmärtää toimivan tässä erityisessä tilassa.

Multisite-verkon ja itsenäisen WordPress-asennuksen välillä on useita eroja, joita käymme läpi lyhyesti.

## Tietokanta (Database)

Tietokanta on rakenteellinen, järjestetty tietojoukko. Tietotekniikassa tietokanta viittaa ohjelmistoon, jota käytetään tietojen tallentamiseen ja järjestämiseen. Kuvittele se kaapistona, jossa säilytät tietoa eri osioissa nimetyissä taulukoissa (tables).

WordPress Multisite käyttää yhtä tietokantaa ja jokaisella aliverkkosivustolla on omat taulukonsa blog-id:llä etuliitteenä. Siksi kun asennat verkkoasennuksen ja luot aliverkkosivuston, sinulla pitäisi olla nämä taulukot:

_wp_1_options_ - aset table ensimmäiselle alayksikölle

_wp_2_options_ - aset table toiselle alayksikölle

## Isännöintipalvelu

Isännöintipalvelu on yritys, joka mahdollistaa yritysten ja yksityishenkilöiden julkaisemisen verkkosivustoilla maailmanlaajuisella verkossa. Verkkosivustopalvelut, joita isännöintipalveluntarjoajat tarjoavat, vaihtelevat, mutta niihin sisältyy yleensä verkkosivuston suunnittelu, tallennuspaikka isännässä ja yhteydet internetiin.

## Verkkotunnus (Domain)

Verkkotunnus on osoite, jota ihmiset käyttävät sivustosi vieraillakseen. Se kertoo selaimelle, etsinä sivustosi. Aivan kuten kadonosoite, verkkotunnus on se tapa, jolla ihmiset vierailevat verkkosivustollasi verkossa. Ja kuin kyltti myymälän edessä. Jos haluat vierailla meidän sivustollamme, sinun täytyy kirjoittaa verkkotunnuksemme selaimen osoiteriville, joka on [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, jossa [**ultimatemultisite.com**](http://ultimatemultisite.com) on verkkotunnus.

## Alalohko (Subdomain)

Alalohko on tyyppi verkkosivustohiikari pääverkkotunnuksen alla, mutta sen sijaan, että käytettäisiin kansioita sisällön järjestämiseen verkkosivustolla, se saa melkein oman sivustonsa. Se esitetään muodossa [**https://site1.domain.com/**](https://site1.domain.com/), jossa _site1_ on alalohkon nimi ja [_domain.com_](http://domain.com) on pääverkkotunnus.

## Alikansio (Subdirectory)

Alikansio on tyyppi verkkosivustohiikari juuritasolla, joka käyttää kansioita sisällön järjestämiseen verkkosivustolla. Alikansio on sama kuin alikansio ja nimi voidaan käyttää vaihdannollisesti. Se esitetään muodossa [**https://domain.com/site1**](https://domain.com/site1), jossa _site1_ on alikansion nimi ja [_domain.com_](http://domain.com) on pääverkkotunnus.

## Alayksikkö (Subsite)

Alayksite on Multisite-verkossa luotu alayksikkö (subsite) on sella tyyppi sivustoa kuin **alddomeeni** tai **alipolku**, riippuen siitä, miten WordPress Multisite -asennuksesi on konfiguroitu.

## Super Admin

WordPress Super Admin on käyttäjärooli, jolla on täydet oikeudet hallita kaikkia alayksiköjä Multisite-verkossa. Multisite-käyttäjille se on **korkein tason pääsy**, jonka voit antaa WordPress-asennuksesi.

## Plugin

Yleisesti ottaen plugin on koodin joukko, joka lisää lisäominaisuuksia WordPress-sivustollesi. Tämä voi olla niin yksinkertaista kuin kirjautumislogin logon muuttaminen tai monimutkaista verkkokauppatoiminnallisuuden lisääminen. _Woocommerce_ ja _Contact Form_ ovat plugin-esimerkkejä.

WordPress Multisite -verkossa pluginit voidaan asentaa vain Super Adminin kautta verkkoadminin dashboardista. Alayksikköjen ylläpitäjät voivat aktivoida ja deaktivoida plugin-lisäosia vain omalla alayksiköllään.

## Teemat (Themes)

WordPress-teema on tiedostojen ryhmä (_grafiikka, tyylilistat ja koodi_), joka määrittää sivuston yleisen ulkoasun. Se tarjoaa kaikki etupuolen tyylit, kuten fontin tyylit, sivun asettelut, värit jne.

Aivan kuten pluginit, WordPress Multisite -verkossa teemoja voi asentaa vain Super Admin ja niitä voidaan aktivoida alayksikkötason ylläpitäjien toimesta.

## Sivustotyyppi (Site Template)

**Sivustotyyppi** on pohjasivusto, jota voidaan käyttää perusteena uuden sivuston luomiseen verkossasi.

Tämä tarkoittaa, että voit luoda peruspaikan, aktivoida eri plugin-lisäosia, asettaa aktiivisen teeman ja muokata sitä millä tahansa haluamallasi tavalla. Kun asiakas luo uuden tilin, hän saa sen sijaan oletus WordPress-sivuston ilman merkityksellistä sisältöä, vaan kopion peruspaikastasi kaikilla jo valmiina olevat muokkauksia ja sisältöjä mukana.

## Domain Mapping (Domeenien kartoitus)

**Domain mapping** WordPressillä on tapa ohjata käyttäjät oikealle isäntään sivuston osoitteen kautta. WordPress Multisite -rakenteessa alisivut luodaan joko alikansioihin tai alalohkoihin. Domain mapping mahdollistaa sen, että alisivujen käyttäjät voivat käyttää ylätasoon perustuvaa pääosaa, kuten [**joesbikeshop.com**](http://joesbikeshop.com), jotta sivuston osoite näyttää ammattimaisemmalta.

## SSL

SSL tarkoittaa **Secure Sockets Layer**. Se on digitaalinen sertifikaatti, joka vahvistaa verkkosivuston tunnistet ja mahdollistaa salatun yhteyden luomisen. Nykyään se käytetään standarditekniikkana internet-yhteyksien turvaamiseen ja kaiken arkaluonteisen datan suojaamiseen siirrettäessä kahden järjestelmän välillä, estäen rikoksia lukemasta tai muokkaamasta siirrettyä tietoa, mukaan lukien mahdolliset henkilötiedot. Modernit selainlaajennukset vaativat SSL:n, mikä tekee siitä olennaisen sivuston luomisen ja ajamisen yhteydessä.

## Media

Media koostuu kuvista, äänistä, videoista ja muista tiedostoista, jotka muodostavat verkkosivuston.

Verkko-sivustoilla on yksi yhteinen tietokanta WordPress Multisite -rakenteessa, mutta ne ylläpitävät erillisiä polkuja tiedostojärjestelmään media-tiedostoille.

Standardipolku (wp-content/uploads) pysyy samana; kuitenkin sen polku muutetaan heijastamaan verkko-sivuston ainutlaatuista ID:tä. Tämän seurauksena verkko-sivuston tiedostot näkyvät osoitteessa wp-contents/uploads/site/[id].

## Permalinks

Permalinks ovat yksittäisen blogikirjoituksen tai sivun pysyviä URL-osoitteita sivustollasi. Permalinksia kutsutaan myös nimellä **pretty links** (kauniit linkit). Oletuksena WordPressin URL-osoitteet käyttävät kyselymerkkijonon muotoa, joka näyttää jotain tällaista:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite on WordPress on lisätty plugin on suunniteltu WordPress Multisite -asennuksiin ja muuttaa WordPress-asennuksesi premium-verkostoksi – kuten [WordPress.com](https://WordPress.com) – mahdollistaen asiakkaiden luoda sivustoja kuukausimaksuilla, neljännesvuosimaksuilla tai vuosimaksuilla (voit myös luoda ilmaisia suunnitelmia).

## Checkout Form (Maksuaformaatti)

Checkout Form on yksittäinen tai useampivaiheinen tilauslomake, joka sisältää aliasteiden, jäsenyyksien ja käyttäjätilien luomisen Ultimate Multisite -rekisteröinnin kautta. Se koostuu eri kentistä ja maksulomakkeista, jotka käyttäjän on täytettävä rekisteröitymisen aikana.

## Webhook

Webhook (jota kutsutaan myös web callbackiksi tai HTTP push API:ksi) on tapa, jolla sovellus voi antaa tietoa muille sovelluksille reaaliajassa. Webhook välittää dataan muihin sovelluksiin sen noustessa, mikä tarkoittaa, että saat tiedot heti.

**Ultimate Multisite webhooks** avaavat rajattomat mahdollisuudet, mahdollistaen verkoston ylläpitäjille monenlaisia hulluja mutta hyödyllisiä integrointia, erityisesti kun niitä käytetään palveluiden kuten _Zapierin ja IFTTT:n_ kanssa.

## Events (Tapahtumat)

Event on toiminto, joka tapahtuu käyttäjän tai toisen lähteen toiminnan seurauksena, kuten hiiren napsautuksena. Ultimate Multisite tallentaa kaikki tapahtumat ja logit, jotka tapahtuvat koko verkostossasi. Se seuraa eri toimintoja, jotka tapahtuvat multisite-ympäristössä, kuten suunnitelmien muutoksia.
