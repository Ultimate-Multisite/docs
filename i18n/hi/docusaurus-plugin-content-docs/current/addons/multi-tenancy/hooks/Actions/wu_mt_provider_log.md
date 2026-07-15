---
id: wu_mt_provider_log
title: Action - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# Action: wu_mt_provider_log

यह तब ट्रिगर होता है जब कोई प्रोवाइडर (provider) कोई मैसेज लॉग करता है।

## पैरामीटर्स {#parameters}

| Name | Type | विवरण |
|------|------|-------------|
| $message | `string` | लॉग मैसेज। |
| $level | `string` | लॉग लेवल। |
| $context | `array` | अतिरिक्त संदर्भ (Additional context)। |

### कब से उपलब्ध {#since}

- 1.0.0
### स्रोत {#source}

[`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) में लाइन 400 पर परिभाषित है।
