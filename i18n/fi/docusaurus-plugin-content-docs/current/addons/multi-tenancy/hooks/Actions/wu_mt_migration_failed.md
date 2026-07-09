---
id: wu_mt_migration_failed
title: Toiminto - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

Käynnistyy, kun migraatio epäonnistuu.

## Parametrit

| Name | Type | Description |
|------|------|-------------|
| $job | `\Migration_Job` | Epäonnistunut migraatiotyö. |
| $message | `string` | Virheviesti. |

### Alkaen

- 1.0.0
### Lähde

Määritelty tiedostossa [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) rivillä 720
