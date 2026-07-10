---
id: wu_page_this-id_register_widgets
title: 'Acció - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Aquesta acció: wu_page_\{$this->id\}_register_widgets {#action-wupagethis-idregisterwidgets}

S'activa després que els widgets es registrin per a aquesta pàgina.

La part dinàmica del nom de l'hook, `$this-&gt;id`, fa referència al ID de la pàgina.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $id | `string` | L'ID de la pàgina. |
| $page_hook | `string` | L'hook de la pàgina. |
| $page | `object` | L'objecte de la pàgina. |

### Des de {#since}

- 2.4.10
### Font {#source}

Definida en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) a la línia 755
