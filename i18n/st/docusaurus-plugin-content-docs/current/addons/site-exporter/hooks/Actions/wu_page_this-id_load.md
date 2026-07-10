---
id: wu_page_this-id_load
title: 'Ketso - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Lumella bahlahisi ba plugin ho eketsa hooks tse eketsehileng leqepheng le itseng.

Tšebeliso: Karolo e fetohang e hloka ho nkeloa sebaka ka page id e nepahetseng, mohlala add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ea leqephe lena. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook e hlahisitsoeng bakeng sa leqephe lena. |

### Ho tloha {#since}

- 1.8.2
### Mohloli {#source}

E hlalositsoe ho [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) moleng oa 301
