---
id: wu_domain_renewal_failed
title: ການດຳເນີນການ - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# ການກະທຳ: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

ເກີດຂຶ້ນຫຼັງຈາກຄວາມພະຍາຍາມຕໍ່ອາຍຸໂດເມນລົ້ມເຫຼວ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ການຊຳລະເງິນທີ່ເປັນຕົວກະຕຸ້ນການຕໍ່ອາຍຸ. |
| $renewal_data | `array&lt;string,mixed&gt;` | ເມຕາດາຕາການຕໍ່ອາຍຸ (domain_name, years, ແລະອື່ນໆ). |
| $error_message | `string` | ຂໍ້ຄວາມຜິດພາດທີ່ຄົນອ່ານເຂົ້າໃຈໄດ້ຈາກນາຍທະບຽນ. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ທີ່ແຖວ 630
