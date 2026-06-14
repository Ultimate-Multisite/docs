---
title: Mga Kakayahan ng Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Mga Kakayahan ng Theme Builder: Pagbuo at Pag-activate ng Block Themes

Ang Superdav AI Agent v1.12.0 ay nagpapakilala ng dalawang malalakas na kakayahan na nagpapahintulot sa iyo na gumawa at mag-deploy ng custom block themes direkta mula sa chat interface.

## Pangkalahatang Ideya

Ang mga kakayahang **scaffold-block-theme** at **activate-theme** ay nagbibigay-daan sa mga agent na:
- Gumawa ng kumpleto at handa nang gamitin na block themes batay sa iyong mga detalye
- Awtomatikong i-activate ang mga theme sa iyong site nang walang manual na pagpapasok
- Lumikha ng magkakaugnay na hitsura sa pamamagitan ng mga pinamumunuan na desisyon sa disenyo

## Pagbuo ng Block Theme (Scaffold Block Theme)

Ang kakayahang **scaffold-block-theme** ay gumagawa ng bagong WordPress block theme na may kumpletong istraktura ng theme, kabilang ang:

- `theme.json` configuration na may mga design tokens
- Mga template ng Block para sa mga karaniwang layout
- Custom block styles at variations
- Theme metadata at mga deklarasyon ng suporta

### Paano Gamitin (How to Invoke)

Sa iyong chat kasama ang Superdav AI Agent, maaari kang humiling ng pagbuo ng theme:

```
"Gumawa ng block theme na tinatawag na 'Modern Agency' na may kulay asul at puti,
sans-serif typography, at isang propesyonal na layout"
```

Ang agent ay gagawin ang mga sumusunod:
1. Magtipon ng iyong mga kagustuhan sa disenyo sa pamamagitan ng pag-uusap
2. Gumawa ng kumpletong istraktura ng theme
3. Lumikha ng lahat ng kinakailangang file ng theme
4. Ihanda ang theme para ma-activate

### Inaasahang Output (Expected Output)

Kapag matagumpay na na-execute ang kakayahan, makikita mo ang:

- Pagpapatunay na ang theme ay na-scaffold na
- Ang pangalan at lokasyon ng theme
- Isang buod ng mga design tokens na ginamit (kulay, typography, spacing)
- Katayuan na handa nang i-activate

Halimbawa ng output:
```
✓ Theme "Modern Agency" na na-scaffold nang matagumpay
  Lokasyon: /wp-content/themes/modern-agency/
  Mga Kulay: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Katayuan: Handang i-activate
```

## Pag-activate ng Theme (Activate Theme)

Ang kakayahang **activate-theme** ay nagpapalit ng iyong site sa bagong ginawa o umiiral na block theme.

### Paano Gamitin

Pagkatapos mong i-scaffold ang isang theme, maaari mo itong aktibahin agad:

```
"I-activate ang Modern Agency theme"
```

O i-activate ang anumang umiiral na theme:

```
"Lumipat sa Twentytwentyfour theme"
```

### Inaasahang Output

Kapag matagumpay ang pag-activate:

- Pagpapatunay ng aktibong theme
- Pangalan ng nakaraang theme (para sa sanggunian)
- Site URL kung saan abot na ang theme
- Anumang mga tala tungkol sa setup ng theme

Halimbawa ng output:
```
✓ Theme na na-activate nang maayos
  Aktibong theme: Modern Agency
  Nakaraang theme: Twentytwentyfour
  Live sa: https://yoursite.com
  Tanda: Tingnan ang iyong homepage para mapatunayan ang layout
```

## Workflow: I-scaffold at I-activate

Ang karaniwang workflow ay pinagsasama ang parehong kakayahan:

1. **Humingi ng paggawa ng theme**: "Gumawa ng block theme para sa landing page ng aking SaaS"
2. **I-scaffold ng Agent ang theme**: Gumagawa ng mga file at design tokens
3. **Suriin at ayusin**: Talakayin ang mga pagbabago sa disenyo kung kinakailangan
4. **I-activate**: "I-activate na ang theme ngayon"
5. **Beripikahin**: Bisitahin ang iyong site para kumpirmahin na buhay na ang bagong disenyo

## Design Tokens at Customization

Ang mga ginawang scaffolded theme ay gumagamit ng WordPress design tokens (mula sa `theme.json`) para sa:

- **Kulay**: Primary, secondary, accent, neutral palette
- **Tipograpiya**: Font families, laki, bigat (weights), line heights
- **Pagitan (Spacing)**: Padding, margin, gap scales
- **Border**: Radius at width tokens
- **Anino (Shadows)**: Mga antas ng elevation

Ang mga token na ito ay nakapulot sa `theme.json`, kaya madali mong mai-adjust ang iyong buong design system mula sa isang file.

## Mga Limitasyon at Tala

Ang mga tema ay naka-scaffold sa `/wp-content/themes/` at dapat sumunod sa naming conventions ng WordPress.
Kailangan ang tamang permissions para ma-activate ito sa iyong WordPress site.
Mababa lang ang kailangang custom PHP code sa mga theme; gumamit ng plugins para sa mas kumplikadong functionality.
Mas gumagana ang block themes kasama ng WordPress 5.9 at mas bago.

## Pag-troubleshoot (Troubleshooting)

**Hindi lumalabas ang tema pagkatapos i-scaffold**
- Siguraduhing umiiral ang directory ng theme at may tamang permissions.
- Tingnan kung tama ang format ng `theme.json` bilang JSON.
- Tiyakin na walang conflict ang pangalan ng theme sa mga kasalukuyang theme.

**Bumibigo ang activation**
- I-confirm na mayroon kang administrator permissions.
- Siguraduhing mababasa (readable) ng WordPress ang directory ng theme.
- Tingnan ang WordPress error logs para sa mas detalyadong impormasyon.

**Hindi naa-apply ang design tokens**
- I-verify na tama ang syntax ng `theme.json`.
- Mag-clear ng anumang caching plugins.
- Siguraduhing sinusuportahan ng iyong bersyon ng WordPress ang mga tokens na ginagamit mo.

## Susunod na Hakbang (Next Steps)

Pagkatapos i-activate ang iyong theme, maaari kang:
- Gumamit ng **Design System Aesthetics skill** para pagandahin ang typography, kulay, at spacing.
- I-customize ang estilo ng mga indibidwal na block sa pamamagitan ng WordPress block editor.
- Magdagdag ng custom CSS sa `style.css` file ng theme.
- Gumawa ng custom block templates para sa mga partikular na uri ng pahina.
