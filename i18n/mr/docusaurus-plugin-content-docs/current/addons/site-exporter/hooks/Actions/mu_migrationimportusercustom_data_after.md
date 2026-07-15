---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

कस्टम युजर डेटा एक्सपोर्ट (export) झाल्यानंतर हे ट्रिगर होते.

## Parameters (मापदंड) {#parameters}

| Name | Type | Description (वर्णन) |
|------|------|-------------|
| $user_data | `array` | युजर डेटा असलेली ॲरे (array). |
| $user | `\WP_User` | युजरची माहिती असलेला ऑब्जेक्ट (object). |

### Since (कधीपासून) {#since}

- 0.1.0
### Source (स्रोत) {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) या फाईलमध्ये लाइन 165 वर परिभाषित केले आहे.
