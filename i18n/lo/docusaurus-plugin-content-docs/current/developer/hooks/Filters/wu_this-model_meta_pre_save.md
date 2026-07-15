---
id: wu_this-model_meta_pre_save
title: 'ຕົວກັ່ນຕອງ - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

ກັ່ນຕອງຂໍ້ມູນ meta ກ່ອນທີ່ມັນຈະຖືກ serialized ເພື່ອຈັດເກັບເຂົ້າໃນຖານຂໍ້ມູນ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $meta | `array` | ຂໍ້ມູນ meta ທີ່ຈະຖືກຈັດເກັບ, unserializedserialized. |
| $data_unserialized | `array` | ຂໍ້ມູນອອບເຈັກທີ່ຈະຖືກຈັດເກັບ. |
| $this | `\Base_Model` | instance ຂອງອອບເຈັກ. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) ທີ່ແຖວ 534
