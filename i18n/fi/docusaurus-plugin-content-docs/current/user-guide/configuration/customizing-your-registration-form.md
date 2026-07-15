---
title: Rekisteröitymislomakkeen mukauttaminen
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Rekisteröintilomakkeen mukauttaminen

Jotta verkostosi näyttäisi ainutlaatuiselta verrattuna kaikkiin muihin WordPress-alustalle rakennettuihin SaaS-palveluihin, Ultimate Multisite antaa sinun mukauttaa rekisteröinti- ja kirjautumissivujasi **Checkout Forms** -ominaisuudellamme.

Vaikka ne ovat helppo ja joustava tapa kokeilla erilaisia lähestymistapoja uusien asiakkaiden konvertoimiseksi, niitä käytetään enimmäkseen personoitujen rekisteröintilomakkeiden luomiseen. Tämän artikkelin tarkoituksena on näyttää, miten voit tehdä sen.

## Kirjautumis- ja rekisteröintisivut: {#login-and-registration-pages}

Ultimate Multisite luo asennuksen yhteydessä automaattisesti mukautetut kirjautumis- ja rekisteröintisivut pääsivustollesi. Voit vaihtaa näitä oletussivuja milloin tahansa siirtymällä sivulle **Ultimate Multisite > Settings > Login & Registration**.

![Kirjautumisen ja rekisteröinnin asetussivu](/img/config/settings-general.png)

Tässä on koko näkymä kirjautumisen ja rekisteröinnin asetussivusta:

![Kirjautumisen ja rekisteröinnin asetusten koko sivu](/img/config/settings-login-registration-full.png)

Katsotaan jokaista vaihtoehtoa, jota voit mukauttaa **Login & Registration** -sivulla:

  * **Ota rekisteröinti käyttöön:** Tämä vaihtoehto ottaa rekisteröinnin käyttöön tai poistaa sen käytöstä verkostossasi. Jos se on poistettu käytöstä, asiakkaasi eivät voi rekisteröityä eivätkä tilata tuotteitasi.

  * **Ota sähköpostivahvistus käyttöön:** Jos tämä vaihtoehto on otettu käyttöön, asiakkaat, jotka tilaavat ilmaisen suunnitelman tai maksullisen suunnitelman kokeilujaksolla, saavat vahvistussähköpostin ja heidän on napsautettava vahvistuslinkkiä, jotta heidän verkkosivustonsa luodaan.

  * **Oletusrekisteröintisivu:** Tämä on rekisteröinnin oletussivu. Tämän sivun on oltava julkaistu verkkosivustollasi ja siinä on oltava rekisteröintilomake (tunnetaan myös nimellä checkout-lomake) – jossa asiakkaasi tilaavat tuotteitasi. Voit luoda niin monta rekisteröintisivua ja checkout-lomaketta kuin haluat, mutta muista lisätä checkout-lomakkeen shortcode rekisteröintisivulle, muuten se ei näy.

  * **Käytä mukautettua kirjautumissivua:** Tämä vaihtoehto antaa sinun käyttää mukautettua kirjautumissivua oletusarvoisen wp-login.php-sivun sijaan. Jos tämä vaihtoehto on otettu käyttöön, voit valita, mitä sivua käytetään kirjautumiseen **Oletuskirjautumissivu**-vaihtoehdossa (heti alla).

  * **Piilota alkuperäinen kirjautumisosoite (wp-login.php)** : Jos haluat piilottaa alkuperäisen kirjautumis-URL:n, voit ottaa tämän vaihtoehdon käyttöön. Tämä on hyödyllistä brute-force-hyökkäysten estämiseksi. Jos tämä vaihtoehto on käytössä, Ultimate Multisite näyttää 404-virheen, kun käyttäjä yrittää käyttää alkuperäistä wp-login.php-linkkiä

  * **Pakota synkroninen sivuston julkaisu:** Kun asiakas tilaa tuotteen verkostossa, uusi odottava sivusto on muunnettava oikeaksi verkostosivustoksi. Julkaisuprosessi tapahtuu Job Queue -jonon kautta asynkronisesti. Ota tämä vaihtoehto käyttöön pakottaaksesi julkaisun tapahtumaan samassa pyynnössä kuin rekisteröityminen.

