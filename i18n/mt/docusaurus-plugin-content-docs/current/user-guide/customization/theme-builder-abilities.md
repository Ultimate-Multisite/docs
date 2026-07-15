---
title: Abilità tal-Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Abilità tal-Theme Builder: Scaffold u Block Themes

Superdav AI Agent v1.12.0 jiddu żewġ abilità prominenti li jagħlek b'possibilità ta genera u issaħħa custom block themes direttament mill-interface tal-chat.

## Panoramika {#overview}

L-abilità **scaffold-block-theme** u **activate-theme** ittaqgħu l-agent biex:
- Jagħmlu block themes komplet, jidħol fil-produzzjoni bbażat fuq is-specifikazzjonijiet tiegħek
- Jissaħħaw i themes fuq sitt tiegħek awtomatik mill-interventu manuali
- Jigħmlu identità vizjwali koheżiva b'deċiedimenti ta dizajn guidati

## Scaffold Block Theme {#scaffold-block-theme}

L-abilità **scaffold-block-theme** tagħmel un block theme tal-WordPress ġdid mal-struttura tal-theme komplet, inkluż:

- Konfigurazzjoni `theme.json` b design tokens
- File template ta block għall-layout comuni
- Stili u varianti ta block kustomi
- Metadata tal-theme u deklarazzjonijiet ta support

### Come Tinvokà (Invoke) {#how-to-invoke}

F'chat tiegħek mal-Superdav AI Agent, puoi tawnixa biex tgħmli l-generazzjoni tal-theme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

L-agent se jfigħel:
1. Jikkolleta is-preferenzi tiegħek ta dizajn permezz tal-konversazzjoni
2. Jagħmlu l-struttura tal-theme komplet
3. Jigħmlu kull il-file tagħmel l-theme
4. Jipprepara l-theme biex jissaħħaw

### Output Attesa (Expected Output) {#expected-output}

Meta l-abilità tiffirmala b'mod nippuġġ, tieqgħu:

- Konferma li il-theme jiddu scaffoldat
- Il ism u lokazzjoni tal-theme
- Sintesi tal-design tokens li tivvalidi (colori, tipografia, spaziatura)
- Status biex jissaħħaw

Eżempju output:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme {#activate-theme}

Il-abilità **activate-theme** tipparella sitja għall-tema li għalna n-scaffolda jew li hija biex tikkunsidixxi.

### Come Tikkunsidixxi (Invoke) {#how-to-invoke-1}

Wara ma sc scaffoldat tema, puoi attivalih immedjat:

```
"Attiva il tema Modern Agency"
```

Mall-qu attivali temi esistenti:

```
"Switch għall-tema Twentytwentyfour"
```

### Output Attesa (Expected Output) {#expected-output-1}

Meta l-attivazzjoni tikkunsidixxi b'mod nippuġġell:

- Konferma tal-tema attiva
- Nomi tal-tema prevju (għal referenza)
- URL tal-sit li jkun live meta l-tema
- Qbeletti ta setup speċifi għall-tema

Eżempju output:
```
✓ Tema attivata b'suċċess
  Tema attiva: Modern Agency
  Tema prevju: Twentytwentyfour
  Live f: https://yoursite.com
  Nota: Kontrolla l-homepage tiegħek biex tikkunsidixxi l-layout
```

## Workflow: Scaffold u Attivazzjoni (Scaffold and Activate) {#workflow-scaffold-and-activate}

Il-workflow tipiku jikkombina il-bidla tagħna:

1. **Richiedi genitattiv tal-tema**: "Kien tema block għall-landing page SaaS tiegħi"
2. **L-Agent is scaffolda**: Japplika l-filek u design tokens
3. **Riviedi u rifina**: Diskussjoni ta biddolijiet ta' design jekk hu meħtieġ
4. **Attiva**: "Attiva l-tema erba"
5. **Verifika**: Visita sitk biex tikkunsidixxi li il-design ġdid huwa live

## Design Tokens u Personalizzazzjoni (Design Tokens and Customization) {#design-tokens-and-customization}

Il-temi sk scaffoldati jipprogramu bi design tokens ta WordPress (attra `theme.json`) għal:

- **Colur**: Palette primarja, sekondarja, accent, neutral
- **Tipografia**: Font families, dimensioni, weights, line heights
- **Spazji**: Padding, margin, gap scales
- **Borderi**: Tokens ta radius u width
- **Ombra (Shadows)**: Livelli ta' elevazzjoni

Il-tokens hajnċentralizzati f `theme.json`, li jgħandu biex tikkunsidixxi l-sistema tal-design tiegħek kollha min ifile waħdhom.

## Limitazzjonijiet u Nota (Limitations and Notes) {#limitations-and-notes}

- I temi (themes) jitbeddu f `/wp-content/themes/` u jgħandu l-convention ta WordPress
- L-attivazzjoni (Activation) tista' tfitteġa b permessappropriu fuq sitet WordPress tiegħek
- Il-cod PHP kustomi fil-themes huwa minimi; għandu tista' tista' pluginijiet għall-funzjonalità kumplessa

## Problemi u Soluzzjonijiet (Troubleshooting) {#troubleshooting}

**Il-tema ma tispariqaxgħaxd l-scaffolding**
- Verifika li direttorju tal-tema ekziste u għandu permessappropriu
- Kontrolla li `theme.json` huwa JSON valid
- Assicurajt li l-nome tal-tema ma jgħidu konfliktu mal-themes esistenti

**L-attivazzjoni tfail**
- Konferma li għandek permessi ta amministratur (administrator)
- Kontrolla li direttorju tal-tema huwa legib minn WordPress
- Rivedi l-WordPress error logs biex tiġi informat dwar i dettagli

**Il-design tokens ma japplikawx**
- Verifika li sintassi ta `theme.json` korretta
- Qliera (Clear) jiddeċċa (caching plugins)
- Kontrolla li l-versjoni tal-WordPress tiegħek tappoġġja il-tokens li qed tiffaċċja

## Prossi Ewtalji (Next Steps) {#next-steps}

Wara li attivali l-tema tiegħek, tista':
- Tuffaq b'skilla ta **Design System Aesthetics** biex ti rifina tipografija, colori u spaziatura (spacing)
- Tcustomizza stilijiet tal-block individuali permezz tal WordPress block editor
- Aggiungi CSS kustomi f'file `style.css` tal-tema
- Icrea template ta block kustomi għal tipi ta pjanass speċifi
