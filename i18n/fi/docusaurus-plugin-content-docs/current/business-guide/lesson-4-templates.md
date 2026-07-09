---
title: 'Oppitunti 4: Niche-mallien rakentaminen'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Oppitunti 4: Niche-mallien rakentaminen

Mallit ovat niche-arvolupauksesi ydin. Kuntosaliohjaamon omistaja, joka rekisteröityy ja näkee sivuston, joka näyttää jo fitness-verkkosivustolta -- tuntiaikatauluineen, valmentajaprofiileineen ja oikeanlaisine kuvineen -- pysyy paljon todennäköisemmin kuin sellainen, joka näkee tyhjän pohjan.

## Mihin jäimme

Meillä on toimiva FitSite-verkosto, johon Ultimate Multisite on asennettu ja määritetty. Nyt rakennamme mallit, jotka saavat FitSiten tuntumaan nimenomaan fitness-yrityksille rakennetulta.

## Miksi niche-malleilla on merkitystä

Yleiset mallit pakottavat asiakkaasi tekemään vaikean työn: selvittämään, mitä sivuja he tarvitsevat, millainen sisältörakenne toimii ja miten sivustosta tehdään heidän toimialalleen sopivan näköinen. Niche-mallit poistavat tämän kitkan.

Kuntosaliohjaamon omistajan, joka rekisteröityy FitSiteen, pitäisi nähdä:

- Etusivu, joka näyttää fitness-studion verkkosivustolta
- Sivut tunneille, aikatauluille, valmentajille ja hinnoittelulle valmiiksi luotuina
- Kuvitus ja paikkamerkkisisältö, jotka sopivat heidän toimialaansa
- Ulkoasu, joka tuntuu ammattimaiselta ja fitness-brändiin sopivalta

He täyttävät omat tietonsa. He eivät aloita tyhjästä.

## Mallien suunnittelu

Ennen rakentamista päätä, mitä malleja tarjoat. FitSiteä varten luomme kolme:

### Malli 1: Studio Essential

Pienille studioille ja personal trainereille.

- **Etusivu**, jossa on hero-kuva, tuntien korostukset ja toimintakehote
- **Tietoa meistä** -sivu, jossa on studion tarina ja missio
- **Tunnit**-sivu, jossa on aikatauluasettelu
- **Valmentajat**-sivu, jossa on profiilikortit
- **Yhteys**-sivu, jossa on sijaintikartta ja lomake
- **Selkeä, moderni ulkoasu**, jossa on fitnessiin sopiva värimaailma

### Malli 2: Gym Pro

Vakiintuneille kuntosaleille, joilla on enemmän palveluja.

- Kaikki Studio Essential -mallissa oleva, sekä:
- **Jäsenyys**-sivu, jossa on hinnoittelutaulukko
- **Galleria**-sivu tilakuville
- **Blogi**-osio fitness-vinkeille ja uutisille
- **Asiakaspalautteet**-osio etusivulla
- **Näkyvämmät brändäys**vaihtoehdot

### Malli 3: Fitness Chain

Usean toimipisteen toimijoille.

- Kaikki Gym Pro -mallissa oleva, sekä:
- **Toimipisteet**-sivu, jossa on useita toimipistelistauksia
- **Franchise-/toimipiste**-alasivumalli
- **Keskitetty brändäys**, jossa on toimipistekohtaiset tiedot
- **Henkilöstöhakemisto** eri toimipisteille

## Mallisivuston rakentaminen

Ultimate Multisitessa malli on yksinkertaisesti WordPress-sivusto, joka on määritetty näyttämään siltä kuin haluat uusien asiakassivustojen näyttävän. Näin luot sellaisen:

### Vaihe 1: Luo mallisivusto

1. Siirry verkoston ylläpidossa kohtaan **Sivustot > Lisää uusi**
2. Luo sivusto nimeltä `template-studio-essential`
3. Tästä sivustosta tulee työpohjasi

