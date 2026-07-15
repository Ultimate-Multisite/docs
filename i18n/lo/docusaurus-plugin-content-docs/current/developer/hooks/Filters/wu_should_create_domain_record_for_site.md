---
id: wu_should_create_domain_record_for_site
title: ຕົວກອງ - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Filter ວ່າ Ultimate Multisite ຄວນສ້າງບັນທຶກໂດເມນສຳລັບເວັບໄຊທີ່ສ້າງໃໝ່ຫຼືບໍ່.

ໃຊ້ filter ນີ້ເພື່ອລະງັບ ຫຼື ເລື່ອນການສ້າງບັນທຶກໂດເມນອັດຕະໂນມັດສຳລັບເວັບໄຊທີ່ໃຊ້ໂດເມນພື້ນຖານຂອງແບບຟອມຊຳລະເງິນຮ່ວມກັນ, host ພາຍໃນ, ຫຼື ໂດເມນທີ່ integration ອື່ນຈະຈັດການແຍກຕ່າງຫາກ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $create | `bool` | ວ່າຄວນສ້າງບັນທຶກໂດເມນຫຼືບໍ່. |
| $site | `WP_Site` | ອອບເຈັກເວັບໄຊທີ່ສ້າງໃໝ່. |

### ຕັ້ງແຕ່ {#since}

- 2.13.0

### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ `inc/functions/domain.php`.


## ຄ່າທີ່ສົ່ງກັບ {#returns}

ຄ່າ Boolean ທີ່ລະບຸວ່າຈະສ້າງບັນທຶກໂດເມນຫຼືບໍ່.
