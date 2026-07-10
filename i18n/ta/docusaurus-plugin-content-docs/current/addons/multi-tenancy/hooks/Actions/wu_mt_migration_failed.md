---
id: wu_mt_migration_failed
title: செயல் - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

ஒரு மைக்ரேஷன் தோல்வியடையும்போது இது செயல்படும்.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $job | `\Migration_Job` | தோல்வியடைந்த மைக்ரேஷன் வேலை. |
| $message | `string` | பிழை செய்தி. |

### எப்போது இருந்து (Since) {#since}

- 1.0.0
### ஆதாரம் (Source) {#source}

[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) என்ற கோப்பின் 720 வரியில் வரையறுக்கப்பட்டுள்ளது.
