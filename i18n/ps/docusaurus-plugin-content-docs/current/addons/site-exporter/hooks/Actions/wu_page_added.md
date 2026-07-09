---
id: wu_page_added
title: عمل - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

plugin پراختیاکوونکو ته اجازه ورکوي چې کله پاڼې ثبتېږي، اضافي شیان پرمخ یوسي.

د wu_page_load برعکس، چې یوازې هغه وخت چلېږي کله چې یوه ځانګړې پاڼه لیدل کېږي، دا hook د WP Ultimo code په کارولو سره د هرې زیاتېدونکې admin پاڼې لپاره د ثبت پر مهال چلېږي.

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | د دې پاڼې ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | دې پاڼې ته جوړ شوی hook. |

### له {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) کې په 203 کرښه کې تعریف شوی.
