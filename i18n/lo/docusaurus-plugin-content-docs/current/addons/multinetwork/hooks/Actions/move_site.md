---
id: move_site
title: ການກະທຳ - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# ການກະທຳ: move_site

ເກີດຂຶ້ນຫຼັງຈາກເວັບໄຊໜຶ່ງຖືກຍ້າຍໄປຫາເຄືອຂ່າຍໃໝ່.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $site_id | `int` | ID ຂອງເວັບໄຊທີ່ຖືກຍ້າຍ. |
| $old_network_id | `int` | ID ຂອງເຄືອຂ່າຍເດີມສຳລັບເວັບໄຊ. |
| $new_network_id | `int` | ID ຂອງເຄືອຂ່າຍທີ່ເວັບໄຊຖືກຍ້າຍໄປຫາ. |

### ຕັ້ງແຕ່ {#since}

- 1.3.0
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໃນ [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) ທີ່ແຖວ 1587
