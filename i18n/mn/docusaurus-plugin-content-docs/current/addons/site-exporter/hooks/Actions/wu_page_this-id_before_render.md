---
id: wu_page_this-id_before_render
title: 'Үйлдэл - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Тодорхой хуудсыг дүрслэхээс өмнө ажиллана.

Хэрэглээ: Динамик хэсгийг хүчинтэй хуудасны id-аар солих шаардлагатай, жишээ нь add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Параметрүүд

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Хуудасны id. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page инстанц. |

### Хойш

- 1.8.2
### Эх сурвалж

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368)-д 368-р мөрөнд тодорхойлсон
