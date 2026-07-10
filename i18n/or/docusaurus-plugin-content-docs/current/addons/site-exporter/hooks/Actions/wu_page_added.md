---
id: wu_page_added
title: କାର୍ଯ୍ୟ - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# କାର୍ଯ୍ୟ: wu_page_added {#action-wupageadded}

ପୃଷ୍ଠାଗୁଡ଼ିକ ପଞ୍ଜିକୃତ ହେଲେ ପ୍ଲଗଇନ ବିକାଶକାରୀଙ୍କୁ ଅତିରିକ୍ତ କାମ ଚଲାଇବାକୁ ଦିଅନ୍ତୁ।

wu_page_load ଠାରୁ ଭିନ୍ନ, ଯାହା କେବଳ ନିର୍ଦ୍ଦିଷ୍ଟ ପୃଷ୍ଠା ଦେଖାଯାଉଥିବା ବେଳେ ଚାଲେ, ଏହି hook WP Ultimo କୋଡ୍ ବ୍ୟବହାର କରି ଯୋଡ଼ାଯାଉଥିବା ପ୍ରତ୍ୟେକ ପ୍ରଶାସକ ପୃଷ୍ଠା ପାଇଁ ପଞ୍ଜୀକରଣ ସମୟରେ ଚାଲେ।

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ଏହି ପୃଷ୍ଠାର ID। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ଏହି ପୃଷ୍ଠା ପାଇଁ ସୃଷ୍ଟି ହୋଇଥିବା hook। |

### ଯେଉଁ ସଂସ୍କରଣରୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ରେ 203 ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ।
