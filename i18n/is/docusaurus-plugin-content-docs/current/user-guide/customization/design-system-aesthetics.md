---
title: Aðskipti á skönnunarstefnum í design system
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Skilna í Design System Aesthetics

**Design System Aesthetics skíl** er leið til að leda þig í að finna fram á síðu þinni viskja. Það hjálpar þér að taka eins og sameina ákvörðum um typografi, lög, fjarska og hreyfingstölur sem eru lykilatriði fyrir design system þitt.

## Hvað er Design System Aesthetics?

Design System Aesthetics er byggt skíl sem dektar:

- **Typografi**: Fontir, lög, þyngd og linajafnleiki
- **Lög**: Primærli, sekundarlíkar, áherslu og neitneutral lið
- **Fjarska**: Innangjörð, marg og fjarska skalur
- **Befri**: Raunskipti og breiddar tölur
- **Skuggar**: Hæði og djúpurliðar tölur
- **Hreyfing**: Áhuga og skiftningar

Þessar ákvörð eru fanga í `theme.json` skjalinu þitt, sem skapar eins og sameina viskja.

## Hva er góðan af því að nota Design System Aesthetics?

### Einskildleiki

Design system tryggir:

- All text notar sama typografi skalur
- Lög eru notuð eins og á síðunni
- Fjarska fylgir spáanlegum skipti
- Áhuga hreyfingar finnast eins og einn

### Efni

Í stað þess að taka designskipti í hverri síðu, gert þú:

- Skapa tölur einnu sinni
- Notið þær har sem á síðunni
- Uppfærð globalt með því að breyta einum gildi

### Flegurleiki

Þú getur:

- Ráðfærð heildar design systeminn raskt
- Prófa yfir mörgu viskja
- Haldið fram á merkiþjónustu en þú þróast

## Hvernig starta Design System Aesthetics skíl?

### Handamönnuð aktivering

Þú getur byrjað skílin nánast hvaða tíma sem:

```
"Help me refine my design system"
```

eða

```
"Let's improve my site's aesthetics"
```

eða

```
"Guide me through design system decisions"
```

### Sjálfskynningarsögur

Agentir gætu tillótið notkun skíls þegar þú:

- Spyr eftir designskiptum
- Skýrð "modern" eða "professional" útvíkingar
- Vildu að bæta viskja eins og á síðunni
- Er íbúinn til að lánast síðuna þinni

## Aðskipti á Design System Aðskiptum

### Árangur 1: Typografi

Agentur spyrir um vala þín fonta:

```
Hvað er nauðsynlegur typografísk stíl þinn?
- Serif (tradið, elegant)
- Sans-serif (nýtt, hreint)
- Monospace (tæknilegt, að fokusast á kóða)

Til yfirskrifa fontar:
- Viljaðir þú eina sérstaka yfirskrifa font, eða nota sama sem lykiltexta?
- Preferans: sterkur, elegantur, leikandi, mínimalist?

Til texta í lykiltextum (body font):
- Lesiðafni er nauðsynlegur. Viljaðir þú:
  - Stórare, meiri fjarlandi texta
  - Stuttari, nákvæmari texta
  - Standardstærðir
```

Þá skilur agentur eftir:

- **Yfirskrifa font**: Primæfont fyrir titlar og yfirskrifa
- **Texta font**: Font fyrir lykiltexta og lykiltexta í textanum
- **Monospace font**: Font fyrir kóða og tæknilegt innihald
- **Stærðarskala**: Fyrirbestíllar stærðir (smá, grunnur, stórt, XL, osakan)
- **Viktstefna skála**: Fontviktir (regular, medium, bold, osakan)
- **Linjastraumur**: Fjarlandi milli linja fyrir lesi

### Árangur 2: Fargaflokkur

```
Látum okkur skilgreina fargaflokkinn þinn.

Primælfarga (þin merki):
- Nu: [sýnir núverandi farga]
- Breytist í: [fargavalur eða hex kóði]

Sekundálfarga (støðvandi farga):
- Nu: [sýnir núverandi farga]
- Breytist í: [fargavalur eða hex kóði]

Áherslufarga (highlightar og CTAs):
- Nu: [sýnir núverandi farga]
- Breytist í: [fargavalur eða hex kóði]

Neytrar fargaflokkur (grá fyrir texta, þörfuband, bakgrunnar):
- Ljósið: [farga]
- Miðlingur: [farga]
- Draugur: [farga]
```

Agentur skapar fullan flokk sem fyllir:

- Primælfarga, sekundálfarga og áherslufarga
- Neytrar grá (ljósið, miðlingur, draugur)
- Semantíska farga (suksess, varning, villna)
- Tilstandar við hvíling og aktivt staða

### Árangur 3: Fjarlandi

(Texturinn er ekki framfærður í textanum upphaflega.)

Hvers margarður viltu það?

Forvitni á fjarska:
- Kompakt (stýrt, nýttar leysir)
- Normalt (balansar fjarskipti)
- Stórt (fyrirbærið er breitt)

Þetta áhrifast á:
- Padding innan knappa og kortagna
- Marginar milli hluta
- Fara milli grid itemna

Hjálparstafurinn skilgreinir fjarska-tökunir (spacing tokens):

- Grundtvíll (til dæmis 4px eða 8px)
- Skala: xs, sm, md, lg, xl, 2xl
- Sérstakliðar gildi fyrir padding, margin, gap

### Stig 4: Randir og Skuggar

```
Visuell djúpur og skilgreining:

Fjarska á randum (Border radius) viltu það:
- Skarpt (engin rundun)
- Subtilt (smá ráð)
- Rundt (miðleikur ráð)
- Myndarundt (stórt ráð)

Djúpur skugga (Shadow depth):
- Flatt (engin skuggar)
- Subtilt (ljós skuggar)
- Markað (sterkar skuggar)
```

