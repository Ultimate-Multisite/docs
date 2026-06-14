---
title: Xirfadaha Dareenka Qaabka Qoraalka
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Xirfadaha Lagu Aqoonsan Tema (Theme-Aware Skills)

Superdav AI Agent v1.10.0 wuxuu soo saaray afar xirfadood oo cusub oo la aqoonsan tema ah (theme-aware built-in skills) oo si toos ah ula jaanqaada tema WordPress-ka aad hadda isticmaalayso. Xirfadahan waxay bixiya talooyin iyo awoodo gaar ah oo ku habboon qaabdhismeedka iyo astaamaha theme-kaaga.

## Maxay yihiin Xirfadaha Lagu Aqoonsan Tema (Theme-Aware Skills)?

Xirfadaha lagu aqoonsan tema waa heshiisyo la hor samaysay (pre-configured knowledge bases) iyo qalab la diyaariyay oo ay agensi-ga AI si toos ah u doorto iyadoo ku xiran theme-ka WordPress-ka hadda socda website-kaaga. Marka aad isbeddelto tema, xirfadaha awoodda agensi-ga waxay si toos ah u cusboonaysiiyaan — ma loo baahnayn in la hagaajiyo (manual configuration).

Qayb kasta oo xirfad ahi wuxuu ka kooban yahay:

- **Macluumaadka gaarka ah ee theme-ka** — talooyin ku saabsan isticmaalka iyo hagaajinta tema-ka
- **Tixraacyada Block-ga iyo pattern-ka** — block-yada la heli karo, patterns-ka, iyo doorooyinka naqshadaynta (design options)
- **Tusaalooyinka hagaajinta (Customization examples)** — qaybaha koodka (code snippets) iyo qaababka hagaajinta ee hawlaha caadiga ah
- **Hababka ugu wanaagsan (Best practices)** — talooyin ku saabsan qaabdhismeedka tema-ka iyo habka shaqada (workflow)

## Xirfadaha Lagu Aqoonsan Tema ee La heli karo

### Block Themes (Theme-yada Block-ga ah)

**Waxay la tijaabiyaan:** Theme-yada isticmaalaya qaabdhismeedka block-ka ee WordPress (Full Site Editing).

Xirfadaha Block Themes waxay bixisaa talooyin ku saabsan:

- Abuurista iyo hagaajinta templates-ka iyadoo la isticmaalayo block editor
- Shaqaynta patterns-ka block-ka iyo block-yada dibadda loo isticmaali karo (reusable blocks)
- Hagaajinta qaababka guud (global styles) iyo settings-ka theme.json
- Isticmaalka theme blocks iyo kala duwanaanshooyinka (variations)
- Abuurista patterns-ka block-ka gaarka ah ee website-kaaga

**Waxay si toos ah u fulisaa marka:** Theme-ka hadda socdaagu yahay mid Block Theme (waxay taageera astaanta `block-templates`).

### Classic Themes (Theme-yada Klasiga ah)

**Waxay la tijaabiyaan:** Theme-yada WordPress-ka caadiga ah ee isticmaalaya templates PHP iyo editor-ka klassiga ah.

Xirfadaha Classic Themes waxay bixisaa talooyin ku saabsan:

**Shaqaylka PHP template files iyo hooks-ka**
**Wax-soo-gaalka muuqaalka theme-ka iyada oo loo marayo Customizer**
**Isticmaalka widget areas iyo sidebars-ka**
**Wax ka beddelid CSS iyo horumarinta child theme**
**Fahamka heerarka theme-ka iyo template tags-ka**

**Si iska soo bixiyo si toos ah:** Theme-kaaga socda waa mid "classic" (oo aan ahayn block-based).

### Kadence Blocks

**Waxay kuugu adeegataa:** Goobaha website-yada isticmaala plugin-ka Kadence Blocks si loo sameeyo design-ka adag ee ku saleysan blocks.

Xirfadda Kadence Blocks waxay bixisaa tilmaamo ku saabsan:

- Isticmaalka maktabadda blocks-ka sare ee Kadence (sida Hero, Testimonials, Pricing, iwm.)
- Habka hagaajinta settings-yada block-yada Kadence iyo doorashooyinka responsive.
- Dhisidda qaabab gaar ah oo isticmaalaya grid-ka iyo container blocks-ka Kadence.
- Isdhexgalka kadibka (blocks) Kadence-ka lahayd theme-kaaga.
- Isticmaalka nidaamka design-ka (design system) iyo presets-yada Kadence.

