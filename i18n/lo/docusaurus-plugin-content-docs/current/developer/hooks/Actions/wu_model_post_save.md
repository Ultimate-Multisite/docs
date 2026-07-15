---
id: wu_model_post_save
title: ການດຳເນີນການ - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# ການກະທຳ: wu_model_post_save

ຖືກເອີ້ນໃຊ້ຫຼັງຈາກ object ຖືກເກັບໄວ້ໃນຖານຂໍ້ມູນ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $model | `string` | slug ຂອງ model. |
| $data | `array` | ຂໍ້ມູນ object ທີ່ຈະຖືກເກັບໄວ້, ຖືກ serialize. |
| $data_unserialized | `array` | ຂໍ້ມູນ object ທີ່ຈະຖືກເກັບໄວ້. |
| $this | `\Base_Model` | instance ຂອງ object. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

- ຖືກກຳນົດໃນ [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) ທີ່ແຖວ 613
- ຖືກກຳນົດໃນ [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) ທີ່ແຖວ 1743
