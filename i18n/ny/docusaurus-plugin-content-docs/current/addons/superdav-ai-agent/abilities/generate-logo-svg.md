---
title: Pangani SVG ya chizindikiro
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Panga Logo SVG {#generate-logo-svg}

Luso la **Panga Logo SVG** limalola Theme Builder kupanga ndi kuyika ma logo a SVG okonzedwa mwapadera mwachindunji mu site yanu ya WordPress ndi kuyeretsa kodzichitira kokha kotetezeka pa namespace.

## Chidule {#overview}

Luso ili limapanga ma logo a scalable vector graphics (SVG) kutengera njira ya branding ya site yanu ndi zokonda za kapangidwe. Ma SVG opangidwa amayeretsedwa zokha kuti atsimikizire kuti ndi otetezeka kugwiritsidwa ntchito mu WordPress pomwe akusunga kukongola kwake.

## Ma parameter {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Inde | Dzina la site yomwe ikupangiridwa logo |
| `style` | string | Inde | Mtundu wa kapangidwe (mwachitsanzo, "modern", "classic", "minimalist", "playful") |
| `colors` | array | Ayi | Mndandanda wa ma code a mitundu ya hex oti agwiritsidwe ntchito mu logo (mwachitsanzo, `["#678233", "#ffffff"]`) |
| `width` | number | Ayi | M'lifupi mwa SVG mu pixels (default: 200) |
| `height` | number | Ayi | Kutalika kwa SVG mu pixels (default: 200) |
| `include_text` | boolean | Ayi | Kaya muphatikize dzina la site ngati mawu mu logo (default: true) |

## Mtundu wa zotuluka {#output-format}

Luso limabwezera chingwe cha SVG chokhala ndi kapangidwe kotsatiraku:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Khalidwe la kuyeretsa SVG {#svg-sanitisation-behaviour}

Ma SVG opangidwa amadutsa kuyeretsa kodzichitira kokha kotetezeka pa namespace kuti:

- **Kuchotsa ma attribute osatetezeka** — kumachotsa event handlers, scripts, ndi ma attribute omwe angakhale owopsa
- **Kusunga ma namespace** — kumasunga ma namespace a SVG (xmlns, xlink) kuti ziwonetsedwe bwino
- **Kutsimikizira kapangidwe** — kumatsimikizira kuti SVG ikutsatira miyezo ya W3C
- **Kusandutsa entities** — kumathawa bwino zilembo zapadera zomwe zili m'mawu
- **Kuchotsa ma reference akunja** — kumachotsa external stylesheets ndi ma reference a zithunzi

Izi zimatsimikizira kuti SVG ndi yotetezeka kuyikidwa mwachindunji mu WordPress popanda kufunika kwa kuyeretsa kwina.

## Chitsanzo cha kagwiritsidwe {#usage-example}

**Prompt:**
```
Panga logo ya modern ya tech startup yanga yotchedwa "CloudSync" pogwiritsa ntchito mitundu ya blue ndi white.
```

**Zotsatira:**
Luso limapanga logo ya SVG yomwe:
- Imaphatikiza dzina la site "CloudSync"
- Imagwiritsa ntchito dongosolo la mitundu ya blue ndi white lomwe latchulidwa
- Imatsatira mfundo za kapangidwe ka modern
- Imayeretsedwa zokha ndipo yakonzeka kugwiritsidwa ntchito

## Kuphatikizana ndi Theme Builder {#integration-with-theme-builder}

Mukamagwiritsa ntchito kusankha njira ya kapangidwe ya Theme Builder, luso la Panga Logo SVG:

1. Limasanthula njira yanu ya kapangidwe ndi color palette
2. Limapanga logo ya SVG yokonzedwa mwapadera yogwirizana ndi zokonda zanu
3. Limayika logo yokhayo mu header/branding area ya site yanu
4. Limasunga SVG ngati logo yokonzedwa mwapadera mu media ya WordPress

## Njira zabwino {#best-practices}

- **Perekani zokonda za style zomveka bwino** — fotokozani mtundu wa kapangidwe omwe mukufuna (modern, classic, playful, ndi zina zotero)
- **Tchulani mitundu** — phatikizani mitundu ya brand yanu kuti pakhale kufanana
- **Yesani kuwonetsedwa** — tsimikizirani kuti logo ikuwoneka bwino pa kukula kosiyanasiyana kwa ma screen
- **Sinthani zambiri** — gwiritsani ntchito zida zosinthira logo za WordPress kuti musinthe kukula ndi malo ake

## Malire {#limitations}

- Ma logo a SVG amapangidwa ngati zithunzi zokhazikika (osati animated)
- Ma logo ovuta okhala ndi zinthu zambiri angafunike kukonzedwanso pamanja
- Ma font okonzedwa mwapadera sathandizidwa; mawu amagwiritsa ntchito ma font a system
- Miyeso yayikulu kwambiri kapena yaying'ono kwambiri ingakhudze khalidwe

## Maluso ogwirizana {#related-abilities}

- [Tsimikizani Kusiyana kwa Palette](./validate-palette-contrast.md) — fufuzani kusiyana kwa mitundu kuti izipezeka mosavuta
- [Panga Menu](./create-menu.md) — panga ma menu oyendera a site yanu
