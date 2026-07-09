---
id: wu_maybe_create_customer
title: Үйлдэл - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Үйлдэл: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Үйлчлүүлэгч нэмэгдэх үед plugin хөгжүүлэгчдэд нэмэлт зүйлс хийх боломж олгоно.

Жишээлбэл, энд бид customer-&gt;user-ийг үндсэн сайт руу мөн нэмэх hook-уудыг нэмдэг.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $customer | `\Customer` | Магадгүй үүсгэсэн үйлчлүүлэгч. |
| $checkout | `\Checkout` | Одоогийн checkout класс. |

### Эхлэн {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) файлд 1156-р мөрөнд тодорхойлсон.
