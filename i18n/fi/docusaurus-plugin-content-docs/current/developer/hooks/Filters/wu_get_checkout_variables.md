---
id: wu_get_checkout_variables
title: Suodatin - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Suodatin: wu_get_checkout_variables

Salli plugin-kehittäjien suodattaa kassasivun esiasetuksia.

Ole varovainen, puuttuvat avaimet voivat rikkoa front-endin kassan kokonaan.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $variables | `array` | Lokalisoidut muuttujat. |
| $checkout | `\Checkout` | Kassaluokka. |

### Alkaen

- 2.0.0
### Lähde

Määritelty tiedostossa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) rivillä 1970


## Palauttaa
Uusi muuttujataulukko.
