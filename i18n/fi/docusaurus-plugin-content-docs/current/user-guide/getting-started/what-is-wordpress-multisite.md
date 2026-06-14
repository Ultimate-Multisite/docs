---
title: Mitä WordPress Multisite on?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Mitä WordPress Multisite on?

WordPressin ytimessä on ominaisuus nimeltään ‘Multisite’, jonka juuret ulottuvat vuoteen 2010, jolloin WordPress 3.0 lanseeratti. Sen jälkeen se on saanut useita versioita, joilla on tavoitteena tuoda uusia ominaisuuksia ja parantaa turvallisuutta.

Yksinkertaisesti sanottuna WordPress-multisite voidaan ajatella näin: Yliopisto ylläpitää yhtä WordPress-asennusta, mutta jokainen tiedekunta ylläpitää omaa WordPress-sivustonsa.

##

## Mitä WordPress Multisite on tarkalleen ottaen?

Multisite on WordPress-ominaisuus, joka mahdollistaa useiden sivustojen jakamisen yhden WordPress-asennuksen kanssa. Kun multisite aktivoit, alkuperäinen WordPress-sivusto muunnetaan tukemaan sitä, mitä yleensä kutsutaan **sivuston verkostoksi** (network of sites).

Tämä verkosto jakaa tiedostonjärjestelmän (mikä tarkoittaa, että **lisäosat ja teemat on myös jaettava**), tietokannan, WordPressin ydintiedostot, wp-config.php jne.

Tämä tarkoittaa, että WordPress-, teemojen ja lisäosien päivitysten tarvitsee tehdä vain kerran koko verkoston sivustoille, koska ne jakavat samat tiedostot tiedostonjärjestelmässä.

Tämä on yksi multisite-ominaisuuden suurimmista eduista, sillä se mahdollistaa sivustojen määrän kasvattamisen hallitsemasi sivustojen määrää muuttamatta niihin liittyvien tehtävien määrää, joita tarvitset asiakkaidesi sivustojen ylläpitoon.

##

## Alavalikko vai alihakemisto?

WordPressin multisite-käynnistämiseen on kaksi tapaa – ja sinun täytyy valita jokin, kun muunnat tavallisen WordPress-asennuksen multisite-asennukseksi:

