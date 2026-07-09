---
title: Zvinodzidzwa dzemabasa ya Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Feraura Zvinore: Scaffold uye Kuti Usimone Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 inogona kuita zvinhu maviri zvinopotera kuti uwezere kutanga (generate) uye kusimone (deploy) block themes dzako dzinotamba (custom) nekuti unogona kutaura nechat interface.

## Kuratidza (Overview) {#overview}

Zvinoreva zvinoreva **scaffold-block-theme** uye **activate-theme** zvinhu zvinopfungwa kuti agents zvizere:
- Kutaura block themes dzakareta (production-ready) dzinogona kuonekwa nekuti unenge uri kutaura nekuona zvako.
- Kusimone themes pamusoro pe site yako pane kukanganisa kwako kunoita, kana usina kuteerera kwezvinhu zvinotamba.
- Kutaura nzira dzinogona kuonekwa (visual identities) dzine kuratidza nekuti unenge uri kutaura nekuona zvakakosha.

## Kuratidza Block Theme (Scaffold Block Theme) {#scaffold-block-theme}

Zvinoreva **scaffold-block-theme** zvinogona kutanga block theme yeputindu ya WordPress inosanganisira:

- `theme.json` configuration inosanganisira design tokens
- Template files dzemablock dzakakosha (common layouts)
- Styles uye variations dzinotamba (custom block styles and variations)
- Metadata yete ye theme uye zvinoreva kuti inogona kuenda

### Sei Kuti Usimone (How to Invoke) {#how-to-invoke}

Mune chat yako neSuperdav AI Agent, unogona kutaura kuti utange kutanga theme:

```
"Tange block theme yakaita 'Modern Agency' yakanaka nemakore akazara uye makore akatara,
typography inosanganisira sans-serif, uye layout inotamba."
```

Agent ichaiva:
1. Kutaura zvinhu zvinogona kuonekwa dzako pamusoro pe design (design preferences) nekuti unenge uri kutaura nekuona.
2. Kuratidza structure yete ye theme.
3. Kutanga files dzese dzinotamba.
4. Kusanganisira theme kuti isimone.

### Zvinogona Kuonekwa (Expected Output) {#expected-output}

Kana ability inosimbisa zvakanaka, uchaona:

- Kuratidza kuti theme yakatanga kutanga (scaffolded).
- Zvinhu zvepamba ye theme uye upfungwa yayo.
- Kusanganisira zvinoreva design tokens dzakagadzirwa (colors, typography, spacing).
- Status inosanganisira kuti isimone.

Zvinogona kuonekwa:
```
✓ Theme "Modern Agency" yakatanga kutanga zvakanaka
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Kusimone Theme (Activate Theme) {#activate-theme}

Ita **activate-theme** ability inakupa iwe kuuta site yako kune theme yakachengetedza kana yakanengeka.

### Kuvaitese {#how-to-invoke-1}

Panda uyu theme wakaonekwa (scaffold), unogona kuvaitese nguva yakachengetedza:

```
"Vaitese theme Modern Agency"
```

Kana uri kuvaitese theme yakachengetedza yakanengeka:

```
"Simbisa kune Twentytwentyfour theme"
```

### Zvinhu Zvinogona Kuonekwa {#expected-output-1}

Panda kuvaitese kunge kuenda zvakanaka:

- Kufanira kuti theme yakaiitwa iwe yakanengeka
- Zvinhu zvetheme yakare (kuti usambise)
- URL ya site inotanga kuita iwe
- Zvinangwa zvinogona kutanga kune theme iwe

Zvinoreva zvakanaka:
```
✓ Theme yakava nekuvhura kwakanaka
  Theme yakaiitwa: Modern Agency
  Theme yakare: Twentytwentyfour
  Inotanga kuita iwe: https://yoursite.com
  Chii: Simbisa homepage yako kuti uone layout yakachengetedza
```

## Workflow: Kuvaitese uye Kufamba {#workflow-scaffold-and-activate}

Workflow inotanga nekuita zvinhu zvinobva mune zvinobva:

1. **Kutanga kuita theme**: "Tanga theme block kune landing page ya SaaS yangu"
2. **Agent inenge inenge ikaiitwa theme**: Inogona kuita files uye design tokens
3. **Kufamba nekuendesa**: Kutaura nezvechinhu chedesign kana zvakakosha pane iwe
4. **Kuvaitese**: "Vaitese theme nguva iyi"
5. **Kutanga kune zvinangwa**: Tinga site yako kuti uone design yakachengetedza inotanga kuita

## Design Tokens uye Kufamba Nechinhu Chedesign {#design-tokens-and-customization}

Themes yakaiitwa (scaffolded themes) dzinoratidza design tokens dzine WordPress (kubva ku `theme.json`) kuti:

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius uye width tokens
- **Shadows**: Elevation levels

Tokens iyi dzinotsanana mumwe file we `theme.json`, zvichinguva kuendesa nzira yese ye design system yako kubva mufile imwe.

## Zvinhu Zvinogona Kuonekwa uye Zvinangwa {#limitations-and-notes}

## Kutiro (Troubleshooting) {#troubleshooting}

**Theme haonenge haasi panyanya panyanya (Theme doesn't appear after scaffolding)**
- Chire kuti directory ine ine ne permissions dzakare zvinhu zvinotora.
- Chire kuti `theme.json` inenge JSON inokwanisa.
- Chire kuti zvinoda kunge kuna themes dzine kuita.

**Activation haingazvi (Activation fails)**
- Chire kuti unenge uyu administrator permissions.
- Chire kuti directory ya theme inenge inogadzirwa neWordPress.
- Chire kuti onge kuona errors dzakare WordPress kuti zvinotora zvinhu.

**Design tokens haingazvi kutora (Design tokens not applying)**
- Chire kuti syntax ya `theme.json` inenge yakakwana.
- Chire caching plugins dziri kuita.
- Chire kuti version ya WordPress yako inogona kutora tokens dzine kuita.

## Zvinhu Zvinotevera (Next Steps) {#next-steps}

Panguva unagadzira theme yako, unogona:
- Kuratidza **Design System Aesthetics skill** kuti utore typography, colors, uye spacing zvakare.
- Kutora styles dzakare block nguva neWordPress block editor.
- Kuti ushure CSS yakare mufile ya `style.css` ya theme.
- Kuita custom block templates dzinogona kuita page types dzine kuita.
