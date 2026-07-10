---
title: Gumawa ng Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Gumawa ng Menu {#create-menu}

Ang kakayahang **Gumawa ng Menu** ay lumilikha ng mga navigation menu sa WordPress, na may suporta para sa mga label ng navigation na hiwalay sa mga pamagat ng page.

## Pangkalahatang Ideya (Overview) {#overview}

Pinalalawak ng kakayahang ito ang standard na paggawa ng menu sa pamamagitan ng pagbibigay-daan na magtakda ng `navigation_label` parameter. Pinapayagan ka nitong gumawa ng mga menu kung saan ang label na ipinapakita sa navigation ay iba sa pamagat ng page, na nagbibigay ng mas malaking flexibility sa istraktura ng site at sa karanasan ng user.

## Mga Parameter (Parameters) {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Pangalan ng menu, halimbawa: `Primary Navigation` |
| `location` | string | No | Theme location na pagkakakabit ng menu, halimbawa: `primary` |
| `navigation_label` | string | No | Label na ipapakita sa navigation (iba sa page title) |

## Return Value {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigation Label vs Page Title {#navigation-label-vs-page-title}

Ang `navigation_label` parameter ay nagpapahintulot sa iyo na paghiwalayin ang internal menu name mula sa label na ipinapakita sa mga user:

- **`name`** — Internal menu identifier na ginagamit ng WordPress (hal., "Primary Navigation")
- **`navigation_label`** — Ang label na ipinapakita sa mga bisita ng site sa navigation (hal., "Main Menu")

Ito ay kapaki-pakinabang kapag:
- Ang internal naming convention mo ay iba sa mga label na nakikita ng user
- Gusto mo ng mas maikling label sa navigation kaysa sa nasa admin panel
- Kailangan mong suportahan ang maraming wika na may iba't ibang haba ng label
- Gumagawa ka ng mga menu para sa mga tiyak na rehiyon o grupo ng user

## Mga Halimbawa ng Paggamit (Usage Examples) {#usage-examples}

### Halimbawa 1: Simpleng Menu na may Navigation Label {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Halimbawa 2: Menu para sa Tiyak na Theme Location {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrasyon sa Theme Builder {#integration-with-theme-builder}

Kapag gumagamit ng Theme Builder, ang Create Menu ability ay:

1. Awtomatikong nakakakita ng mga available na theme menu locations
2. Lumilikha ng mga menu na may angkop na navigation labels para sa iyong disenyo
3. Nagkakabit ng mga menu sa tamang theme locations
4. Sumusuporta sa pagdaragdag ng mga menu item pagkatapos ng paglikha

## Kaugnay na Abilities (Related Abilities) {#related-abilities}

- **`add_menu_item`** — Magdagdag ng mga item sa isang umiiral na menu
- **`update_menu`** — Palitan ang pangalan ng menu o muling ikabit ito sa isang theme location
- **`delete_menu`** — Tanggalin ang isang menu mula sa iyong site

## Mga Best Practices (Best Practices) {#best-practices}

- **Gumamit ng malinaw na navigation labels** — panatilihing maikli at deskriptibo ang mga label para sa mga user
- **Itugma ang theme locations** — i-assign ang mga menu sa tamang theme location para sa maayos na pagpapakita
- **Planuhin ang menu structure** — magdesisyon muna sa hierarchy ng menu bago gumawa ng mga item
- **Subukan ang responsiveness** — i-verify na tama ang pagpapakita ng menu sa mga mobile device
- **I-localize ang labels** — gumamit ng iba't ibang navigation labels para sa iba't ibang bersyon ng wika

## Limitasyon (Limitations) {#limitations}

- Ang navigation labels ay para lamang sa pagpapakita; ang internal `name` pa rin ang ginagamit para sa pagkilala ng WordPress
- Nag-iiba-iba ang suporta ng theme; hindi lahat ng theme ay sumusuporta sa lahat ng menu locations
- Ang mga menu item ay kailangang idagdag nang hiwalay pagkatapos ng paglikha ng menu
- Ang pagbabago ng navigation label ay nangangailangan ng pag-update sa menu

## Kaugnay na Abilities (Related Abilities) {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — gumawa ng mga logo para sa header ng iyong site
- [Validate Palette Contrast](./validate-palette-contrast.md) — tiyakin ang accessible color schemes
