---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: ຕົວກອງ - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# ຕົວກັ່ນຕອງ: wp_ultimo_woocommerce_checkout_fields_to_clean

ອະນຸຍາດໃຫ້ນັກພັດທະນາກັ່ນຕອງຊ່ອງຂໍ້ມູນທີ່ຢູ່ສຳລັບໃບແຈ້ງໜີ້ຄ່າເລີ່ມຕົ້ນຂອງ WooCommerce.

ເນື່ອງຈາກ Ultimate Multisite ມີຊ່ອງຂໍ້ມູນທີ່ຢູ່ສຳລັບໃບແຈ້ງໜີ້, ອາດຈະສົມເຫດສົມຜົນທີ່ຈະລຶບຊ່ອງຂໍ້ມູນເລີ່ມຕົ້ນທີ່ WooCommerce ສະແດງໃນແບບຟອມ checkout. ໂດຍຄ່າເລີ່ມຕົ້ນ, ບໍ່ມີຄ່າໃດຖືກສົ່ງໄປຫາລາຍການນີ້, ດັ່ງນັ້ນຊ່ອງຂໍ້ມູນທັງໝົດທີ່ຕັ້ງຄ່າໃນ WooCommerce ໃຫ້ສະແດງຈະຖືກເກັບໄວ້.

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໃນ [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ທີ່ແຖວ 277


## ຄ່າທີ່ສົ່ງຄືນ {#returns}
ລາຍການຂອງຊ່ອງຂໍ້ມູນທີ່ຈະລຶບອອກ. ຄ່າທີ່ມີໃຫ້ໃຊ້ລວມມີ billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, ແລະ billing_phone.
