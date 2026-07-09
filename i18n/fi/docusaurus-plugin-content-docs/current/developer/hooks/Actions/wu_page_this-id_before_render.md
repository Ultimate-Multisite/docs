---
id: wu_page_this-id_before_render
title: 'Toiminto - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Salli plugin-kehittäjien lisätä lisäsisältöä ennen kuin tulostamme sivun.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $page_id | `string` | Tämän sivun id. |
| $page | `object` | Sivuobjekti. |

### Alkaen {#since}

- 1.8.2
### Lähde {#source}

Määritelty tiedostossa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) rivillä 398
