---
id: wu_mt_migration_failed
title: عمل - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

یہ تب ٹرگر ہوتا ہے جب مائیگریشن (migration) ناکام ہو جاتی ہے۔

## پیرامیٹرز (Parameters) {#parameters}

| نام (Name) | قسم (Type) | تفصیل (Description) |
|------|------|-------------|
| $job | `\Migration_Job` | وہ مائیگریشن جاب جو ناکام ہو گئی۔ |
| $message | `string` | غلطی کا پیغام (Error message)۔ |

### سے (Since) {#since}

- 1.0.0
### ماخذ (Source) {#source}

[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) میں لائن 720 پر بیان کیا گیا ہے۔
