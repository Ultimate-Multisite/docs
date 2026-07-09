---
id: wu_page_load
title: Akció - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load {#action-wupageload}

Megengedi a plugin fejlesztőknek, hogy további hook-okat adjanak hozzá oldalainkra.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Az oldal azonosítója. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | A hozzá az oldalhoz generált hook. |

### Amikor {#since}

- 1.8.2
### Forrás {#source}

Meghatározva [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) sor 289-én.
