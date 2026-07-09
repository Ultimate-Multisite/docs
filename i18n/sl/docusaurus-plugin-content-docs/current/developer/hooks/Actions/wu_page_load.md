---
id: wu_page_load
title: Dejanje - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Dejanje: wu_page_load

Omogoča razvijalcem pluginov, da našim stranem dodajo dodatne hooke.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $id | `string` | ID te strani. |
| $page_hook | `string` | Hook strani te strani. |
| $admin_page | `self` | Primerek strani. |

### Od

- 1.8.2
- 2.0.4: Dodan tretji parameter: primerek strani.
### Vir

Opredeljeno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) v vrstici 318
