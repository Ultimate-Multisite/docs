---
id: wu_page_get_title_links
title: Szűrő - wu_page_get_title_links
sidebar_label: wu_page_get_title_links
_i18n_hash: c0ede349078aea8e4fe06e53a12b1c38
---
# Szűrő: wu_page_get_title_links

Ez a szűrő lehetővé teszi a plugin fejlesztők számára, és magunk számára is, hogy hozzáadjunk műveleti linkeket a szerkesztő oldalainkra.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $action_links | `array\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | A műveleti linkek. |
| $base_admin_page | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ez az példány. |

### Since

- 1.8.2
### Source

Definíciója található [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L646) fájlban, 646-sorban.


## Várható érték
A műveleti linkek (actions links) tömbét adja vissza.
