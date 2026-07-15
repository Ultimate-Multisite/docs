---
id: wu_page_load
title: Akció - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Akció: wu_page_load

Engedi a plugin fejlesztőknek, hogy további hook-okat adjanak hozzá oldalainkra.

## Paraméterek {#parameters}

| Neve | Típusa | Leírás |
|------|------|-------------|
| $id | `string` | Az oldal azonosítója. |
| $page_hook | `string` | Az oldal hook-ja. |
| $admin_page | `self` | Az oldal példányát. |

### Megjelenés {#since}

- 1.8.2
- 2.0.4: Hozzáadták a harmadik paramétert: az oldal példányát.
### Forrás {#source}

Meghatározva a [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) fájlban, 318-sorban.
