---
id: wu_domain_has_correct_dns
title: ຕົວກອງ - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# ຕົວກອງ: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

ອະນຸຍາດໃຫ້ນັກພັດທະນາປລັກອິນເພີ່ມການກວດສອບໃໝ່ເພື່ອກຳນົດຜົນລັບ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $result | `bool` | ຜົນລັບປັດຈຸບັນ. |
| $domain | `self` | ອິນສະແຕນຂອງໂດເມນປັດຈຸບັນ. |
| $domains_and_ips | `array` | ລາຍການໂດເມນ ແລະ IP ທີ່ພົບໃນການຄົ້ນຫາ DNS. |

### ຕັ້ງແຕ່ {#since}

- 2.0.4
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໃນ [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) ທີ່ແຖວ 455


## ສົ່ງຄືນ {#returns}
ບອກວ່າ DNS ໄດ້ຕັ້ງຄ່າຖືກຕ້ອງຫຼືບໍ່.
