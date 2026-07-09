---
title: Creu Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Cynhyrchu Logo SVG {#generate-logo-svg}

Mae gallu **Generate Logo SVG** yn caniatáu i Theme Builder greu ac ymgorffori SVGau logo personol yn uniongyrchol yn eich safle WordPress gyda glanweithdra awtomatig sy’n ddiogel o ran namespace.

## Trosolwg {#overview}

Mae’r gallu hwn yn cynhyrchu logos graffeg fector graddadwy (SVG) yn seiliedig ar gyfeiriad brandio a dewisiadau dylunio eich safle. Mae’r SVGau a gynhyrchir yn cael eu glanweithio’n awtomatig i sicrhau eu bod yn ddiogel i’w defnyddio yn WordPress gan gynnal cyfanrwydd gweledol.

## Paramedrau {#parameters}

| Paramedr | Math | Gofynnol | Disgrifiad |
|-----------|------|----------|-------------|
| `site_name` | string | Oes | Enw’r safle y dylid cynhyrchu’r logo ar ei gyfer |
| `style` | string | Oes | Yr arddull dylunio (e.e., "modern", "classic", "minimalist", "playful") |
| `colors` | array | Na | Arae o godau lliw hex i’w defnyddio yn y logo (e.e., `["#678233", "#ffffff"]`) |
| `width` | number | Na | Lled SVG mewn picseli (diofyn: 200) |
| `height` | number | Na | Uchder SVG mewn picseli (diofyn: 200) |
| `include_text` | boolean | Na | A ddylid cynnwys enw’r safle fel testun yn y logo (diofyn: true) |

## Fformat Allbwn {#output-format}

Mae’r gallu yn dychwelyd llinyn SVG gyda’r strwythur canlynol:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Ymddygiad Glanweithdra SVG {#svg-sanitisation-behaviour}

Mae’r SVGau a gynhyrchir yn mynd trwy lanweithdra awtomatig sy’n ddiogel o ran namespace er mwyn:

- **Dileu priodoleddau anniogel** — tynnu trinwyr digwyddiadau, sgriptiau, a phriodoleddau a allai fod yn beryglus
- **Cadw namespaces** — cynnal namespaces SVG (xmlns, xlink) ar gyfer rendro priodol
- **Dilysu strwythur** — sicrhau bod yr SVG yn cydymffurfio â safonau W3C
- **Amgodio endidau** — dianc nodau arbennig yn gywir mewn cynnwys testun
- **Dileu cyfeiriadau allanol** — tynnu dalennau arddull allanol a chyfeiriadau delweddau

Mae hyn yn sicrhau bod yr SVG yn ddiogel i’w ymgorffori’n uniongyrchol yn WordPress heb fod angen glanweithdra ychwanegol.

## Enghraifft Defnydd {#usage-example}

**Anogiad:**
```
Cynhyrchwch logo modern ar gyfer fy nghwmni technoleg newydd o’r enw "CloudSync" gan ddefnyddio lliwiau glas a gwyn.
```

**Canlyniad:**
Mae’r gallu yn creu logo SVG sy’n:
- Ymgorffori enw’r safle "CloudSync"
- Defnyddio’r cynllun lliwiau glas a gwyn a bennwyd
- Dilyn egwyddorion dylunio modern
- Wedi’i lanweithio’n awtomatig ac yn barod i’w ddefnyddio

## Integreiddio â Theme Builder {#integration-with-theme-builder}

Wrth ddefnyddio dewis cyfeiriad dylunio Theme Builder, mae gallu Generate Logo SVG yn:

1. Dadansoddi eich cyfeiriad dylunio a’ch palet lliwiau
2. Cynhyrchu logo SVG personol sy’n cyfateb i’ch dewisiadau
3. Ymgorffori’r logo yn awtomatig yn ardal pennyn/brandio eich safle
4. Storio’r SVG fel logo personol yng nghyfryngau WordPress

## Arferion Gorau {#best-practices}

- **Darparu dewisiadau arddull clir** — disgrifiwch yr arddull dylunio rydych ei heisiau (modern, classic, playful, ac ati)
- **Pennu lliwiau** — cynnwys lliwiau eich brand er mwyn cysondeb
- **Profi rendro** — gwirio bod y logo yn ymddangos yn gywir ar draws gwahanol feintiau sgrin
- **Addasu ymhellach** — defnyddio offer addasu logo WordPress i addasu maint a lleoliad

## Cyfyngiadau {#limitations}

- Cynhyrchir logos SVG fel graffeg statig (nid animeiddiedig)
- Gall logos cymhleth â llawer o elfennau fod angen mireinio â llaw
- Nid yw ffontiau personol yn cael eu cefnogi; mae testun yn defnyddio ffontiau system
- Gall dimensiynau mawr iawn neu fach iawn effeithio ar ansawdd

## Galluoedd Cysylltiedig {#related-abilities}

- [Dilysu Cyferbyniad Palet](./validate-palette-contrast.md) — gwirio cyferbyniad lliw ar gyfer hygyrchedd
- [Creu Dewislen](./create-menu.md) — creu dewislenni llywio ar gyfer eich safle
