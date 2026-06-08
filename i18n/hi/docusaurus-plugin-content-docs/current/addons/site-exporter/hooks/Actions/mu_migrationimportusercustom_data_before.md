---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

कस्टम उपयोगकर्ता डेटा को एक्सपोर्ट करने से पहले यह एक्शन ट्रिगर होता है।

## पैरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | उपयोगकर्ता डेटा ऐरे। |
| $user | `\WP_User` | उपयोगकर्ता ऑब्जेक्ट। |

### Since

- 0.1.0
### Source

[`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) में लाइन 139 पर परिभाषित है।
