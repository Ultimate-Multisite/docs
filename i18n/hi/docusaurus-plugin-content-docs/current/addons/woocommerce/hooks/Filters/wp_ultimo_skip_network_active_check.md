---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

डेवलपर्स को नेटवर्क एक्टिवेशन चेक को बायपास (short-circuit) करने की अनुमति देता है।

यह तब उपयोगी होता है जब आप composer-आधारित और अन्य कस्टम सेटअप का उपयोग कर रहे हों, जैसे कि Bedrock, उदाहरण के लिए, जहाँ mu-plugins के रूप में प्लगइन्स का उपयोग सामान्य होता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | क्या हमें चेक को छोड़ना चाहिए या नहीं, डिफ़ॉल्ट रूप से false होता है। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) में लाइन 272 पर परिभाषित है।


## Returns {#returns}
यदि आप चेक को छोड़ना चाहते हैं तो `true`, अन्यथा `false`।
