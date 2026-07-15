---
id: wu_mt_migration_failed
title: ક્રિયા - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

જ્યારે માઇગ્રેશન નિષ્ફળ જાય ત્યારે આ એક્શન ટ્રિગર થાય છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $job | `\Migration_Job` | નિષ્ફળ ગયેલ માઇગ્રેશન જોબ. |
| $message | `string` | ભૂલ સંદેશ (Error message). |

### Since {#since}

- 1.0.0
### Source {#source}

Defined in [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) at line 720
