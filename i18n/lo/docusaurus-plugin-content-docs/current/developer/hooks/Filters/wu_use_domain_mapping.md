---
id: wu_use_domain_mapping
title: ຕົວກອງ - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

ກຳນົດວ່າຄວນໃຊ້ການຈັບຄູ່ຫຼືບໍ່

ໂດຍທົ່ວໄປ ທ່ານຈະຕ້ອງການອະນຸຍາດໃຫ້ໃຊ້ສະເພາະການຈັບຄູ່ທີ່ເປີດໃຊ້ງານຢູ່ເທົ່ານັ້ນ. ຢ່າງໃດກໍຕາມ ຖ້າທ່ານຕ້ອງການໃຊ້ເຫດຜົນຂັ້ນສູງກວ່ານີ້ ຫຼືອະນຸຍາດໃຫ້ໂດເມນທີ່ບໍ່ເປີດໃຊ້ງານຖືກຈັບຄູ່ໄດ້ເຊັ່ນກັນ ກໍພຽງແຕ່ກັ່ນຕອງຢູ່ບ່ອນນີ້.

## ພາລາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $is_active | `bool` | ຄວນຖືວ່າການຈັບຄູ່ນີ້ເປີດໃຊ້ງານຢູ່ບໍ່? |
| $mapping | `\Domain` | ການຈັບຄູ່ທີ່ພວກເຮົາກຳລັງກວດເບິ່ງ |
| $domain | `string` |  |

### ແຫຼ່ງທີ່ມາ

ກຳນົດໄວ້ໃນ [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) ທີ່ແຖວ 391
