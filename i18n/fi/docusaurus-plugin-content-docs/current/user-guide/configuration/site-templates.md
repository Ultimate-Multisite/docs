---
title: Sivustokuviointi
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Sivustemplatit (v2)

_**HUOMIO: Tämä artikkeli viittaa Ultimate Multisite -versioon 2.x. Jos käytät versiota 1.x,**_ **katso tätä artikkelia.**_

Tavoitteenamme luodessamme premium-verkkoa Ultimate Multisite -ohjelmistolla on automatisoida mahdollisimman monta prosessia samalla kun annamme asiakkaille joustavuutta ja erilaisia vaihtoehtoja valittavaksi sivustojen luomisen yhteydessä. Yksi helppotavallinen tapa saavuttaa tämä tasapaino on käyttää Ultimate Multisite Site Templates -ominaisuutta.

## Mitä Sivustotemplaatti on? {#what-is-a-site-template}

Nimen mukaisesti Sivustotemplaatti on pohja-sivu, jota voidaan käyttää perusnäkelmänä uuden sivuston luomiseen verkossasi.

Tämä tarkoittaa, että voit luoda perussivuston, aktiivisia lisäosia (plugin) asentaa, valitse aktiivisen teeman ja muokata sitä millä tahansa haluamallasi tavalla. Kun asiakas luo uuden tilin, hän ei saa oletus WordPress-sivustoa, jossa ei ole merkityksellistä sisältöä, vaan hän saa kopion perussivustostasi, jossa kaikki muokkauksesi ja sisällöt ovat jo valmiina.

Tuo kuulostaa upealta, mutta miten luon uuden sivustotemplaatin? Se on mahdollisimman yksinkertaista.

## Uuden Sivustotemplan luominen ja muokkaaminen {#creating-and-editing-a-new-site-template}

