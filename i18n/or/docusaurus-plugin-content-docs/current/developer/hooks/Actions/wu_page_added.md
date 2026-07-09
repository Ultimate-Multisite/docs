---
id: wu_page_added
title: କାର୍ଯ୍ୟ - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# କାର୍ଯ୍ୟ: wu_page_added {#action-wupageadded}

ପୃଷ୍ଠାଗୁଡ଼ିକ ପଞ୍ଜୀକୃତ ହେଲେ plugin ବିକାଶକମାନଙ୍କୁ ଅତିରିକ୍ତ କାମ ଚଳାଇବାକୁ ଦିଅନ୍ତୁ।

wu_page_load ଠାରୁ ଭିନ୍ନ, ଯାହା କେବଳ ନିର୍ଦ୍ଦିଷ୍ଟ ପୃଷ୍ଠା ଦେଖାଯାଉଥିବା ବେଳେ ଚାଲେ, ଏହି hook ପଞ୍ଜୀକରଣ ସମୟରେ Ultimate Multisite କୋଡ୍ ବ୍ୟବହାର କରି ଯୋଡ଼ାଯାଉଥିବା ପ୍ରତ୍ୟେକ ପ୍ରଶାସକ ପୃଷ୍ଠା ପାଇଁ ଚାଲେ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $page_id | `string` | ଏହି ପୃଷ୍ଠାର ID। |
| $page_hook | `string` | ଏହି ପୃଷ୍ଠାର hook ନାମ। |

### ଯେଉଁ ସଂସ୍କରଣରୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) ରେ 228 ନମ୍ବର ପଙ୍କ୍ତିରେ ପରିଭାଷିତ
