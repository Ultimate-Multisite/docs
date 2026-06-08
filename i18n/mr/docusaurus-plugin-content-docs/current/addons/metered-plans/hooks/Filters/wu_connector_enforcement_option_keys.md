---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

मुख्य साइटवरून लागू केलेल्या AI प्रदाता पर्याय कींची (option keys) यादी फिल्टर करते.

कस्टम किंवा थर्ड-पार्टी AI प्रदाता प्लगइन्ससाठी पर्याय की जोडण्यासाठी, जेणेकरून त्यांच्या सेटिंग्ज सबसाइट्सवर देखील मुख्य साइटवरून वारसा हक्काने (inherited) मिळतील.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | लागू करायचे पर्याय कीचे नाव (Option key names) (यामध्ये आधीच डायनॅमिकरित्या शोधलेले कनेक्टर की आणि EXTRA_PROVIDER_OPTIONS समाविष्ट आहेत). |

### Since

- 1.2.0
### Source

[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) मध्ये लाइन 206 वर परिभाषित केले आहे.
