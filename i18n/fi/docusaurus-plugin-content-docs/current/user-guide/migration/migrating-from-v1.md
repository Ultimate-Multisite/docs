---
title: 'Siirtyminen V1:stä'
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Siirtyminen V1:stä {#migrating-from-v1}

## Ultimate Multisite on siirtynyt alkuperäisestä 1.x -versioiden sarjasta 2.x -versioiden sarjaan. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite versio 2.0 ja sen uudemmat ovat täysin uudelleenkirjoitettua koodia, mikä tarkoittaa, että vanhan version ja uuden version välillä on hyvin vähän yhteistä. Siksi päivittäessä 1.x:stä 2.x:ään sinun on siirrettävä data muotoon, jota uudet versiot ymmärtävät.

Onneksi Ultimate Multisite 2.0+ **sisältyy mukana migraattori**, joka on rakennettu suoraan ydintoiminnaksi ja pystyy tunnistamaan vanhan version datan sekä muuntamaan sen uuteen muotoon. Tämä siirto tapahtuu **Setup Wizard** -vaiheen aikana versio 2.0+:ssa.

Tässä oppaassa käydään läpi, miten migraattori toimii, mitä tehdä virhetilanteissa ja miten ratkaista ongelmia, jotka voivat syntyä tämän prosessin aikana.

_**TÄRKEÄ: Ennen kuin aloitat päivittämisen versio 1.x:stä versioon 2.0, varmista, että luot sivustodatan varmuuskopion.**_

## Ensimmäiset askeleet {#first-steps}

Ensimmäinen askel on ladata plugin .zip -tiedosto ja asentaa versio 2.0 verkkohallintapaneelisi hallintapaneeliin.

Kun olet [asentanut ja aktivoit versio 2.0](../getting-started/installing-ultimate-multisite.md), järjestelmä havaitsee automaattisesti, että Multisiten käyttämä on vanhassa versiossa, ja näet tämän viestin plugin-sivun yläosassa.

_**HUOMIO:** Jos sinulla on Ultimate Multisite 1.x asennettuna Multisitensi, sinulla on mahdollisuus korvata plugin versiolla, jonka olet juuri ladannut. Ole hyvä ja klikkaa **Korvaa nykyinen lataamalla uusi**._

<!-- Kuvakaappaus ei ole saatavilla: Plugin-sivu, jossa on vaihtoehto v1:n korvaamiseen lataamalla uuden v2-version -->

Seuraava sivu kertoo, mitä vanhoja lisäosia sinulla on asennettuna versio 1.x kanssa. Siinä on ohjeet siihen, onko käytössä oleva versio yhteensopiva versio 2.0:n kanssa vai tarvitsetko päivittää lisäosaa siirron jälkeen.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Kun olet valmis jatkamaan, voit klikata painiketta, jossa lukee **Visit the Installer to finish the upgrade** (Vieraile asennusohjelmaan viimeistellä päivitys).

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Se ohjaa sinut sitten asennuswizard-sivulle, jossa on tervetuliaisviestejä. Sinun tarvitsee vain klikata **Get Started** (Aloita) siirtyä seuraavalle sivulle.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Klikkaamisen jälkeen **Get Started** ohjaa sinut Pre-install Checks\_sivulle. Siellä näet järjestelmän tiedot ja WordPress-asennuksen sekä saat tiedon, täyttääkö se **Ultimate Multisite'n vaatimukset**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Seuraava askel on syöttää Ultimate Multisite -lisenssiväri (license key) ja aktivoit lisäosa. Tämä varmistaa, että kaikki ominaisuudet, mukaan lukien lisäosat, ovat käytettävissä sivustollasi.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Kun olet syöttänyt avaimen, klikkaa **Agree & Activate** (Hyväset ja aktivoi).

Lisenssin aktivoimisen jälkeen voit aloittaa varsinaisen asennuksen klikkaamalla **Install** (Asenna) seuraavalla sivulla. Tämä luo automaattisesti tarvittavat tiedostot ja tietokannan, jotta versio 2.0 toimii.

## Nyt siirto {#now-the-migration}

Migraattoriin on sisäänrakennettu turvaominaisuus, jolla se tarkistaa koko multisiten sinun varmistaaksesi, että kaikki Ultimate Multisite -dataasi voidaan siirtää ilman ongelmia. Klikkaa **Run Check** -painiketta aloittaaksesi prosessin.

Kun tarkistus on suoritettu, sinulla on kaksi vaihtoehtoa: tulos voi olla joko virheellinen tai virhetön omaava.

### Virheen kanssa {#with-error}

Jos saat virheilmoituksen, sinun täytyy ottaa yhteyttä tukeaamme, jotta he voivat auttaa sinua korjaamaan virheen. Muista **tarjota virheloki** kun luot tiketin. Voit ladata logia tai klikata linkkiä, jossa lukee "contact our support team". Tämä avaa apuikkunan sivun oikealle puolelle, jolla on jo täytetty kentät, jotka sisältävät virhelokit kuvauksessa.

_**Koska järjestelmä löysi virheen, et pääse siirtämään versioon 2.0. Voit sen sijaan palauttaa takaisin versioon 1.x jatkaaksesi verkoston ajamista kunnes virhe on korjattu.**_

### Virhetön kanssa {#without-error}

Jos järjestelmä ei löydä mitään virheitä, näet onnistumisviestin ja alareunassa olevan **Migrate** -painikkeen, jolla voit jatkaa siirtoa. Tällä sivulla sinua muistutaan luomaan tietokannan varmuuskopio ennen etenemistä, mitä suositellaan voimakkaasti. Paina **Migrate**, jos sinulla on jo varmuuskopio.

Ja näin se on valmis!

Voit joko jatkaa Wizard-asennusta logon ja muiden asioiden päivittämiseksi verkossasi tai aloittaa navigointi Ultimate Multisite Version 2.0 -valikossa ja sen uudella käyttöliittymällä. Mene eteenpäin ja nauti vähän hauskuutta!
