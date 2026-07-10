---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

प्लगइन डेवलपर्स को चेकआउट पेज के प्री-सेट वैरिएबल्स को फ़िल्टर करने की अनुमति देता है।

सावधान रहें, अगर आप ज़रूरी कीज़ (keys) छोड़ देते हैं, तो यह फ्रंट-एंड पर चेकआउट को पूरी तरह से खराब कर सकता है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | स्थानीयकृत वैरिएबल्स। |
| $checkout | `\Checkout` | चेकआउट क्लास। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) में लाइन 1970 पर परिभाषित है।


## Returns {#returns}
नया वैरिएबल्स ऐरे।
