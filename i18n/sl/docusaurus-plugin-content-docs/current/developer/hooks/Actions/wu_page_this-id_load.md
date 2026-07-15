---
id: wu_page_this-id_load
title: 'Dejanje - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Omogočite razvijalcem pluginov, da na naše strani dodajo dodatne hooke.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $id | `string` | ID te strani. |
| $page_hook | `string` | Page hook te strani. |
| $admin_page | `self` | Instanca strani. |

### Od različice {#since}

- 1.8.2
- 2.0.4: Dodan tretji parameter: instanca strani.
### Vir {#source}

Določeno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) v vrstici 332
