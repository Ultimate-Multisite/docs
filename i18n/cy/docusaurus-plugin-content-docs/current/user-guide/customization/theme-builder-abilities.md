---
title: Ffyddau Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Ffrawdau Gweithredoedd: Scaffold a Actiwpio Theming Blocked {#theme-builder-abilities-scaffold-and-activate-block-themes}

Mae Superdav AI Agent v1.12.0 yn cyflwyno ddau gweithredol sy'n sylweddol i chi gynhyrchu a chwarae theming block newydd o'r chat interface.

## Oglwyddictod {#overview}

Mae'r ddefnyddio **scaffold-block-theme** a **activate-theme** yn gallu i'r agentau:
- Gynhyrchu theming block cyffredinol, iawn yn barod i'r proddection, ar adlygu eich amgylchedd
- Chwarae themingau ar eich site heb ystyriaeth manwl o'r unigolion
- Creu identedigol wizual sy'n cydweithio drwy penderfyniadau dylunol a gyfarwyddwyd

## Scaffold Theming Block {#scaffold-block-theme}

Mae'r ddefnyddio **scaffold-block-theme** yn gynhyrchu theming block WordPress newydd gyda strwythur theming cyffredinol, gan gynnwys:

- Cynnig `theme.json` gyda design tokens
- Fylpenau template block ar gyfer llwybrau common
- Stilio a fersylliadau block cyfathrebu
- Metadata theming a ddefnyddiochion cefnogaeth

### Sut i Gweithredu {#how-to-invoke}

Yn eich siarad â Superdav AI Agent, gallwch gofyn am gynhyrchu theming:

```
"Creu theming block gyda'r enw 'Modern Agency' gyda chwarae blu a gwyn,
typodig sans-serif, a llwybr proffesiynol"
```

Bydd y agent yn:
1. Mynol eich penderfyniadau dylunol drwy siarad
2. Gynhyrchu strwythur theming cyffredinol
3. Creu pob fylpenau theming sydd angen
4. Paratoi'r theming i'r chwarae

### Ymddangos Cyflwyniad {#expected-output}

Pan fydd y ddefnyddio yn weithredu'n llwyddiannus, byddwch yn gweld:

- Cynhaltas bod y theming wedi'i scaffold
- Enw a lleoliad y theming
- Amgylchedd o'r design tokens a cael eu cyflwyno (chwaraeon, typography, llwybr)
- Statws barod i'r chwarae

Prif amgylchiad:
```
✓ Theming "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Chwarae Theming {#activate-theme}

Mae'r fäith **activate-theme** yn newid eich siw i thymor bloc neu gyffredinol sydd wedi'i gysylltu neu sydd wedi'i gysylltu.

### Sut i Gweithredu {#how-to-invoke-1}

Ar ôl gysylltu thymor, gallwch chi ei gweithredu yn uniongyrchol:

```
"Gweithredu thymor Modern Agency"
```

Neu gweithredu unrhyw thymor sydd wedi'i gysylltu:

```
"Swiithio i thymor Twentytwentyfour"
```

### Ymddangos a Ddeall {#expected-output-1}

Pan fydd y gweithredu yn cyffredinol:

- Cynhaltas o'r thymor sydd wedi'i gysylltu
- Enw y thymor blaenorol (i ddefnyddio fel cyfeiriad)
- URL y siw lle mae'r thymor yn gweithredu nawr
- unrhyw nodau parhau-thymor

Prif o ddeall:
```
✓ Thymor wedi'i gweithredu'n llwyddiannus
  Thymor sydd wedi'i gweithredu: Modern Agency
  Thymor blaenorol: Twentytwentyfour
  Gweithredol ar: https://yoursite.com
  Nod: Ddysg eich peiriant i gywirio'r llwybr
```

## Gweithro: Gysylltu a Gweithredu {#workflow-scaffold-and-activate}

Mae gweithro tyvoeddol yn ychwanegu'r ddau fäith:

1. **Cyflwyno cyfleidigaeth thymor**: "Creu thymor bloc ar gyfer fy nghyd-deunydd SaaS"
2. **Gysylltu mae'r agent yn gysylltu â'r thymor**: Mae'n cyflwyno fyliau a tokenau dylunio
3. **Ddysgu a gwneud diwethaf**: Disgwyddo newidiadau dylunio os oes angen
4. **Gweithredu**: "Gweithredu thymor nawr"
5. **Cywirio**: Ymddangos eich siw i sicr y dylunio newydd yn gweithredu

## Tokenau Dylunio a Chysylltu {#design-tokens-and-customization}

Mae thymori wedi'i gysylltu yn defnyddio tokenau dylunio WordPress (drwy `theme.json`) ar gyfer:

- **Colliadau**: Palled cyntaf, palled ail, palled achos, palled neithiol
- **Tyngeddiant** (Typography): Ffylau font, gyfeiriadau, pwysau, llwybr llawr
- **Cyflenau**: Padding, margin, scale gap
- **Borddau**: Tokenau radius a gyflym
- **Tawr**: Leolau cyflym

Mae'r tokenau hyn yn cael eu cyddeallt mewn `theme.json`, gan ei fod yn einfail iawn i wneud newid eich system dylunio cyfan o'r ffeil un.

## Gyfyngau a Nodau {#limitations-and-notes}

Ymddau yn cael ei ddefnyddio:

- Mae thema'n cael ei gystadleu mewn `/wp-content/themes/` ac rhaid iddo gwblhau'r gynnwys WordPress.
- Mae cyflawniad (Activation) yn angen gynnwys permisiwnau pwysig ar eich safle WordPress.
- Mae cod PHP newydd yn thema'n bach; defnyddiwch pluginau ar gyfer ffurfyniadau cymhleth.
- Mae thema bloc yn gweithio'n iawn gyda WordPress 5.9 a yms yn ddiweddarach.

## Cyflawniad (Troubleshooting) {#troubleshooting}

**Mae thema nid yn dangos ar ôl y cystadleu**
- Gwylio i ddweud bod y cyfrif thema sydd yn cael ei gystadleu yn dod olys ac yn cael permisiwnau iawn.
- Gwylio i ddim ond `theme.json` yn JSON iawn.
- Cynllunio bod enw y thema nid yn cyflwyno â'r themaau sydd ar gael.

**Mae cyflawniad yn faili**
- Cywir eich bod yn cael permisiwnau administrator.
- Gwylio i ddweud bod y cyfrif thema yn cael ei rheoli gan WordPress.
- Ddychwilio llogau eror WordPress ar gyfer mwy o fanylion.

**Mae tokenau dylunio nid yn cael eu cyflawniad**
- Gwylio i ddweud bod y sintes `theme.json` yn siarad yn llawn.
- Trosglid unrhyw pluginau cache.
- Cynllunio bod yr uniad WordPress eich cefnogi'r tokenau sydd yn cael eich defnyddio.

## Ymddangosau Canlynol (Next Steps) {#next-steps}

Ar ôl cyflawniad eich thema, gallwch:
- Defnyddio'r **Design System Aesthetics skill** i gyfeiriaddu y tipografia, y ngwidiadau a'r gwahaniaethau ar gyfer y cefn.
- Customu stylau bloc unigol trwy'r redytwr bloc WordPress.
- Ychwanegu CSS newydd mewn ffeil `style.css` y thema.
- Creu modelau bloc newydd ar gyfer rheolau path (page types) penodol.
