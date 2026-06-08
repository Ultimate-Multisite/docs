---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

यह निर्यात (export) या आयात (import) किए जाने वाले उपयोगकर्ता डेटा के डिफ़ॉल्ट सेट को फ़िल्टर करता है।

## पैरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | कस्टम उपयोगकर्ता डेटा ऐरे। |
| $user | `\WP_User` | उपयोगकर्ता ऑब्जेक्ट। |

### से

- 0.1.0
### स्रोत

- [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) में लाइन 335 पर परिभाषित
- [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) में लाइन 147 पर परिभाषित
## रिटर्न करता है
उपयोगकर्ता डेटा का ऐरे।
