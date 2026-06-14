---
title: Teema ehitamise juhend
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 lisaboodi juhendatud **Theme Builder onboarding flow**, mis aitab teil luua oma eriti theme'i alguses seadistamise ajal. See asendab vanema Site Builder režiimi rohkem joustavaks, agentiga abitud lähenemiseks.

## Mis on Theme Builder Onboarding Flow?

Theme Builder onboarding flow on interaktiivne seadistusjuhend, mis:

- Juhendab teid disainide otsustega (värvid, tipograafia, paigutus)
- Koguletab teie veebilehe visuaalsete identiteetipreemide
- Generiib oma vajaduste järgi eriti theme'i
- Aktiveerib theme'i automaatselt lõpuks

Flow on jõudutatud **Setup Assistant agentiga**, mis esitab selget küsimusi ja lahendab teie theme'i ühtlustult.

## Theme Builder Onboarding Alguse

### Esimese kasutuse seadistamine

Kui käivitab Superdav AI Agentit esimest korda uues WordPress installatsioonil, näete:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Valige **"Build a custom theme"**, et sisestuda Theme Builder onboarding flow.

### Manuaalne aktiveerimine

Võite ka alustada Theme Builder onboarding'i igal ajal, paludes:

```
"Start the Theme Builder onboarding"
```

või

```
"Help me create a custom theme"
```

## Onboarding Sammud

### Samm 1: Režiimi valik

Setup Assistant agent küsib teie eelistust:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** on soovitatav suurimalt kasutajatele; agent teeb disainide soovitusid teie industrias ja eesmärkide põhjal.

### Samm 2: Veebilehe spetsifikatsioon

Teilt küsimatakse veebilehe kohta:

- **Siti eesmärk:** E-commerce, blogi, portfolio, SaaS jne.
- **Lõpuleeja sihtgrupp:** Kes on teie külastada?
- **Brändivärvid:** Põhikinnise ja sekundärvärvid (või "ei ole kindel")
- **Toon:** Professionaalne, luov, leikkav, minimalne jne.

See teave on salvestatud teie **site_brief** memori kaudu, mida agentid viitavad tulevad sessioonides.

### Samuti 3: Disaini süsteemi otsustused

Agent juhendab teid disainitoonide valikute läbi:

- **Tipografia:** Fonti perekonnak (serif, sans-serif, monospace) ja suuruse skaala
- **Värvi palett:** Põhikinnine, sekundäärne, aktsent ja neutraalsed värvid
- **Vahetusvääliline ruum:** Kompaktsed, normaalsed või laialdused plaadid
- **Liikumine:** Animatsioonid ja ülemine (kui soovite)

### Samuti 4: Teema genereerimine

Setup Assistant agent rakendab teie suurte teema oma kaitsmehega:

- `theme.json`, mis sisaldab kõik disainitoonid
- Bloki mallid levinud plaadide jaoks (homepage, blogi, kontakt)
- Kasutamisliikuse stiilid, mis vastavad teie disainisüsteemile
- Teema metadane ja WordPressi toetuse deklaratsioonid

### Samuti 5: Aktiveerimine ja kontroll

Teema aktiveeritakse automaatselt, ja näete järgmine:

```
✓ Teie suurte teema on nüüd aktiivne!
  Teema nimi: [Teie Siti Nimi] Teema
  Värvid: [Põhikinnine] / [Sekundäärne]
  Tipografia: [Fonti perekonnak]

  Kanda oma sille külastada, et vaadata uut disaini.
```

Seejärel saate oma siti külastada ja kontrollida, kas teema näitab õigesti.

## Siti spetsifikatsioon ja site_brief memori

Onboardingi ajal agent hõlvaneb teie siti spetsifikatsiooni **site_brief** memori kategoori. See hõlmab:

- Siti eesmärgi ja tulemusi
- Lõpuleeja sihtgruppi
- Brändivärvide ja toonide
- Disaini lehtme
- Siseltuleva struktuuri

### Miks site_brief on oluline

Tulevad sessioonides agentid viitavad teie site_briefile:

### Disaini säilitamine muudatuste ajal

*   Hoida disaini ühtlustatud muutuste all.
*   Soovita funktsioone, mis on teie veebilehve eesmärkega seotud.
*   Anna kontekstipõhise soovitatavusi.
*   Vältida seadistamise küsimuste kordamist.

### Veendige oma site_briefi

Saate küsida agentilt:

```
"Näita mulle minu site_brief"
```

või

```
"Mis teada sulle on minu veebilehvest kohta?"
```

Agenti näitab teie salvestatud veebilehve spetsifikatsiooni.

## Muutmine pärast onboarding-i lõpetamist

Theme Builder onboarding lõpetamise pärast saate:

### Kasutada Design System Aesthetics skillit

Soovita disaini hoidlust:

```
"Hoidusta tipograafiat modernisemaks teha"
```

või

```
"Reguleerige värvi paletti soojamaks"
```

**Design System Aesthetics skill** juhendab teid eesmärgiga kohdistatud disainimuutuste läbiviimise.

### Redige theme.jsoni otse

Andmete edaspool kasutajatele saate muuta `/wp-content/themes/[theme-name]/theme.json` faili, et reguleerida:

*   Värvi tokenid
*   Tipograafia skaalad
*   Vahetuste väärtused (spacing values)
*   Rande ja varjude definitsioonid

### Luua oma blokke tegemistesse mallid

Kasutage WordPressi blokke redigeerijat luua isiklikke malle:

*   Veebilehve pealehoolekud
*   Blogipostide lehed
*   Tootja lehed
*   Kontaktformid

## Võrkamine: Vana vs. Uus onboarding

| Funktsioon | Site Builder (Vana) | Theme Builder (Uus) |
| :--- | :--- | :--- |
| Seadistamise meetod | Wizard-põhine formaat | Agenti juhendatud tegevus |
| Teema genereerimine | Piiratud mallid | Kasutajalt kohandatav raamistik |
| Disaini tokenid | Manuaalne sisestamine | Juhendatud otsustused |
| Joustavus | Fiksaatud valikud | Kohandatav |
| Eelujundised uuendused | Viitamata | Salvestatud site_briefis |

## Ongud lahendamine

**Onboarding-viis ei lõpetanud**
*   Taasta viis: "Start the Theme Builder onboarding" (Alusta Theme Builder onboarding)
*   Kontrollige, kas teie WordPressi installatsioon on uuendatud
*   Võtke kinnituse, et Setup Assistant agent on aktiveeritud

**Minüsite `site_brief` ei kasutata**
- Kontrollige, kas agentil on pääkülg meeloom (memory)
- Paluta agentit "recall my site brief" (tõsta minu veebilehe kirjeldus)
- Kontrollige, et meeloom on sisse lülitatud teie seadistustes

**Tegevuse genereeritud teema ei vastata minu eelistustele**
- Kasutage Design System Aesthetics skilli hiangiiks selle hoidmise
- Paluta agentit "regenerate the theme with [spetsiifilised muutused]" (genereerida tema [spetsiifiliste muudatuste] abil)
- Mu edits `theme.json` otseselt täpsemate kontrollide jaoks

## Järgmine sammud

Teema lahendamise pärast:

1. **Kontrollige veebilehte**: Käiju oma veebilehe, et vaadata uut teema
2. **Hoidke disaini:** Kasutage Design System Aesthetics skilli muudatuste teha jaoks
3. **Lisa sisu:** Alustage veebilehe sisu loomise

4. **Uuringa võimusi**: Learn about other agent abilities like scaffold-block-theme ja activate-theme (luba teistagentide võimaluste, nagu scaffold-block-theme ja activate-theme)
