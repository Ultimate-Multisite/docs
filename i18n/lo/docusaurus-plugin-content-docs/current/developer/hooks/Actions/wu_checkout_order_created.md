---
id: wu_checkout_order_created
title: ການກະທຳ - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

ເກີດຂຶ້ນຫຼັງຈາກຄຳສັ່ງ checkout ຖືກປະກອບເຕັມແລ້ວ.

Addons ສາມາດໃຊ້ສິ່ງນີ້ເພື່ອສ້າງສະມາຊິກພາບຮອງສຳລັບຜະລິດຕະພັນທີ່ມີຮອບການເກັບເງິນແຍກຕ່າງຫາກ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | ອອບເຈັກ cart/order. |
| $customer | `\WP_Ultimo\Models\Customer` | ລູກຄ້າ. |
| $membership | `\WP_Ultimo\Models\Membership` | ສະມາຊິກພາບຫຼັກ. |
| $payment | `\WP_Ultimo\Models\Payment` | ການຊຳລະເງິນ. |

### ຕັ້ງແຕ່ {#since}

- 2.5.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ທີ່ແຖວ 891
