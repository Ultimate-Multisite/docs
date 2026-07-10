---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Giv plugin-udviklere mulighed for at filtrere forhåndsindstillingerne for en checkout-side.

Vær forsigtig, manglende nøgler kan ødelægge checkout fuldstændigt på front-end.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $variables | `array` | Lokaliserede variabler. |
| $checkout | `\Checkout` | Checkout-klassen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) på linje 1970


## Returnerer {#returns}
Det nye variable-array.
