---
id: wu_maybe_create_customer
title: ການດຳເນີນການ - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# ການກະທຳ: wu_maybe_create_customer {#action-wumaybecreatecustomer}

ອະນຸຍາດໃຫ້ຜູ້ພັດທະນາ plugin ເຮັດສິ່ງເພີ່ມເຕີມໄດ້ເມື່ອເພີ່ມລູກຄ້າແລ້ວ.

ນີ້ແມ່ນບ່ອນທີ່ເຮົາເພີ່ມ hooks ສຳລັບການເພີ່ມ customer-&gt;user ໄປຍັງເວັບໄຊຫຼັກດ້ວຍ, ເປັນຕົວຢ່າງ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $customer | `\Customer` | ລູກຄ້າທີ່ອາດຖືກສ້າງຂຶ້ນ. |
| $checkout | `\Checkout` | ຄລາສ checkout ປັດຈຸບັນ. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໄວ້ໃນ [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) ທີ່ແຖວ 1156
