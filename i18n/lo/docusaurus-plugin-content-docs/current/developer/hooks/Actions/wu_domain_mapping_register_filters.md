---
id: wu_domain_mapping_register_filters
title: ການກະທຳ - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# ການກະທຳ: wu_domain_mapping_register_filters

ບາງ plugin ຈະບັນທຶກ URL ກ່ອນທີ່ການ mapping ຈະເປີດໃຊ້ງານ ຫຼືຈະສ້າງ URL ໃນວິທີທີ່ແຕກຕ່າງ ເຊິ່ງບໍ່ໄດ້ຖືກລວມຢູ່ໃນ filters ຂ້າງເທິງ.

ໃນກໍລະນີແບບນັ້ນ, ພວກເຮົາຕ້ອງການເພີ່ມ filters ເພີ່ມເຕີມ. ພາຣາມິເຕີທີສອງທີ່ຖືກສົ່ງຜ່ານແມ່ນ mangle_url callback. ພວກເຮົາແນະນຳບໍ່ໃຫ້ໃຊ້ filter ນີ້ໂດຍກົງ. ແທນທີ່ນັ້ນ, ໃຫ້ໃຊ້ method Domain_Mapping::apply_mapping_to_url.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $mangle_url | `callable` | callable ສໍາລັບ mangle. |
| $domain_mapper | `self` | object ນີ້. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ທີ່ບັນທັດ 530
