---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: ଫିଲ୍ଟର - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# ଫିଲ୍ଟର: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

ଡେଭେଲପରମାନଙ୍କୁ ଡିଫଲ୍ଟ WooCommerce ବିଲିଂ ଠିକଣା କ୍ଷେତ୍ରଗୁଡ଼ିକୁ ଫିଲ୍ଟର କରିବାକୁ ଦେଇଥାଏ।

Ultimate Multisiteରେ ବିଲିଂ ଠିକଣା କ୍ଷେତ୍ର ଥିବାରୁ, ଚେକଆଉଟ୍ ଫର୍ମରେ WooCommerce ଦ୍ୱାରା ଦେଖାଯାଉଥିବା ଡିଫଲ୍ଟ କ୍ଷେତ୍ରଗୁଡ଼ିକୁ ହଟାଇବା ଉଚିତ ହୋଇପାରେ। ଡିଫଲ୍ଟ ଭାବେ, ଏହି ତାଲିକାକୁ କୌଣସି ମୂଲ୍ୟ ପାସ୍ କରାଯାଏ ନାହିଁ, ତେଣୁ WooCommerceରେ ଦେଖାଇବା ପାଇଁ କନଫିଗର୍ ହୋଇଥିବା ସମସ୍ତ କ୍ଷେତ୍ର ରଖାଯାଏ।

### ଠାରୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ରେ ୨୭୭ ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ


## ଫେରାଇଥାଏ {#returns}
ହଟାଇବାକୁ ଥିବା କ୍ଷେତ୍ରଗୁଡ଼ିକର ତାଲିକା। ଉପଲବ୍ଧ ମୂଲ୍ୟଗୁଡ଼ିକରେ billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, ଏବଂ billing_phone ରହିଛି।
