---
title: Disain-sistema estetikak gogorpen artea
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Dizain Systemaren Estetika Jain

**Design Systemaren Estetika** da metodo garrantzatu bat da irudiari sitiatun estetikak hobetzeko. Design systemaren definizioa dela ematen tipografia, kolorrak, espazioak eta motion tokens (erreguntzak) bidez erabaki egitean laguntzen du.

## Zer da Design Systemaren Estetika? {#what-is-design-system-aesthetics}

Design Systemaren Estetika da espezifikatu bat da eta hiru-kurtu egiten du:

- **Tipografia**: Font familyak, diseinua (size), pesoak eta lantiak
- **Kolorrak**: Koloreak nagusiak, ikuspideak, accentak eta neutraloak
- **Espazioak**: Paddingak, marginak eta gaparen eskala
- **Bordesak**: Radius eta lebertzak (width) tokens
- **Sotak (Shadows)**: Elevazioa eta lakuntza (depth) tokens
- **Motion**: Animazioak eta transicionesak

Haukin erabakiak irudiari sitiatun `theme.json` filean capture dira, estetikoa batena ematen sistema visuelua.

## Zer da Design Systemaren Estetika erebutzea? {#why-use-design-system-aesthetics}

### Kontsustazioa (Consistency) {#consistency}

Design systemaren kontsustazioa seguru egiten du:

- Tekstua guztia irudiari sitiatun scale berria erabiltzen du
- Kolorrak sitiatun sitiatun kontsustatu erabiltzen du
- Espazioak moldura bat erakusten duen moduan jarraitzen du
- Animazioek batena sentitzen dira

### Efizienz (Efficiency) {#efficiency}

Pagina zehar irudiari sitiatun erabaki ez egitean, daude:

- Tokens bat edo bi aldiz definatzen duzu
- Horrak guzti aplikatzen duzu
- Batziki aldea aldatu behar dutenean, bat erreguntzak aldatuz globalean update egiten duzu

### Flexibilita (Flexibility) {#flexibility}

Eguna ez daude:

- Design systemaren guztia azkar aukeratu
- Estetikak onditu eta erérimentatu
- Brandaren kontsustazioa jarraitu aldatzen ari den bitartean

## Design Systemaren Estetika erebutzea (Triggering) {#triggering-the-design-system-aesthetics-skill}

### Aktibazio Manuala (Manual Activation) {#manual-activation}

Ezkutik gure skill-a hasten ezazu:

```
"Help me refine my design system"
```

noki edo

```
"Let's improve my site's aesthetics"
```

noki edo

```
"Guide me through design system decisions"
```

### Sugestionak Automatikak (Automatic Suggestions) {#automatic-suggestions}

Agenteak skill-a erebutzen dituz dira horrek egin dutenean:

- Design aldatu behar duen eskatzen duzu
- Redisein bat "moderno" edo "profesional" eskatu duzu
- Irudiari sitiatun kontsustazioa hobetzea nahi duzu
- Sitea litzatean irakurri eta lan egiten ari zenean

## Dizainaren Estetika Prozesua {#the-design-system-aesthetics-process}

### Irrendi 1: Tipografia {#step-1-typography}

Agenteak irudi duzu fontak ezagutzen ditu:

```
Zer moduan preferatu tipografiko estilo da?
- Serif (tradizionala, elegante)
- Sans-serif (moderna, lupea)
- Monospace (teknikoa, kodean fokua dutela)

Itzultzeko font-ek piztu duzu:
- Titulari eta irrendiak beste bat fontak izango dira, edo testuaren batenak jartzen duzu?
- Preferentzia: bolda, elegantea, jokoa duen, minimalista?

Testuaren font-ek piztu duzu:
- Lehenbaitua da. Zer preferatu duzu:
  - Testua handiago eta lupea dutela
  - Testua txiki eta efiziente
  - Standarda lehenbaitua
```

Agenteak ondoren definatzen ditu:

- **Font irrendi**: Titulari eta irrendiak beste bat font izango da
- **Font testuaren**: Paragrafio eta testuaren fonta izango da
- **Font monospazioa**: Kodea eta kontentu teknikoa fonta izango da
- **Mezuaren eskala (Size scale)**: Predefinidu eskalaak (txikiko, base, handi, XL, etc.)
- **Ponderazioaren eskala (Weight scale)**: Fonten ponderazioak (regulara, medium, bold, etc.)
- **Linea handia (Line height)**: Lehenbaitua lehenbaituen arteko espazioa lehenbaitua dutela

