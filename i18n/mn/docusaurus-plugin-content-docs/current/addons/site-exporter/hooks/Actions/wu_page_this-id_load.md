---
id: wu_page_this-id_load
title: 'Үйлдэл - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Plugin хөгжүүлэгчдэд тодорхой хуудсанд нэмэлт hook нэмэх боломж олгоно.

Хэрэглээ: Динамик хэсгийг хүчинтэй хуудасны ID-аар солих шаардлагатай, жишээ нь add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Энэ хуудасны ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Энэ хуудсанд үүсгэсэн hook. |

### Эхэлсэн хувилбар {#since}

- 1.8.2
### Эх сурвалж {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) дотор 301-р мөрөнд тодорхойлсон.
