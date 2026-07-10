---
id: wu_page_added
title: Kitendo - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

Inawezesha watengenezaji wa plugin kuendesha vitu vingine wakati kurasa zinapojitokeza (kurekebishwa/kuregistrashe).

Tofauti na `wu_page_load`, ambayo inaendesha tu wakati kurasa maalum inapoonekana, hook hii inaendesha wakati wa kurajistrashe kwa kila ukurasa wa admin unaoongezwa kwa kutumia code ya WP Ultimo.

## Viparametrika {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Kitambulisho cha kurasa hii. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook iliyoundwa kwa kurasa hii. |

### Tangu {#since}

- 2.0.0
### Chanzo {#source}

Imefafanuliwa katika [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) kwenye mstari wa 203
