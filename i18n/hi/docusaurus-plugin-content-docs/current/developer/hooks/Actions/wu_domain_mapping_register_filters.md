---
id: wu_domain_mapping_register_filters
title: wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

कुछ प्लगइन्स ऐसे URL सेव कर सकते हैं जो मैपिंग सक्रिय होने से पहले सेव हुए थे, या वे URL को इस तरह से बना सकते हैं जो ऊपर दिए गए फ़िल्टर में शामिल नहीं है।

ऐसे मामलों में, हम अतिरिक्त फ़िल्टर जोड़ना चाहते हैं। जो दूसरा पैरामीटर पास किया जाता है, वह `mangle_url` कॉलबैक होता है। हम सलाह देते हैं कि आप इस फ़िल्टर का सीधे उपयोग न करें। इसके बजाय, `Domain_Mapping::apply_mapping_to_url` मेथड का उपयोग करें।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | मैंगल कॉलबैक। |
| $domain_mapper | `self` | यह ऑब्जेक्ट। |

### Since

- 2.0.0
### Source

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) में लाइन 530 पर परिभाषित
