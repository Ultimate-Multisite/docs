---
id: wu_enforce_password_rules
title: Filtr - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Qo‘shimcha parol qoidalarini qo‘llash-qo‘llamaslikni filterlaydi.

true bo‘lganda, minimal uzunlik va belgi talablarini qo‘llaydi. "Super Strong" sozlamasi uchun yoki Defender Pro'ning Strong Password funksiyasi faol bo‘lganda avtomatik yoqiladi.

## Parametrlar

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $enforce_rules | `bool` | Qo‘shimcha qoidalarni qo‘llash-qo‘llamaslik. |
| $strength_setting | `string` | Admin sozlamasi qiymati. |
| $defender_active | `bool` | Defender Pro Strong Password faol yoki yo‘qligi. |

### Dan boshlab

- 2.4.0
### Manba

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ichida 531-qatorda aniqlangan.
