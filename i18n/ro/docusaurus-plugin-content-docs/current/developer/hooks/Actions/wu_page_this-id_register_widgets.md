---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

Se declanșează după ce widget-urile sunt înregistrate pentru această pagină.

Porțiunea dinamică a numelui hook-ului, `$this->id`, reprezintă ID-ul paginii.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $id | `string` | ID-ul paginii. |
| $page_hook | `string` | Hook-ul paginii. |
| $page | `object` | Obiectul paginii. |

### De la {#since}

- 2.4.10
### Sursă {#source}

Definit în [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) la linia 755
