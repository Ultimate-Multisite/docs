---
id: wu_page_this-id_load
title: 'Үйлдэл - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Plugin хөгжүүлэгчдэд манай хуудсуудад нэмэлт hook-ууд нэмэхийг зөвшөөрнө.

## Параметрүүд {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Энэ хуудасны ID. |
| $page_hook | `string` | Энэ хуудасны page hook. |
| $admin_page | `self` | Хуудасны instance. |

### Үүнээс хойш {#since}

- 1.8.2
- 2.0.4: Гурав дахь параметрийг нэмсэн: хуудасны instance.
### Эх сурвалж {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332)-д 332-р мөрөнд тодорхойлсон
