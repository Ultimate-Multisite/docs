---
id: wu_page_this-id_load
title: 'Akció - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Ez lehetővé teszi a plugin fejlesztők számára, hogy további hook-okat adjanak hozzá oldalainkhoz.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Az oldal azonosítója. |
| $page_hook | `string` | Az oldal hook-ja. |
| $admin_page | `self` | Az oldal példányát. |

### Mikor elérhető {#since}

- 1.8.2
- 2.0.4: Hozzáadva a harmadik paramétert: az oldal példányát.
### Forrás {#source}

Definálva [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) fájlban a 332-es soron.
