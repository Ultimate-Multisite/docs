---
id: wu_handle_user_meta_fields
title: Үйлдэл - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Үйлдэл: wu_handle_user_meta_fields

Plugin хөгжүүлэгчдэд шаардлагатай бол хэрэглэгчийн meta өгөгдлийг өөр өөр аргаар хадгалах боломж олгоно.

## Параметрүүд {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | meta талбаруудын жагсаалт, key =&gt; value бүтэцтэй. |
| $user | `\WP_User` | WordPress хэрэглэгчийн объект. |
| $customer | `\Customer` | Ultimate Multisite хэрэглэгчийн объект. |
| $checkout | `\Checkout` | Төлбөр тооцооны класс. |

### Эхэлсэн хувилбар {#since}

- 2.0.4
### Эх сурвалж {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244)-д 1244-р мөрөнд тодорхойлсон.