Hjálparstafurinn skapar:

- Border radius tokens ( fyrir knappar, kortagnir, inngangsstöðvar)
- Shadow tokens fyrir hækkanlegni (elevation levels)
- Border width tokens

### Stig 5: Rörelse og Animasjon

```
Hvernig vilt staðlið þitt finnast þegar það er viðeigandi?

Fjarska á animasjon:
- Minimalt (engin animasjonar)
- Subtilt (mjú breytingar)
- Leikandi (markanlegur animasjonar)

Sérstakliðar animasjonar:
- Lokaferli: fadi, slíma eða engin?
- Hover á knappa: skalning, endring lúfa eða bæði?
- Lastaferli: spinner, skeleton, eða framgangsbara?
```

Hjálparstafurinn skilgreinir:

- Varðveisla tíma (fast, normal, slóð)
- Easing functionar (ease-in, ease-out, ease-in-out)
- Keyframes á animasjonum fyrir almenna viðskipti

## Ábyrgja Design System Aesthétíku

### Sjálfávöxtulagning

Eftir að þú hefur fullført ferlið, skapar hjálparstafurinn:

1. Uppdatering á `theme.json` þessar þema með öllum tokens
2. Ábyrgja design systemið við þema sem er aktivt
3. Regenerering af block styles til að passa nýtt systeminu
4. Ákvæmd uppfærðu þema

### Handhönnuð ábyrgja

Þú getur einnig breytt `theme.json` beint:

## Sjá sjáðu yfir design system þinn

### Spyrðu að agenti

```
"Visu mér design system þinn"
```

eða

```
"Hvað eru orðstökum design tokens mínu?"
```

Agentur mun sýna þitt typografi, lögna, fjarska og övrantar tokens.

### Sjá theme.json

Opna `/wp-content/themes/[theme-name]/theme.json` í textorðsveit til að sjá raunverulega greiningu tokenum.

## Uppdarbera design system þinn

### Hringrásaruppdarferðir

Spyrðu að agenti um sérstaka breytingar:

```
"Gera primaryna lögna mörkarljósari"
```

eða

```
"Auka fjarska skálann um 20%"
```

eða

```
"Breytingu hringninga fontinn í serif"
```

### Full breyting

Kynna Design System Aesthetics skilyrðinguna aftur:

```
"Látum okkur breyta heilt design system þinni"
```

Þetta mun leiða þig með allar ákvörðir aftur, byrjun með núverandi gildi.

### Helgi breytingar

Uppdarbera sérstök hlutum:

```
"Breytingu bara lögna mörkarljósins, halda allt annað eins og er"
```

## Bestu vísvaldröndir fyrir design system

### Samræmi

- Nota sama tokens í öllum staðum
- Skapa ekki einangseta lögna eða gildi
- Viða að nota tokens í stað þess sem er skrifað beint inn

### Naming

Nota klár og semantiskar nafn:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skálability

Designð þitt kerfi til að vexa:

- Notaðu stöðugleiki (rem, em) í stað piksla
- Skapa skalor (xs, sm, md, lg, xl) í stað óbestimmta gildi
- Planu fyrir framtíðar viðbót

### Dokumenta designkerfi þitt:

- Hvað ferðu með sérstök lögnum?
- Hvort notaðu hverju token (lögnum)?
- Átök og skýrskipti

## Almenn kerfisþróunarforða (Design System Patterns)

### Modern Minimalist

- Sans-serif texta (Inter, Helvetica)
- Lítill láglaust fargaflokk (2-3 lögnum)
- Stóðugt fjarska (generous spacing)
- Subtil skuggi (subtle shadows)
- Glúmar, hraðar áhugaverðir hreyfingar

### Warm and Friendly

- Blandning af serif og sans-serif texta
- Varms fargaflokkur (oranges, varma grátt)
- Rundar hliðar (rounded corners)
- Ljósa skuggi
- Leikandi hreyfingar

### Professional Corporate

- Glín sans-serif texta (Roboto, Open Sans)
- Nýtr fargaflokkur með áhugaflokki
- Skýr fjarska
- Minni skuggi
- Subtil breytingar

### Creative and Bold

- Sérstök texta
- Starkur fargaflokkur
- Breitt fjarska
- Starkar skuggi
- Markmiðsleg hreyfingar

## Feilfellingar (Troubleshooting)

**Mín breytingar í designkerfi þinni sýna ekki**
- Gláðu hreinsa brauzarminnið (clear your browser cache)
- Bygg ú aftur síti ef þú notar staðgengisgerð (static generator)
- Skjaldi að theme.json sé rétt JSON
- Staðfestu að theme sé aktivt

**Lögnum sjá annleik á öllum síðum**
- Skjaldi að CSS í pluginum sé í stöðu við hverri annað (conflicting CSS)
- Staðfestu að allar síður nota sín sameina theme
- Gláðu hreinsa öll caching plugins

**Ég vil aftur til fyrri designkerfi**
- Spyrst hjá agenti: "Sýg mér sögulega kerfi þitt" (Show me my design system history)
- Breytilega breytingar í theme.json til fyrri gildi
- Kjarnafarið aftur með öllum breytingum

## Næstu skref

Eftir að hafa teikna kerfi þitt:

1. **Núverðu þennan stað:** Visu upp á nýjar greinir með því að bevita þetta á sínum sýn.
2. **Fjölda það sem er í gegnum:** Gerðu fleiri breytingar með því að nota aftur þekkingu þína.
3. **Skapa skjaldeildar (templates):** Byggu sérstaklega blokk-skjaldeildar með nýjum greinir þínum.
4. **Skrifa niður:** Deila design system þínu með liðamönnum í staðnum.
