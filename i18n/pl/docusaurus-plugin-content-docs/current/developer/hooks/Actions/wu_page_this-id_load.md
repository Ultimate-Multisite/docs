---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Akcja: wu_page_{$this->id}_load

Pozwala deweloperom pluginów na dodanie dodatkowych hooków do naszych stron.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $id | `string` | Identyfikator tej strony. |
| $page_hook | `string` | Hook strony, do której należy ta strona. |
| $admin_page | `self` | Instancja strony. |

### Od

- 1.8.2
- 2.0.4: Dodano trzeci parametr: instancję strony.
### Źródło

Zdefiniowane w [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) w linii 332
