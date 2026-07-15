---
title: Skilfandi áhættum
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Skilur við tema

Superdav AI Agent v1.10.0 hefur sett fór fyrstu fjór nýjar, tema-vísandi innbyggðar skilur sem sjálfstösum sér að því að passa til aktivum WordPress themanum þínum. Þessar skilur veita sérhæfð leiðurstof og möguleika sem eru sniðin að arkitektúr og eiginleikum themans þíns.

## Hvað eru tema-vísandi skilur? {#what-are-theme-aware-skills}

Tema-vísandi skilur eru fyrirfram settar þekkja-grundferðir og verkfærihlutblönd sem AI hjálparinn sjálfstösum sér eftir því hvern themi WordPress er aktivt á síðunni þinni. Þegar þú skiptir themi, uppfærast skilur sem eru til við hjálparinn sjálfstöð – þú þarft ekki að setja munaðar upp settur.

Hvert skilur inniheldur:

- **Tema-spesifíkt skjal** — leiðurstof um notkun og sniðning themans
- **Vísbendingar um block og pattern** — til við hvar blokkar, pattern og möguleikaliðunir eru til að nota
- **Dæmi um sniðning** — kóðaþeim og uppsetningartíðunir fyrir almenn verkefni
- **Best practices** — tillitsliðum um arkitektúr og starfssamkvæði themans

## Til við hjálpar skilur sem eru til við {#available-theme-aware-skills}

### Block Themes (Blokk-þema) {#block-themes}

**Til:** Themar sem nota WordPress block-based (Full Site Editing) arkitektúr.

Skilurinn fyrir Block Themes veit leiðurstof um:

- Sköpun og sniðning templatir með block editorinum
- Notkun við block patterns og uppspretta blokka
- Sniðning globala stíl og settningar í theme.json
- Notkun tema-blokka og þær variantir
- Sköpun sérsniðna block patterns fyrir síðuna þína

**Sjálfstöður við:** Þegar aktivur themi þinn er ein Block Theme (stýrir `block-templates` eiginleika).

### Classic Themes (Klassísk Themar) {#classic-themes}

**Til:** Tradiðar WordPress themir sem nota PHP templates og klassík editor.

Skilurinn fyrir Classic Themes veit leiðurstof um:

**Viðferð með PHP template files og hooks**
**Tilbyrðing á þemaútspilum með Customizer**
**Notkun widget areas og sidebars**
**Borgun af CSS og þróun child themes**
**Skilning þemaherfi og template tags**

**Automatískt aktivert við:** Þegar aktivt þitt þema er klassískt (non-block) þema.

### Kadence Blocks {#kadence-blocks}

**Tilbyrðing á:** Síður sem nota Kadence Blocks plugin fyrir framkvæmdar hlutverk með blokk-geðum.

Kadence Blocks skiljanir leiða í:

- Notkun Kadences framkvæmdar blokkbibliotéku (Hero, Testimonials, Pricing, osaf)
- Innstilling af Kadence block settings og responsive optaki
- Byggja sérsniðna layoutar með Kadence grid og container blocks
- Samþætting Kadence blocks við þema þitt
- Notkun Kadences design system og presets

**Automatískt aktivert við:** Þegar Kadence Blocks plugin er aktivur á síðunni þinni.

### Kadence Theme {#kadence-theme}

**Tilbyrðing á:** Síður sem nota Kadence theme fyrir blokk-geðum og framkvæmdar hlutverk með breytingu.

Kadence Theme skiljanir leiða í:

- Borgun af Kadence themi yfir global styles og theme.json
- Notkun innbyggðra block patterns og templates í Kadence
- Innstilling af Kadence theme settings og optaki
- Byggja sérsniðna design með Kadence design system
- Samþætting Kadence við vinsæla plugins og verkfæri

**Automatískt aktivert við:** Þegar Kadence themi er aktivt þitt þema.

## Hvernig skiljanir eru valin {#how-skills-are-selected}

Assistantur uppfangar sjálf aktivt þema og installað plugin á hverjum textanum. Ef er að tilstaða skiljanir sem tengjast þema, er hún automatísk aktivert í samhengi assistantarinnar. Þú þarft ekki manuelle aktivering eða skiftingu skiljanira.

### Flókna skiljanir {#multiple-skills}

Ef fleiri ferðum skipta í því að nota áður skilningu á sínum vísitalinn (t.d. ef þú hefur både Kadence Blocks og Kadence Theme aktiv), getur hjálparinn aðgangast allri tilfelli og kanna leiðbeiningar frá öllum þeim skilningum.

### Skipting á þemum {#switching-themes}

Þegar þú breytir aktivt þema, uppfærast skilningar hjá hjálparinn sjálftjafn af næstu textanum. Til dæmis:

1. Þú notar blokkþema með skilningum **Block Themes** aktiva.
2. Þú breytist í klassískt þema.
3. Á næstu textann er skilningur **Classic Themes** sjálfjafn afhliðið, og skilningur **Block Themes** er ekki lengur til viðbót.

## Notkun þemum-skilninga (Theme-Aware Skills) {#using-theme-aware-skills}

Til að nota skilningu sem er tengd þema, skrifa bara það hvað þú vilt gera í chat-stöðu. Hjálparinn mun sjálfjafn kanna leiðbeiningar viðeigandi skilningunar með skrefum.

### Dæmi um fyrirspurnir {#example-prompts}

**Til Block Themes:**
> "Skapa hero section með myndbakgrunni og miðlitlegum texta notaðu blokk-skjaldi."

**Til Classic Themes:**
> "Búa til sérstakla viðkvæmt vísarstöð í hárkantann með child theme."

**Til Kadence Blocks:**
> "Byggja vísarstað með Kadence Testimonials blokka."

**Til Kadence Theme:**
> "Skipta þema-uppsetningu og stíl á navigationsmenúnum."

Hjálparinn mun veita leiðbeiningu sem er sérstaklega tæmdu fyrir aktivt þema og pluginum þínum.

:::note
Þemum-skilningar eru sjálfjafn til viðbót í Superdav AI Agent v1.10.0 og uppupdatingum. Þarf ekki að setja upp eitthvað áfram.
:::