**Alavalikko (Subdomain):** esim. [site.domain.com](http://site.domain.com)

…tai

**Alihakemisto (Subdirectory):** esim. [yourdomain.com/site](http://yourdomain.com/site)

Molemmat tavat ovat erilaisia, ja sinun on otettava huomioon niiden edut ja haitat tekemällä tätä päätöstä.

On yksi asia on tärkeä huomata: kun olet tehnyt päätöksen, verkon vaihtaminen alikansioon tai päinvastoin on todella vaikeaa – erityisesti jos sinulla jo on kädessäsi muutama sivusto.

Päätöksen tekemiseen ennen sitä on muutamia asioita, jotka kannattaa huomioida:

**Alikansion tila (Subdirectory Mode)** on helpoin tila asennuksen ja ylläpidon kannalta. Tämä johtuu siitä, että kaikki sivustot ovat vain polkuja, jotka on liitetty päädomeeniin (esim. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Tämän seurauksena tarvitset **yhden SSL-sertifikaatin** päädomeenille ja se kattaa koko verkon.

Samalla URL-rakenteensa vuoksi Google ja useimmat muut hakukoneet pitävät kaikkia alikansioihin perustuvia sivustoja yhdeksi valtavaksi sivustoksi. Tämän seurauksena asiakkaiden lisäämä sisältö voi vaikuttaa laskeutumissivustosi SEO-suoritukseen, esimerkiksi. Vaikutuksen tasosta on keskusteltava ja on argumentteja siitä, että tällainen järjestely voi jopa olla hyödyllinen SEO-suorituksille.

**Aladomeenin tila (Subdomain Mode)** on hieman monimutkaisempi asentaa, mutta sen URL-rakenne (esim. [subsite.yournetwork.com](http://subsite.yournetwork.com)) koetaan yleensä "ammattimaisemmin" näyttävänä.

Yhdistämainen haaste subdomain-tilassa on SSL-katelu (HTTPS) koko verkkoon. Tämä johtuu siitä, että selain näkee subdomainit erillisinä kokonaisuutena. Tämän seurauksena sinun tarvitsee eri SSL-sertifikaatin jokaiselle subdomainille verkkokantasi tai erityisen tyyppistä sertifikaattia nimeltä **Wildcard SSL certificate**. Viime vuosina isännöitsijät ja paneelit ovat parantaneet SSL-proviisoinnissa omaa tasoaan, ja joillakin tarjolla on wildcard-sertifikaatteja klikkauksen avulla, mikä sulkee aukon näiden kahden tilan asennuskompleksisuudessa.

Subdirektiomoodin sijaan subdomainipohjaisessa verkossa hakukoneet pitävät alisivustoista erillisinä verkkosivustoina, mikä tarkoittaa, että yhden alisivuston sisällöllä ei ole mitään vaikutusta muiden alisivustojen SEO-suoritukseen.

## Super Admin

Yhdistelmäsivustot (Single-site) WordPress -asennuksilla voit lisätä rajattoman määrän käyttäjiä ja antaa niille erilaisia rooleja eri oikeuksilla.

WordPress Multisite -tilassa avautuu uusi käyttäjätyyppi: **super admin** – ja avautuu uusi hallintapaneeli: **network admin panel**.

Kuten nimikin viittaa, super adminilla on ylivoimaisia valtuuksia verkossa, sillä hän pystyy hallitsemaan kaikki alisivustot, pluginit, teemat, kaikki!

Kun muunnat yksittäisen WordPress-asennuksen multisite-tilaksi, alkuperäinen sivuston hallinnoija päivitetään automaattisesti super adminiksi.

Pluginien ja teemojen voi asentaa tai poistaa vain network admin panelista super adminilla. Alisivustojen ylläpitäjät voivat sitten valita aktivoida tai deaktivoida nämä pluginit tai teemat, ellei super admin verkossa aktivoi jotakin pluginia, mikä pakottaa sen olevan aktiivinen kaikilla alisivuilla koko ajan.

_Huomautus: kuten näet, joku henkilö verkkoosi kutsumalla ja antamalla hänelle superadmin-status antaa tälle käyttäjälle täyden hallinnan koko verkostoon. Esimerkiksi muut superadminit voivat jopa poistaa sinun superadmin-status, mikä estää sinut käytännössä pääsemästä oman verkkokauppapaikkasi admin-paneeliin. Jotta Ultimate Multisite -asiakkaat voisivat hallita tarkemmin, mitä lisäsuperadminit voivat tehdä, meillä on lisäosa nimeltään Support Agents. Tämä lisäosa mahdollistaa sinun luoda toisenlaisen käyttäjätyyppi – agentin – jolla on vain ne oikeudet, joita hän tarvitsee suorittaakseen tehtäviään verkossa._

## Mitä ja mitä ei ole yhteistä aliverkkojen välillä

Kuten aiemmin mainitsimme, WordPress multisiten tärkeä etu on se, että kaikki aliverkot jakavat samat asetukset, yd tiedostot, teemat, pluginit, WordPressin ydintiedostot jne.

On kuitenkin elementtejä, jotka on erittäin tarkasti rajattu kunkin aliverkon perusteella.

- Esimerkiksi jokaisella aliverkolla on oma lataussuuntansa kansio. Tämän seurauksena tietyn aliverkon käyttäjien tekemät lataukset eivät ole saatavilla toisella aliverkolla.
- Jokaisella aliverkolla on oma omistettu admin-paneelinsa ja se voi aktiivistaa tai deaktivoida pluginit tai teemat, ellei niitä ole verkossa aktivoitu superadminin toimesta.
- Useimmat tietokantataulukot luodaan jokaisen aliverkon kohdalle, mikä tarkoittaa, että julkaisut, kommentit, sivut, asetukset ja paljon muuta on rajattu kunkin aliverkon osalta.

## Käyttäjähallinta WordPress Multisite -ympäristössä

WordPress multisiten herkän aihe yksi on käyttäjähallinta. WordPress-käyttäjätapa (user table) on yksi niistä muutamista, jotka on jaettu kaikille aliverkoille.

Tämä järjestely voi aiheuttaa ongelmia riippuen siitä, mitä suunnittelet rakentavasi verkossasi. Alla esimerkki auttaa havainnollistamaan kriittisintä asiaa.

Kuvittele seuraava tilanne:

Luo WordPress-multisite-verkoston ja aloitat tarjoamaan maksullisia alisivuja kuukausimaksua varten niille, jotka haluavat omistautumisen verkkokauppakaupan.

Saatu ensimmäinen maksava asiakas – John. Luot sivuston Johnille verkostossasi, asennat kaikki tarvittavat pluginit ja luot käyttäjän Johnille, jotta hän voi hallita omaa myymäläänsä.

Sitten tulee toinen asiakas – Alice. Teet saman asian hänen puolestaan ja hänellä on nyt myymälä verkostossasi myös.

John ja Alice ovat molemmat asiassasi, mutta he eivät tiedä toisistaan. Tärkeämpää on se, että jos jompikumpi vierailee toisen myymälän verkkosivulla, ei ole mitään tapa tietää, että tämä myymälä sijaitsee samassa verkostossa.

Jossain päivänä John haluaa ostaa uuden paria kenkiä ja löytää täydelliset kengät Alice'n myymälästä. Kun hän yrittää suorittaa oston, hän saa virheilmoituksen "sähköposti jo käytössä". Tämä on outoa, koska John on 100 % varma siitä, että tämä on ensimmäinen kerta, kun hän on vieraillut Alice'n sivustolla.

Tässä tapauksessa tapahtuu se, että Johnin käyttäjä on jaettu koko verkostoon, joten kun hän yrittää luoda tilin kassalle Alice'n sivustolla, WordPress havaitsee, että samalla sähköpostiosoitteella oleva käyttäjä on jo olemassa, ja antaa virheen.

_Huomautus: Ymmärrämme, kuinka huono se voi olla käyttökohteesi riippuen, joten Ultimate Multisiteessa on vaihtoehto, joka ohittaa säännölliset tarkistukset olemassa olevasta käyttäjästä ja mahdollistaa useiden tilien luomisen samalla sähköpostiosoitteella. Jokainen tili on sidottu alisivustoon, joten törmäysriski pidetään minimissä. Yllä olevassa esimerkissä John ei saa virheilmoitusta eikä voi ostaa niitä kenkiä ongelmitta. Tämä vaihtoehto nimeltään Enable Multiple Accounts (Mahdollisuus useille tileille) ja sitä voidaan aktivoida Ultimate Multisite → Settings → Login & Registration -kohdasta._

Vaikka käyttäjätaulukko on jaettu, käyttäjiä voidaan lisätä ja poistaa alisivustoilta subsite-hallinnoijilla tai superadminilla, ja heillä voi olla eri käyttäjärooleja eri alisivuilla.

## Suorituskykyhuomiot

WordPress multisite on todella tehokas siinä, kuinka monta sivustoa se pystyy tukemaan. Tämä voidaan testata sillä, että [WordPress.com](https://WordPress.com), Edublogs ja Campuspress ovat kaikki multisite-pohjaisia palveluita, joilla jokainen isäntä ylläpitää tuhansia sivustoja.

Vaikka teoriassa ei ole maksimimäärää sivustoja, joita voit hostata yhdessä WordPress multisite -asennuksessa, käytännössä pystettävissä pitämään sivustot toimivina määrä voi vaihdella paljon useiden eri tekijöiden mukaan: kuinka dynaamisia sivustot ovat, mitkä pluginit ovat saatavilla alisivuille jne.

Säännöllisen ohjeenä: mitä yksinkertaisempi verkostosi on, sitä parempi. Suosittele sivustoja, joilla sisältö ei ole todella dynaamista (mikä tekee niistä hyviä ehdokkaita aggressiivisiin välimuisti-strategioihin) ja pidä pluginien joukko mahdollisimman kevyenä (mitä enemmän aktiivisia plugin-määrää, sitä parempi). Tämä voi lisätä merkittävästi alisivustojen määrää, jonka voit hostata.

Paras osa on se, että koska kyseessä on kaikki WordPress:llä, samat työkalut, joista olet jo tottunut ja pidät suorituskyvyn parannuksiin, toimivat myös multisite-verkostolle.

Multisiten pääkaula on tietokanta, mutta jos muu asetus on oikein, siihen voi kestää muutaman tuhannen sivuston ennen kuin sinun tarvitsee siitä huolehtia. Jopa silloin on ratkaisuja, joita voidaan lisätä asteittain siinä vaiheessa (kuten tietokannan jakautumissratkaisut).
