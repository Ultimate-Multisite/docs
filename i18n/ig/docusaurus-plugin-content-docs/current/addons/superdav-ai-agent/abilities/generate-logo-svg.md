---
title: Mepụta akara ngosi SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Mepụta Akara Njirimara SVG

Ikike **Mepụta Akara Njirimara SVG** na-enye Theme Builder ohere ịmepụta ma tinye akara njirimara SVG ahaziri ahazi ozugbo n'ime saịtị WordPress gị, yana nhicha akpaka dị nchebe maka namespace.

## Nchịkọta {#overview}

Ikike a na-emepụta akara njirimara scalable vector graphics (SVG) dabere na ntụziaka branding nke saịtị gị na mmasị imewe gị. A na-ehicha SVG ndị emepụtara na-akpaghị aka iji hụ na ha dị nchebe maka iji na WordPress ma ka na-edobe ịdị mma anya ha.

## Parameters {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Ee | Aha saịtị a ga-emepụtara akara njirimara |
| `style` | string | Ee | Ụdị imewe (dịka, "modern", "classic", "minimalist", "playful") |
| `colors` | array | Mba | Array nke koodu agba hex a ga-eji na akara njirimara (dịka, `["#678233", "#ffffff"]`) |
| `width` | number | Mba | Obosara SVG na pixels (ndabara: 200) |
| `height` | number | Mba | Ogologo SVG na pixels (ndabara: 200) |
| `include_text` | boolean | Mba | Ma a ga-etinye aha saịtị dị ka ederede n'ime akara njirimara (ndabara: true) |

## Ụdị Mmepụta {#output-format}

Ikike a na-eweghachi eriri SVG nwere usoro ndị a:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Omume Nhicha SVG {#svg-sanitisation-behaviour}

SVG ndị emepụtara na-agafe nhicha akpaka dị nchebe maka namespace iji:

- **Wepụ attributes na-adịghị nchebe** — na-ewepụ event handlers, scripts, na attributes nwere ike ịdị ize ndụ
- **Chekwaa namespaces** — na-edobe SVG namespaces (xmlns, xlink) maka rendering kwesịrị ekwesị
- **Nyochaa usoro** — na-eme ka SVG kwekọọ na ụkpụrụ W3C
- **Tinye entities n'ụdị encode** — na-agbanahụ mkpụrụedemede pụrụ iche nke ọma n'ime ọdịnaya ederede
- **Wepụ njikọ mpụga** — na-ewepụ stylesheets mpụga na ntụaka onyonyo

Nke a na-eme ka SVG dị nchebe itinye ozugbo na WordPress na-enweghị ịchọ nhicha ọzọ.

## Ihe Nlereanya Ojiji {#usage-example}

**Prompt:**
```
Mepụta akara njirimara ọgbara ọhụrụ maka tech startup m a na-akpọ "CloudSync" site n'iji agba anụnụ anụnụ na ọcha.
```

**Nsonaazụ:**
Ikike a na-emepụta akara njirimara SVG nke:
- Na-etinye aha saịtị "CloudSync"
- Na-eji atụmatụ agba anụnụ anụnụ na ọcha akọwapụtara
- Na-eso ụkpụrụ imewe ọgbara ọhụrụ
- E hichara ya na-akpaghị aka ma dị njikere iji

## Njikọ na Theme Builder {#integration-with-theme-builder}

Mgbe ị na-eji nhọrọ ntụziaka imewe nke Theme Builder, ikike Mepụta Akara Njirimara SVG:

1. Na-enyocha ntụziaka imewe gị na palette agba gị
2. Na-emepụta akara njirimara SVG ahaziri ahazi nke kwekọrọ na mmasị gị
3. Na-etinye akara njirimara ahụ na-akpaghị aka n'ime mpaghara header/branding nke saịtị gị
4. Na-echekwa SVG dị ka akara njirimara ahaziri ahazi na media WordPress

## Omume Kachasị Mma {#best-practices}

- **Nye mmasị ụdị doro anya** — kọwaa ụdị imewe ị chọrọ (ọgbara ọhụrụ, kpochapụwo, egwuri egwu, wdg.)
- **Kọwaa agba** — tinye agba brand gị maka ịdị n'otu
- **Nwalee rendering** — nyochaa na akara njirimara na-egosi nke ọma n'ogo ihuenyo dị iche iche
- **Haziekwuo** — jiri ngwaọrụ nhazi akara njirimara nke WordPress iji dozie nha na ebe etinyere ya

## Ihe Mmachibido {#limitations}

- A na-emepụta akara njirimara SVG dị ka eserese static (ọ bụghị animated)
- Akara njirimara mgbagwoju anya nwere ọtụtụ ihe nwere ike ịchọ ndozi aka
- A naghị akwado fonts ahaziri ahazi; ederede na-eji fonts sistemụ
- Nha buru oke ibu ma ọ bụ pere mpe nke ukwuu nwere ike imetụta ịdị mma

## Ikike Ndị Metụtara Ya {#related-abilities}

- [Nyochaa Contrast Palette](./validate-palette-contrast.md) — lelee contrast agba maka accessibility
- [Mepụta Menu](./create-menu.md) — mepụta menus navigation maka saịtị gị
