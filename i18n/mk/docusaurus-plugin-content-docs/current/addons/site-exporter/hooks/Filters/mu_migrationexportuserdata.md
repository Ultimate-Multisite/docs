---
id: mu_migrationexportuserdata
title: Филтер - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Филтер: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Го филтрира стандардниот сет на кориснички податоци што треба да се извезат/увезат.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $custom_user_data | `array` | Низата со приспособени кориснички податоци. |
| $user | `\WP_User` | Објектот на корисникот. |

### Од верзија {#since}

- 0.1.0
### Извор {#source}

- Дефинирано во [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) на линија 335
- Дефинирано во [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) на линија 147
## Враќа {#returns}
Низа со кориснички податоци.
