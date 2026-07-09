---
id: wu_page_added
title: Hereket - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Hereket: wu_page_added

Sahypalar bellige alnanda plugin döredijilerine goşmaça zatlary işletmäge rugsat beriň.

Diňe belli bir sahypa görülende işleýän wu_page_load-dan tapawutlylykda, bu hook Ultimate Multisite kody ulanylyp goşulýan her bir admin sahypasy üçin bellige alyş wagtynda işleýär.

## Parametrler

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $page_id | `string` | Bu sahypanyň ID-si. |
| $page_hook | `string` | Bu sahypanyň hook ady. |

### Şondan bäri

- 2.0.0
### Çeşme

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) içinde 228-nji setirde kesgitlenen.
