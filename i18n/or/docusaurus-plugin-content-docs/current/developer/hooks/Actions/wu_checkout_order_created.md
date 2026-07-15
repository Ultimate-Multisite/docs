---
id: wu_checkout_order_created
title: କାର୍ଯ୍ୟ - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# କାର୍ଯ୍ୟ: wu_checkout_order_created

ଚେକଆଉଟ ଅର୍ଡର ସମ୍ପୂର୍ଣ୍ଣ ଭାବେ ତିଆରି ହେବା ପରେ ଚାଲୁ ହୁଏ।

ସ୍ୱାଧୀନ ବିଲିଂ ଚକ୍ର ଥିବା ଉତ୍ପାଦଗୁଡ଼ିକ ପାଇଁ ଦ୍ୱିତୀୟ ସଦସ୍ୟତା ତିଆରି କରିବାକୁ ଆଡଅନଗୁଡ଼ିକ ଏହା ବ୍ୟବହାର କରିପାରିବେ।

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | କାର୍ଟ/ଅର୍ଡର ଅବଜେକ୍ଟ। |
| $customer | `\WP_Ultimo\Models\Customer` | ଗ୍ରାହକ। |
| $membership | `\WP_Ultimo\Models\Membership` | ମୁଖ୍ୟ ସଦସ୍ୟତା। |
| $payment | `\WP_Ultimo\Models\Payment` | ଦେୟ। |

### ଆରମ୍ଭ ସଂସ୍କରଣ {#since}

- 2.5.0
### ଉତ୍ସ {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ରେ 891 ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ।