### Vaihe 2: Asenna ja määritä teema

Siirry mallisivuston Dashboardiin ja:

1. Aktivoi fitness-yrityksille sopiva teema
2. Määritä teeman asetukset, värit ja typografia
3. Määritä header ja footer fitnessiin sopivalla navigaatiolla

:::tip Teeman valinta
Valitse teema, joka on riittävän joustava näyttääkseen hyvältä fitness-käytössä mutta ei niin monimutkainen, etteivät asiakkaasi pysty hallitsemaan sitä. Teemat kuten Astra, GeneratePress tai Kadence toimivat hyvin, koska ne ovat kevyitä, mukautettavia ja hyvin tuettuja.
:::

### Vaihe 3: Luo sivut

Rakenna jokainen sivu sisältämään:

- **Paikkamerkkisisältöä**, joka kuulostaa luontevalta fitness-yritykselle ("Tervetuloa [Studion nimi]" eikä "Lorem ipsum")
- **Paikkamerkkikuvia** ilmaisilta kuvapankkisivustoilta, joissa näkyy fitness-toimintaa
- **Toimivia asetteluja** sivunrakentajalla tai lohkoeditorilla

Tee paikkamerkkisisällöstä mahdollisuuksien mukaan ohjaavaa. Yleisen täytetekstin sijaan kirjoita esimerkiksi: "Korvaa tämä lyhyellä kuvauksella studiostasi ja siitä, mikä tekee siitä erityisen. Mainitse valmennusfilosofiasi, kokemuksesi vuosissa tai se, mitä asiakkaat voivat odottaa."

### Vaihe 4: Määritä pluginit

Asenna ja aktivoi pluginit, joita fitness-studiot tarvitsevat:

- Varaus- tai aikataulutusplugin (jos se kuuluu plan-tasoosi)
- Yhteydenottolomakeplugin
- SEO-plugin (esimääritetty fitnessiin liittyvillä oletuksilla)

### Vaihe 5: Merkitse malliksi

1. Siirry kohtaan **Ultimate Multisite > Sivustot**
2. Muokkaa mallisivustoa
3. Ota käyttöön **Sivustomalli**-kytkin

Toista tämä prosessi jokaiselle mallille, jota haluat tarjota.

## Mallin laadun tarkistuslista

Ennen kuin asetat mallin saataville, varmista:

- [ ] Kaikki sivut latautuvat oikein ja näyttävät ammattimaisilta
- [ ] Paikkamerkkisisältö on hyödyllistä ja niche-kohtaista
- [ ] Kuvat ovat sopivia ja asianmukaisesti lisensoituja
- [ ] Mobiiliresponsiivisuus toimii kaikilla sivuilla
- [ ] Navigaatio on looginen ja täydellinen
- [ ] Yhteydenottolomakkeet toimivat
- [ ] Rikkinäisiä linkkejä tai puuttuvia resursseja ei ole
- [ ] Sivun latausnopeus on hyväksyttävä

## FitSite-verkosto tähän mennessä

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Site Templates
│   ├── Studio Essential (small studios, trainers)
│   ├── Gym Pro (established gyms)
│   └── Fitness Chain (multi-location)
└── Ready for plan configuration (next lesson)
```

## Mitä rakensimme tässä oppitunnissa

- **Kolme niche-kohtaista mallia**, jotka on suunniteltu erikokoisille fitness-yrityksille
- **Fitnessiin sopivaa sisältöä ja kuvastoa**, jotka saavat alustan tuntumaan tarkoitusta varten rakennetulta
- **Ohjaavaa paikkamerkkisisältöä**, joka opastaa asiakkaita mukauttamisessa
- **Laadun tarkistuslista**, jolla varmistetaan, että mallit ovat tuotantovalmiita

---

**Seuraavaksi:** [Oppitunti 5: Planien suunnittelu](lesson-5-plans) -- luomme product-tasot, jotka vastaavat sitä, miten fitness-yritykset todellisuudessa toimivat.
