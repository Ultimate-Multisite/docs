---
id: wu_membership_post_renew
title: କାର୍ଯ୍ୟ - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# କାର୍ଯ୍ୟ: wu_membership_post_renew {#action-wumembershippostrenew}

membership ନବୀକରଣ ପରେ ଟ୍ରିଗର ହୁଏ।

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $expiration | `string` | ସେଟ୍ କରାଯିବାକୁ ଥିବା ନୂତନ ସମାପ୍ତି ତାରିଖ। |
| $membership_id | `int` | membership ର ID। |
| $membership | `\Membership` | Membership object। |

### ଆରମ୍ଭରୁ {#since}

- 2.0
### ଉତ୍ସ {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) ରେ ଧାଡ଼ି 2235 ରେ ପରିଭାଷିତ।
