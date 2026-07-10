---
id: wu_woocommerce_line_item_params
title: ຕົວກອງ - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# ຕົວກັ່ນຕອງ: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

ກັ່ນຕອງພາຣາມິເຕີທີ່ໃຊ້ເພື່ອສ້າງລາຍການແຖວໃນກະຕ່າ WooCommerce, ກ່ອນຈະປ່ຽນທິດທາງລູກຄ້າໄປຫາໜ້າຊຳລະເງິນຂອງ WooCommerce.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $line_item_params | `array` | ພາຣາມິເຕີຂອງລາຍການແຖວໃນກະຕ່າ. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | ອິນສະແຕນຂອງລາຍການແຖວ Ultimate Multisite. |
| $wc_product | `\WC_Product` | ຜະລິດຕະພັນ WooCommerce. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) ທີ່ແຖວ 662


## ຄ່າທີ່ສົ່ງກັບ {#returns}
ພາຣາມິເຕີຂອງລາຍການແຖວທີ່ຖືກປັບແກ້.
