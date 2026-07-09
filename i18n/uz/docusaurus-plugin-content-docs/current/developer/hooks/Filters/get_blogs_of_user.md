---
id: get_blogs_of_user
title: Filtr - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtr: get_blogs_of_user

Bu yerda ehtiyot yuzasidan original WP Filter'ni takrorlaydi.

Foydalanuvchi tegishli bo‘lgan saytlar ro‘yxatini filtrlaydi.

## Parametrlar

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $sites | `object[]` | Foydalanuvchiga tegishli sayt obyektlari massivi. |
| $user_id | `int` | Foydalanuvchi ID'si. |
| $all | `bool` | Qaytariladigan saytlar massivi barcha saytlarni, jumladan 'deleted', 'archived' yoki 'spam' deb belgilanganlarini ham o‘z ichiga olishi kerakmi. Standart qiymat false. |

### Versiyadan boshlab

- 2.0.11
### Manba

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) faylida 851-qatorda aniqlangan.
