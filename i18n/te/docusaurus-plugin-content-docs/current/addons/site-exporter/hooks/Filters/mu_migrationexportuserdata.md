---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

ఎగుమతి (export) చేయడానికి/దిగతీす (import) చేయడానికి ఉపయోగించే డిఫాల్ట్ యూజర్ డేటా సెట్‌ను ఇది ఫిల్టర్ చేస్తుంది.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | కస్టమ్ యూజర్ డేటా శ్రేణి (array). |
| $user | `\WP_User` | యూజర్ ఆబ్జెక్ట్ (user object). |

### Since

- 0.1.0
### Source

- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) at line 335
- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) at line 147
## Returns
యూజర్ డేటా శ్రేణి (Array data user).
