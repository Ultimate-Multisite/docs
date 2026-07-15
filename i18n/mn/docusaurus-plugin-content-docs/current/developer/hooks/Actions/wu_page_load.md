---
id: wu_page_load
title: Үйлдэл - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Plugin хөгжүүлэгчдэд манай хуудсуудад нэмэлт hook нэмэхийг зөвшөөрнө.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $id | `string` | Энэ хуудасны ID. |
| $page_hook | `string` | Энэ хуудасны page hook. |
| $admin_page | `self` | Хуудасны instance. |

### Хойш {#since}

- 1.8.2
- 2.0.4: Гурав дахь параметр нэмсэн: хуудасны instance.
### Эх сурвалж {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318)-д 318-р мөрөнд тодорхойлсон
