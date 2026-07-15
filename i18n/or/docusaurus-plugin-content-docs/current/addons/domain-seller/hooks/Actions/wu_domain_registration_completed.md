---
id: wu_domain_registration_completed
title: କାର୍ଯ୍ୟ - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

ଗୋଟିଏ ଡୋମେନ ସଫଳଭାବେ ପଞ୍ଜିକୃତ ହେବା ପରେ ଚାଲୁ ହୁଏ।

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ପଞ୍ଜିକରଣକୁ ଆରମ୍ଭ କରିଥିବା ଅଦାୟ। |
| $registration_data | `array&lt;string,mixed&gt;` | ପଞ୍ଜିକରଣ ମେଟାଡାଟା (domain_name, provider_id, years, expiry_date, ଇତ୍ୟାଦି)। |
| $result | `array&lt;string,mixed&gt;` | ରେଜିଷ୍ଟ୍ରାର ଦ୍ୱାରା ଫେରାଇଦିଆଯାଇଥିବା କଚ୍ଚା ଫଳାଫଳ array। |

### ଯେହେତୁ {#since}

- 2.0.0
### ସ୍ରୋତ {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ରେ 1204 ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ।
