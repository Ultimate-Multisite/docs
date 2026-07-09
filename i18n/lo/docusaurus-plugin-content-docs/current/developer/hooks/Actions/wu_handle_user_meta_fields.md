---
id: wu_handle_user_meta_fields
title: ການກະທຳ - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# ການກະທຳ: wu_handle_user_meta_fields

ອະນຸຍາດໃຫ້ນັກພັດທະນາ plugin ບັນທຶກຂໍ້ມູນ meta ຂອງຜູ້ໃຊ້ໃນວິທີຕ່າງໆ ຖ້າພວກເຂົາຕ້ອງການ.

## ພາຣາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $meta_repository | `array` | ລາຍການຂອງ meta fields, ມີໂຄງສ້າງ key =&gt; value. |
| $user | `\WP_User` | ອອບເຈັກຜູ້ໃຊ້ WordPress. |
| $customer | `\Customer` | ອອບເຈັກລູກຄ້າ Ultimate Multisite. |
| $checkout | `\Checkout` | ຄລາສ checkout. |

### ຕັ້ງແຕ່

- 2.0.4
### ແຫຼ່ງທີ່ມາ

ກຳນົດໄວ້ໃນ [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ທີ່ແຖວ 1244
