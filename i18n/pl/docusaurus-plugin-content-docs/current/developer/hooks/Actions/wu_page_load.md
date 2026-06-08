---
id: wu_page_load
title: Akcja - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Pozwala programistom wtyczek na dodanie dodatkowych hooków do naszych stron.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $id | `string` | Id tej strony. |
| $page_hook | `string` | Hook strony, do której należy ta strona. |
| $admin_page | `self` | Instancja strony. |

### Od

- 1.8.2
- 2.0.4: Dodano trzeci parametr: instancję strony.
### Źródło

Zdefiniowane w [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) w linii 318
