---
id: wu_mt_migration_failed
title: الإجراء - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# الإجراء: wu_mt_migration_failed

يتم إطلاقه عندما يفشل الترحيل.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $job | `\Migration_Job` | مهمة الترحيل الفاشلة. |
| $message | `string` | رسالة الخطأ. |

### منذ

- 1.0.0

### المصدر

تم تعريفه في [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) في السطر 720
