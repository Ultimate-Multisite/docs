---
id: wu_bypass_checkout_form
title: Filter - wu_bypass_checkout_form
sidebar_label: wu_bypass_checkout_form
_i18n_hash: ad57eddbc5463e999d4896a31ed368a3
---
# Filter: wu_bypass_checkout_form

Omogućava programerima da zaobiđu standardni izlaz i da ga zamijene nečim drugim.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $bypass | `string\|bool` | Ako treba zaobići formular za plaćanje ili string koji treba vratiti umjesto samog formulara. |
| $atts | `array` | Parametri bloka/shortcode-a za plaćanje. |

### Izvorište {#source}

Definisano je u [`inc/ui/class-checkout-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-checkout-element.php#L327) na liniji 327.
