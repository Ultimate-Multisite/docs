---
title: Suunnittelujärjestelmän esteettinen taito
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Suunnittelujärjestelmän esteettinen taito {#design-system-aesthetics-skill}

**Suunnittelujärjestelmän esteettinen taito** on ohjattu lähestymistapa sivustosi visuaalisen identiteetin hienosäätöön. Se auttaa sinua tekemään johdonmukaisia päätöksiä typografioista, väreistä, välilyönneistä ja liikeskaaloista (motion tokens), jotka määrittelevät suunnittelujärjestelmääsi.

## Mitä suunnittelujärjestelmän esteettinen taito on? {#what-is-design-system-aesthetics}

Suunnittelujärjestelmän esteettinen taito on rakennettu taito, joka kattaa seuraavat asiat:

- **Typografia**: Fontit, koot, painot ja rivivälit
- **Värit**: Pää-, toissijaiset, korostusvärit ja neutraalit paletti
- **Välilyönnit**: Sisä- ja ulkoreunat (padding), marginaalit ja välimatkat (gap scales)
- **Reunat**: Pyöristys- ja leveysskaalat (radius and width tokens)
- **Varjot**: Korkeus- ja syvyysskaalat (elevation and depth tokens)
- **Liike**: Animaatiot ja siirtymät

Nämä päätökset tallennetaan teeman `theme.json`-tiedostoon, luoden yhtenäisen visuaalisen järjestelmän.

## Miksi käyttää suunnittelujärjestelmän esteettistä taitoa? {#why-use-design-system-aesthetics}

### Yhtenäisyys {#consistency}

Suunnittelujärjestelmä varmistaa:

- Kaikki tekstit käyttävät samaa typografista skaalaa
- Värit käytetään johdonmukaisesti koko sivustolla
- Välilyönnit noudattavat ennakoitavaa mallia
- Animaatiot tuntuvat yhtenäisiltä

### Tehokkuus {#efficiency}

Sen sijaan, että tekisit suunnittelupäätöksiä sivu kerrallaan, voit:

- Määritellä tokenit kerran
- Soveltaa niitä kaikkialla
- Päivittää globaalisti muuttamalla vain yhtä arvoa

### Joustavuus {#flexibility}

Voit:

- Säädellä koko suunnittelujärjestelmää nopeasti
- Kokeilla erilaisia esteettisyyksiä
- Ylläpitää brändin yhtenäisyyttä kehittyessä

## Suunnittelujärjestelmän esteettisen taiton käynnistäminen {#triggering-the-design-system-aesthetics-skill}

### Manuaalinen aktivoiminen {#manual-activation}

Voit aloittaa taiton milloin tahansa:

```
"Auta minua hienosäätämään suunnittelujärjestelmääni"
```

tai

```
"Paremme sivustoni esteettisyyttä"
```

tai

```
"Ohjei minut suunnittelujärjestelmän päätöksissä"
```

### Automaattiset ehdotukset {#automatic-suggestions}

Agentit saattavat ehdottaa taiton käyttöä, kun:

- Pyydät suunnittelun muutoksia
- Pyydät "modernia" tai "ammattimaista" uudelleenmuotoilua
- Haluat parantaa visuaalista yhtenäisyyttä
- Olet valmistautumassa sivustosi lanseeraamiseen

## Suunnittelujärjestelmän esteettisyysprosessi {#the-design-system-aesthetics-process}

### Vaihe 1: Typografia {#step-1-typography}

Agent kysyy fonttivalintoihisi:

```
Mikä on suosikkityyppisi typografialla?
- Serif (perinteinen, elegantti)
- Sans-serif (moderni, siisti)
- Monospace (tekninen, koodiin keskittyvä)

Otsikkovalintasi fontille:
- Haluatko erottuvan otsikkofontin vai käytätkö samaa kuin leipätekstiä?
- Preferenssi: lihavoitu, elegantti, leikkisä, minimalistinen?

Leipätekstisi fontille:
- Luettavuus on avain. Suositteletko:
  - Isompaa, enemmän tilaa sisältävää tekstiä
  - Tiiviimpää, tehokasta tekstiä
  - Standardikokoja
```

Agent määrittelee sen jälkeen:

- **Otsikkofontti**: Pääfontti otsikoille ja otsikoille
- **Leipätekstifontti**: Fontti kappaleille ja leipätekstille
- **Monospasi-fontti**: Fontti koodille ja tekniselle sisällölle
- **Kokoasteikko**: Ennakkodefinoitu kokoluokat (pieni, perus, suuri, XL jne.)
- **Painotuseasteikko**: Fontin painot (normaali, keskitetty, lihavoitu jne.)
- **Riviväli**: Rivien väli leikkaamisen helpottamiseksi

### Vaihe 2: Väripaletti {#step-2-color-palette}

```
Määritellään väripalettisi.

Pääväri (brändivärin):
- Nykyinen: [näyttää olemassa olevan värin]
- Muuta: [värinvalitsin tai hex-koodi]

Toissijainen väri (tukeväri):
- Nykyinen: [näyttää olemassa olevan värin]
- Muuta: [värinvalitsin tai hex-koodi]

Korostusväri (korostukset ja CTA-painikkeet):
- Nykyinen: [näyttää olemassa olevan värin]
- Muuta: [värinvalitsin tai hex-koodi]

Neutrilaista palettia (harmaat tekstiin, reunoihin, taustoihin):
- Vaalea: [väri]
- Keskivärinen: [väri]
- Tumma: [väri]
```

Agent luo täydellisen paletin sisältäen:

- Pää-, toissijaisen ja korostusvärit
- Neutraalit harmaat (vaalea, keskivärinen, tumma)
- Semanttiset värit (onnistuminen, varoitus, virhe)
- Hover- ja aktiivitilat

### Vaihe 3: Väli {#step-3-spacing}

(Tämä osio on jätetty tyhjä alkuperäisen tekstin mukaisesti.)

Kuinka paljon tilaa haluat?

Tilan skaalan suosikki:
- Tiivis (tiiviit, tehokkaat asettelut)
- Normaali (tasapainoinen väli)
- Avara (runsaasti tyhjää tilaa)

Tämä vaikuttaa:
- Paddingiin painikkeissa ja kortteissa
- Marginaaleihin osioiden välillä
- Väliin ruudukon kohteiden välillä

Agentti määrittelee tilatokeja:

- Perusyksikkö (tyypillisesti 4px tai 8px)
- Skaala: xs, sm, md, lg, xl, 2xl
- Erityiset arvot paddingille, marginaalille ja välin luomiseen

### Vaihe 4: Reunat ja varjot {#step-4-borders-and-shadows}

```
Visuaalinen syvyys ja määritelmä:

Reunapään suosikki:
- Terävä (ei pyöristystä)
- Hienovarainen (pieni säde)
- Pyöristetty (keskikokoinen säde)
- Erittäin pyöristetty (suuri säde)

Varjon syvyys:
- Tasainen (ei varjoja)
- Hienovarainen (kevyet varjot)
- Huomattava (voimakkaat varjot)
```

Agentti luo:

- Reunapään tokeja (painikkeille, korteille, syöttökentille)
- Varjostustokeja eri tasojen nostotason varten
- Reunaväli tokeja

### Vaihe 5: Liike ja animaatiot {#step-5-motion-and-animation}

```
Miltä sivusto sinun pitäisi tuntua vuorovaikutteisenä?

Animaation suosikki:
- Minimilaatuinen (ei animaatioita)
- Hienovarainen (pehmeät siirtymät)
- Leikkisä (huomattavia animaatioita)

Erityiset animaatiot:
- Sivun siirtymät: haalistus, liukuminen vai ei?
- Painikkeen hover: skaalaus, värin muutos vai molemmat?
- Lataustilat: pyörivä kuvake (spinner), skeleton tai edistymispalkki?
```

Agentti määrittelee:

- Siirtymän kesto (nopea, normaali, hidas)
- Easing-funktiot (ease-in, ease-out, ease-in-out)
- Animaation avainkehys yleisille vuorovaikutuksille

## Suunnittelujärjestelmän esteettisten ominaisuuksien soveltaminen {#applying-design-system-aesthetics}

### Automaattinen soveltaminen {#automatic-application}

Kun olet suorittanut taiton, agentti:

1. Päivittää teeman `theme.json` -tiedoston kaikilla tokkeineen
2. Soveltaa suunnittelujärjestelmän aktiiviseen teemaasi
3. Uudelleenluokittelee lohkojen tyylit vastaamaan uutta järjestelmää
4. Aktivoi päivitetyn teeman

### Manuaalinen soveltaminen {#manual-application}

Voit myös muokata `theme.json` -tiedostoa suoraan:

## Näytä suunnittelujärjestelmäsi {#viewing-your-design-system}

### Kysy agentilta {#ask-the-agent}

```
"Näytä minulle suunnittelujärjestelmäni"
```

tai

```
"Mitkä ovat nykyiset suunnittelutunnisteeni?"
```

Agentti näyttää sinulle typografian, värit, väljet ja muut tunnistetunnisteet.

### Katso theme.json {#view-themejson}

Avaa `/wp-content/themes/[theme-name]/theme.json` tekstieditorissa nähdäksesi raakadatan määritelmät.

## Suunnittelujärjestelmän päivittäminen {#updating-your-design-system}

### Nopeat päivitykset {#quick-updates}

Pyydä agentilta tiettyjä muutoksia:

```
"Tee pääväri tummemmaksi"
```

tai

```
"Lisää väljelyasteikkoa 20 prosentilla"
```

tai

```
"Muuta otsikon fontti serifiksi"
```

### Täysi uudelleenmuotoilu {#full-redesign}

Suorita Design System Aesthetics -taito uudelleen:

```
"Luo suunnittelujärjestelmäni kokonaan uudelleen"
```

Tämä ohjaa sinut läpi kaiken päätöksenteko-prosessin alusta, käyttäen nykyisiä arvoja.

### Osittaiset päivitykset {#partial-updates}

Päivitä tiettyjä osa-alueita:

```
"Päivitä vain väripaletin, pidä muu kaikki samana"
```

## Suunnittelujärjestelmän parhaat käytännöt {#design-system-best-practices}

### Yhtenäisyys {#consistency-1}

- Käytä samoja tunnistetunnisteita kaikkialla
- Älä luo yksittäisiä värejä tai kokoja
- Viittaa tunnistetunnisteisiin sen sijaan, että koodattaisiin arvoja suoraan

### Nimeäminen {#naming}

Käytä selkeitä, merkityksellisiä nimiä:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skaalautuvuus {#scalability}

Suunnittele järjestelmä skaalautumiseen:

- Käytä suhteellisia yksiköitä (rem, em) pikseleiden sijaan
- Luo skaaloja (xs, sm, md, lg, xl) sen sijaan, että käytät sattumanvaraisia arvoja
- Suunnittele tulevia lisäyksiä varten

### Dokumentaatio {#documentation}

Dokumentoi suunnittelujärjestelmäsi:

- Miksi valitsit tiettyjä värejä
- Milloin käyttää kunkin tokenia
- Poikkeukset ja reunat

## Yleiset suunnittelumallit {#common-design-system-patterns}

### Moderni minimalistinen {#modern-minimalist}

- Sans-serif -typografia (Inter, Helvetica)
- Rajoitettu väripaletti (2–3 väriä)
- Runsaat välit
- Hienovaraiset varjot
- Sujuvat, nopeat animaatiot

### Lämmin ja ystävällinen {#warm-and-friendly}

- Sekoitus serif- ja sans-serif -typo-grafiaa
- Lämmin väripaletti (oranssit, lämpimät harmaat)
- Pyöristetyt kulmat
- Pehmeät varjot
- Leikkisät animaatiot

### Ammattimainen yritys {#professional-corporate}

- Siisti sans-serif (Roboto, Open Sans)
- Neutraali väripaletti korostusvärillä
- Järjestelmälliset välit
- Vähäiset varjot
- Hienovaraiset siirtymät

### Luova ja rohkea {#creative-and-bold}

- Erityinen typografia
- Rohkea väripaletti
- Vaihteleva väli
- Voimakkaat varjot
- Huomionarvoiset animaatiot

## Ongelmanratkaisu {#troubleshooting}

**Suunnittelujärjestelmän muutokset eivät näy**
- Tyhjennä selaimen välimuisti
- Rakentele uudelleen sivustosi, jos käytät staattista generointia (static generator)
- Tarkista, että theme.json on kelvollinen JSON-muoto

**Värit näyttävät erilaisilta eri sivuilla**
- Tarkista ristiriitaisia CSS:ää lisäosissa (plugins)
- Varmista, että kaikki sivut käyttävät samaa teemaa
- Tyhjennä mahdolliset välimuistia koskevat pluginit

**Haluan palata aiempaan suunnittelujärjestelmään**
- Kysy agentilta: "Näytä minulle suunnittelujärjestelmän historia"
- Muokkaa theme.json manuaalisesti aiempiin arvoihin
- Suorita taitoa uudelleen eri valinnoilla

## Seuraavat askeleet {#next-steps}

Suunnittelujärjestelmän määrittämisen jälkeen:

1. **Tarkastele sivustoa**: Siirry sivustollesi nähdäksesi uuden ulkoasun
2. **Hienota eteenpäin**: Tee säästöt käyttämällä kyseistä taitoa uudelleen
3. **Luo malleja**: Rakennat räätellisiä blokkimalleja käyttämällä design tokens -arvoja
4. **Dokumentoi**: Jaa suunnittelujärjestelmäsi tiimiketujen kanssa
