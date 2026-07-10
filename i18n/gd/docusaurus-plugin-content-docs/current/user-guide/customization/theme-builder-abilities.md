---
title: Abhailteachdaidhean Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Aibhleidhean Thiamh: Scaffolding agus Athbhreithneachadh Thiamhan Bloc {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 a chluadaic duine dòighfidh dìbeul an t-ealaiann a tha a' gineadh agus a athbhreithnu thiamhan bloc ùra gu sònraichte frumhàir.

## Aims {#overview}

Aibhleidhean **scaffold-block-theme** agus **activate-theme** a' bheachd don ealaianna a bheachd don ealaianna a dhèanamh ar:
- Gineadh thiamhan bloc leatach, a tha sònraichte airson an t-ealaiann agad
- Athbhreithneachadh thiamhan ar an sinne agad gu fìor gu mòr gu fadaich a' chlàradh
- Creachadh ealaianna seasmhach gu leithid a' chlàradh design

## Scaffolding Bloc Theme {#scaffold-block-theme}

Aibhleidhean **scaffold-block-theme** a gineadh thiamh bloc ùr WordPress le stràctar thiamh fìor, a tha a' tighinn:

- `theme.json` co-fhreagairtan design tokens
- Fàilte templat bloc airson leathean common
- Stailte agus fìor-fhaisgan bloc ùra
- Meathainneachadh metadata thiamh agus deichiallan a' tacais

### Conach air a gineadh {#how-to-invoke}

I ealaiannach agad le Superdav AI Agent, is féidir leat a roinn a' gineadh thiamhan:

```
"Gineadh thiamh bloc a' chiallach 'Modern Agency' le fòcas blu agus bwris,
fòcas sans-serif, agus leatadh proffesiocal."
```

Air thuairt an agent:
1. A gatholta ealaianna design agad gu leithid
2. A gineadh stràctar thiamh fìor
3. A gineadh a fhaisgan fìor sinne
4. A' chlàradh thiamh airson athbhreithneachadh

### Ealaiann a tha a' bheachd {#expected-output}

Nuair a thabhas aibhleidhean a' tighinn gu sònraichte, tha thu a' faic:

- Athbhreithneachadh gu robh an thiamh a gineadh
- An t-ealaiann thiamh agus an àite
- Beannachd a' chlàradh design a' chlàradh (colur, fòcas sans-serif, spàis)
- Stàt a tha a' bheachd airson athbhreithneachadh

Ealaiann a tha a' bheachd:
```
✓ Thiamh "Modern Agency" a gineadh gu sònraichte
  Àite: /wp-content/themes/modern-agency/
  Colura: Primary #0066CC, Secondary #FFFFFF
  Fòcas: Inter (sans-serif)
  Stàt: Athbhreithneachadh a' bheachd
```

## Athbhreithneachadh Thiamh {#activate-theme}

A bhràith **activate-theme** a tha a' chlàradh eich site gu thàinig an t-sgaidh (scaffolded) no tha a' chlàradh air.

### Conas a thabhairt air {#how-to-invoke-1}

An uair a tha thu air a chlàradh theme, is eadar thu le fhaighinn air agad:

```
"Thabhairt air an t-theme Modern Agency"
```

Mar a tha thu a' chlàradh theme a tha air agad:

```
"Atharrachadh gu an t-theme Twentytwentyfour"
```

### An t-uisge a tha a' chlàradh {#expected-output-1}

Nuair a thabhairt air a tha a' chlàradh:

- A chluich air an t-theme a tha a' chlàradh
- An t-theme a bha air agad ( airson coimhead)
- An URL site a màir a tha an t-theme a' chlàradh
- Cùinean a tha a' chlàradh a tha a' chlàradh

Eisimpleil uisge:
```
✓ Thabhairt air an t-theme gu sgaidh
  An t-theme a bha air agad: Modern Agency
  An t-theme a bha air agad: Twentytwentyfour
  A tha air a' chlàradh: https://yoursite.com
  Note: Comharrach air an seòl a tha a' chlàradh airson a chluich an leughadh
```

## A' chlàradh: Chlàradh agus Thabhairt air {#workflow-scaffold-and-activate}

Tha fhaighinn a thoil a' chlàradh a' chlàradh beag a' chlàradh:

1. **Coimhead a' chlàradh thabhairt**: "Creu t-theme block airson mo landing page SaaS"
2. **Agent a tha a' chlàradh an t-theme**: A' chlàradh faighinn fáil agus tòganasan d'fhaighinn
3. **Coimhead agus atharrachadh**: Coimhead am fhaighinn air a' chlàradh mar tha thu a' chlàradh a tha a' chlàradh
4. **Thabhairt air**: "Thabhairt air an t-theme an-diugh"
5. **Coimhead**: Bhealaidh eich site airson a chluich an t-design a bha a' chlàradh

## Tòganasan Design agus Atharrachadh {#design-tokens-and-customization}

Tha themei a tha a' chlàradh a' chlàradh design WordPress (a' chlàradh `theme.json`) airson:

- **Colùir**: Colùir bunal, colùir seaca, colùir a' chlàradh, palatadh neòr
- **Tòganasan**: Fàiltean fònt, tòganasan, leathra, leathra lìnne
- **Spacings**: Padding, margin, scale gap
- **Borders**: Tòganasan radius agus leathra
- **Shadows**: Leathra a' chlàradh

Tha na tòganasan seo a' chlàradh air `theme.json`, a tha e a' chlàradh a' chlàradh eich system design gu latha air an t-file.

## Beannachd agus Coimhead {#limitations-and-notes}

- Tha thèamhan (themes) a' chàrrtaidh (scaffolded) i `/wp-content/themes/` agus feumaidh sinn a bhith a' ghràdhach (follow) na chunnich WordPress.
- Bhaidh athbhreithachadh (activation) a' teannachd (permissions) fìor ar an sinne WordPress.
- Tha cod PHP ùr (custom PHP code) i theamhan beag; usaig le plugin airson fhaighinn eòlas (complex functionality).
- Bhaidh theamhan bloc (block themes) a' sgail (work best) le WordPress 5.9 agus nàdhair.

## Athbhreithachadh (Troubleshooting) {#troubleshooting}

**Nì theamh a' tòiseachadh an dàimh (Theme doesn't appear after scaffolding)**
- Comharrach gu bheil an curtach (directory) theamh aig a tha le chunnich fìor.
- Comharrach gu bheil `theme.json` JSON fìor.
- Comharrach gu bheil an t-aon-theamh (theme name) a' ghràdhach le theamhan a' tòiseachadh.

**Nì athbhreithachadh a' teannachd (Activation fails)**
- Comharrach gu bheil thu a' chunnich adhirbhreith (administrator permissions).
- Comharrach gu bheil an curtach theamh a' fhaighinn de na WordPress.
- Comharrach gu leughadh na logair (error logs) de h-uileachd.

**Nì teannacha d'aon-theamh a' tòiseachadh (Design tokens not applying)**
- Comharrach gu bheil an sin-tacha (syntax) `theme.json` fìor.
- Comharrach gu leughadh na pluginhean cache (caching plugins).
- Comharrach gu bheil an versian WordPress a' tòiseachadh air na teannacha a tha thu a' sgail.

## Ath-aon-theamhan (Next Steps) {#next-steps}

An dàimh a' chàrrtaidh a tha thu theamh a' athbhreithich, leide:
- Bhaidh tu ag atharrachadh na **Design System Aesthetics skill** airson teannacha, colomha, agus spàis.
- Atharrach an tairgse (styles) bloc fìor gu leithid a' chùrsain WordPress block editor.
- Addhail CSS ùr i file `style.css` na theamh.
- Creach teannacha bloc ùra airson curtach pàipean (page types) a tha thu a' sgail.
