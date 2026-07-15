---
id: wu_page_this-id_register_widgets
title: 'Akcia - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Spustí sa po zaregistrovaní widgetov pre túto stránku.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $id | `string` | ID stránky. |
| $page_hook | `string` | Hook stránky. |
| $page | `object` | Objekt stránky. |

### Od verzie {#since}

- 2.4.10
### Zdroj {#source}

Definované v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) na riadku 755
