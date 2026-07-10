---
title: Gadzira Menyu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Gadzira Menyu {#create-menu}

Kugona kwe **Gadzira Menyu** kunogadzira menyu dzekufambisa dzeWordPress dzine rutsigiro rwemazita ekufambisa akasiyana nemisoro yemapeji.

## Pfupiso {#overview}

Kugona uku kunowedzera mashandiro akajairika ekugadzira menyu nekugona kutsanangura parameter ye `navigation_label`. Izvi zvinokutendera kugadzira menyu uko zita rinoratidzwa mukufambisa rakasiyana nemusoro wepeji, zvichipa kusanduka kukuru muchimiro chesaiti uye ruzivo rwemushandisi.

## Maparameter {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Zita remenyu, semuenzaniso `Primary Navigation` |
| `location` | string | No | Nzvimbo ye theme yekupa menyu iyi, semuenzaniso `primary` |
| `navigation_label` | string | No | Zita rinoratidzwa mukufambisa (rakasiyana nemusoro wepeji) |

## Kukosha Kunodzoserwa {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Zita Rekufambisa vs Musoro Wepeji {#navigation-label-vs-page-title}

Parameter ye `navigation_label` inokutendera kupatsanura zita remenyu remukati kubva pazita rinoratidzwa kuvashandisi:

- **`name`** — Chiratidzo chemukati chemenyu chinoshandiswa neWordPress (semuenzaniso, "Primary Navigation")
- **`navigation_label`** — Zita rinoratidzwa kuvashanyi vesaiti mukufambisa (semuenzaniso, "Main Menu")

Izvi zvinobatsira kana:
- Maitiro ako emukati ekutumidza mazita akasiyana nemazita anoonekwa nevashandisi
- Uchida mazita mapfupi mukufambisa kupfuura ari mu admin panel
- Uchida kutsigira mitauro yakawanda ine kureba kwemazita kwakasiyana
- Uri kuvaka menyu dzematunhu chaiwo kana mapoka evashandisi

## Mienzaniso Yekushandisa {#usage-examples}

### Muenzaniso 1: Menyu Yakapusa ine Zita Rekufambisa {#example-1-simple-menu-with-navigation-label}

**Chikumbiro:**
```
Gadzira primary navigation menu inonzi "Main Navigation" ine navigation label "Menu".
```

**Mhedzisiro:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Muenzaniso 2: Menyu yeNzvimbo yeTheme Yakati {#example-2-menu-for-specific-theme-location}

**Chikumbiro:**
```
Gadzira footer menu inonzi "Footer Links" ine navigation label "Quick Links" woipa kunzvimbo ye footer.
```

**Mhedzisiro:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Kubatanidzwa neTheme Builder {#integration-with-theme-builder}

Paunenge uchishandisa Theme Builder, kugona kweGadzira Menyu:

1. Kunozvionera otomatiki nzvimbo dzemenyu dze theme dziripo
2. Kunogadzira menyu dzine mazita ekufambisa akakodzera dhizaini yako
3. Kunopa menyu kunzvimbo dze theme dzakarurama
4. Kunotsigira kuwedzera zvinhu zvemumenyu mushure mekugadzirwa

## Kugona Kwakabatana {#related-abilities}

- **`add_menu_item`** — Wedzera zvinhu kumenyu iripo
- **`update_menu`** — Tumidza menyu zita patsva kana kuipa zvakare kunzvimbo ye theme
- **`delete_menu`** — Bvisa menyu kubva pasaiti yako

## Maitiro Akanakisisa {#best-practices}

- **Shandisa mazita ekufambisa akajeka** — chengeta mazita ari mapfupi uye achitsanangura kuvashandisi
- **Fananidza nzvimbo dze theme** — ipa menyu kunzvimbo ye theme yakarurama kuti iratidzwe zvakanaka
- **Ronga chimiro chemenyu** — sarudza nhanho dzemenyu yako usati wagadzira zvinhu
- **Edza kupindura kwezviratidziro** — simbisa kuti menyu dzinoratidzwa zvakanaka pamidziyo yenhare
- **Shandura mazita zvinoenderana nemutauro** — shandisa mazita ekufambisa akasiyana kune mavhezheni emitauro akasiyana

## Zvipingamupinyi {#limitations}

- Mazita ekufambisa ndeekuratidza chete; `name` yemukati ichiri kushandiswa pakuzivikanwa neWordPress
- Rutsigiro rwe theme runosiyana; haasi ma theme ese anotsigira nzvimbo dzese dzemenyu
- Zvinhu zvemumenyu zvinofanira kuwedzerwa zvakasiyana mushure mekugadzirwa kwemenyu
- Kuchinja zita rekufambisa kunoda kugadzirisa menyu

## Kugona Kwakabatana {#related-abilities-1}

- [Gadzira Logo SVG](./generate-logo-svg.md) — gadzira logo yemusoro wesaiti yako
- [Simbisa Musiyano wePalette](./validate-palette-contrast.md) — iva nechokwadi chezvirongwa zvemavara zvinowanikwa nyore
