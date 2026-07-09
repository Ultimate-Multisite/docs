---
id: wp_ultimo_skip_network_active_check
title: ຕົວກັ່ນຕອງ - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# ຕົວກອງ: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

ອະນຸຍາດໃຫ້ນັກພັດທະນາລັດຂ້າມການກວດສອບການເປີດໃຊ້ງານເຄືອຂ່າຍໄດ້.

ສິ່ງນີ້ມີປະໂຫຍດເມື່ອໃຊ້ການຕັ້ງຄ່າແບບອີງໃສ່ composer ແລະການຕັ້ງຄ່າກຳນົດເອງອື່ນໆ, ເຊັ່ນ Bedrock, ໂດຍຕົວຢ່າງ, ທີ່ການໃຊ້ປລັກອິນເປັນ mu-plugins ເປັນມາດຕະຖານ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $skip_network_activation_check | `bool` | ວ່າພວກເຮົາຄວນຂ້າມການກວດສອບຫຼືບໍ່, ຄ່າເລີ່ມຕົ້ນແມ່ນ false. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ທີ່ແຖວ 272


## ຄ່າທີ່ສົ່ງກັບ {#returns}
true ຖ້າທ່ານຕ້ອງການຂ້າມການກວດສອບ, ບໍ່ດັ່ງນັ້ນແມ່ນ false.
