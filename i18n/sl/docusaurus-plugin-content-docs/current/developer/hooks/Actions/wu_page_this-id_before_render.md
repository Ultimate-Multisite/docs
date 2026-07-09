---
id: wu_page_this-id_before_render
title: 'Dejanje - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_\{$this->id\}_before_render

Omogočite razvijalcem vtičnikov, da dodajo dodatno vsebino, preden izpišemo stran.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $page_id | `string` | ID te strani. |
| $page | `object` | Objekt strani. |

### Od različice

- 1.8.2
### Vir

Določeno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) v vrstici 398
