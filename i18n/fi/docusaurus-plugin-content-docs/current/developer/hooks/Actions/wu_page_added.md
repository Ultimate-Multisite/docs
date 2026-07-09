---
id: wu_page_added
title: Toiminto - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

Salli plugin-kehittäjien suorittaa lisätoimintoja, kun sivuja rekisteröidään.

Toisin kuin wu_page_load, joka suoritetaan vain, kun tiettyä sivua tarkastellaan, tämä hook suoritetaan rekisteröinnin yhteydessä jokaiselle hallintasivulle, joka lisätään Ultimate Multisite -koodia käyttäen.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | Tämän sivun ID. |
| $page_hook | `string` | Tämän sivun hook-nimi. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) rivillä 228
