---
id: mu_migrationimportusercustom_data_after
title: Үйлдэл - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

Хэрэглэгчийн тусгай өгөгдлийг экспортолсны дараа ажиллана.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $user_data | `array` | Хэрэглэгчийн өгөгдлийн массив. |
| $user | `\WP_User` | Хэрэглэгчийн объект. |

### Хувилбараас {#since}

- 0.1.0
### Эх сурвалж {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165)-д 165-р мөрөнд тодорхойлсон.
