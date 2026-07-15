---
id: wu_checkout_order_created
title: कार्य - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

यह चेकआउट ऑर्डर पूरी तरह से बन जाने के बाद ट्रिगर होता है।

ऐडऑन (Addons) इसका उपयोग उन उत्पादों के लिए सेकेंडरी मेंबरशिप बनाने के लिए कर सकते हैं जिनका बिलिंग साइकिल स्वतंत्र होता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | कार्ट/ऑर्डर ऑब्जेक्ट। |
| $customer | `\WP_Ultimo\Models\Customer` | ग्राहक। |
| $membership | `\WP_Ultimo\Models\Membership` | प्राथमिक मेंबरशिप। |
| $payment | `\WP_Ultimo\Models\Payment` | भुगतान। |

### Since {#since}

- 2.5.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) में लाइन 891 पर परिभाषित।
