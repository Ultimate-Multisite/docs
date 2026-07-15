---
id: wu_checkout_form_base_domains
title: फिल्टर - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

साझा checkout-form आधार डोमेनहरू फिल्टर गर्छ, जुन mapped-domain रेकर्ड बन्नु हुँदैन।

जब कुनै एकीकरणले checkout form का **साइट URL** फिल्डहरूका लागि थप आधार डोमेनहरू प्रदान गर्छ, यो filter प्रयोग गर्नुहोस्। यस filter द्वारा फर्काइएका डोमेनहरू प्रति-साइट custom डोमेनको सट्टा साझा दर्ता होस्टका रूपमा व्यवहार गरिन्छ।

## प्यारामिटरहरू {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domains | `array` | checkout form कन्फिगरेसनबाट सङ्कलित साझा आधार डोमेनहरू। |

### देखि {#since}

- 2.13.0

### स्रोत {#source}

`inc/functions/domain.php` मा परिभाषित।


## फर्काउने मान {#returns}

सामान्यीकृत checkout-form आधार डोमेनहरूको array।
