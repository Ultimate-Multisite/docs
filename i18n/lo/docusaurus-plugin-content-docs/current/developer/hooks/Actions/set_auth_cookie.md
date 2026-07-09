---
id: set_auth_cookie
title: ການກະທຳ - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# ການກະທຳ: set_auth_cookie

ເຮັດວຽກທັນທີກ່ອນທີ່ຄຸກກີການຢືນຢັນຕົວຕົນຈະຖືກຕັ້ງຄ່າ.

## ພາລາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $auth_cookie | `string` | ຄ່າຄຸກກີການຢືນຢັນຕົວຕົນ. |
| $expire | `int` | ເວລາທີ່ໄລຍະຜ່ອນຜັນການເຂົ້າລະບົບໝົດອາຍຸເປັນ UNIX timestamp. ຄ່າເລີ່ມຕົ້ນແມ່ນ 12 ຊົ່ວໂມງຫຼັງຈາກເວລາໝົດອາຍຸຂອງຄຸກກີ. |
| $expiration | `int` | ເວລາທີ່ຄຸກກີການຢືນຢັນຕົວຕົນໝົດອາຍຸເປັນ UNIX timestamp. ຄ່າເລີ່ມຕົ້ນແມ່ນ 14 ມື້ຈາກຕອນນີ້. |
| $user_id | `int` | ID ຜູ້ໃຊ້. |
| $scheme | `string` | ແບບແຜນການຢືນຢັນຕົວຕົນ. ຄ່າປະກອບມີ 'auth' ຫຼື 'secure_auth'. |
| $token | `string` | token ເຊສຊັນຂອງຜູ້ໃຊ້ທີ່ຈະໃຊ້ສຳລັບຄຸກກີນີ້. |

### ຕັ້ງແຕ່

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### ແຫຼ່ງທີ່ມາ

ຖືກກຳນົດໄວ້ໃນ [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ທີ່ບັນທັດ 124
