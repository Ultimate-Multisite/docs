---
id: wu_page_this-id_register_widgets
title: 'Darbība - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Tiek izpildīts pēc tam, kad logrīki ir reģistrēti šai lapai.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $id | `string` | Lapas id. |
| $page_hook | `string` | Lapas hook. |
| $page | `object` | Lapas objekts. |

### Kopš

- 2.4.10
### Avots

Definēts [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) 755. rindā
