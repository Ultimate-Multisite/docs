---
title: Abuur Liis
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Abuur Menu {#create-menu}

Awoodda **Abuur Menu** waxay abuurtaa menu-yada hagidda ee WordPress iyadoo taageeraysa calaamado hagid oo ka duwan cinwaannada bogagga.

## Guudmar {#overview}

Awooddani waxay ballaarisaa shaqeynta caadiga ah ee abuurista menu iyadoo lagu darayo awoodda lagu cayimi karo parameter-ka `navigation_label`. Tani waxay kuu oggolaanaysaa inaad abuurto menu-yo halka calaamadda lagu muujiyo hagiddu ay ka duwan tahay cinwaanka bogga, taasoo siinaysa dabacsanaan badan qaab-dhismeedka site-ka iyo khibradda isticmaalaha.

## Parameters {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Haa | Magaca menu-ga, tusaale `Primary Navigation` |
| `location` | string | Maya | Goobta theme-ka ee menu-gan loo qoondeynayo, tusaale `primary` |
| `navigation_label` | string | Maya | Calaamadda lagu muujinayo hagidda (ka duwan cinwaanka bogga) |

## Qiimaha Soo Noqoshada {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Calaamadda Hagidda vs Cinwaanka Bogga {#navigation-label-vs-page-title}

Parameter-ka `navigation_label` wuxuu kuu oggolaanayaa inaad kala saarto magaca menu-ga gudaha iyo calaamadda loo muujiyo isticmaalayaasha:

- **`name`** — Aqoonsiga menu-ga gudaha ee WordPress isticmaasho (tusaale, "Primary Navigation")
- **`navigation_label`** — Calaamadda loo muujiyo booqdayaasha site-ka ee hagidda (tusaale, "Main Menu")

Tani waxay faa'iido leedahay marka:
- Habkaaga magac-bixinta gudaha uu ka duwan yahay calaamadaha ay isticmaalayaashu arkaan
- Aad rabto calaamado ka gaaban hagidda marka loo eego admin panel-ka
- Aad u baahan tahay inaad taageerto luqado badan oo leh dherer calaamadeed oo kala duwan
- Aad u dhisayso menu-yo loogu talagalay gobollo ama kooxo isticmaale oo gaar ah

## Tusaalooyinka Isticmaalka {#usage-examples}

### Tusaale 1: Menu Fudud oo leh Calaamad Hagid {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Abuur menu hagid aasaasi ah oo la yiraahdo "Main Navigation" oo leh calaamadda hagidda "Menu".
```

**Natiijo:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Tusaale 2: Menu loogu talagalay Goob Theme Gaar ah {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Abuur menu footer ah oo la yiraahdo "Footer Links" oo leh calaamadda hagidda "Quick Links" kuna qoondee goobta footer-ka.
```

**Natiijo:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## La-qabsiga Theme Builder {#integration-with-theme-builder}

Marka la isticmaalayo Theme Builder, awoodda Abuur Menu waxay:

1. Si otomaatig ah u ogaataa goobaha menu-ga theme-ka ee la heli karo
2. Abuurtaa menu-yo leh calaamado hagid oo ku habboon naqshaddaada
3. U qoondeysaa menu-yada goobaha theme-ka ee saxda ah
4. Taageertaa ku darista walxaha menu-ga kadib abuurista

## Awoodaha La Xiriira {#related-abilities}

- **`add_menu_item`** — Ku dar walxo menu jira
- **`update_menu`** — Dib u magacow menu ama dib ugu qoondee goob theme
- **`delete_menu`** — Ka saar menu site-kaaga

## Hababka Ugu Fiican {#best-practices}

- **Isticmaal calaamado hagid oo cad** — calaamadaha ka dhig kooban oo sharraxaad leh isticmaalayaasha
- **La jaanqaad goobaha theme-ka** — menu-yada u qoondee goobta theme-ka ee saxda ah si si habboon loo muujiyo
- **Qorshee qaab-dhismeedka menu-ga** — go'aami kala-sarraynta menu-gaaga ka hor intaadan abuurin walxo
- **Tijaabi la-qabsiga shaashadaha** — xaqiiji in menu-yadu si sax ah uga muuqdaan aaladaha moobaylka
- **Deegaanee calaamadaha** — isticmaal calaamado hagid oo kala duwan noocyada luqadaha kala duwan

## Xaddidaadaha {#limitations}

- Calaamadaha hagiddu waa muujin-kaliya; `name`-ka gudaha weli waxaa loo isticmaalaa aqoonsiga WordPress
- Taageerada theme-ku way kala duwan tahay; dhammaan theme-yadu ma taageeraan dhammaan goobaha menu-ga
- Walxaha menu-ga waa in si gooni ah loogu daraa kadib abuurista menu-ga
- Beddelidda calaamadda hagidda waxay u baahan tahay cusboonaysiinta menu-ga

## Awoodaha La Xiriira {#related-abilities-1}

- [Soo saar Logo SVG](./generate-logo-svg.md) — u abuur logos header-ka site-kaaga
- [Xaqiiji Isbarbardhigga Palette-ka](./validate-palette-contrast.md) — hubi qorshayaal midab oo la heli karo
