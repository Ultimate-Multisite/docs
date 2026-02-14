---
id: mu_migrationimportusercustom_data_after
title: الإجراء - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# الإجراء: mu_migration/import/user/custom_data_after

يتم إطلاقه بعد تصدير بيانات المستخدم المخصصة.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $user_data | `array` | مصفوفة بيانات المستخدم. |
| $user | `\WP_User` | كائن المستخدم. |

### منذ

- 0.1.0

### المصدر

تم تعريفه في [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) في السطر 165
