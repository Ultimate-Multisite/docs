---
id: wu_stripe_webhook_membership
title: ଫିଲ୍ଟର - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# ଫିଲ୍ଟର: wu_stripe_webhook_membership

ଏହି webhook ସହିତ ସମ୍ବନ୍ଧିତ membership record କୁ ଫିଲ୍ଟର କରେ।

ସମାନ Stripe customer ଭିନ୍ନ site ରେ ବ୍ୟବହୃତ ହେଲେ ଯେ conflicts ହୋଇପାରେ, ସେଥିପାଇଁ ଏହି ଫିଲ୍ଟର ଆଣାଯାଇଥିଲା।

## ପାରାମିଟର

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | membership object। |
| $event | `\Stripe\Event` | ଗ୍ରହଣ କରାଯାଇଥିବା event। |

### ସ୍ରୋତ

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ରେ line 2035 ରେ ପରିଭାଷିତ।
