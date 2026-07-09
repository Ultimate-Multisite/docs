---
title: Chuidiúirí an Tíme
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Aibhileacht na Teamaí: Scaffold agus Activate Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Taispeántacht Superdav AI Agent v1.12.0 leat curte ag duine a bheith iad do chuid fáilteach agus a chur in áit teamaí block a bhaint as an chat interface.

## Oibríochta {#overview}

Cén fáth go bhfuil na fáilteacha **scaffold-block-theme** agus **activate-theme** ag fáilteacht na agenta:
- A chur i bhfeidm teamaí block leat, ar fáil do chuid production, ar bhealach a bhfáthfaidh tú an t-chat.
- A chomhachtú teamaí ar an sinte agat gan aon rud féin.
- A chur i bhfeidm teangail bunaithe ar cúiseanna d'fhéanteacha design.

## Scaffold Block Theme {#scaffold-block-theme}

Bíonn fáilteacht **scaffold-block-theme** ag fáilteacht teama block nua ar WordPress le struchtúr teama leatúil, gan cur isteach:

- `theme.json` le tokenanna design
- File template block chun léitheann common
- Stailanna agus variation block a mhaith
- Metadata teama agus deacloilleachtaí fáilteacha

### Conas a Chruinne (How to Invoke) {#how-to-invoke}

Agus iad ag iarraidh teama a chur in áit, leat féidir leat a chur ar fáil:

```
"Creoliú teama block a los ar 'Modern Agency' le chuid colur blu agus gorm,
teangail sans-serif, agus léitheann proffesiúnach."
```

Beidh an agent ag:
1. Cothromadh do chuid fhéanteacha design tríd cuid deatúla
2. A chur in bhfeidm struchtúr teama leatúil go léir
3. A chur i bhfeidm cáilíocht file teamaí a mhaith
4. A chur an teama ar fáil

### Oibríochta a Bhaint As (Expected Output) {#expected-output}

Nuair a thácaire ag gníomhú go díreach, beidh tú ag fheiceáil:

- Confirmation go bhfuil an teama scaffolded
- An teama agus an áit atá anseo
- Beochaí ar na tokenanna design a chur in bhfeidm (colur, teangail, spéad)
- Stáraithe ar fáil chun actuate a bheith

Eagraíochta oibríochta:
```
✓ Teama "Modern Agency" scaffolded go díreach
  Áit: /wp-content/themes/modern-agency/
  Colur: Primary #0066CC, Secondary #FFFFFF
  Teangail: Inter (sans-serif)
  Stáraithe: Ready to activate
```

## Activate Theme {#activate-theme}

Anáimse an **activate-theme** ar chuiditeas a thais an t-amach an fáil do site go dtí theme nua a bhaint amach nó atá ag obair.

### Conas a Bhfhéidir Athbhriúchadh Éiteach {#how-to-invoke-1}

Tar éis féachaint (scaffolding) theme, leat ormhaint athbhriúchadh é seo ar an gcur.

```
"Athbhriúchadh an theme Modern Agency"
```

Nó athbhriúchadh aon theme atá ag obair:

```
"Athbhriúchadh go Twentytwentyfour"
```

### An-bhfhéidir Athbhriúchadh {#expected-output-1}

Nuair a bhíonn athbhriúchadh ag teacht ar bhóthar:

- Confirmation de theme atá ag obair
- Leamhan an theme a bhí ag obair (le haghaidh cur chuireann)
- URL an site a bhfuil an theme ag obair anois
- Cionnaitheachtaí spraoi-specific a bheith agat

Eisimpleir athbhriúchadh:
```
✓ Theme atá ag obair go díreach
  Theme atá ag obair: Modern Agency
  Theme a bhí ag obair: Twentytwentyfour
  Atá ag obair ar: https://yoursite.com
  Note: Déan ar an homepage a bheith agat chun an léamh a chosaint
```

## Workflow: Scafffold agus Athbhriúchadh {#workflow-scaffold-and-activate}

Tá workflow tídearmach ag cur beartas ar a dhá thais:

1. **Ráisteadh gnáthacht theme**: "Creoliad theme block do mo landing page SaaS"
2. **Scaffold an agent an theme**: Bhfhéidir léine agus token design
3. **Anailís agus athrú**: Cuir ar chaint athrú design má bhí é ag obair
4. **Athbhriúchadh**: "Athbhriúchadh an theme anois"
5. **Cosaint**: Bhfhéidir site a bheith agat chun an léamh nua a chosaint

## Design Tokens agus Athrú {#design-tokens-and-customization}

Bíonn themes a bhaint amach ag obair le design tokens WordPress (trá `theme.json`) chun:

- **Colranna**: Palette príomha, deacairt, accent, neamhchinn
- **Léamhphobail**: Font families, cothrom, gcultaí, line heights
- **Spéisiú**: Padding, margin, gap scales
- **Bordainne**: Tokens radius agus width
- **Sháileanna**: Levels deachda

Tá na tokens seo ag cur chuireann i `theme.json`, rud a dhéanann é go fácil a athrú do chuid design system go léir ó chuid file amháin.

## Limitiúin agus Cur Chuireann {#limitations-and-notes}

- Themes té aistraidh (scaffolded) i `/wp-content/themes/` agus phải leat ar chuid na curteacha WordPress.
- Is féidir an athchúais (activation) a bheith ag iarraidh eangolaí (permissions) atá ag an site WordPress agat.
- Is éad an t-amach PHP custom i themes go mbeidh sé beag; usaigh pluginí chun fhaisnéis mhór a dhéanamh.
- Maith go leor na block themes le WordPress 5.9 agus níos fear grá.

## Treoiche (Troubleshooting) {#troubleshooting}

**Ndiú níl ag tháir tar éis an athchúais**
- Déan cinnte go bhfuil an curtach (directory) tem beag agus go bhfuil eangolaí ceart ar éad.
- Déan cinnte go bhfuil `theme.json` JSON ceart.
- Déan cinnte go níl a bheith an t-amach tem ag iarraidh leat ag curteacha ábhartha (existing themes).

**Baileann athchúais (Activation fails)**
- Déan cinnte go bhfuil eangolaí administrator agat.
- Déan cinnte go bhfuil an curtach tem beag ar fáil do WordPress.
- Rinn an logaí éiríse WordPress chun cur fhaisnéis níos fear.

**Níl na design tokens ag teacht**
- Déan cinnte go bhfuil cúramsa (syntax) `theme.json` ceart.
- Glac an gcáimeanna caching (caching plugins) a bheith agat.
- Déan cinnte go bhfuil curteacha WordPress atá ag teacht ag curteacha a bhuseartha a bhfuil tú ag úsáid.

## An t-amachas (Next Steps) {#next-steps}

Tar éis an athchúais tem beag agat, leat orm:
- Uileadh **Design System Aesthetics skill** chun typography, colur agus spás a chruinneáil.
- Athchruinigh stailí block soláthach trí bhfoghlaigh (block editor) WordPress.
- Add an CSS custom i an curtach `style.css` tem beag.
- Déan curteacha block customta do chuid páipeanna (page types) a bhfuil tú ag iarraidh.
