---
id: wu_domain_renewal_failed
title: କାର୍ଯ୍ୟ - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# କାର୍ଯ୍ୟ: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

ଡୋମେନ୍ ନବୀକରଣ ଚେଷ୍ଟା ବିଫଳ ହେବା ପରେ ଚାଲୁ ହୁଏ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ନବୀକରଣକୁ ଆରମ୍ଭ କରିଥିବା ପେମେଣ୍ଟ। |
| $renewal_data | `array&lt;string,mixed&gt;` | ନବୀକରଣ ମେଟାଡାଟା (domain_name, years, ଇତ୍ୟାଦି)। |
| $error_message | `string` | ରେଜିଷ୍ଟ୍ରାରରୁ ମନୁଷ୍ୟ-ପଠନୀୟ ତ୍ରୁଟି ବାର୍ତ୍ତା। |

### ଆରମ୍ଭରୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ଭିତରେ ୬୩୦ ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ।
