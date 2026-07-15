---
id: wu_get_checkout_variables
title: ຕົວກອງ - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# ຕົວກອງ: wu_get_checkout_variables

ອະນຸຍາດໃຫ້ນັກພັດທະນາ plugin ກອງຄ່າທີ່ຕັ້ງໄວ້ລ່ວງໜ້າຂອງໜ້າ checkout.

ຈົ່ງລະວັງ, key ທີ່ຂາດຫາຍໄປສາມາດເຮັດໃຫ້ checkout ໃນ front-end ເສຍໄດ້ຢ່າງສົມບູນ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $variables | `array` | ຕົວແປທີ່ຖືກແປໃຫ້ເໝາະກັບທ້ອງຖິ່ນ. |
| $checkout | `\Checkout` | ຄລາສ checkout. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໃນ [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) ທີ່ແຖວ 1970


## ຄ່າທີ່ສົ່ງກັບ {#returns}
array ຕົວແປໃໝ່.
