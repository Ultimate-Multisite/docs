---
id: wu_admin_notices
title: Szűrő - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Szűrő: wu_admin_notices

Ez a szűrő lehetővé teszi a fejlesztők számára, hogy Ultimate Multisite által hozzáadott admin értesítéseket szűrjenek.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $notices | `array` | Lista az adott panel értesítéseiről. |
| $all_notices | `array` | Lista az összes hozzáadott értesítésről, panelenként elkülönítve. |
| $panel | `string` | A panel, amelyről az értesítéseket kell lekérni. |
| $filter | `string` | Megmutatja, hogy az elhagyható értesítéseket szűrődtek-e ki. |
| $dismissed_messages | `array` | Lista az elhagyott értesítések kulcai. |

### Since

- 2.0.0
### Source

Definíciója található [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) fájlban, 121-sorban.


## Vrászik vissza
