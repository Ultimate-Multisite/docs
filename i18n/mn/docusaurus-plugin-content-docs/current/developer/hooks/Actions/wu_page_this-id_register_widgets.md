---
id: wu_page_this-id_register_widgets
title: 'Үйлдэл - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets {#action-wupagethis-idregisterwidgets}

Энэ хуудсанд зориулсан виджетүүд бүртгэгдсэний дараа ажиллана.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $id | `string` | Хуудасны id. |
| $page_hook | `string` | Хуудасны hook. |
| $page | `object` | Хуудасны объект. |

### Хувилбараас {#since}

- 2.4.10
### Эх сурвалж {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755)-д 755-р мөрөнд тодорхойлсон
