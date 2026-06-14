---
title: Rekisteröintilomakkeen muokkaaminen
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Rekisteröintolomakkeen muokkaaminen

Jotta verkostosi näyttäisi ainutlaatuiselta kaikista muista WordPress-alustalla rakennetuista SaaS-palveluista, Ultimate Multisite antaa sinun räätälöidä rekisteröitymispainikkeesi ja sisäänkirjautumispainikkeesi ominaisuudella **Checkout Forms**.

Vaikka ne ovat helppo tapa kokeilla erilaisia lähestymistapoja uuden asiakkaan konversioon pyrkivän, niitä käytetään pääasiassa henkilökohtaisten rekisteröitymislomakkeiden luomiseen. Tässä artikkelissa otamme sinulle esimerkin siitä, miten voit tehdä sen.

## Kirjautumispainikkeet ja rekisteröitymisivut:

Ultimate Multisite -asennuksen jälkeen se luo automaattisesti räätälöidyt kirjautumis- ja rekisteröitymissivut pääsivullesi. Voit muuttaa näitä oletus-sivuja milloin tahansa siirtyäksesi **Ultimate Multisite > Settings > Login & Registration** -sivulle.

![Kirjautumisen ja rekisteröinnin asetussivu](/img/config/settings-general.png)

Tässä on koko näkymä kirjautumisen ja rekisteröitymisen asetussivusta:

![Kirjautumisen ja rekisteröitymisen asetusten kokonäkymä](/img/config/settings-login-registration-full.png)

Katsotaanpa kerralla niitä vaihtoehtoja, joita voit muokata **Login & Registration** -sivulla:

  * **Enable registration (Rekisteröitymisen salliminen):** Tämä vaihtoehto mahdollistaa tai estää rekisteröinnin verkostossasi. Jos se on pois päältä, asiakkaat eivät voi rekisteröity eikä tilata tuottejasi.

  * **Enable email verification (Sähköpostivahvistuksen salliminen):** Jos tämä vaihtoehto on päällä, ilmaisella tai kokeilujakson kanssa maksullisella suunnitelmalla tilaavat asiakkaat saavat vahvistussähköpostin ja heidän on klikattava vahvistuslinkki sivustonsa luomiseksi.

* **Oletusrekisteröintisivu:** Tämä on oletussivu rekisteröitymiseen. Tämän sivun tulee julkaista verkkosivustollasi ja siinä täytyy olla rekisteröintilomake (jota kutsutaan myös ostoskori-/tilauslomakkeeksi) – jonne asiakkaat tilaavat tuotteidesi. Voit luoda kuinka monta rekisteröintisivua ja tilauslomaketta haluat, mutta muista lisätä tilauslomakkeen shortcode rekisteröintisivulle, jos muuten se ei näy.

* **Käytä omaa kirjautumissivua:** Tämä vaihtoehto antaa sinun käyttää räätälöityä kirjautumissivua, joka on erilainen kuin oletuslomake `wp-login.php`. Jos tätä vaihtoehtoa kytketään päälle, voit valita, mikä sivu käytetään sisäänkirjautumiseen **Oletuskirjautumissivu** -vaihtoehdossa (juuri sen alapuolella).

* **Piilota alkuperäinen kirjautumisosoite (`wp-login.php`):** Jos haluat piilottaa alkuperäisen kirjautumisosoitteen, voit kytkeä tämän vaihtoehdon päälle. Tämä on hyödyllistä estämään brute-force -hyökkäyksiä. Jos tämä vaihtoehto on aktiivinen, Ultimate Multisite näyttää 404-virheen, kun käyttäjä yrittää käyttää alkuperäistä `wp-login.php` -linkkiä.

* **Pakota synkroninen sivun julkaisu:** Kun asiakas tilaa tuotteen verkossa, uusi odottava sivu on muunnettava todelliseksi verkko-sivuksi. Julkaisuvaihe tapahtuu Job Queue:n kautta asynkronisesti. Aktivoimalla tämän vaihtoehdon pakotat julkaisun tapahtuvan samassa pyynnössä kuin rekisteröityminen.

Nyt tarkastellaan muita vaihtoehtoja, jotka ovat edelleen relevantteja kirjautumisen ja rekisteröinnin prosessille. Ne löytyvät **Muut vaihtoehdot** -osiosta samalta Kirjautumis- ja rekisteröintisivulta:

* **Oletusrooli:** Tämä on rooli, jonka asiakkaat saavat omalle verkkosivulle rekisteröitymisen jälkeen.

