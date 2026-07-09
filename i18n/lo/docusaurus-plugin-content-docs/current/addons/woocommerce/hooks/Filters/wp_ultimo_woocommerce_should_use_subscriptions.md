---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: ຕົວກອງ - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# ຕົວກອງ: wp_ultimo_woocommerce_should_use_subscriptions

ອະນຸຍາດໃຫ້ນັກພັດທະນາບັງຄັບໃຫ້ໃຊ້ WooCommerce Subscriptions.

ໂດຍຄ່າເລີ່ມຕົ້ນ add-on ຈະກວດສອບວ່າ (1) WooCommerce Subscriptions ມີຢູ່ຫຼືບໍ່ (ບໍ່ວ່າຈະເປັນ plugin ເຕັມ ຫຼື core ທີ່ມາພ້ອມກັນ), ແລ້ວ (2) ກວດສອບການຕັ້ງຄ່າທີ່ເປີດໃຊ້ການໃຊ້ WooCommerce Subscriptions.

## ພາຣາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | ຖ້າຕອນນີ້ພວກເຮົາຈຳເປັນຕ້ອງໃຊ້ Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | ອອບເຈັກປັດຈຸບັນ. |

### ແຫຼ່ງທີ່ມາ

ກຳນົດໄວ້ໃນ [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ທີ່ບັນທັດ 361


## ຄ່າທີ່ສົ່ງກັບ
true ເພື່ອໃຊ້ WooCommerce Subs, false ເພື່ອບໍ່ໃຊ້ມັນ.