**Si iska soo bixiyo si toos ah:** Plugin-ka Kadence Blocks wuxuu socdaa website-kaaga.

### Kadence Theme

**Waxay kuugu adeegataa:** Goobaha website-yada isticmaala theme-ka Kadence si loo sameeyo design-ka iyo hagaajinta ku saleysan blocks-ka.

Xirfadda Kadence Theme waxay bixisaa tilmaamo ku saabsan:

- Hagaajinta theme-ka Kadence iyadoo la isticmaalayo global styles iyo file-ka `theme.json`.
- Isticmaalka qaababka (patterns) iyo templates-ka dhashay ee Kadence.
- Habka hagaajinta settings-yada iyo doorashooyinka theme-ka Kadence.
- Dhisidda design-yo gaar ah iyadoo la isticmaalayo nidaamka design-ka (design system) ee Kadence.
- Isdhexgalka Kadence-ka plugin-yada iyo qalabka caanka ah.

**Si iska soo bixiyo si toos ah:** Theme-kaaga socda waa theme-ka Kadence.

## Sida Xirfadaha Loo Dooro

Assistant-ku si toos ah wuxuu ogaa theme-kaaga socda iyo plugin-yada aad ku haysato qoraalka kasta. Haddii xirfad la mid ah oo lahayd theme-kaagu, wuxuu si toos ah u soo qaataa (loads) context-ka assistant-ka. Ma inaad si gacanta u furtaa ama u beddesho skills-ka.

### Xirfadaha Badan

Haddii fursado badan oo kuugu maahan (tusaale, haddii aad leedahay Kadence Blocks iyo Kadence Theme labadaba firfircoon), laakiin la-talinaha wuxuu heli karaa dhammaan xirfadaha la salayn karo isagoo isticmaalaya talo ka soo qaata kasta.

### Isbeddelka Themes (Themes)

Marka aad beddesho theme-kaaga firfircoon, xirfadaha la heli karo ee la-talinaha ayaa si toos ah u cusboonaysiin doonaa jawaabta dambe. Tusaale:

1. Waxaad isticmaalaysaa theme-ka block-ga oo leh xirfadda **Block Themes** (Themes-ka Block-ga) firfircoon.
2. Waxaad u beddeshaa theme-ka classic (asalka ah).
3. Jawaabta dambe, xirfadaha **Classic Themes** ayaa si toos ah loogu soo qaadayaa, halka xirfadda **Block Themes** aysan weli ku haysanayn.

## Isticmaalka Xirfadaha La Salaynaya Theme-ka (Theme-Aware Skills)

Si aad u isticmaasho xirfad la salaynaya theme-ka, si fudud qor waxa aad rabto inaad samayso interface-ka wada hadalka. La-talinaha wuxuu si toos ah u tixraacayaa talooyinka xirfadda saxda ah.

### Tusaalo Prompts (Prompts)

**Haddii aad isticmaalayso Block Themes:**
> "Samayso hero section oo leh sawir faahfaahsan iyo qoraal la duubay istaaka iyadoo la adeegsanayo block patterns."

**Haddii aad isticmaalayso Classic Themes:**
> "Ku dar meel widget gaar ah (custom widget area) dhinaca hore (sidebar) adiga oo isticmaalaya child theme."

**Haddii aad isticmaalayso Kadence Blocks:**
> "Samayso qayb testimonial (testimonials section) iyadoo la adeegsanayo block-ga Kadence Testimonials."

**Haddii aad isticmaalayso Kadence Theme:**
> "Si gaar ah u hagaajinta qaabka header-ka iyo qaabdhismeedka menu-ga navigation-ka."

La-talinaha wuxuu bixin doonaa talooyin iyo tusaalo code oo gaar ah theme-kaaga firfircoon iyo plugins-kaaga.

:::note
Xirfadaha la salaynaya theme-ka (Theme-aware skills) waxay si toos ah u heli karaan Superdav AI Agent v1.10.0 iyo intaas ka dambeeya. Ma baahna wax cusub oo lagu qaado ama loo hagaajiyo.
:::
