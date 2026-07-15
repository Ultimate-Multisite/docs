---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element

डेवलपर्स को शुरुआती खोज (search) के परिणामों को बदलने की अनुमति देता है।

यह थर्ड-पार्टी बिल्डर्स और ऐसे अन्य कामों के लिए उपयोगी है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | यदि तत्व (element) सामग्री (content) में मौजूद है। |
| $content | `string` | जिस सामग्री की जाँच की जा रही है। |
| $element | `self` | वर्तमान तत्व। |
| $post | `null\|\WP_Post` | जाँच करने के लिए पोस्ट। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) at line 534
