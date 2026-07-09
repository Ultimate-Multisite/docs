---
id: wu_page_this-id_after_render
title: 'କାର୍ଯ୍ୟ - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

ନିର୍ଦ୍ଦିଷ୍ଟ ପୃଷ୍ଠା ଦେଖାଇବା ପରେ ଚାଲେ।

ବ୍ୟବହାର: ଡାଇନାମିକ ଅଂଶକୁ ଏକ ବୈଧ ପୃଷ୍ଠା id ସହିତ ବଦଳାଇବା ଆବଶ୍ୟକ, ଯେପରି add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## ପାରାମିଟର

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ପୃଷ୍ଠାର id। |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ମୂଳ ପ୍ରଶାସକ ପୃଷ୍ଠାର ନିଦର୍ଶନ। |

### ପରଠାରୁ

- 1.8.2
### ଉତ୍ସ

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ରେ 394 ପଙ୍କ୍ତିରେ ପରିଭାଷିତ।
