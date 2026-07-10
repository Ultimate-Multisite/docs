---
id: wu_get_checkout_variables
title: Filtar - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filtar: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Omogućuje developerima plugina filtriranje unaprijed postavljenih vrijednosti stranice za naplatu.

Budite oprezni, nedostajući ključevi mogu potpuno pokvariti naplatu na front-endu.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $variables | `array` | Lokalizirane varijable. |
| $checkout | `\Checkout` | Klasa naplate. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) na retku 1970


## Povratna vrijednost {#returns}
Novi niz varijabli.
