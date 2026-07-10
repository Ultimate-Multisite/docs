---
id: wu_checkout_order_created
title: Амал - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Пас аз пурра ҷамъ шудани фармоиши пардохт фаъол мешавад.

Addon-ҳо метавонанд инро барои эҷоди узвиятҳои дуюмдараҷа барои маҳсулот бо давраҳои ҳисоббарории мустақил истифода баранд.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Объекти сабад/фармоиш. |
| $customer | `\WP_Ultimo\Models\Customer` | Муштарӣ. |
| $membership | `\WP_Ultimo\Models\Membership` | Узвияти асосӣ. |
| $payment | `\WP_Ultimo\Models\Payment` | Пардохт. |

### Аз версияи {#since}

- 2.5.0
### Манбаъ {#source}

Дар [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) дар сатри 891 муайян шудааст.
