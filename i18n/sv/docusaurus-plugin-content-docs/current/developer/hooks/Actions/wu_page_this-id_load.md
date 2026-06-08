---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Låter plugin-utvecklare lägga till ytterligare hooks på våra sidor.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $id | `string` | ID:t för den här sidan. |
| $page_hook | `string` | Sidans hook för den här sidan. |
| $admin_page | `self` | Sidinstansen. |

### Sedan

- 1.8.2
- 2.0.4: Lägger till tredje parametern: sidinstansen.
### Källa

Definieras i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) på rad 332
