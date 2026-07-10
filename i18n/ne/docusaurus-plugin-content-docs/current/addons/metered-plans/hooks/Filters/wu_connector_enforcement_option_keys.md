---
id: wu_connector_enforcement_option_keys
title: फिल्टर - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

मुख्य साइटबाट लागू गरिने AI provider option keys को सूचीलाई Filter गर्नुहोस्।

अनुकूलित वा तेस्रो-पक्ष AI provider plugins का लागि option keys थप्नुहोस् ताकि तिनका सेटिङहरू पनि subsites मा मुख्य साइटबाट inherit गरियोस्।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | लागू गर्नुपर्ने option key नामहरू (यसमा पहिले नै गतिशील रूपमा पत्ता लगाइएका connector keys र EXTRA_PROVIDER_OPTIONS समावेश छन्)। |

### Since {#since}

- 1.2.0
### Source {#source}

[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) मा line 206 मा परिभाषित गरिएको छ।
