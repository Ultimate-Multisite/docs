---
id: wu_page_this-id_load
title: 'କାର୍ଯ୍ୟ - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

ବିସ୍ତାରକ ବିକାଶକମାନଙ୍କୁ ନିର୍ଦ୍ଦିଷ୍ଟ ପୃଷ୍ଠାରେ ଅତିରିକ୍ତ ହୁକ୍ ଯୋଡ଼ିବାକୁ ଅନୁମତି ଦିଅନ୍ତୁ।

ବ୍ୟବହାର: ଗତିଶୀଳ ଅଂଶକୁ ଏକ ବୈଧ ପୃଷ୍ଠା ID ସହିତ ବଦଳାଇବା ଦରକାର, ଯଥା add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ଏହି ପୃଷ୍ଠାର ID। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ଏହି ପୃଷ୍ଠା ପାଇଁ ସୃଷ୍ଟି ହୋଇଥିବା ହୁକ୍। |

### ଆରମ୍ଭ {#since}

- 1.8.2
### ଉତ୍ସ {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ରେ ୩୦୧ ନମ୍ବର ପଙ୍କ୍ତିରେ ପରିଭାଷିତ।
