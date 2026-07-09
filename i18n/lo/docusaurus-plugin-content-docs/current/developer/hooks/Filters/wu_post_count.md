---
id: wu_post_count
title: ຕົວກອງ - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

ອະນຸຍາດໃຫ້ນັກພັດທະນາ plugin ປ່ຽນຍອດຈຳນວນລວມ

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $count | `int` | ຈຳນວນໂພສທັງໝົດ |
| $post_counts | `object` | ອອບເຈັກ WordPress ທີ່ສົ່ງຄືນໂດຍ wp_count_posts fn |
| $post_type | `string` | slug ປະເພດໂພສ |

### ຕັ້ງແຕ່ {#since}

- 1.9.1
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໃນ [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) ທີ່ບັນທັດ 136


## ສົ່ງຄືນ {#returns}
ຍອດລວມໃໝ່
