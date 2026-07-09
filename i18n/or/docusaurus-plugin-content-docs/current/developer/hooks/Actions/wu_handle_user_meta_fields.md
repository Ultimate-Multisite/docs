---
id: wu_handle_user_meta_fields
title: କାର୍ଯ୍ୟ - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# କାର୍ଯ୍ୟ: wu_handle_user_meta_fields

ଆବଶ୍ୟକ ହେଲେ ପ୍ଲଗଇନ ବିକାଶକମାନଙ୍କୁ ଭିନ୍ନ ଉପାୟରେ ବ୍ୟବହାରକାରୀ ମେଟା ତଥ୍ୟ ସଞ୍ଚୟ କରିବାକୁ ଦିଅନ୍ତୁ।

## ପାରାମିଟର

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $meta_repository | `array` | ମେଟା ଫିଲ୍ଡଗୁଡ଼ିକର ତାଲିକା, key =&gt; value ଗଠନରେ। |
| $user | `\WP_User` | WordPress ବ୍ୟବହାରକାରୀ ଅବଜେକ୍ଟ। |
| $customer | `\Customer` | Ultimate Multisite ଗ୍ରାହକ ଅବଜେକ୍ଟ। |
| $checkout | `\Checkout` | ଚେକଆଉଟ୍ କ୍ଲାସ୍। |

### ଠାରୁ

- 2.0.4
### ଉତ୍ସ

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ରେ ୧୨୪୪ ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ।
