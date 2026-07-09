---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Umožňuje vývojárom pluginov filtrovať prednastavenia stránky checkout.

Buďte opatrní, chýbajúce kľúče môžu úplne pokaziť checkout na front-ende.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $variables | `array` | Lokalizované premenné. |
| $checkout | `\Checkout` | Trieda checkout. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) na riadku 1970


## Návratová hodnota {#returns}
Nové pole premenných.
