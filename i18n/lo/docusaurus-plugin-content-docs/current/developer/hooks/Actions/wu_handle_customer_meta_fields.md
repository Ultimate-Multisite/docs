---
id: wu_handle_customer_meta_fields
title: ການກະທຳ - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# ການກະທຳ: wu_handle_customer_meta_fields

ອະນຸຍາດໃຫ້ນັກພັດທະນາ plugin ບັນທຶກຂໍ້ມູນ meta ໃນວິທີຕ່າງໆໄດ້ ຖ້າຈຳເປັນ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $meta_repository | `array` | ລາຍການຂອງຟິວ meta, ໂຄງສ້າງແບບ key =&gt; value. |
| $customer | `\Customer` | ອອບເຈັກລູກຄ້າ Ultimate Multisite. |
| $checkout | `\Checkout` | ຄລາສການຊຳລະເງິນ. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ທີ່ບັນທັດ 1211
