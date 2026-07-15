---
id: wu_domain_registration_completed
title: ການກະທຳ - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

ເກີດຂຶ້ນຫຼັງຈາກໂດເມນໄດ້ຖືກລົງທະບຽນສຳເລັດແລ້ວ.

## ພາລາມິເຕີ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ການຊຳລະເງິນທີ່ເປັນຕົວກະຕຸ້ນການລົງທະບຽນ. |
| $registration_data | `array&lt;string,mixed&gt;` | ຂໍ້ມູນ metadata ການລົງທະບຽນ (domain_name, provider_id, years, expiry_date, ແລະອື່ນໆ). |
| $result | `array&lt;string,mixed&gt;` | ອາເຣຜົນລັບດິບທີ່ຖືກສົ່ງກັບໂດຍ registrar. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ທີ່ບັນທັດ 1204
