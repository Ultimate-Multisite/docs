---
title: Verojen käsittely
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Verojen käsittely

Ultimate Multisite sisältää verojen keräysmoduulin ydinpluginissamme, joten jos sinun täytyy kerätä myyntiveroja paketeistasi, kokonaisuuksistasi ja palveluistasi, voit tehdä sen helposti ilman lisäosien asentamista.

Euroopassa sijaitseville yrityksille tarjoamme **lisäosan**, joka lisää työkaluja ja ominaisuuksia **ALV**-vaatimustenmukaisuuden parempaan tukemiseen.

Ultimate Multisite ei ilmoita tai tilitä veroja puolestasi viranomaisille; autamme sinua vain keräämään asianmukaiset verot tapahtuman yhteydessä. **Sinun täytyy silti tilittää verot itse.**

## Verojen keräämisen käyttöönotto

Verojen kerääminen ei ole oletuksena käytössä. Ottaaksesi sen käyttöön sinun täytyy siirtyä kohtaan **Ultimate Multisite > Asetukset > Verot** ja ottaa käyttöön Ota verot käyttöön -asetus.

![Ota verot käyttöön -kytkin Veroasetukset-sivun yläosassa](/img/config/settings-taxes-enable.png)

Tässä on koko näkymä veroasetussivusta:

![Veroasetusten koko sivu](/img/config/settings-taxes-full.png)

Voit myös tarkastella yksittäisten tuotteiden veroasetuksia:

![Tuotteiden veroasetukset](/img/config/settings-taxes.png)

### Veroton vs. verollinen

Oletuksena kaikki tuotteidesi hinnat ovat verottomia, mikä tarkoittaa, että verot **eivät sisälly** tuotteen hintaan. Jos määritämme, että asiakkaan tulee maksaa veroja tietystä ostosta, lisäämme verot **välisumman päälle**.

Jos haluat, että verot sisältyvät tuotteesi hintaan, voit tehdä sen ottamalla käyttöön **Sisältyvä vero** -asetuksen.

![Sisältyvä vero -kytkinrivi Ota verot käyttöön -asetuksen alla](/img/config/settings-taxes-inclusive.png)

Älä unohda **tallentaa** tekemiäsi muutoksia.

###

## Verokantojen luominen

Kun olet ottanut verojen keräämisen käyttöön, sinun täytyy luoda verokantoja tietyille sijainneille verokantojen muokkaimellamme.

Pääset muokkaimeen napsauttamalla **Hallitse verokantoja** -painiketta Veroasetukset-sivun sivupalkissa.

![Hallitse verokantoja -linkki asetussivun Verokannat-paneelissa](/img/config/settings-taxes-manage-rates.png)

Verokantojen muokkaussivulla voit lisätä uusia verokantoja napsauttamalla **Lisää uusi rivi** -painiketta.

![Verokantojen muokkaustaulukko, jonka yläosassa on Lisää uusi rivi -painike](/img/config/tax-rates-editor.png)

Sinun täytyy antaa jokaiselle verokannalle **otsikko** (käytetään laskuissa). Sen jälkeen voit valita **maan** (pakollinen), **osavaltion/alueen** ja **kaupungin** (molemmat valinnaisia), joissa tätä veroa veloitetaan. Lisää lopuksi **verokanta prosentteina**.

### Verokategoriat

Voit myös luoda useita verokategorioita, jotta voit lisätä erilaisia verokantoja erilaisille tuotteille.

Napsauta **Lisää uusi verokategoria** , kirjoita sitten kategorian nimi ja paina **Luo**.

![Lisää uusi verokategoria -painike verokantojen muokkaimen yläosassa](/img/config/tax-categories-add.png)

![Verokategorian nimi -syöttökenttä kategorian luontimodaalissa](/img/config/tax-categories-create-modal.png)

Selaa kategorioita napsauttamalla **Vaihda** ja valitsemalla kategoria, johon haluat lisätä uusia veroja.

![Vaihda-pudotusvalikkopainike verokategorioiden vaihtamista varten](/img/config/tax-categories-switch.png)

![Verokategorian valitsin -pudotusvalikko, jossa näkyvät käytettävissä olevat kategoriat](/img/config/tax-categories-select.png)

