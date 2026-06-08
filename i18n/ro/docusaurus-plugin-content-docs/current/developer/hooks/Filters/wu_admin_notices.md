---
id: wu_admin_notices
title: Filter - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filtru: wu_admin_notices

Permite dezvoltatorilor să filtreze notificările de administrare adăugate de Ultimate Multisite.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | Lista de notificări pentru panoul respectiv. |
| $all_notices | `array` | Lista de notificări adăugate, segmentate după panou. |
| $panel | `string` | Panoul pentru care se pot recupera notificările. |
| $filter | `string` | Dacă notificările care pot fi închise au fost filtrate. |
| $dismissed_messages | `array` | Lista cheilor de mesaje de notificare închise. |

### Since

- 2.0.0
### Source

Definit în [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) la linia 121


## Returns
