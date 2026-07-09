---
id: get_site_url_for_previewer
title: ଫିଲ୍ଟର - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# ଫିଲ୍ଟର: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

ପ୍ଲଗଇନ୍ ବିକାଶକାରୀମାନଙ୍କୁ ପୂର୍ବାବଲୋକନକାରୀରେ ବ୍ୟବହୃତ URL କୁ ଫିଲ୍ଟର କରିବାକୁ ଦିଅନ୍ତୁ

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $domain | `string` | ବର୍ତ୍ତମାନ ବ୍ୟବହୃତ ଡିଫଲ୍ଟ ଡୋମେନ, ପରିବର୍ତ୍ତନ ପାଇଁ ଉପଯୋଗୀ |
| $domain_options | `array` | Ultimate Multisite ସେଟିଂସ୍ -&gt; ନେଟୱର୍କ ସେଟିଂସ୍ -&gt; ଡୋମେନ ବିକଳ୍ପରେ ଦିଆଯାଇଥିବା ସମସ୍ତ ଡୋମେନ ବିକଳ୍ପର ତାଲିକା |

### ଆରମ୍ଭ {#since}

- 1.7.2
### ଉତ୍ସ {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) ରେ ୮୧୨ ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ


## ଫେରାଇଥାଏ {#returns}
ବ୍ୟବହାର କରାଯିବାକୁ ଥିବା ନୂଆ ଡୋମେନ
