---
id: wp_ultimo_skip_network_active_check
title: फिल्टर - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# फिल्टर: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

विकासकर्ताहरूलाई नेटवर्क सक्रियता जाँच बाइपास गर्न अनुमति दिन्छ।

यो composer-आधारित र अन्य अनुकूल सेटअपहरू प्रयोग गर्दा उपयोगी हुन्छ, जस्तै उदाहरणका लागि Bedrock, जहाँ प्लगिनहरूलाई mu-plugins का रूपमा प्रयोग गर्नु सामान्य हुन्छ।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $skip_network_activation_check | `bool` | हामीले जाँच छोड्नुपर्छ कि पर्दैन, पूर्वनिर्धारित रूपमा false। |

### देखि {#since}

- 2.0.0
### स्रोत {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) मा पङ्क्ति 272 मा परिभाषित


## फिर्ता मान {#returns}
यदि तपाईं जाँच छोड्न चाहनुहुन्छ भने true, अन्यथा false।
