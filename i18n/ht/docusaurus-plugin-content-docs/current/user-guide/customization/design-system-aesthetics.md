---
title: Sistèm Estetik Konpènsi
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Savèt Estetik Sistèm Design {#design-system-aesthetics-skill}

**Savèt Estetik Sistèm Design** se yon fason ki gide ou pou amelyore idantite vizyèl sit ou. Li ede w pran desizyon konsistan sou tipografi, koulè, espas (spacing), ak token mouvman (motion tokens) ki defini sistèm design ou a.

## Kisa Savèt Estetik Sistèm Design ye? {#what-is-design-system-aesthetics}

Savèt Estetik Sistèm Design se yon sèl fòs ki gen estrikti k ap kouvri:

- **Tipografi**: Famila font, gwosè, pwa (weights), ak kantite liy yo
- **Koulè**: Palèt primè, sekondè, aksan, ak nòmal
- **Espas (Spacing)**: Padding, margin, ak skal laj gap yo
- **Bordè (Borders)**: Token rayon (radius) ak laj yo
- **Ombre (Shadows)**: Token eleve (elevation) ak pwofondè (depth)
- **Mouvman (Motion)**: Animasyon ak transisyon

Desizyon sa yo ap enkòpile nan fichye `theme.json` tèm ou a, kreyasyon yon sistèm vizyèl ki kohezif.

## Poukisa itilize Savèt Estetik Sistèm Design? {#why-use-design-system-aesthetics}

### Konsistans (Consistency) {#consistency}

Sistèm design la asire:

- Tout tèks itilize menm skal tipografi
- Koulè yo itilize konsonant sou tout sit ou a
- Espas yo swiv yon patan pèdi (predictable pattern)
- Animasyon yo santi yo unifye

### Efisyans (Efficiency) {#efficiency}

Olye pou w fè desizyon design pou chak paj, ou:

- Defini token la fwa
- Aplike yo kotempo
- Mete yon chanjman global lè w chanje yon sèl valè

### Fleksibilite (Flexibility) {#flexibility}

Ou ka:

- Ajuste tout sistèm design ou rapidman
- Eksperimante ak diferan estetik
- Kenbe konsistans marke a pandan ou ap evolye

## Kijan pou kòmanse Savèt Estetik Sistèm Design? {#triggering-the-design-system-aesthetics-skill}

### Aktive Manmanèl (Manual Activation) {#manual-activation}

Ou ka kòmanse savèt la nenpòt lè:

```
"Help me refine my design system"
```

oswa

```
"Let's improve my site's aesthetics"
```

oswa

```
"Guide me through design system decisions"
```

### Sijesyon Otomatik (Automatic Suggestions) {#automatic-suggestions}

Agent yo ka sijere pou w itilize savèt la lè ou:

- Mande chanjman design
- Demande yon redizain "modèn" oswa "profesyonèl"
- Vle amelyore konsistans vizyèl la
- Prepare pou lanse sit ou a

## Pwosesis Estetik Sistèm nan {#the-design-system-aesthetics-process}

### Etap 1: Tipografi {#step-1-typography}

Agent la mande ou sou chwa font ou yo:

```
Ki estil tipografi ou prefere?
- Serif (tradisyonèl, elegant)
- Sans-serif (modèn, pwòp)
- Monospace (teknik, konsantre sou kòd)

Pou font tit ou:
- Ou vle yon font tit ki diferan, oswa itilize menm tankou tèks kò a?
- Preferans: bold, elegant, jwesi, minimal?

Pou font kò ou:
- Li fasil pou li se kle. Èske ou prefere:
  - Tèks pi gwo, plis espas
  - Tèks ki pi chita, efikas
  - Gwosè estanda
```

Lè sa a, agent la defini:

- **Font tit**: Font prensipal pou tit ak tit yo
- **Font kò**: Font pou paragraf ak tèks kò a
- **Font Monospace**: Font pou kòd ak kontni teknik
- **Eskalè gwosè (Size scale)**: Gwosè predefined (ti, baz, gwo, XL, elatriye)
- **Eskalè pwa (Weight scale)**: Pwa font (regular, medium, bold, elatriye)
- **Lajè liy (Line height)**: Espas ant liy yo pou li fasil pou li

### Etap 2: Palèt koulè {#step-2-color-palette}

```
Ann defini palèt koulè ou.

Koulè prensipal (koulè brand ou):
- Kouran: [montre koulè ki egziste]
- Chanje an: [chwazi koulè oswa kòd hex]

Koulè sekondè (koulè sipòtè):
- Kouran: [montre koulè ki egziste]
- Chanje an: [chwazi koulè oswa kòd hex]

Koulè aksan (highlighter ak CTA yo):
- Kouran: [montre koulè ki egziste]
- Chanje an: [chwazi koulè oswa kòd hex]

Palèt nòtral (grèy pou tèks, bò, background):
- Limyè: [koulè]
- Mwayèn: [koulè]
- Nwa: [koulè]
```

Agent la kreye palèt konplè ki gen ladan:

- Koulè prensipal, sekondè, ak aksan
- Grèy nòtral (limyè, mwayèn, nwa)
- Koulè semantik (siksè, avètisman, erè)
- Etats Hover ak Active

Ki jan ou vle espas pou ou gen?

Prèfè ki kalite espas (Spacing scale preference):
- Compact (layout ki rèd, efikas)
- Normal (espaces ki byen ekilibre)
- Spacious (anplis espas)

Sa ap afekte:
- Padding anndan bouton ak cards yo
- Margin ant seksyon yo
- Gap ant eleman yo nan grid la

L'agent la defini token espas yo:

- Unite baz (tipikman 4px oswa 8px)
- Scale: xs, sm, md, lg, xl, 2xl
- Valè espesifik pou padding, margin, gap

### Etap 4: Border ak Shadow (Ombre) {#step-3-spacing}

```
Pwofondè vizyèl ak definisyon:

Prèfè rayon border (Border radius preference):
- Sharp (pa gen okenn rond)
- Subtle (rayon piti)
- Rounded (rayon mwayèn)
- Very rounded (rayon gwo)

Pwofondè shadow (Shadow depth):
- Flat (pa gen shadow)
- Subtle (shadow ki limyè)
- Pronounced (shadow ki fò)
```

L'agent la kreye:

- Border radius tokens (pou bouton, cards, input yo)
- Shadow tokens pou nivo eleve (elevation levels)
- Border width tokens

### Etap 5: Moti ak Animasyon (Motion and Animation) {#step-4-borders-and-shadows}

```
Kijan ou ta vle sit ou santi lè w ap fè yon bagay antyap (interactive)?

Prèfè animasyon (Animation preference):
- Minimal (pa gen okenn animasyon)
- Subtle (transisyon dous)
- Playful (animasyon ki byen vizib)

Animasyon espesifik:
- Transisyon paj yo: fade, slide, o non?
- Hover bouton: scale, chanjman koulè, o tou de bagay sa a?
- Etats chargeman (Loading states): spinner, skeleton, o progress bar?
```

L'agent la defini:

- Durasyon transisyon (fast, normal, slow)
- Fonksyon easing (ease-in, ease-out, ease-in-out)
- Keyframes animasyon pou interaksyon komen yo

## Aplike Estetik Sistèm Design (Applying Design System Aesthetics) {#step-5-motion-and-animation}

### Aplikasyon Otomatik (Automatic Application) {#applying-design-system-aesthetics}

Malgre ou fini skill la, l'agent la ap fè sa:

1. Li mete `theme.json` nan theme ou a ak tout token yo
2. Li aplike sistèm design la sou theme aktif ou an
3. Li jenerasyon mwayen style blok yo pou matche nouvo sistèm lan
4. Li aktive theme ki rafraîchi a

### Aplikasyon Manèl (Manual Application) {#automatic-application}

Ou ka edite `theme.json` dirèkteman tou:

## Gade Wè Design System ou {#manual-application}

### Mande Agant la Kesyon {#viewing-your-design-system}

```
"Montre m design system mwen"
```

oswa

```
"Ki token design mwen kounye a?"
```

Agant la ap montre ou tipografi, koulè, espas, e lòt token yo.

### Wè theme.json {#ask-the-agent}

Louvri `/wp-content/themes/[theme-name]/theme.json` nan yon editeur tèks pou w wè defisyè token yo dirèk.

## Mete Update Design System ou {#view-themejson}

### Update Rapid {#updating-your-design-system}

Mande agant la pou chanjman espesifik:

```
"Fè koulè prensipal la pi fon"
```

oswa

```
"Twe grandi skal la espas la pa 20%"
```

oswa

```
"Chanje font tit la pou yon serif"
```

### Redesign Total {#quick-updates}

Relaye aprann konpèti Design System Aesthetics la:

```
"Ann refè tout design system mwen an"
```

Sa ap gide ou nan tout desizyon yo ankò, kòmanse ak valè ou kounye a.

### Update Parèsi {#full-redesign}

Mete update sou aspè espesifik:

```
"Sèlman mete update pale koulè a, kenbe tout lòt bagay menm"
```

## Bon Pratik Design System {#partial-updates}

### Konsistans {#design-system-best-practices}

- Itilize menm token kote ou gen yo
- Pa kreye koulè oswa gwosè ki sèlman pou yon fwa
- Refè token yo olye pou w mete valè dirèk nan kòd la

### Nonnam {#consistency-1}

Itilize non ki klè ak semantic:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalabilite {#naming}

Konsepe yon sistèm ki ka grandi (Design your system to scale):

- Itilize yon mizè relatif (rem, em) olye de piksel
- Kreye lòt skal (xs, sm, md, lg, xl) olye de valè arbitré
- Planifye pou ajou nan lavni

### Dokiman sistèm konsepsyon ou a: {#scalability}

Dokimante sistèm konsepsyon ou a:

- Poukisa ou chwazi koulè espesifik yo
- Lè pou itilize chak token (token)
- Eksèpasyon ak kaje difisil (edge cases)

## Modèl Sistèm Konsepsyon komen (Common Design System Patterns) {#documentation}

### Modern Minimalist {#common-design-system-patterns}

- Tipografi san serif (Inter, Helvetica)
- Palèt koulè limite (2-3 koulè)
- Espas la anpil (generous spacing)
- Ombre subtil (subtle shadows)
- Animasyon rapid ak plizyè (smooth, fast animations)

### Chale ak Amical (Warm and Friendly) {#modern-minimalist}

- Miks serif ak san serif
- Palèt koulè chale (orange, grè nan chofe)
- Kònd an dous (rounded corners)
- Ombre souf (soft shadows)
- Animasyon jwèt (playful animations)

### Korporat Pwofesyonèl (Professional Corporate) {#warm-and-friendly}

- San serif ki pwòp (Roboto, Open Sans)
- Palèt nòmal ak koulè aksan (accent color)
- Espas estriktire (structured spacing)
- Ombre minimize (minimal shadows)
- Transisyon subtil (subtle transitions)

### Kreatif ak Fò (Creative and Bold) {#professional-corporate}

- Tipografi ki diferan (distinctive typography)
- Palèt koulè fò (bold color palette)
- Espas varye (varied spacing)
- Ombre fò (strong shadows)
- Animasyon ki atire atansyon (noticeable animations)

## Rezolisyon pwoblèm (Troubleshooting) {#creative-and-bold}

**Chanjman nan sistèm konsepsyon mwen an pa parèt**
- Netwaye cache bra ou a (Clear your browser cache)
- Rekonstri sit ou la si ou itilize yon static generator
- Kontwe ak sa `theme.json` se valid JSON
- Verifye ke tema a aktif

**Koulè yo sanble diferan sou diferan paj**
- Kontwe pou CSS ki kontann nan plugin yo
- Verifye ke tout paj itilize menm tema a
- Netwaye nenpòt plugin cache ou genyen

**Mwen vle retounen nan yon sistèm konsepsyon anvan an**
- Demande agyan an: "Show me my design system history"
- Edite manman `theme.json` pou valè anvan yo
- Rete itilize skill la ak chwazi diferan

## Etap Kounye a (Next Steps) {#troubleshooting}

Ap fè ou defini sistèm konsepsyon ou anvan:

1. **Revize ou sit la** : Ale sou sit ou pou w wè nouvo lejè a
2. **Fason plis** : Fè ajisteman yo itilize menm konpetans ou a ankò
3. **Kreye modèl (templates)** : Bati modèl blok espesyal ak token konsepsyon ou yo
4. **Dokimante** : Pataje sistèm konsepsyon ou an ak memba ekip la