### Irrendi 2: Kolorearen Paleta {#step-2-color-palette}

```
Kolorearen paleta definizitzitu dezagun.

Kolorea irrendia (brand color-ek):
- Aktual: [kolorea jakinarazten du]
- Gehiagoa da: [kolorearen aukera edo hex code]

Kolorea gehiagoa (supporting color):
- Aktual: [kolorea jakinarazten du]
- Gehiagoa da: [kolorearen aukera edo hex code]

Kolorea akentua (highlightak eta CTA-ek):
- Aktual: [kolorea jakinarazten du]
- Gehiagoa da: [kolorearen aukera edo hex code]

Paleta neutra (grays testu, borderrak, fondoak):
- Legeia: [kolorea]
- Mendia: [kolorea]
- Madura: [kolorea]
```

Agenteak paleta guztia ematen du, horrek barne daude:

- Kolore irrendia, gehiagoa eta akentua koloreak
- Paleta neutra grays (legeia, mendia, madura)
- Kolore semantikoak (success, warning, error)
- Hover eta active state-ek

Zer diste irriren aur zenbait dago?

Lehen edo maila (spacing) errespetu:
- Compacta (lekinak, efiziente layout-ek)
- Normala (balansa lehen edo maila)
- Spaciousa (handia lehen edo maila ezberdina)

Hau hauek eskaintzen du:
- Boton eta card-etan dagoen padding
- Secciones arteko marginak
- Grid elementuen arteko gap

Agent-ek irriren token-ek ematen dira:

- Base unit (normalment 4px edo 8px)
- Maila: xs, sm, md, lg, xl, 2xl
- Padding, margin eta gap-eko errespetu errespetuak

### Irrenditua eta Sombraak (Borders and Shadows) {#step-3-spacing}

```
Vizual lakuntza eta definizioa:

Border radius errespetu:
- Sharp (ez irrenditua)
- Subtle (handia lehen)
- Rounded (maila lehen)
- Very rounded (handia lehen)

Shadow depth (Sombraaren lakuntza):
- Flat (sombra ez dago)
- Subtle (sombra handia lehen)
- Pronounced (sombra handia)
```

Agent-ek ematen da:

- Border radius tokenak (botonak, card-ek, input-ek)
- Elevazio lekuetara somorta tokenak
- Border width tokenak

### Irrenditua eta Animazioa (Motion and Animation) {#step-4-borders-and-shadows}

```
Interaktibo den bitartean zerbait izatea jakin nahi duzu?

Animazio errespetu:
- Minimala (animazio ez dago)
- Subtle (transicion handia lehen)
- Playful (animazio handia lehen)

Animazio-ak konponbideko:
- Irrenditua transicionak: fade, slide edo ez?
- Boton hozera (hover): scale, kolor errespetu edo gehiago?
- Loading states (loadatzen den testiak): spinner, skeleton edo progress bar?
```

Agent-ek ematen da:

- Transicion edukiak (larri, normala, lento)
- Easing funkiotak (ease-in, ease-out, ease-in-out)
- Komponbideko interakzioetan animazio keyframes

## Disain Design Systemen Errespetu Mendatzea {#step-5-motion-and-animation}

### Automatikoa {#applying-design-system-aesthetics}

Skill-ek amaitu ondoren, agent-ek:

1. Theme-ren `theme.json`-a token guztiek update egiten du
2. Design systema aktibo theme-an aplikatzen du
3. Block styleak berri sistema-re onartzeko regeneratzen du
4. Updateatutako theme-a aktibitzen du

### Manuala {#automatic-application}

`theme.json`-a direktu zuzenean editatu ereiteko da:

## Design Systemaren Ekitzea {#manual-application}

### Agentea gaut {#viewing-your-design-system}

```
"Meni design systema erakitu"
```

noki

```
"Nondura design tokens hauek dira?"
```

Agentea irudiatzen du diseinua, coloreak, espazioak eta beste tokenak.

### theme.json ikustea {#ask-the-agent}

