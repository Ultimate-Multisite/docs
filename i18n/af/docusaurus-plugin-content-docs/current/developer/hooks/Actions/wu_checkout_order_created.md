---
id: wu_checkout_order_created
title: Aksie - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Dit word geaktiveer nadat die afrekeningbestelling volledig saamgestel is.

Addons kan dit gebruik om sekondêre lidmaatskappe vir produkte met onafhanklike faktuur-siklusse te skep.

## Parameters {#parameters}

| Name | Type | Beskrywing |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Die winkelmand/bestel-objek. |
| $customer | `\WP_Ultimo\Models\Customer` | Die kliënt. |
| $membership | `\WP_Ultimo\Models\Membership` | Die primêre lidmaatskap. |
| $payment | `\WP_Ultimo\Models\Payment` | Die betaling. |

### Sedert {#since}

- 2.5.0
### Bron {#source}

Gedefinieer in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) op lyn 891
