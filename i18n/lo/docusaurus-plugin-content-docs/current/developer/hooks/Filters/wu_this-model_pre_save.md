---
id: wu_this-model_pre_save
title: 'ຕົວກັ່ນຕອງ - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

ກັ່ນຕອງຂໍ້ມູນອອບເຈັກກ່ອນທີ່ຈະຖືກເກັບລົງໃນຖານຂໍ້ມູນ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $data | `array` | ຂໍ້ມູນອອບເຈັກທີ່ຈະຖືກເກັບ, ໃນຮູບແບບ serialized. |
| $data_unserialized | `array` | ຂໍ້ມູນອອບເຈັກທີ່ຈະຖືກເກັບ. |
| $this | `\Base_Model` | instance ຂອງອອບເຈັກ. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) ທີ່ບັນທັດ 570
