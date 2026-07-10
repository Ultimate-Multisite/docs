---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

ప్రధాన సైట్ నుండి అమలు చేయబడే AI ప్రొవైడర్ ఆప్షన్ కీల జాబితాను ఫిల్టర్ చేస్తుంది.

కస్టమ్ లేదా థర్డ్-పార్టీ AI ప్రొవైడర్ ప్లగిన్‌ల కోసం ఆప్షన్ కీలను జోడించడానికి ఇది ఉపయోగపడుతుంది. తద్వారా, సబ్‌సైట్‌లలో కూడా వాటి సెట్టింగ్‌లు ప్రధాన సైట్ నుండి వారసత్వంగా వస్తాయి.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | అమలు చేయవలసిన ఆప్షన్ కీ పేర్లు (ఇందులో డైనమిక్‌గా కనుగొన్న కనెక్టర్ కీలు మరియు EXTRA_PROVIDER_OPTIONS కూడా ఉంటాయి). |

### Since {#since}

- 1.2.0
### Source {#source}

[inc/managers/class-connector-enforcement.php](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) లోని 206వ లైన్‌లో నిర్వచించబడింది.
