---
id: retrieve_password_message
title: ຕົວກັ່ນຕອງ - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

ກັ່ນຕອງເນື້ອຄວາມຂອງຈົດໝາຍອີເມວຣີເຊັດລະຫັດຜ່ານ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $message | `string` | ຂໍ້ຄວາມຈົດໝາຍອີເມວເລີ່ມຕົ້ນ. |
| $key | `string` | ຄີການເປີດໃຊ້ງານ. |
| $user_login | `string` | ຊື່ຜູ້ໃຊ້ສຳລັບຜູ້ໃຊ້. |
| $user_data | `\WP_User` | ວັດຖຸ WP_User. |

### ຕັ້ງແຕ່ {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ທີ່ບັນທັດ 149


## ສົ່ງຄືນ {#returns}
ຂໍ້ຄວາມຈົດໝາຍອີເມວເລີ່ມຕົ້ນ.
