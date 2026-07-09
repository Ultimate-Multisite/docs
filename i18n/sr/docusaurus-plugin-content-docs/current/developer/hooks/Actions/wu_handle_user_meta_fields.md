---
id: wu_handle_user_meta_fields
title: Радња - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Радња: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Омогућава програмерима plugin-а да сачувају мета податке корисника на различите начине ако им је то потребно.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $meta_repository | `array` | Листа мета поља, структурисана као key =&gt; value. |
| $user | `\WP_User` | WordPress објекат корисника. |
| $customer | `\Customer` | Ultimate Multisite објекат клијента. |
| $checkout | `\Checkout` | checkout класа. |

### Од верзије {#since}

- 2.0.4
### Извор {#source}

Дефинисано у [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) у реду 1244
