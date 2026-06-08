---
id: wu_page_added
title: Akció - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Ez lehetővé teszi a plugin fejlesztők számára, hogy futtassanak további kódot, amikor oldalt regisztrálunk.

Az `wu_page_load`-hoz ellentétben, amely csak akkor fut, amikor egy konkrét oldalt néznek, ez a hook minden admin oldal regisztrációjához fut, amelyet Ultimate Multisite kódot használva ad hozzá.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $page_id | `string` | Az oldal azonosítója. |
| $page_hook | `string` | Az oldal hook neve. |

### Since

- 2.0.0
### Source

Definálva [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) fájlban a 228-sorban
