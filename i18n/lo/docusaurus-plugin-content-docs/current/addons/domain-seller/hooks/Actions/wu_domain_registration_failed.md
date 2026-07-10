---
id: wu_domain_registration_failed
title: ການກະທຳ - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# ການກະທຳ: wu_domain_registration_failed {#action-wudomainregistrationfailed}

ເຮັດວຽກຫຼັງຈາກຄວາມພະຍາຍາມຈົດທະບຽນໂດເມນລົ້ມເຫຼວ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ການຊຳລະເງິນທີ່ກະຕຸ້ນການຈົດທະບຽນ. |
| $registration_data | `array&lt;string,mixed&gt;` | ຂໍ້ມູນ metadata ການຈົດທະບຽນ ລວມທັງ status=failed ແລະ error_message. |
| $error_message | `string` | ຂໍ້ຄວາມຂໍ້ຜິດພາດທີ່ມະນຸດອ່ານໄດ້ຈາກຜູ້ຈົດທະບຽນ. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ທີ່ບັນທັດ 1250
