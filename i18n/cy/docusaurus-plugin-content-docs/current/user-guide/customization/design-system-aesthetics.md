---
title: Ffarddau Estetig System
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Faddau Gweithro System Cynllunio (Design System Aesthetics Skill)

Mae'r **Faddau Gweithro System Cynllunio** yn ffordd cyfarwydd i gwneud eich identiti wizual o'r safle. Mae’n helpu chi i wneud penderfyniadau ddefnyddiol am y tipografia, colore, sgwllt (spacing), a tokenau chwarae (motion tokens) sydd yn cyflwyno eich system cynllunio.

## Beth yw Faddau Gweithro System Cynllunio? {#what-is-design-system-aesthetics}

Mae Faddau Gweithro System Cynllunio yn gweithd yn ddefnyddiol sy mae'n cyflwyno:

- **Tipografia (Typography)**: Famau ffôn, gyflymion, pwysau, a llwybr linellau
- **Colore (Color)**: Palet prim, secundair, accent, a neutral
- **Sgwllt (Spacing)**: Padding, margin, a sgwllt gapau
- **Borddau (Borders)**: Tokenau radius a gyflym
- **Tadlu (Shadows)**: Tokenau cyfathrebu a ddefnydd
- **Chwarae (Motion)**: Animacioedd a trawsion

Mae'r penderfyniadau hyn yn cael eu cadw mewn ffeil `theme.json` o'ch theme, gan creu system wizual sydd yn cysylltiedig.

## Pam i ddefnyddio Faddau Gweithro System Cynllunio? {#why-use-design-system-aesthetics}

### Cyflawniad (Consistency) {#consistency}

Mae system cynllunio yn sicru:

- Mae pob text yn defnyddio ystafell tipografia felly
- Mae colore'n defnyddio'n ddefnyddiol arall arall ar eich safle
- Mae sgwllt yn arolio pethau cyffredinol
- Mae animacioedd yn teimlo yn unigol

### Efniad (Efficiency) {#efficiency}

Yn lle gwneud penderfyniadau cynllunio ar gyfer peiriad, chi:

- Defnyddio tokenau unwaith
- Cyflwyni nhw yn bresennol
- Gwylio'r cyflym yn llwyr drwy newid un gwerth

### Glyndyniad (Flexibility) {#flexibility}

Gallwch chi:

- Gyfyrdd eich system cynllunio yn gyflym
- Experimentio gyda chwaraeif wizual cyffredinol
- Cadw y cysylltiad brand yn ddefnyddiol traws eich gwella

## Cyflwyno Faddau Gweithro System Cynllunio {#triggering-the-design-system-aesthetics-skill}

### Actiad Manwl (Manual Activation) {#manual-activation}

Gallwch chi entyn yr faddau i unrhyw amser:

```
"Help me refine my design system"
```

neu

```
"Let's improve my site's aesthetics"
```

neu

```
"Guide me through design system decisions"
```

### Gysylltiadau Awtorol (Automatic Suggestions) {#automatic-suggestions}

Gall y agentau roi cyflwyniad i ddefnyddio'r faddau pan:

- Mae'n gofyn am newidiadau cynllunio
- Mae'n gofyn am redysg "modern" neu "professional"
- Mae'n gallu gwneud ychwaneg i cyflawniad wizual
- Mae'n parhau i ddefnyddio eich safle

## Proses Estetika y System Design {#the-design-system-aesthetics-process}

### Ystaf 1: Tipografia {#step-1-typography}

Ymhlif yw'r aith yn dangos am eich dechrau ffôn:

```
Beth yw'r styl tipografia sy'n cael eich priodref?
- Serif (traddodiadol, elegent)
- Sans-serif (modern, llأن)
- Monospace (technigol, gan ddefnyddio cod)

Ar gyfer eich ffôn cyflym:
- Galwch chi ddymuno ffôn cyflym yn unig ar gyfer teitl a chyflym, neu ddefnyddio'r un fel tebydal?
- Priodref: bold, elegent, chwarae, minimol?

Ar gyfer eich ffôn corff:
- Mae cyflawniaeth (readability) yn hanesydd. A oes gennych chi'n gosod:
  - Text fwy dda, mwy o gwmpas
  - Text byr, effeithiol
  - Cyflym standard
```

Yn ymlaen, mae'r aith yn cyflwyno:

- **FFôn teitl (Heading font)**: FFôn prymedig ar gyfer teitiau ac teitl
- **FFôn corff (Body font)**: FFôn ar gyfer paragraffau a text corff
- **FFôn monospaced (Monospace font)**: FFôn ar gyfer cod a cynnwys technigol
- **Cyfaint o ddefnyddiau (Size scale)**: Cyflwyniadau wedi'u cyflwyno (bach, gynnwys, llawer, XL, etc.)
- **Cyfaint o balw (Weight scale)**: Balw ffôn (reglar, meddal, bold, etc.)
- **Llinell uchel (Line height)**: Gwmpas rhwng llinellau i sicr cyflawniaeth