* **Ota Jumper:** Tämä mahdollistaa Jumper -lyhyen reitin hallintapaneelissa. Jumper antaa ylläpitäjille nopeasti siirtyä Ultimate Multisite -sivuihin, verkkoobjekteihin ja muihin tuettuihin kohteisiin ilman, että tarvitsee selata jokaisen valikkoa. Voit sammuttaa sen, jos haluat piilottaa tämän nopean navigointityökalun hallintapaneelista.

  * **Lisää käyttäjiä myös pääsivustolle:** Tämän vaihtoehdon aktivoiminen lisää käyttäjän myös verkoston pääsivustolle rekisteröitymisprosessin jälkeen. Jos aktivoit tämän vaihtoehdon, sen alapuolelle ilmestyy myös valinta näiden käyttäjien **oletusroolista** verkkosivustollasi.

  * **Aktivoi useat tilit:** Mahdollista käyttäjille saada tilin eri sivustoilla verkostossasi samalla sähköpostiosoitteella. Jos tämä vaihtoehto on pois päältä, asiakkaat eivät pysty luomaan tiliin muihin verkkosivustoihin, jotka toimivat verkostossasi ja joilla on sama sähköpostiosoite.

Nämä ovat kaikki ne vaihtoehdot, joita voit muokata kirjautumiseen ja rekisteröitymiseen liittyen! Älä unohda tallentaa asetuksesi, kun olet valmis muokkaamaan niitä.

## Useiden rekisteröintilomakkeiden käyttö:

Ultimate Multisite 2.0 tarjoaa kassaprosessin lomakkeen editorin, jonka avulla voit luoda kuinka monta lomaketta haluat, eri kentillä, tuotteilla jne.

Sekä kirjautumissivulle että rekisteröintilomakkeelle on upotettu lyhyitä koodinpätkiä (shortcodes): **[wu_login_form]** kirjautumissivulla ja **[wu_checkout]** rekisteröintilomakkeelle. Voit muokata rekisteröintilomaketta tarkemmin rakentamalla tai luomalla kassalomakkeita.

Tämän ominaisuuden avaamiseksi siirry vasemmassa sivupalkissa olevaan **Checkout Forms** -valikkoon.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Tällä sivulla näet kaikki omistamasi kassalomakkeet.

Jos haluat luoda uuden, klikkaa vain sivun yläreunassa **Add Checkout Form** -painiketta.

Voit valita näistä kolmesta vaihtoehdosta lähtöpisteenä: yksivaiheinen, monivaiheinen tai tyhjä. Valitsessasi voit klikata **Siirry editoriin**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Vaihtoehtoisesti voit muokata tai kopioida jo olemassa olevia lomakkeita klikkaamalla niiden nimen alla olevia vaihtoehtoja. Siellä löydät myös vaihtoehdot lomakkeen lyhyen koodin (shortcode) kopioimiseen tai lomakkeen poistamiseen.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Jos valitset yksivaiheisen tai monivaiheisen, kassalomake on jo esivalmisteltu perusvaiheilla sen toimimiseksi. Sitten voit halutessasi lisätä siihen ylimääräisiä vaiheita.

### Kassalomakkeen muokkaaminen:

Kuten aiemmin mainitsimme, voit luoda kassalomakkeita eri tarkoituksiin. Tässä esimerkissä teemme työtä rekisteröintilomakkeen kanssa.

Siirry ensin kassalomakkeen editoriin ja anna lomakkeelle nimen (jota käytetään vain sisäiseen viittaukseen) ja slugin (jota käytetään lyhyen koodin luomiseen, esimerkiksi).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Lomakkeet koostuvat vaiheista ja kentistä. Voit lisätä uuden vaiheen klikkaamalla **Lisää uusi kassavaihe**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Modaalin ikkunan ensimmäisellä välilehdellä täytä lomakkeen vaiheen sisältö. Anna sille ID:n, nimen ja kuvauksen. Nämä kohdat käytetään pääasiassa sisäisesti.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Seuraavaksi aseta vaiheen näkyvyys. Voit valita vaihtoehdon **Näytä aina**, **Näytä vain kirjautuneille käyttäjille** tai **Näytä vain vieraille**.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Lopeta lopuksi vaiheen tyylin määrittely. Nämä ovat valinnaisia kenttiä.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Nyt on aika lisätä kenttiä ensimmäiseen vaiheeseen. Klikkaa vain **Lisää uusi kenttä** ja valitse haluamasi osion tyyppi.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Jokaisella kentällä on erilaiset parametrit, jotka täytyy täyttää. Tämän ensimmäisen vaiheen kohdalla valitsemme **Käyttäjätunnus** -kentän.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Voit lisätä kuinka monta vaihetta ja kenttää tahansa tarvitaksesi. Tuotteidesi näyttämiseen asiakkaiden valitsemiseksi käytä Hintatasoa (Pricing Table) -kenttää. Jos haluat antaa asiakkaillesi valita mallin, lisää Mallivalinta (Template Selection) -kenttä jne.

