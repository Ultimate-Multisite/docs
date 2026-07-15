---
id: wu_make_primary_domain_redirect_url
title: ຕົວກັ່ນຕອງ - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

ກັ່ນຕອງ URL ສຳລັບປ່ຽນທິດທາງ ຫຼັງຈາກຕັ້ງໂດເມນໃຫ້ເປັນຫຼັກ.

ອະນຸຍາດໃຫ້ນັກພັດທະນາປັບແຕ່ງວ່າຜູ້ໃຊ້ຈະຖືກປ່ຽນທິດທາງໄປບ່ອນໃດ ຫຼັງຈາກຕັ້ງໂດເມນໃຫ້ເປັນຫຼັກສຳເລັດແລ້ວ. ໂດຍຄ່າເລີ່ມຕົ້ນ, ຈະປ່ຽນທິດທາງໄປຍັງ URL ປັດຈຸບັນໃນເວັບໄຊຫຼັກ, ຫຼືໄປຍັງ URL ຜູ້ຄຸ້ມຄອງຂອງເວັບໄຊທີ່ກຳລັງຖືກແກ້ໄຂ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $redirect_url | `string` | URL ສຳລັບປ່ຽນທິດທາງຄ່າເລີ່ມຕົ້ນ. ເປັນ URL ປັດຈຸບັນ (ຖ້າເປັນເວັບໄຊຫຼັກ) ຫຼື URL ຜູ້ຄຸ້ມຄອງຂອງເວັບໄຊປັດຈຸບັນ. |
| $current_site | `int` | ID ຂອງເວັບໄຊທີ່ໂດເມນຂອງມັນກຳລັງຖືກຕັ້ງໃຫ້ເປັນຫຼັກ. |
| $domain | `\Domain` | ວັດຖຸໂດເມນທີ່ຖືກຕັ້ງໃຫ້ເປັນຫຼັກ. |
| $old_primary_domains | `array` | ອາເຣຂອງ ID ຂອງໂດເມນທີ່ເຄີຍເປັນຫຼັກກ່ອນໜ້ານີ້. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ທີ່ບັນທັດ 639


## ສົ່ງຄືນ {#returns}
URL ສຳລັບປ່ຽນທິດທາງທີ່ຖືກກັ່ນຕອງ.
