---
id: wu_pending_payment_message
title: ຕົວກອງ - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# ຕົວກອງ: wu_pending_payment_message

ອະນຸຍາດໃຫ້ຜູ້ໃຊ້ປ່ຽນຂໍ້ຄວາມກ່ຽວກັບການຊຳລະເງິນທີ່ຍັງຄ້າງຢູ່.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $message | `string` | ຂໍ້ຄວາມທີ່ຈະພິມອອກ. |
| $customer | `\WP_Ultimo\Models\Customer` | ລູກຄ້າປັດຈຸບັນ. |
| $pending_payments | `array` | ລາຍການທີ່ມີການຊຳລະເງິນທີ່ຍັງຄ້າງຢູ່. |

### ຕັ້ງແຕ່ {#since}

- 2.0.19
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ທີ່ແຖວ 244
