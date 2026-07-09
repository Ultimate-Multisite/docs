---
id: wu_page_this-id_register_widgets
title: 'Aksjon - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets {#action-wupagethis-idregisterwidgets}

Kjøres etter at widgetene er registrert for denne siden.

Den dynamiske delen av hook-navnet, `$this->id`, refererer til sidens ID.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $id | `string` | Sidens ID. |
| $page_hook | `string` | Sidens hook. |
| $page | `object` | Sidens objekt. |

### Siden {#since}

- 2.4.10
### Kilde {#source}

Definert i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) på linje 755
