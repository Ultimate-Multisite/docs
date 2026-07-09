---
id: wu_contains_element
title: फिल्टर - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# फिल्टर: wu_contains_element

विकासकर्ताहरूलाई प्रारम्भिक खोजका नतिजाहरू परिवर्तन गर्न अनुमति दिन्छ।

यो तेस्रो-पक्ष builder हरू र त्यस्तैका लागि उपयोगी छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $contains_elements | `bool` | यदि element content मा समावेश छ भने। |
| $content | `string` | जाँच भइरहेको content। |
| $element | `self` | हालको element। |
| $post | `null\|\WP_Post` | जाँच गर्नुपर्ने post। |

### देखि

- 2.0.0
### स्रोत

[`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) मा line 534 मा परिभाषित गरिएको छ।
