---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Εκτελείται αφού η παραγγελία του checkout έχει ολοκληριστεί πλήρως.

Τα Addons μπορούν να χρησιμοποιήσουν αυτό για να δημιουργήσουν δευτερεύουσες συνδρομές για προϊόντα με ανεξάρτητους κύκλους χρέωσης.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Το αντικείμενο του καλαθιού/παραγγελίας. |
| $customer | `\WP_Ultimo\Models\Customer` | Ο πελάτης. |
| $membership | `\WP_Ultimo\Models\Membership` | Η κύρια συνδρομή. |
| $payment | `\WP_Ultimo\Models\Payment` | Η πληρωμή. |

### Since {#since}

- 2.5.0
### Source {#source}

Ορίζεται στο [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) στην γραμμή 891
