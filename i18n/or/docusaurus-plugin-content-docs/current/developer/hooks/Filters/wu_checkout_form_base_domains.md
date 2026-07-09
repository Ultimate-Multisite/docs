---
id: wu_checkout_form_base_domains
title: ଫିଲ୍ଟର - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

ସେୟାର୍ଡ checkout-form ମୂଳ ଡୋମେନଗୁଡ଼ିକୁ ଫିଲ୍ଟର୍ କରେ, ଯେଉଁଗୁଡ଼ିକ mapped-domain ରେକର୍ଡ ହେବା ଉଚିତ୍ ନୁହେଁ।

ଯେତେବେଳେ କୌଣସି ସମନ୍ୱୟ checkout form **ସାଇଟ URL** ଫିଲ୍ଡ ପାଇଁ ଅତିରିକ୍ତ ମୂଳ ଡୋମେନ ଦେଇଥାଏ, ସେତେବେଳେ ଏହି filter ବ୍ୟବହାର କରନ୍ତୁ। ଏହି filter ଦ୍ୱାରା ଫେରାଇଥିବା ଡୋମେନଗୁଡ଼ିକୁ ପ୍ରତି-ସାଇଟ custom domain ପରିବର୍ତ୍ତେ ସେୟାର୍ଡ ପଞ୍ଜୀକରଣ host ଭାବେ ଧରାଯାଏ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $domains | `array` | checkout form configuration ରୁ ସଂଗ୍ରହ କରାଯାଇଥିବା ସେୟାର୍ଡ ମୂଳ ଡୋମେନଗୁଡ଼ିକ। |

### ଆରମ୍ଭରୁ {#since}

- 2.13.0

### ଉତ୍ସ {#source}

`inc/functions/domain.php` ରେ ପରିଭାଷିତ।


## ଫେରାଇଥାଏ {#returns}

ସାମାନ୍ୟୀକୃତ checkout-form ମୂଳ ଡୋମେନଗୁଡ଼ିକର array।
