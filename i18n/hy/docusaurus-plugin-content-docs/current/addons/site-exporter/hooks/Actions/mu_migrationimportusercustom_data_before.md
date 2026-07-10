---
id: mu_migrationimportusercustom_data_before
title: Գործողություն - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before {#action-mumigrationimportusercustomdatabefore}

Գործարկվում է օգտվողի հարմարեցված տվյալների արտահանումից առաջ։

## Պարամետրեր {#parameters}

| Անուն | Տիպ | Նկարագրություն |
|------|------|-------------|
| $user_data | `array` | Օգտվողի տվյալների զանգվածը։ |
| $user | `\WP_User` | Օգտվողի օբյեկտը։ |

### Սկսած {#since}

- 0.1.0
### Աղբյուր {#source}

Սահմանված է [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139)-ում՝ 139-րդ տողում։
