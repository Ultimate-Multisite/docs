---
id: wu_checkout_form_base_domains
title: Filter - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Filtreerib jagatud checkout-vormi baasdomeene, millest ei tohiks saada kaardistatud domeeni kirjeid.

Kasuta seda filtrit, kui integratsioon pakub checkout-vormi **Saidi URL** väljade jaoks täiendavaid baasdomeene. Selle filtri tagastatud domeene käsitletakse jagatud registreerimishostidena, mitte iga saidi kohandatud domeenidena.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $domains | `array` | Checkout-vormi konfiguratsioonist kogutud jagatud baasdomeenid. |

### Alates {#since}

- 2.13.0

### Allikas {#source}

Määratletud failis `inc/functions/domain.php`.


## Tagastab {#returns}

Normaliseeritud checkout-vormi baasdomeenide massiiv.
