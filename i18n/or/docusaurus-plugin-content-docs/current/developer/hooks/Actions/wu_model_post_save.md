---
id: wu_model_post_save
title: କାର୍ଯ୍ୟ - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# କାର୍ଯ୍ୟ: wu_model_post_save {#action-wumodelpostsave}

କୌଣସି ଅବଜେକ୍ଟ database ରେ ସଞ୍ଚୟ ହେବା ପରେ ଚାଲୁ ହୁଏ।

## ପାରାମିଟର୍‌ଗୁଡ଼ିକ {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $model | `string` | ମଡେଲ୍ ସ୍ଲଗ୍। |
| $data | `array` | ସଞ୍ଚୟ ହେବାକୁ ଥିବା ଅବଜେକ୍ଟ ଡାଟା, ସିରିଆଲାଇଜ୍ ହୋଇଥିବା। |
| $data_unserialized | `array` | ସଞ୍ଚୟ ହେବାକୁ ଥିବା ଅବଜେକ୍ଟ ଡାଟା। |
| $this | `\Base_Model` | ଅବଜେକ୍ଟ ଇନ୍‌ଷ୍ଟାନ୍ସ। |

### ଯେଉଁ ସଂସ୍କରଣରୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) ରେ 613 ନମ୍ବର ଲାଇନ୍‌ରେ ପରିଭାଷିତ
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) ରେ 1743 ନମ୍ବର ଲାଇନ୍‌ରେ ପରିଭାଷିତ
