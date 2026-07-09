---
id: wu_pending_payment_message
title: ଫିଲ୍ଟର୍ - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# ଫିଲ୍ଟର: wu_pending_payment_message

ଅପେକ୍ଷାରତ ଦେୟଗୁଡ଼ିକ ବିଷୟରେ ବାର୍ତ୍ତା ବଦଳାଇବାକୁ ବ୍ୟବହାରକାରୀଙ୍କୁ ଅନୁମତି ଦିଅନ୍ତୁ।

## ପାରାମିଟରଗୁଡ଼ିକ

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $message | `string` | ଛାପିବାକୁ ଥିବା ବାର୍ତ୍ତା। |
| $customer | `\WP_Ultimo\Models\Customer` | ବର୍ତ୍ତମାନର ଗ୍ରାହକ। |
| $pending_payments | `array` | ଅପେକ୍ଷାରତ ଦେୟଗୁଡ଼ିକ ସହିତ ଏକ ତାଲିକା। |

### ଆରମ୍ଭରୁ

- 2.0.19
### ଉତ୍ସ

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ରେ ୨୪୪ ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ।