Sivustotemplaatit ovat vain normaaleja sivustoja verkossasi. Uuden mallin luomiseen voit siirtyä yksinkertaisesti **Network Admin > Ultimate Multisite > Sites > Add Site**.

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Tämä avaa modaaliikkun, jossa kysytään **Sivuston nimi, Sivuston osoite/polku** ja **Sivustotyyppi**. **Sivustotyypin** pudotusvalikossa varmista, että valitset **Site Template** *.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Voit myös lisätä asiakasnäkyvän kuvauksen selittämään, mitä mallissa sisältyy:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Lomakkeen lomakkeen alareun huomaat **Copy Site** -kytkinvaihtoehdon. Tämä mahdollistaa uuden sivustotemppelin luomisen olemassa olevan sivustotemppelin pohjalta, jotta voit säästää aikaa sen sijaan, että luot empaattisesti tyhjästä.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Sivustotemppelin sisällön muokkaaminen {#customizing-the-contents-of-a-site-template}

Sivustotemppelin muokkaamiseen riittää siirtymällä sen hallintapaneeliin ja tekemällä tarvitsemasi muutokset. Voit luoda uusia postauksia, sivuja, aktiivisia plugin-lisäosia ja vaihtaa aktiivista teemaa. Voit jopa mennä Customizeriin ja muuttaa kaikkia erilaisia räätälöintamahdollisuuksia.

![Site template edit interface](/img/config/site-template-edit.png)

Kaikki tämä data kopioidaan siirtyy, kun asiakas luo uuden sivuston kyseisen Sivustotemppelin perusteella.

### Edistyneet vaihtoehdot {#advanced-options}

Jos sinulla on vähän kokemusta kustomoin kodin (custom coding), voit hyödyntää hakua ja korvaa API:a automaattisesti korvaamaan tietoja uudessa sivustossa sen luomisen jälkeen. Tämä on hyödyllistä esimerkiksi yritysten nimien vaihtamisessa Tietoa-sivulla tai yhteystietojen sähköpostin vaihtamisessa Yhteystietosivulla jne.

### Sivustotemppelien käyttö {#using-site-templates}

Joo, olet luonut useita erilaisia Sivustotemppeleitä eri suunnitteluihin, teemoihin ja asetuksiin. Miten voit nyt tehdä niistä hyödyllisiä verkostollesi?

Perusperiaatteessa sinulla on nyt kaksi lähestymistapaa (ei samanaikaisesti):

  * Liittää yksi Sivustotemppeli jokaisen suunnitelmasi yhteen

**TAI**

  * Anna asiakkaidesi valita sivustotemppeleitä itse rekisteröitymisen aikana.

#### Tila 1: Sivustotemppelin määritys {#mode-1-assign-site-template}

Tässä tilassa asiakkaat eivät voi valita mallia, kun he luovat tilin, vaan sinä määrität, mikä malli tulisi käyttää jokaisessa suunnitelmassasi.

Tämän tekemiseksi sinun täytyy mennä **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Tämä vie sinut **Edit Product** -sivulle. **Product Options** -osiosta löydät välilehden **Site template** ja valitset pudotusvalikosta vaihtoehdon **Assign Site Template**. Tämä avaa listan saatavilla olevista sivumalleista, jolloin voit valita vain yhden mallin, joka on omistettu kyseiselle tuotteelle.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Tila 2: Valitse saatavilla oleva sivumalli {#mode-2-choose-available-site-template}

Tässä tilassa annat asiakkaillesi valinnan rekisteröitysprosessin aikana. He voivat valita eri mallien joukosta, jotka määrittelet tuotteen asetuksissa. Sinulla on mahdollisuus rajoittaa niitä malleja, joista he voivat valita, valitsemallasi tuotteella. Tämä antaa sinulle mahdollisuuden luoda eri mallijoukkoja jokaiselle tuotteelle, mikä on ihanteellista korostamaan erilaisia toimintoja ja ominaisuuksia korkeamman hinta-tuotteen kohdalla.

**Tuotteen muokkaussivulla.** **Tuotevaihtoehtoja** -osiosta löydät välilehden **Sivuston malli** ja valitse pudotusvalikosta vaihtoehto **Valitse saatavilla olevat sivustomallit**. Tämä avaa listan saatavilla olevista sivustomalleista, ja voit valita sen sivustomallin, joka haluat olla käytettävissä. Voit tehdä tämän valitsemalla sen käyttäytymisen: **Saatavilla** (Available), jos haluat sivustomallin sisällytettyä listalle. **Ei saatavilla** (Not Available), jos haluat, että sivustomalli ei näy vaihtoehtona. Ja **Ennakkovalittu** (Pre-selected), jos haluat yhden luetelluista sivustomalleista olevan oletusvalituksi.

![Valitse saatavilla olevat sivustomallit käyttäytymisvaihtoehdoilla](/img/config/product-site-templates.png)

### Oletusasetus: Sivustomallin valinta kassaportaalissa {#default-mode-site-template-selection-on-the-checkout-form}

Jos haluat kaikkien sivustomalliesi saatavilla rekisteröinnin aikana, tai et halua tehdä ylimääräistä työtä jokaisen luomasi tuotteen alla olevien sivustomallien määrittämisestä tai spesifioimisesta. Silloin voit asettaa sivustomallin valinnan **Kassaportaalisi** alle. Tekemiseksi siirry kohtaan **Ultimate Multisite > Checkout Forms** ja klikkaa **Muokkaa** (Edit) haluamasi lomakkeen kohdalla.

Tämä avaa **Kassaportaalin muokkaus** (Edit Checkout Form) -sivun. Etsi kenttä **Mallin valinta** (Template Selection) ja klikkaa sen alla **Muokkaa**.

Avautuu modaaliikkuna. Kentässä **Mallit** (Template Sites) voit valita ja listata kaikki ne sivustomallit, jotka haluat olevan saatavilla rekisteröinnin aikana. Täällä määrittelemäsi sivustomallit ovat käytettävissä riippumatta siitä, mitä tuotetta käyttäjä on valinnut.

![Mallin valintakenttä kassaportaalin muokkaajassa](/img/config/checkout-form-template-step.png)

Etusivulla asiakkaat näkevät mallivalitsijan kassalla ja voivat valita aloitusdesignin uudelle sivustolleen.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Sivustemojen mallivaihtoehdot {#site-template-options}

On saatavilla muita sivustomalleja toimintoja, joita voit käynnistää tai sammuttaa Ultimate Multisite -asetuksissa.

![Sivustomallin vaihtoehdot Ultimate Multisite -asetuksissa](/img/config/settings-sites-templates-section.png)

#### Mahdollista mallien vaihtaminen {#allow-template-switching}

Tämän vaihtoehdon kytkeminen antaa asiakkaille mahdollisuuden vaihtaa valitsemaansa mallia rekisteröitysprosessin aikana, kun tili ja sivusto on luotu. Tämä on hyödyllistä asiakkaan näkökulmasta, sillä se mahdollistaa heidän uudelleenvalitsemisen mallin, jos myöhemmin huomataan, että alkuperäinen valinta ei ollut paras vaihtoehto heidän erityistarpeisiinsa.

#### Mahdollista käyttäjien käyttää sivustoa malleina {#allow-users-to-use-their-site-as-templates}

Koska alayksikköjen käyttäjät ovat käyttäneet aikaa oman sivustonsa rakentamiseen ja suunnitteluun, he saattavat haluta kopioida sen ja käyttää sitä yhdeksi saatavilla olevista sivustomalleista uuden alayksikön luomisen yhteydessä verkostossasi. Tämä vaihtoehto mahdollistaa tämän.

#### Tiedostojen kopiointi mallin duplikaatiossa {#copy-media-on-template-duplication}

Tämän vaihtoehdon valitseminen kopioi mallisivustolle ladatut tiedostot uuteen sivustoon luodessa. Tätä voi ylittävä jokaisella suunnitelmalla.

#### **Estä hakukoneet indeksoimasta sivustomalleja** {#prevent-search-engines-from-indexing-site-templates}

Tässä artikkelissa käsitellyt sivustomallit ovat tyylipiirrettä, mutta ne ovat silti osa verkostoasi, mikä tarkoittaa, että hakukoneiden on edelleen mahdollista löytää ne. Tämä vaihtoehto antaa sinulle piilottaa sivustomallit niin, että hakukoneet voivat indeksoida ne.

## Sivustomallien täyttäminen automaattisella haku- ja korvauksella {#pre-populating-site-templates-with-auto-search-and-replace}

Ultimate Multisiten toiminnon yksi voimakkaimmista on mahdollisuus lisätä vapaasti tekstiä, värejä ja valittavia kenttiä rekisteröintilomakkeeseen. Kun olemme keränneet kyseisen datan, voimme käyttää sitä sisällön täyttämiseen tiettyjen sivustotemojen osiin. Sitten, kun uusi sivu julkaistaan, Ultimate Multisite korvaa paikkamerkit rekisteröinnissä syötetyllä todellisella tiedolla.

Esimerkiksi jos haluat saada asiakkaasi yrityksen nimen rekisteröinnin aikana ja automaattisesti sijoittaa yrityksen nimen etusivulle. Sinun on lisättävä paikkamerkit sivustotemallesi etusivulle, kuten kuvassa alla (paikkamerkkejä tulisi ympäröidä kaksoisruuduilla - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Sen jälkeen voit yksinkertaisesti lisätä vastaavan rekisteröintikentän kassalle datan keräämistä varten. Sama kassakomponentti, jota käytetään mallin valintaan, antaa sinun sijoittaa räätälöityjä kenttiä mallivalitsimen viereen:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Asiakkaasi voi täyttää kyseisen kentän rekisteröinnin aikana.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite korvaa sitten paikkamerkit automaattisesti asiakkaalta annetulla datalla.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Paikallisten paikkamerkkien ongelman ratkaiseminen {#solving-the-template-full-of-placeholders-problem}

Kaikki tämä on loistavaa, mutta me kohtaamme kauniin ongelman: nyt sivustotemallimme – joita asiakkaat voivat vierailla – ovat täynnä kauniita paikkamerkkejä, jotka eivät kerro mitään.

Tämän ratkaisemiseksi tarjoamme vaihtoehdon asettaa paikkamerkkeihin väärät arvot, ja käytämme näitä arvoja etsimään ja korvaamaan niitä mallisivustoilla samalla kun asiakkaat vierailevat.

Voit päästä käsiksi mallinpaikkamerkkien muokkaimeen siirtyä **Ultimate Multisite > Settings > Sites** -sivulle, ja sieltä sivupalkista klikkaamalla linkkiä **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Tämä vie sinut paikkamerkkien sisältömuokkaimeen, josta voit lisätä paikkamerkkejä ja niihin liittyvää sisältöäsi.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
