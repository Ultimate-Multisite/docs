---
title: Teeman rakentamisen aloitusvirta
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Teeman rakentamisen aloitusprosessi {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 tuo mukanaan ohjatun **Theme Builder -aloitusprosessin**, joka auttaa sinua luomaan räätälöidyn lohkon teemalla alustavassa asetuksessasi. Tämä korvaa vanhentuneen Site Builder -tilan joustavammalla, agentin avustamalla lähestymistavalla.

## Mitä Theme Builder -aloitusprosessi on? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder -aloitusprosessi on interaktiivinen asennusohjelma, joka:

- Ohjaa sinua suunnittelupäätöksiä läpi (värit, typografia, asettelu)
- Kerää sivustosi visuaaliset identiteetin mieltymykset
- Luo räätälöidyn lohkon teeman, joka sopii tarpeisiisi
- Aktivoi teeman automaattisesti valmistuttua

Prosessi toimii **Setup Assistant -agentin** avulla, joka esittää selventäviä kysymyksiä ja rakentaa teemaasi asteittain.

## Theme Builder -aloituksen aloittaminen {#starting-the-theme-builder-onboarding}

### Ensimmäinen käynnistysasetus {#first-run-setup}

Kun käynnistät Superdav AI Agentin ensimmäistä kertaa uudella WordPress-asennuksella, näet seuraavat vaihtoehdot:

```
Tervetuloa Superdav AI Agentiin!

Mitä haluaisit tehdä?
1. Luo räätälöity teema (Theme Builder)
2. Käytä olemassa olevaa teemaa
3. Vältä asennusta nyt
```

Valitse **"Luo räätälöity teema"** päästäksesi Theme Builder -aloitusprosessiin.

### Manuaalinen aktivoiminen {#manual-activation}

Voit myös aloittaa Theme Builder -aloitusprosessin milloin tahansa pyytämällä:

```
"Aloita Theme Builder -aloitusprosessi"
```

tai

```
"Auta minua luomaan räätälöity teeman"
```

## Aloitusvaiheet {#the-onboarding-steps}

### Vaihe 1: Tilan valinta {#step-1-mode-selection}

Setup Assistant -agent kysyy mieltymyksestäsi:

```
Miten haluaisit rakentaa teemasi?
- Ohjattu (kysyn ja rakennan se sinua varten)
- Käytännön työtä (näytän vaihtoehdot ja päätät itse)
```

**Ohjattu tila** suositellaan useimmille käyttäjille; agentti tekee suunnittelun ehdotuksia perustuen toimialanneesi ja tavoitteisiisi.

### Vaihe 2: Sivuston määrittely {#step-2-site-specification}

Sinulta kysytään sivustosi tiedoista:

- **Sivuston tarkoitus**: Verkkokauppa, blogi, portfolio, SaaS jne.
- **Kohdeyleisö**: Kuka on sivustosi vierailijoita?
- **Brändin värit**: Pääväri ja toissijainen väri (tai "en varma")
- **Sävy**: Ammattimainen, luova, leikkisä, minimalistinen jne.

Tämä tieto tallennetaan **site_brief** -muistiisi, johon agentit viittaavat tulevissa istunnoissa.

### Vaihe 3: Suunnittelujärjestelmän päätökset (Design System Decisions) {#step-3-design-system-decisions}

Agentti ohjaa sinua suunnittelutekojen valinnassa:

- **Typografia**: Fonttityyppi (serif, sans-serif, monospace) ja koon skaala
- **Väripaletti**: Pääväri, toissijainen väri, korostusväri ja neutraalit värit
- **Sijoittelu (Spacing)**: Tiivis, normaali tai avara asettelu
- **Liike (Motion)**: Animaatiot ja siirtymät (jos haluat)

### Vaihe 4: Teeman luominen (Theme Generation) {#step-4-theme-generation}

Setup Assistant -agentti rakentaa sinulle räätälöidyn blokki-teeman seuraavilla elementeillä:

- `theme.json`, joka sisältää kaikki suunnittelutekosi
- Blokkitemplaat yleisille asetteluille (etusivu, blogi, yhteystiedot)
- Räätälöityjen blokki-tyylit sopivat suunnittelujärjestelmääsi
- Teeman metatiedot ja WordPressin tukiilmoitukset

### Vaihe 5: Aktivoiminen ja varmistus (Activation and Verification) {#step-5-activation-and-verification}

Teema aktivoituu automaattisesti, ja näet seuraavaa:

```
✓ Räätälöity teemasi on nyt käytössä!
  Teeman nimi: [Sivuston Nimesi] Teema
  Värit: [Pääväri] / [Toissijainen väri]
  Typografia: [Fonttityyppi]

  Vieraile sivustollasi nähdäksesi uuden suunnittelun.
```

Voit sen jälkeen vierailla sivustossasi varmistaaksesi, että teema näkyy oikein.

## Sivuston määrittely ja site_brief muisti {#site-specification-and-sitebrief-memory}

Onboarding-vaiheessa agentti tallentaa sivustosi määritelmän **site_brief** -muistiin. Tähän sisältyy:

- Sivuston tarkoitus ja tavoitteet
- Kohdeyleisö
- Brändin värit ja sävy
- Suunnittelun suositukset
- Sisällön rakenne

### Miksi site_brief on tärkeä {#why-sitebrief-matters}

Tulevissa istunnoissa agentit viittaavat site_briefisi seuraaviin asioihin:

Yhdistä suunnittelun yhtenäisyyden ylläpitämiseksi muutosten aikana
Ehdotan ominaisuuksia, jotka vastaavat sivustosi tarkoitusta
Antaa kontekstikohtaisia suosituksia
Vältä asennusvaiheen kysymysten toistoa

### Sivusiirron (site_brief) katselu {#viewing-your-sitebrief}

Voit kysyä agentilta:

```
"Show me my site brief"
```

tai

```
"What do you know about my site?"
```

Agentti näyttää tallennetun sivustosi tiedot.

## Muokkaaminen asennuksen jälkeen {#customizing-after-onboarding}

Teeman rakentamisen (Theme Builder) asennus on valmis, ja voit:

### Käyttää Design System Aesthetics -taitoa {#use-the-design-system-aesthetics-skill}

Pyydä suunnittelun hienosäätöjä:

```
"Refine the typography to be more modern"
```

tai

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics -taito** ohjaa sinut kohdennettuihin suunnittelumuutoksiin.

### Muokata theme.json:ää suoraan {#edit-themejson-directly}

Edistyneemmät käyttäjät voivat muokata tiedostoa `/wp-content/themes/[theme-name]/theme.json` säätääksesi:

- Väriarvoja (Color tokens)
- Typografiset skaalat
- Väliarvot (Spacing values)
- Reunojen ja varjostusten määritelmiä

### Luo räätälöityjä lohko-mallinnuksia (Custom Block Templates) {#create-custom-block-templates}

Käytä WordPressin lohkoeditoria luodaksesi räätälöityjä malleja:

- Etusivun asettelu
- Blogiartikkelisivut
- Tuotesivut
- Yhteystiedon lomakkeet

## Vertailu: Vanha vs. Uusi asennusvaihe {#comparison-old-vs-new-onboarding}

| Ominaisuus | Sivuston rakentaja (Legacy) | Teeman rakentaja (New) |
|---|---|---|
| Asetustapa | Ohjelma-pohjainen lomake | Agentin ohjaama keskustelu |
| Teeman luominen | Rajoitetut mallit | Räätälöity pohja |
| Suunnittelun arvot | Manuaalinen syöttö | Ohjattu päätökset |
| Joustavuus | Kiinteät vaihtoehdot | Muokattavissa oleva |
| Tulevat päivitykset | Ei viitannut | Tallennetaan site_briefiin |

## Ongelmanratkaisu {#troubleshooting}

**Asennusvaihe ei ole valmis**
- Käynnistä uudelleen: "Start the Theme Builder onboarding" (Aloita teeman rakentamisen asennus)
- Tarkista, onko WordPress-asennuksesi ajan tasalla
- Varmista, että Setup Assistant -agentti on aktivoitu

**Sivuston briefiä ei käytetä**
- Varmista, että agentilla on pääsy muistiin
- Pyydä agenttia "muistamaan sivuston briefin" (recall my site brief)
- Tarkista, että muisti on käytössä asetuksissasi

**Tuotettu teema ei vastaa mieltymyksiäni**
- Käytä Design System Aesthetics -taitoa hienosäätönä
- Pyydä agenttia "luomaan uuden teeman [erityisillä muutoksilla]" (regenerate the theme with [specific changes])
- Muokkaa `theme.json`-tiedostoa suoraan tarkkaa hallintaa varten

## Seuraavat askeleet {#next-steps}

Teeman rakentamisen (Theme Builder) onnistuneen jälkeen:

1. **Vahvista sivustosi**: Mene sivustollesi nähdäksesi uuden teeman
2. **Hienosäädä suunnittelua**: Käytä Design System Aesthetics -taitoa säätöjen tekemiseen
3. **Lisää sisältöä**: Aloita sivustosi sisällön rakentamista
4. **Tutustu kyvykkyihin**: Opi muiden agentin kyvyistä, kuten scaffold-block-theme ja activate-theme
