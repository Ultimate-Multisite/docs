---
id: wu_page_this-id_register_widgets
title: 'ການກະທຳ - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

ເກີດຂຶ້ນຫຼັງຈາກ widgets ຖືກລົງທະບຽນສຳລັບໜ້ານີ້.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $id | `string` | id ຂອງໜ້າ. |
| $page_hook | `string` | hook ຂອງໜ້າ. |
| $page | `object` | ອອບເຈັກຂອງໜ້າ. |

### ຕັ້ງແຕ່ {#since}

- 2.4.10
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໄວ້ໃນ [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) ທີ່ແຖວ 755
