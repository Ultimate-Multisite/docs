---
id: wu_page_added
title: Akció - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

Lehetővé teszi a plugin fejlesztőknek, hogy futtassanak további kódot, amikor oldalt regisztrálnak.

Egy másféltől eltérően, mint a `wu_page_load`, amely csak akkor fut, ha egy konkrét oldalt néznek, ez a hook a regisztráció során fut minden olyan admin oldalon, amelyet a WP Ultimo kód segítségével ad hozzá.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Az oldal azonosítója. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Az oldalhoz generált hook. |

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) fájlban a 203-sorban.