Katsotaan nyt muita vaihtoehtoja, jotka liittyvät edelleen kirjautumis- ja rekisteröintiprosessiin. Ne ovat saman Login & registration -sivun **Muut vaihtoehdot** -kohdan alapuolella:

  * **Oletusrooli:** Tämä on rooli, joka asiakkaillasi on verkkosivustollaan rekisteröitymisprosessin jälkeen.

  * **Ota Jumper käyttöön:** Ottaa Jumper-pikakuvakkeen käyttöön hallinta-alueella. Jumper antaa järjestelmänvalvojien siirtyä nopeasti Ultimate Multisite -näkymiin, verkosto-objekteihin ja muihin tuettuihin kohteisiin ilman, että heidän tarvitsee selata jokaista valikkoa. Poista se käytöstä, jos haluat piilottaa tämän nopean navigointityökalun hallintakäyttöliittymästä.

  * **Lisää käyttäjät myös pääsivustolle:** Tämän vaihtoehdon käyttöönotto lisää käyttäjän myös verkostosi pääsivustolle rekisteröitymisprosessin jälkeen. Jos otat tämän vaihtoehdon käyttöön, heti sen alle ilmestyy myös vaihtoehto näiden käyttäjien **oletusroolin** asettamiseksi verkkosivustollasi.

  * **Ota useat tilit käyttöön:** Salli käyttäjien pitää tilejä verkostosi eri sivustoilla samalla sähköpostiosoitteella. Jos tämä vaihtoehto on pois käytöstä, asiakkaasi eivät voi luoda tiliä muille verkostossasi toimiville verkkosivustoille samalla sähköpostiosoitteella.

Ja siinä ovat kaikki kirjautumiseen ja rekisteröintiin liittyvät vaihtoehdot, joita voit mukauttaa! Älä unohda tallentaa asetuksiasi, kun olet lopettanut niiden muokkaamisen.

## Useiden rekisteröintilomakkeiden käyttäminen: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 tarjoaa checkout-lomake-editorin, jonka avulla voit luoda niin monta lomaketta kuin haluat, eri kentillä, tarjolla olevilla tuotteilla jne.

Sekä kirjautumis- että rekisteröintisivut upotetaan shortcodeilla: **[wu_login_form]** kirjautumissivulla ja**[wu_checkout]** rekisteröintisivua varten. Voit mukauttaa rekisteröintisivua lisää rakentamalla tai luomalla checkout-lomakkeita.

Pääset tähän ominaisuuteen siirtymällä vasemman sivupalkin **Checkout Forms** -valikkoon.

![Checkout Forms -valikko sivupalkissa](/img/config/checkout-forms-list.png)

Tällä sivulla näet kaikki checkout-lomakkeesi.

Jos haluat luoda uuden, napsauta sivun yläosassa **Lisää checkout-lomake**.

Voit valita lähtökohdaksesi yhden näistä kolmesta vaihtoehdosta: yksi vaihe, monivaiheinen tai tyhjä. Napsauta sitten **Siirry editoriin**.

![Lisää checkout-lomake yhden vaiheen, monivaiheisen tai tyhjän vaihtoehdoilla](/img/config/checkout-forms-list.png)

Vaihtoehtoisesti voit muokata tai monistaa jo olemassa olevia lomakkeita napsauttamalla niiden nimen alla olevia vaihtoehtoja. Sieltä löydät myös vaihtoehdot lomakkeen shortcoden kopioimiseen tai lomakkeen poistamiseen.

![Checkout-lomakkeen hover-toiminnot: muokkaa, monista ja poista](/img/config/checkout-form-hover-actions.png)

Jos valitset yhden vaiheen tai monivaiheisen, checkout-lomake on jo valmiiksi täytetty sen toimimiseen tarvittavilla perusvaiheilla. Sen jälkeen voit halutessasi lisätä siihen ylimääräisiä vaiheita.

