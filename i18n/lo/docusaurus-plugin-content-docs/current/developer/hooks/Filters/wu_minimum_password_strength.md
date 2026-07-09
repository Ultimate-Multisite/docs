---
id: wu_minimum_password_strength
title: ຕົວກອງ - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# ຕົວກອງ: wu_minimum_password_strength

ກອງລະດັບຄວາມແຂງແຮງຂັ້ນຕ່ຳຂອງລະຫັດຜ່ານທີ່ຕ້ອງການ (ຄະແນນ zxcvbn).

ລະດັບຄວາມແຂງແຮງ: - 0, 1: ອ່ອນແອຫຼາຍ - 2: ອ່ອນແອ - 3: ປານກາງ - 4: ແຂງແຮງ (ຄ່າເລີ່ມຕົ້ນ)

## ພາລາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $min_strength | `int` | ລະດັບຄວາມແຂງແຮງຂັ້ນຕ່ຳທີ່ຕ້ອງການ. |
| $strength_setting | `string` | ຄ່າການຕັ້ງຄ່າຂອງຜູ້ບໍລິຫານ (medium, strong, super_strong). |

### ຕັ້ງແຕ່

- 2.4.0
### ແຫຼ່ງທີ່ມາ

ກຳນົດໄວ້ໃນ [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) ທີ່ແຖວ 516
