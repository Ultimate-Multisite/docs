---
title: Hanga Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Kora Menu

Ubushobozi bwa **Kora Menu** bukora menu zo kuyobora za WordPress, bushyigikira labels zo kuyobora zitandukanye n’imitwe y’amapaji.

## Incamake {#overview}

Ubu bushobozi bwagura imikorere isanzwe yo gukora menu, bukongeramo ubushobozi bwo kugaragaza parameter ya `navigation_label`. Ibi bigufasha gukora menu aho label igaragara mu kuyobora itandukanye n’umutwe w’ipaji, bikaguha ubworoherane bwinshi mu miterere y’urubuga no mu bunararibonye bw’umukoresha.

## Parameters {#parameters}

| Parameter | Ubwoko | Birakenewe | Ibisobanuro |
|-----------|------|----------|-------------|
| `name` | string | Yego | Izina rya menu, urugero `Primary Navigation` |
| `location` | string | Oya | Ahantu ha theme ho kugenera iyi menu, urugero `primary` |
| `navigation_label` | string | Oya | Label yo kugaragaza mu kuyobora (itandukanye n’umutwe w’ipaji) |

## Agaciro Gasubizwa {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Label yo Kuyobora vs Umutwe w’Ipaji {#navigation-label-vs-page-title}

Parameter ya `navigation_label` igufasha gutandukanya izina rya menu rikoreshwa imbere na label igaragarizwa abakoresha:

- **`name`** — Ikiranga menu gikoreshwa imbere na WordPress (urugero, "Kuyobora kw’Ibanze")
- **`navigation_label`** — Label igaragarizwa abasura urubuga mu kuyobora (urugero, "Menu Nkuru")

Ibi ni ingirakamaro iyo:
- Uburyo bwawe bwo kwita amazina imbere butandukanye na labels zigaragarira abakoresha
- Ushaka labels ngufi mu kuyobora kurusha izo mu mwanya w’ubuyobozi
- Ukeneye gushyigikira indimi nyinshi zifite uburebure bwa labels butandukanye
- Urimo kubaka menu zigenewe uturere cyangwa amatsinda y’abakoresha yihariye

## Ingero z’Imikoreshereze {#usage-examples}

### Urugero 1: Menu Yoroshye ifite Label yo Kuyobora {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Kora menu yo kuyobora y’ibanze yitwa "Kuyobora Nyamukuru" ifite label yo kuyobora "Menu".
```

**Igisubizo:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Urugero 2: Menu y’Ahantu ha Theme Hihariye {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Kora menu yo ku mpera yitwa "Amakuru yo ku Mpera" ifite label yo kuyobora "Amahuza Yihuse" kandi uyigene ahantu ho ku mpera.
```

**Igisubizo:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Kwihuza na Theme Builder {#integration-with-theme-builder}

Iyo ukoresha Theme Builder, ubushobozi bwa Kora Menu:

1. Butahura mu buryo bwikora ahantu ha menu za theme haboneka
2. Bukora menu zifite labels zo kuyobora zibereye design yawe
3. Bugenera menu ahantu ha theme hakwiye
4. Bushyigikira kongeramo ibintu bya menu nyuma yo kuyikora

## Ubushobozi Bifitanye Isano {#related-abilities}

- **`add_menu_item`** — Ongeramo ibintu muri menu isanzwe
- **`update_menu`** — Hindura izina rya menu cyangwa uyigene ahandi hantu ha theme
- **`delete_menu`** — Kura menu ku rubuga rwawe

## Imikorere Myiza {#best-practices}

- **Koresha labels zo kuyobora zisobanutse** — komeza labels zibe ngufi kandi zisobanure neza ku bakoresha
- **Huza ahantu ha theme** — genenera menu ahantu ha theme hakwiye kugira ngo igaragare neza
- **Tegura imiterere ya menu** — fata icyemezo ku nzego za menu yawe mbere yo gukora ibintu biyigize
- **Gerageza uko yitwara ku bikoresho bitandukanye** — genzura ko menu zigaragara neza ku bikoresho bigendanwa
- **Hindura labels ku ndimi** — koresha labels zo kuyobora zitandukanye ku mavugurura y’indimi zitandukanye

## Imipaka {#limitations}

- Labels zo kuyobora ni izo kugaragaza gusa; `name` ikoreshwa imbere iracyakoreshwa mu kumenya menu muri WordPress
- Ubufasha bwa theme buratandukanye; si theme zose zishyigikira ahantu hose ha menu
- Ibintu bya menu bigomba kongerwamo ukwabyo nyuma yo gukora menu
- Guhindura label yo kuyobora bisaba kuvugurura menu

## Ubushobozi Bifitanye Isano {#related-abilities-1}

- [Kora Logo SVG](./generate-logo-svg.md) — kora logos zo ku mutwe w’urubuga rwawe
- [Emeza Itandukaniro rya Palette](./validate-palette-contrast.md) — menya neza ko gahunda z’amabara zigerwaho n’abantu bose
