---
title: Cruthaich clàr-taice
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Cruthaich Clàr-taice

Cruthaichidh comas **Cruthaich Clàr-taice** clàran-taice seòlaidh WordPress le taic do leubailean seòlaidh sònraichte a tha air leth bho thiotalan dhuilleagan.

## Sealladh farsaing {#overview}

Leudaichidh an comas seo gnìomhachd àbhaisteach cruthachadh chlàran-taice leis a’ chomas paramadair `navigation_label` a shònrachadh. Leigidh seo leat clàran-taice a chruthachadh far a bheil an leubail a chithear san t-seòladh eadar-dhealaichte bho thiotal na duilleige, a’ toirt barrachd sùbailteachd ann an structar na làraich agus eòlas an neach-cleachdaidh.

## Paramadairean {#parameters}

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|-----------|------|----------|-------------|
| `name` | string | Tha | Ainm a’ chlàir-taice, m.e. `Primary Navigation` |
| `location` | string | Chan eil | Suidheachadh a’ theme ris an tèid an clàr-taice seo a shònrachadh, m.e. `primary` |
| `navigation_label` | string | Chan eil | Leubail ri shealltainn san t-seòladh (eadar-dhealaichte bho thiotal na duilleige) |

## Luach Tilleadh {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Leubail Seòlaidh an aghaidh Tiotal Duilleige {#navigation-label-vs-page-title}

Leigidh am paramadair `navigation_label` leat ainm a-staigh a’ chlàir-taice a sgaradh bhon leubail a chithear do luchd-cleachdaidh:

- **`name`** — Aithnichear clàir-taice a-staigh a chleachdas WordPress (m.e., "Primary Navigation")
- **`navigation_label`** — An leubail a chithear do luchd-tadhail na làraich san t-seòladh (m.e., "Main Menu")

Tha seo feumail nuair a tha:
- An gnàth-ainmeachaidh a-staigh agad eadar-dhealaichte bho leubailean a chì luchd-cleachdaidh
- Tha thu ag iarraidh leubailean nas giorra san t-seòladh na tha sa phannal rianachd
- Feumaidh tu taic a thoirt do dh’iomadh cànan le faid leubail eadar-dhealaichte
- Tha thu a’ togail chlàran-taice airson roinnean sònraichte no buidhnean luchd-cleachdaidh

## Eisimpleirean Cleachdaidh {#usage-examples}

### Eisimpleir 1: Clàr-taice sìmplidh le Leubail Seòlaidh {#example-1-simple-menu-with-navigation-label}

**Brosnachadh:**
```
Cruthaich clàr-taice prìomh sheòlaidh leis an ainm "Main Navigation" agus leis an leubail seòlaidh "Menu".
```

**Toradh:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Eisimpleir 2: Clàr-taice airson Suidheachadh Theme Sònraichte {#example-2-menu-for-specific-theme-location}

**Brosnachadh:**
```
Cruthaich clàr-taice footer leis an ainm "Footer Links" agus leis an leubail seòlaidh "Quick Links", agus sònraich e don t-suidheachadh footer.
```

**Toradh:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Amalachadh le Theme Builder {#integration-with-theme-builder}

Nuair a bhios tu a’ cleachdadh Theme Builder, bidh comas Cruthaich Clàr-taice:

1. A’ lorg suidheachaidhean clàir-taice theme a tha rim faighinn gu fèin-obrachail
2. A’ cruthachadh chlàran-taice le leubailean seòlaidh freagarrach airson an dealbhadh agad
3. A’ sònrachadh chlàran-taice do na suidheachaidhean theme ceart
4. A’ toirt taic do chur nithean clàir-taice ris às dèidh an cruthachaidh

## Comasan Co-cheangailte {#related-abilities}

- **`add_menu_item`** — Cuir nithean ri clàr-taice a tha ann mu thràth
- **`update_menu`** — Ath-ainmich clàr-taice no sònraich e a-rithist do shuidheachadh theme
- **`delete_menu`** — Thoir clàr-taice air falbh bhon làrach agad

## Cleachdaidhean as Fheàrr {#best-practices}

- **Cleachd leubailean seòlaidh soilleir** — cùm leubailean pongail agus tuairisgeulach do luchd-cleachdaidh
- **Maids suidheachaidhean theme** — sònraich clàran-taice don t-suidheachadh theme cheart airson taisbeanadh ceart
- **Dealbhaich structar a’ chlàir-taice** — co-dhùin rangachd a’ chlàir-taice agad mus cruthaich thu nithean
- **Dèan deuchainn air freagairteachd** — dearbhaich gu bheil clàran-taice gan taisbeanadh gu ceart air uidheaman-làimhe
- **Ionadaich leubailean** — cleachd leubailean seòlaidh eadar-dhealaichte airson tionndaidhean cànain eadar-dhealaichte

## Cuingeachaidhean {#limitations}

- Tha leubailean seòlaidh airson taisbeanadh a-mhàin; tha an `name` a-staigh fhathast ga chleachdadh airson aithneachadh WordPress
- Bidh taic theme ag atharrachadh; chan eil a h-uile theme a’ toirt taic do gach suidheachadh clàir-taice
- Feumar nithean clàir-taice a chur ris air leth às dèidh cruthachadh a’ chlàir-taice
- Feumaidh atharrachadh leubail seòlaidh ùrachadh a’ chlàir-taice

## Comasan Co-cheangailte {#related-abilities-1}

- [Gin Logo SVG](./generate-logo-svg.md) — cruthaich logo airson bann-cinn na làraich agad
- [Dearbhaich Iomsgaradh Palette](./validate-palette-contrast.md) — dèan cinnteach gu bheil sgeamaichean dhathan ruigsinneach
