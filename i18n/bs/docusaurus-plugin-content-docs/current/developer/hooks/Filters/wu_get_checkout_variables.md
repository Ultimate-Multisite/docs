---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Omogućava programerima pluginova da filtriraju unaprijed postavljene (pre-sets) varijable stranice za naplatu (checkout).

Budite oprezni, nedostajući ključevi mogu potpuno pokvariti proces naplate na prednjoj strani (front-end).

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Lokalizovane varijable. |
| $checkout | `\Checkout` | Klasa za naplatu (checkout). |

### Since {#since}

- 2.0.0
### Source {#source}

Definisano u [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) na liniji 1970


## Returns {#returns}
Nova varijable (array) sa filtriranim podacima.
