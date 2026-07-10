---
title: Sortu menua
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Sortu menua {#create-menu}

**Sortu menua** gaitasunak WordPress nabigazio-menuak sortzen ditu, orri-izenburuetatik bereizitako nabigazio-etiketetarako euskarriarekin.

## Ikuspegi orokorra {#overview}

Gaitasun honek menuak sortzeko funtzionalitate estandarra hedatzen du, `navigation_label` parametroa zehazteko aukerarekin. Horri esker, nabigazioan bistaratzen den etiketa orriaren izenburutik desberdina den menuak sor ditzakezu, gunearen egituran eta erabiltzaile-esperientzian malgutasun handiagoa eskainiz.

## Parametroak {#parameters}

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|-----------|------|----------|-------------|
| `name` | string | Bai | Menuaren izena, adib. `Primary Navigation` |
| `location` | string | Ez | Menu hau esleitzeko gaiaren kokapena, adib. `primary` |
| `navigation_label` | string | Ez | Nabigazioan bistaratzeko etiketa (orriaren izenburutik bereizia) |

## Itzulera-balioa {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Nabigazio-etiketa vs orriaren izenburua {#navigation-label-vs-page-title}

`navigation_label` parametroak barneko menuaren izena erabiltzaileei bistaratzen zaien etiketatik bereizteko aukera ematen dizu:

- **`name`** — WordPress-ek erabiltzen duen barneko menu-identifikatzailea (adib., "Primary Navigation")
- **`navigation_label`** — Guneko bisitariei nabigazioan bistaratzen zaien etiketa (adib., "Main Menu")

Hau erabilgarria da honako kasuetan:
- Zure barneko izendapen-konbentzioa erabiltzaileei erakusten zaizkien etiketetatik desberdina denean
- Nabigazioan admin panelean baino etiketa laburragoak nahi dituzunean
- Etiketa-luzera desberdinak dituzten hizkuntza anitz onartu behar dituzunean
- Eskualde edo erabiltzaile-talde jakinetarako menuak eraikitzen ari zarenean

## Erabilera-adibideak {#usage-examples}

### 1. adibidea: menu sinplea nabigazio-etiketarekin {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Sortu "Main Navigation" izeneko nabigazio-menu nagusi bat, "Menu" nabigazio-etiketarekin.
```

**Emaitza:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### 2. adibidea: gaiaren kokapen jakin baterako menua {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Sortu "Footer Links" izeneko oin-orriko menu bat, "Quick Links" nabigazio-etiketarekin, eta esleitu oin-orriko kokapenari.
```

**Emaitza:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Theme Builder-ekin integrazioa {#integration-with-theme-builder}

Theme Builder erabiltzean, Sortu menua gaitasunak:

1. Eskuragarri dauden gaiaren menu-kokapenak automatikoki detektatzen ditu
2. Zure diseinurako nabigazio-etiketa egokiak dituzten menuak sortzen ditu
3. Menuak gaiaren kokapen zuzenetara esleitzen ditu
4. Sortu ondoren menu-elementuak gehitzea onartzen du

## Lotutako gaitasunak {#related-abilities}

- **`add_menu_item`** — Gehitu elementuak lehendik dagoen menu bati
- **`update_menu`** — Aldatu menu baten izena edo berriro esleitu gaiaren kokapen bati
- **`delete_menu`** — Kendu menu bat zure gunetik

## Jardunbide egokiak {#best-practices}

- **Erabili nabigazio-etiketa argiak** — mantendu etiketak laburrak eta erabiltzaileentzat deskribatzaileak
- **Bat etorri gaiaren kokapenekin** — esleitu menuak gaiaren kokapen zuzenari behar bezala bistaratzeko
- **Planifikatu menuaren egitura** — erabaki zure menu-hierarkia elementuak sortu aurretik
- **Probatu moldagarritasuna** — egiaztatu menuak gailu mugikorretan behar bezala bistaratzen direla
- **Lokalizatu etiketak** — erabili nabigazio-etiketa desberdinak hizkuntza-bertsio desberdinetarako

## Mugak {#limitations}

- Nabigazio-etiketak bistaratzeko soilik dira; barneko `name` oraindik erabiltzen da WordPress identifikaziorako
- Gaiaren euskarria aldakorra da; gai guztiek ez dituzte menu-kokapen guztiak onartzen
- Menu-elementuak bereiz gehitu behar dira menua sortu ondoren
- Nabigazio-etiketa bat aldatzeko menua eguneratu behar da

## Lotutako gaitasunak {#related-abilities-1}

- [Sortu logo SVG](./generate-logo-svg.md) — sortu logoak zure gunearen goibururako
- [Baliozkotu paletaren kontrastea](./validate-palette-contrast.md) — ziurtatu kolore-eskema irisgarriak daudela
