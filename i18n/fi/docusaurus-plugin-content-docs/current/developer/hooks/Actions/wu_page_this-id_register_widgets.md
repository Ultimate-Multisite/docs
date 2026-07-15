---
id: wu_page_this-id_register_widgets
title: 'Toiminto - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Suoritetaan sen jälkeen, kun widgetit on rekisteröity tälle sivulle.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $id | `string` | Sivun id. |
| $page_hook | `string` | Sivun hook. |
| $page | `object` | Sivuobjekti. |

### Alkaen versiosta {#since}

- 2.4.10
### Lähde {#source}

Määritelty tiedostossa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) rivillä 755
