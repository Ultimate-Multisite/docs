---
title: Ensimmäisen tilauskohtaisen tuotteen luominen
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Ensimmäisen tilauskohteen luominen (v2) {#creating-your-first-subscription-product-v2}

_**TÄRKEÄ HUOMIO: Tämä artikkeli on tarkoitettu vain Ultimate Multisite -versio 2.x käyttäjille. Jos käytät versiota 1.x,**_ **katso tätä artikkelia.**

Verkoston käynnistämiseksi ja palveluiden myymisen potentiaalisille käyttäjille aloittamiseksi sinun on oltava erilaisia tilausvaihtoehtoja. Miten luot nämä tuotteet? Millaisia tuotekategorioita voit tarjota? Tässä artikkelissa käsimme läpi kaikki, mitä sinun tulee tietää tuotteista.

## Tuotetyyppi {#product-type}

Ultimate Multisite -palvelussa voit tarjota asiakkailillesi kaksi tuotekategoriaa: **suunnitelmia (plans)** ja **lisäosia (add-ons) (Order Bump)**. Lisäosat voidaan jakaa kahteen tyyppiin: **paketteihin (packages)** ja **palveluihin (services)**. Näemme niiden erot ja erityispiirteet seuraavaksi.

  * **Suunnitelmat (Plans)**: Ultimate Multisite -palvelun perusasiat. Asiakkaalla voi olla jäsenyys vain, jos se on liitetty suunnitelmaan. Suunnitelma tarjoaa asiakkaille yhden tai useamman sivuston (riippuu suunnitelman konfiguraatioista) ja rajoitukset, jotka asetat tuotteen muokkaussivulla.

  * **Paketit (Packages)**: lisäosia, jotka vaikuttavat suoraan Ultimate Multisite -suunnitelmien toiminnallisuuteen. Ne muuttavat rajoituksia tai lisäävät uusia resursseja, plugin-paketteja tai teemoja alkuperäiseen suunnitteluun, jonka asiakas on ostanut. Esimerkiksi perusasuunnitelma saattaa sallia 1000 vierailua kuukaudessa ja voit tarjota paketin, joka laajentaa tämän määrän 10 000:een.

  * **Palvelut (Services)**: lisäosia, jotka eivät muuta Ultimate Multisite -palvelun toiminnallisuutta. Ne ovat tehtäviä, joita toteutat asiakkaasi nimissä suunnitelman lisäksi ostetun palvelun mukaisesti. Esimerkiksi asiakas saattaa ostaa suunnitelman, joka sallii yhden sivuston, ja maksaa myös lisapalvelusta, joka tekee tämän sivuston suunnittelun.

## Tuotteiden hallinta {#managing-products}

Monille monille Ultimate Multisite - (Ultimate Multisite > Products) -välilehti voidaan verrata perinteiseen isännöintiympäristön suunnitelmiin.

Ultimate Multisite -ssä tuotesivun välilehti määrittelee rakenteen ja rajoitukset, jotka koskevat tiettyä tuotetta tai palvelua. Tällaiset rakenteet ulottuvat tuotteen tai palvelun kuvaus-, hinnan, verojen ja käyttöoikeuksien määrittelyyn.

Tämä osio auttaa sinua ymmärtämään Ultimate Multisiten tähän olennaiseen peruspilariin liittyvää.

![Products list page](/img/config/products-list.png)

## Tuotteiden lisääminen {#adding-products}

Mitä se sitten suunnitelma, paketti tai palvelu, joka aloittaa uuden kohteen määrittelyn, sitä käytät **Ultimate Multisite > Products > Add Product** -valikkoa.

![Add Product button](/img/config/product-add-button.png)

Käyttöliittymässä on kaksi pääosiota. Vasemmalla on useita välilehtiä, jotka auttavat tuotteen määrittelyssä, ja oikealla on muutamia osioita, joilla määritetään tuotteen perus hinta, sen aktiivinen tila ja tuotekuva.

![Product edit page overview](/img/config/product-edit-full.png)

### Kuvaus {#description}

Perustietoja tuotteesta voidaan määrittää antamalla tuotenimi ja kuvaus. Nämä tunnisteet näytetään missä tahansa, jossa tuotetiedot ovat tarpeen, kuten suunnitelmien ja hinnoittelun valinnassa, laskuissa, päivityksissä jne.

![Product description section](/img/config/product-description.png)

### Hinnoittelutyyppi {#pricing-type}

Käyttöliittymän oikealla puolella perushinta voidaan määrittää.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite tukee kolmea eri hinnoittelutyyppiä. **Paid** (maksullinen) -vaihtoehto pyytää verkkoadministratorilta tietoa tuotteen hinnasta ja laskutusajankohdasta.

### Hinnasto {#pricing}

Hinnan komponentti määrittelee perushinnan ja laskutusvälin.

![Hinta- ja tallennusosio](/img/config/product-pricing-save.png)

täten esimerkiksi hinta 29,99 dollaria asetuksella 1 kuukaudeksi laskutetaan 29,99 dollaria joka kuukausi. Samoin hinta 89,97 dollaria asetuksella 3 kuukaudeksi laskutetaan kyseinen summa joka neljännesvuosittain.

### Laskutuspyörteet (Billing Cycles) {#billing-cycles}

Laskutuspyörteiden osio kertoo mainitun laskutusvälissä toistuvuusajasta ja ymmärretään yleensä sopimusten tai kiinteiden aikataulujen valossa.

![Hinta- ja tallennusosio](/img/config/product-pricing-save.png)

Esimerkiksi tuotteen hinta 29,99 dollaria välillä 1 kuukausi ja 12 laskutuspyörtettä tarkoittaa, että tuotteesta maksetaan 29,99 dollaria kuukaudessa seuraavien 12 kuukauden ajan. Toisin sanoen tällainen asetuksella luodaan kiinteä hinta-aika 29,99 dollaria kuukaudessa 12 kuukaudelle ja laskutus lakkaa sen jälkeen.

### Kokeilujakso (Trial Period) {#trial-period}

Offer trial -kytkimen käyttäminen mahdollistaa verkkoadministratorin määrittämisen tuotteelle kokeilujakson.

![Hinta- ja tallennusosio](/img/config/product-pricing-save.png)

Kokeilujakson aikana asiakkaat voivat käyttää tuotetta ilman maksua, kunnes kokeilujakso on päättynyt.

### Asetusmaksu (Setup Fee) {#setup-fee}

Voit myös soveltaa asetusmaksun omalle suunnitelmallesi.

![Hinta- ja tallennusosio](/img/config/product-pricing-save.png)

Tämä tarkoittaa, että asiakas maksaa lisäsumman ensimmäisellä maksullaan (lisäksi hinnan suunnitelmaan) sen mukaan, mitä olet määritellyt tällä osiolla oleva maksu.

### Aktiivinen (Active) {#active}

Aktiivinen -kytkin määrittää tehokkaasti, onko tuote saatavilla asiakkaille uusille rekisteröitymislomakkeille.

![Aktiivinen kytkin](/img/config/product-active.png)

Jos tällä suunnitelmalla on olemassa olevia asiakkaita kytkimen poistaminen pois käytöstä estää sen automaattisen poistamisen tulevista rekisteröinnistä. **Olemassa olevat asiakkaat suunnitelmallasi jatkavat laskutusta** kunnes he siirretään uuteen suunnitteluun tai poistetaan suunnitelmasta.

### Tuotekuva {#product-image}

**Upload Image** -painike antaa verkko-administratorille mahdollisuuden käyttää mediaa kirjastoa valitakseen tai lataakseen tuotekuvan.

![Product image section](/img/config/product-image.png)

### Poista {#delete}

**Delete Product** -painike poistaa tuotteen järjestelmästä. Se ilmestyy vasta, kun tuote on julkaistu.

![Delete product section](/img/config/product-delete.png)

Muut poistoista eroaa tästä siinä, että tuote ei sijoitu mihinkään roskakoriin. Siksi kerran poistettu toiminto on peruuttamaton.

### Tuotteen vaihtoehdot {#product-options}

Kun perusluokan tuotetiedot on määritetty, tuotteen vaihtoehdot auttavat verkko-administratoria määrittämään tuotteen erityisiä ominaisuuksia tarkemmin.

#### Yleinen {#general}

**General** -välilehti määrittelee yleiset ominaisuudet tuotteelle, jotka eivät koske muita tuotteeseen liittyviä välilehtiä.

![General tab](/img/config/product-general-tab.png)

Selkeä **product slug** määrittää sen slugin, jolla tuote tunnistetaan URL-osoitteissa ja muissa Ultimate Multisite -alueissa.

Ultimate Multisite tukee useita tuotetyyppejä, kuten Plan (Suunnitelma), Package (Paketti) ja Service (Palvelu). **Product Options** -välilehdet säädellään dynaamisesti riippuen valitusta tuotetyypistä.

**Customer Role** määrittelee roolin, joka asiakkaalle annetaan, kun sivusto luodaan. Tyypillisesti useimmille verkko-administraattoreille kyseessä on Ultimate Multisite oletusrooli tai Administrator. Ultimate Multisite -oletusroolia voidaan asettaa **Ultimate Multisite > Settings > Login & Registration** -kohdassa.

![Asiakkaan rooliasetukset](/img/config/product-customer-role-settings.png)

#### Ylös- ja alaspäivitykset (Up & Downgrades) {#up--downgrades}

Tämä välilehti kertoo, mitkä ylös- ja alaspäivityspolut ovat saatavilla asiakkaalle hänen tietyssä tasossaan.

Tämän käsitteen ymmärtämiseksi mieti esimerkki, jossa erikoistunut Ultimate Multisite -asennus tarjoaa oppimisympäristöratkaisuja asiakkailleen. Tavoitteena on määritellä kolme suunnitelmaa (Perustaso, Plus ja Premium) ja aktiiviset pluginit jokaiselle suunnitelmalle (ohjeita pluginien aktivoimiseen löytyy myöhemmin tästä osiosta).

Jos Ultimate Multisite -asennus palvelee myös yrityssivustoja tai verkkokauppasivustoja, näille suunnitelmille saatetaan tarvita erilaisia plugin-asetuksia.

Tämän vuoksi ei ole haluttavaa eikä ongelmallista sallia eLearning-asiakkaiden siirtyminen verkkokauppa-suunnitelmiin, sillä näiden suunnitelmien hinnoittelu ja rajoitukset eivät välttämättä sovi heille.

Siksi asiakkaan polun rajoittamista ja tapahtumien estämiseksi verkkoadministratori voi määritellä suunnitelmaliikkeen (plan group) ja kyseisen ryhmän sisällä määrittää, mihin suunnitelmiin asiakas voi siirtyä.

![Ylös- ja alaspäivitykset -välilehti](/img/config/product-upgrades.png)

Suunnitelmaliikkeen määritteleminen tapahtuu valitsemalla yhteensopivia suunnitelmia **suunnitelmaluettelosta** (plan group list). **Tuotteen tila** (product order) määrittää, miten suunnitelmat järjestetään ja näytetään alhaisimmasta korkeimpaan.

Ultimate Multisite sisältää myös **order bump** -ominaisuuden, jolla sopivasti voidaan lisätä tuotteita ja palveluita suunnitelmiin. Nämä tarjotaan asiakkaalle lisänäytteinä, joita voi lisätä maksullessa tai päivityksen aikana.

#### Hinnan vaihtelut (Price Variations) {#price-variations}

Hintaeroinnit antavat verkon ylläpitäjän määrittää vaihtoehtoisia hinnoittelutasoja eri kestoihin nähden. Tämä asetuksella on mahdollista tarjota sama tuote kuukausittaisina, neljännesvuotisina, vuosina tai minkä tahansa muun laskutusjakson mukaan. Esimerkiksi voit asettaa tuotteen hintaan 29,99 dollaria/kk ja tarjota alennuksen vuositilaukselle 249,99 dollaria/vuosi.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Hintaeroinnin luomiseksi aseta **Enable Price Variations** -kytkin aktiiviseksi ja napsauta **Add new Price Variation** -painiketta.

![Product price variations](/img/config/product-price-variations.png)

Vaihtoehdon syöttämiseen aseta kesto, jakso ja vaihtoehdon hinta. Lisävaihtoehtoja voi lisätä napsauttamalla painiketta uudelleen.

Esimerkiksi, jos perustuotteen hinta on 29,99 dollaria kuukaudessa, voit lisätä:

  * **3 kuukautta** hintaan 79,99 dollaria (pieni alennus kuukausihintaan verrattuna)
  * **1 vuosi** hintaan 249,99 dollaria (merkittävä alennus vuosittaisen sitoutumisen vuoksi)

:::tip Laskutusjakson kytkimen näyttäminen etupäässä

Hintaeroinnit yksinään eivät lisää kytkintä tai vaihtoehtoa kassalle. Jotta asiakkaat voivat vaihtaa laskutusjaksoja (esim. Kuukausittainen / Vuotuinen), sinun on lisättävä **Period Selection** -kenttä kassaportaasi. Katso [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) saadaksesi vaiheittaiset ohjeet.
:::

#### Verot {#taxes}

**Taxes** (Verot) -välilehti vastaa verotusasetuksia, jotka on määritelty **Ultimate Multisite > Settings > Taxes** -osiossa ja tarkemmin määritellyt veroprosentit. Jotta voit aktivoida verot ja määrittää sovellettavat veroprosentit, katso dokumentaatiota **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Aiemme aiemmassa esimerkissä määritimme paikallisen veroprosentin 7,25 % asiakkaille Kaliforniassa (Yhdysvallat).

Kun veroprosentti on määritetty **Ultimate Multisite > Settings > Manage Tax Rates** -osiossa, se voi valita tuotetasoa kohden.

![Taxes tab](/img/config/product-taxes.png)

Jotta osoitat tuotteen olevan verovelvollinen, aseta **Is Taxable** -kytkin aktiiviseksi ja valitse sovellettava veroprosentti Tax Category -pudotusvalikosta.

#### Sivustomallit (Site Templates) {#site-templates}

Yksinkertaisesti sanottuna sivustomallit ovat täydellisiä WordPress-sivustoja, jotka kopioidaan asiakkaan sivustolle heidän tilaushetkellään.

![Site Templates tab](/img/config/product-site-templates.png)

Verkon ylläpitäjä luo ja konfiguroi mallisivuston normaalin WordPress-sivustona, jossa on aktivoitu ja konfiguroitu teemat, pluginit ja sisältö. Mallisivusto kopioidaan asiakkaalle täsmälleen samana.

Tämä välilehti antaa verkon ylläpitäjälle mahdollisuuden määrittää mallisivustojen käyttäytymisen uuden tilaushetken yhteydessä. Käyttääksesi mallisivustoja tähän suunnitelmaan, aseta **Allow Site Templates** -kytkin aktiiviseksi.

Kun **Allow Site Templates** on poistettu käytöstä, asiakkaat eivät voi valita malleja, vaikka ostoslomake, jaettava linkki tai URL-parametri tekisi malleista mahdollisiksi saatavilla. Ultimate Multisite pakottaa tämän rajan nyt takaisinvaroituksella (fallback chain) saatavilla olevien pääsykohtien kautta: ensin tarkistetaan suunnitelman asetukset, sitten ostoslomakkeen malliasetukset ja lopuksi valitut tai URL-päässä annetut mallit. Tämä pitää suunnitelman rajoitukset johdonmukaisina ja estää mallien ilmestymisen niille tuotteille, jotka eivät niiden tarjoa.

**site template selection mode** määrittää mallisivustojen käyttäytymisen tilausprosessin aikana.

Olet **D**efault`-asetus seuraa kassaprosessin vaiheita. Jos verkkohallitsija on määritellyt mallivalintavaiheen kassaprosessissa ja se on määritelty malleilla, tämä asetuksen arvo noudattaa kyseisen kassavaiheen asettamia ohjeita.

**A**ssign Site Template`-asetus pakottaa valitsemasi mallin valinnan. Tämän seurauksena kassaprosessin kaikki mallivalintavaiheet poistetaan.

Viimeiseksi **C**hoose Available Site Templates`-asetus ylivaltaa kassavaiheen määrittelemiä malleja ja käyttää sen sijaan tässä asetuksessa valittuja malleja. Voit myös määrittää esivalitun mallin auttaaksesi asiakasta valinnassa.

Lopulta, jos verkkohallitsija haluaa mallivalinnan tapahtuvaksi kassavaiheissa, ' _default_ '-asetus riittää. Vaihtoehtoisesti poistaaksesi ja lukitaksesi mallivalinnan sekä delegoidaksesi valinnan suunnitelmaasetuksiin voit käyttää ' _assign new template_ ' tai ' _choose available site templates_ '-vaihtoehtoja.

#### Sites {#sites}

**Sites**-välilehti on osa Ultimate Multisite'n rajoitusten toiminnallisuutta.

![Sites tab](/img/config/product-sites.png)

Tämä asetuksen määrittää maksimimäärän sivustoja, joita asiakas voi luoda jäsenyyteensä puitana.

Rajoituksia aktivoimiseksi aseta **limit sites** -kytkin aktiiviseen tilaan ja määritä maksimimäärä sivustoista **site allowance** -kenttään.

#### Visits {#visits}

**Visits**-välilehti on osa Ultimate Multisite'n rajoitusjärjestelmää. Tämä asetuksen avulla voidaan laskea ja sen jälkeen rajoittaa yksilöllisten vierailijoiden määrää asiakkaan sivustolle.

![Visits tab](/img/config/product-visits.png)

Markkinointitilanneverkosta ylläpitäjät voivat käyttää tätä asetusta keinoena kannustaa asiakkaita päivittämään suunnitelmaansa, kun rajoitukset on saavutettu. Tämä asetus voi myös auttaa verkko-yläpitäjää hillitsemään ja estämään liiallista liikennettä sivustoille järjestelmän resurssien säilyttämiseksi.

Tämän ominaisuuden käytettäväksi aseta **limit unique visits** -kytkin aktiiviseksi ja määrittele maksimimäärä ainutlaatuisille vierailijoille **unique visits quota** -kenttään.

Kun tämä rajoitus on saavutettu, Ultimate Multisite lopettaa asiakkaan sivuston palvelemisen sen sijaan, että se näyttäisi viestin rajojen ylittäneestä tilanteesta.

#### Käyttäjät {#users}

Ultimate Multisiten 'Users' -rajoitukset antavat verkko-yläpitäjälle mahdollisuuden asettaa rajoituksia käyttäjien määrään, jotka voidaan luoda ja määrittää rooleihin.

![Users tab](/img/config/product-users.png)

Rajoitusten ominaisuuksien aktivoimiseksi aseta **limit user** -kytkin aktiiviseksi liukaisemalla sitä oikealle.

Jokaisen rajoitettavan roolin kohdalla aseta kytkin sen viereen aktiiviseksi ja määrittele maksimirajoitus asianmukaisessa kentässä.

#### Post-tyypit {#post-types}

**Post Types** -välilehti antaa verkko-yläpitäjälle mahdollisuuden asettaa yksityiskohtaisia rajoituksia WordPressin laajaan post-tyyppien joukkoon.

![Post Types tab](/img/config/product-post-types.png)

WordPressin rakenteen vuoksi postit ja post-tyypit ovat merkittävä osa sen ydintoiminnallisuutta, ja siksi Ultimate Multisiten rajoitusjärjestelmä on suunniteltu auttamaan verkko-yläpitäjää rajoitusten luomisessa ja ylläpitämisessä.

Tämän rajoitusalustan aktivoimiseksi aseta **limit post types** -kytkin aktiiviseksi liukaisemalla sitä oikealle.

Seuraavaksi jokaiselle posttyyppille, jolle haluat rajoittaa sisällön määrää, kytke se päälle liukulla oikealle ja määritä maksimiarvo asianomaisessa kentässä.

#### Levydiskkapas {#disk-space}
**Disk Space** -välilehti antaa verkon ylläpitäjille mahdollisuuden rajoittaa asiakkaiden kuluttamaan tilaa.

![Disk Space tab](/img/config/product-disk-space.png)

Tyypillisesti WordPress multisite -ympäristössä yd tiedostot ovat yhteisiä kaikille sivustoille, ja yksittäiset kansiot media-tiedostoille ja latauksille, joihin nämä asetukset ja rajoitukset koskevat.

Levyn käytön rajoittamisen aktivoimiseksi aseta **limit disk size per site** -kytkin aktiiviseen tilaan liukulla oikealle.

Seuraavaksi määritä maksimiarvo megatavussa kenttään **disk space allowance**.

#### Custom Domain (Mukautettu verkkotunnus) {#custom-domain}
Kytkemällä tämän vaihtoehdon voit sallia mukautettujen verkkotunnusten käyttö nimenomaan tälle suunnitelmalle.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes (Teemat) {#themes}
**Themes** -välilehti tuoteasetuksissa antaa verkko-yllläpitäjälle mahdollisuuden tehdä teemat saataville asiakkaiden valitsemiseen ja valinnaisesti pakottaa teeman tila.

![Themes tab](/img/config/product-themes.png)

_**Huomautus: Jotta teemoja voidaan tarjota asiakkaille, ne on oltava verkko-yllläpitäjän toimesta käytössä.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**Visibility** -vaihtoehto määrittää, näkyykö tämä teema asiakkaalle heidän sivustollaan **Appearance > Themes** -välilehdellä vai ei. Tämän vaihtoehdon asettaminen **Hidden** (Piilotettu) poistaa teeman näkyvistä ja rajoittaa siten sen valitsemisen ja aktivoimisen kykyä.

![Themes tab](/img/config/product-themes.png)

**Behavior** -valinta antaa verkko-yllläpitäjälle määrittää teeman tila asiakasosion luomisen yhteydessä.

Saat ini teemä on saatavilla asiakkaalle itsensä aktivoimiseksi. Sen sijaan **Ei Saatavilla** -tilassa poistetaan asiakkaalta mahdollisuus aktivoimaan teema. Viimeisenä vaihtoehtona, **Pakota Aktivaatio** -vaihtoehto pakottaa teeman valinnan ja aktivoimisen siten asettaen sen oletukseksi sivuston luomisen yhteydessä.

#### Plugins {#plugins}

Samankaltaisesti Teemojen välilehden tavoin Ultimate Multisite antaa verkkoadministratorille määrittää pluginien näkyvyyden asiakkaille sekä niiden tilan uuden sivuston luomisessa.

![Plugins tab](/img/config/product-plugins.png)

**Näkyvyys** -pudotusvalikko mahdollistaa joko pluginin näyttämisen tai piilottamisen asiakkaalle, kun sitä tarkastellaan heidän sivustolla Pluginit-valikon vaihtoehdolla.

Verkkoadministrator voi muokata pluginien käyttäytymistä entisestään hyödyntämällä käyttäytymisen pudotusvalikossa olevia vaihtoehtoja.

![Plugins tab](/img/config/product-plugins.png)

**Oletus** -valinta kunnioittaa sivustotyyppissä asiakkaalta valittua pluginin tilaa. Siten ne pluginit, jotka on aktivoitu mallissa, pysyvät aktivoituneina, kun mallia kopioidaan asiakkaan sivustolle.

**Pakota Aktivaatio** asettaa pluginin aktiiviseksi tilaksi sivuston luomisen yhteydessä ja päinvastoin **Pakota Inaktivointi** poistaa pluginin aktiivisuuden sivuston luomisen yhteydessä. Molempien näiden tilanteiden jälkeen asiakas voi muuttaa pluginin tilaa manuaalisesti WordPress Pluginit -valikon kautta.

Asetus **Force Activate & Lock** -asetus on samalla tavalla toimii, mutta estää asiakkaan muuttamasta pluginin tilaa. Siksi Force Activate ja Lock -asetuksen asettaminen pakottaa pluginin aktiiviseen tilaan ja estää asiakasta poistamasta sen aktiivisuudesta. Samoin **Force Inactivate & Lock** -asetus pakottaa pluginin passiiviseen tilaan ja estää käyttäjää aktivoimasta pluginia.

Verkkoadministrator voisi harkita Force Activate & Lock ja Force Inactivate & Lock -asetuksia yhdessä sivuston mallipohjien kanssa pluginina, ja nämä asetukset voivat vaikuttaa mallipohjissa oleviin pluginin tiloihin, jos niitä valitaan.

#### Asetusten nollausrajoitukset {#reset-limitations}

**Reset Limitations** -välilehti nollaa kaikki tuotteeseen määritetyt räätälöidyt rajoitukset. Rajoitusten nollaamiseksi napsauta **reset limitations** -painiketta.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Toiminnon vahvistamiseksi liukua **confirm reset** -kytkimen aktiiviseen tilaan oikealla ja napsauta **reset limitations** -painiketta.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Tuotteen muokkaaminen, kopioiminen tai poistaminen {#edit-duplicate-or-delete-product}

Olemassa olevia tuotteita voi muokata, kopioida tai poistaa siirtyäkseen **Ultimate Multisite > Products** -valikkoon ja viet sen olemassa olevaa tuotenimeä hiiren osoittimella.

![Product hover actions](/img/config/product-hover-actions.png)
