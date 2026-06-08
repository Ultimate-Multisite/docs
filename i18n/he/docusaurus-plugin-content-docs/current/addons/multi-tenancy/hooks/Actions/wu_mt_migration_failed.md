---
id: wu_mt_migration_failed
title: פעולה - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

מופעל כאשר המיגרציה נכשלת.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $job | `\Migration_Job` | משימת המיגרציה שנכשלה. |
| $message | `string` | הודעת שגיאה. |

### מאז

- 1.0.0
### מקור

מוגדר ב-[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) בשורה 720