_**Huomautus:** Jos luot tuotteen checkout-lomakkeen luomisen jälkeen, sinun on lisättävä tuote Hintatason osioon. Jos et lisää sitä, tuote ei ilmesty asiakkaidesivulle rekisteröitymissivulla._

_**Huomautus 2:** Käyttäjätunnus (username), sähköposti (email), salasana (password), sivuston nimi (site title), sivuston URL-osoite (site URL), tilausyhteenveto (order summary), maksutapa (payment) ja lähetä-painike (submit button) ovat pakollisia kenttiä checkout-lomakkeen luomiseksi._

Kun työskentelet checkout-lomakkeen kanssa, voit aina käyttää **Esikatselua** (Preview) -painiketta nähdäksesi, miltä lomake näyttää asiakkaalle. Voit myös vaihtaa näkymää olemassa olevana käyttäjänä tai vierailijana.

![Katselupain painike kassalleen laadussa](/img/config/checkout-form-preview-button.png)![Kassauslomakkeen esikatselu vierailijana tai olemassa olevana käyttäjänä](/img/config/checkout-form-preview-modal.png)

Lopulta **Advanced Options** -osiossa voit määrittää viestin kiitossivulle, lisätä osioita konversioiden seurantaa varten, lisätä omaa CSS:ää kassasivullesi tai rajoittaa lomakkeen tiettyihin maihin.

![Tarkemmat vaihtoehdot kiitossivulla, konversioiden seurannalla ja omalla CSS:llä](/img/config/checkout-form-advanced.png)

Voit myös käynnistää tai sammuttaa kassasivulomakkeen manuaalisesti kytkemällä tätä vaihtoehtoa oikean sarakkeen painikkeessa, tai poistaa lomakkeen pysyvästi.

![Aktiivinen kytkin ja poisto-vaihtoehto kassasivulomakkeelle](/img/config/checkout-form-active.png)

Älä unohda tallentaa kassasivulomakkeen!

![Tallenna kassasivulomake -painike](/img/config/checkout-form-save.png)

Lomakkeen lyhyen koodin (shortcode) saamiseksi napsauta **Generate Shortcode** -painiketta ja kopioi modal-ikkunassa näkyvä tulos.

![Lyhyen koodin luonti -modal, josta voi kopioida lyhyen koodin](/img/config/checkout-form-editor.png)

_**Huomautus:** Sinun on lisättävä tämä lyhyt koodi rekisteröintisivullesi, jotta tämä kassasivulomake voidaan lisätä siihen._

## Tuotteiden ja mallien valitseminen URL-parametrien avulla:

Jos haluat luoda räätälöityjä hinnoittelutabelia tuotteillesi ja valita kassasivulla etukäteen, mitä tuotetta tai mallia asiakas valitsee hintatabelistasi tai mallisivulta, voit käyttää URL-parametreja tähän.

### **Suunnitelmien kohdalla:**

Siirry kohtaan **Ultimate Multisite > Products > Select a plan**. Näet sivun yläosassa painikkeen **Click to copy Shareable Link** (Napsauta kopioi jaettava linkki). Tämä on linkki, jota voit käyttää kyseisen suunnitelman etukäteen valitsemiseen kassasivullasi.

![Tuotesivu ja jaettavan linkin painike](/img/config/products-list.png)

Huomioi, että tämä jaettava linkki on voimassa vain **Suunnitelmille (Plans)**. Jaettavissa linkkejä ei voi käyttää paketeille tai palveluille.

### Mallien (templates) kohdalla:

Jos haluat valita sivustomalleja etukäteen ostoslomakkeessasi, voit käyttää parametria: **?template_id=X** rekisteröitys-sivun URL-osoitteessa. "X" tulee korvata **sivumallin ID-numerolla**. Tätä numeroa löydät menimällä kohtaan **Ultimate Multisite > Sites**.

Napsauta **Manage** (Hallinnoi) suoraan sivustomallin alapuolella, jota haluat käyttää. Näet siinä SITE ID -numeron. Käytä tätä numeroa vain tälle tietylle sivumallille, jotta se valitaan etukäteen ostoslomakkeessasi. Meidän tapauksessamme URL-parametri olisi **?template_id=2**.

![Sivustojen lista näyttää sivumallin ID:n](/img/config/site-templates-list.png)

Oletetaan, että verkko-sivustomme on [**www.mynetwork.com**](http://www.mynetwork.com) ja rekisteröityssivu ostoslomakkeellasi sijaitsee **/register** -sivulla. Koko URL-osoite, jossa sivumalli on valittu etukäteen, näyttää tältä: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Ja jos haluat valita sekä tuotteet että mallit ostoslomakkeessasi etukäteen, sinun tarvitsee vain kopioida suunnitelman ja liittää malliparametri lopuksi. Se näyttää tältä: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
