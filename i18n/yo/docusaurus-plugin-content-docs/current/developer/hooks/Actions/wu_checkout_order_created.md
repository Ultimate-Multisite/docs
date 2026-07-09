---
id: wu_checkout_order_created
title: Ìṣe - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Máa ń ṣiṣẹ́ lẹ́yìn tí a bá ti ṣètò checkout order tán pátápátá.

Àwọn addon lè lo èyí láti dá àwọn membership àfikún sílẹ̀ fún àwọn ọjà tí ó ní àwọn billing cycles olómìnira.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Ohun cart/order náà. |
| $customer | `\WP_Ultimo\Models\Customer` | Oníbàárà náà. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership àkọ́kọ́ náà. |
| $payment | `\WP_Ultimo\Models\Payment` | Ìsanwó náà. |

### Láti

- 2.5.0
### Orísun

A ṣàlàyé rẹ̀ ní [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ní ìlà 891
