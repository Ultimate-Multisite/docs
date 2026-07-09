---
title: Gumawa ng Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Gumawa ng Menu

Ang kakayahang **Gumawa ng Menu** ay gumagawa ng mga navigation menu ng WordPress na may suporta para sa magkakaibang navigation label na hiwalay sa mga pamagat ng pahina.

## Pangkalahatang-ideya

Pinapalawak ng kakayahang ito ang karaniwang functionality sa paggawa ng menu sa pamamagitan ng kakayahang tumukoy ng parameter na `navigation_label`. Pinapayagan ka nitong gumawa ng mga menu kung saan ang label na ipinapakita sa nabigasyon ay naiiba sa pamagat ng pahina, na nagbibigay ng higit na flexibility sa istruktura ng site at karanasan ng user.

## Mga Parameter

| Parameter | Uri | Kinakailangan | Paglalarawan |
|-----------|------|----------|-------------|
| `name` | string | Oo | Pangalan ng menu, hal. `Primary Navigation` |
| `location` | string | Hindi | Lokasyon ng theme na pagtatalagahan ng menu na ito, hal. `primary` |
| `navigation_label` | string | Hindi | Label na ipapakita sa nabigasyon (naiiba sa pamagat ng pahina) |

## Halaga ng Pagbabalik

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigation Label kumpara sa Pamagat ng Pahina

Pinapayagan ka ng parameter na `navigation_label` na paghiwalayin ang panloob na pangalan ng menu mula sa label na ipinapakita sa mga user:

- **`name`** — Panloob na identifier ng menu na ginagamit ng WordPress (hal., "Primary Navigation")
- **`navigation_label`** — Ang label na ipinapakita sa mga bisita ng site sa nabigasyon (hal., "Main Menu")

Kapaki-pakinabang ito kapag:
- Naiiba ang iyong panloob na kumbensyon sa pagpapangalan mula sa mga label na nakikita ng user
- Gusto mo ng mas maiikling label sa nabigasyon kaysa sa admin panel
- Kailangan mong suportahan ang maraming wika na may magkakaibang haba ng label
- Gumagawa ka ng mga menu para sa partikular na mga rehiyon o pangkat ng user

## Mga Halimbawa ng Paggamit

### Halimbawa 1: Simpleng Menu na may Navigation Label

**Prompt:**
```
Gumawa ng pangunahing navigation menu na tinatawag na "Main Navigation" na may navigation label na "Menu".
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

### Halimbawa 2: Menu para sa Partikular na Lokasyon ng Theme

**Prompt:**
```
Gumawa ng footer menu na tinatawag na "Footer Links" na may navigation label na "Quick Links" at italaga ito sa lokasyon ng footer.
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

Kapag ginagamit ang Theme Builder, ang kakayahang Gumawa ng Menu ay:

1. Awtomatikong nade-detect ang mga available na lokasyon ng menu ng theme
2. Gumagawa ng mga menu na may angkop na mga navigation label para sa iyong disenyo
3. Itinatalaga ang mga menu sa tamang mga lokasyon ng theme
4. Sumusuporta sa pagdaragdag ng mga item ng menu pagkatapos gawin

## Mga Kaugnay na Kakayahan

- **`add_menu_item`** — Magdagdag ng mga item sa umiiral na menu
- **`update_menu`** — Palitan ang pangalan ng menu o italaga muli ito sa lokasyon ng theme
- **`delete_menu`** — Alisin ang menu mula sa iyong site

## Pinakamahuhusay na Gawi

- **Gumamit ng malinaw na mga navigation label** — panatilihing maikli at naglalarawan ang mga label para sa mga user
- **Itugma ang mga lokasyon ng theme** — italaga ang mga menu sa tamang lokasyon ng theme para sa wastong pagpapakita
- **Planuhin ang istruktura ng menu** — magpasya sa hierarchy ng iyong menu bago gumawa ng mga item
- **Subukan ang pagiging responsive** — tiyaking tama ang pagpapakita ng mga menu sa mga mobile device
- **I-localize ang mga label** — gumamit ng magkakaibang navigation label para sa magkakaibang bersyon ng wika

## Mga Limitasyon

- Pang-display lang ang mga navigation label; ginagamit pa rin ang panloob na `name` para sa pagkakakilanlan ng WordPress
- Nag-iiba ang suporta ng theme; hindi lahat ng theme ay sumusuporta sa lahat ng lokasyon ng menu
- Kailangang idagdag nang hiwalay ang mga item ng menu pagkatapos gawin ang menu
- Ang pagpapalit ng navigation label ay nangangailangan ng pag-update sa menu

## Mga Kaugnay na Kakayahan

- [Bumuo ng Logo SVG](./generate-logo-svg.md) — gumawa ng mga logo para sa header ng iyong site
- [I-validate ang Contrast ng Palette](./validate-palette-contrast.md) — tiyakin ang mga accessible na scheme ng kulay
