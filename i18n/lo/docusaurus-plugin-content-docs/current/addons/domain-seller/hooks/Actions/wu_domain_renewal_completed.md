---
id: wu_domain_renewal_completed
title: ການກະທຳ - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

ເກີດຂຶ້ນຫຼັງຈາກໂດເມນຖືກຕໍ່ອາຍຸສຳເລັດແລ້ວ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ການຊຳລະເງິນທີ່ກະຕຸ້ນການຕໍ່ອາຍຸ. |
| $renewal_data | `array&lt;string,mixed&gt;` | ຂໍ້ມູນເມຕາຂອງການຕໍ່ອາຍຸ (domain_name, years, customer_id, ແລະອື່ນໆ). |
| $result | `array&lt;string,mixed&gt;` | ອາເຣຜົນລັບດິບທີ່ສົ່ງກັບໂດຍຜູ້ຈົດທະບຽນ ລວມທັງ expiry_date ໃໝ່. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ທີ່ແຖວ 594
