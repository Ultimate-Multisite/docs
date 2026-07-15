---
title: 'Oppitunti 5: Suunnitelmiesi suunnittelu'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Oppitunti 5: Suunnitelmiesi suunnittelu

Suunnitelmatasosi eivät ole vain hinnoittelutasoja -- ne heijastavat sitä, miten markkinarakosi asiakkaat todellisuudessa toimivat. Tässä oppitunnissa suunnittelet tuotetasot, jotka vastaavat kuntoilualan yritysten todellisia tarpeita eri vaiheissa.

## Mihin jäimme {#where-we-left-off}

FitSitella on kolme mallia valmiina (Studio Essential, Gym Pro, Fitness Chain). Nyt luomme suunnitelmat, jotka määrittävät, mihin asiakkaat saavat käyttöoikeuden ja mitä he maksavat.

## Asiakassegmenttien pohtiminen {#thinking-in-customer-segments}

Useimpien ihmisten tekemä virhe on suunnitella suunnitelmat teknisten ominaisuuksien ympärille (tallennustila, kaistanleveys, sivujen määrä). Markkinarakosi asiakkaat eivät ajattele näillä termeillä. Kuntosalin omistaja ajattelee, mitä hän tarvitsee yrityksensä pyörittämiseen.

Fitness-studioille on olemassa kolme luonnollista segmenttiä:

| Segmentti | Keitä he ovat | Mitä he tarvitsevat |
|---------|-------------|----------------|
| **Yksinyrittäjät / pienet studiot** | 1–3 työntekijää, yksi toimipiste, aloitusvaiheessa | Ammattimainen sivusto, tuntitiedot, yhteydenottolomake |
| **Vakiintuneet kuntosalit** | 5–20 työntekijää, yksi toimipiste, kasvussa | Kaikki yllä oleva sekä ajanvaraus, blogi, galleria, mukautettu verkkotunnus |
| **Fitness-ketjut** | Useita toimipisteitä, vakiintunut brändi | Kaikki yllä oleva sekä useita sivustoja, toimipistesivut, henkilöstöhakemisto |

Suunnitelmiesi tulisi vastata näitä segmenttejä, ei mielivaltaisia ominaisuuspaketteja.

## FitSite-suunnitelmien luominen {#creating-the-fitsite-plans}

Siirry kohtaan **Ultimate Multisite > Tuotteet > Lisää tuote** kullekin suunnitelmalle.

### Suunnitelma 1: FitSite Starter -- $49/kuukausi {#plan-1-fitsite-starter----49month}

**Kohde**: Yksinyrittäjät ja pienet studiot

**Kuvaus-välilehti**:
- Nimi: FitSite Starter
- Kuvaus: "Kaikki, mitä personal trainer tai pieni studio tarvitsee näyttääkseen ammattimaiselta verkossa."

**Yleiset-välilehti**:
- Tuotetyyppi: Suunnitelma
- Asiakasrooli: Ylläpitäjä

**Sivustomallit-välilehti**:
- Salli sivustomallit: Käytössä
- Saatavilla olevat mallit: Vain Studio Essential

**Rajoitukset**:
- Sivustot: 1
- Levytila: 1 Gt
- Mukautettu verkkotunnus: Pois käytöstä (käyttää muotoa `studioname.fitsite.com`)

**Lisäosat-välilehti**:
- Yhteydenottolomakkeen lisäosa: Pakota aktivointi
- SEO-lisäosa: Pakota aktivointi
- Ajanvarauslisäosa: Ei saatavilla (kannustin päivittämiseen)

**Teemat-välilehti**:
- Valitsemasi teema: Pakota aktivointi
- Kaikki muut teemat: Piilotettu

### Suunnitelma 2: FitSite Growth -- $99/kuukausi {#plan-2-fitsite-growth----99month}

**Kohde**: Vakiintuneet yhden toimipisteen kuntosalit

**Kuvaus-välilehti**:
- Nimi: FitSite Growth
- Kuvaus: "Vakiintuneille kuntosaleille, jotka ovat valmiita kasvattamaan verkkonäkyvyyttään ja houkuttelemaan uusia jäseniä."

**Sivustomallit-välilehti**:
- Saatavilla olevat mallit: Studio Essential ja Gym Pro

**Rajoitukset**:
- Sivustot: 1
- Levytila: 5 Gt
- Mukautettu verkkotunnus: Käytössä

