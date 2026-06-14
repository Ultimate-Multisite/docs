---
title: Manuaalisten maksujen asettelu
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Manuaalmaksujen asennus (v2)

_**TÄRKEÄ HUOMIO: Tämä artikkeli viittaa Ultimate Multisite -versioon 2.x.**_

Manuaaliset maksut ovat tapa tarjota käyttäjille muita maksuvaihtoehtoja, jos **Stripe** tai **PayPal** eivät ole saatavilla heidän käyttäjilleen. Se voi olla sähköinen siirto (wire), pankkisiirto tai mikä tahansa muu maksutapa, joka on saatavilla käyttäjillesi paikallisesti.

## Manuaalisten maksujen aktivoiminen

Manuaalisten maksujen asennus on erittäin helppoa. Sinun tarvitsee vain ottaa sen käyttöön maksukeskusten (payment gateways) alta ja antaa yksityiskohtaisia ohjeita siitä, miten käyttäjän tulee lähettää maksu.

Aloita menimällä **Ultimate Multisite > Asetukset > Maksut**. Alhaalla kohdasta **Maksukeskukset** (Payment Gateways) kytke **Manuaalinen** (Manual) päälle. Näet, että sinulle ilmestyy **Maksutiedot** (Payment Instructions) -laatikko.

Lisää tähän laatikkoon tiedot, joita asiakkaasi tarvitsee maksua varten. Siinä voi olla pankkitilin tiedot ja sähköpostiosoitteesi jne., jotta asiakas voi lähettää sinulle maksun vahvistuksen esimerkiksi.

![Manuaalisen maksuportin kytkin, jossa on teksti Maksuitiedot](/img/config/manual-gateway-expanded.png)

Tässä on manuaalisten maksujen asetusten käyttöliittymä:

![Manuaalisten maksuasetukset](/img/config/manual-gateway-settings.png)

Asennuksen jälkeen klikkaa vain **Tallenna asetukset** (Save Settings), ja valmis. Kun käyttäjät rekisteröityvät verkkoosi, he näkevät viestin, jossa kerrotaan heille lähetyväsi ohjeet ostoksen viimeistelemiseksi.

![Rekisteröitymisvahvistusviesti, jossa kerrotaan käyttäjälle saavansa maksuohjeita](/img/frontend/registration-manual-notice.png)

He saavat myös viestin **Kiitos** (Thank You) -sivullasi maksutiedoistasi.

<!-- Screenshot unavailable: Kiitos-sivu, joka näyttää maksutiedot ostoksen jälkeen -->

## Manuaalisten maksujen vahvistaminen

Manuaalmaksu vahvistamiseksi siirry vasemmassa palkissa olevaan **Payments**-valikkoon. Siellä näet kaikki verkostosi maksut ja niiden tiedot, mukaan lukien niiden **status**. Manuaalinen maksu on aina **Pending**-tilassa, kunnes muutat sitä manuaalisesti itse.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Syötä maksuun liittyvän sivun osoite klikkaamalla **reference code** -kenttää. Tällä sivulla on kaikki tiedot odottavasta maksusta, kuten viittauskoodi (reference ID), tuotteet, aikaleimat ja paljon muuta.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Oikeassa sarakkeessa voit muuttaa maksun tilaa. Muuttamalla sen **Completed**-tilaan ja kytkemällä päälle **Activate Membership** -vaihtoehdon, asiakkaan sivusto aktivoituu ja hänen jäsenyytesan tulee aktiivinen.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
