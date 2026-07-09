---
title: Maksujen vastaanottaminen
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Maksujen vastaanottaminen (v2) {#getting-paid-v2}

_**TÄRKEÄ HUOMAUTUS: Tämä artikkeli koskee Ultimate Multisite -versiota 2.x.**_

Ultimate Multisite sisältää sisäänrakennetun jäsenyys- ja laskutusjärjestelmän. Jotta laskutusjärjestelmämme toimisi, olemme integroineet yleisimmät verkkokaupassa käytettävät maksuväylät. Ultimate Multisite -palvelun oletusmaksuväylät ovat _Stripe_ , _PayPal_ ja manuaalinen maksu. Voit myös käyttää _WooCommerce_ , _GoCardless_ ja _Payfast_ maksujen vastaanottamiseen asentamalla niiden vastaavat lisäosat.

## Perusasetukset {#basic-settings}

Voit määrittää minkä tahansa näistä maksuväylistä Ultimate Multisite -maksuasetuksissa. Löydät ne siirtymällä kohtaan **Ultimate Multisite menu > Settings > Payments.**

![Ultimate Multisite -palvelun maksuasetussivu, jossa näkyy Payments-paneeli](/img/config/payments-settings-page.png)

Ennen kuin määrität maksuväyläsi, tutustu perusmaksuasetuksiin, joita voit määrittää:

**Pakota automaattinen uu** **sinta:** Tämä varmistaa, että maksu toistuu automaattisesti jokaisen laskutusjakson lopussa käyttäjän valitseman laskutustiheyden mukaan.

<!-- Kuvakaappaus ei saatavilla: Force Auto-Renew -kytkinasetus Payments-asetussivulla -->

Ultimate Multisite v2.13.0 tarkistaa ennen toistuvan jäsenyyden tallentamista automaattinen uusinta käytössä, onko aktiivisella maksuväylällä uudelleenkäytettävä uusintavaltuutus. Uusintavaltuutus voi olla maksuväylän tilaus, laskutussopimus, tallennettu vault token tai vastaava uudelleenkäytettävä maksutapa. Jos maksuväylä ilmoittaa, ettei käyttökelpoista valtuutusta ole olemassa, Ultimate Multisite tallentaa jäsenyyden mutta poistaa automaattisen uusinnan käytöstä ja kirjaa puuttuvan valtuutuksen tilan, jotta ylläpitäjä tai tukiprosessi voi pyytää asiakasta valtuuttamaan maksun uudelleen ennen uusintapäivää.

Tämä estää jäsenyyttä näyttämästä siltä, että se uusiutuisi automaattisesti, kun maksuväylä voi veloittaa vain kertamaksuja. Maksuväylien lisäosien tulisi varmistaa, että toistuvat kassaprosessit tallentavat uudelleenkäytettävän valtuutuksen, erityisesti silloin, kun maksuväylä tukee sekä kertaveloitusta että vault-/tilausmaksutiloja.

**Salli kokeilujaksot ilman maksu** **tapaa:** Kun tämä vaihtoehto on käytössä, asiakkaasi ei tarvitse lisätä mitään taloudellisia tietoja rekisteröitymisprosessin aikana. Tätä vaaditaan vasta, kun kokeilujakso päättyy.

<!-- Kuvakaappaus ei saatavilla: Allow Trials Without Payment Method -kytkin Payments-asetussivulla -->

**Lähetä lasku maksuvahvistuksen yhteydessä:** Tämä antaa sinulle vaihtoehdon lähettää tai olla lähettämättä lasku maksun jälkeen. Huomaa, että käyttäjillä on pääsy maksuhistoriaansa oman alisivustonsa Dashboardissa. Tämä vaihtoehto ei koske manuaalista maksuväylää.

<!-- Kuvakaappaus ei saatavilla: Send Invoice on Payment Confirmation -kytkin Payments-asetussivulla -->

**Laskunumerointijärjestelmä:** Tässä voit valita joko maksun viitekoodin tai juoksevan numerointijärjestelmän. Jos päätät käyttää maksun viitekoodia laskuissasi, sinun ei tarvitse määrittää mitään. Jos päätät käyttää juoksevaa numerointijärjestelmää, sinun on määritettävä **seuraava laskunumero** (tätä numeroa käytetään seuraavana järjestelmässä luotavan laskun laskunumerona. Sitä kasvatetaan yhdellä aina, kun uusi lasku luodaan. Voit muuttaa sitä ja tallentaa sen palauttaaksesi laskujen juoksevan numeroinnin tiettyyn arvoon) ja **laskunumeron etuliite.**

<!-- Kuvakaappaus ei saatavilla: Invoice numbering scheme -pudotusvalikko, jossa Payment Reference Code- ja Sequential Number -vaihtoehdot -->

<!-- Kuvakaappaus ei saatavilla: Next invoice number- ja invoice number prefix -kentät, jotka näytetään, kun Sequential Number on valittuna -->

## Mistä löydät maksuväylät: {#where-to-find-the-gateways}

Voit määrittää maksuväylät samalla sivulla ( **Ultimate Multisite > Settings > Payments**). Heti kohdan **active payment gateways** alapuolella näet: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ja _Manual_.

![Active Payment Gateways -osio, jossa luetellaan Stripe, Stripe Checkout, PayPal ja Manual](/img/config/payments-active-gateways.png)

Meillä on oma artikkeli jokaiselle maksuväylälle, ja ne opastavat sinut käyttöönoton vaiheiden läpi. Löydät ne alla olevista linkeistä.

Voit tarkastella ja muokata maksutietoja:

![Maksun muokkausnäkymä](/img/admin/payment-edit.png)

Tässä on koko näkymä maksun muokkaussivusta:

![Maksun muokkauksen koko näkymä](/img/admin/payment-edit-full.png)

Tässä on myös koko näkymä maksuväylien asetuksista:

![Maksuväylien asetusten koko sivu](/img/config/settings-payments-gateways-full.png)

**Stripe gatewayn määrittäminen**

**PayPal gatewayn määrittäminen**** **

**Manuaalisten maksujen määrittäminen**

Jos nyt haluat käyttää _WooCommerce_ , _GoCardless_ tai _Payfast_ maksuväylänäsi, sinun on **asennettava ja määritettävä niiden lisäosat**.

### WooCommerce-lisäosan asentaminen: {#how-to-install-the-woocommerce-add-on}

Ymmärrämme, että _Stripe_ ja _PayPal_ eivät ole saatavilla joissakin maissa, mikä rajoittaa tai estää Ultimate Multisite -käyttäjiä käyttämästä lisäosaamme tehokkaasti. Siksi loimme lisäosan _WooCommerce,_-integraatiota varten; se on erittäin suosittu verkkokauppalisäosa. Kehittäjät ympäri maailmaa ovat luoneet siihen lisäosia eri maksuväylien integroimiseksi. Hyödynsimme tätä laajentaaksemme maksuväyliä, joita voit käyttää Ultimate Multisite -laskutusjärjestelmän kanssa.

_**TÄRKEÄÄ:** Ultimate Multisite: WooCommerce Integration edellyttää, että WooCommerce on aktivoitu vähintään pääsivustollasi._

Siirry ensin lisäosien sivulle. Löydät sen siirtymällä kohtaan **Ultimate Multisite > Settings**. Sinun pitäisi nähdä **Add-ons**-taulukko. Napsauta **Check our Add-ons**.

<!-- Kuvakaappaus ei saatavilla: Add-ons-taulukko Ultimate Multisite Settings -sivupalkissa ja Check our Add-ons -linkki -->

Kun olet napsauttanut **Check our Add-ons** , sinut ohjataan lisäosien sivulle. Täältä löydät kaikki Ultimate Multisite -lisäosat. Napsauta **Ultimate Multisite: WooCommerce Integration** -lisäosaa.

![Lisäosien sivu, jossa luetellaan Ultimate Multisite -lisäosia, mukaan lukien WooCommerce Integration](/img/addons/addons-page.png)

Näkyviin avautuu ikkuna, jossa on lisäosan tiedot. Napsauta vain **Asenna nyt**.

<!-- Kuvakaappaus ei saatavilla: Ultimate Multisite WooCommerce -integrointilisäosan tietovalintaikkuna, jossa on Asenna nyt -painike -->

Kun asennus on valmis, sinut ohjataan lisäosien sivulle. Napsauta tässä vain **Ota käyttöön verkostossa**, ja WooCommerce-lisäosa aktivoidaan verkostossasi.

<!-- Kuvakaappaus ei saatavilla: Lisäosien sivu, jossa on Ota käyttöön verkostossa -linkki WooCommerce-integrointilisäosalle -->

Kun olet aktivoinut sen, jos WooCommerce-lisäosaa ei vieläkään ole asennettu ja aktivoitu verkkosivustollasi, saat muistutuksen.

<!-- Kuvakaappaus ei saatavilla: Ylläpitäjän ilmoitus, joka muistuttaa ylläpitäjää asentamaan ja aktivoimaan WooCommerce-lisäosan -->

Jos haluat lukea lisää WooCommerce Integration -lisäosasta, **napsauta tästä**.

### GoCardless-lisäosan asentaminen: {#how-to-install-the-gocardless-add-on}

_GoCardless_-lisäosan asentamisen vaiheet ovat lähes samat kuin _WooCommerce_-lisäosan. Siirry lisäosien sivulle ja valitse **Ultimate Multisite: GoCardless Gateway** -lisäosa.

<!-- Kuvakaappaus ei saatavilla: Lisäosien sivu, jossa Ultimate Multisite GoCardless Gateway -lisäosa on korostettuna -->

Lisäosan ikkuna avautuu. Napsauta **Asenna nyt**.

<!-- Kuvakaappaus ei saatavilla: Ultimate Multisite GoCardless Gateway -lisäosan tietovalintaikkuna, jossa on Asenna nyt -painike -->

Kun asennus on valmis, sinut ohjataan lisäosien sivulle. Napsauta tässä vain **Ota käyttöön verkostossa**, ja _GoCardless_-lisäosa aktivoidaan verkostossasi.

<!-- Kuvakaappaus ei saatavilla: Lisäosien sivu, jossa on Ota käyttöön verkostossa -linkki GoCardless Gateway -lisäosalle -->

Jos haluat oppia, miten pääset alkuun _GoCardless_-gatewayn kanssa, **lue tämä artikkeli**.

### Payfast-lisäosan asentaminen: {#how-to-install-the-payfast-add-on}

Siirry lisäosien sivulle ja valitse **Ultimate Multisite: Payfast Gateway** -lisäosa.

<!-- Kuvakaappaus ei saatavilla: Lisäosien sivu, jossa Ultimate Multisite Payfast Gateway -lisäosa on korostettuna -->

Lisäosan ikkuna avautuu. Napsauta **Asenna nyt.**

<!-- Kuvakaappaus ei saatavilla: Ultimate Multisite Payfast Gateway -lisäosan tietovalintaikkuna, jossa on Asenna nyt -painike -->

Kun asennus on valmis, sinut ohjataan lisäosien sivulle. Napsauta tässä vain **Ota käyttöön verkostossa**, ja _Payfast_-lisäosa aktivoidaan verkostossasi.

<!-- Kuvakaappaus ei saatavilla: Lisäosien sivu, jossa on Ota käyttöön verkostossa -linkki Payfast Gateway -lisäosalle -->
