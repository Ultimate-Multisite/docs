---
id: wu_page_this-id_load
title: 'Amal - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Plugin ishlab chiquvchilariga muayyan sahifaga qo‘shimcha hooklar qo‘shishga ruxsat beradi.

Foydalanish: Dinamik qism yaroqli sahifa id bilan almashtirilishi kerak, masalan, add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ushbu sahifaning IDsi. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ushbu sahifa uchun yaratilgan hook. |

### Dan beri {#since}

- 1.8.2
### Manba {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) faylida, 301-qatorda aniqlangan.
