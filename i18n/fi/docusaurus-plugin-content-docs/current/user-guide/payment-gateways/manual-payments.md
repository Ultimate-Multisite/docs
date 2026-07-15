---
title: Manuaalisten maksujen määrittäminen
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Manuaalisten maksujen määrittäminen (v2)

_**TÄRKEÄ HUOMAUTUS: Tämä artikkeli koskee Ultimate Multisite -version 2.x käyttöä.**_

Manuaaliset maksut ovat tapa tarjota muita maksutapoja, jos **Stripe** tai **PayPal** ei ole käyttäjiesi saatavilla. Se voi olla tilisiirto tai pankkisiirto tai mikä tahansa muu maksutapa, joka on paikallisesti käyttäjiesi saatavilla.

## Manuaalisten maksujen käyttöönotto {#how-to-enable-manual-payments}

Manuaalisen maksun määrittäminen on erittäin helppoa. Sinun tarvitsee vain ottaa se käyttöön maksuyhdyskäytävien kohdalla ja lisätä yksityiskohtaiset ohjeet siitä, miten käyttäjän tulee lähettää maksu.

Siirry ensin kohtaan **Ultimate Multisite > Asetukset > Maksut**. Ota **Maksuyhdyskäytävät**-kohdan alla **Manuaalinen** käyttöön. Näet, että **Maksuohjeet**-laatikko tulee näkyviin.

Lisää tähän laatikkoon tiedot, joita asiakkaasi tarvitsee maksun suorittamiseen. Ne voivat olla esimerkiksi pankkitilisi tiedot ja sähköpostiosoitteesi, jotta asiakas voi lähettää sinulle maksuvahvistuksen.

![Manuaalisen maksuyhdyskäytävän valitsin ja Maksuohjeet-tekstialue](/img/config/manual-gateway-expanded.png)

Tässä on manuaalisen yhdyskäytävän asetusnäkymä:

![Manuaalisen yhdyskäytävän asetukset](/img/config/manual-gateway-settings.png)

Kun olet määrittänyt sen, napsauta vain **Tallenna asetukset**, ja se on valmis. Kun käyttäjät rekisteröityvät verkostoosi, he näkevät viestin, jossa kerrotaan, että he saavat ohjeesi ostoksen viimeistelemiseksi.

![Rekisteröinnin vahvistusviesti, joka kertoo käyttäjälle, että hän saa maksuohjeet](/img/frontend/registration-manual-notice.png)

He saavat myös viestin **Kiitos**-sivullasi maksuohjeidesi kanssa.

<!-- Kuvakaappaus ei saatavilla: Kiitos-sivu, joka näyttää maksuohjeet checkoutin jälkeen -->

## Manuaalisten maksujen vahvistaminen {#confirming-manual-payments}

Vahvistaaksesi manuaalisen maksun siirry vasemman palkin **Maksut**-valikkoon. Siellä näet kaikki verkostosi maksut ja niiden tiedot, mukaan lukien niiden **tilan**. Manuaalisella maksulla on aina **Odottaa**-tila, kunnes muutat sen manuaalisesti.

![Maksuluettelo, jossa näkyy odottava manuaalinen maksu](/img/admin/payments-list.png)

Avaa maksusivu napsauttamalla **viitekoodia**. Tällä sivulla on kaikki odottavan maksun tiedot, kuten viitetunnus, tuotteet, aikaleimat ja muuta.

![Maksun tietosivu, jossa näkyy viitekoodi, tuotteet ja loppusummat](/img/admin/payment-edit.png)

Oikeassa sarakkeessa voit muuttaa maksun tilaa. Sen muuttaminen tilaan **Valmis** ja **Aktivoi jäsenyys** -vaihtoehdon ottaminen käyttöön ottaa asiakkaasi site käyttöön, ja hänen jäsenyytensä on aktiivinen.

![Maksun muokkaussivu, jossa tilaksi on asetettu Valmis ja Aktivoi jäsenyys -valitsin](/img/admin/payment-activate-membership.png)
