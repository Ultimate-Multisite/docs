---
id: wu_handle_user_meta_fields
title: Акција - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Дозволува на програмерите на plugin да зачувуваат мета-податоци за корисникот на различни начини ако им е потребно.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Листата на мета-полиња, структурирана како key =&gt; value. |
| $user | `\WP_User` | WordPress корисничкиот објект. |
| $customer | `\Customer` | Ultimate Multisite објектот на клиентот. |
| $checkout | `\Checkout` | Класата за наплата. |

### Од верзија {#since}

- 2.0.4
### Извор {#source}

Дефинирано во [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) на линија 1244
