---
id: wu_page_before_render
title: Toiminto - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: 80ace5356783d6d6ad2789d77480ace2
---
# Toiminto: wu_page_before_render

Salli plugin-kehittäjien lisätä lisäsisältöä ennen kuin tulostamme sivun.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $page_id | `string` | Tämän sivun id. |
| $page | `object` | Sivuobjekti. |

### Alkaen

- 1.8.2
### Lähde

Määritelty tiedostossa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L388) rivillä 388
