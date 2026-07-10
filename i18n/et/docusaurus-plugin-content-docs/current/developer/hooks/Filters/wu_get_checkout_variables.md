---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Võimaldab plugin arendajatel filtreerida checkout lehe eelseadistusi.

Olge ettevaatlik, puuduvad võtmed võivad front-endis checkouti täielikult katki teha.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $variables | `array` | Lokaliseeritud muutujad. |
| $checkout | `\Checkout` | checkouti klass. |

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) real 1970


## Tagastab {#returns}
Uus muutujate massiiv.
