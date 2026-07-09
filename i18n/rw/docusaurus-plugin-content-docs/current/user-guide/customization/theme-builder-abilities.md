---
title: Uburyo bwo gukora uburyo bw'umuri
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Ibisya y'Uburyo mu nshuti ya Theme Builder: Scaffold na Gukora Theme Block {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 igitangira uburyo bishobora kugera ku gukora no gukoresha theme block cyangwa custom ku chat interface.

## Uburyo Bw'Ubwiramo (Overview) {#overview}

Ibyiciro by'uburyo **scaffold-block-theme** n'ibyo byo **activate-theme** bishobora guhindura agents kugira ngo:
- Kugera theme block zikoreshwa mu gukoresha (production-ready) aho uziye, bazishyira ku chat.
- Gukora theme ku site yawe mu gihe cy'umwihariko nta gukoresha umuntu w'ubwoko.
- Gukora ubushobozi bw'ubwujyu bwo kuvuga (visual identities) mu buryo bwo kwerekana uburyo bwo gukora ibyo byiza.

## Gukora Theme Block (Scaffold Block Theme) {#scaffold-block-theme}

Ibyiciro by'uburyo **scaffold-block-theme** bigira ngo bigere theme block ya WordPress yashobora gushyirwa mu buryo bwose, kandi bishobora gutanga ibi:

- `theme.json` n'ibyo bikoreshwa mu kuvuga uburyo bwo gukora (design tokens).
- Fichier za template za Block zikoreshwa mu gihe cyiza cyangwa ku muryango w'ubwujyu bw'ubushobozi (common layouts).
- Styles na ibindi by'ubwoko (variations) bya block.
- Metadata ya theme n'ibyo bishobora gukoresha mu kumenya uburyo bwo gukoresha.

### Uburyo Bwo Gukoresha (How to Invoke) {#how-to-invoke}

Mu chat yawe na Superdav AI Agent, ushobora kugira ngo wumva gukora theme:

```
"Gukora block theme cyo mu gihe 'Modern Agency' n'ubwujyu bwa mbere n'ubwoko bw'ibyo (blue and white),
uburyo bwo kuvuga bw'ibyo (sans-serif typography), kandi uburyo bwo gukoresha bwiza"
```

Agent izakora iki:
1. Gukoresha ibyo uziye mu kumenya uburyo bwo gukora (design preferences) ku rwego rwa kumenya.
2. Gukora uburyo bwo gushyira theme yose.
3. Gukora amafichier yose ya theme.
4. Gutera theme kugira ngo ikoreshwa.

### Icyo Bishobora Kwitwa (Expected Output) {#expected-output}

Iyo byiciro by'uburyo bigere mu buryo bwiza, uza kura:

- Ubutumwa ko theme yashyirwaho (scaffolded).
- Izina ry'theme n'uko yashyirwaho.
- Ubushamyi bwo ibyo byose by'ubwujyu bwo gukora (colors, typography, spacing) byashyirwaho.
- Uburyo bwo gukoresha kugira ngo ikoreshwa.

Urugero rwa ubutumwa:
```
✓ Theme "Modern Agency" yashyirwaho mu buryo bwiza
  Urugero: /wp-content/themes/modern-agency/
  Ibyuburu (Colors): Primary #0066CC, Secondary #FFFFFF
  Uburyo bwo kuvuga (Typography): Inter (sans-serif)
  Uburyo bwo gukoresha (Status): Ikoreshwa mu gihe
```

## Gukora Theme (Activate Theme) {#activate-theme}

Icyo **activate-theme** ni gukora uburyo w'ubwoko (theme) wako kugira ngo ubone ubutumwa bwo mu gihe cyangwa ubutumwa bwa hariye.

### Uburyo Bwo Gukoresha {#how-to-invoke-1}

Nyuma yemeza ubutumwa, uba mushobora gukoresha uko ubutumwa bwawe bishoboraga:

```
"Gukoresha ubutumwa Modern Agency"
```

Cyangwa gukoresha ubutumwa hariye:

```
"Kugira ngo nshobore ku butumwa Twentytwentyfour"
```

### Icyo Gishoborwa Kwibonye {#expected-output-1}

Iyo gukoresha byibonye neza:

- Uburyo bwo kubona ubutumwa bwawe bugaragare.
- Izina ry'ubutumwa bw'ibanze (kugira ngo umenye).
- URL y'ubwoko wako aho ubutumwa bugaragare.
- Icyemezo cyangwa ibindi byo mu gihe cy'ubutumwa.

