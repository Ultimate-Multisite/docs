---
id: wu_page_added
title: Aðgerð - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Aðgerð: wu_page_added

Leyfir plugin-hönnuðum að keyra viðbótarhluti þegar síður eru skráðar.

Ólíkt wu_page_load, sem keyrir aðeins þegar verið er að skoða tiltekna síðu, keyrir þessi hook við skráningu fyrir hverja admin-síðu sem bætt er við með WP Ultimo-kóða.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID þessarar síðu. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook sem myndaður er fyrir þessa síðu. |

### Frá útgáfu {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) í línu 203
