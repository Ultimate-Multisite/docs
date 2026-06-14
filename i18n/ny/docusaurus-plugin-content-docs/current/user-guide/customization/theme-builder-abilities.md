---
title: Mwayi awo ya Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Uzi wa Theme Builder: Kufunga na Kuwaka Block Themes

Superdav AI Agent v1.12.0 imapeza uwezo mbaluwu ubalezi wosayansi ambao umeweza kutengeneza na kuwekwa thimbi la block (block themes) moja kwa moja kupitia chat interface.

## Ufafanuzi wa Jumla

Uwezo wa **scaffold-block-theme** na **activate-theme** unamfanya agents:
- Kutengeneza block themes kamili, zilizosajili tayari kwa uzalishaji (production-ready) kulingana na maelekezo yako
- Kuwaka themes kwenye tovuti yako kiotomatiki bila kuhitaji msaada wa mtu yeyote
- Kujenga utambulisho mzuri wa kuona kupitia maamuzi ya kubuni yaliyoelekezwa

## Kufunga Block Theme (Scaffold Block Theme)

Uwezo wa **scaffold-block-theme** unatengeneza theme mpya la WordPress block na muundo kamili wa theme, ikiwemo:

- `theme.json` configuration yenye design tokens
- Files za template ya Block kwa mipangilio ya kawaida (common layouts)
- Staili na tofauti za block maalum
- Metadata ya theme na tamko la msaada

### Jinsi ya Kuitumia

Katika mazungumzo yako na Superdav AI Agent, unaweza kuomba utengenezaji wa theme:

```
"Tengeneza block theme itaitwa 'Modern Agency' yenye rangi ya bluu na nyeupe,
typography isiyo na herufi (sans-serif), na muundo wa kitaalamu"
```

Agent itafanya yafuatayo:
1. Kukusanya mapendeleo yako ya kubuni kupitia mazungumzo
2. Kutengeneza muundo kamili wa theme
3. Kuunda files zote zinazohitajika za theme
4. Kuandaa theme kwa ajili ya kuwaka

### Matokeo Yanayotarajiwa

Inapokuwa na uwezo huo unafanya kazi vizuri, utaona:

- Uthibitishaji kwamba theme imefungwa (scaffolded)
- Jina la theme na mahali pa kupatikana kwake
- Muhtasari wa design tokens zilizotumika (rangi, typography, nafasi)
- Hali ya kuwaka tayari

Mfano wa matokeo:
```
✓ Theme "Modern Agency" imefungwa vizuri
  Mahali: /wp-content/themes/modern-agency/
  Rangi: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Hali: Tayari kuwaka
```

## Kuwaka Theme (Activate Theme)

Kufunso **activate-theme** ability imalimbikani site ya wanu ku theme yali liliwera kapena liliwera.

### Umuzi Woperekana

Pambiri muliiteka theme, muliiteka muliiteka muliiteka:

```
"Activate the Modern Agency theme"
```

Kapena muliiteka theme yali liliwera:

```
"Switch to the Twentytwentyfour theme"
```

### Umuzi Woperekana

Pambiri imalimbikani imalimbikani:

- Kufingira theme yali likuiteka
- Iminyanja ya theme yali liliwera (kwa chifukwa)
- URL ya site pamene theme ikulimbikani
- Zomwe zikufufuza za theme

Umuzi woperekana:
```
✓ Theme ikulimbikani bwino
  Theme ililimbikani: Modern Agency
  Theme yali likuiteka: Twentytwentyfour
  Ili liliwera ku: https://yoursite.com
  Zomwe zikufufuza: Fufuza homepage ya wanu kuti muliiteka layout
```

## Umuzi Woperekana: Kufingira na Kuimbikani

Umuzi woperekana umalimbikani omwe uliiteka:

1. **Kufuna kupeza theme**: "Create a block theme for my SaaS landing page" (Tenga theme ya block kwa landing page ya m'ndzi wangu)
2. **Agent imalimbikani theme**: Imalimbikani files ndi design tokens
3. **Kufufuza na kufufuza**: Malingana ndi mapulogolero a design ngati muliiteka
4. **Kuimbikani**: "Activate the theme now" (Imalimbikani theme wena pano)
5. **Kufufuza**: Liramba kuona site yanu kuti muliiteka design yatsopano

## Design Tokens na Kufufuza

Themes ziliwera zikuiteka zikuiteka WordPress design tokens (kuti `theme.json`) kwa:

- **Mawonekedwe (Colors)**: Primary, secondary, accent, neutral palette
- **Mwayi wa Luso (Typography)**: Font families, sizes, weights, line heights
- **Malingaliro (Spacing)**: Padding, margin, gap scales
- **Mawonekedwe (Borders)**: Radius na width tokens
- **Mawonekedwe (Shadows)**: Elevation levels

Tokensizo izi zili m'malo wosonyeza `theme.json`, imalimbikani kuti muliiteka yote la design yanu kuchokera kwa file imodzi.

## Mapulogolero na Zomwe Zikufufuza

- Themes zikwera m'mulo mu `/wp-content/themes/` ndipo muli ndi mfundo ya WordPress
- Kufuna kukhazikizidwa (Activation) kumayesera m'mulo wanu wa WordPress

- Kufuna kukhazikizidwa kumayesera m'mulo wanu wa WordPress

- Koma kwa PHP yomwe ndi wopereka mu themes ndi kupitiliza kwambiri; simukuseka plugins kuti muli ndi mfundo zosavuta.
- Block themes zimene zikukonzekera bwino ndi WordPress 5.9 ndipo zikuchezedwa.

## Kukhazikitsa (Troubleshooting)

**Theme sikuyesa pambuyo pa kukonzekera (scaffolding)**
- Ngati muli ndi directory ya theme imene ndipo inali m'mulo wopereka bwino.
- Ngati muli ndi `theme.json` yomwe ndi JSON yomwe yenera.
- Ngati dzina la theme lili likupitiliza ndi themes zomwe zikuti pansi.

**Kukhazikizidwa (Activation) sikuyesa**
- Ngati muli ndi ulemu wopereka bwino (administrator permissions).
- Ngati muli ndi directory ya theme imene WordPress imayesera.
- Ngati muli ndi logs za WordPress kuti muli ndi zinthu zina.

**Design tokens sikuyesa kukhala**
- Ngati muli ndi syntax ya `theme.json` yomwe yenera.
- Ngati muli ndi caching plugins, chitsatsani (clear) zonse.
- Ngati muli ndi WordPress version yomwe imayesera tokens zomwe muli kumanga.

## Zinthu Zosiyanasiyana (Next Steps)

Pambuyo pa kukonzekera theme yanu, muli ndi ulemu wopereka kuti:
- Mutumizire **Design System Aesthetics skill** kuti muli ndi chidziwitso kwa typography, colors, ndipo spacing.
- Mutumizire styles za block zina m'mulo wa WordPress block editor.
- Mutumizire CSS yomwe ndi wopereka mu file ya `style.css` ya theme.
- Mutumizire custom block templates kuti muli ndi page types zosavuta.
