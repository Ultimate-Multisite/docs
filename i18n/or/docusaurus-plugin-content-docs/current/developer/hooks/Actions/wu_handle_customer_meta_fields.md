---
id: wu_handle_customer_meta_fields
title: କାର୍ଯ୍ୟ - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

plugin ବିକାଶକମାନଙ୍କୁ ଆବଶ୍ୟକ ହେଲେ ଭିନ୍ନ ଉପାୟରେ ମେଟା ତଥ୍ୟ ସଞ୍ଚୟ କରିବାକୁ ଅନୁମତି ଦିଅନ୍ତୁ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $meta_repository | `array` | ମେଟା ଫିଲ୍ଡଗୁଡ଼ିକର ତାଲିକା, key =&gt; value ଗଠନରେ। |
| $customer | `\Customer` | Ultimate Multisite ଗ୍ରାହକ ଅବଜେକ୍ଟ। |
| $checkout | `\Checkout` | ଚେକଆଉଟ୍ କ୍ଲାସ୍। |

### ଯେଉଁ ସଂସ୍କରଣରୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ରେ 1211ତମ ଧାଡ଼ିରେ ପରିଭାଷିତ।
