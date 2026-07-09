---
id: wu_bypass_checkout_form
title: Filtru - wu_bypass_checkout_form
sidebar_label: wu_bypass_checkout_form
_i18n_hash: ad57eddbc5463e999d4896a31ed368a3
---
# Filter: wu_bypass_checkout_form {#filter-wubypasscheckoutform}

Acest filtru permite dezvoltatorilor să contourăm ieșirea standard a formularului de checkout și să o înlocuiască cu un conținut personalizat.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $bypass | `string\|bool` | Dacă trebuie să contourăm formularul de checkout sau o șir de caractere pe care să îl returnăm în locul formularului. |
| $atts | `array` | Parametrii blocului/shortcode-ului de checkout. |

### Sursă {#source}

Definit în [`inc/ui/class-checkout-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-checkout-element.php#L327) la linia 327
