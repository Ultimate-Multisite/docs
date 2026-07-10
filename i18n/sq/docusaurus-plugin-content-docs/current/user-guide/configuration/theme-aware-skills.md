---
title: Aftësitë e ndjeshme ndaj temës
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Aftë Skills të Ndjeshmërisme ndaj Temës {#theme-aware-skills}

Superdav AI Agent v1.10.0 merr me vete katër aftësi të reja që janë të ndjeshme ndaj temës dhe automatikisht sekuatojnë temën WordPress aktuale tënde. Këto aftësi ofrojnë udhëzime dhe kapacitete të specializuara të përshtatura me arkitekturën dhe veçoritë e temës suaj.

## Çfarë janë Aftësitë e Ndjeshmërisme ndaj Temës? {#what-are-theme-aware-skills}

Aftësitë e ndjeshmërisme ndaj temës janë baza e njohurive dhe setet e mjeteve të parakonfiguruara që asistent AI i zgjedh automatikisht bazuar në temën WordPress aktuale në faqen tuaj. Kur ndryshoni tema, aftësitë e disponueshme të asistentit përditësohen automatikisht — nuk kërkohet konfigurim manual.

Secara aftësi përfshin:

- **Dokumentacion specifik për temën** — udhëzime se si të përdorni dhe të personalizoni temën
- **Referanca ndaj blokëve dhe modelit (pattern)** — bloka, modeli dhe opsionet e dizajnit që janë në dispozicion
- **Shembuj personalizimi** — fragmente kode dhe modele konfigurimi për detyra të zakonshme
- **Praktikat më të mira** — rekomandime për arkitekturën dhe procesin e punës së temës

## Aftësitë e Disponueshme të Ndjeshmërisme ndaj Temës {#available-theme-aware-skills}

### Temat me Blokë (Block Themes) {#block-themes}

**Aplikim:** Temat që përdorin arkitekturën bazuar në bloka (Full Site Editing) të WordPress.

Aftësia Block Themes ofron udhëzime për:

- Krijimin dhe redaktimin e template-ve duke përdorur editorin me bloka
- Punën me modele bloku dhe bloka të riedaktueshme
- Personalizimin e stileve globale dhe cilësimeve në theme.json
- Përdorimin e blokëve dhe variacionit të temës
- Ndërtimin e modeleve bloku të personalizuara për faqen tuaj

**Aktivizo automatikisht kur:** Tema aktuale juaj është një temë me blok (mbështet funksionin `block-templates`).

### Temat Klasike (Classic Themes) {#classic-themes}

**Aplikim:** Temat tradicionale WordPress që përdorin template PHP dhe editorin klasik.

Aftësia Classic Themes ofron udhëzime për:

Përmbledhja e dokumentacionit:

* Punim me skedarët template PHP dhe hooks
* Personalizimi i pamjes së temës përmes Customizer-it
* Përdorimi i widget areave dhe sidebar-eve
* Modifikimi i CSS dhe zhvillimi i child theme-eve
* Kuptimi i hierarkisë së temës dhe template tag-eve

**Aktivizo automatikisht kur:** Tema aktuale juaj është një temë klassike (jo block).

### Kadence Blocks {#kadence-blocks}

**Applikon për:** Shte që përdorin pluginin Kadence Blocks për dizajn të avancuar bazuar në blloqe.

Aftësia Kadence Blocks ju ofron udhëzime mbi:

* Përdorimin e bibliotekës së avancuar të Kadence (Hero, Testimonials, Pricing, etj.)
* Konfigurimin e cilësimeve dhe opsioneve të blloqeve Kadence dhe opcioneve responsive
* Ndërtimin e dizajneve të personalizuara me blloqet Grid dhe Container të Kadence
* Integrimin e blloqeve Kadence me temën tuaj
* Përdorimin i sistemit të dizajnit dhe preset-eve të Kadence

**Aktivizo automatikisht kur:** Pluginin Kadence Blocks është aktiv në faqen tuaj.

### Kadence Theme {#kadence-theme}

**Applikon për:** Shte që përdorin temën Kadence për dizajn bazuar në blloqe dhe personalizim.

Aftësia Kadence Theme ju ofron udhëzime mbi:

* Personalizimin e temës Kadence përmes stileve globale dhe theme.json
* Përdorimin e modelit dhe template-ve të blloqeve të ndërtuar në Kadence
* Konfigurimin e cilësimeve dhe opsioneve të temës Kadence
* Ndërtimin e dizajneve të personalizuara me sistemin e dizajnit të Kadence
* Integrimin e Kadence me pluginet dhe mjetet popullore

**Aktivizo automatikisht kur:** Tema Kadence është tema aktuale juaj.

## Si zgjidhen Aftësitë (Skills) {#how-skills-are-selected}

Asistenti zbulon automatikisht temën tuaj aktive dhe pluginet e instaluara në çdo mesazh. Nëse një aftësi që i përshtatet me temën është e disponueshme, ajo ngarkohet automatikisht në kontekstin e asistentit. Nuk keni nevojë ta aktivizoni ose ndryshoni aftësitë manualisht.

### Aftësi të shumta {#multiple-skills}

Nëse disa aftësi (skills) i aplikojnë në faqen tuaj (për shembull, nëse keni të aktivizuar si Kadence Blocks dhe Kadence Theme), asistentit mund të aksesojë të gjitha aftësitë e përdërtuara dhe mund të referohet udhëzimeve nga secili prej tyre.

### Ndryshimi i Temave (Switching Themes) {#switching-themes}

Kur ndryshoni temën aktuale, aftësitë e disponueshme të asistentit përditësohen automatikisht në mesazhin tjetër. Për shembull:

1. Po përdorni një temë me blloqe (block theme) me aftësinë **Block Themes** aktive.
2. Ndryshoni te një temë klasike (classic theme).
3. Në mesazhin tuaj të ardhshëm, aftësia **Classic Themes** ngarkohet automatikisht dhe aftësia **Block Themes** nuk është më e disponueshme.

## Përdorimi i Aftësive të Ndjeshme ndaj Temës (Using Theme-Aware Skills) {#using-theme-aware-skills}

Për të përfshirë një aftësi të ndjeshme ndaj temës, thjesht përshkruani se çfarë dëshironi të bëni në interfejsin e bisedës. Asistenti do të referohet automatikisht udhëzimeve të aftësisë e duhur.

### Shembuj Pyetjeve (Example Prompts) {#example-prompts}

**Për Block Themes:**
> "Krijoni një seksion hero me imazh sfondi dhe tekst i qendruar duke përdorur modele blloqesh."

**Për Classic Themes:**
> "Shtoni një zonë widget të personalizuar në sidebar duke përdorur child theme."

**Për Kadence Blocks:**
> "Ndani një seksion testimone duke përdorur blloqut Testimonials të Kadence."

**Për Kadence Theme:**
> "Personalizoni dizajnin e header-it dhe stilimin e menysë së navigimit."

Asistenti do t'ju ofroj udhëzime specifike për temën tuaj dhe shembuj kode të përshtatura me temën dhe pluginet që keni aktive.

:::note
Aftësitë e ndjeshme ndaj temës janë automatikisht të disponueshme në Superdav AI Agent v1.10.0 dhe më vonë. Nuk kërkohet asnjë konfigurim ose hapje shtesë.
:::
