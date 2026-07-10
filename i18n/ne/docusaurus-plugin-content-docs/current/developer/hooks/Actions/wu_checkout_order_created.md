---
id: wu_checkout_order_created
title: कार्य - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

checkout अर्डर पूर्ण रूपमा तयार भएपछि चल्छ।

Addons ले स्वतन्त्र billing cycles भएका उत्पादनहरूका लागि द्वितीयक memberships सिर्जना गर्न यसलाई प्रयोग गर्न सक्छन्।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | cart/order object। |
| $customer | `\WP_Ultimo\Models\Customer` | ग्राहक। |
| $membership | `\WP_Ultimo\Models\Membership` | प्राथमिक membership। |
| $payment | `\WP_Ultimo\Models\Payment` | payment। |

### Since {#since}

- 2.5.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) मा लाइन 891 मा परिभाषित।
