---
id: wu_page_this-id_before_render
title: 'Kev ua - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Khiav ua ntej tso saib ib nplooj ntawv tshwj xeeb.

Kev siv: Qhov dynamic yuav tsum muab hloov nrog ib page id uas siv tau, piv txwv li add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Cov Parameter

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Tus id ntawm nplooj ntawv. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Qhov Base Admin Page instance. |

### Txij thaum

- 1.8.2
### Qhov chaw

Txhais nyob rau hauv [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ntawm kab 368
