---
id: mu_migrationexportuserdata
title: פילטר - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

מסנן את מערך נתוני המשתמש המוגדר כברירת מחדל לצורך ייצוא או ייבוא.

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | מערך נתוני משתמש מותאם אישית. |
| $user | `\WP_User` | אובייקט המשתמש. |

### מאז {#since}

- 0.1.0
### מקור {#source}

- מוגדר ב[`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) בשורה 335
- מוגדר ב[`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) בשורה 147
## מחזיר {#returns}
מערך נתוני משתמש.
