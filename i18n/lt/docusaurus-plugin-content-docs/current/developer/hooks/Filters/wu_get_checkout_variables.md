---
id: wu_get_checkout_variables
title: Filtras – wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filtras: wu_get_checkout_variables

Leidžia plugin kūrėjams filtruoti checkout puslapio iš anksto nustatytas reikšmes.

Būkite atsargūs, trūkstami raktai gali visiškai sugadinti checkout veikimą front-end pusėje.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $variables | `array` | Lokalizuoti kintamieji. |
| $checkout | `\Checkout` | Checkout klasė. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) 1970 eilutėje


## Grąžina {#returns}
Naują kintamųjų masyvą.
