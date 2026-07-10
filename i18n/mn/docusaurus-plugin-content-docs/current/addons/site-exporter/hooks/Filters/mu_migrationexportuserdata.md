---
id: mu_migrationexportuserdata
title: Шүүлтүүр - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Экспортлох/импортлох хэрэглэгчийн өгөгдлийн өгөгдмөл багцыг шүүнэ.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $custom_user_data | `array` | Захиалгат хэрэглэгчийн өгөгдлийн массив. |
| $user | `\WP_User` | Хэрэглэгчийн объект. |

### Хувилбараас {#since}

- 0.1.0
### Эх сурвалж {#source}

- [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335)-д 335-р мөрөнд тодорхойлсон
- [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147)-д 147-р мөрөнд тодорхойлсон
## Буцаана {#returns}
Хэрэглэгчийн массив өгөгдөл.
