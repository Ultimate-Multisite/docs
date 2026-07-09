---
id: wu_connector_enforcement_option_keys
title: फ़िल्टर - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

मुख्य साइट से लागू किए गए AI प्रोवाइडर विकल्प कुंजियों (option keys) की सूची को फ़िल्टर करता है।

कस्टम या थर्ड-पार्टी AI प्रोवाइडर प्लगइन्स के लिए विकल्प कुंजियाँ जोड़ें ताकि उनकी सेटिंग्स भी सबसाइट्स पर मुख्य साइट से विरासत में मिल सकें।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | वे विकल्प कुंजियाँ जिन्हें लागू करना है (इसमें पहले से ही गतिशील रूप से खोजे गए कनेक्टर कुंजियाँ और EXTRA_PROVIDER_OPTIONS शामिल हैं)। |

### Since {#since}

- 1.2.0
### Source {#source}

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
