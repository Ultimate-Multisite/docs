---
title: Miten määrittää verkkotunnusten kartoitukset
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Miten määrittää verkkotunnusten kartoitukset (v2)

_**TÄRKEÄ HUOMIO: Tämä artikkeli viittaa Ultimate Multisite -versioon 2.x.**_

Premium-verkoston voimakkain ominaisuuksista on se, että voit tarjota asiakkaille mahdollisuuden liittää ylätason verkkotunnuksen omille sivustoille. Miksi ei näytä ammattimaisemmalta: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) vai [_**joesbikeshop.com**_](http://joesbikeshop.com)? Tuhkaa, että Ultimate Multisite tarjoaa tämän ominaisuuden sisäänrakennettuna, ilman tarvetta käyttää kolmannen osapuolen plugin-lisäosia.

## Mitä verkkotunnusten kartoitus on?

Kuten nimikin viittaa, verkkotunnusten kartoitus on Ultimate Multisite -ominaisuus, joka mahdollistaa pyynnön omasta verkkotunnuksesta ja sen yhdistämisen vastaavalle sivustolle verkossa kyseisen verkkotunnuksen kanssa.

### Miten asettaa verkkotunnusten kartoitukset Ultimate Multisite-verkkoosi

Verkkotunnusten kartoitus vaatii jonkin asetuksia sinulta toimimiseksi. Onneksi Ultimate Multisite automatisoi tämän vaivalloisen työn puolestasi, jotta voit helposti täyttää vaatimukset.

Ultimate Multisite -asennuksen aikana ohjelmaopas kopioi ja asentaa automaattisesti **sunrise.php**-tiedoston määrättyyn kansioon. **Ohjelmaopas ei anna jatkaa, ennen kuin tämä vaihe on suoritettu**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Tämä tarkoittaa, että kun Ultimate Multisite -asennusohjelmaopas on valmis verkosi määrittelyyn, voit aloittaa verkkotunnuksen kartoituksen heti.

Huomioi, että verkkotunnusten kartoitus ei ole pakollinen. Sinulla on vaihtoehto käyttää WordPress Multisiten natiivia verkkotunnusten kartoitustoimintoa tai mitä tahansa muuta verkkotunnusten kartoitussuunnitelmaa.

Jos sinun tarvitse poistaa käytöstä Ultimate Multisiten -domeenin kartoituksen jättää tilaa muille domeenikartailuohjelmistoille, voit poistaa tämän ominaisuuden pois käytöstä **Ultimate Multisite > Settings > Domain Mapping** -osiosta.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Tämän vaihtoehdon alapuolella näet myös vaihtoehdon **Force Admin Redirect**. Tämä vaihtoehto antaa sinulle hallita sitä, pääseekö asiakkaat käsiksi hallintapaneeliinsa sekä omalla domeenilla että alalohkolla vai vain yhteen niistä.

Jos valitset **Force redirect to mapped domain** (Pakota ohjaus kartoitettuun domeeniin), asiakkaat pääsevät käsiksi hallintapaneeliinsa vain omilla domeeneillaan.

Vaihtoehto **Force redirect to network domain** (Pakota ohjaus verkko-domeeniin) tekee täysin vastakkaisen – asiakkaat saavat pääsyn hallintapaneeleihinsa vain alalohkolle, vaikka yrittäisivät kirjautua omilla domeeneillaan.

Ja vaihtoehto **Allow access to the admin by both mapped domain domain and network domain** (Salli pääsy hallintaan sekä kartoitetulla domeenilla että verkko-domeenilla) antaa heidän pääsyn hallintapaneeleihinsa sekä alalohkolle että omalle domeenille.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

On kaksi tapaa kartoittaa omaa domeenia. Ensimmäinen on kartoittaa domeenin nimi verkko-adminin hallintapaneelista superadminina ja toinen on alalohkolle pääsyvalikossa olevan tilin kautta.

Mutta ennen kuin aloitat oman domeenin kartoittamisen johonkin alalohkolle verkossasi, sinun on varmistettava, että **DNS-asetukset** domeenille ovat oikein konfiguroitu.

###

### Varmistaaksesi, että domeenin DNS-asetukset ovat oikein konfiguroitu

Jotta mappaus toimisi oikein, sinun täytyy varmistaa, että se verkkotunnus, jota haluat mappata, osoittaa verkostosi IP-osoitteeseen. Huomioi, että tarvitset **verkoston IP-osoitteen** – eli sen IP-osoitteen, jossa Ultimate Multisite on asennettu – ei itse räätälöidyn verkkotunnuksen IP-osoitetta. Esimerkiksi hakemaan tietyn verkkotunnuksen IP-osoitetta suosittelemme siirtymään [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) -palveluun.

Verkkotunnuksen oikein mappamiseen sinun on lisättävä **A RECORD** sen **DNS**-asetuksiin, joka osoittaa kyseiseen **IP-osoitteeseen**. DNS-hallinta vaihtelee suuresti eri verkkotunnuskirjoittajien välillä, mutta verkossa on paljon ohjeita tähän liittyen, jos etsit hakusanoilla " _Creating A Record on XXXX_ ", jossa XXXX on sinun verkkotunnuskirjoittajasi (esim. " _Creating A Record on_ _GoDaddy_ ").

Jos sinulla on vaikeuksia saada tätä toimimaan, **ota yhteyttä verkkotunnuskirjoittajan tukeen**, ja he voivat auttaa sinua tässä vaiheessa.

Jos suunnittelet sallivaa asiakkaidesi mappata omia verkkotunnuksia, heidän on tehtävä tämän osan itse. Ohjaa heidät verkkotunnuskirjoittajansa tukeen, jos he eivät pysty luomaan A Recordia.

### Räätälöidyn verkkotunnuksen mappaminen Super Adminina

Kun olet kirjautuneena sisään superadminina verkostosi kautta, voit lisätä ja hallita räätälöityjä verkkotunnuksia helposti siirtyä kohtaan **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Tällä sivulla voit klikata ylhäällä olevaa **Lisää verkkotunnus** -painiketta, jolloin avautuu modaali-ikkuna, jossa voit määrittää ja täyttää **mukautetun verkkotunnuksen**, haluamasi **alialueen** (subsite) tälle mukautetulle verkkotunnukselle ja päättää, haluatko asettaa sen **pääverkkotunnuksena** vai et. (huomaa, että voit yhdistää **useita verkkotunnuksia yhteen alialueeseen**).

![Lisää verkkotunnus -modaali sisältävä verkkotunnuksen nimen, sivuston valitsijan ja pääverkkotunnuksen kytkimen kuva](/img/admin/domain-add-modal.png)

Kun olet syöttänyt kaikki tiedot, voit klikata alareunassa olevaa **Lisää olemassa oleva verkkotunnus** -painiketta.

Tämä käynnistää prosessin mukautetun verkkotunnuksen DNS-tiedon varmistamiseksi ja hakemiseksi. Näet myös sivun alalaidassa logit, joiden avulla voit seurata etenemistä. Tämä prosessi voi kestää muutaman minuutin.

Ultimate Multisite v2.13.0 luo automaattisesti sisäisen verkkotunnusrekisterin, kun uusi sivu luodaan isännässä, joka tulisi käsitellä sivuston mukaan määritellyksi verkkotunnukseksi. Jos isäntä on verkoston pääverkkotunnus tai yksi yhteisistä kassaprosessin perusverkkotunnuksista, jotka on konfiguroitu **Sivuston URL** -kenttään, automaattinen kartoitettu verkkotunnusrekisteri ohitetaan, jotta yhteinen perusverkkotunnus pysyy saatavilla jokaiselle sivustolle, joka sitä käyttää.

**Vaihe** tai tila muuttuu **DNS:n tarkistamisesta** (Checking DNS) **Valmiiksi** (Ready), jos kaikki on asetettu oikein.

<!-- Screenshot unavailable: Verkkotunnusrivi, jossa näkyy DNS:n tarkistustila verkkotunnusten listassa -->

<!-- Screenshot unavailable: Verkkotunnusrivi, jossa näkyy Valmis-tila vihreällä tilanindikaattorilla -->

Jos klikkaat verkkotunnusta, voit nähdä sen sisällä olevia joitakin vaihtoehtoja. Katsotaan niitä nopeasti:

![Verkkotunnuksen yksityiskohtainen sivu, jossa on vaiheet, sivu, aktiivinen, pääverkkotunnus ja SSL-kytkimet kuva](/img/admin/domain-edit.png)

**Vaihe:** Tämä vaihe kertoo, missä tilassa verkkotunnuksesi (domain) on. Kun lisäät verkkotunnuksen ensimmäisen kerran, se on todennäköisesti **DNS:n tarkistus** -vaiheessa. Prosessi tarkistaa DNS-tietueet ja vahvistaa niiden olevan oikein. Tämän jälkeen verkkotunnus siirtyy **SSL-tarkistus** -vaiheeseen. Ultimate Multisite tarkistaa, onko verkkotunnuksella SSL-sertifikaatti vai ei, ja luokittelee verkkotunnuksesi joko **Valmis** tai **Valmis (ilman SSL)**.

**Sivusto:** Se alalohko (subdomain), joka liittyy tähän verkkotunnukseen. Kartattu verkkotunnus näyttää tämän tietyn sivuston sisällön.

**Aktiivinen:** Voit kytkeä tämän vaihtoehdon päälle tai pois päältä aktivoitaksesi tai deaktivoitaksesi verkkotunnuksen.

**Onko ensisijainen verkkotunnus?:** Asiakkaillasi voi olla useampia kartattuja verkkotunnuksia jokaiselle sivustolle. Käytä tätä vaihtoehtoa valitaksesi, onko kyseessä ensisijainen verkkotunnus kyseiselle sivustolle.

**Onko turvallinen?:** Vaikka Ultimate Multisite tarkistaa, onko verkkotunnuksella SSL-sertifikaatti vai ei ennen sen aktivoimista, voit valita manuaalisesti ladata verkkotunnuksen SSL-sertifikaatilla tai ilman sitä. Huomaa, että jos verkkosivustolla ei ole SSL-sertifikaattia ja yrität pakottaa sen latautumisen SSL:llä, se saattaa antaa virheitä.

### Mukautetun verkkotunnuksen kartoittaminen alalohkon käyttäjänä

Alalohkon ylläpitäjät voivat myös kartoittaa mukautettuja verkkotunnuksia omalta alalohko-adminin hallintapaneelista.

Ensin sinun on varmistettava, että aktivoit tämän vaihtoehdon **Domain mapping** -asetuksissa. Katso alla olevaa kuvaa.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Voit myös asettaa tai konfiguroida tämän vaihtoehdon **Plan** -tason tai tuoteasetuksissa kohdasta **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Kun jokin näistä vaihtoehdoista on käytössä ja alayksikkö käyttäjälle sallittu määrittää omaa verkkotunnusta, alayksikön käyttäjä näkee **Tilin** -sivun alla olevan metabox-ruudun nimeltä **Alueet**.

<!-- Screenshot unavailable: Domains metabox on subsite Account page with Add Domain button -->

Käyttäjä voi klikata **Lisää alue** -painiketta, jolloin aukeaa modaaliikkuna, jossa on joitakin ohjeita.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Käyttäjä voi sitten klikata **Seuraava vaihe** ja jatkaa omaa verkkotunnuksen lisäämistä. He voivat myös valita, onko kyseessä pääalue vai ei.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Klikkaamalla **Lisää alue** käynnistetään prosessi, jossa varmistetaan ja haetaan omaa verkkotunnuksen DNS-tietoja.

### Alueiden synkronointi (Domain Syncing)

Alueiden synkronointi on prosessi, jossa Ultimate Multisite lisää oma verkkotunnuksesi hostaustilisi lisäalueeksi **jotta alueen kartoitus toimii**.

Alueiden synkronointi tapahtuu automaattisesti, jos jollakin hostauspalveluntarjoajalla on integrointi Ultimate Multisite -ominaisuuteen. Tällä hetkellä nämä hostauspalveluntarjoajat ovat _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ ja _Cpanel._

Kun hostauspalveluntarjoajan integraatio on aktiivinen, Ultimate Multisite voi myös lisätä tehtävän DNS- tai alayksikön luomisesta palveluntarjoajan puoleiseen prosessiin uusille luodulle sivustoille. Jos mitään ei kuuntele kyseistä tehtävää, taustatehtävä ohitetaan välttää tyhjien jonojen merkinnät (no-op queue entries). Kartoitujen alueiden DNS- ja SSL-tarkastukset jatkuvat normaalin aluevaiheen prosessin kautta.

Sinun täytyy aktivoida tämä integraatio Ultimate Multisite -asetuksissa **Integration**-välilehdellä.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

Huomaa, että jos isännöitsijäsi ei ole yllä mainittujen palveluntarjoajien joukossa, **sinun täytyy synkronoida tai lisätä verkkotunnus manuaalisesti** isännöintitilillesi.
