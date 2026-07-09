---
title: Paghimo og Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Paghimo og Menu

Ang abilidad nga **Paghimo og Menu** naghimo og mga menu sa nabigasyon sa WordPress nga adunay suporta para sa lain nga mga label sa nabigasyon nga lahi sa mga titulo sa panid.

## Kinatibuk-ang Tan-aw

Kini nga abilidad nagpalapad sa standard nga gamit sa paghimo og menu pinaagi sa abilidad sa pagtino og `navigation_label` nga parameter. Kini nagtugot kanimo sa paghimo og mga menu diin ang label nga gipakita sa nabigasyon lahi sa titulo sa panid, nga naghatag og mas daghang pagka-flexible sa istruktura sa site ug kasinatian sa user.

## Mga Parameter

| Parameter | Type | Kinahanglan | Deskripsyon |
|-----------|------|----------|-------------|
| `name` | string | Oo | Ngalan sa menu, pananglitan `Primary Navigation` |
| `location` | string | Dili | Lokasyon sa theme nga i-assign niini nga menu, pananglitan `primary` |
| `navigation_label` | string | Dili | Label nga ipakita sa nabigasyon (lahi sa titulo sa panid) |

## Gibalik nga Bili

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Label sa Nabigasyon vs Titulo sa Panid

Ang `navigation_label` nga parameter nagtugot kanimo sa pagbulag sa internal nga ngalan sa menu gikan sa label nga gipakita sa mga user:

- **`name`** — Internal nga identifier sa menu nga gigamit sa WordPress (pananglitan, "Primary Navigation")
- **`navigation_label`** — Ang label nga gipakita sa mga bisita sa site sulod sa nabigasyon (pananglitan, "Main Menu")

Mapuslanon kini kung:
- Ang imong internal nga kombensyon sa pagngalan lahi sa mga label nga makita sa user
- Gusto nimo og mas mugbo nga mga label sa nabigasyon kaysa sa admin panel
- Kinahanglan nimo mosuporta og daghang pinulongan nga adunay lain-laing gitas-on sa label
- Naghimo ka og mga menu para sa piho nga mga rehiyon o mga grupo sa user

## Mga Pananglitan sa Paggamit

### Pananglitan 1: Yano nga Menu nga adunay Label sa Nabigasyon

**Prompt:**
```
Paghimo og primary nga menu sa nabigasyon nga gitawag og "Main Navigation" nga adunay label sa nabigasyon nga "Menu".
```

**Resulta:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Pananglitan 2: Menu para sa Piho nga Lokasyon sa Theme

**Prompt:**
```
Paghimo og footer menu nga gitawag og "Footer Links" nga adunay label sa nabigasyon nga "Quick Links" ug i-assign kini sa lokasyon sa footer.
```

**Resulta:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrasyon sa Theme Builder

Kung mogamit og Theme Builder, ang abilidad nga Paghimo og Menu:

1. Awtomatikong makamatikod sa magamit nga mga lokasyon sa menu sa theme
2. Naghimo og mga menu nga adunay angay nga mga label sa nabigasyon para sa imong disenyo
3. Nag-assign sa mga menu ngadto sa hustong mga lokasyon sa theme
4. Mosuporta sa pagdugang og mga item sa menu human sa paghimo

## May Kalabotang mga Abilidad

- **`add_menu_item`** — Pagdugang og mga item ngadto sa anaa na nga menu
- **`update_menu`** — Ilisan ang ngalan sa menu o i-assign kini pag-usab ngadto sa lokasyon sa theme
- **`delete_menu`** — Kuhaa ang menu gikan sa imong site

## Pinakamaayong mga Pamaagi

- **Gamita ang klaro nga mga label sa nabigasyon** — himoa nga mubo ug deskriptibo ang mga label para sa mga user
- **Itakdo ang mga lokasyon sa theme** — i-assign ang mga menu ngadto sa hustong lokasyon sa theme para sa sakto nga pagpakita
- **Planoha ang istruktura sa menu** — desisyoni ang hierarchy sa imong menu sa wala pa maghimo og mga item
- **Sulayi ang responsiveness** — siguroha nga sakto ang pagpakita sa mga menu sa mobile devices
- **I-localize ang mga label** — gamita ang lain-laing mga label sa nabigasyon para sa lain-laing bersyon sa pinulongan

## Mga Limitasyon

- Ang mga label sa nabigasyon para ra sa pagpakita; ang internal nga `name` gigamit gihapon para sa identipikasyon sa WordPress
- Nagkalain-lain ang suporta sa theme; dili tanan nga themes mosuporta sa tanang lokasyon sa menu
- Ang mga item sa menu kinahanglang idugang nga bulag human sa paghimo sa menu
- Ang pag-usab sa label sa nabigasyon nagkinahanglan og pag-update sa menu

## May Kalabotang mga Abilidad

- [Paghimo og Logo SVG](./generate-logo-svg.md) — paghimo og mga logo para sa header sa imong site
- [Pag-validate sa Contrast sa Palette](./validate-palette-contrast.md) — siguroha ang accessible nga mga scheme sa kolor