### Checkout-lomakkeen muokkaaminen: {#editing-a-checkout-form}

Kuten aiemmin mainitsimme, voit luoda checkout-lomakkeita eri tarkoituksiin. Tässä esimerkissä työskentelemme rekisteröintilomakkeen parissa.

Kun olet siirtynyt checkout-lomake-editoriin, anna lomakkeellesi nimi (jota käytetään vain sisäisenä viitteenä) ja slug (käytetään esimerkiksi shortcakejen luomiseen).

![Kassalomakkeen editori, jossa on nimi- ja slug-kentät](/img/config/checkout-form-name-slug.png)

Lomakkeet koostuvat vaiheista ja kentistä. Voit lisätä uuden vaiheen napsauttamalla **Lisää uusi kassavaihe**.

![Lisää uusi kassavaihe -painike](/img/config/checkout-form-add-step.png)

Täytä modaali-ikkunan ensimmäisellä välilehdellä lomakkeesi vaiheen sisältö. Anna sille ID, nimi ja kuvaus. Näitä kohteita käytetään enimmäkseen sisäisesti.

![Kassavaiheen sisältövälilehti, jossa on ID, nimi ja kuvaus](/img/config/checkout-form-step-content.png)

Aseta seuraavaksi vaiheen näkyvyys. Voit valita vaihtoehdoista **Näytä aina** , **Näytä vain kirjautuneille käyttäjille** tai **Näytä vain vieraille**.

![Kassavaiheen näkyvyysasetukset](/img/config/checkout-form-step-visibility.png)

Määritä lopuksi vaiheen tyyli. Nämä kentät ovat valinnaisia.

![Kassavaiheen tyylin määritys](/img/config/checkout-form-step-style.png)

Nyt on aika lisätä kenttiä ensimmäiseen vaiheeseemme. Napsauta vain **Lisää uusi kenttä** ja valitse haluamasi osion tyyppi.

![Lisää uusi kenttä -painike](/img/config/checkout-form-add-field-button.png)![Kenttätyypin valinnan pudotusvalikko](/img/config/checkout-form-field-type-dropdown.png)

Jokaisella kentällä on eri parametreja täytettäväksi. Tähän ensimmäiseen aloitukseen valitsemme **Käyttäjätunnus**-kentän.

![Käyttäjätunnus-kentän määritys](/img/config/checkout-form-username-content.png)![Käyttäjätunnus-kentän parametrit](/img/config/checkout-form-username-visibility.png)![Käyttäjätunnus-kentän lisäasetukset](/img/config/checkout-form-username-style.png)

Voit lisätä niin monta vaihetta ja kenttää kuin tarvitset. Jos haluat näyttää tuotteesi asiakkaillesi, jotta he voivat valita yhden, käytä hinnoittelutaulukon kenttää. Jos haluat antaa asiakkaidesi valita mallipohjan, lisää mallipohjan valintakenttä. Ja niin edelleen.

![Kassalomakkeen editori, jossa on mallipohjan valintakenttä](/img/config/checkout-form-with-template-field.png)

_**Huomautus:** Jos luot tuotteen kassalomakkeen luomisen jälkeen, sinun täytyy lisätä tuote hinnoittelutaulukon osioon. Jos et lisää sitä, tuote ei näy asiakkaillesi rekisteröitymissivulla._

_**Huomautus 2:** käyttäjätunnus, sähköposti, salasana, sivuston otsikko, sivuston URL, tilauksen yhteenveto, maksu ja lähetyspainike ovat pakollisia kenttiä kassalomakkeen luomiseksi._

Kun työskentelet kassalomakkeesi parissa, voit aina käyttää Esikatselu-painiketta nähdäksesi, miten asiakkaasi näkevät lomakkeen. Voit myös vaihtaa näkymää olemassa olevan käyttäjän ja vierailijan välillä.

