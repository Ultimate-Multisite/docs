---
id: mu_migrationimportusercustom_data_after
title: ການກະທຳ - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# ການກະທຳ: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

ເຮັດວຽກຫຼັງຈາກສົ່ງອອກຂໍ້ມູນຜູ້ໃຊ້ແບບກຳນົດເອງ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $user_data | `array` | ອາເຣຂໍ້ມູນຜູ້ໃຊ້. |
| $user | `\WP_User` | ອອບເຈັກຜູ້ໃຊ້. |

### ຕັ້ງແຕ່ {#since}

- 0.1.0
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໃນ [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) ທີ່ແຖວ 165
