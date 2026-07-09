---
title: Rekisteröintivirta
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Rekisteröintoprosessi (v2) {#the-registration-flow-v2}

_**TÄRKEÄ HUOMIO: Tämä artikkeli viittaa Ultimate Multisite -versioon 2.x.**_

Käyttäjät voivat rekisteröityä verkkoosi eri tavoilla. He voivat käyttää rekisteröintilomakettaasi tai jakamista linkkiä valitulle suunnitelmalle. Tässä selitämme, miten asiakkaat voivat rekisteröityä verkkoosi käytettävissä olevien polkujen avulla ja mitä heidän rekisteröityminen tapahtuu verkkoosi jälkeen.

## Rekisteröintilomakkeen käyttö: {#using-the-registration-form}

Tämä on standardi rekisteröintiprosessi. Luo rekisteröintisivu, jossa on **checkout-lomake**, ja juuri sinne asiakkaat menevät rekisteröityäkseen verkkoosi ja tilatakseen suunnitelman. Voit luoda useita rekisteröintisivuja, joilla voi olla eri lomakkeet, jos haluat.

Oletusivu rekisteröintiin on [_**yourdomain.com/register**_](http://yourdomain.com/register), mutta voit muuttaa tätä milloin tahansa **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Kun käyttäjä päätyy rekisteröintisivullesi (yleensä klikkaamalla **Sign in** tai **Buy now** -painiketta), he näkevät sinun lomakkeen siellä.

![Rekisteröintilomake näytetään rekisteröintisivulla](/img/frontend/registration-form.png)

Tässä on esimerkki checkout-lomakkeesta sellaisena kuin se näyttää etupinnalla:

![Etupinnan checkout-rekisteröintilomake](/img/config/checkout-frontend-registration.png)

Heidän tarvitsee vain täyttää kaikki pakolliset kentät – sähköposti, käyttäjätunnus, salasana jne... – ja maksaa suunnitelmasta tai vahvistaa sähköpostiosoitteensa, jos rekisteröityvät ilmaiseen suunnitelmaan tai maksutiedot ilman maksua vaativaan kokeilujakoon.

"Kiitos"-sivulla he näkevät viestin, jossa kerrotaan, tarvitseeko he vahvistaa sähköpostiosoitteensa vai onko heidän verkkosivunsa jo aktivoitu ja voivat aloittaa sen käytön.

![Kiitos-sivu rekisteröitymisen jälkeen](/img/frontend/registration-thank-you.png)

Jos sähköpostiosoitteen vahvistus on vaadittu, heidän täytyy mennä sähköpostinsa postilaatikkoon ja klikata vahvistuslinkkiä. Heidän verkkosivunsa ei aktivoitu, jos sähköpostiosoitetta ei vahvisteta.

Jos he ovat rekisteröityneet maksulliseen suunnitelmaan tai sähköpostivahvistus ei ole pakollinen verkostossasi, heidän verkkosivunsa aktivoituu suoraan kassalla ja heille näytetään linkki sisäänkirjautumiseen hallintapaneeliin.

![Sivusto aktivoitu sisäänkirjautumislinkillä hallintapaneeliin](/img/frontend/site-activated.png)

## Jaaettavan linkin käyttö: {#using-a-shareable-link}

Jaaettavan linkin avulla rekisteröityminen on periaatteessa sama kuin rekisteröitymislomake, ainoa ero on se, että jakamalla linkin asiakkaat voivat valita tuotteen tai verkkosivuston mallin etukäteen kassalla (katso osio Tuotteiden ja mallien esivalinta URL-parametrien avulla) tai ehkä lisätä alennuskoodia (katso osio URL-parametrien käyttö).

Rekisteröitymisprosessi on sama: heidän täytyy täyttää nimi, käyttäjätunnus, sähköpostiosoite, verkkosivuston nimi ja otsikko jne... mutta suunnitelma tai sivustomalli on jo valittu heille etukäteen.

### Manuaalisten maksujen käyttö: {#registering-using-manual-payments}

Jos et halua käyttää PayPalia, Stripea tai muuta maksupayrase, jota Ultimate Multisite tai sen lisäosat tarjoavat, voit käyttää manuaalisia maksuja asiakkaillesi. Tällä tavalla voit luoda heille laskunsa, jonka he voivat maksaa suosikkimaksutoverillasi heidän rekisteröityessään verkostossasi.

Rekisteröitymisprosessi on täysin sama kuin yllä, mutta rekisteröitymissivulla asiakkaat näkevät viestin siitä, että he saavat sähköpostia lisäohjeista maksun suorittamiseksi.

![Manuaal maksutustiedote rekisteröinnin aikana](/img/frontend/registration-manual-notice.png)

Rekisteröitymisen jälkeen he näkevät maksutiedot, jotka olet asettanut (ja saavat ne myös sähköpostitse).

![Maksutiedot näytetään rekisteröinnin jälkeen](/img/frontend/registration-payment-instructions.png)

Maksutietoja voi muuttaa **Ultimate Multisite > Settings > Payments** -osiossa, kun olet kytkenyt päälle **Manual** (Manuaalinen) maksutapa:

![Manuaalisen maksutavan kytkin ja maksutietokenttä](/img/config/manual-gateway-settings.png)

Kun asiakas suorittaa manuaalisen maksun ja lähettää sinulle vahvistuksen, sinun täytyy **vahvistaa maksu manuaalisesti** aktivoidaksesi asiakkaan jäsenyyden ja verkkosivuston.

Tämän voi tehdä siirtymällä kohtaan **Ultimate Multisite > Payments** ja löytämällä asiakkaan maksun. Se pitäisi edelleen näyttää tilana **Pending** (Odottamassa).

![Maksutilanne listalla odottavalle manuaaliselle maksulle](/img/admin/payments-list.png)

Napsauta maksuun liittyvää numeroa, ja voit muuttaa sen tilan **Completed** (Suoritettu).

![Maksujen tiedot sivu](/img/admin/payment-edit.png)

![Maksutilan muuttaminen Completediksi](/img/admin/payment-status-completed.png)

Tilanteen muuttamisen jälkeen **Completediksi**, sinun pitäisi nähdä ilmoituksen **Activate membership** (Aktivoi jäsenyys). Kytke tämä vaihtoehto **on** päälle aktivoidaksesi kyseisen asiakkaan ja verkkosivuston. Napsauta sitten **Save Payment** (Tallenna maksu).

![Jäsenyyden aktivaation kytkin ja Save Payment -painike](/img/admin/payment-activate-membership.png)

Asiakkaasi pitäisi nyt pystyä pääsemään hallintapaneeliin ja kaikkiin ominaisuuksiin, joihin hän on tilannut.
