---
id: wu_page_load
title: Action - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Låter plugin-utvecklare lägga till ytterligare hooks på våra sidor.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $id | `string` | ID:t för den här sidan. |
| $page_hook | `string` | Sidans hook för den här sidan. |
| $admin_page | `self` | Sidansteansen. |

### Sedan

- 1.8.2
- 2.0.4: Läggde till tredje parametern: sidans instans.
### Källa

Definieras i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) på rad 318
