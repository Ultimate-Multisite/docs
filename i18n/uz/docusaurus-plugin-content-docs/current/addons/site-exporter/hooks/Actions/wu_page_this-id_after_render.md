---
id: wu_page_this-id_after_render
title: 'Amal - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Muayyan sahifa ko‘rsatilgandan keyin ishga tushadi.

Foydalanish: Dinamik qism haqiqiy sahifa id bilan almashtirilishi kerak, masalan add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametrlar

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Sahifaning id qiymati. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page nusxasi. |

### Versiyadan boshlab

- 1.8.2
### Manba

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) faylida 394-qatorda aniqlangan.