Uburyo bwo kubona kuri modoka:
```
✓ Ubutumwa bwaragare neza
  Ubutumwa bwaragare: Modern Agency
  Ubutumwa bw'ibanze: Twentytwentyfour
  Bugaragare kuri: https://yoursite.com
  Icyemezo: Shobora gushakira ku homepage kugira ngo umenye uburyo bwo kubona
```

## Uburyo Bwo Gukora: Scaffolding no Gukoresha {#workflow-scaffold-and-activate}

Uburyo bwawe bwa hariye bishobora gukoresha ibyo byose:

1. **Kugira ngo utunganye ubutumwa**: "Yitondera ubutumwa block theme kuri landing page y'SaaS yanjye"
2. **Agent itunganya ubutumwa**: Icyo kigira amakuru n'ibyo bishobora gukoresha (files) no ibintu by'ubwoko bw'ubwoko (design tokens).
3. **Gushyira mu mategeko no gukora**: Gukunda uburyo bwo kubara ibyo bishoboraga kugira ngo umenye niba hari ibindi byemezo ku buryo bwo kubona.
4. **Gukoresha**: "Gukoresha ubutumwa ubu"
5. **Kubona neza**: Gukora kuri site yacu kugira ngo umenye ko uburyo bwo kubona bwaragare.

## Design Tokens no Gukora Icyemezo (Customization) {#design-tokens-and-customization}

Ibutumwa byitunganywe (scaffolded themes) bigira amakuru y'ubwoko bw'ubutumwa bwa WordPress (bishingiye ku `theme.json`) kugira ngo:

- **Amakuru**: Ubutumwa bwa mbere, bwa kabiri, bwa cyemezo, n'ibyo byo mu gihe cy'ubwoko (palette).
- **Uburyo bwo gukoresha amagambo**: Amagambo y'font, ibyo bikomeye (sizes), uburyo bwo gukomeza (weights), no uburyo bwo gukomeza urugero (line heights).
- **Urugero**: Icyemezo cy'padding, margin, n'ibintu byo mu gihe cy'ubwoko (gap scales).
- **Icyemezo cy'bura**: Amakuru y'radius no ibyo bishoboraga.
- **Amakuru y'umutwe**: Icyemezo cy'elevation levels.

Ibi makuru bigera mu `theme.json`, bikagira uburyo bwo gukora byiza kugira ngo umenye niba wumva ibyo byose ku butumwa bwakoze.

## Icyemezo n'Amakuru {#limitations-and-notes}

(This section is kept as is, translated naturally)

- Themes zishobora gushyemo mu `/wp-content/themes/` kandi bifite uburyo bwo gutanga (naming conventions) mu WordPress
- Gutangira (Activation) ruzaba na uburenganzira bwiza ku site yawe ya WordPress

Urugero rwa PHP rishobora yari ryigize mu themes ni rigera, gukoresha plugins cyangwa uburyo bwo gukoresha block themes.

## Gukemura Ibibazo (Troubleshooting) {#troubleshooting}

**Theme ntirimo kuboneka nyuma yo gutanga (scaffolding)**
- Shobora kumenya ko directory y'theme yari yashobora yitwa kandi yari yashobora gushyira (permissions) byiza.
- Shobora kumenya ko `theme.json` iri mu format ya JSON yiza.
- Shobora kumenya ko izina ry'theme ntirimo gukomeza n'izindi zishobora yari zikoreshwa.

**Gutangira (Activation) ruzaba na ubwoba**
- Shobora kumenya ko wari ubutumwa bwo administrator (administrator permissions).
- Shobora kumenya ko directory ya theme iri mu buryo bwo gutanga (readable) n'iyo WordPress.
- Shobora gusoma error logs za WordPress kugira ngo umenye ibyo byari byitwa.

**Design tokens ntizera gukoreshwa**
- Shobora kumenya ko syntax ya `theme.json` iri mu buryo bwiza.
- Shobora gukemura (clear) cyangwa gufata (clear) plugins zikoresha caching.
- Shobora kumenya ko version ya WordPress yawe irimo uburyo bwo gukoresha tokens ugiye gukoresha.

## Icyo Gufite Kwibonye (Next Steps) {#next-steps}

Nyuma yo gutangira theme yawe, uza kuba ufite ubushobozi bwo:
- Gutumia **Design System Aesthetics skill** kugira ngo ushuye umuntu mu buryo bwiza ku gukoresha typography, amagambo y'ubwoko (colors), n'ibyo byari bitandukanye (spacing).
- Gukoresha uburyo bwo gukoresha block editor kugira ngo ushobore gutera umuntu mu buryo bwiza ku styles za blocks zikoreshwa.
- Gutera CSS cyangwa amagambo y'ubwoko (custom CSS) mu file ya theme `style.css`.
- Gukora templates za blocks zishobora gukoresha kuri page types zikoreshwa cyane.
