---
id: mu_migrationimportusercustom_data_before
title: Үйлдэл - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Хэрэглэгчийн захиалгат өгөгдлийг экспортлохын өмнө ажиллана.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $user_data | `array` | Хэрэглэгчийн өгөгдлийн массив. |
| $user | `\WP_User` | Хэрэглэгчийн объект. |

### Хойш {#since}

- 0.1.0
### Эх сурвалж {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139)-д 139-р мөрөнд тодорхойлсон.