Voit asettaa tietyn tuotteen verokategorian siirtymällä **Tuotteen muokkaussivulle** ja sitten Verot-välilehdelle.

![Tuotteen verot -välilehti, jossa on verokategoria ja veronalainen-kytkin](/img/config/product-taxes.png)

Samalla näytöllä voit poistaa **Onko veronalainen?** -kytkimen käytöstä, jotta Ultimate Multisite tietää, ettei sen tule kerätä veroja kyseisestä tuotteesta.

## Euroopan ALV-tuki

Kuten aiemmin mainittiin, meillä on saatavilla lisäosa EU:ssa oleville asiakkaille, joilla on Euroopan ALV-säädöksistä johtuvia lisävaatimuksia.

ALV-työkalumme auttavat muutamassa tärkeässä asiassa:

  * EU:n ALV-kantojen helppo lataaminen;

  * ALV-numeron kerääminen ja validointi – sekä käännetty verovelvollisuus ALV-vapaille tahoille (kuten yrityksille, joilla on voimassa olevat ALV-numerot);

Asentaaksesi tämän lisäosan siirry kohtaan **Ultimate Multisite > Asetukset** ja napsauta sitten **Tarkista lisäosamme** -sivupalkkilinkkiä.

![Asetussivun sivupalkki, jossa on Tarkista lisäosamme -linkki](/img/config/settings-taxes-addons-link.png)

Sinut ohjataan lisäosasivullemme. Siellä voit etsiä **Ultimate Multisite ALV -lisäosan** ja asentaa sen.

<!-- Kuvakaappaus ei saatavilla: ALV-lisäosan ruutu Lisäosat-sivulla -->

<!-- Kuvakaappaus ei saatavilla: ALV-lisäosan Asenna nyt -valintaikkuna -->

Siirry sitten kohtaan **Verkon ylläpito > Lisäosat** ja aktivoi kyseinen lisäosa koko verkossa.

<!-- Kuvakaappaus ei saatavilla: Verkkoaktivointi-toiminto ALV-lisäosalle Lisäosat-sivulla -->

Jos palaat **Veroasetukset-välilehdelle** , näet uusia vaihtoehtoja. Ota uudet ALV-työkalut käyttöön kytkemällä **Ota ALV-tuki käyttöön** -vaihtoehto päälle. Älä unohda **tallentaa** asetuksiasi!

<!-- Kuvakaappaus ei saatavilla: Ota ALV-tuki käyttöön -kytkin Veroasetuksissa lisäosan aktivoinnin jälkeen -->

### ALV-verokantojen noutaminen

Yksi integraatiomme lisäämistä työkaluista on mahdollisuus ladata EU:n jäsenvaltioiden verokannat. Tämä voidaan tehdä käymällä verokantojen muokkaussivulla EU:n ALV-tuen käyttöönoton jälkeen.

Sivun alareunassa näet ALV:n noutovaihtoehdot. Kannan tyypin valitseminen ja **Päivitä EU:n ALV-kannat** -painikkeen napsauttaminen noutaa ja täyttää taulukon automaattisesti kunkin EU:n jäsenvaltion verokannoilla. Sen jälkeen sinun tarvitsee vain tallentaa se.

![Päivitä EU:n ALV-kannat -painike verokantojen muokkaimen alaosassa](/img/config/tax-rates-vat-pull.png)

Voit myös muokata arvoja niiden noutamisen jälkeen. Tee se yksinkertaisesti muokkaamalla tarvitsemaasi taulukon riviä ja napsauttamalla tallennusta uusille arvoille.

### ALV-validointi

Kun ALV-tuki on käytössä, Ultimate Multisite lisää checkout-lomakkeeseen lisäkentän laskutusosoitekentän alle. Kenttä näytetään vain EU:ssa sijaitseville asiakkaille.

<!-- Kuvakaappaus ei saatavilla: ALV-numero-kenttä frontend-checkout-lomakkeessa laskutusosoitteen alla -->

Ultimate Multisite vahvistaa sitten ALV-numeron, ja jos se todetaan kelvolliseksi, käännetyn verovelvollisuuden mekanismia sovelletaan ja kyseisen tilauksen verokannaksi asetetaan 0 %.
