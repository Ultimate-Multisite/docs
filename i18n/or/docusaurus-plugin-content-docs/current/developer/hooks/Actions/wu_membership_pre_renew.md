---
id: wu_membership_pre_renew
title: କାର୍ଯ୍ୟ - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# କାର୍ଯ୍ୟ: wu_membership_pre_renew {#action-wumembershipprerenew}

ସଦସ୍ୟତା ନବୀକରଣ ପୂର୍ବରୁ ଚାଲୁ ହୁଏ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $expiration | `string` | ନିର୍ଦ୍ଧାରଣ କରାଯିବାକୁ ଥିବା ନୂତନ ସମାପ୍ତି ତାରିଖ। |
| $membership_id | `int` | ସଦସ୍ୟତାର ID। |
| $membership | `\Membership` | ସଦସ୍ୟତା ବସ୍ତୁ। |

### ଏହି ସଂସ୍କରଣରୁ {#since}

- 2.0
### ସ୍ରୋତ {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) ରେ 2204 ଧାଡ଼ିରେ ପରିଭାଷିତ।
