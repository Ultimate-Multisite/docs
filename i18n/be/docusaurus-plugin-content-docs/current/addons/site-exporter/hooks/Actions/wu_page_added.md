---
id: wu_page_added
title: Дзея - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Дазваляе раробнікам плагінаў выконваць дадатковыя дзеянні, калі рэгіструюцца адкаронкі.

На адрозніцы ад `wu_page_load`, якая запускаецца толькі калі адкрываюцца канкрэтная адкаронка, гэты hook запускаецца на этапе рэгістрацыі для кожнай адмін-адкаронкі, якая дадаецца з выкарыстаннем кода WP Ultimo.

## Паметрыкі {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID гэтай адкаронкі. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook, створаны для гэтай адкаронкі. |

### З {#since}

- 2.0.0
### Выкненне {#source}

Вызначаны ў [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) на 203-й пасылцы.
