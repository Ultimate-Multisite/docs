---
id: mu_migrationexportuserdata
title: फिल्टर - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

निर्यात/आयात गरिने प्रयोगकर्ता डाटाको पूर्वनिर्धारित सेटलाई फिल्टर गर्छ।

## प्यारामिटरहरू {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | अनुकूलन प्रयोगकर्ता डाटा array। |
| $user | `\WP_User` | प्रयोगकर्ता object। |

### देखि {#since}

- 0.1.0
### स्रोत {#source}

- [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) मा पङ्क्ति 335 मा परिभाषित
- [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) मा पङ्क्ति 147 मा परिभाषित
## फर्काउँछ {#returns}
Array डाटा प्रयोगकर्ता।
