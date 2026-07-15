---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Lar plugin-utviklere legge til ekstra hooks på sidene våre.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $id | `string` | ID-en til denne siden. |
| $page_hook | `string` | Sidens hook for denne siden. |
| $admin_page | `self` | Selve side-instansen. |

### Siden {#since}

- 1.8.2
- 2.0.4: Legget til tredje parameter: side-instansen.
### Kilde {#source}

Definert i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) på linje 332
