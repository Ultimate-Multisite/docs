---
id: wu_page_added
title: ການດຳເນີນການ - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# ການກະທຳ: wu_page_added

ອະນຸຍາດໃຫ້ຜູ້ພັດທະນາ plugin ເຮັດສິ່ງເພີ່ມເຕີມເມື່ອໜ້າຖືກລົງທະບຽນ.

ບໍ່ຄືກັບ wu_page_load ທີ່ຈະເຮັດວຽກພຽງແຕ່ເມື່ອໜ້າສະເພາະໃດໜຶ່ງກຳລັງຖືກເບິ່ງ, hook ນີ້ເຮັດວຽກໃນຂັ້ນຕອນການລົງທະບຽນສຳລັບທຸກໜ້າຜູ້ບໍລິຫານທີ່ຖືກເພີ່ມໂດຍໃຊ້ code ຂອງ WP Ultimo.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ຂອງໜ້ານີ້. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | hook ທີ່ຖືກສ້າງສຳລັບໜ້ານີ້. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ທີ່ແຖວ 203
