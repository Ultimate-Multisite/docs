---
title: Direksyon ng Disenyo
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# Direksiyon ng Disenyo {#design-direction}

Ang hakbang na **Direksiyon ng Disenyo** ay nagbibigay-daan sa iyong suriin, pinuhin, at tapusin ang biswal na disenyo ng iyong theme bago buuin ng Theme Builder ang kumpletong theme.

## Pangkalahatang-ideya {#overview}

Pagkatapos makumpleto ang Discovery Interview, ipinapakita ng Theme Builder ang iyong direksiyon ng disenyo na may **desktop at mobile preview rendering**. Nagbibigay-daan ito sa iyong makita nang eksakto kung ano ang magiging hitsura ng iyong disenyo sa iba't ibang device bago magpatuloy sa theme.

## Mga Bahagi ng Direksiyon ng Disenyo {#design-direction-components}

### 1. Color Palette {#1-color-palette}

Ang color scheme ng iyong theme, kabilang ang:

- **Primary color** — pangunahing kulay ng brand na ginagamit para sa mga button, link, at accent
- **Secondary color** — komplementaryong kulay para sa pagkakaiba-iba
- **Accent color** — highlight na kulay para sa mahahalagang elemento
- **Neutral colors** — mga gray at puti para sa mga background at text
- **Text color** — pangunahing kulay ng text para sa madaling pagbabasa

### 2. Typography {#2-typography}

Mga pagpili ng font para sa:

- **Heading font** — ginagamit para sa mga pamagat ng page at mga header ng seksyon
- **Body font** — ginagamit para sa text ng talata at nilalaman
- **Font sizes** — responsive na sukat para sa iba't ibang laki ng screen
- **Line height** — espasyo sa pagitan ng mga linya para sa madaling pagbabasa
- **Font weights** — bold, regular, at light na mga baryasyon

### 3. Layout at Spacing {#3-layout-and-spacing}

- **Container width** — pinakamalaking lapad para sa nilalaman
- **Padding and margins** — espasyo sa paligid ng mga elemento
- **Grid system** — layout ng column para sa responsive na disenyo
- **Component spacing** — distansya sa pagitan ng mga elemento ng UI

### 4. Mga Biswal na Elemento {#4-visual-elements}

- **Button styles** — mga disenyo ng primary, secondary, at tertiary na button
- **Card designs** — mga layout para sa mga block ng nilalaman
- **Icons** — estilo at sukat ng icon
- **Borders and shadows** — banayad na biswal na lalim
- **Hover effects** — pag-istilo ng interactive na estado

## Preview Rendering {#preview-rendering}

### Desktop Preview {#desktop-preview}

Ipinapakita ng desktop preview ang iyong disenyo sa buong lapad (karaniwang 1200px o mas malapad):

- Buong menu ng nabigasyon
- Kumpletong layout kasama ang lahat ng column
- Malalaking typography at spacing
- Lahat ng biswal na elemento sa buong laki

### Mobile Preview {#mobile-preview}

Ipinapakita ng mobile preview ang iyong disenyo sa lapad ng mobile (karaniwang 375px):

- Responsive na nabigasyon (hamburger menu)
- Single-column na layout
- Inayos na typography at spacing
- Mga sukat ng button na angkop sa touch

### Responsive Breakpoints {#responsive-breakpoints}

Nagre-render ang Theme Builder ng mga preview sa mga breakpoint na ito:

| Device | Lapad | Preview |
|--------|-------|---------|
| **Mobile** | 375px | Portrait na phone |
| **Tablet** | 768px | Landscape na tablet |
| **Desktop** | 1200px | Full-width na desktop |
| **Large Desktop** | 1920px | Ultra-wide na display |

## Pagpino ng Iyong Disenyo {#refining-your-design}

### Paggawa ng mga Pagsasaayos {#making-adjustments}

Maaari mong pinuhin ang iyong direksiyon ng disenyo sa pamamagitan ng:

