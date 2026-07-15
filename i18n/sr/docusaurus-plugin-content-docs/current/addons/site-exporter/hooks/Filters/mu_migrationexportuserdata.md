---
id: mu_migrationexportuserdata
title: Филтер - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Филтер: mu_migration/export/user/data

Филтрира подразумевани скуп корисничких података за извоз/увоз.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $custom_user_data | `array` | Низ прилагођених корисничких података. |
| $user | `\WP_User` | Објекат корисника. |

### Од верзије {#since}

- 0.1.0
### Извор {#source}

- Дефинисано у [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) у реду 335
- Дефинисано у [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) у реду 147
## Враћа {#returns}
Податке низа корисника.
