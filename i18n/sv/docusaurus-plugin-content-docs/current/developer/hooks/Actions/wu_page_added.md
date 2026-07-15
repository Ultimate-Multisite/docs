---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Låter plugin-utvecklare köra extra kod när sidor registreras.

Till skillnad från `wu_page_load`, som bara körs när en specifik sida visas, körs denna hook vid registreringen för varje administrationssida som läggs till med Ultimate Multisite-kod.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $page_id | `string` | ID:t för den här sidan. |
| $page_hook | `string` | Hook-namnet för den här sidan. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) på rad 228
