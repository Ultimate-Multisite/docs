---
id: wu_page_this-id_register_widgets
title: 'Akcja - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets {#action-wupagethis-idregisterwidgets}

Wyzwala się po zarejestrowaniu widżetów dla danej strony.

Dynamiczna część nazwy hooka, `$this->id`, odnosi się do identyfikatora strony (page id).

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $id | `string` | Identyfikator strony. |
| $page_hook | `string` | Hook strony. |
| $page | `object` | Obiekt strony. |

### Od wersji {#since}

- 2.4.10
### Źródło {#source}

Zdefiniowane w [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) w linii 755