Raw token-ek identifikatzeko `/wp-content/themes/[theme-name]/theme.json` funtziari test editor batean aukeratu duzu.

## Design Systemaren Aurreratzea {#view-themejson}

### Aurreratzea rapideak {#updating-your-design-system}

Eskatu agenteari hasierako erregistroak:

```
"Primary colora luzeago egin"
```

noki

```
"Espazioaren eskala 20% gehitu"
```

noki

```
"Tituluaren fonta serif bat bihurtu"
```

### Redisein guztiz {#quick-updates}

Design System Aesthetics skill-a irudia:

```
"Meni design systema guztia redisein dezaten"
```

Hauzu hau da, aukera hauek gaur duzun erregistroakatik hasi eta erabaki guztietan.

### Aurreratzea parte batzuk {#full-redesign}

Eskatu erregistroaren bestelako parte hauek:

```
"Paleta colorea update egin, beste guztia ez dut"
```

## Design Systemaren Best Praktikak {#partial-updates}

### Ondo ikusi (Consistency) {#design-system-best-practices}

- Beste jardueretan beharko dituen tokenak jartzi duzu.
- Ekin ez du bat-bat kolor edo eskala.
- Erreguntzak erreguntzak erabiltu, erreguntzak hartzen ez du.

### Nomenklatura (Naming) {#consistency-1}

Nomenklatutako irakurri eta hasierako emantza duten:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Eskala (Scalability) {#naming}

### Dokumentazioa {#scalability}

Definizioztatu sistema diseinarenzu:

- Zerbiak zehaztu behar dira (Nola irudiak/testuak erabiltzen dituz?):
- Zerbiak zehaztu behar dira (Zer moduan erabiliz dut?).
- Ezaugarriak eta ezaugarri edukiak.

## Modu Design System Nagusiak {#documentation}

### Modern Minimalista {#common-design-system-patterns}

- Sans-serif tipografia (Inter, Helvetica)
- Kolorearen limitatua paleta (2-3 kolore)
- Zaharra espazioa
- Ezaugarriak ombreak
- Lanbideko animazioak

### Warm eta Lagunatu {#modern-minimalist}

- Serif eta sans-serifen mezua
- Kolorearen lagunatu paleta (oranjeak, grays lagunak)
- Kordeak arondatuta
- Ombreak malguneak
- Lanbideko animazioak joko

### Profesional Korporatibo {#warm-and-friendly}

- Sans-serifa handi eta lagunatu (Roboto, Open Sans)
- Neutral paleta eta ezaugarri kolore bat
- Estruktura espazioa
- Ombreak minimaliak
- Transicionak malguneak

### Kreatiba eta Boldua {#professional-corporate}

- Tipografia zehatza
- Kolorearen boldua paleta
- Espazioa handi eta lagunatu
- Ombreak indartunak
- Animazioak erakusten dituz

## Problema Erregitzenak (Troubleshooting) {#creative-and-bold}

**Design systemaren hasierak ez du ondorioa**
- Browser cachea purtatu.
- Estatika generatorki erabiltzen ari zete, sitea berru egindua.
- `theme.json` da JSON bat jakin duen jakinarazki.
- Tema aktibo da eta ez da.

**Koloreak eskuari errei ondo ez du**
- Pluginetan kolorearen inbidioak (conflicting CSS) jartzen dituz?
- Itxura guztiek tema berria erabiltzen duen jakin.
- Caching plugin bat purtatu.

**Ezaugarri design systemari itxarri nahi du**
- Agentean eskatzen du: "Mezu dut design systemaren historia" (Show me my design system history)
- `theme.json` da hasierako jarduerak edateko manual editatu.
- Desberdinetako aukerak bidez skilla berri errun.

## Irudi Mendiak (Next Steps) {#troubleshooting}

Design systemari definitu ondoren:

1. **Saitua iriberatu (Review your site)**: Saila situa da, berri diseinuak ikusteko.
2. **Aurreratu (Refine further)**: Skill-ek erabiliz aukera egin behar duzu.
3. **Template-ak sortu (Create templates)**: Diseinu token-ek erabiliz blokue zuzen template-ak sortuți.
4. **Dokumentatu (Document)**: Diseinu sistema hau taldeko besteari ematu.
