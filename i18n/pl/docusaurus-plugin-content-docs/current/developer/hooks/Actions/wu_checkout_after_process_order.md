---
id: wu_checkout_after_process_order
title: Action - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Akcja: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

Pozwala deweloperom wywołać dodatkowe akcje (hooks).

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $checkout | `\Checkout` | Instancja obiektu checkout. |
| $cart | `\Cart` | Instancja koszyka checkout. |

### Od wersji {#since}

- 2.0.9
### Źródło {#source}

Zdefiniowane w [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) w linii 1013
