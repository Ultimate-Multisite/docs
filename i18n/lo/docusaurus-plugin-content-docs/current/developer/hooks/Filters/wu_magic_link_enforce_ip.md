---
id: wu_magic_link_enforce_ip
title: ຕົວກອງ - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filter ວ່າຈະບັງຄັບການຢືນຢັນທີ່ຢູ່ IP ຫຼືບໍ່.

ຕັ້ງເປັນ false ເພື່ອອະນຸຍາດໃຫ້ tokens ໃຊ້ໄດ້ຈາກເຄືອຂ່າຍຕ່າງກັນ. ນີ້ຫຼຸດຄວາມປອດໄພແຕ່ເພີ່ມຄວາມໃຊ້ງານງ່າຍ (ຕົວຢ່າງ, ສຳລັບຜູ້ໃຊ້ມືຖືທີ່ສະຫຼັບເຄືອຂ່າຍ).

## ພາລາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $enforce | `bool` | ວ່າຈະບັງຄັບການຈັບຄູ່ທີ່ຢູ່ IP ຫຼືບໍ່. |

### ຕັ້ງແຕ່

- 2.0.0
### ແຫຼ່ງທີ່ມາ

ຖືກກຳນົດໄວ້ໃນ [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) ທີ່ແຖວ 422
