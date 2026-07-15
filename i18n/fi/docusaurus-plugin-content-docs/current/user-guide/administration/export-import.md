---
title: Vienti ja tuonti
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Tiedoston vienti ja vienti

Ultimate Multisite 2.9.0 tuo uuden yksittäisen sivuston **Export & Import** -työkalun kohtaan **Tools > Export & Import**. Käytä sitä, kun tarvitset yhtä WordPress-sivustoa ZIP-tiedostona pakkaamaan, palauttaaksesi kyseisen ZIP-tiedoston tai siirtää sivustoa yhteensopivissa Ultimate Multisite- ja yksittäisissä WordPress-asennuksissa.

## Tarvittavat oikeudet {#required-permissions}

Sinun on oltava kirjautuneena sisään ylläpitäjänä, jolla on pääsy WordPressin **Tools** -valikkoon siinä sivustossa, jota vienti tai vienti suoritetaan. Multisite-verkossa käytä verkko-yläpitäjän tiliä, kun vienti tai vienti suoritetaan verkko-tason Ultimate Multisite -työkaluista aliasennuksista.

Export ZIP -lataukset tarjotaan tunnistautuneen latauskohteen kautta, joten pidä yllä ylläpitäjän istuntoa, kunnes lataus on valmis, ja älä jaa luotettuja latauslinkkejä julkisesti.

## Sivuston vienti ZIP-tiedostoon {#exporting-a-site-to-a-zip}

1. Siirry haluamasi sivuston WordPress-adminissa kohtaan **Tools > Export & Import**.
2. Avaa vientialue ja valitse sivu, jonka haluat pakata.
3. Valitse valinnaiset sisällytettävät tiedot, kuten lataukset, pluginit ja teemat, kun nämä vaihtoehdot ovat saatavilla.
4. Aloita vienti ja odota prosessin valmistumista. Suuret sivustot saattavat tarvita aikaa taustalla ennen kuin ZIP-tiedosto on valmis.
5. Lataa valmis ZIP-tiedosto vientilistalta.

Pidä ZIP-tiedosto turvallisessa paikassa. Se voi sisältää sivuston sisällön, asetukset, mediatiedostot ja valitut koodiautomaattiset resurssit.

## Mitä vienti sisältää {#what-the-export-includes}

Vienti ZIP -tiedosto voi sisältää:

- Valitun sivuston tietokannan sisällön ja konfiguraation.
- Latautettuja mediatiedostoja, jos lataukset on valittu.
- Pluginit ja teemat, jos nämä vaihtoehdot on valittu.
- Vienti- ja vientityökalulle käytetyt metatiedot sivuston rakentamiseen kohdassa.

Tarkka ZIP-tiedosto koko riippuu mediatietojen määrästä, valituista plugin- ja teemojen koosta sekä sivuston tietokantataulujen kokoon.

## Sivuston tuominen ZIP-tiedostona {#importing-a-site-from-a-zip}

1. Mene kohdesivuston WordPress-sivulla **Tools > Export & Import** -valikkoon.
2. Avaa tuontialue ja lataa Export & Import -työkalulla luotu ZIP-tiedosto.
3. Syötä korvaava URL, jos sivuston tulisi käyttää uutta osoitetta, tai jätä kenttä tyhjäksi alkuperäisen URL:n säilyttämiseksi.
4. Valitse, haluatko poistaa ladatun ZIP-tiedoston tuonnin jälkeen.
5. Napsauta **Begin Import** (Aloita tuonti).
6. Seuraa odottavaa tuontia, kun se on valmis. Käytä **Cancel Import** (Peruuta tuonti) vain, jos tarvitset prosessin keskeyttämisen ennen valmistumista.
7. Tarkista tuotu sivu ennen kuin sallit normaalin liikenteen tai asiakastuen pääsyn.

Yksittäisessä WordPress-asennuksessa ZIP-tiedoston tuominen korvaa nykyisen sivuston tuotetulla sivustolla. Tee täydellinen varmuuskopio kohdesivustosta ennen aloittamista ja vältä useiden samanaikaisien tuontien aloittamista samalle sivustolle.

## Rajoitukset ja yhteensopivuushuomautuksia {#limitations-and-compatibility-notes}

Erittäin suuret lataussuuntaiset kansiot tai media-kirjastot voivat tuottaa suuria ZIP-tiedostoja. Varmista PHP:n latausrajoitukset, suoritusaikarat, tallennustila, muisti ja palvelimen timeout-asetukset ennen suurten sivustojen vientiä tai tuontia.
Erittäin suuret media-kirjastot saattavat tarvita siirtoa vähäkäyttöisen ylläpitoikkunan aikana.
Kohde WordPress-asennuksen tulisi käyttää yhteensopivia versioita WordPress:ää, PHP:tä, Ultimate Multisitea, plugin- ja teemavarsioita.
Yksittäisen sivuston tuonti korvaa kohdesivuston. Se ei ole yhdistämistyökalu.
Multisiten-yksittäiseen siirtoon sekä yksittäisen sivuston multisiteen siirtoja tukee vain, jos kohdeympäristö pystyy suorittamaan vientiketun pluginit, teemat, URL-osoitteet ja tarvittavat Ultimate Multisite -komponentit.
Pidä ZIP-tiedosto yksityisenä. Se voi sisältää tietokantadataa, ladattuja tiedostoja ja vientiketun konfiguraatiotietoja vientisivustosta.

Vanhemmille verkko-tason vientiputkistoille katso [Site Export](https://user-guide/administration/site-export).
