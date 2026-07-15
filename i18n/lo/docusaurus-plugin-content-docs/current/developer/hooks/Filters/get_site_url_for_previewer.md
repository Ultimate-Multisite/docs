---
id: get_site_url_for_previewer
title: ຕົວກອງ - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

ອະນຸຍາດໃຫ້ຜູ້ພັດທະນາ plugin ກັ່ນຕອງ URL ທີ່ໃຊ້ໃນຕົວສະແດງຕົວຢ່າງ

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $domain | `string` | ໂດເມນເລີ່ມຕົ້ນທີ່ກຳລັງໃຊ້ຢູ່ຕອນນີ້, ມີປະໂຫຍດສຳລັບການປັບແຕ່ງ |
| $domain_options | `array` | ລາຍຊື່ຕົວເລືອກໂດເມນທັງໝົດທີ່ປ້ອນໃນ Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options |

### ຕັ້ງແຕ່ {#since}

- 1.7.2
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໄວ້ໃນ [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) ທີ່ບັນທັດ 812


## ສົ່ງຄືນ {#returns}
ໂດເມນໃໝ່ທີ່ຈະໃຊ້
