---
id: wu_page_load
title: Radnja - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Omogućuje programerima dodataka dodavanje dodatnih hookova na naše stranice.

## Parametri

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $id | `string` | ID ove stranice. |
| $page_hook | `string` | Hook stranice ove stranice. |
| $admin_page | `self` | Instanca stranice. |

### Od verzije

- 1.8.2
- 2.0.4: Dodan treći parametar: instanca stranice.
### Izvor

Definirano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) u retku 318
