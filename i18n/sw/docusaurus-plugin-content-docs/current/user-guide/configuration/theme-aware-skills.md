---
title: Stadi Zinazojitambua Kulingana na Mandhari
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Stadi Zinazojua Mandhari

Superdav AI Agent v1.10.0 inatuma stadi nne mpya zilizojengwa ndani na zinazojua mandhari (theme-aware) ambazo hurekebishwa kiotomatiki kulingana na mandhari yako ya WordPress linalotumika. Stadi hizi hutoa mwongozo na uwezo maalum ulioundwa kulingana na muundo na vipengele vya mandhari yako.

## Stadi Zinazojua Mandhari ni Nini? {#what-are-theme-aware-skills}

Stadi zinazojua mandhari ni maktaba za maarifa na seti za zana ambazo msaidizi wa AI anazochagua kiotomatiki kulingana na mandhari ya WordPress linalotumika kwenye tovuti yako. Unapobadilisha mandhari, stadi zinazopatikana za msaidizi huwekwa masasisho kiotomatiki — hakuna haja ya kuweka mipangilio ya mikono.

Kila stadi inajumuisha:

- **Waraka mahususi na mandhari** — mwongozo wa kutumia na kubadilisha mandhari
- **Marejeo ya Blocks na mifumo (patterns)** — blocks, mifumo, na chaguo za muundo zinazopatikana
- **Mifano ya kubadilisha** — vipande vya code na mifumo ya mipangilio kwa kazi za kawaida
- **Mazoea bora** — mapendekezo kwa muundo na mtiririko wa kazi wa mandhari

## Stadi Zinazojua Mandhari Zinazopatikana {#available-theme-aware-skills}

### Block Themes {#block-themes}

**Inatumika kwa:** Mandhari yanayotumia muundo wa blocks wa WordPress (Full Site Editing).

Stadi ya Block Themes inatoa mwongozo kuhusu:

- Kuunda na kuhariri templates kwa kutumia block editor
- Kufanya kazi na block patterns na blocks zinazoweza kutumika upya
- Kubadilisha global styles na mipangilio ya theme.json
- Kutumia theme blocks na variations
- Kuunda block patterns maalum kwa tovuti yako

**Inawashughulisha kiotomatiki wakati:** Mandhari yako linalotumika ni block theme (linasaidia kipengele cha `block-templates`).

### Classic Themes {#classic-themes}

**Inatumika kwa:** Mandhari za jadi za WordPress zinazotumia PHP templates na classic editor.

Stadi ya Classic Themes inatoa mwongozo kuhusu:

- Kufanya kazi na faili za PHP templates na hooks
- Kubadilisha mwonekano wa mandhari kupitia Customizer
- Kutumia widget areas na sidebars
- Kuhariri CSS na maendeleo ya child theme
- Kuelewa hierarchy ya mandhari na template tags

**Inawashughulisha kiotomatiki wakati:** Mandhari yako linalotumika ni mandhari ya jadi (siyo ya blocks).

### Kadence Blocks {#kadence-blocks}

**Inatumika kwa:** Tovuti zinazotumia plugin ya Kadence Blocks kwa ajili ya muundo wa blocks wa hali ya juu.

Stadi ya Kadence Blocks inatoa mwongozo kuhusu:

- Kutumia maktaba ya blocks ya hali ya juu ya Kadence (Hero, Testimonials, Pricing, n.k.)
- Kuweka mipangilio ya blocks za Kadence na chaguo za responsive
- Kuunda layouts maalum kwa kutumia blocks za grid na container za Kadence
- Kuunganisha blocks za Kadence na mandhari lako
- Kutumia mfumo wa muundo na presets za Kadence

**Inawashughulisha kiotomatiki wakati:** Plugin ya Kadence Blocks inatumika kwenye tovuti yako.

### Kadence Theme {#kadence-theme}

**Inatumika kwa:** Tovuti zinazotumia mandhari ya Kadence kwa ajili ya muundo na kubadilisha kwa blocks.

Stadi ya Kadence Theme inatoa mwongozo kuhusu:

- Kubadilisha mandhari ya Kadence kupitia global styles na theme.json
- Kutumia block patterns na templates zilizo ndani ya Kadence
- Kuweka mipangilio na chaguo za mandhari ya Kadence
- Kuunda miundo maalum kwa kutumia mfumo wa muundo wa Kadence
- Kuunganisha Kadence na plugins na zana maarufu

**Inawashughulisha kiotomatiki wakati:** Mandhari ya Kadence ni mandhari yako linalotumika.

## Jinsi Stadi Zinavyochaguliwa {#how-skills-are-selected}

Msaidizi anitambua kiotomatiki mandhari yako linalotumika na plugins zilizosakinishwa kwenye kila ujumbe. Ikiwa stadi inayolingana na mandhari inapatikana, inapakuliwa kwenye muktadha wa msaidizi kiotomatiki. Huna haja ya kuwezesha au kubadilisha stadi kwa mikono.

### Stadi Nyingi {#multiple-skills}

Ikiwa stadi nyingi zinatumika kwenye tovuti yako (kwa mfano, ikiwa una Kadence Blocks na Kadence Theme zote zimefunguliwa), msaidizi anapata ufikiaji wa stadi zote zinazohitajika na anaweza kurejelea mwongozo kutoka kila moja.

### Kubadilisha Mandhari {#switching-themes}

Unapobadilisha mandhari lako linalotumika, stadi zinazopatikana za msaidizi huwekwa masasisho kiotomatiki kwenye ujumbe ujao. Kwa mfano:

1. Unatumia block theme na stadi ya **Block Themes** ikiwa imewashwa.
2. Unabadilisha kwenda mandhari ya jadi.
3. Kwenye ujumbe wako ujao, stadi ya **Classic Themes** inapakuliwa kiotomatiki, na stadi ya **Block Themes** haipo tena.

## Kutumia Stadi Zinazojua Mandhari {#using-theme-aware-skills}

Ili kutumia stadi inayojua mandhari, elezea tu unachotaka kufanya kwenye kiolesura cha chat. Msaidizi atarejelea mwongozo wa stadi inayofaa kiotomatiki.

### Mifano ya Maagizo (Prompts) {#example-prompts}

**Kwa Block Themes:**
> "Tengeneza sehemu ya hero na picha ya background na maandishi yaliyotengwa katikati kwa kutumia block patterns."

**Kwa Classic Themes:**
> "Ongeza sehemu ya widget maalum kwenye sidebar kwa kutumia child theme."

**Kwa Kadence Blocks:**
> "Jenga sehemu ya testimonials kwa kutumia block ya Kadence Testimonials."

**Kwa Kadence Theme:**
> "Badilisha muundo wa header na mtindo wa menyu ya navigation."

Msaidizi atatoa mwongozo mahususi na mandhari na mifano ya code inayolingana na mandhari na plugins zako zinazotumika.

:::note
Stadi zinazojua mandhari zinapatikana kiotomatiki katika Superdav AI Agent v1.10.0 na zaidi. Hakuna mipangilio au uwekaji wa ziada unaohitajika.
:::
