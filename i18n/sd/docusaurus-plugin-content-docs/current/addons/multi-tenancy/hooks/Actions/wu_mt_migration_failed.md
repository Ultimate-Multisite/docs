---
id: wu_mt_migration_failed
title: عمل - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

جڏهن migration ناڪام ٿئي ٿي تڏهن فائر ٿئي ٿو.

## پيرا ميٽر {#parameters}

| نالو | Type | وضاحت |
|------|------|-------------|
| $job | `\Migration_Job` | ناڪام migration job. |
| $message | `string` | غلطي جو پيغام. |

### کان وٺي {#since}

- 1.0.0
### ماخذ {#source}

[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) ۾ لائن 720 تي بيان ڪيل
