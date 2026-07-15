---
id: secure_auth_cookie
title: ຕົວກັ່ນຕອງ - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# ຕົວກັ່ນຕອງ: secure_auth_cookie

ກັ່ນຕອງວ່າ cookie ສຳລັບການຢືນຢັນຕົວຕົນຄວນຖືກສົ່ງຜ່ານ HTTPS ເທົ່ານັ້ນຫຼືບໍ່.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $secure | `bool` | ວ່າ cookie ຄວນຖືກສົ່ງຜ່ານ HTTPS ເທົ່ານັ້ນຫຼືບໍ່. |
| $user_id | `int` | ID ຜູ້ໃຊ້. |

### ຕັ້ງແຕ່ {#since}

- 3.1.0
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໄວ້ໃນ [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) ທີ່ແຖວ 80
