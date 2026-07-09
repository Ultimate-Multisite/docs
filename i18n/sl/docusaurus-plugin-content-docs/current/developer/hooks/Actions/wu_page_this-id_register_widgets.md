---
id: wu_page_this-id_register_widgets
title: 'Dejanje - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Sproži se po tem, ko so gradniki registrirani za to stran.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $id | `string` | ID strani. |
| $page_hook | `string` | Kavelj strani. |
| $page | `object` | Objekt strani. |

### Od različice

- 2.4.10
### Vir

Definirano v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) v vrstici 755
