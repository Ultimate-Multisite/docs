---
id: wu_page_added
title: Գործողություն - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Գործողություն՝ wu_page_added {#action-wupageadded}

Թույլ է տալիս plugin մշակողներին գործարկել լրացուցիչ գործողություններ, երբ էջերը գրանցվում են։

Ի տարբերություն wu_page_load-ի, որը գործարկվում է միայն, երբ դիտվում է կոնկրետ էջ, այս hook-ը գործարկվում է գրանցման պահին՝ յուրաքանչյուր admin էջի համար, որը ավելացվում է WP Ultimo code-ի միջոցով։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Այս էջի ID-ն։ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Այս էջի համար ստեղծված hook-ը։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203)-ում՝ 203-րդ տողում։
