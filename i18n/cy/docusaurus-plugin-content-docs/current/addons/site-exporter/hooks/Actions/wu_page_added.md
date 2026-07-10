---
id: wu_page_added
title: Gweithred - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Gweithred: wu_page_added {#action-wupageadded}

Caniatáu i ddatblygwyr plugin redeg pethau ychwanegol pan fydd tudalennau’n cael eu cofrestru.

Yn wahanol i wu_page_load, sy’n rhedeg dim ond pan fo tudalen benodol yn cael ei gweld, mae’r bachyn hwn yn rhedeg wrth gofrestru ar gyfer pob tudalen admin sy’n cael ei hychwanegu gan ddefnyddio cod WP Ultimo.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID y dudalen hon. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Y bachyn a gynhyrchwyd ar gyfer y dudalen hon. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ar linell 203
