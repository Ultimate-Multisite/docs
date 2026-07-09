---
title: Gumawa ng Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Bumuo ng Logo SVG

Ang kakayahang **Bumuo ng Logo SVG** ay nagbibigay-daan sa Theme Builder na gumawa at mag-embed ng mga custom na logo SVG nang direkta sa iyong WordPress site na may awtomatikong namespace-safe sanitisation.

## Pangkalahatang-ideya

Ang kakayahang ito ay bumubuo ng mga scalable vector graphics (SVG) logo batay sa direksiyon ng branding at mga kagustuhan sa disenyo ng iyong site. Ang mga nabuong SVG ay awtomatikong sina-sanitise upang matiyak na ligtas gamitin ang mga ito sa WordPress habang pinananatili ang integridad ng biswal.

## Mga Parameter

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Ang pangalan ng site kung saan bubuuin ang logo |
| `style` | string | Yes | Ang estilo ng disenyo (hal., "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | Array ng mga hex color code na gagamitin sa logo (hal., `["#678233", "#ffffff"]`) |
| `width` | number | No | Lapad ng SVG sa pixels (default: 200) |
| `height` | number | No | Taas ng SVG sa pixels (default: 200) |
| `include_text` | boolean | No | Kung isasama ang pangalan ng site bilang teksto sa logo (default: true) |

## Format ng Output

Ang kakayahan ay nagbabalik ng SVG string na may sumusunod na istruktura:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Gawi sa SVG Sanitisation

Ang mga nabuong SVG ay sumasailalim sa awtomatikong namespace-safe sanitisation upang:

- **Alisin ang hindi ligtas na mga attribute** — inaalis ang mga event handler, script, at posibleng mapanganib na mga attribute
- **Panatilihin ang mga namespace** — pinananatili ang mga SVG namespace (xmlns, xlink) para sa wastong pag-render
- **Patunayan ang istruktura** — tinitiyak na sumusunod ang SVG sa mga pamantayan ng W3C
- **I-encode ang mga entity** — wastong ine-escape ang mga espesyal na character sa nilalamang teksto
- **Alisin ang mga panlabas na reference** — inaalis ang mga panlabas na stylesheet at image reference

Tinitiyak nito na ligtas i-embed ang SVG nang direkta sa WordPress nang hindi nangangailangan ng karagdagang sanitisation.

## Halimbawa ng Paggamit

**Prompt:**
```
Bumuo ng modernong logo para sa aking tech startup na tinatawag na "CloudSync" gamit ang asul at puting mga kulay.
```

**Resulta:**
Lumilikha ang kakayahan ng SVG logo na:
- Isinasama ang pangalan ng site na "CloudSync"
- Gumagamit ng tinukoy na asul at puting color scheme
- Sumusunod sa mga prinsipyo ng modernong disenyo
- Awtomatikong sina-sanitise at handa nang gamitin

## Integrasyon sa Theme Builder

Kapag ginagamit ang pagpili ng direksiyon ng disenyo ng Theme Builder, ang kakayahang Bumuo ng Logo SVG ay:

1. Sinusuri ang iyong direksiyon ng disenyo at color palette
2. Bumubuo ng custom na SVG logo na tumutugma sa iyong mga kagustuhan
3. Awtomatikong ini-embed ang logo sa header/branding area ng iyong site
4. Iniimbak ang SVG bilang custom na logo sa WordPress media

## Pinakamahuhusay na Kasanayan

- **Magbigay ng malinaw na mga kagustuhan sa estilo** — ilarawan ang estilo ng disenyo na gusto mo (moderno, klasiko, playful, atbp.)
- **Tukuyin ang mga kulay** — isama ang mga kulay ng iyong brand para sa consistency
- **Subukan ang pag-render** — tiyaking tama ang pagpapakita ng logo sa iba't ibang laki ng screen
- **I-customize pa** — gamitin ang mga tool sa pag-customize ng logo ng WordPress upang isaayos ang laki at placement

## Mga Limitasyon

- Ang mga SVG logo ay binubuo bilang static na graphics (hindi animated)
- Ang mga komplikadong logo na may maraming elemento ay maaaring mangailangan ng manwal na pagpipino
- Hindi sinusuportahan ang mga custom font; gumagamit ang teksto ng mga system font
- Maaaring makaapekto sa kalidad ang napakalaki o napakaliit na mga dimensiyon

## Kaugnay na mga Kakayahan

- [Patunayan ang Contrast ng Palette](./validate-palette-contrast.md) — suriin ang contrast ng kulay para sa accessibility
- [Gumawa ng Menu](./create-menu.md) — gumawa ng mga menu ng nabigasyon para sa iyong site
