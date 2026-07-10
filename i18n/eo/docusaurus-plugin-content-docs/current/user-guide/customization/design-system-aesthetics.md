---
title: Estetika de Design Sistemo Skilo
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Design System Estetika Hile {#design-system-aesthetics-skill}

La **Design System Estetika hile** estas gvidita metodo por plenumi vian sita's vizual identecon. Ĝi helpas vi fari konsistencajn decisionojn pri tipografia, koloroj, espaco kaj movi token'oj, kiuj definas vian design systemon.

## Kion estas Design System Estetika? {#what-is-design-system-aesthetics}

Design System Estetika estas struktura hile, kiu cakvas:

- **Tipografia**: Fontfamilioj, bazaj, gravaj kaj liniaj altaj
- **Koloro**: Primaj, sekundaj, akcento kaj neutralaj paletoj
- **Espaco**: Paddinga, margina kaj gap skaloj
- **Bordoj**: Radius kaj largreto token'oj
- **Ombroj**: Elevado kaj profindo token'oj
- **Movi**: Animoj kaj transitoj

Ĉi ti decisionoj estas kaptitaj en vian temo's `theme.json` fakto, kreante kohezivan vizual sistemon.

## Kion uzui Design System Estetikon? {#why-use-design-system-aesthetics}

### Konsistenco {#consistency}

Design system garantias:

- Ĉi tiu teksto uzas la saman tipografian skalon
- Koloroj estas uzata konsiste sur via sita's
- Espaco sekvas predekdban pateron
- Animoj sentas unueco

### Efikeco {#efficiency}

En elio de fari design decisionojn paĝe per paĝo, vi:

- Definis vian token'ojn unufo
- Aplikas ilin ĉie
- Modernigas globalan per ŝanĝi unan valoron

### Flexibilidade {#flexibility}

Vi povas:

- Rapite ajusti vian tutan design systemon
- Eksperari kun diversaj estetikoj
- Konservi markbrandkonsistenco dum evoluo

## Kion provo Design System Estetikon? {#triggering-the-design-system-aesthetics-skill}

### Manua Aktivado {#manual-activation}

Vi povas komenci la hile en kiam kiel vi volas:

```
"Help me refine my design system"
```

 aŭ

```
"Let's improve my site's aesthetics"
```

aŭ

```
"Guide me through design system decisions"
```

### Automatikaj Sugestioj {#automatic-suggestions}

Agentoj povas sugesti uzu la hile, kiam vi:

- Riveras design ŝanĝojn
- Riveras "modernan" aŭ "profesionalan" redizajn
- Volas plibonigi vizual konsistenco
- Estas preparita por elŝuti vian siton

## La Proceso Estético del Sistema de Diseño {#the-design-system-aesthetics-process}

### Paso 1: Tipografía {#step-1-typography}

El agente pregunta sobre tus elecciones de fuente:

```
¿Cuál es tu estilo tipográfico preferido?
- Serif (tradicional, elegante)
- Sans-serif (moderno, limpio)
- Monospace (técnico, enfocado en código)

Para la fuente de los encabezados:
- ¿Quieres una fuente de encabezado distinta o usar la misma que el texto del cuerpo?
- Preferencia: negrita, elegante, juguetona, mínima?

Para la fuente del cuerpo:
- La legibilidad es clave. ¿Prefieres?:
  - Texto más grande y con más espacio
  - Texto compacto y eficiente
  - Tamaño estándar
```

El agente luego define:

- **Fuente de encabezado**: Fuente principal para títulos y encabezados
- **Fuente del cuerpo**: Fuente para párrafos y texto del cuerpo
- **Fuente monoespaciada (Monospace font)**: Fuente para código y contenido técnico
- **Escala de tamaños (Size scale)**: Tamaños predefinidos (pequeño, base, grande, XL, etc.)
- **Escala de pesos (Weight scale)**: Pesos de fuente (regular, medio, negrita, etc.)
- **Altura de línea (Line height)**: Espaciado entre líneas para la legibilidad

### Paso 2: Paleta de Colores {#step-2-color-palette}

```
Definamos tu paleta de colores.

Color primario (tu color de marca):
- Actual: [muestra el color existente]
- Cambiar a: [selector de color o código hexadecimal]

Color secundario (color de apoyo):
- Actual: [muestra el color existente]
- Cambiar a: [selector de color o código hexadecimal]

Color de acento (destacados y CTAs):
- Actual: [muestra el color existente]
- Cambiar a: [selector de color o código hexadecimal]

Paleta neutra (grises para texto, bordes, fondos):
- Claro: [color]
- Medio: [color]
- Oscuro: [color]
```

El agente crea una paleta completa que incluye:

- Colores primarios, secundarios y de acento
- Grises neutros (claro, medio, oscuro)
- Colores semánticos (éxito, advertencia, error)
- Estados de paso (hover) y activos (active states)

### Paso 3: Espaciado {#step-3-spacing}

Kiel respiri la vol vi uzu?

Prefero skala de espacoj:
- Compacta (layout'oj stretma, efica)
- Normala (espaco balansa)
- Spacia (grandaj spaco)

Tio influas:
- Padding intern butonoj kaj kartoj
- Marginoj inter sekcioj
- Gap inter grid itemoj

La agente definas spacing tokens:

- Baza unito (tipike 4px aŭ 8px)
- Skala: xs, sm, md, lg, xl, 2xl
- Specifika valoroj por paddingo, marginoj, gapoj

### Paŝo 4: Borderaj kaj Šedoj {#step-4-borders-and-shadows}

```
Viza profundaj kaj definitaĵo:

Prefero de border radius:
- Stipta (sen rondado)
- Subtila (malgranda radiuso)
- Rondita (media radiuso)
- Velo rondita (granda radiuso)

Profundaĝo de šedo:
- Planaj (sen šedoj)
- Subtilaj (maltaj šedoj)
- Profundaĵaj (fortaj šedoj)
```

La agente kreas:

- Border radius tokens (por butonoj, kartoj, inputoj)
- Šedo tokens por niveloj de elevitaĝo
- Borderio largteco tokens

### Paŝo 5: Movado kaj Animado {#step-5-motion-and-animation}

```
Kiel tembeĝiĝos viaj dum interaktivaj?

Prefero de animado:
- Minimala (sen animoj)
- Subtila (maltaj transitoj)
- Ludiga (vido animoj)

Specifika animoj:
- Paĝo transitoj: fade, slide aŭ sen?
- Butono hover: scale, koloro ŝanĝo, aŭ amba?
- Loadaj statoj: spinner, skeleton, aŭ progresbaro?
```

La agente definas:

- Transito duroj (rapida, normala, malita)
- Easing funkcioj (ease-in, ease-out, ease-in-out)
- Animado keyframe'oj por malsamaj interakcioj

## Apliko de Estetiko de Design System {#applying-design-system-aesthetics}

### Automata Apliko {#automatic-application}

Post kiam vi finas la abilitecon, la agente:

1. Modernizas temon `theme.json` per ĉiuj tokens
2. Aplikas la design system al viaj aktiva temo
3. Regeneras blokaj stilojn por korespondi kun la nova sistema
4. Aktivigas la modernizitan temon

### Manua Apliko {#manual-application}

Vi ankaŭ povas modifi `theme.json` direkte:

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

## Ĝi Viesian Vian Sistemin {#viewing-your-design-system}

### Demando de la Agenta {#ask-the-agent}

```
"Montre mi la sisteme de diseno"
```

aŭ

```
"Kiel estas mia aktualaj diseno-tokenoj?"
```

La agente montros vian tipografion, kolorojn, espacadon kaj aliajn tokenojn.

### Vidi theme.json {#view-themejson}

Opun `/wp-content/themes/[theme-name]/theme.json` en teksta redaktoro por vidi la raw definicio de tokenoj.

## Modernig Vian Sistemin {#updating-your-design-system}

### Rapida Modernigoj {#quick-updates}

Demando de la agente pri specifaj ŝanĝoj:

```
"Fari la primaran koloran pli maltontan"
```

aŭ

```
"Plui fari la espacadon skalon per 20%"
```

aŭ

```
"Mangi la titolfonton al serifa"
```

### Plena Redizajno {#full-redesign}

Rianfari la abiliteco de Estetiko de Sistemo de Diseno:

```
"Redizajnu sian tutan sisteme de diseno"
```

Tio guidos vin per ĉiuj decisionoj pliaŭ, komencante kun viaj aktualaj valoroj.

### Partiaj Modernigoj {#partial-updates}

Modernizi specifajn aspektojn:

```
"Plie modernizi la kolorpaleton, sekvi ĉion aliajn"
```

## La Mejterpraktikoj de Sistemo de Diseno {#design-system-best-practices}

### Konsisteco {#consistency-1}

- Uzu la saman tokenojn ĉie.
- Ne kreu unu-tari koloro aŭ bazon.
- Referu tokenojn en sto ke vi ne kodigas valorojn direkte.

### Nomado {#naming}

Uzu clarajn, semantajn nomojn:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalabileco {#scalability}

Projekti desti skalari:

- Uzlogu (rem, em) uz pikselojn anca aldaŭite (pixel) uzuante.
- Skalojn (xs, sm, md, lg, xl) kreonte, enveco valoro uzante.
- La estonteco de la estonteco de nova elementoj plani.

### Dokumenti la sistemon de design {#documentation}

Dokumenti vian sistemon de design:

- Kialas vi elektis specifajn kolorojn
- Kiam uzuante ĉion tokenon
- Egzcepcioj kaj limigaj kazoj

## Komuna Design System Pateroj {#common-design-system-patterns}

### Moderna Minimalista {#modern-minimalist}

- Sans-serif tipografia (Inter, Helvetica)
- Limita kolorparto (2-3 koloroj)
- Grandaj intertiemoj (spacing)
- Subtaŭaj ombraj (shadows)
- Fluaj, rapide animoj

### Kalda kaj Amika {#warm-and-friendly}

- Miksaĵo de serif kaj sans-serif
- Kalda kolorparto (oranjoj, kaldegrējoj)
- Rundaj anglojoj (rounded corners)
- Maltaj ombraj
- Ludiga animoj

### Profesila Korporativa {#professional-corporate}

- Pulita sans-serif (Roboto, Open Sans)
- Neutrala kolorparto kun akcento koloroj
- Estruktura intertiemoj
- Minimalaj ombraj
- Subtaŭaj transitoj (transitions)

### Kreativa kaj Bolda {#creative-and-bold}

- Distingiva tipografia
- Bolda kolorparto
- Variata intertiemaĵo
- Fortaj ombraj
- Noteblaj animoj

## Problemoresolviĝo {#troubleshooting}

**Mia design sistemaj ŝanĝoj ne montras**
- Limigu la cache de via brauzero (clear your browser cache)
- Reconstrui vian siton, se vi uzas statikan generanton (static generator)
- Kontroli, ke theme.json estas valida JSON
- Verifi, ke la tema estas aktiva

**La koloroj ŝajnas malsamaj sur diversaj paĝoj**
- Kontroli por konfliktan CSS en pluginoj
- Verifi, ke ĉiuj paĝoj uzas la same temon
- Limigu ĉian cache pluginon

**Mi volas reveni al antaŭa design sistema**
- Riverti agencon: "Montri mi sian design sistemajn historion" (Show me my design system history)
- Manuele modifi theme.json al antaŭaj valoroj
- Rete diri la skilon per diversajn elecojn

## Proksma Paŝo {#next-steps}

Post definita vian design sistema:

1. **Kontroli vianon:** Vizite vianon, pri čem vidíte nov dizajn
2. **Pravilné nastavenie:** Urobte ďalšie prilipnenia s vašim skillom
3. **Vytvorenie šablonov:** Postavte vlastné blokové šablóny pomocou vašich design tokenov
4. **Dokumentácia:** Podělte si svoj dizajn systém s členmi tímu
