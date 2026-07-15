---
title: Viðmiðingar fyrir Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Viðmiðingar fyrir Theme Builder: Scaffold og Aktiva Block Themes

Superdav AI Agent v1.12.0 býður fram tveir sterkar viðmiðingar sem leika þínu í hálf við að gera og dekomu sérstaklega block themes beint frá chat-stöðu.

## Översiktur {#overview}

Viðmiðingarnar **scaffold-block-theme** og **activate-theme** gerja agentsins að:
- Gera fullt, framkvæmt á viðskipti block themes upp á grunnri skýrslunni þín
- Aktiva themes á síðu þinni sjálf án þess að þú þarft að gera nánar aðgerðir
- Skapa samræmd viskja í hlutverki með leiðandi ákvörðunum um hlutverk

## Scaffold Block Theme {#scaffold-block-theme}

Viðmiðingurinn **scaffold-block-theme** gerir upp nýtt WordPress block theme með fullri skýrslunni, sem felur í sér:

- `theme.json` innreiðingu með design tokens
- Block template fayl fyrir almenna laga
- Sérstakli stílar og breytingar á blockum
- Metadata themesins og stuðningarskýrslu

### Hvernig nota það {#how-to-invoke}

Í samræðinni þinni við Superdav AI Agent, geturð þú beint til gera theme:

```
"Gera block theme sem heitir 'Modern Agency' með blátt og hvítu lágmarka,
sans-serif texta og faglegum laga"
```

Agenturinn mun:
1. Samla design ákveðunum þín í samræðinni
2. Gera fullan skýrsluna fyrir themeins
3. Skapa allar nauðsynlegar faylir fyrir themeinn
4. Bera themeinn í burtu til aktiva

### Ábyrgðdilegt úrslit {#expected-output}

Þegar viðmiðingurinn starfar vel, sjáð þú:

- Bestæðingu að themeinn hafi verið scaffoldað
- Nafn og staðsetning themeins
- Samantekt um design tokens sem eru notaðir (lágmarkar, texta, fjarska)
- Staða til aktiva

Dæmi um úrslit:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Aktiva Theme {#activate-theme}

**activate-theme** nýturir þitt síðu á nýsköpt eða núverandi blokkþema.

### Hvernig notaðu það {#how-to-invoke-1}

Eftir að þú hefur skáfað þema, geturðu aktivert það strax:

```
"Aktiva Modern Agency theme"
```

Eða aktiva hvaða núverandi þema sem:

```
"Skipta í Twentytwentyfour theme"
```

### Ákveðinn útburður {#expected-output-1}

Þegar aktivering sýnist áttumlegri:

- Bestæðing um aktiva þema
- Fyrir þema náttúru (til referens)
- Síðurlínan síðunnar þar sem þema er nú live
- Öll sérstök athugasemdir um uppsetningu þema

Dæmi um útburð:
```
✓ Þema aktivert vel
  Ákveðinn þema: Modern Agency
  Fyrir þema: Twentytwentyfour
  Live á: https://yoursite.com
  Athugun: Skoðaðu hönnun síðunnar til að staðfesta nýja hönnun
```

## Ferli: Skafa og Aktiva {#workflow-scaffold-and-activate}

Almenn ferli samþættir bæði þá möguleika:

1. **Fara um sköpun þema**: "Skapa blokkþema fyrir SaaS landingssíðu mína"
2. **Agent skáfar þema**: Skapar lausnir og hönnunarþróunarstökin (design tokens)
3. **Skoða og finna á:** Viðskipta um hönnunarskilningu ef það er nauðsynlegt
4. **Aktiva**: "Aktiva þema núna"
5. **Staðfesta**: Fara yfir síðuna þína til að staðfesta að ný hönnun sé live

## Hönnunarþróunarstökin og Tilvísunir (Design Tokens and Customization) {#design-tokens-and-customization}

Skafað þema nota WordPress design tokens (via `theme.json`) fyrir:

- **Lækur**: Primær, sekundær, áhersla, nýtrulíkur
- **Textstíll**: Fontar, háls, styrkur, linajafnleiki
- **Afstandir**: Padding, margin, gap scales
- **Bætur**: Radius og stöðuþéttir (width tokens)
- **Skuggi**: Stöðuþéttir

Þessar stökin eru sentrar í `theme.json`, sem gerir það auðvelt að breyta heildarhönnunarsysteminu þínu frá einum lausnari.

## Begri og Athugasemdir {#limitations-and-notes}

## Lögumsetning {#troubleshooting}

- Themes eru byggð í `/wp-content/themes/` og þurfa að fylgja WordPress upplýsingar
- Aktivering krefst viðeigandi réttindi á WordPress síðunni þinni
- Handamögulegt PHP kóða í themes eru mínimalist; nota plugins fyrir flóknlega vinnu

## Felsökun {#next-steps}

**Theme er ekki sýnt eftir að byggja upp (scaffolding)**
- Staðfest að theme-forgitölurinn sé til og hefur réttindi
- Skenni það að `theme.json` sé rétt JSON
- Staðfest að nafn themeins sé ekki í ólítið með öflum viðkomandi themes

**Aktivering fellur**
- Staðfest að þú séðir administratorréttindi
- Skenni það að theme-forgitölurinn sé lesubara fyrir WordPress
- Sjá í WordPress villugreinar fyrir nánari upplýsingar

**Design tokens eru ekki á við**
- Staðfest að syntax `theme.json` sé rétt
- Skenni alla caching plugins
- Staðfest að WordPress útgáfa þín stuðlar að tokenum sem þú notar

## Næstu skref

Eftir að aktivera theme-inn geturðu:
- Nota **Design System Aesthetics skill** til að finna átydningu texta, lög og fjarlagningu (spacing)
- Skynja einstaka block stíl með WordPress block editorinn
- Nota handhagska CSS í `style.css` file themeins
- Skapa sérstök block templates fyrir sérstaklega sínar yfirskrifum
