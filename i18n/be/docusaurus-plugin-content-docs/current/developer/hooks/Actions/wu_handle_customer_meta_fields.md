---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Дазваляе раробнікам плагінаў захаваць метададзеныя рознымі спосабамі, калі гэта неабходна.

## Параметры {#parameters}

| Назва | Тып | Опіс |
|------|------|-------------|
| $meta_repository | `array` | Спіс метапаляў, структураваны як ключ => значэнне. |
| $customer | `\Customer` | Объект кліента Ultimate Multisite. |
| $checkout | `\Checkout` | Клас выкалікі (checkout). |

### З версіі {#since}

- 2.0.0
### Вынік {#source}

Вызначаны ў [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) на 1211-й паўніне.
