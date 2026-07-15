---
id: wu_bypass_unset_current_user
title: ଫିଲ୍ଟର - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# ଫିଲ୍ଟର: wu_bypass_unset_current_user

ବିକାଶକାରୀମାନଙ୍କୁ ବର୍ତ୍ତମାନ ବ୍ୟବହାରକାରୀକୁ unset କରୁଥିବା କୋଡ୍‌କୁ ଏଡ଼ାଇବାକୁ ଅନୁମତି ଦିଅନ୍ତୁ।

null ବ୍ୟତୀତ ଅନ୍ୟ କିଛି ଫେରାଇଲେ, ଲଗ୍‌ଇନ୍ ଥିବା ବର୍ତ୍ତମାନ ବ୍ୟବହାରକାରୀଙ୍କ unset କୁ ଏଡ଼ାଇବ। କିଛି ପରିସ୍ଥିତିରେ ଏହା ଉପଯୋଗୀ ହୋଇପାରେ, ଯଥା ପ୍ରଶାସନ ପ୍ୟାନେଲ୍‌ ଭାବେ ବ୍ୟବହୃତ ହେଉଥିବା ଉପ-ସାଇଟ୍‌ଗୁଡ଼ିକ ସହ କାମ କରିବାବେଳେ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $null_or_bypass | `mixed` | ଆଗକୁ ବଢ଼ିବାକୁ Null, ଏହାକୁ ଏଡ଼ାଇବାକୁ ଅନ୍ୟ କିଛି। |
| $current_user | `false\|\WP_User` | ବର୍ତ୍ତମାନ ବ୍ୟବହାରକାରୀ ବସ୍ତୁ। |

### ସଂସ୍କରଣରୁ {#since}

- 2.0.11
### ଉତ୍ସ {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ରେ 221 ନମ୍ବର ଲାଇନ୍‌ରେ ପରିଭାଷିତ


## ଫେରାଇଥାଏ {#returns}
