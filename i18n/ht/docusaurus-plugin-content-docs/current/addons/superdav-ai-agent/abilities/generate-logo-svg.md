---
title: Jenere Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Jenere Logo SVG {#generate-logo-svg}

Kapasite **Generate Logo SVG** la pèmèt Theme Builder kreye epi entegre logo SVG pèsonalize dirèkteman nan sit WordPress ou a ak netwayaj otomatik ki san danje pou namespace.

## Apèsi {#overview}

Kapasite sa a jenere logo grafik vektoryèl ki ka agrandi (SVG) selon direksyon mak sit ou a ak preferans konsepsyon ou yo. SVG yo jenere yo netwaye otomatikman pou asire yo san danje pou itilize nan WordPress pandan yo kenbe entegrite vizyèl yo.

## Paramèt {#parameters}

| Paramèt | Tip | Obligatwa | Deskripsyon |
|-----------|------|----------|-------------|
| `site_name` | string | Wi | Non sit la pou jenere logo a |
| `style` | string | Wi | Stil konsepsyon an (egzanp, "modern", "classic", "minimalist", "playful") |
| `colors` | array | Non | Lis kòd koulè hex pou itilize nan logo a (egzanp, `["#678233", "#ffffff"]`) |
| `width` | number | Non | Lajè SVG an piksèl (default: 200) |
| `height` | number | Non | Wotè SVG an piksèl (default: 200) |
| `include_text` | boolean | Non | Si pou mete non sit la kòm tèks nan logo a (default: true) |

## Fòma Sòti {#output-format}

Kapasite a retounen yon chèn SVG ak estrikti sa a:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Konpòtman Netwayaj SVG {#svg-sanitisation-behaviour}

SVG yo jenere yo sibi netwayaj otomatik ki san danje pou namespace pou:

- **Retire atribi ki pa an sekirite** — retire jere evènman, scripts, ak atribi ki ka danjere
- **Prezève namespaces** — kenbe namespaces SVG (xmlns, xlink) pou rannman kòrèk
- **Valide estrikti** — asire SVG a konfòme ak estanda W3C
- **Kode antite** — chape karaktè espesyal yo kòrèkteman nan kontni tèks
- **Retire referans ekstèn** — retire fèy stil ekstèn ak referans imaj

Sa asire SVG a san danje pou entegre dirèkteman nan WordPress san bezwen netwayaj anplis.

## Egzanp Itilizasyon {#usage-example}

**Prompt:**
```
Jenere yon logo modèn pou startup teknoloji mwen an ki rele "CloudSync" avèk koulè ble ak blan.
```

**Rezilta:**
Kapasite a kreye yon logo SVG ki:
- Enkòpore non sit la "CloudSync"
- Itilize konbinezon koulè ble ak blan yo presize a
- Swiv prensip konsepsyon modèn
- Netwaye otomatikman epi pare pou itilize

## Entegrasyon ak Theme Builder {#integration-with-theme-builder}

Lè w ap itilize seleksyon direksyon konsepsyon Theme Builder a, kapasite Generate Logo SVG la:

1. Analize direksyon konsepsyon ou ak palèt koulè ou
2. Jenere yon logo SVG pèsonalize ki koresponn ak preferans ou yo
3. Entegre logo a otomatikman nan zòn antèt/mak sit ou a
4. Estoke SVG a kòm yon logo pèsonalize nan medya WordPress

## Pi Bon Pratik {#best-practices}

- **Bay preferans stil ki klè** — dekri stil konsepsyon ou vle a (modèn, klasik, amizan, elatriye)
- **Presize koulè** — mete koulè mak ou yo pou konsistans
- **Teste rannman** — verifye logo a parèt kòrèkteman sou diferan gwosè ekran
- **Pèsonalize plis** — itilize zouti pèsonalizasyon logo WordPress yo pou ajiste gwosè ak plasman

## Limitasyon {#limitations}

- Logo SVG yo jenere kòm grafik estatik (pa anime)
- Logo konplèks ak anpil eleman ka bezwen amelyorasyon manyèl
- Polis pèsonalize pa sipòte; tèks itilize polis sistèm
- Dimansyon ki twò gwo oswa twò piti ka afekte kalite

## Kapasite Ki Gen Rapò {#related-abilities}

- [Valide Kontras Palèt](./validate-palette-contrast.md) — verifye kontras koulè pou aksesibilite
- [Kreye Meni](./create-menu.md) — kreye meni navigasyon pou sit ou a
