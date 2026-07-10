---
id: wu_page_added
title: Kev ua - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Kev ua: wu_page_added {#action-wupageadded}

Tso cai rau cov neeg tsim plugin khiav tej yam ntxiv thaum cov nplooj ntawv raug sau npe.

Tsis zoo li wu_page_load, uas tsuas khiav thaum ib nplooj ntawv tshwj xeeb tab tom raug saib xwb, hook no khiav thaum sau npe rau txhua nplooj ntawv admin uas raug ntxiv siv WP Ultimo code.

## Cov parameter {#parameters}

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Tus ID ntawm nplooj ntawv no. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook uas tsim rau nplooj ntawv no. |

### Txij li {#since}

- 2.0.0
### Qhov chaw {#source}

Teev tseg hauv [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ntawm kab 203
