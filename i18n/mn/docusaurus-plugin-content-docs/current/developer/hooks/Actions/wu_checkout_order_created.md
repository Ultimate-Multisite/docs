---
id: wu_checkout_order_created
title: Үйлдэл - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Checkout захиалга бүрэн угсрагдсаны дараа ажиллана.

Addon-ууд үүнийг ашиглан бие даасан нэхэмжлэлийн мөчлөгтэй бүтээгдэхүүнүүдэд хоёрдогч гишүүнчлэл үүсгэж болно.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Сагс/захиалгын объект. |
| $customer | `\WP_Ultimo\Models\Customer` | Үйлчлүүлэгч. |
| $membership | `\WP_Ultimo\Models\Membership` | Үндсэн гишүүнчлэл. |
| $payment | `\WP_Ultimo\Models\Payment` | Төлбөр. |

### Хувилбараас {#since}

- 2.5.0
### Эх сурвалж {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) дотор 891-р мөрөнд тодорхойлсон
