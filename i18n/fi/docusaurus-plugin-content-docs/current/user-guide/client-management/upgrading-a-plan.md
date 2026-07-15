---
title: Suunnitelman päivittäminen
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Suunnitelman päivittäminen (v2)

_**TÄRKEÄ HUOMIO: Tämä artikkeli viittaa Ultimate Multisite -versioon 2.x.**_

Asiakkaillasi voi päivittää suunnitelmansa milloin tahansa. He voivat joko päivittää toiseen suunnitelmaan tai ostaa minkä tahansa lisäpalvelun tai paketin, jonka tarjoat verkostossasi.

Tässä ohjeessa käymme läpi, miten he voivat päivittää suunnitelmansa ja mitä tapahtuu päivittäminen prosessin jälkeen.

Suunnitelman päivittämiseksi asiakkaiden tulee kirjautua sisään hallintapaneeliinsa (dashboard) ja siirtyä **Account**-sivulle.

![Asiakkaan alayksikön hallintapaneeli, jossa näkyy Account-valikon linkki](/img/account-page/account-menu.png)

Account-sivulla he näkevät nykyisen jäsenyyden ja siihen liittyvän suunnitelman tiedot. Päivittymiseen toiseen suunnitelmaan ne on klikattava **Change** (Vaihda) -painiketta **Your Membership** (Jäsenyytesi) -osion oikeasta yläkulmasta.

![Account-sivu Jäsenyytesi-kortti, jossa Change-painike](/img/account-page/membership-change-button.png)

He ohjataan kassalle, jossa näkyvät kaikki saatavilla olevat suunnitelmat.

He voivat myös nähdä **services and packages available for their current plan** (palvelut ja paketit heidän nykyiselle suunnitelmalleen), jos haluavat vain ostaa tietyn palvelun tai paketin (kuten tässä esimerkissä rajaton vierailut tai tallennustila), eikä päivittää itse suunnitelmaa.

![Päivittäjävalitsin, joka näyttää saatavilla olevat suunnitelmat ja paketit asiakkaan puolelta](/img/account-page/upgrade-picker.png)

Kun he valitsevat haluamansa tuotteen ostettavaksi, he näkevät, kuinka paljon he täytyy maksaa juuri nyt – ilman olemassa olevaa luottoa – ja kuinka paljon he veloitetaan seuraavalla laskutusajalla.

Yleensä, jos tuote on toinen suunnitelma ja maksu tehdään jäsenyyden maksun välillä, he saavat luoton kyseisestä ensimmäisestä suunnitelmasta maksetusta summasta.

![Päivitä maksun yhteenveto, joka näyttää lisättynä luoton ja seuraavan laskutusmäärän](/img/account-page/upgrade-summary.png)

Jos valitset suunnitelman tai paketin, joka ei muuta mitään nykyisestä tilauksestasi, näet viestin, jossa selitetään tämä.

![Huomautus, kun valittu suunnitelma ei muuta tilausta](/img/account-page/upgrade-no-change.png)

Kun kassalle siirryt ja osto on suoritettu, uudet tuotteet lisätään asiakkaiden tililleen heti, ja uusien tuotteiden kaikki rajoitukset tai ominaisuudet lisätään heti: vierailut, tallennustila, julkaisut jne...

## Päivitys- ja alennusreitit (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

Jokaisessa tuotteessasi on **Up & Downgrades** -välilehti. Tämän välilehden ensimmäinen vaihtoehto on kenttä nimeltä **Plan Group**.

**Plan groups** mahdollistaa sen, että kerrot Ultimate Multisite-järjestelmälle, että tietyt suunnitelmat kuuluvat samaan "perheeseen", ja siksi niitä tulisi käyttää päivittymis-/alennusreitin vaihtoehtojen rakentamiseen.

![Tuotteen muokkaus Up & Downgrades -välilehti Plan Group -kentällä](/img/config/product-upgrades-plan-group.png)

Esimerkiksi sinulla on saatavilla **Ilmainen suunnitelma**, **Perustaso** ja **Premium-suunnitelma**. Haluat, että käyttäjät, jotka ovat tilaajia **Ilmaisella suunnitelmalla**, voivat päivittää vain **Premium-suunnitelmaan** eikä halua heidän näkevän "Perustason" päivitysoptiona. Kaikki tarvitset tekemään on määrittää sama plan group -nimi sekä ilmaiselle että premium-suunnitelmalle kuten alla olevissa kuvissa.

![Ilmainen suunnitelman tuotesivu, jossa on määritetty High End -ryhmä](/img/config/product-upgrades-free.png)

![Premium-suunnitelman tuotesivu, jossa on määritetty High End -ryhmä](/img/config/product-upgrades-premium.png)

Tämä ohjelma kertoo Ultimate Multisite-järjestelmälle, että verkossa on suunnitelmien "perhe" nimeltä **High End**. Kun tarjotaan päivityksiä tai alennuksia, käyttäjälle näytetään vaihtoehtoina vain samasta perheen suunnitelmat.
