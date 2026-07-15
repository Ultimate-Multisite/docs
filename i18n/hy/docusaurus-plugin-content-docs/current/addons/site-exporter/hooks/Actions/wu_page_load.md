---
id: wu_page_load
title: Գործողություն - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Գործողություն: wu_page_load

Թույլ է տալիս plugin մշակողներին մեր էջերին ավելացնել լրացուցիչ hooks։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Այս էջի ID-ն։ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Այս էջի համար ստեղծված hook-ը։ |

### Սկսած {#since}

- 1.8.2
### Աղբյուր {#source}

Սահմանված է [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289)-ում՝ 289-րդ տողում։
