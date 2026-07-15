---
title: 'Oppitunti 7: Tee siitä omasi'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Oppitunti 7: Tee siitä omasi

Asiakkaidesi ei pitäisi koskaan tuntea käyttävänsä "jotain WordPress-lisäosaa." Heidän pitäisi tuntea käyttävänsä FitSitea -- heidän toimialalleen rakennettua alustaa. Tämä oppitunti käsittelee brändäystä, white-labelöintiä ja sitä, miten alustasta tehdään tuotteen tuntuinen.

## Mihin jäimme {#where-we-left-off}

FitSitella on toimiva kassaprosessi, joka vie fitness-studioiden omistajat paketin valinnasta julkaistulle sivustolle. Nyt teemme koko kokemuksesta yhtenäisen, brändätyn tuotteen tuntuisen.

## Alustasi verkkotunnus {#your-platform-domain}

Brändisi perusta on verkkotunnuksesi. FitSitelle:

- **Pääverkkotunnus**: `fitsite.com` (markkinointisivustosi ja verkon juuri)
- **Asiakassivustot**: `studioname.fitsite.com` (aliverkkotunnukset)
- **Mukautetut verkkotunnukset**: Growth- ja Pro-pakettien asiakkaat voivat liittää oman verkkotunnuksensa

### Verkkotunnuksesi määrittäminen {#setting-up-your-domain}

1. Rekisteröi alustasi verkkotunnus
2. Osoita se hosting-palveluntarjoajallesi
3. Määritä wildcard DNS (`*.fitsite.com`) asiakasaliverkkotunnuksille
4. Varmista, että wildcard SSL on aktiivinen

Katso tarkat ohjeet kohdasta [Verkkotunnuksen liittämisen määrittäminen](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## Admin-kokemuksen white-labelöinti {#white-labeling-the-admin-experience}

Kun fitness-studion omistaja kirjautuu sivustonsa Dashboardiin, hänen pitäisi nähdä sinun brändisi, ei WordPress- tai Ultimate Multisite -brändäystä.

### Mukautettu kirjautumissivu {#custom-login-page}

Mukauta WordPress-kirjautumissivu näyttämään:

- FitSite-logosi
- Fitness-aiheinen taustakuvitus
- Brändivärisi

### Dashboard-brändäys {#dashboard-branding}

Käytä [Admin Page Creator](/addons/admin-page-creator) -lisäosaa tai mukautettua CSS:ää:

- Korvaa WordPress-logo FitSite-logollasi
- Mukauta admin-värimaailma vastaamaan brändiäsi
- Lisää mukautettu Dashboard-widget, jossa on fitness-aiheisia pikalinkkejä ja tukiresursseja

### Mukautetut admin-sivut {#custom-admin-pages}

Harkitse mukautettujen admin-sivujen luomista, jotka nostavat esiin fitness-studioiden omistajille olennaisimmat toiminnot:

- "Muokkaa tuntiaikatauluasi"
- "Päivitä valmentajaprofiilit"
- "Näytä sivustosi"

Tämä madaltaa oppimiskynnystä tuomalla nicheen liittyvät toiminnot näkyvästi etualalle sen sijaan, että ne hautautuisivat WordPressin vakiovalikkoon.

## Viestinnän brändäys {#branding-your-communications}

Jokaisen sähköpostin, laskun ja ilmoituksen pitäisi vahvistaa brändiäsi.

### Järjestelmäsähköpostit {#system-emails}

Siirry kohtaan **Ultimate Multisite > Asetukset > Sähköpostit** ja mukauta kaikki järjestelmäsähköpostit:

- **Lähettäjän nimi**: FitSite
- **Lähettäjän sähköposti**: hello@fitsite.com
- **Sähköpostimallit**: Käytä brändivärejäsi ja logoasi
- **Kieli**: Fitness-aiheinen kauttaaltaan

Tärkeät mukautettavat sähköpostit:

| Sähköposti | Yleinen versio | FitSite-versio |
|-------|----------------|-----------------|
| Tervetuloa | "Uusi sivustosi on valmis" | "Fitness-studiosi verkkosivusto on julkaistu" |
| Maksukuitti | "Maksu vastaanotettu" | "FitSite-tilausmaksu vahvistettu" |
| Kokeilujakso päättymässä | "Kokeilujaksosi päättyy pian" | "FitSite-kokeilujaksosi päättyy 3 päivän kuluttua -- pidä studiosi verkkosivusto julkaistuna" |

### Laskut {#invoices}

Mukauta laskumallit sisältämään:

- FitSite-logosi ja brändivärisi
- Yrityksesi tiedot
- Fitness-aiheiset tuotenimet (ei yleisiä pakettien tunnuksia)

## Asiakkaille näkyvä sivusto {#the-customer-facing-site}

Pääverkkotunnuksesi (`fitsite.com`) tarvitsee markkinointisivuston, joka myy alustaa. Tämä on erillinen Ultimate Multisite -verkon administa -- se on yrityksesi julkinen kasvot.

Keskeiset sivut:

- **Etusivu**: Selkeä arvolupaus fitness-yrityksille
- **Ominaisuudet**: Mitä FitSite tekee fitness-termein
- **Hinnoittelu**: Kolme pakettiasi niche-kohtaisilla ominaisuusvertailuilla
- **Esimerkit**: Esittele alustalle rakennettuja sivustoja
- **Rekisteröityminen**: Linkit kassalomakkeeseesi

:::tip Your Marketing Site Can Be a Network Site
Create your marketing site as a site within your own network. This lets you manage it from the same dashboard and demonstrates your own platform's capabilities.
:::

## Mukautettu verkkotunnus asiakkaille {#custom-domain-for-customers}

Asiakkaille, joiden paketteihin sisältyy mukautettuja verkkotunnuksia, dokumentoi prosessi selkeästi:

1. Asiakas rekisteröi verkkotunnuksensa tai siirtää sen rekisterinpitäjälle
2. Asiakas päivittää DNS:n osoittamaan alustallesi (anna tarkat tietueet)
3. Ultimate Multisite hoitaa verkkotunnuksen liittämisen ja SSL:n

Luo tätä prosessia varten ohjeartikkeli tai tietopankkimerkintä, joka on kirjoitettu ei-teknisille fitness-studioiden omistajille.

## FitSite-verkko tähän mennessä {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Mitä rakensimme tällä oppitunnilla {#what-we-built-this-lesson}

- **Alustan verkkotunnus ja DNS** määritetty brändättyä kokemusta varten
- **White-labelöity admin** FitSite-brändäyksellä kauttaaltaan
- **Mukautettu viestintä** -- sähköpostit, laskut ja ilmoitukset kaikki brändin mukaisia
- **Markkinointisivusto**, joka myy FitSitea fitness-studioiden omistajille
- **Mukautetun verkkotunnuksen dokumentaatio** asiakkaille, jotka haluavat oman verkkotunnuksen

---

**Seuraava:** [Oppitunti 8: Asiakkaan käyttöönotto](lesson-8-onboarding) -- suunnittelemme kokemuksen, joka muuttaa uuden rekisteröityjän aktiiviseksi, tyytyväiseksi asiakkaaksi.
