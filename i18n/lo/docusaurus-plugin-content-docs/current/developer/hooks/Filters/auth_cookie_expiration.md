---
id: auth_cookie_expiration
title: ຕົວກອງ - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# ຕົວກອງ: auth_cookie_expiration {#filter-authcookieexpiration}

ກອງໄລຍະເວລາການໝົດອາຍຸຂອງ cookie ການຢືນຢັນຕົວຕົນ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $length | `int` | ໄລຍະເວລາຂອງຊ່ວງໝົດອາຍຸເປັນວິນາທີ. |
| $user_id | `int` | ID ຜູ້ໃຊ້. |
| $remember | `bool` | ວ່າຈະຈື່ຈຳການເຂົ້າລະບົບຂອງຜູ້ໃຊ້ຫຼືບໍ່. ຄ່າເລີ່ມຕົ້ນແມ່ນ false. |

### ຕັ້ງແຕ່ {#since}

- 2.8.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ທີ່ແຖວ 52
