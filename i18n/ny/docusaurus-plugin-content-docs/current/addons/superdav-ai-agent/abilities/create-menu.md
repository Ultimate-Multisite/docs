---
title: Pangani Menyu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Pangani Menyu {#create-menu}

Kuthekera kwa **Pangani Menyu** kumapanga menyu za navigation za WordPress ndi chithandizo cha zilembo za navigation zosiyana ndi mitu ya masamba.

## Chidule {#overview}

Kuthekera kumeneku kumakulitsa ntchito yokhazikika yopanga menyu ndi kuthekera kofotokoza parameter ya `navigation_label`. Izi zimakulolani kupanga menyu pomwe chilembo chowonetsedwa mu navigation chimasiyana ndi mutu wa tsamba, kupereka kusinthasintha kwakukulu mu kapangidwe ka tsamba ndi zomwe wogwiritsa ntchito amakumana nazo.

## Ma Parameter {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Inde | Dzina la menyu, mwachitsanzo `Primary Navigation` |
| `location` | string | Ayi | Malo a mawonekedwe oti apatsidwe menyu iyi, mwachitsanzo `primary` |
| `navigation_label` | string | Ayi | Chilembo chowonetsedwa mu navigation (chosiyana ndi mutu wa tsamba) |

## Mtengo Wobwerera {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Chilembo cha Navigation motsutsana ndi Mutu wa Tsamba {#navigation-label-vs-page-title}

Parameter ya `navigation_label` imakulolani kulekanitsa dzina la menyu lamkati ndi chilembo chowonetsedwa kwa ogwiritsa ntchito:

- **`name`** — Chizindikiritso chamkati cha menyu chomwe chimagwiritsidwa ntchito ndi WordPress (mwachitsanzo, "Primary Navigation")
- **`navigation_label`** — Chilembo chowonetsedwa kwa alendo a tsamba mu navigation (mwachitsanzo, "Main Menu")

Izi ndi zothandiza pamene:
- Njira yanu yamkati yoperekera mayina imasiyana ndi zilembo zooneka kwa ogwiritsa ntchito
- Mukufuna zilembo zazifupi mu navigation kuposa mu panel ya admin
- Muyenera kuthandizira zilankhulo zingapo zokhala ndi kutalika kosiyanasiyana kwa zilembo
- Mukumanga menyu za madera apadera kapena magulu a ogwiritsa ntchito

## Zitsanzo za Kugwiritsa Ntchito {#usage-examples}

### Chitsanzo 1: Menyu Yosavuta yokhala ndi Chilembo cha Navigation {#example-1-simple-menu-with-navigation-label}

**Pempho:**
```
Pangani menyu ya primary navigation yotchedwa "Main Navigation" yokhala ndi chilembo cha navigation "Menu".
```

**Zotsatira:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Chitsanzo 2: Menyu ya Malo Apadera a Mawonekedwe {#example-2-menu-for-specific-theme-location}

**Pempho:**
```
Pangani menyu ya footer yotchedwa "Footer Links" yokhala ndi chilembo cha navigation "Quick Links" ndipo ipatseni malo a footer.
```

**Zotsatira:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Kulumikizana ndi Theme Builder {#integration-with-theme-builder}

Mukamagwiritsa ntchito Theme Builder, kuthekera kwa Pangani Menyu:

1. Kumazindikira zokha malo a menyu a mawonekedwe omwe alipo
2. Kumapanga menyu zokhala ndi zilembo zoyenera za navigation za kapangidwe kanu
3. Kumapatsa menyu malo olondola a mawonekedwe
4. Kumathandizira kuwonjezera zinthu za menyu mutatha kupanga

## Kuthekera Kogwirizana {#related-abilities}

- **`add_menu_item`** — Onjezani zinthu ku menyu yomwe ilipo
- **`update_menu`** — Sinthani dzina la menyu kapena ipatseninso malo a mawonekedwe
- **`delete_menu`** — Chotsani menyu pa tsamba lanu

## Njira Zabwino {#best-practices}

- **Gwiritsani ntchito zilembo zomveka za navigation** — sungani zilembo kukhala zazifupi komanso zofotokozera kwa ogwiritsa ntchito
- **Fananizani malo a mawonekedwe** — patsani menyu malo olondola a mawonekedwe kuti iwonetsedwe bwino
- **Konzani kapangidwe ka menyu** — sankhani hierarchy ya menyu yanu musanapange zinthu
- **Yesani kuyankha bwino** — tsimikizirani kuti menyu zikuwonetsedwa molondola pa zipangizo zam'manja
- **Sinthani zilembo malinga ndi dera** — gwiritsani ntchito zilembo zosiyanasiyana za navigation pa mitundu yosiyanasiyana ya zilankhulo

## Zolephera {#limitations}

- Zilembo za navigation ndi za kuwonetsa kokha; `name` yamkati imagwiritsidwabe ntchito pozindikiritsa mu WordPress
- Chithandizo cha mawonekedwe chimasiyanasiyana; si mawonekedwe onse omwe amathandizira malo onse a menyu
- Zinthu za menyu ziyenera kuwonjezedwa payokha mutapanga menyu
- Kusintha chilembo cha navigation kumafuna kusintha menyu

## Kuthekera Kogwirizana {#related-abilities-1}

- [Pangani Logo ya SVG](./generate-logo-svg.md) — pangani ma logo a header ya tsamba lanu
- [Tsimikizirani Kusiyana kwa Palette](./validate-palette-contrast.md) — onetsetsani mapangidwe a mitundu ofikirika
