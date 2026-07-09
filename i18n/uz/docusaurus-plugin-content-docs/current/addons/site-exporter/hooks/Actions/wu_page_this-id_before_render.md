---
id: wu_page_this-id_before_render
title: 'Amal - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Muayyan sahifani render qilishdan oldin ishga tushadi.

Foydalanish: Dinamik qism yaroqli sahifa id si bilan almashtirilishi kerak, masalan add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Sahifaning id si. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page nusxasi. |

### Boshlab {#since}

- 1.8.2
### Manba {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) faylida 368-qatorda taʼriflangan
