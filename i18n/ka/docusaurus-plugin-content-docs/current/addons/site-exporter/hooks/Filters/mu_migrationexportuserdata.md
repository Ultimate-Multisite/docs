---
id: mu_migrationexportuserdata
title: ფილტრი - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# ფილტრი: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

ფილტრავს საექსპორტო/საიმპორტო მომხმარებლის მონაცემების ნაგულისხმევ ნაკრებს.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $custom_user_data | `array` | მორგებული მომხმარებლის მონაცემების მასივი. |
| $user | `\WP_User` | მომხმარებლის ობიექტი. |

### ვერსიიდან {#since}

- 0.1.0
### წყარო {#source}

- განსაზღვრულია [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335)-ში, 335-ე ხაზზე
- განსაზღვრულია [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147)-ში, 147-ე ხაზზე
## აბრუნებს {#returns}
მომხმარებლის მასივის მონაცემებს.
