---
id: wu_domain_seller_process_purchase
title: ການກະທຳ - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# ການກະທຳ: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

ເກີດຂຶ້ນເມື່ອການຊື້ໂດເມນກຳລັງຖືກປະມວນຜົນຫຼັງຈາກການຊຳລະເງິນສຳເລັດ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ອອບເຈັກການຊຳລະເງິນ. |
| $checkout_data | `array&lt;string,mixed&gt;` | ຂໍ້ມູນການຊຳລະເງິນທັງໝົດຈາກແບບຟອມລົງທະບຽນ. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ທີ່ແຖວ 246
