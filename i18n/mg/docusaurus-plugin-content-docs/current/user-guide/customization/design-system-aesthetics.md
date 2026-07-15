---
title: Fahaizana ny endrika Design System
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Fahaizana Amin'ny Design System Aesthetics

Ny **Fahaizana amin'ny Design System Aesthetics** dia fomba iray mitarika mba hanatsarana ny maha-izy azy an'ny endriky ny tranokalanareo. Manampy anao handray fanapahan-kevitra mifandraika (mifanaraka) momba ny tipografia, loko, toerana misy (spacing), ary ireo "tokens" momba ny fihetsika izay mamolavola ny design system anareo.

## Inona no Design System Aesthetics? {#what-is-design-system-aesthetics}

Ny Design System Aesthetics dia fahaizana voarafitra izay manaraka ireto zavatra ireto:

- **Typography**: Karazan'ny fonts, habeny, lanjany (weights), ary habetsahan'ny tsipika (line heights)
- **Color**: Ireo loko fototra (primary), faharoa (secondary), fanasongadina (accent), ary ireo loko mampitony (neutral palettes)
- **Spacing**: Ny elanelana eo anelanelan'ny zavatra (padding, margin, sy ny habakabaka misy azy)
- **Borders**: Ireo "tokens" momba ny haben'ny rindrina (radius) sy ny lanjany
- **Shadows**: Ireo "tokens" momba ny haavo sy ny lalindalindalina (elevation and depth)
- **Motion**: Ireo animation sy transitions

Ireto fanapahan-kevitra rehetra dia voarakitra ao anaty rakitra `theme.json` an'ny theme anareo, ka mamorona rafitra endrika iray mifamatotra.

## Nahoana no tokony hampiasaina ny Design System Aesthetics? {#why-use-design-system-aesthetics}

### Fandaminana Mifanaraka (Consistency) {#consistency}

Ny design system dia miantoka fa:

- Ny lahatsoratra rehetra dia mampiasa ny habakabakan'ny tipografia mitovy
- Ireo loko dia ampiasaina amin'ny fomba mitovy eo amin'ny tranokalanareo
- Ny elanelana misy dia manaraka lamina azo vinavinaina
- Ny animation dia toa iray ihany

### Fahafahana Miasa (Efficiency) {#efficiency}

Fa raha manao fanapahan-kevitra momba ny endrika isaky ny pejy ianao, dia:

- Mametraka ireo "tokens" iray ihany
- Mampiasa azy eo amin'ny toerana rehetra
- Manova azy an-tserasera (globally) amin'ny alalan'ny fanovana valiny iray fotsiny

### Fahafahana Miova (Flexibility) {#flexibility}

Afaka:

- Manova haingana ny design system anareo manontolo
- Manandrana zavatra samihafa momba ny endrika
- Mitazona ny maha-izy azy an'ny marika (brand consistency) raha miova sy mivelatra ianao

## Famoronana ny Fahaizana amin'ny Design System Aesthetics {#triggering-the-design-system-aesthetics-skill}

### Fanatanterahana Amin'ny Tanana (Manual Activation) {#manual-activation}

Afaka manomboka ity fahaizana ity amin'ny fotoana rehetra:

```
"Manampy ahy hanatsara ny design system an-tserasera ko"
```

na

```
"Andao handatsara ny endriky ny tranokalanay isika"
```

na

```
"Hitondro ahy amin'ny fanapahan-kevitra momba ny design system"
```

### Torohevitra Ho Atao Amin'ny Alalan'ny Fandikana (Automatic Suggestions) {#automatic-suggestions}

Mety hanoro hevitra fampiasana ity fahaizana ity ny agents rehefa:

- Mangataka fanovana amin'ny endrika ianao
- Mitaky famolavolana "moderne" na "professionnel" ianao
- Te hanatsara ny fomba fijery (visual consistency) ianao
- Mialoha ny manokatra ny tranokalanareo ianao

