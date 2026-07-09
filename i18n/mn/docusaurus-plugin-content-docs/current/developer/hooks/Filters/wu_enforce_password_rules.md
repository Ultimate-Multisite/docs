---
id: wu_enforce_password_rules
title: Шүүлтүүр - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Шүүлтүүр: wu_enforce_password_rules

Нэмэлт нууц үгийн дүрмүүдийг хэрэгжүүлэх эсэхийг шүүнэ.

Үнэн үед хамгийн бага урт болон тэмдэгтийн шаардлагуудыг хэрэгжүүлнэ. "Super Strong" тохиргоонд эсвэл Defender Pro-ийн Strong Password боломж идэвхтэй үед автоматаар идэвхждэг.

## Параметрүүд

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $enforce_rules | `bool` | Нэмэлт дүрмүүдийг хэрэгжүүлэх эсэх. |
| $strength_setting | `string` | Админы тохиргооны утга. |
| $defender_active | `bool` | Defender Pro Strong Password идэвхтэй эсэх. |

### Хувилбараас

- 2.4.0
### Эх сурвалж

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531)-д 531-р мөрөнд тодорхойлсон
