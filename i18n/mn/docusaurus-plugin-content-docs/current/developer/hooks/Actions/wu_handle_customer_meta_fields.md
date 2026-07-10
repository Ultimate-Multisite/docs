---
id: wu_handle_customer_meta_fields
title: Үйлдэл - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

plugin хөгжүүлэгчдэд шаардлагатай бол мета өгөгдлийг өөр өөр аргаар хадгалах боломж олгоно.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $meta_repository | `array` | Мета талбаруудын жагсаалт, key =&gt; value бүтэцтэй. |
| $customer | `\Customer` | Ultimate Multisite хэрэглэгчийн объект. |
| $checkout | `\Checkout` | Тооцоо хийх класс. |

### Хойш {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) дотор 1211-р мөрөнд тодорхойлсон