**Lisäosat-välilehti**:
- Kaikki Starter-suunnitelmassa, lisäksi:
- Ajanvarauslisäosa: Pakota aktivointi
- Gallerialisäosa: Pakota aktivointi
- Blogitoiminnallisuus: Saatavilla

**Päivitykset ja alennukset -välilehti**:
- Suunnitelmaryhmä: FitSite Plans
- Tuotejärjestys: 2

### Suunnitelma 3: FitSite Pro -- $199/kuukausi {#plan-3-fitsite-pro----199month}

**Kohde**: Usean toimipisteen fitness-ketjut

**Kuvaus-välilehti**:
- Nimi: FitSite Pro
- Kuvaus: "Täydellinen alusta fitness-brändeille, joilla on useita toimipisteitä."

**Sivustomallit-välilehti**:
- Saatavilla olevat mallit: Kaikki kolme mallia

**Rajoitukset**:
- Sivustot: 5 (yksi per toimipiste)
- Levytila: 20 Gt
- Mukautettu verkkotunnus: Käytössä

**Lisäosat-välilehti**:
- Kaikki Growth-suunnitelmassa, lisäksi:
- Kaikki premium-lisäosat: Pakota aktivointi

**Päivitykset ja alennukset -välilehti**:
- Suunnitelmaryhmä: FitSite Plans
- Tuotejärjestys: 3

## Suunnitelmaryhmän määrittäminen {#setting-up-the-plan-group}

Suunnitelmaryhmä varmistaa, että asiakkaat voivat päivittää tai alentaa suunnitelmaansa vain FitSite-suunnitelmaperheen sisällä. Kunkin suunnitelman **Päivitykset ja alennukset** -välilehdellä:

1. Aseta **Suunnitelmaryhmäksi** "FitSite Plans" kaikille kolmelle suunnitelmalle
2. Aseta **Tuotejärjestykseksi** 1 (Starter), 2 (Growth), 3 (Pro)

Tämä luo selkeän päivityspolun: Starter → Growth → Pro.

## Tilauslisien lisääminen {#adding-order-bumps}

Tilauslisät ovat lisätuotteita, joita tarjotaan maksuvaiheessa. FitSitelle kannattaa harkita:

- **Lisätallennustilapaketti** ($19/kuukausi) -- 5 Gt lisää levytilaa
- **Prioriteettituki** ($29/kuukausi) -- nopeammat vastausajat
- **Lisäsivusto** ($39/kuukausi) -- asiakkaille, jotka tarvitsevat enemmän sivustoja kuin heidän suunnitelmansa sallii

Luo nämä **Paketti**-tyyppisinä tuotteina Ultimate Multisite -palvelussa ja yhdistä ne asiaankuuluviin suunnitelmiin.

## Miksi tämä rakenne toimii {#why-this-structure-works}

- **Starter** poistaa aloituksen esteitä -- matala hinta, yksinkertainen tarjonta, saa trainerit verkkoon nopeasti
- **Growth** lisää ominaisuudet, joita kuntosalit oikeasti pyytävät -- ajanvaraus, galleriat, mukautetut verkkotunnukset
- **Pro** palvelee arvokasta segmenttiä, joka tarvitsee tukea useille toimipisteille
- **Tilauslisät** antavat asiakkaiden mukauttaa ilman, että ydinsuunnitelmat monimutkaistuvat
- **Selkeä päivityspolku** tarkoittaa, että asiakkaat kasvavat kanssasi sen sijaan, että lähtisivät pois

## FitSite-verkosto tähän mennessä {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Mitä rakensimme tässä oppitunnissa {#what-we-built-this-lesson}

- **Kolme suunnitelmatasoa**, jotka on sovitettu todellisiin fitness-liiketoimintasegmentteihin
- **Ominaisuuksien portitus** Ultimate Multisite -lisäosa- ja mallihallintojen avulla
- **Suunnitelmaryhmä**, jossa on selkeä päivityspolku
- **Tilauslisätuotteet** lisätuloja varten
- **Hinnoittelurakenne**, joka perustuu asiakkaan arvoon, ei teknisiin määrityksiin

---

**Seuraavaksi:** [Oppitunti 6: Rekisteröitymiskokemus](lesson-6-checkout) -- rakennamme maksupolun, joka muuntaa fitness-studioiden omistajat maksaviksi asiakkaiksi.
