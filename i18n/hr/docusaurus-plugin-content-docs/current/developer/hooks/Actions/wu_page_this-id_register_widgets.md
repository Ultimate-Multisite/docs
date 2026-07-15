---
id: wu_page_this-id_register_widgets
title: 'Akcija - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Pokreće se nakon što su widgeti registrirani za ovu stranicu.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $id | `string` | ID stranice. |
| $page_hook | `string` | Hook stranice. |
| $page | `object` | Objekt stranice. |

### Od verzije {#since}

- 2.4.10
### Izvor {#source}

Definirano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) u retku 755
