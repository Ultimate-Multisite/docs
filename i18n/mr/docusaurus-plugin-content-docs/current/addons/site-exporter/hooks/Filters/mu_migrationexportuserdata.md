---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

हा फिल्टर निर्यात (export) किंवा आयात (import) करण्यासाठी वापरल्या जाणाऱ्या वापरकर्ता डेटाच्या मूळ सेटवर प्रक्रिया करतो.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | कस्टम वापरकर्ता डेटाची ॲरे. |
| $user | `\WP_User` | वापरकर्ता ऑब्जेक्ट. |

### पासून {#since}

- 0.1.0
### स्रोत {#source}

- [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) या ओळी ३३५ वर परिभाषित केले आहे.
- [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) या ओळी १४७ वर परिभाषित केले आहे.
## परत करतो {#returns}
वापरकर्ता डेटाची ॲरे.
