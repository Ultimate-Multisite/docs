---
id: wu_domain_renewal_completed
title: କାର୍ଯ୍ୟ - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# କାର୍ଯ୍ୟ: wu_domain_renewal_completed

ଡୋମେନ ସଫଳତାର ସହିତ ନବୀକରଣ ହେବା ପରେ ଚାଲେ।

## ପାରାମିଟର

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ନବୀକରଣକୁ ଆରମ୍ଭ କରିଥିବା ଦେୟ। |
| $renewal_data | `array&lt;string,mixed&gt;` | ନବୀକରଣ ମେଟାଡାଟା (domain_name, years, customer_id, ଇତ୍ୟାଦି)। |
| $result | `array&lt;string,mixed&gt;` | ନୂତନ expiry_date ସହିତ ପଞ୍ଜୀକାରକ ଫେରାଇଥିବା କାଚା ଫଳାଫଳ ଆରେ। |

### ଠାରୁ

- 2.0.0
### ଉତ୍ସ

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ରେ 594 ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ ହୋଇଛି।
