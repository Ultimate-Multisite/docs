---
id: wu_register_integrations
title: कृती - wu_register_integrations
sidebar_label: wu_register_integrations
_i18n_hash: 99782a2ea1ae62c0a3315cfef6720644
---
# Action: wu_register_integrations

हे हुक (hook) ट्रिगर होते, जेणेकरून इंटिग्रेशन्सला स्वतःची नोंदणी (register) करण्याची परवानगी मिळते.

कोर सिस्टीम (Core) येथे तिची इंटिग्रेशन्स नोंदणी करते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $registry | `\Integration_Registry` | रजिस्ट्रीची इन्स्टन्स (The registry instance). |

### कधीपासून {#since}

- 2.5.0
### स्रोत {#source}

[`inc/integrations/class-integration-registry.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/integrations/class-integration-registry.php#L113) मध्ये लाइन 113 वर परिभाषित केले आहे.
