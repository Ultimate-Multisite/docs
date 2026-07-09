---
id: mu_migrationexportuserdata
title: ფილტრი - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# ფილტრი: mu_migration/export/user/data

ფილტრავს საექსპორტო/საიმპორტო მომხმარებლის მონაცემების ნაგულისხმევ ნაკრებს.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $custom_user_data | `array` | მორგებული მომხმარებლის მონაცემების მასივი. |
| $user | `\WP_User` | მომხმარებლის ობიექტი. |

### ვერსიიდან

- 0.1.0
### წყარო

- განსაზღვრულია [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335)-ში, 335-ე ხაზზე
- განსაზღვრულია [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147)-ში, 147-ე ხაზზე
## აბრუნებს
მომხმარებლის მასივის მონაცემებს.
