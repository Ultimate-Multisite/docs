---
id: wu_page_added
title: Hereket - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Hereket: wu_page_added

Goşmaça döredijilerine sahypalar hasaba alnanda goşmaça zatlary işletmäge mümkinçilik berýär.

Diňe belli bir sahypa görülýän wagty işleýän wu_page_load-dan tapawutlylykda, bu hook WP Ultimo kody ulanylyp goşulýan her bir admin sahypasy üçin hasaba alyş wagtynda işleýär.

## Parametrler

| Ady | Görnüşi | Beýany |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu sahypanyň ID-si. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu sahypa üçin döredilen hook. |

### Şondan bäri

- 2.0.0
### Çeşme

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) faýlynda 203-nji setirde kesgitlenen.
