---
title: Gin SVG Lógó
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Gin Logo SVG {#generate-logo-svg}

Ligeann an cumas **Gin Logo SVG** do Theme Builder SVGanna lógó saincheaptha a chruthú agus a leabú go díreach i do shuíomh WordPress le glanadh uathoibríoch atá sábháilte ó thaobh ainmspáis de.

## Forbhreathnú {#overview}

Gineann an cumas seo lógónna grafaicí veicteora inscálaithe (SVG) bunaithe ar threo brandála agus roghanna dearaidh do shuímh. Déantar na SVGanna ginte a ghlanadh go huathoibríoch lena chinntiú go bhfuil siad sábháilte le húsáid in WordPress agus sláine amhairc á coinneáil acu.

## Paraiméadair {#parameters}

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|-----------|------|----------|-------------|
| `site_name` | string | Tá | Ainm an tsuímh ar cheart an lógó a ghiniúint dó |
| `style` | string | Tá | An stíl dearaidh (m.sh., "modern", "classic", "minimalist", "playful") |
| `colors` | array | Níl | Eagar de chóid dathanna heics le húsáid sa lógó (m.sh., `["#678233", "#ffffff"]`) |
| `width` | number | Níl | Leithead SVG i bpicteilíní (réamhshocrú: 200) |
| `height` | number | Níl | Airde SVG i bpicteilíní (réamhshocrú: 200) |
| `include_text` | boolean | Níl | Cé acu ainm an tsuímh a chur san áireamh mar théacs sa lógó nó gan é a chur (réamhshocrú: true) |

## Formáid Aschuir {#output-format}

Filleann an cumas teaghrán SVG leis an struchtúr seo a leanas:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Iompar Glanta SVG {#svg-sanitisation-behaviour}

Téann na SVGanna ginte trí ghlanadh uathoibríoch atá sábháilte ó thaobh ainmspáis de chun:

- **Tréithe neamhshábháilte a bhaint** — baineann sé láimhseálaithe imeachtaí, scripteanna, agus tréithe a d’fhéadfadh a bheith contúirteach
- **Ainmspásanna a chaomhnú** — coinníonn sé ainmspásanna SVG (xmlns, xlink) le haghaidh rindreála chuí
- **Struchtúr a bhailíochtú** — cinntíonn sé go gcomhlíonann an SVG caighdeáin W3C
- **Aonáin a ionchódú** — éalaíonn sé carachtair speisialta i gceart in ábhar téacs
- **Tagairtí seachtracha a bhaint** — baineann sé stílbhileoga seachtracha agus tagairtí íomhá

Cinntíonn sé seo go bhfuil an SVG sábháilte le leabú go díreach in WordPress gan gá le glanadh breise.

## Sampla Úsáide {#usage-example}

**Leid:**
```
Gin lógó nua-aimseartha do mo ghnólacht nuathionscanta teicneolaíochta darb ainm "CloudSync" agus dathanna gorma agus bána á n-úsáid.
```

**Toradh:**
Cruthaíonn an cumas lógó SVG a:
- Ionchorpraíonn ainm an tsuímh "CloudSync"
- Úsáideann an scéim dathanna gorm agus bán atá sonraithe
- Leanann prionsabail dearaidh nua-aimseartha
- Déantar é a ghlanadh go huathoibríoch agus tá sé réidh le húsáid

## Comhtháthú le Theme Builder {#integration-with-theme-builder}

Agus roghnú treo dearaidh Theme Builder á úsáid, déanann an cumas Gin Logo SVG:

1. Anailís ar do threo dearaidh agus ar do phailéad dathanna
2. Gineann sé lógó SVG saincheaptha a oireann do do roghanna
3. Leabaíonn sé an lógó go huathoibríoch i gceantar ceanntáisc/brandála do shuímh
4. Stórálann sé an SVG mar lógó saincheaptha i meáin WordPress

## Dea-Chleachtais {#best-practices}

- **Tabhair roghanna soiléire stíle** — déan cur síos ar an stíl dearaidh atá uait (nua-aimseartha, clasaiceach, spraíúil, srl.)
- **Sonraigh dathanna** — cuir dathanna do bhranda san áireamh ar mhaithe le comhsheasmhacht
- **Tástáil an rindreáil** — deimhnigh go dtaispeántar an lógó i gceart thar mhéideanna éagsúla scáileáin
- **Saincheap tuilleadh** — úsáid uirlisí saincheaptha lógó WordPress chun méid agus suíomh a choigeartú

## Teorainneacha {#limitations}

- Gintear lógónna SVG mar ghrafaicí statacha (ní beoite)
- D’fhéadfadh lógónna casta le go leor eilimintí mionchoigeartú láimhe a éileamh
- Ní thacaítear le clónna saincheaptha; úsáideann téacs clónna córais
- D’fhéadfadh toisí an-mhóra nó an-bheaga tionchar a imirt ar cháilíocht

## Cumais Ghaolmhara {#related-abilities}

- [Bailíochtaigh Codarsnacht Pailéid](./validate-palette-contrast.md) — seiceáil codarsnacht dathanna ar mhaithe le hinrochtaineacht
- [Cruthaigh Roghchlár](./create-menu.md) — cruthaigh roghchláir nascleanúna do do shuíomh
