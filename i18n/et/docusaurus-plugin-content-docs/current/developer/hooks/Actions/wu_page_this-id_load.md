---
id: wu_page_this-id_load
title: 'Toiming - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Võimaldab pluginate arendajatel lisada meie lehtedele täiendavaid haake.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $id | `string` | The ID of this page. |
| $page_hook | `string` | The page hook of this page. |
| $admin_page | `self` | TThe page instance. |

### Alates

- 1.8.2
- 2.0.4: Lisatud kolmas parameeter: lehe instants.
### Allikas

Määratletud failis [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) real 332
