---
id: mu_migrationexportuserdata
title: Sía - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Sía: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Síar sjálfgefna safnið af notendagögnum sem á að flytja út/inn.

## Færibreytur {#parameters}

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $custom_user_data | `array` | Sérsniðna fylkið með notendagögnum. |
| $user | `\WP_User` | Notandahluturinn. |

### Síðan {#since}

- 0.1.0
### Uppruni {#source}

- Skilgreint í [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) í línu 335
- Skilgreint í [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) í línu 147
## Skilar {#returns}
Fylkisgögn notanda.