### Ystaf 2: Palet Colori {#step-2-color-palette}

```
Let's define your color palette.

Colort prymedig (eich colore brand):
- Cyflwyniad: [dangos y colore sydd ar gael]
- Newch i: [pwyllgorau colort neu cod hex]

Colort ddebyg (colort cefnogol):
- Cyflwyniad: [dangos y colore sydd ar gael]
- Newch i: [pwyllgorau colort neu cod hex]

Colort cyffredinol (grays ar gyfer text, fforddiau, ganlynau):
- Llyfrgell: [colort]
- Meddal: [colort]
- Ddu: [colort]
```

Mae'r aith yn creu palet llawn sy'n cynnwys:

- Colort prymedig, ddebyg, a cyffredinol
- Grays cyffredinol (lyfrgell, meddal, du)
- Colort semantigol (cyfathrebu, addas, erru)
- Cygiadau hover ac active

### Ystaf 3: Gwmpas (Spacing) {#step-3-spacing}

Pa bethau roedd byddwch yn dymunio?

Prif ystrefn o sgil (Spacing scale preference):
- Compact (llwybr, llwythiant)
- Normal (ystrefn balansol)
- Spacious (ystrefn gyffredinol)

Mae hyn yn effaith ar:
- Padding yn y tu mewn i botynau a cards
- Margins rhwng sefyllfeydd
- Gap rhwng item grid

Mae'r agent yn cyflwyno tokenau o sgil (spacing tokens):

- Uniat base (tywyll wrth 4px neu 8px)
- Scale: xs, sm, md, lg, xl, 2xl
- Gwerthau penodol ar gyfer padding, margin, gap

### Cynllun 4: Bwrdd a Chysgodau (Borders and Shadows) {#step-4-borders-and-shadows}

```
Dyfyniadol a ddefnyddiolwch:

Prif rhaidr (Border radius preference):
- Sharp (nad oes rhywio)
- Subtle (rhaidr bach)
- Rounded (rhaidr canol)
- Very rounded (rhaidr mawr)

Dyfyniad o ddwfn:
- Flat (nad oes chysgodau)
- Subtle (chysgodau llawn)
- Pronounced (chysgodau gryf)
```

Mae'r agent yn creu:

- Tokenau rhaidr (for botynau, cards, inputau)
- Tokenau chysgodau ar gyfer leblon ddwfn (elevation levels)
- Tokenau llwybr bwrdd (border width tokens)

### Cynllun 5: Mewn a Chysgodau (Motion and Animation) {#step-5-motion-and-animation}

```
Sutgai'r safle eich gwefanio pan fydd yn weithredol?

Prif chysgodau (Animation preference):
- Minimal (nad oes chysgodau)
- Subtle (trosglwyddoedd llyth)
- Playful (chysgodau yn nodirol)

Chysgodau penodol:
- Cynlluniau sefyllfa (Page transitions): fade, slide, neu nad oes?
- Hover ar botynau: scale, newid colore, neu both?
- Sefyllfa chwarae (Loading states): spinner, skeleton, neu bar y cyflym?
```

Mae'r agent yn cyflwyno:

- Cyflwyniadau trwyllawol (Transition durations) (cyflym, canol, llawer)
- Ffuntion ease (ease functions) (ease-in, ease-out, ease-in-out)
- Keyframes chysgodau ar gyfer y gweithrediadau cyffredinol

## Cyflwyno Estetika System Cynllunio (Applying Design System Aesthetics) {#applying-design-system-aesthetics}

### Cyflwyniad Otomatig (Automatic Application) {#automatic-application}

Ar ôl i chi gwblhau'r sgil, mae'r agent yn:

1. Mae'n cyfathri'r `theme.json` o eich theme gyda'r holl tokens
2. Mae'n cyflwyno'r system cynllunio ar eich theme weithredol
3. Mae'n creu'r stylau block i gyd-fynd â'r system newydd
4. Mae'n gweithredu'r theme wedi'i cyfathri

### Cyflwyniad Manwl (Manual Application) {#manual-application}

