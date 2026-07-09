---
title: Cruthaich SVG suaicheantais
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Cruthaich Suaicheantas SVG

Leigidh comas **Cruthaich Suaicheantas SVG** le Theme Builder suaicheantasan SVG gnàthaichte a chruthachadh agus a neadachadh gu dìreach san làrach WordPress agad le glanadh fèin-obrachail a tha sàbhailte a thaobh namespace.

## Sealladh farsaing

Cruthaichidh an comas seo suaicheantasan grafaigean veactair so-sgèilichte (SVG) stèidhichte air stiùireadh branndaidh na làraich agad agus na roghainnean dealbhaidh agad. Thèid na SVGs a thèid a chruthachadh a ghlanadh gu fèin-obrachail gus dèanamh cinnteach gu bheil iad sàbhailte airson an cleachdadh ann an WordPress agus iomlanachd lèirsinneach air a cumail suas.

## Paramadairean

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|-----------|------|----------|-------------|
| `site_name` | string | Tha | Ainm na làraich airson a bheil an suaicheantas ri chruthachadh |
| `style` | string | Tha | Stoidhle an dealbhaidh (m.e., "ùr-nòsach", "clasaigeach", "as lugha", "spòrsail") |
| `colors` | array | Chan eil | Array de chòdan datha hex ri chleachdadh san t-suaicheantas (m.e., `["#678233", "#ffffff"]`) |
| `width` | number | Chan eil | Leud SVG ann am piogsail (bunaiteach: 200) |
| `height` | number | Chan eil | Àirde SVG ann am piogsail (bunaiteach: 200) |
| `include_text` | boolean | Chan eil | Am bu chòir ainm na làraich a ghabhail a-steach mar theacsa san t-suaicheantas (bunaiteach: true) |

## Fòrmat an toraidh

Tillidh an comas sreang SVG leis an structar a leanas:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Giùlan glanaidh SVG

Thèid na SVGs a thèid a chruthachadh tro ghlanadh fèin-obrachail a tha sàbhailte a thaobh namespace gus:

- **Buadhan mì-shàbhailte a thoirt air falbh** — bheir e air falbh event handlers, scripts, agus buadhan a dh’fhaodadh a bhith cunnartach
- **Namespaces a ghleidheadh** — cumaidh e namespaces SVG (xmlns, xlink) airson renderadh ceart
- **Structar a dhearbhadh** — nì e cinnteach gu bheil an SVG a’ gèilleadh ri inbhean W3C
- **Eintiteasan a chòdachadh** — teichidh e caractaran sònraichte gu ceart ann an susbaint teacsa
- **Iomraidhean taobh a-muigh a thoirt air falbh** — bheir e air falbh stylesheets taobh a-muigh agus iomraidhean ìomhaigh

Nì seo cinnteach gu bheil an SVG sàbhailte ri neadachadh gu dìreach ann an WordPress gun ghlanadh a bharrachd a bhith a dhìth.

## Eisimpleir cleachdaidh

**Prompt:**
```
Cruthaich suaicheantas ùr-nòsach airson mo startup teicneòlais ris an canar "CloudSync" a’ cleachdadh dathan gorm is geal.
```

**Toradh:**
Cruthaichidh an comas suaicheantas SVG a tha:
- A’ gabhail a-steach ainm na làraich "CloudSync"
- A’ cleachdadh an sgeama dhathan ghorm is gheal a chaidh a shònrachadh
- A’ leantainn phrionnsapalan dealbhaidh ùr-nòsaich
- Air a ghlanadh gu fèin-obrachail agus deiseil ri chleachdadh

## Amalachadh le Theme Builder

Nuair a thathar a’ cleachdadh taghadh stiùireadh-dealbhaidh Theme Builder, nì comas Cruthaich Suaicheantas SVG:

1. Mion-sgrùdadh air do stiùireadh dealbhaidh agus pailead dhathan
2. Cruthachadh suaicheantas SVG gnàthaichte a fhreagras air na roghainnean agad
3. Neadachadh an t-suaicheantais gu fèin-obrachail ann an raon bann-cinn/branndaidh na làraich agad
4. Stòradh an SVG mar shuaicheantas gnàthaichte ann am meadhanan WordPress

## Cleachdaidhean as fheàrr

- **Thoir seachad roghainnean stoidhle soilleir** — thoir cunntas air an stoidhle dealbhaidh a tha thu ag iarraidh (ùr-nòsach, clasaigeach, spòrsail, msaa.)
- **Sònraich dathan** — gabh a-steach dathan do bhrand airson cunbhalachd
- **Dèan deuchainn air renderadh** — dearbhaich gu bheil an suaicheantas a’ nochdadh gu ceart thar diofar mheudan sgrìn
- **Gnàthaich nas fhaide** — cleachd innealan gnàthachaidh suaicheantais WordPress gus meud agus suidheachadh atharrachadh

## Cuingeachaidhean

- Thèid suaicheantasan SVG a chruthachadh mar ghrafaigean statach (chan eil iad beòthaichte)
- Dh’fhaodadh suaicheantasan iom-fhillte le mòran eileamaidean leasachadh làimhe iarraidh
- Chan eil cruthan-clò gnàthaichte taiceil; cleachdaidh teacsa cruthan-clò an t-siostaim
- Dh’fhaodadh tomhasan glè mhòra no glè bheaga buaidh a thoirt air càileachd

## Comasan co-cheangailte

- [Dearbhaich iomsgaradh paileid](./validate-palette-contrast.md) — thoir sùil air iomsgaradh dhathan airson ruigsinneachd
- [Cruthaich clàr-taice](./create-menu.md) — cruthaich clàran-seòlaidh airson na làraich agad
