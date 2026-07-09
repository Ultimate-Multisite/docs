---
id: mu_migrationexportuserdata
title: تصفية - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# فلتر: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

يفلتر المجموعة الافتراضية من بيانات المستخدم المراد تصديرها/استيرادها.

## المعاملات {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $custom_user_data | `array` | مصفوفة بيانات المستخدم المخصصة. |
| $user | `\WP_User` | كائن المستخدم. |

### منذ {#since}

- 0.1.0
### المصدر {#source}

- معرّف في [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) عند السطر 335
- معرّف في [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) عند السطر 147
## الإرجاع {#returns}
بيانات مصفوفة المستخدم.
