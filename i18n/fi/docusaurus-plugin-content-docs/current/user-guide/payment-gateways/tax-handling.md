---
title: Verot käsittely
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Verojen käsittely

Ultimate Multisite -lisäosa sisältää verojen keräämisen moduulin ytimeenme rakennettuna, joten jos tarvitset myyntiveroja suunnitelmiisi, paketteihisi ja palveluihisi, voit tehdä sen helposti ilman lisäosia.

Euroopassa sijaitseville yrityksille tarjoamme **lisäosan**, joka lisää työkaluja ja ominaisuuksia parempaan **arvonlisäveron (VAT)** noudattamisen tukemiseen.

Ultimate Multisite ei jätä tai maksa veroja puolestasi hallitukselle; me autamme sinua vain keräämään asianmukaiset verot tapahtuman yhteydessä. Sinun on silti maksettava verot itse.

## Verojen mahdollistaminen

Verojen kerääminen ei ole oletuksena käytössä. Sen aktivoimiseksi sinun täytyy mennä **Ultimate Multisite > Asetukset > Verot** ja kytkeä päälle "Enable Taxes" -asetus.

![Verojen aktivointikytkin verojen asetussivun yläosassa](/img/config/settings-taxes-enable.png)

Tässä on koko näkymä verojen asetussivulta:

![Verojen asetukset koko sivu](/img/config/settings-taxes-full.png)

Voit myös tarkastella yksittäisten tuotteiden verotilauksia:

![Tuotteiden verotilaukset](/img/config/settings-taxes.png)

### Verotus poissuljettu vs. Verotus sisältynyt

Oletuksena kaikki tuotteidesi hinnat ovat verojen ulkopuolella, mikä tarkoittaa, että verot **eivät ole sisällytetty** tuotteen hintaan. Jos päädymme päätelmään, että asiakkaan tulisi maksaa veroja tietystä ostoksesta, lisätään verot **summan päälle**.

Jos haluat verojen sisällyttämisen tuotteen hintaan, voit tehdä sen aktivoimalla "Inclusive Tax" -asetuksen.

![Veron sisällyttäminen kytkin Enable Taxes -asetuksen alapuolella](/img/config/settings-taxes-inclusive.png)

Älä unohda **tallentaa** tekemäsi muutokset.

###

## Verotason luominen

Kun olet aktivoimassa verojen keräämistä, sinun on luotava verotasoja tiettyihin sijainteihin käyttämällä verotasoeditoria.

Voit päästä editoriin klikkaamalla sivupalkissa verovelon asetusten sivun **Hallinnoi verotasoja** -painiketta.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Verotasoeditorisivulla voit lisätä uusia verotasoja klikkaamalla **Lisää uusi rivi** -painiketta.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Sinun täytyy antaa jokaiselle verotasolle **otsikko** (käytetään laskuissa). Sen jälkeen voit valita **maan** (pakollinen), **maan**, ja **kaupungin** (molemmat valinnaisia), jossa tämä verotus veloitetaan. Lopuksi lisää **veroprosentti**.

### Verotyyppit
Voit myös luoda useita verotyyppejä, jotta voit lisätä eri verotasoja eri tuotteille.

Klikkaa **Lisää uusi verotyyppi** -painiketta, kirjoita tyyppisi nime ja paina **Luo**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Tyypeittäin selaamaan voit klikata **Vaihtoehto** ja valita tyypin, johon haluat lisätä uusia verotasoja.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Voit asettaa tietyn tuotteen verotyyppiä siirtyä **Tuotteen muokkaussivulle** ja sitten **Verot** -välilehdelle.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Samaa ruudulla voit kytkeä pois päältä **Onko verotettava?** -kytkimen, jotta Ultimate Multisite tietää, että se ei veloita verotietoja kyseisestä tuotteesta.

## Euroopan arvonlisäveron (VAT) tuki

Kuten aiemmin mainittu, meillä on lisäosa asiakkaille EU:n maissa, joilla on lisävaatimuksia eurooppalaisen arvonlisäveron säännösten vuoksi.

Arvonlisäveron työkalumme auttavat muutamassa tärkeässä asyylissä:

  * EU-arvonlisäveroprosenttien helppo lataaminen;

  * Arvonlisänumeroiden kerääminen ja validointi – sekä kääntövero (reverse charging) arvonlisäveroilta vapaista yrityksistä (kuten yrityksille, joilla on kelvollisia arvonlisänumeroita).

Lisäosan asennusta varten siirry **Ultimate Multisite > Settings** -sivulle ja napsauta sitten sivupalkin linkkiä **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Sinut ohjataan lisäosan sivuille. Siellä voit etsiä **Ultimate Multisite VAT add-on** -lisäosan ja asentaa sen.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Sitten siirry **Network Admin > Plugins** -sivulle ja aktivoi se lisäosa koko verkossa.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Jos palaat takaisin **Tax Settings** -välilehdelle, näet uusia vaihtoehtoja saatavilla. Kytke päälle **Enable VAT Support** -vaihtoehdon aktivoimalla uudet arvonlisäveron työkalut. Älä unohda **tallentaa** asetuksesi!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Arvonlisäveroprosenttien haku

Yksi työkaluista, jonka integrointi lisää, on kyky ladata arvonlisäveroprosentit EU:n jäsenmaiden osalta. Tämä voidaan tehdä vierailemalla veroprosenttien muokkaussivulla sen jälkeen, kun olet aktivoimassa EU VAT Supportia.

Sivun alare näet arvosopimusten hakuvaihtoehdot (VAT pulling options). Valitsemalla verotason tyyppiä ja napsauttamalla **Update EU VAT Rates** -painiketta taulukko avautuu ja täytetään automaattisesti EU:n jokaisen jäsenmaan verokertoimilla. Sen jälkeen sinun tarvitsee vain tallentaa muutokset.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Voit myös muokata arvoja hakemisen jälkeen. Tekemiseksi riittää, että muokkaat tarvitsemasi taulukon riviä ja napsautat tallentaaksesi uudet arvot.

### VAT-vahvistus (VAT Validation)

Kun VAT-tuki on käytössä, Ultimate Multisite lisää lisäkentän kassaportaaliin maksutietojen kentän alle. Tämä kenttä näkyy vain EU:n asukkaille.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite vahvistaa sen jälkeen VAT-numeron ja jos se palaa kelvolliseksi, käänteinen velvoitteen mekanismi (reverse charge mechanism) sovelletaan ja verotaso asetetaan 0 prosenttiin kyseiselle tilaukselle.
