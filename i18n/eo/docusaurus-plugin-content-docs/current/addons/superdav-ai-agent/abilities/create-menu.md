---
title: Krei menuon
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Krei Menuon

La kapablo **Krei Menuon** kreas WordPress-navigadajn menuojn kun subteno por apartaj navigadaj etikedoj malsamaj de paĝaj titoloj.

## Superrigardo {#overview}

Ĉi tiu kapablo etendas la norman funkciecon por krei menuojn per la eblo specifi parametron `navigation_label`. Tio ebligas al vi krei menuojn kie la etikedo montrata en navigado malsamas de la paĝa titolo, provizante pli da fleksebleco en reteja strukturo kaj uzantosperto.

## Parametroj {#parameters}

| Parametro | Tipo | Bezonata | Priskribo |
|-----------|------|----------|-------------|
| `name` | string | Jes | Menunomo, ekz. `Primary Navigation` |
| `location` | string | Ne | Etosa loko al kiu asigni ĉi tiun menuon, ekz. `primary` |
| `navigation_label` | string | Ne | Etikedo montrenda en navigado (malsama de paĝa titolo) |

## Revena Valoro {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigada Etikedo kontraŭ Paĝa Titolo {#navigation-label-vs-page-title}

La parametro `navigation_label` ebligas al vi apartigi la internan menunomon de la etikedo montrata al uzantoj:

- **`name`** — Interna menu-identigilo uzata de WordPress (ekz., "Ĉefa Navigado")
- **`navigation_label`** — La etikedo montrata al retejaj vizitantoj en la navigado (ekz., "Ĉefa Menuo")

Tio utilas kiam:
- Via interna nomkonvencio malsamas de etikedoj videblaj al uzantoj
- Vi volas pli mallongajn etikedojn en navigado ol en la administra panelo
- Vi bezonas subteni plurajn lingvojn kun malsamaj etikedlongoj
- Vi konstruas menuojn por specifaj regionoj aŭ uzantogrupoj

## Uzaj Ekzemploj {#usage-examples}

### Ekzemplo 1: Simpla Menuo kun Navigada Etikedo {#example-1-simple-menu-with-navigation-label}

**Invito:**
```
Kreu ĉefan navigadan menuon nomatan "Ĉefa Navigado" kun la navigada etikedo "Menuo".
```

**Rezulto:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Ekzemplo 2: Menuo por Specifa Etosa Loko {#example-2-menu-for-specific-theme-location}

**Invito:**
```
Kreu piednotan menuon nomatan "Piednotaj Ligiloj" kun navigada etikedo "Rapidaj Ligiloj" kaj asignu ĝin al la piednota loko.
```

**Rezulto:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrado kun Theme Builder {#integration-with-theme-builder}

Kiam oni uzas Theme Builder, la kapablo Krei Menuon:

1. Aŭtomate detektas disponeblajn etosajn menuolokojn
2. Kreas menuojn kun taŭgaj navigadaj etikedoj por via dezajno
3. Asignas menuojn al la ĝustaj etosaj lokoj
4. Subtenas aldonadon de menueroj post kreado

## Rilataj Kapabloj {#related-abilities}

- **`add_menu_item`** — Aldoni erojn al ekzistanta menuo
- **`update_menu`** — Renomi menuon aŭ reasigni ĝin al etosa loko
- **`delete_menu`** — Forigi menuon de via retejo

## Plej Bonaj Praktikoj {#best-practices}

- **Uzu klarajn navigadajn etikedojn** — tenu etikedojn koncizaj kaj priskribaj por uzantoj
- **Kongruigu etosajn lokojn** — asignu menuojn al la ĝusta etosa loko por taŭga montrado
- **Planu menuan strukturon** — decidu pri via menuhierarkio antaŭ ol krei erojn
- **Testu adapteblecon** — kontrolu, ke menuoj montriĝas ĝuste sur poŝtelefonaj aparatoj
- **Lokigu etikedojn** — uzu malsamajn navigadajn etikedojn por malsamaj lingvoversioj

## Limigoj {#limitations}

- Navigadaj etikedoj estas nur por montrado; la interna `name` ankoraŭ estas uzata por WordPress-identigo
- Etosa subteno varias; ne ĉiuj etosoj subtenas ĉiujn menuolokojn
- Menueroj devas esti aldonitaj aparte post menuokreado
- Ŝanĝi navigadan etikedon postulas ĝisdatigi la menuon

## Rilataj Kapabloj {#related-abilities-1}

- [Generi Logo SVG](./generate-logo-svg.md) — krei emblemojn por la kaplinio de via retejo
- [Validigi Paletran Kontraston](./validate-palette-contrast.md) — certigi alireblajn kolorskemojn
