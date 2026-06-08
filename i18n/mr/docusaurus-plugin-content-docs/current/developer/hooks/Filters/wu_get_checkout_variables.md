---
id: wu_get_checkout_variables
title: गाळणी - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

प्लगइन डेव्हलपर्सना चेकआउट पेजच्या प्री-सेट व्हेरिएबल्स (pre-sets of a checkout page) फिल्टर करण्याची परवानगी देतो.

काळजीपूर्वक वापरा, कारण या फिल्टरमध्ये काही की (keys) नसावल्यास फ्रंट-एंडवर चेकआउट पूर्णपणे बिघडू शकतो.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | स्थानिकरित्या (Localized) व्हेरिएबल्स. |
| $checkout | `\Checkout` | चेकआउट क्लास. |

### Since

- 2.0.0
### Source

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) मध्ये लाइन 1970 वर परिभाषित केले आहे.

## Returns
नवीन व्हेरिएबल्स ॲरे (array).
