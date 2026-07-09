---
id: set_logged_in_cookie
title: ການກະທຳ - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

ເກີດຂຶ້ນທັນທີກ່ອນທີ່ cookie ການຢືນຢັນຕົວຕົນແບບເຂົ້າລະບົບແລ້ວຈະຖືກຕັ້ງຄ່າ.

## ພາລາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $logged_in_cookie | `string` | ຄ່າ cookie ແບບເຂົ້າລະບົບແລ້ວ. |
| $expire | `int` | ເວລາທີ່ໄລຍະຜ່ອນຜັນການເຂົ້າລະບົບໝົດອາຍຸ ເປັນ UNIX timestamp. ຄ່າເລີ່ມຕົ້ນແມ່ນ 12 ຊົ່ວໂມງຫຼັງເວລາໝົດອາຍຸຂອງ cookie. |
| $expiration | `int` | ເວລາທີ່ cookie ການຢືນຢັນຕົວຕົນແບບເຂົ້າລະບົບແລ້ວໝົດອາຍຸ ເປັນ UNIX timestamp. ຄ່າເລີ່ມຕົ້ນແມ່ນ 14 ມື້ຈາກຕອນນີ້. |
| $user_id | `int` | ID ຜູ້ໃຊ້. |
| $scheme | `string` | ແຜນການຢືນຢັນຕົວຕົນ. ຄ່າເລີ່ມຕົ້ນ 'logged_in'. |
| $token | `string` | token ເຊດຊັນຂອງຜູ້ໃຊ້ທີ່ຈະໃຊ້ສຳລັບ cookie ນີ້. |

### ຕັ້ງແຕ່

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### ແຫຼ່ງທີ່ມາ

ຖືກກຳນົດໃນ [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ທີ່ແຖວ 141
