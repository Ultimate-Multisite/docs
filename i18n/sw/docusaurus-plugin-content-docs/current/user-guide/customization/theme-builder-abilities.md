---
title: Uwezo wa Mjenzi wa Mandhari
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Uwezo wa Kuunda Mandhari: Kuunda Muundo na Kuweka Mandhari ya Block {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 inatanguliza uwezo wawili wenye nguvu vinavyokuruhusu kuunda na kuweka mandhari (themes) ya block maalum moja kwa moja kutoka kwenye kiolesura cha mazungumzo (chat interface).

## Muhtasari {#overview}

Uwezo wa **scaffold-block-theme** na **activate-theme** unaruhusu agents kufanya yafuatayo:
- Kuunda mandhari kamili, tayari kwa matumizi halisi, kulingana na maelezo yako.
- Kuweka mandhari kiotomatiki kwenye tovuti yako bila kuhitaji uingiliaji wa binadamu.
- Kuunda utambulisho wa kuonekana unaoendana kupitia maamuzi ya muundo yanayoelekezwa.

## Kuunda Muundo wa Mandhari ya Block (Scaffold Block Theme) {#scaffold-block-theme}

Uwezo wa **scaffold-block-theme** unaunda mandhari mpya ya WordPress ya block yenye muundo kamili wa mandhari, ikiwa ni pamoja na:

- `theme.json` kwa mipangilio ya token za muundo (design tokens).
- Faili za muundo wa block kwa mipangilio ya kawaida.
- Mitindo na tofauti za block maalum.
- Metadata ya mandhari na matangazo ya usaidizi.

### Jinsi ya Kuitumia {#how-to-invoke}

Katika mazungumzo yako na Superdav AI Agent, unaweza kuomba kuunda mandhari kwa kutumia:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent atafanya yafuatayo:
1. Kukusanya mapendeleo yako ya muundo kupitia mazungumzo.
2. Kuunda muundo kamili wa mandhari.
3. Kuunda faili zote muhimu za mandhari.
4. Kuandaa mandhari kwa ajili ya kuwekwa hai.

### Matokeo Yanayotarajiwa {#expected-output}

Wakati uwezo huu unapofanywa kwa mafanikio, utaona:

- Thibitisho kwamba mandhari limefundishwa muundo wake (scaffolded).
- Jina na eneo la mandhari.
- Muhtasari wa token za muundo zilizotumika (rangi, maandishi, nafasi).
- Hali ya tayari ya kuwekwa hai.

Mfano wa matokeo:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Kuweka Mandhari Hai (Activate Theme) {#activate-theme}

Uwezo wa **activate-theme** unabadilisha tovuti yako kwenda kwenye mandhari jipya yaliyoundwa muundo wake au mandhari iliyopo.

### Jinsi ya Kuitumia {#how-to-invoke-1}

Baada ya kuunda muundo wa mandhari, unaweza kuweka hai mara moja:

```
"Activate the Modern Agency theme"
```

Au weka hai chochote cha mandhari kilichoopo:

```
"Switch to the Twentytwentyfour theme"
```

### Matokeo Yanayotarajiwa {#expected-output-1}

Wakati kuweka hai kunafanikiwa:

- Thibitisho la mandhari lililofanywa hai.
- Jina la mandhari lililokuwa hai awali (kwa kumbukumbu).
- URL ya tovuti ambapo mandhari sasa limefanyika hai.
- Maelezo yoyote ya mipangilio maalum ya mandhari.

Mfano wa matokeo:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Mchakato: Kuunda Muundo na Kuweka Mandhari {#workflow-scaffold-and-activate}

Mchakato wa kawaida unachanganya uwezo wote wawili:

1. **Omba kuunda mandhari**: "Create a block theme for my SaaS landing page"
2. **Agent anaunda muundo wa mandhari**: Anaunda faili na token za muundo.
3. **Kagua na kuboresha**: Jadili mabadiliko ya muundo ikiwa ni lazima.
4. **Weka hai**: "Activate the theme now"
5. **Thibitisha**: Tembelea tovuti yako kuthibitisha kwamba muundo mpya umefanyika hai.

## Token za Muundo na Kuboresha (Design Tokens and Customization) {#design-tokens-and-customization}

Mandhari zilizoundwa muundo wake hutumia token za muundo za WordPress (kupitia `theme.json`) kwa ajili ya:

- **Rangi**: Primary, secondary, accent, neutral palette
- **Maandishi**: Familia za fonti, ukubwa, uzito, urefu wa mistari.
- **Nafasi**: Padding, margin, gap scales.
- **Mipaka**: Token za radius na upana.
- **Vipya (Shadows)**: Viwango vya urefu (elevation levels).

Token hizi ziko zilizokusanywa katika `theme.json`, na kufanya iwe rahisi kurekebisha mfumo wote wa muundo wako kutoka faili moja.

## Vikwazo na Kumbukumbu {#limitations-and-notes}

- Mandhari huundwa muundo wake katika `/wp-content/themes/` na lazima ifuate kanuni za utozi wa WordPress.
- Kuweka hai kunahitaji ruhusa sahihi kwenye tovuti yako ya WordPress.
- Msimbo wa PHP maalum katika mandhari ni mdogo; tumia plugins kwa ajili ya utendakazi tata.
- Mandhari za block hufanya kazi vizuri zaidi na WordPress 5.9 na baadaye.

## Kutatua Matatizo (Troubleshooting) {#troubleshooting}

**Mandhari haonekane baada ya kuunda muundo wake**
- Thibitisha kuwa saraka ya mandhari ipo na ina ruhusa sahihi.
- Angalia kwamba `theme.json` ni JSON halali.
- Hakikisha jina la mandhari halingangii na mandhari zilizopo.

**Kuweka hai kunashindikana**
- Thibitisha kuwa una ruhusa za msimamizi (administrator).
- Angalia kwamba saraka ya mandhari inaweza kusomwa na WordPress.
- Kagua kumbukumbu za makosa za WordPress kwa maelezo zaidi.

**Token za muundo hazionekani**
- Thibitisha kwamba sintaks ya `theme.json` ni sahihi.
- Futa plugins yoyote ya kuweka cache.
- Angalia kwamba toleo lako la WordPress linasaidia token unazotumia.

## Hatua Zijazo {#next-steps}

Baada ya kuweka hai mandhari yako, unaweza:
- Kutumia **Design System Aesthetics skill** kuboresha maandishi, rangi, na nafasi.
- Kubadilisha mitindo ya block moja kwa moja kupitia mhariri wa block wa WordPress.
- Kuongeza CSS maalum katika faili ya `style.css` ya mandhari.
- Kuunda templates za block maalum kwa aina maalum za kurasa.
