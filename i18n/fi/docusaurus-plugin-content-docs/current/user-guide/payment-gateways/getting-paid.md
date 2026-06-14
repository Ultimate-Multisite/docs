---
title: Palkkion saaminen
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Maksutuksen saaminen (v2)

_**TÄRKEÄ HUOMIO: Tämä artikkeli viittaa Ultimate Multisite version 2.x.**_

Ultimate Multisiteessa on sisäänrakennettu jäsen- ja laskutusjärjestelmä. Jotta laskutusjärjestelmämme toimisi, olemme integroineet yleisimmät maksutulvaukset, joita käytetään verkkokaupoissa. Ultimate Multisiten oletusmaksutulvaukset ovat _Stripe_, _PayPal_ ja Manuaalinen maksu. Voit myös käyttää _WooCommerce_, _GoCardless_ ja _Payfastia_ vastaanottamaan maksuja asennuttamalla niihin liittyvät lisäosat (add-ons).

## Perusasetukset

Voit määrittää mitä tahansa näistä maksutulvauksista Ultimate Multisiten maksusäädösten alla. Voit löytää ne siirtymällä **Ultimate Multisite -valikko > Asetukset > Maksut**.

![Maksutusasetusten sivu Ultimate Multisiteessa, joka näyttää Payments-paneelin](/img/config/payments-settings-page.png)

Ennen kuin asettaisit maksutulvauksesi, katso ensin perusmaksutulvaukset, joita voit määrittää:

**Force auto-rene (Pakota automaattinen uusi)** **w:** Tämä varmistaa, että maksu toistuu automaattisesti jokaisen laskutusjakson lopussa riippuen käyttäjän valitsemasta laskutusajankohdasta.

<!-- Screenshot unavailable: Force Auto-Renew -kytkinasetus Maksut asetusten sivulla -->

Ultimate Multisite v2.13.0 tarkistaa, onko aktiivisella maksutulvauksella käytettävissä uudelleenkäytettävä uusi (renewal credential), ennen kuin tallennetaan toistuva jäsenyys automaattisella uusimisella päällä. Uudelleenkäytettävä uusi voi olla maksutulvauksen tilaus, laskutussopimus, tallennettu vault-token tai vastaava uudelleenkäytettävä maksutapa. Jos maksutulvauksen ilmoitus kertoo, että käytettävissä ei ole kelvollista tunnusta, Ultimate Multisite tallentaa jäsenyden mutta sammuttaa automaattisen uusi ja merkitsee puuttuvaksi tunnistetilaa, jotta ylläpitäjä tai tukiprosessi voi pyytää asiakasta vahvistamaan maksun ennen uusintapäivää.

Tämä estää jäsenyyden näkymisen automaattisena uusimisena, jos gateway tukee vain kertamaksullisia maksuja. Gateway add-onit tulisi varmistaa, että toistuvat maksut tallentavat uudelleenkäytettävän tunnuksen, erityisesti kun gateway tukee sekä kertamaksujen ottamista että arkistoitua/tilausmaksuvaihtoehtoja.

**Salli kokeilujakso ilman maksua** **materiaali:** Tämän vaihtoehdon päälle asettaminen tarkoittaa, että asiakkaasi ei tarvitse antaa mitään taloudellista tietoa rekisteröitysprosessissa. Tämä vaaditaan vain silloin, kun kokeilujakso on päättynyt.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Lähetä lasku maksuvahvistuksen jälkeen:** Tämä antaa sinulle mahdollisuuden valita, lähetätkö laskun maksun jälkeen vai et. Huomaa, että käyttäjillä on pääsy maksuhistoriaan alayksikkönsä dashboardista. Tämän vaihtoehdon ei ole käytössä Manual Gateway -vaihtoehdolla.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Laskunumerointijärjestelmä:** Tässä voit valita joko maksutiedot viittauskoodin tai peräkkäisen numerointijärjestelmän. Jos valitset maksuviittauskoodia laskuihin, sinun ei tarvitse konfiguroida mitään. Jos valitset peräkkäisen numerointijärjestelmän, sinun on konfiguroitava **seuraava laskunumero** (Tämä numero käytetään seuraavan järjestelmän luomalle laskulle laskunumerona. Se kasvaa yhdellä kerran joka kerta kun uusi lasku luodaan. Voit muuttaa sitä ja tallentaa sen nollaamaan laskun peräkkäinen numero tiettyyn arvoon) sekä **laskunumeron etuliite**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Seuraava laskutusnumero ja laskutusnumeron etuliitteen kentät näkyvät, kun valittu on Sekventiaalinen numero -->

## Missä löydät maksutovut (gateways):

Voit asettaa maksutovut samalle sivulle (**Ultimate Multisite > Settings > Payments**). **Aktiivisten maksutovujen** alapuolella näet: _Stripe_, _Stripe_ Checkout, _PayPal_ ja _Manual_.

