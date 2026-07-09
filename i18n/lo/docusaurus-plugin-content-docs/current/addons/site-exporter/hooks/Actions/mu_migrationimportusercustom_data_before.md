---
id: mu_migrationimportusercustom_data_before
title: ການກະທຳ - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# ການກະທຳ: mu_migration/import/user/custom_data_before {#action-mumigrationimportusercustomdatabefore}

ເຮັດວຽກກ່ອນສົ່ງອອກຂໍ້ມູນຜູ້ໃຊ້ແບບກຳນົດເອງ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $user_data | `array` | ອາເຣຂໍ້ມູນຜູ້ໃຊ້. |
| $user | `\WP_User` | ອອບເຈັກຜູ້ໃຊ້. |

### ຕັ້ງແຕ່ {#since}

- 0.1.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) ທີ່ບັນທັດ 139
