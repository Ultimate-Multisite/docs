---
title: Alennuskoodien luominen
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Alennin luominen alennuskoodeja (v2)

_**TÄRKEÄ HUOMIO: Tämä artikkeli viittaa Ultimate Multisite -versioon 2.x.**_

Ultimate Multisite -järjestelmällä voit luoda alennuskoodejä antaa asiakkaille alennuksia tilausmaksunsa tai tilauksensa yhteydessä. Ja niiden luominen on helppo!

## Alennuskoodien luominen ja muokkaaminen {#creating-and-editing-discount-codes}

Alennuskoodin luomiseen tai muokkaamiseen siirry **Ultimate Multisite > Discount Codes** -sivulle.

![Alennuskoodilista — tyhjä tila ennen kuin koodejä on olemassa](/img/config/discount-codes-empty.png)

Siellä näet luettelon jo luomillesi alennuskoodeista.

Voit klikata **Add Discount Code** -painiketta uuden kuponkin luomiseksi tai voit muokata niitä vietäessesi hiiren kursoria niiden päälle ja napsauttamalla **Edit**.

![Alennuskoodilista, jossa näkyy hover-toimintoja Edit- ja Delete-linkkejä](/img/config/discount-codes-list-hover.png)

![Add Discount Code -painike sivun yläpalkissa](/img/config/discount-codes-add-button.png)

Sinut ohjataan sivulle, josta luot tai muokkaat kuponkikoodia. Tässä esimerkissä luomme uuden koodin.

![Alennuskoodin muokkaussivu kaikilla osioilla näkyvissä](/img/config/discount-code-edit.png)

Katso vielä saatavilla olevia asetuksia:

**Enter Discount Code (Syötä alennuskoodi):** Tämä on vain alennuskoodisi nimi. Tämä ei ole se koodi, jota asiakkaiden täytyy käyttää kassalla.

**Description (Kuvaus):** Tässä voit lyhyesti kuvailla, mihin tämä kuponki liittyy.

![Alennuskoodin nimen ja kuvauksen kentät muokkaussivun yläosassa](/img/config/discount-code-description.png)

Voit myös tarkastella alennuskoodia aktiivisena tai passiivisena:

![Alennuskoodin tila aktiivinen status](/img/config/discount-code-active.png)

**Coupon code (Kuponkikoodi):** Tässä määrität koodin, jota asiakkaiden täytyy syöttää kassalla.

![Kuponkoodikenttä, johon asiakkaat syöttävät koodin kassalla](/img/config/discount-code-coupon-field.png)

**Alennus:** Tässä voit asettaa joko **prosenttiosuuden** tai **kiinteän summan** alennukseen.

![Alennusmäärän asetukset prosentuaalisena tai kiinteänä summana pudotusvalikolla](/img/config/discount-code-amount.png)

**Soveltuu uusimisiin:** Jos tätä vaihtoehtoa ei ole päällä, tämä alennuskoodi soveltuu vain **ensimmäiseen maksuun**. Kaikki muut maksut eivät saa alennusta. Jos tätä vaihtoehtoa on päällä, alennuskoodi on voimassa kaikille tuleville maksuille.

**Asennusmaksun alennus:** Jos tätä vaihtoehtoa ei ole päällä, kuponkikoodi **ei anna mitään alennusta asennusmaksulle**. Jos tätä vaihtoehtoa on päällä, voit määrittää (prosenttiosuuden tai kiinteän summan), jota tämä kuponkikoodi soveltaa tilausmaksuun.

![Vaihtoehdot uusimisiin ja asennusmaksun alennukseen -kytkinvalinnat](/img/config/discount-code-renewals.png)

**Aktiivinen:** Aktivoi tai deaktivoi tätä kuponkikoodia manuaalisesti.

![Aktiivinen kytkin, jolla voit käynnistää tai sammuttaa alennuskoodin manuaalisesti](/img/config/discount-code-active.png)

**Lisäasetuksissa** meillä on seuraavat asetukset:

![Alennuskoodin lisäasetukset](/img/config/discount-code-advanced.png)

**Käytön rajoitus:**

  * **Käytöt:** Tässä näet, kuinka monta kertaa alennuskoodia on käytetty.

  * **Maksimikäyttömäärä:** Tämä rajoittaa sitä, kuinka monta kertaa käyttäjät voivat käyttää tätä alennuskoodia. Esimerkiksi jos asetat tähän 10, kuponkia voidaan käyttää vain 10 kertaa. Tämän rajan jälkeen kuponkikoodia ei enää voi käyttää.

![Käytön rajoituksen asetukset nykyisen käytön määrän ja maksimikäyttömäärän kentällä](/img/config/discount-code-limit-uses.png)

**Aloitus- ja päättymispäivämäärät:** Tässä voit lisätä aloituspäivämäärän ja/tai päättymispäivämäärän kuponkiisi.

![Aloitus- ja päättymispäivämääräkentät alennuskoodin aikataulutukseen](/img/config/discount-code-dates.png)

**Rajoita tuotteisiin:** Jos kytket päälle **Valitse tuotteet**, kaikki tuotteesi näkyvät sinulle. Voit valita manuaalisesti (kytkemällä päälle tai pois päältä), mitkä tuotteet voivat hyväksyä tätä alennuskoodia. Tuotteet, joille tämä on kytketty pois päältä tässä kohdassa, eivät näytä mitään muutoksia, jos asiakkaasi yrittävät käyttää tätä alennuskoodia niihin.

![Rajoita tuotteisiin -osio yksittäisten tuotteiden päälle kytkettyjen kytkimien kanssa](/img/config/discount-code-limit-products.png)

Kun olet asettanut kaikki nämä vaihtoehdot, klikkaa **Tallenna alennuskoodi** tallentaaksesi kuponkikoodin ja valmis!

![Tallenna alennuskoodi -painike muokkaussivun alareunassa](/img/config/discount-code-save.png)

Kuponki on nyt listallasi, ja sieltä voit klikata **muokata tai poistaa** sen.

![Alennuskoodirivi listalla Edit- ja Delete-hover-toiminnolla](/img/config/discount-codes-list-hover.png)

###

### URL-parametrien käyttö: {#using-url-parameters}

Jos haluat räätälöidä hinnoittelutabelisi tai rakentaa kauniin kuponkikoodisivun verkkosivustollesi ja haluat soveltaa alennuskoodia automaattisesti kassalle, voit tehdä tämän URL-parametrien avulla.

Ensin sinun täytyy saada jakamispainotteinen linkki suunnitelmallesi. Tätä varten siirry **Ultimate Multisite > Products** -osioon ja valitse suunnitelma.

Klikkaa painiketta **Napsauta kopioi jakamispainotteinen linkki**. Tämä antaa sinulle jakamispainotteisen linkin tälle nimenomaiselle suunnitelmalle. Meidän tapauksessamme annettu jakamispainotteinen linkki oli [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Tuotesivu jakamispainotteisella linkillä](/img/config/products-list.png)

Sovellaksesi alennuskoodia tähän tiettyyn suunnitelmaan, lisää parametri **?discount_code=XXX** URL-osoitteeseen. Missä **XXX** on kuponinkoodisi.

Esimerkkikuten tässä käytämme kuponinkoodia **50OFF** tähän tiettyyn tuotteeseen.

URL tämäntyyppiselle suunnitelmalle ja 50OFF-alennuskoodilla sovelletunneen näyttää näin: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
