---
id: wu_sso_url
title: ຕົວກອງ - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# ຕົວກັ່ນຕອງ: wu_sso_url {#filter-wussourl}

ກັ່ນຕອງ URL SSO ທີ່ສ້າງຂຶ້ນ ກ່ອນທີ່ຈະສົ່ງຄືນສຳລັບການກະທຳຂອງລູກຄ້າຂ້າມໂດເມນ.

ໃຊ້ຕົວກັ່ນຕອງນີ້ເມື່ອການເຊື່ອມຕໍ່ຈຳເປັນຕ້ອງເພີ່ມບໍລິບົດທີ່ເຊື່ອຖືໄດ້ໃສ່ລິ້ງ SSO ຂອງຜູ້ເຊົ່າແບບອະທິປະໄຕ ຫຼືປ່ຽນ broker URL ໂດຍຍັງຮັກສາການກວດຢືນ token ຂອງ Ultimate Multisite.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $sso_url | `string` | URL SSO ທີ່ສ້າງຂຶ້ນ. |
| $user | `WP_User` | ຜູ້ໃຊ້ທີ່ຈະຖືກຢືນຢັນຕົວຕົນໂດຍການເຂົ້າຊົມ SSO. |
| $site_id | `int` | ID ຂອງເວັບໄຊເປົ້າໝາຍສຳລັບການເຂົ້າຊົມ. |
| $redirect_to | `string` | URL ປາຍທາງຫຼັງຈາກການກວດຢືນ SSO ສຳເລັດ. |

### ຕັ້ງແຕ່ {#since}

- 2.13.0

### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ `inc/sso/class-sso.php`.


## ສົ່ງຄືນ {#returns}

URL SSO ທີ່ຖືກກັ່ນຕອງ.