## Fomba Fandren'ny Design System {#the-design-system-aesthetics-process}

### Dingana 1: Typography {#step-1-typography}

Ny agent dia manontany anao momba ny safidinao amin'ny font:

```
Inona no fomba fanoratana (typography style) tianao?
- Serif (traditionnelle, tsara tarehy)
- Sans-serif (mafana, madio)
- Monospace (teknika, mifantoka amin'ny code)

Ho an'ny font ho an'ny lohateny (heading):
- Te hanana font manokana ho an'ny lohateny ve ianao, sa hampiasa ilay mitovy amin'ny lahatsoratra fototra?
- Fifidianana: matanjaka (bold), tsara tarehy (elegant), mampihomehy (playful), kely indrindra (minimal)?

Ho an'ny font ho an'ny lahatsoratra fototra (body):
- Ny fahafantarana ny lahatsoratra no zava-dehibe. Tiako ve:
  - Texte lehibe kokoa, misy toerana be kokoa
  - Texte fohy, mahomby
  - Fandrefesana habeny (standard sizing)
```

Ary avy eo dia mamaritra izy hoe:

- **Font ho an'ny lohateny (Heading font)**: Ny font fototra ho an'ny lohateny sy ny antsipiriany lehibe.
- **Font ho an'ny lahatsoratra fototra (Body font)**: Ny font ho an'ny fehezanteny sy ny lahatsoratra ankapobeny.
- **Font Monospace**: Ny font ho an'ny code sy ny votoaty teknika.
- **Scale habeny (Size scale)**: Haben'ny famaritana mialoha (kely, fototra, lehibe, XL, sns.).
- **Scale lanjany (Weight scale)**: Lanjany an'ny font (regular, medium, bold, sns.).
- **Halevan-tsoratra (Line height)**: Ny toerana misy eo anelanelan'ny tsipika mba ho mora vakiana.

### Dingana 2: Color Palette {#step-2-color-palette}

```
Andeha hamaritana ny loko (color palette) anao.

Loko fototra (Primary color - ny loko marika anao):
- Ankehitriny: [mampiseho ny loko misy]
- Ovay ho: [color picker na hex code]

Loko faharoa (Secondary color - loko manohana):
- Ankehitriny: [mampiseho ny loko misy]
- Ovay ho: [color picker na hex code]

Loko fanamafisana (Accent color - ho an'ny famantarana sy CTAs):
- Ankehitriny: [mampiseho ny loko misy]
- Ovay ho: [color picker na hex code]

Loko fampitandremana (Neutral palette - grays ho an'ny lahatsoratra, lany, fonosana):
- Hafana (Light): [loko]
- Salama (Medium): [loko]
- Mafana (Dark): [loko]
```

Ny agent dia mamorona loko feno ahitana:

- Loko fototra, faharoa ary fanamafisana.
- Grays (hafana, salama, mafana).
- Loko manondro ny dikany (success, warning, error).
- Toerana ho an'ny hover sy active states.

### Dingana 3: Fizarana (Spacing) {#step-3-spacing}

Ahoana ny toerana fanehoana (breathing room) tianao ve?

