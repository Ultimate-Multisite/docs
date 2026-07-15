---
id: wu_stripe_generate_idempotency_key
title: ଫିଲ୍ଟର - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# ଫିଲ୍ଟର: wu_stripe_generate_idempotency_key

Stripe charge options ସହିତ ପଠାଯାଇଥିବା idempotency_key ମୂଲ୍ୟକୁ ଫିଲ୍ଟର କରେ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key ର ମୂଲ୍ୟ। |
| $args | `array` | key ସୃଷ୍ଟି କରିବାରେ ସହାୟତା ପାଇଁ ବ୍ୟବହୃତ ଆର୍ଗୁମେଣ୍ଟଗୁଡ଼ିକ। |
| $context | `string` | ଯେ context ଅଧୀନରେ idempotency key ସୃଷ୍ଟି ହୁଏ। |

### ଠାରୁ {#since}

- 3.5.0
### ଉତ୍ସ {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ରେ 54 ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ।
