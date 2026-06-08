---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_{$this->id}_before_render

Ez az action lehetővé teszi a plugin fejlesztők számára, hogy hozzáadjanak további tartalmat, mielőtt megjelenítjük az oldalt.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $page_id | `string` | Az oldal azonosítója (id). |
| $page | `object` | Az oldal objektuma. |

### Since

- 1.8.2
### Source

Definálva van a [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) fájlban, 398-sorban.
