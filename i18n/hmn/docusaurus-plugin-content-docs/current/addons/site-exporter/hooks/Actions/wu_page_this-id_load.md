---
id: wu_page_this-id_load
title: 'Kev nqis tes - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Tso cai rau cov neeg tsim qhov txuas ntxiv ntxiv hooks ntxiv rau ib nplooj tshwj xeeb.

Kev siv: Feem hloov tau yuav tsum muab hloov nrog ib page id uas siv tau, piv txwv li add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Cov parameter

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ntawm nplooj no. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook uas tsim rau nplooj no. |

### Txij thaum

- 1.8.2
### Qhov chaw

Teev tseg hauv [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ntawm kab 301
