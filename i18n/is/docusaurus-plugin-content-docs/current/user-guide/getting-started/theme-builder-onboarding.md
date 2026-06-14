---
title: Færslustöðu á Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Innleiðingarprosessi

Superdav AI Agent v1.12.0 býður upp á stjórnað **innleiðingarprosess** fyrir Theme Builder, sem hjálpar þér að skapa sérsniðna blokkþema í fyrsta uppsetningu. Þetta erskýr því gamla Site Builder modli og er meiri hlutverkssamræmi með hjálp af agenti.

## Hvað er Theme Builder Innleiðingarprosessi?

Innleiðingarprosessinn fyrir Theme Builder er samskiptvísur uppsetningarmótandi sem:

- Leiðar þig í ákvörðum um hlutverk (lýsandi, texta, lausning)
- Fangar ábyrgðir yfir viskunnar yfir síðuna þín
- Skapar sérsniðna blokkþema sem er sniðinn að því hvað þú þarft
- Ákvöllunni þema sjálf án þess að þú þarf að gera nýtt

Innleiðingarprosessið er hannað af **Setup Assistant agent**, sem sturðir skýrande spurningar og byggir þema þitt í hluta.

## Starta Theme Builder Innleiðingarprosessinn

### Fyrsta uppsetning
Þegar þú fyrsta gongstur Superdav AI Agent á nýri WordPress uppsetningu, sjáðu þú:

```
Velkomin í Superdav AI Agent!

Hva viltu gera?
1. Skapa sérsniðna þema (Theme Builder)
2. Nota núverandi þema
3. Springja uppsetningu fyrir núti
```

Vali **"Skapa sérsniðna þema"** til að komast í innleiðingarprosessinn fyrir Theme Builder.

### Handamanna aktivisering
Þú getur einnig byrjað innleiðingarprosessi fyrir Theme Builder hvaða tíma sem á með því að spyrja:

```
"Start the Theme Builder onboarding"
```

eða

```
"Help me create a custom theme"
```

## Innleiðingargreinar

### Stig 1: Val av hlutverks
Setup Assistant agentur spyrir um ákveðna val:

```
Hvernig viltu byggja þema þitt?
- Leiðandi (Ég mun spyrja spurningar og byggja það fyrir þig)
- Handamanna (Ég mun sýna möguleika og þú tekur ákvörðina)
```

**Leiðandi modli** er tillaga fyrir flest notenda; agenturinn gerir designt tillögur upp á grunnstjórðu og ábyrgðum eftir því sem þú hefur.

### Stig 2: Ábyrgðir yfir síðuna
Þér mun spyrja um ábyrgðir yfir síðuna þína:

- **Sítandi á síðunni**: E-commerce, blogg, portfolio, SaaS, osaf.
- **Lögunarmiðilinn**: Hvar eru þínir gjöfendur?
- **Brandafargar**: Primær og sekundafargar (eða "Ég er ekki viss")
- **Tónn**: Profesí, kríðilegur, leikandi, minimalur osaf.

Þessi upplýsingar eru geymd í minni þinni **site_brief**, sem hjálpar öllum öryggjum að hugsa um það í framtíðar samræðum.

### Stig 3: Ákvörðunir um Design System

Öryggið leiðar þig í gegnum val á design tokenum:

- **Typografi**: Font family (serif, sans-serif, monospace) og stærðaskala
- **Fargaflokkur**: Primær, sekundafargar, accent og nýtrar fargar
- **Afstandir**: Kompakt, normaldur eða breitt layoutir
- **Hreyfingar**: Animations og transitions (ef þú vilt það)

### Stig 4: Sköpun á Theme

Setup Assistant öryggið byggir upp þennan custom block theme með:

- `theme.json` sem heldur allar design tokens þín
- Block templates fyrir almenn layoutir (hovedsida, blogg, tengil)
- Custom block styles sem passar við design system þitt
- Theme metadata og tilkynningar um WordPress støðu

### Stig 5: Ákvörðun og Staðfesting

Themeinn er sjálfskiptur aktivert, og þú sjá:

```
✓ Þín custom theme er nú live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Blaðar síðuna þinni til að sjá nýja designinn.
```

Þú getur þá heimsækja síðuna þína til að staðfesta að themeinn sé sýnt rétt.

## Síðunarspecifikations og site_brief Minni

Á byrjun er öryggið fangar upp ábyrgðarupplýsingum um síðuna þína í minni **site_brief** hugmynd. Þetta felur í sér:

- Lögunarmiðilinn og markmið
- Lögunarmiðilinn
- Brandafargar og tónn
- Design ákvörðunir
- Innhaldsbygging

### Hvað er mikilvægt um site_brief?

Í framtíðar samræðum hugsa öryggið um þennan site_brief til að:

### Sjá sjáðu yfir skýrslu um sitina þitt_brief

Þú getur spurn milli hjálparinn:

```
"Sjá mér skýrslu um sitina mitt"
```

eða

```
"Hvað veitir þú um siti?"
```

Hjálparinn mun sýna eiginleika sita þíns sem er varðveitt.

## Innstillingar eftir að þú ert uppsetzt (Onboarding)

Eftir að innstillingar Theme Builder séu fullfærð, geturð þú:

### Notað skilytgandi ferli Design System Aesthetics skill

Fara í áhuga á designbreytingum:

```
"Breytingu typografinni til að vera nýrri"
```

eða

```
"Jafna fargaflokkið til að vera varmari"
```

**Design System Aesthetics skill** leiðar þig í gegnum sérstök breytingar á designinu.

### Breyta theme.json beint

Fyrir framkvæmdastjórnendur, breyt `/wp-content/themes/[theme-name]/theme.json` til að jafna:

- Fargaflokki (Color tokens)
- Typografisk skála (Typography scales)
- Skilynguátingar (Spacing values)
- Átingar og skuggaöfnuðir (Border and shadow definitions)

### Skapa sérstök block templates

Noti WordPress block editor til að skapa sérstök temblönd fyrir:

- Hólsítur (Homepage layouts)
- Lækur bloggpostna (Blog post pages)
- Vörusítur (Product pages)
- Tengslaskjal (Contact forms)

## Samanburður: Gamla og nýja innstillingar

| Eining | Site Builder (Gamli) | Theme Builder (Nýr) |
|---|---|---|
| Innstillingar | Formu-forritun | Samtali leitt hjálparinn |
| Temi gerð | Föngum temblönd | Sérstök byggingarnir |
| Design tokens | Handhaldandi innskráning | Leiðandi ákvörðunir |
| Leiknandi | Föngum valdi | Breytanlegur |
| Framtíðar uppfærslur | Ekki vísulegð | Varðveitt í site_brief |

## Feilfellingar (Troubleshooting)

**Innstillingar innstillingarinnar eru ekki fullfærð**
- Starti ferlið aftur: "Starta Theme Builder onboarding"
- Skennu að þú hefur uppfærð WordPress innstillingar
- Staða Setup Assistant hjálparmanns (agent)



**Ég nota ekki `site_brief` mitt**
- Staðfestu að hjálparinn hafi aðgang að minni (memory)
- Spyr hjálparann: "recall my site brief" (hugmyndu mig um miðri síðu skýrslu)
- Skennu það að minni sé áberandi í innstillingum þínum

**Theme sem er gerður passar ekki við áhuga mína**
- Notaðu skilytgandi skilytgandi `Design System Aesthetics` skilytgandi til að finna betri upplýsingar
- Spyr hjálparann: "regenerate the theme with [specific changes]" (gerðu þema með [sérstökum breytingum])
- Breyti `theme.json` beint fyrir nákvæma kontroll
