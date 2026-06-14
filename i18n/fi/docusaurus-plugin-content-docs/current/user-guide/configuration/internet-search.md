---
title: Verkkohaku
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Haku

Gratis AI Agent v1.5.0 lisää **Internet Haku** -ominaisuuden, joka antaa tekoälyassistentille hakea ajankohtaista tietoa verkosta keskustelun aikana. Tämä toiminto perustuu [Brave Search API](https://brave.com/search/api/) tai [Tavily API](https://tavily.com/).

## Miten se toimii

Kun internet-haku on käytössä, assistentti voi automaattisesti kysyä konfiguroitua hakualustaa, kun se päättää, että kysymys vaatii ajankohtaista tai ulkoista tietoa – esimerkiksi tuoreita uutisia, reaaliaikaista hintatietoa tai dokumentaatiota, joka on saattanut muuttua mallin koulutusajankohdan jälkeen.

Tulokset haetaan reaaliajassa ja syötetään assistentin kontekstiin ennen kuin se luo vastauksen. Assistentti ilmoittaa, milloin se on käyttänyt hakutuloksia kysymyksen vastaamiseen.

## Internet Hakuominaisuuden Aktivoiminen

Internet-haku vaatii API-avaimen valitsemastasi hakualustalta. Konfiguroimiseksi:

1. Mene **Gratis AI Agent → Asetukset → Edistyneet (Advanced)** -sivulle.
2. Etsi pudotusvalikko **Internet Search Provider** ja valitse joko **Brave Search** tai **Tavily**.
3. Syötä API-avaimesi vastaavaan kenttään. Rekisteröitymislinkkejä näytetään jokaisen kentän vieressä.
4. Napsauta **Save Settings (Tallenna asetukset)**.

Kun avain on tallennettu, Internet Haku -ominaisuus on automaattisesti käytettävissä assistentille.

## Brave Search

### Brave Search API-avaimen hankkiminen

1. Vieraile [Brave Search API -sivulla](https://brave.com/search/api/).
2. Rekisteröidy suunnitelmaan. Ilmainen taso on saatavilla kuukausittaisella pyyntilimitalla.
3. Kopioi API-avaimesi Brave Searchin kehittäjäportaaliin liittyvältä.
4. Liitä se **Brave Search API Key** -kenttään Gratis AI Agentin asetuksissa.

### Käyttörajat

Käyttö maksetaan Brave Search -palvelun perusteella tehtyjen kyselyjen määrän mukaan. Jokainen AI-vastaus, joka laukaisee haun, lasketaan yhdeksi kyselyksi. Seuraa käyttöä [Brave Search developer dashboard](https://brave.com/search/api/) -sivulla välttääksesi odottamattomia veloituksia.

## Tavily

Superdav AI Agent v1.10.0 lisää **Tavily** vaihtoehtona internet-hakemistona, tarjoten rikkaampia hakutuloksia ja edistyneempi tutkimusominaisuuksia.

### Tavily API-avaimen hankkiminen

1. Vieraile [Tavily API -sivulla](https://tavily.com/).
2. Rekisteröidy tilille. Ilmaisversio on saatavilla kuukausittaisella pyyntilimitalla.
3. Kopioi API-avaimesi Tavily-dashboardista.
4. Liitä se **Tavily API Key** -kenttään Gratis AI Agent -asetuksissa.

### Käyttörajat

Käyttö maksetaan Tavilyn perusteella tehtyjen API-kutsujen määrän mukaan. Jokainen AI-vastaus, joka laukaisee haun, lasketaan yhdeksi kutsuksi. Seuraa käyttöä [Tavily dashboard](https://tavily.com/) -sivulla välttääksesi odottamattomia veloituksia.

## Internet-haun poistaminen

Poista API-avaimen aktiivisesta hakupalvelin-kentästä ja tallenna. Internet-hakuominaisuus ei enää tarjota avustajalle.

:::note
Internet-haku lisää viiveitä vastauksissa, koska avustajan on odotettava hakutuloksia ennen vastauksen luomista. Aikaherkkiin käyttökohteisiin kannattaa harkita, onko reaaliaikainen haku tarpeen vai riittääkö avustajan sisäänrakennettu tieto.
:::
