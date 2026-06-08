---
id: mu_migrationexportuserdata
title: ഫിൽട്ടർ - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

എക്‌സ്‌പോർട്ട് ചെയ്യാനോ ഇംപോർട്ട് ചെയ്യാനോ ഉള്ള യൂസർ ഡാറ്റയുടെ ഡിഫോൾട്ട് സെറ്റിനെ ഫിൽട്ടർ ചെയ്യാൻ ഇത് ഉപയോഗിക്കുന്നു.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | കസ്റ്റം യൂസർ ഡാറ്റ അടങ്ങിയ അറേ. |
| $user | `\WP_User` | യൂസർ ഒബ്ജക്റ്റ്. |

### Since

- 0.1.0
### Source

- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) at line 335
- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) at line 147
## Returns
യൂസർ ഡാറ്റയുടെ ഒരു അറേ (Array).
