---
title: Paghimo og Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Paghimo og Logo SVG

Ang **Paghimo og Logo SVG** nga abilidad nagtugot sa Theme Builder sa paghimo ug pag-embed og custom nga logo SVGs direkta sa imong WordPress site nga adunay awtomatikong namespace-safe nga sanitisation.

## Kinatibuk-ang Tan-aw

Kini nga abilidad naghimo og scalable vector graphics (SVG) nga mga logo base sa branding direction ug mga gusto sa disenyo sa imong site. Ang nahimong mga SVG awtomatikong gi-sanitise aron masiguro nga luwas kini gamiton sa WordPress samtang gipadayon ang visual integrity.

## Mga Parameter

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Ang ngalan sa site nga himoan og logo |
| `style` | string | Yes | Ang estilo sa disenyo (pananglitan, "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | Array sa mga hex color code nga gamiton sa logo (pananglitan, `["#678233", "#ffffff"]`) |
| `width` | number | No | Lapad sa SVG sa pixels (default: 200) |
| `height` | number | No | Taas sa SVG sa pixels (default: 200) |
| `include_text` | boolean | No | Kung iapil ba ang ngalan sa site isip teksto sa logo (default: true) |

## Format sa Output

Ang abilidad mobalik og SVG string nga adunay mosunod nga estruktura:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Kinaiya sa SVG Sanitisation

Ang nahimong mga SVG moagi og awtomatikong namespace-safe nga sanitisation aron:

- **Tangtangon ang dili luwas nga mga attribute** — tangtangon ang event handlers, scripts, ug posibleng delikadong mga attribute
- **Preserbahon ang namespaces** — gipadayon ang SVG namespaces (xmlns, xlink) para sa hustong rendering
- **I-validate ang estruktura** — siguruhon nga ang SVG mosunod sa W3C standards
- **I-encode ang entities** — husto nga i-escape ang espesyal nga mga karakter sa sulod sa teksto
- **Tangtangon ang external references** — tangtangon ang external stylesheets ug image references

Kini nagsiguro nga ang SVG luwas i-embed direkta sa WordPress nga walay panginahanglan og dugang nga sanitisation.

## Pananglitan sa Paggamit

**Prompt:**
```
Paghimo og modern nga logo para sa akong tech startup nga gitawag og "CloudSync" gamit ang asul ug puti nga mga kolor.
```

**Resulta:**
Ang abilidad mohimo og SVG logo nga:
- Naglakip sa ngalan sa site nga "CloudSync"
- Naggamit sa gitakdang asul ug puti nga color scheme
- Mosunod sa modern nga mga prinsipyo sa disenyo
- Awtomatikong gi-sanitise ug andam nang gamiton

## Integrasyon sa Theme Builder

Kung gamiton ang pagpili sa design-direction sa Theme Builder, ang abilidad nga Paghimo og Logo SVG:

1. Moanalisa sa imong design direction ug color palette
2. Mohimo og custom nga SVG logo nga mohaom sa imong mga gusto
3. Awtomatikong i-embed ang logo sa header/branding area sa imong site
4. Itipig ang SVG isip custom nga logo sa WordPress media

## Labing Maayong mga Praktis

- **Paghatag og klarong mga gusto sa estilo** — ihulagway ang estilo sa disenyo nga imong gusto (modern, classic, playful, ug uban pa)
- **Itakda ang mga kolor** — iapil ang imong brand colors para sa consistency
- **Sulayi ang rendering** — siguroha nga husto ang pagpakita sa logo sa lain-laing gidak-on sa screen
- **I-customize pa dugang** — gamita ang mga himan sa logo customization sa WordPress aron i-adjust ang gidak-on ug placement

## Mga Limitasyon

- Ang mga SVG logo gihimo isip static graphics (dili animated)
- Ang komplikadong mga logo nga adunay daghang elemento mahimong manginahanglan og manual refinement
- Dili supported ang custom fonts; ang teksto mogamit og system fonts
- Ang sobra kadako o sobra kagamay nga dimensions mahimong makaapekto sa quality

## May Kalabotang mga Abilidad

- [I-validate ang Palette Contrast](./validate-palette-contrast.md) — susiha ang color contrast para sa accessibility
- [Paghimo og Menu](./create-menu.md) — paghimo og navigation menus para sa imong site
