---
id: wu_return_url
title: ຕົວກອງ - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# ຕົວກອງ: wu_return_url {#filter-wureturnurl}

ອະນຸຍາດໃຫ້ນັກພັດທະນາປ່ຽນ URL ກັບຄືນຂອງຕົວກາງການຊຳລະເງິນທີ່ໃຊ້ຫຼັງຈາກຂະບວນການຊຳລະເງິນ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $return_url | `string` | URL ສຳລັບເປີດໄປຫຼັງຈາກຂະບວນການ. |
| $gateway | `self` | ອິນສະແຕນຂອງຕົວກາງການຊຳລະເງິນ. |
| $payment | `\WP_Ultimo\Models\Payment` | ອິນສະແຕນການຊຳລະເງິນຂອງ Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | ຄຳສັ່ງຊື້ໃນກະຕ່າປັດຈຸບັນຂອງ Ultimate Multisite. |

### ຕັ້ງແຕ່ {#since}

- 2.0.20
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ທີ່ແຖວ 683


## ຄ່າທີ່ສົ່ງຄືນ {#returns}
