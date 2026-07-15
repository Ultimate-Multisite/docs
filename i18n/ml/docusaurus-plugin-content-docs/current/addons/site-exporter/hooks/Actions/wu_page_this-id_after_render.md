---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

ഒരു പ്രത്യേക പേജ് റെൻഡർ ചെയ്ത ശേഷം ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

ഉപയോഗം: ഡൈനാമിക് ആയ ഭാഗം ഒരു സാധുവായ പേജ് ഐഡി ഉപയോഗിച്ച് മാറ്റിസ്ഥാപിക്കണം, ഉദാഹരണത്തിന്: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## പാരാമീറ്ററുകൾ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | പേജിന്റെ ഐഡി. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page ഇൻസ്റ്റൻസ്. |

### മുതൽ {#since}

- 1.8.2
### സ്രോതസ്സ് {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) എന്ന ഫയലിലെ 394-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