![Aktiivisten maksutovujen osio listana Stripe-, Stripe Checkout- ja PayPal-maksutovut](/img/config/payments-active-gateways.png)

Meillä on erillinen artikkeli jokaiselle maksutovulle, joka ohjaa sinut asennusvaiheisiin, jota löydät alla olevista linkeistä.

Voit tarkastella ja muokata maksuja:

![Maksujen muokkausliittymä](/img/admin/payment-edit.png)

Tässä on koko näkymä maksun muokkaussivusta:

![Maksujen muokkaus täysi käyttöliittymä](/img/admin/payment-edit-full.png)

Tässä on myös maksumakutovujen asetusten kokonäkymä:

![Maksutovujen asetukset koko sivu](/img/config/settings-payments-gateways-full.png)

**Stripe-tovun asennus**

**PayPal-tovun asennus**** **

**Manuaalisten maksujen asennus**

Nyt, jos haluat käyttää _WooCommerce_a, _GoCardlessia_ tai _Payfastia_ maksutovuna, sinun on **asennettava ja konfiguroitava niiden add-onit**.

### WooCommerce-add-onin asennus:

Ymmärrämme, että _Stripe_ä ja _PayPal_ eivät ole saatavilla joissakin maissa, mikä rajoittaa tai estää Ultimate Multisite -käyttäjiä käyttämästä laajennustamme tehokkaasti. Siksi olemme luoneet add-onin, joka integroidaako _WooCommerce_n, joka on erittäin suosittu verkkokauppalaitteisto. Maailmanlaajuiset kehittäjät ovat luoneet add-onit integroimiseksi eri maksutovuja siihen. Hyödynnämme tätä laajentaaksemme maksutovuja, joita voit käyttää Ultimate Multisite -laskujärjestelmän kanssa.

**TÄRKEÄ:** Ultimate Multisite - WooCommerce -integraatio vaatii WooCommerce-lisäosan aktivoimisen vähintään pääsivustollasi.

Aloita ensin lisäosien (add-ons) sivulle. Voit löytää sen mennään **Ultimate Multisite > Settings** -valikkoon. Sinun pitäisi nähdä **Add-ons** -taulukko. Napsauta **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Napsauttamalla **Check our Add-ons** sinut ohjataan lisäosille sivuun, josta löydät kaikki Ultimate Multisite -lisäosat. Napsauta **Ultimate Multisite: WooCommerce Integration** -lisäosaa.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Ikkuna avautuu lisäosan tiedoilla. Napsauta vain **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Asennuksen jälkeen sinut ohjataan plugin-sivulle. Napsauta siellä vain **Network Activate**, ja WooCommerce -lisäosa aktivoituu verkostossasi.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Aktivoimisen jälkeen, jos sinulla ei ole vielä asennettuna eikä aktivoitu WooCommerce -lisäosaa verkkosivustollasi, saat muistutuksen.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Lue lisää WooCommerce Integration -lisäosasta **napsauttamalla täällä**.

### Miten asentaa GoCardless -lisäosa:

Asennusohjeet GoCardless -lisäosan asentamiseen ovat lähes samat kuin WooCommerce -lisäosassa. Mene lisäosien sivulle ja valitse **Ultimate Multisite: GoCardless Gateway** -lisäosa.

<!-- Screenshot unavailable: Lisäosien sivu, jossa Ultimate Multisite GoCardless Gateway -lisäosa on korostettu -->

Lisäosan ikkuna avautuu. Napsauta **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway -lisäosan tiedotikkuna Install Now -painike -->

Asennuksen jälkeen sinut ohjataan plugin-sivulle. Siellä napsauta vain **Network Activate** ja _GoCardless_-lisäosa aktivoituu verkossasi.

<!-- Screenshot unavailable: Plugin-sivu, jossa GoCardless Gateway -lisäosan Network Activate -linkki on -->

Lue tämä artikkeli saadaksesi tietoa _GoCardless_-portaalista:

### Miten asentaa Payfast -lisäosa:

Mene lisäosien sivulle ja valitse **Ultimate Multisite: Payfast Gateway** -lisäosa.

<!-- Screenshot unavailable: Lisäosien sivu, jossa Ultimate Multisite Payfast Gateway -lisäosa on korostettu -->

Lisäosan ikkuna avautuu. Napsauta **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway -lisäosan tiedotikkuna Install Now -painike -->

Asennuksen jälkeen sinut ohjataan plugin-sivulle. Siellä napsauta vain **Network Activate** ja _Payfast_-lisäosa aktivoituu verkossasi.

<!-- Screenshot unavailable: Plugin-sivu, jossa Payfast Gateway -lisäosan Network Activate -linkki on -->
