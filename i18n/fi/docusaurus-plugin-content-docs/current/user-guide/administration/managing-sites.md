---
title: Sivujen hallinta
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Sivustojen hallinta {#managing-sites}

Sivut (tai alalohkot) ovat ydinliiketoimintasi WaaS-yrityksessä. Ultimate Multisiteessa on kolme sivun tyyppiä:

- **Asiakkaan omistama** — Sivut, jotka kuuluvat tiettyihin asiakkaisiin
- **Sivustotemplaatit** — Esivalmiita sivustoja, joita asiakkaat voivat valita lähtökohtana
- **Pääsivu** — Sinun ensisijainen verkko-sivusto

## Sivujen katselu {#viewing-sites}

Siirry kohtaan **Ultimate Multisite → Sites** nähdäksesi kaikki alalohkot verkossasi. Jokaisella sivulla on tyyppi merkintä ja voit suodattaa näkymää kaikista sivuista, asiakkaan omistamat, templatit tai odotettavat.

![Sivujen luettelon sivu](/img/admin/sites-list.png)

## Uuden sivun lisääminen {#adding-a-new-site}

Napsauta **Add Site** -painiketta uuden sivuston luomiseksi. Sinun on annettava:

- **Site Title** — Uuden sivuston nimi
- **Site URL** — Sivuston domeeni/polku
- **Site Type** — Onko kyseessä asiakkaan sivu, templaatti vai tavallinen sivu

**Copy Site** -vaihtoehto antaa sinun luoda uuden sivuston olemassa olevan sivustotemplanin perusteella. Kun tätä on käytetty, voit valita, mitä templaattia käytetään lähtökohtana. Varmista, että **Copy Media on Duplication** on aktivoitu sisällön (media) mukaan.

## Olemassa olevan sivun hallinta {#managing-an-existing-site}

Napsauta minkä tahansa sivun kohdalla **Manage** avataksesi **Edit Site** -sivun. Täällä löydät:

### Perustiedot {#basic-information}

Sivun nimi, tyyppi, site ID ja kuvaus. Näet myös kartoituneen domeenin, siihen liittyvän jäsenyyden sekä asiakkaan tilin, joka omistaa sivuston.

### Sivustoiminnallisuudet {#site-options}

Määrittele sivuston ominaisuudet ja rajoitukset:

- **Visit limits** — Maksimimäärä sivuston vierailuille
- **User account limits** — Käyttäjäroolien perusteella rajat
- **Disk space** — Sivustolle varattu tallennustila
- **Custom domain** — Mahdollistaa domeenin kartoituksen tälle sivulle
- **Plugin and theme visibility** — Hallitsee, mitkä pluginit ja teemat näkyvät, piilotetaan tai ovat valmiiksi aktivoituina

Oletuksena sivustot noudattavat jäsenyysasetuksia, jotka on määritetty jäsenyystasolla. Sivuston tason rajoitusten asettaminen ylittää nämä jäsenyysasetukset.

### Yhteydet (Associations) {#associations}

Sivuston asetusten alla löydät tiedot seuraavista:

- **Mappaukset** sivustoon liittyvät
- **Jäsenyys**, jolle sivu kuuluu
- **Asiakkauskonto**, joka on liitetty sivustoon

### Oikeanpuoleinen valikko (Right Sidebar) {#right-sidebar}

Oikealla voit:

- **Osoittaa/poistaa käytöstä sivuston** kytkinkytimen avulla
- **Muuttaa sivuston tyyppiä** tai määrittää omistajuuden uudelleen
- **Asettaa sivun kuvan/pienoiskuvan** (näkyy etupuolella sivustotemojen yhteydessä)
- **Poistaa sivuston** pysyvästi

:::warning
Sivuston poistaminen on peruuttamaton. Sivu ja kaikki sen sisältö poistetaan pysyvästi.
:::
