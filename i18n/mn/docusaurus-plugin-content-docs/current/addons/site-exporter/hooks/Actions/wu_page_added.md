---
id: wu_page_added
title: Үйлдэл - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Үйлдэл: wu_page_added

Хуудас бүртгэгдэх үед plugin хөгжүүлэгчдэд нэмэлт зүйлс ажиллуулах боломж олгоно.

Зөвхөн тодорхой хуудас харагдаж байх үед ажилладаг wu_page_load-оос ялгаатай нь энэ hook нь WP Ultimo код ашиглан нэмэгдэж буй admin хуудас бүрийн бүртгэлийн үед ажилладаг.

## Параметрүүд

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Энэ хуудасны ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Энэ хуудсанд үүсгэсэн hook. |

### Хувилбараас

- 2.0.0
### Эх сурвалж

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) дотор 203-р мөрөнд тодорхойлогдсон.
