---
id: wu_mt_migration_failed
title: ການກະທຳ - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

ເຮັດວຽກເມື່ອການຍ້າຍລົ້ມເຫຼວ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $job | `\Migration_Job` | ວຽກການຍ້າຍທີ່ລົ້ມເຫຼວ. |
| $message | `string` | ຂໍ້ຄວາມຜິດພາດ. |

### ຕັ້ງແຕ່ {#since}

- 1.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) ທີ່ບັນທັດ 720
