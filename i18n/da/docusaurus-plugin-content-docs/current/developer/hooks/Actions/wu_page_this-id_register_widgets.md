---
id: wu_page_this-id_register_widgets
title: 'Handling - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Udløses efter widgets er registreret for denne side.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $id | `string` | Side-id'et. |
| $page_hook | `string` | Side-hooket. |
| $page | `object` | Sideobjektet. |

### Siden {#since}

- 2.4.10
### Kilde {#source}

Defineret i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) på linje 755
