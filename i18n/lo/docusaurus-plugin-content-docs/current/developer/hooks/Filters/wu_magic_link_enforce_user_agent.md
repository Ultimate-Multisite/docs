---
id: wu_magic_link_enforce_user_agent
title: ຕົວກອງ - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# ຟິວເຕີ: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

ຟິວເຕີວ່າຈະບັງຄັບໃຊ້ການກວດສອບ user agent ຫຼືບໍ່.

ຕັ້ງເປັນ false ເພື່ອໃຫ້ token ໃຊ້ງານໄດ້ຂ້າມ browser/device ທີ່ແຕກຕ່າງກັນ. ສິ່ງນີ້ຫຼຸດຄວາມປອດໄພແຕ່ເພີ່ມຄວາມສະດວກໃນການໃຊ້ງານ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $enforce | `bool` | ຈະບັງຄັບໃຊ້ການຈັບຄູ່ user agent ຫຼືບໍ່. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໃນ [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) ທີ່ບັນທັດ 410
