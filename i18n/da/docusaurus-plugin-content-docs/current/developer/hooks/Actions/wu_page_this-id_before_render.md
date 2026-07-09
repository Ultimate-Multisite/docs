---
id: wu_page_this-id_before_render
title: 'Handling - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_\{$this->id\}_before_render

Gør det muligt for udvidelsesudviklere at tilføje yderligere indhold, før vi udskriver siden.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $page_id | `string` | ID'et for denne side. |
| $page | `object` | Sideobjektet. |

### Siden

- 1.8.2
### Kilde

Defineret i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) på linje 398
