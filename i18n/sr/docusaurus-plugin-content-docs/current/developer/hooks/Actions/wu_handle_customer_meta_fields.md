---
id: wu_handle_customer_meta_fields
title: Акција - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Радња: wu_handle_customer_meta_fields

Омогућава програмерима plugin-а да сачувају мета податке на различите начине ако им је то потребно.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $meta_repository | `array` | Листа мета поља, структурисана као key =&gt; value. |
| $customer | `\Customer` | Објекат купца Ultimate Multisite. |
| $checkout | `\Checkout` | Класа checkout-а. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) у реду 1211
