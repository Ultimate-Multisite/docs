---
id: wu_handle_user_meta_fields
title: Action - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Låter pluginutvecklare spara användarmetadata på olika sätt om de behöver.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $meta_repository | `array` | En lista över metadatafält, strukturerad som nyckel => värde. |
| $user | `\WP_User` | WordPress-användarobjektet. |
| $customer | `\Customer` | Ultimate Multisite kundobjektet. |
| $checkout | `\Checkout` | Checkout-klassen. |

### Sedan {#since}

- 2.0.4
### Källa {#source}

Definieras i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) på rad 1244
