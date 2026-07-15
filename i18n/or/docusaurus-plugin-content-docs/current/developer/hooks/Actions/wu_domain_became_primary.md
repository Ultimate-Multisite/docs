---
id: wu_domain_became_primary
title: କାର୍ଯ୍ୟ - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

କୌଣସି domain ଗୋଟିଏ ସାଇଟ୍ ପାଇଁ ପ୍ରାଥମିକ domain ହେଲେ ଚାଲୁ ହୁଏ।

ନୂଆ ପ୍ରାଥମିକ domain ସୃଷ୍ଟି କରିବାବେଳେ କିମ୍ବା ଥିବା domainକୁ ପ୍ରାଥମିକ କରିବାକୁ ଅଦ୍ୟତନ କରିବାବେଳେ, ଏହି action ଟ୍ରିଗର୍ ହୁଏ ଯେତେବେଳେ domainର primary_domain flag true କୁ ସେଟ୍ କରାଯାଏ।

## ପାରାମିଟର୍ {#parameters}

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ପ୍ରାଥମିକ ହୋଇଥିବା domain। |
| $blog_id | `int` | ପ୍ରଭାବିତ ସାଇଟ୍‌ର blog ID। |
| $was_new | `bool` | ଏହା ନୂଆ କରି ସୃଷ୍ଟି ହୋଇଥିବା domain କି ନୁହେଁ। |

### ଯେହେତୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ରେ ୫୬୦ ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ।
