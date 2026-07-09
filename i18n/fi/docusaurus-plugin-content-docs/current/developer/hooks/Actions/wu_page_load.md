---
id: wu_page_load
title: Toiminto - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Toiminto: wu_page_load

Salli plugin-kehittäjien lisätä lisäkoukkuja sivuillemme.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $id | `string` | Tämän sivun ID. |
| $page_hook | `string` | Tämän sivun sivukoukku. |
| $admin_page | `self` | Sivun ilmentymä. |

### Alkaen

- 1.8.2
- 2.0.4: Lisätty kolmas parametri: sivun ilmentymä.
### Lähde

Määritelty tiedostossa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) rivillä 318
