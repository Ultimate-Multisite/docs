---
id: wu_page_this-id_before_render
title: 'କାର୍ଯ୍ୟ - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

ନିର୍ଦ୍ଦିଷ୍ଟ ପୃଷ୍ଠା ଦେଖାଇବା ପୂର୍ବରୁ ଚାଲେ।

ବ୍ୟବହାର: ଗତିଶୀଳ ଅଂଶକୁ ଏକ ବୈଧ ପୃଷ୍ଠା id ସହିତ ବଦଳାଇବା ଦରକାର, ଯଥା add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ପୃଷ୍ଠାର id। |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page ର ଏକ ଇନ୍‌ଷ୍ଟାନ୍ସ। |

### ଯେଉଁ ସଂସ୍କରଣରୁ {#since}

- 1.8.2
### ଉତ୍ସ {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ରେ ୩୬୮ ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ।
