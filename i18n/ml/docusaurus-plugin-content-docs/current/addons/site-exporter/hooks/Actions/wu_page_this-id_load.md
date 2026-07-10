---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

plugin ഡെവലപ്പർമാർക്ക് ഒരു പ്രത്യേക പേജിലേക്ക് അധിക hooks ചേർക്കാൻ ഇത് അനുവദിക്കുന്നു.

Usage: ഈ dynamic ഭാഗം ഒരു സാധുവായ page id ഉപയോഗിച്ച് മാറ്റിസ്ഥാപിക്കണം. ഉദാഹരണത്തിന്: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ഈ പേജിന്റെ ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ഈ പേജിനായി സൃഷ്ടിക്കപ്പെടുന്ന hook. |

### Since {#since}

- 1.8.2
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) at line 301
