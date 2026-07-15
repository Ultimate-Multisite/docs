---
id: wu_checkout_order_created
title: Harakat - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Checkout buyurtmasi to‘liq yig‘ilgandan keyin ishga tushadi.

Addonlar bundan mustaqil hisob-kitob davrlariga ega mahsulotlar uchun ikkilamchi a’zoliklar yaratishda foydalanishi mumkin.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Savat/buyurtma obyekti. |
| $customer | `\WP_Ultimo\Models\Customer` | Mijoz. |
| $membership | `\WP_Ultimo\Models\Membership` | Asosiy a’zolik. |
| $payment | `\WP_Ultimo\Models\Payment` | To‘lov. |

### Versiyadan boshlab {#since}

- 2.5.0
### Manba {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) faylida 891-qatorda aniqlangan.
