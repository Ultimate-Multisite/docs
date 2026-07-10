---
id: wu_page_added
title: ھەرىكەت - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# مەشغۇلات: wu_page_added {#action-wupageadded}

plugin ئاچقۇچىلارغا بەتلەر تىزىملىتىلغاندا قوشۇمچە ئىشلارنى ئىجرا قىلىشقا يول قويىدۇ.

پەقەت مۇئەييەن بىر بەت كۆرۈلۈۋاتقاندا ئىجرا بولىدىغان wu_page_load بىلەن ئوخشىماستىن، بۇ hook WP Ultimo كودى ئارقىلىق قوشۇلۇۋاتقان ھەربىر باشقۇرۇش بېتىنىڭ تىزىملىتىلىشىدە ئىجرا بولىدۇ.

## پارامېتىرلار {#parameters}

| نامى | تۈرى | چۈشەندۈرۈش |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | بۇ بەتنىڭ ID سى. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | بۇ بەتكە ھاسىل قىلىنغان hook. |

### باشلاپ {#since}

- 2.0.0
### مەنبە {#source}

203-قۇردا [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) دا بېكىتىلگەن
