---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_{$this->id}_before_render

ഒരു പ്രത്യേക പേജ് റെൻഡർ ചെയ്യുന്നതിന് മുമ്പ് ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

ഉപയോഗം: ഇവിടെയുള്ള ഡൈനാമിക് ഭാഗം ഒരു സാധുവായ പേജ് ഐഡി ഉപയോഗിച്ച് മാറ്റിസ്ഥാപിക്കണം. ഉദാഹരണത്തിന്: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## പാരാമീറ്ററുകൾ {#parameters}

| പേര് | തരം | വിവരണം |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | പേജിന്റെ ഐഡി. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page-ന്റെ ഇൻസ്റ്റൻസ്. |

### മുതൽ {#since}

- 1.8.2
### സ്രോതസ്സ് {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) എന്ന ഫയലിലെ 368-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
