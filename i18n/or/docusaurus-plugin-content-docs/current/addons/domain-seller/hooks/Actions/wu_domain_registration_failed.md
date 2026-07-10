---
id: wu_domain_registration_failed
title: କାର୍ଯ୍ୟ - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# କାର୍ଯ୍ୟ: wu_domain_registration_failed {#action-wudomainregistrationfailed}

ଡୋମେନ୍ ନିବନ୍ଧନ ଚେଷ୍ଟା ବିଫଳ ହେବା ପରେ ଚାଲୁ ହୁଏ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ନିବନ୍ଧନ ଆରମ୍ଭ କରିଥିବା ଦେୟ। |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed ଏବଂ error_message ସହିତ ନିବନ୍ଧନ ମେଟାଡାଟା। |
| $error_message | `string` | ନିବନ୍ଧକରୁ ମଣିଷ ପଢ଼ିପାରିବା ତ୍ରୁଟି ସନ୍ଦେଶ। |

### ଆରମ୍ଭରୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ରେ ଧାଡ଼ି 1250 ରେ ପରିଭାଷିତ।
