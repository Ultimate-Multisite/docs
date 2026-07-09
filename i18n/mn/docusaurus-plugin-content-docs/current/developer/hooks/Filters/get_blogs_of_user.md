---
id: get_blogs_of_user
title: Шүүлтүүр - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Энд анхны WP Filter-ийг лавлагааны үүднээс давтсан болно.

Хэрэглэгчийн харьяалагддаг сайтуудын жагсаалтыг шүүнэ.

## Параметрүүд

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $sites | `object[]` | Хэрэглэгчийн харьяалагддаг сайт объектуудын массив. |
| $user_id | `int` | Хэрэглэгчийн ID. |
| $all | `bool` | Буцаагдах сайтуудын массив нь 'deleted', 'archived' эсвэл 'spam' гэж тэмдэглэгдсэн сайтуудыг оролцуулан бүх сайтыг агуулсан байх эсэх. Анхдагч нь false. |

### Хувилбараас

- 2.0.11
### Эх сурвалж

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851)-д 851-р мөрөнд тодорхойлсон.
