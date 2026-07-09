---
id: wu_page_this-id_load
title: 'Toiminto - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Salli lisäosien kehittäjien lisätä sivuillemme lisää hookeja.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $id | `string` | Tämän sivun ID. |
| $page_hook | `string` | Tämän sivun page hook. |
| $admin_page | `self` | Sivuilmentymä. |

### Alkaen versiosta {#since}

- 1.8.2
- 2.0.4: Lisätty kolmas parametri: sivuilmentymä.
### Lähde {#source}

Määritelty tiedostossa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) rivillä 332