1. **Pagsasaayos ng mga kulay** — baguhin ang anumang kulay sa palette
2. **Pagpapalit ng mga font** — pumili ng ibang mga typeface
3. **Pagbabago ng spacing** — isaayos ang padding at margins
4. **Pag-update ng layout** — baguhin ang lapad ng container at mga grid column
5. **Pag-customize ng mga elemento** — baguhin ang mga estilo ng button, disenyo ng card, atbp.

### Mga Update sa Preview {#preview-updates}

Ang mga pagbabago ay makikita sa real-time:

- Agad na nag-a-update ang desktop preview
- Agad na nag-a-update ang mobile preview
- Na-a-update ang lahat ng responsive breakpoints
- Maaari kang lumipat sa pagitan ng mga preview para beripikahin ang mga pagbabago

### Comparison View {#comparison-view}

Ihambing ang iyong direksiyon ng disenyo sa:

- **Orihinal na disenyo** — tingnan kung ano ang nagbago
- **Mga disenyo ng kakumpitensya** — ihambing sa mga inspirasyong site
- **Mga nakaraang bersyon** — ibalik sa mas naunang mga direksiyon ng disenyo

## Pag-apruba sa Direksiyon ng Disenyo {#design-direction-approval}

Kapag nasiyahan ka na sa iyong disenyo:

1. **Suriin ang parehong preview** — beripikahin na maganda ang hitsura ng desktop at mobile
2. **Suriin ang lahat ng kulay** — tiyakin ang contrast at accessibility
3. **Subukan ang typography** — beripikahin ang madaling pagbabasa sa lahat ng sukat
4. **Kumpirmahin ang layout** — suriin ang spacing at alignment
5. **Aprubahan ang disenyo** — magpatuloy sa pagbuo ng theme

## Mga Susunod na Hakbang {#next-steps}

Pagkatapos aprubahan ang iyong direksiyon ng disenyo:

1. Binubuo ng Theme Builder ang iyong kumpletong theme
2. Ini-install ang theme sa iyong WordPress site
3. Maaari ka pang mag-customize gamit ang WordPress customizer
4. Magpatuloy sa [Hospitality Menus](./hospitality-menus.md) o iba pang mga feature

## Pinakamahuhusay na Kasanayan {#best-practices}

- **Subukan sa tunay na mga device** — gumamit ng aktuwal na mga phone at tablet kung maaari
- **Suriin ang madaling pagbabasa** — tiyaking nababasa ang text sa lahat ng sukat
- **Beripikahin ang contrast** — gamitin ang [Validate Palette Contrast](../abilities/validate-palette-contrast.md) para sa accessibility
- **Isaalang-alang ang performance** — i-optimize ang mga larawan at font para sa bilis
- **Magplano para sa nilalaman** — tiyaking gumagana ang layout sa iyong aktuwal na nilalaman

## Pag-troubleshoot {#troubleshooting}

### Hindi Nag-a-update ang Preview {#preview-not-updating}

- I-refresh ang page
- I-clear ang cache ng browser
- Sumubok ng ibang browser
- Suriin ang koneksiyon sa internet

### Iba ang Hitsura ng mga Kulay {#colors-look-different}

- Suriin ang mga setting ng kulay ng monitor
- Subukan sa iba't ibang device
- Beripikahin ang contrast ng kulay gamit ang mga accessibility tool
- Isaalang-alang ang mga color blindness simulator

### Mga Isyu sa Typography {#typography-issues}

- Beripikahin na naglo-load ang mga font file
- Suriin ang laki ng font sa iba't ibang breakpoint
- Subukan gamit ang aktuwal na nilalaman
- Isaalang-alang ang haba ng linya para sa madaling pagbabasa

## Kaugnay na Dokumentasyon {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — mangalap ng impormasyon sa disenyo
- [Hospitality Menus](./hospitality-menus.md) — gumawa ng mga structured na menu page
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — suriin ang accessibility ng kulay
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — gumawa ng mga custom na logo
