---
id: wu_domain_seller_search_delay
title: ຕົວກັ່ນຕອງ - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# ຕົວກອງ: wu_domain_seller_search_delay

ກອງຄວາມລ່າຊ້າ debounce ຂອງການຄົ້ນຫາໂດເມນໃນຫົວໜ່ວຍມິລິວິນາທີ.

ເພີ່ມຄ່ານີ້ເພື່ອຫຼຸດການເອີ້ນ API ໃນການເຊື່ອມຕໍ່ທີ່ຊ້າ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $delay | `int` | ຄວາມລ່າຊ້າ debounce ໃນຫົວໜ່ວຍມິລິວິນາທີ. ຄ່າເລີ່ມຕົ້ນ 500. |

### ມີຕັ້ງແຕ່ {#since}

- 2.1.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) ທີ່ແຖວ 854