Gallwch hefyd redig `theme.json` yn uniongyrchol:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Gwelwch eich System Cynllunio (Design System) gweld {#viewing-your-design-system}

### Mae'n gofynol i'r Agent {#ask-the-agent}

```
"Wynni i ddweud am fy system cynllunio"
```

neu

```
"Beth yw'r tokenau cynllunio fydd gennyf yn gyflwyniad?"
```

Bydd y agent yn dangos eich tyngeddiad (typography), celfau (colors), cyflenau (spacing) a tokenau eraill.

### Gweld theme.json {#view-themejson}

Odwyn `/wp-content/themes/[theme-name]/theme.json` mewn editor text i weld y cyfarwyddiadau cynllunio sydd yn gwrth.

## Cyfathri'r System Cynllunio eich Cynllunio (Design System) {#updating-your-design-system}

### Cyfathriadau Cyflym {#quick-updates}

Gofyn i'r agent am newidiadau penodol:

```
"Gwylio'r celf prynhawn yn ddwfnach"
```

neu

```
"Dyfynnu'r cyflenau cynllunio gan 20%"
```

neu

```
"Newi'r font o ddeallt i'r serif"
```

### Cynllunio Canol {#full-redesign}

Rydych chi'n re-run y gweithd System Cynllunio:

```
"Gwylio'r system cynllunio fy nghanol cyfan"
```

Bydd hyn yn gwneud eich cyflwyniad allan gyda'r holl ddefnyddiau, gan entynnu â'r gyfnodau sydd gennych.

### Cyfathriadau Parcellol {#partial-updates}

Cyfathriwch ystafellau penodol:

```
"Newi'r celf prynhawn yn unig, gwella'r holl ddiweddion"
```

## Practysgol Cynllunio System Cynllunio (Design System Best Practices) {#design-system-best-practices}

### Cyflawniad (Consistency) {#consistency-1}

- Defnyddiw ystafellau yr unol mewn lleoliadau cyfan.
- Peidiwch â creu celfau neu gyflenau unig.
- Gyf surfers ystafellau yn lle gwneud gweithiau arall.

### Enwio (Naming) {#naming}

Defnyddiw enwau llwyr a ddefnyddiol:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Cyflawniad (Scalability) {#scalability}

Dyfynwch eich system o ddefnyddio i'r llwybr:

- Defnyddiwch uniatau relativol (rem, em) yn lle pixelau
- Creu gaelau (xs, sm, md, lg, xl) yn lle gaelau anghyfrifol
- Rheoli ar gyfer y cyflwyniadau yn ddiweddarach

### Ddweud eich system o ddefnyddio i'r llwybr: {#documentation}

- Pam mae eich gweldau penodol wedi'i debyd?
- Pan fyddwch â defnyddio pob token?
- Arafau a casgliadau hanesyddol

## Modelau System Ddefnyddio Cym yn Gymunedol {#common-design-system-patterns}

### Minimalist Modern {#modern-minimalist}

- Typography sans-serif (Inter, Helvetica)
- Palet gaelau sydd yn rhydd (2-3 gaelau)
- Gaelau ddiogel
- Shadau bach
- Animau llwybr a cyflym

### Warm a Cynfrifol {#warm-and-friendly}

- Cyfathrebu o serif a sans-serif
- Palet gaelau warm (oranges, grays warm)
- Cwyrddion yn rhydd
- Shadau soft
- Animau chwarae

### Corporation Profynol {#professional-corporate}

- Sans-serif glân (Roboto, Open Sans)
- Palet neithiol gyda gael warm
- Gaelau sydd wedi'u stadau'n ddefnyddio
- Shadau bach yn rhydd
- Chynlluniau subtil

### Chreol a Bwlch {#creative-and-bold}

- Typography yn ddebygol
- Palet gaelau bwlch
- Gaelau cyffredinol
- Shadau gryf
- Animau sylweddol

## Cyflwyniadau {#troubleshooting}

**Mae'r newidiadau i fy system o ddefnyddio yn dangos**
- Tglwytho'r cache o'r browser
- Rebuilt eich site os ydych yn defnyddio gyllywdd statig (static generator)
- Gwylio bod theme.json yn JSON iawn
- Cynllunwch bod y theme yn weithredol

**Mae'r gaelau yn dangos yn rhyfeddol ar pethau cyffredinol**
- Gynllunwch am CSS sydd wedi'i ddefnyddio mewn pluginau
- Cynllunwch bod pob peth defnyddio'r theme felly
- Tglwytho unrhyw pluginau cache

**Os oes angen i mi ddychw i system o ddefudio blaenorol**
- Gofyn i'r aelod: "Dangos i mi fy system o ddefudio hanesyddol"
- Redig trwyllaw theme.json yn newid i gaelau blaenorol
- Re-run y skill gyda chwilioedd cyffredinol

## Ymddangosau Canolbwynt {#next-steps}

Ar ôl i ddynnu eich system o ddefudio:

1. **Gwellydd eich siant:** Ymthyrau i'r fwytyr o gweld y ddefnydd newydd
2. **Cyfrifau roi allw:** Cynhadau gyda'r gweithgref yn ddefnyddio'r gallu gyda'r skill eto
3. **Creu templau:** Gynnal blocau cyfathrebu byddol gan ddefnyddio eich tokenau ddefnydd
4. **Docymyn:** Rhagwch eich system ddefnydd gyda'r tîm