![Esikatselu-painike kassalomakkeen editorissa](/img/config/checkout-form-preview-button.png)![Kassalomakkeen esikatselu vierailijana tai olemassa olevana käyttäjänä](/img/config/checkout-form-preview-modal.png)

Lopuksi kohdassa **Lisäasetukset** voit määrittää **Kiitos**-sivun viestin, lisätä koodinpätkiä konversioiden seurantaan, lisätä mukautettua CSS:ää kassalomakkeeseesi tai rajoittaa sen tiettyihin maihin.

![Lisäasetukset, joissa on Kiitos-sivu, konversioseuranta ja mukautettu CSS](/img/config/checkout-form-advanced.png)

Voit myös ottaa kassalomakkeen käyttöön tai poistaa sen käytöstä manuaalisesti vaihtamalla tätä asetusta oikeassa sarakkeessa, tai poistaa lomakkeen pysyvästi.

![Aktiivinen-kytkin ja poistovaihtoehto kassalomakkeelle](/img/config/checkout-form-active.png)

Älä unohda tallentaa kassalomakettasi!

![Tallenna kassalomake -painike](/img/config/checkout-form-save.png)

Saat lomakkeesi lyhytkoodin napsauttamalla **Luo lyhytkoodi** ja kopioimalla modaali-ikkunassa näkyvän tuloksen.

![Luo lyhytkoodi -modaali, jossa on kopioitava lyhytkoodi](/img/config/checkout-form-editor.png)

_**Huomautus:** Sinun täytyy lisätä tämä lyhytkoodi rekisteröitymissivullesi, jotta tämä kassalomake lisätään siihen._

## Tuotteiden ja mallipohjien esivalinta URL-parametrien avulla: {#pre-selecting-products-and-templates-via-url-parameters}

Jos haluat luoda mukautettuja hinnoittelutaulukoita tuotteillesi ja esivalita kassalomakkeessa tuotteen tai mallipohjan, jonka asiakkaasi valitsee hinnoittelutaulukostasi tai mallipohjasivultasi, voit käyttää tähän URL-parametreja.

### **Paketeille:** {#for-plans}

Siirry kohtaan **Ultimate Multisite > Tuotteet > Valitse paketti**. Sinun pitäisi nähdä **Napsauta kopioidaksesi jaettava linkki** -painike sivun yläosassa. Tämä on linkki, jota voit käyttää tämän tietyn paketin esivalintaan kassalomakkeessasi.

![Tuotesivu, jossa on jaettavan linkin painike](/img/config/products-list.png)

Huomaa, että tämä jaettava linkki on voimassa vain **Paketeille**. Et voi käyttää jaettavia linkkejä pakettikokonaisuuksille tai palveluille.

### Mallipohjille: {#for-templates}

Jos haluat esivalita sivustomallipohjia kassalomakkeessasi, voit käyttää parametria: **?template_id=X** rekisteröitymissivusi URL-osoitteessa. "X" täytyy korvata **sivustomallipohjan ID-numerolla**. Saat tämän numeron siirtymällä kohtaan **Ultimate Multisite > Sivustot**.

Napsauta **Hallinnoi** heti sen sivustomallipohjan alapuolella, jota haluat käyttää. Näet SITE ID -numeron. Käytä tätä numeroa tälle tietylle sivustomallipohjalle, jotta se esivalitaan kassalomakkeessasi. Tässä tapauksessamme URL-parametri olisi **?template_id=2**.

![Sivustoluettelo, jossa näkyy sivustomallipohjan ID](/img/config/site-templates-list.png)

Oletetaan, että verkkosivustomme verkosto on [**www.mynetwork.com**](http://www.mynetwork.com) ja kassalomakkeemme sisältävä rekisteröitymissivumme sijaitsee **/register**-sivulla. Koko URL, jossa tämä sivustomallipohja on esivalittuna, näyttää tältä: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Ja jos haluat, voit esivalita kassalomakkeeseesi sekä tuotteet että mallipohjat. Sinun tarvitsee vain kopioida paketin jaettava linkki ja liittää mallipohjaparametri sen loppuun. Se näyttää tältä: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
