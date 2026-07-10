---
id: secure_logged_in_cookie
title: ຕົວກັ່ນຕອງ - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# ຕົວກັ່ນຕອງ: secure_logged_in_cookie {#filter-secureloggedincookie}

ກັ່ນຕອງວ່າຄຸກກີທີ່ເຂົ້າລະບົບແລ້ວຄວນຖືກສົ່ງຜ່ານ HTTPS ເທົ່ານັ້ນຫຼືບໍ່.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | ວ່າຄຸກກີທີ່ເຂົ້າລະບົບແລ້ວຄວນຖືກສົ່ງຜ່ານ HTTPS ເທົ່ານັ້ນຫຼືບໍ່. |
| $user_id | `int` | ID ຜູ້ໃຊ້. |
| $secure | `bool` | ວ່າຄຸກກີ auth ຄວນຖືກສົ່ງຜ່ານ HTTPS ເທົ່ານັ້ນຫຼືບໍ່. |

### ຕັ້ງແຕ່ {#since}

- 3.1.0
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໃນ [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) ທີ່ບັນທັດ 91
