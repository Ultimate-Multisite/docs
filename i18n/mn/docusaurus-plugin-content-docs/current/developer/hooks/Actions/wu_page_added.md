---
id: wu_page_added
title: Үйлдэл - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Хуудсууд бүртгэгдэх үед plugin хөгжүүлэгчдэд нэмэлт зүйлс ажиллуулах боломж олгоно.

Зөвхөн тодорхой хуудас харагдаж байх үед ажилладаг wu_page_load-оос ялгаатай нь энэ hook нь Ultimate Multisite код ашиглан нэмэгдэж буй админ хуудас бүрийн бүртгэлийн үед ажилладаг.

## Параметрүүд

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $page_id | `string` | Энэ хуудасны ID. |
| $page_hook | `string` | Энэ хуудасны hook нэр. |

### Хувилбараас хойш

- 2.0.0
### Эх сурвалж

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) файлд 228-р мөрөнд тодорхойлсон.
