---
title: Logotip SVG döret
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Logo SVG döretmek {#generate-logo-svg}

**Logo SVG döretmek** başarnygy Theme Builder-e awtomatik namespace-howpsuz arassalama bilen ýörite logo SVG-lerini göni WordPress saýtyňyza döretmäge we ýerleşdirmäge mümkinçilik berýär.

## Umumy syn {#overview}

Bu başarnyk saýtyňyzyň brending ugruna we dizaýn isleglerine esaslanyp, ulaldylyp-kiçeldilip bolýan wektor grafika (SVG) logolaryny döredýär. Döredilen SVG-ler WordPress-de ulanmak üçin howpsuzdygyny üpjün etmek maksady bilen awtomatik arassalanýar, şol bir wagtyň özünde wizual bitewilik saklanýar.

## Parametrler {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Hawa | Logo dörediljek saýtyň ady |
| `style` | string | Hawa | Dizaýn stili (meselem, "modern", "classic", "minimalist", "playful") |
| `colors` | array | Ýok | Logoda ulanmak üçin hex reňk kodlarynyň toplumy (meselem, `["#678233", "#ffffff"]`) |
| `width` | number | Ýok | SVG giňligi pikselde (deslapky: 200) |
| `height` | number | Ýok | SVG beýikligi pikselde (deslapky: 200) |
| `include_text` | boolean | Ýok | Saýtyň adyny logoda tekst hökmünde goşmalymy (deslapky: true) |

## Çykyş formaty {#output-format}

Bu başarnyk aşakdaky gurluşly SVG setirini gaýtarýar:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG arassalama özüni alyp barşy {#svg-sanitisation-behaviour}

Döredilen SVG-ler aşakdakylar üçin awtomatik namespace-howpsuz arassalamadan geçýär:

- **Howpsuz däl atributlary aýyrmak** — hadysa dolandyryjylaryny, skriptleri we potensial howply atributlary aýyrýar
- **Namespace-leri saklamak** — dogry görkezmek üçin SVG namespace-lerini (xmlns, xlink) saklaýar
- **Gurluşy barlamak** — SVG-niň W3C standartlaryna laýyk gelýändigini üpjün edýär
- **Entity-leri kodlamak** — tekst mazmunyndaky ýörite nyşanlary dogry gaçyrýar
- **Daşarky salgylanmalary aýyrmak** — daşarky stil sahypalaryny we surat salgylanmalaryny aýyrýar

Bu, goşmaça arassalama talap etmezden SVG-ni göni WordPress içine ýerleşdirmek üçin howpsuz edýär.

## Ulanyş mysaly {#usage-example}

**Prompt:**
```
"CloudSync" atly tehnologiýa startup-ym üçin gök we ak reňkleri ulanyp, döwrebap logo döret.
```

**Netije:**
Bu başarnyk aşakdakylary ýerine ýetirýän SVG logo döredýär:
- "CloudSync" saýtyň adyny öz içine alýar
- Görkezilen gök we ak reňk shemasyny ulanýar
- Döwrebap dizaýn ýörelgelerine eýerýär
- Awtomatik arassalanýar we ulanmaga taýýar bolýar

## Theme Builder bilen integrasiýa {#integration-with-theme-builder}

Theme Builder-iň dizaýn-ugur saýlawyny ulananyňyzda, Logo SVG döretmek başarnygy:

1. Dizaýn ugruňyzy we reňk palitraňyzy seljerýär
2. Islegleriňize laýyk ýörite SVG logo döredýär
3. Logony awtomatik ýagdaýda saýtyňyzyň header/brending meýdanyna ýerleşdirýär
4. SVG-ni WordPress media-da ýörite logo hökmünde saklaýar

## Iň gowy tejribeler {#best-practices}

- **Aýdyň stil isleglerini beriň** — isleýän dizaýn stiliňizi beýan ediň (döwrebap, klassiki, oýnaşyk we ş.m.)
- **Reňkleri görkeziň** — yzygiderlilik üçin brand reňkleriňizi goşuň
- **Görkezilişini synap görüň** — logonyň dürli ekran ölçeglerinde dogry görkezilýändigini barlaň
- **Has-da sazlaň** — ölçegini we ýerleşişini sazlamak üçin WordPress-iň logo sazlama gurallaryny ulanyň

## Çäklendirmeler {#limitations}

- SVG logolar statik grafika hökmünde döredilýär (animasiýa däl)
- Köp elementli çylşyrymly logolar elde kämilleşdirmegi talap edip biler
- Ýörite şriftler goldanylmaýar; tekst ulgam şriftlerini ulanýar
- Örän uly ýa-da örän kiçi ölçegler hiline täsir edip biler

## Baglanyşykly başarnyklar {#related-abilities}

- [Palitra kontrastyny barlamak](./validate-palette-contrast.md) — elýeterlilik üçin reňk kontrastyny barlaň
- [Menýu döretmek](./create-menu.md) — saýtyňyz üçin nawigasiýa menýularyny dörediň
