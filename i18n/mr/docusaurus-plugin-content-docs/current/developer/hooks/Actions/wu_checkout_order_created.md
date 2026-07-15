---
id: wu_checkout_order_created
title: कृती - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

जेव्हा चेकआउट ऑर्डर पूर्णपणे तयार होते, तेव्हा हे ट्रिगर होते.

यामुळे Addons ला स्वतंत्र बिलिंग चक्र असलेल्या उत्पादनांसाठी दुय्यम सदस्यत्वे (secondary memberships) तयार करण्यासाठी याचा उपयोग करता येतो.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | कार्ट/ऑर्डर ऑब्जेक्ट. |
| $customer | `\WP_Ultimo\Models\Customer` | ग्राहक (customer). |
| $membership | `\WP_Ultimo\Models\Membership` | प्राथमिक सदस्यत्व (primary membership). |
| $payment | `\WP_Ultimo\Models\Payment` | पेमेंट (payment). |

### Since {#since}

- 2.5.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) या फाईलमध्ये लाइन ८९१ वर परिभाषित केले आहे.
