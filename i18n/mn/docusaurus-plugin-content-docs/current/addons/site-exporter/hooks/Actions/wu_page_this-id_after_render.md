---
id: wu_page_this-id_after_render
title: 'Үйлдэл - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Тодорхой хуудсыг дүрсэлсний дараа ажиллана.

Хэрэглээ: Динамик хэсгийг хүчинтэй хуудасны id-аар солих шаардлагатай, жишээ нь add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Хуудасны id. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Үндсэн админ хуудасны инстанц. |

### Хойш {#since}

- 1.8.2
### Эх сурвалж {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394)-д 394-р мөрөнд тодорхойлсон