Safidy ny habakajy (spacing scale):
- Compact (fohy, efisien ny endrika)
- Normal (fihodinana tsara ny fahasamihafana eo amin'ny toerana)
- Spacious (tsara ny toerana misokatra be)

Izany dia manova zavatra maromaro:
- Padding ao anatin'ny buttons sy cards
- Margins eo anelanelan'ny sections
- Gap eo anelanelan'ireo grid items

Ny agent dia mamaritra ireo tokens (fepetra) ho an'ny spacing:

- Base unit (matetika 4px na 8px)
- Scale: xs, sm, md, lg, xl, 2xl
- Valo manokana ho an'ny padding, margin, gap

### Dingana 4: Fandrefana sy Olana (Borders and Shadows) {#step-4-borders-and-shadows}

```
Fahafantarana lalina sy famaritana ny zavatra:

Safidy ny border radius:
- Sharp (tsy misy fampitomboana)
- Subtle (radius kely)
- Rounded (radius antonony)
- Very rounded (radius lehibe)

Lalina ny olana (Shadow depth):
- Flat (tsy misy olana)
- Subtle (olana kely)
- Pronounced (olana matanjaka)
```

Ny agent dia mamorona:

- Border radius tokens (ho an'ny buttons, cards, inputs)
- Shadow tokens ho an'ny haavon'ny fampitomboana (elevation levels)
- Border width tokens

### Dingana 5: Mouvement sy Animation {#step-5-motion-and-animation}

```
Ahoana no tokony hisy ny toerana misy anao rehefa mihetsika?

Safidy ny animation:
- Minimal (tsy misy animation)
- Subtle (transitions malefaka)
- Playful (animation mahatsikaritra)

Animation manokana:
- Transitions an'ny pejy: fade, slide, na tsy misy ve?
- Button hover: scale, fiovana loko, sa roa izany?
- Loading states: spinner, skeleton, na progress bar?
```

Ny agent dia mamaritra:

- Transition durations (haingana, normal, salama)
- Easing functions (ease-in, ease-out, ease-in-out)
- Animation keyframes ho an'ny fampiasana mahazatra

## Fampiharana ny Endrika Design System {#applying-design-system-aesthetics}

### Fampiharana Ho Atao Amin'ny Alalan'ny Automata {#automatic-application}

Rehefa vita ny fahaizana (skill), ny agent dia:

1. Manova ny `theme.json` an'ny theme-nao amin'ireo tokens rehetra
2. Mampiasa ny design system amin'ny theme miankina aminao
3. Manamboatra indray ny styles ho an'ny blocks mba hifanaraka amin'ilay système vaovao
4. Manasongadina (activates) ny theme nohavaozina

### Fampiharana Ho Atao Amin'ny Alalan'ny Tanana {#manual-application}

Afaka manova ny `theme.json` mivantana ianao:

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

## Jereo ny Fandrenao (Viewing Your Design System) {#viewing-your-design-system}

### Mangataka amin'ny Agent (Ask the Agent) {#ask-the-agent}

```
"Asehoy ahy ny design system-ko"
```

na

```
"Inona no token an-tsaina ananako izao?"
```

Ny agent dia haneho ny tipografia, loko, fizarana (spacing), ary ireo token hafa anananao.

### Jereo ny theme.json (View theme.json) {#view-themejson}

Atsokafy `/wp-content/themes/[theme-name]/theme.json` amin'ny text editor mba hijerena ny famaritana ny token tena izy.

## Fanavaozana ny Design System-nao (Updating Your Design System) {#updating-your-design-system}

### Fanavaozana haingana (Quick Updates) {#quick-updates}

Mangataka fanovana manokana amin'ny agent:

```
"Ataovy maizina kokoa ny loko primary"
```

na

```
"Arotsaho 20% ny fizarana (spacing scale)"
```

na

```
"Ovay serif ny font an-lohan'ny lahatsoratra"
```

### Fandavaniana Manontolo (Full Redesign) {#full-redesign}

Avereno atao ny skill Design System Aesthetics:

```
"Andeha handavaniana tanteraka ny design system-ko isika"
```

Ity dia hitarika anao amin'ny fanapahan-kevitra rehetra indray, manomboka amin'ireo sandan'izay anananao.

### Fanavaozana Ampahany (Partial Updates) {#partial-updates}

Fanavao ireo lafiny manokana:

```
"Aza ovaina ny palette loko fotsiny, avelao izay rehetra hafa"
```

## Fomba Fiasa tsara indrindra ho an'ny Design System (Design System Best Practices) {#design-system-best-practices}

### Fandaminana (Consistency) {#consistency-1}

- Ampiasao ny token mitovy eo amin'ny toerana rehetra.
- Aza mamorona loko na habeny tsy manaraka.
- Ampianaro ny token fa aza mampiditra sanda mivantana ao anaty code.

### Anarana (Naming) {#naming}

Ampiasao anarana mazava sy mitovy dikany:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Fahaizana mivelatra (Scalability) {#scalability}

Ny famolavanao ny rafitra ho lehibe (Design your system to scale):

- Ampiasao ireo fepetra mifanandrify (rem, em) fa tsy pixel.
- Atao fizarana (xs, sm, md, lg, xl) fa tsy sandan-tsary tsy voafehy.
- Manomana ho amin'ny fanampiana ho avy.

### Fandikana ny rafitra famolavanao (Documentation) {#documentation}

Manoratra momba ny rafitra famolavanao:

- Nahoana no nisafidiananao loko manokana
- Rahoviana no hampiasana tsirairay amin'ireo token ireo
- Ireo fahasamihafana sy toe-javatra sarotra (Exceptions and edge cases)

## Fomba Famolavolana Mahazatra (Common Design System Patterns) {#common-design-system-patterns}

### Modern Minimalist {#modern-minimalist}

- Typografia tsy misy tsipika (Sans-serif) (Inter, Helvetica)
- Loko voafetra (2-3 loko)
- Lalana lehibe eo amin'ny toerana (Generous spacing)
- Fafana kely (Subtle shadows)
- Animation malefaka sy haingana

### Mamelona sy Fahatsiarovana (Warm and Friendly) {#warm-and-friendly}

- Fandaroana serif sy sans-serif
- Loko mamelona (orange, grays mafana)
- Kely ny fonon-tsary (Rounded corners)
- Fafana malefaka (Soft shadows)
- Animation manome fialam-boly (Playful animations)

### Matihanina ho Amin'ny Orinasa (Professional Corporate) {#professional-corporate}

- Sans-serif madio (Roboto, Open Sans)
- Loko mampitony miaraka amin'ny loko fanamafisana (Neutral palette with accent color)
- Lalana voalamina (Structured spacing)
- Fafana kely indrindra (Minimal shadows)
- Fiovana malefaka (Subtle transitions)

### Malalaka sy Mafanindrana (Creative and Bold) {#creative-and-bold}

- Typografia manokana
- Loko mafy
- Lalana samihafa
- Fafana matanjaka
- Animation mahatsikaritra

## Fanamboarana Olana (Troubleshooting) {#troubleshooting}

**Tsy miseho ny fiovana amin'ny rafitra famolavanao**
- Manadio ny cache an'ny navigateur
- Manamboara indray ny tranokala raha mampiasa static generator ianao
- Jereo fa marina ny format JSON ao amin'ny theme.json
- Fantaro fa mandeha ny theme

**Miavotra loko samihafa eo amin'ny pejy samihafa**
- Jereo raha misy CSS mifaninona ao amin'ny plugin
- Fantaro fa mampiasa theme mitovy avokoa ireo pejy rehetra
- Manadio ny caching plugins rehetra

**Te-hiova amin'ny rafitra famolavela teo aloha aho**
- Mangataka amin'ny agent hoe: "Aseho ahy ny tantaran'ny rafitra famolavela" (Show me my design system history)
- Manova manokana ny theme.json ho an'ireo sandan-tsary taloha
- Atao indray ny skill amin'ny safidy hafa

## Dingana Manaraka (Next Steps) {#next-steps}

Aorian'ny famaritana ny rafitra famolavanao:

1. **Jereo ny tranokalao (Review your site)**: Mandehana ao amin'ny tranokalao mba hijerena ny endrika vaovao.
2. **Ataovy tsara kokoa (Refine further)**: Ataovy fanitsiana bebe kokoa mampiasa ny fahaizanao indray.
3. **Mamorona templates (Create templates)**: Manamboara block templates manokana mampiasa ny design tokens anao.
4. **Manoratra antontan-taratasy (Document)**: Ampitomboina ny rafitry ny design anao ho an'ny mpikambana ao amin'ny ekipa.
