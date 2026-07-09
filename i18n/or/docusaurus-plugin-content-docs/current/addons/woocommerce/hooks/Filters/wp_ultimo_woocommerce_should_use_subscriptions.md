---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: ଫିଲ୍ଟର୍ - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

ଡିଭେଲପରମାନଙ୍କୁ WooCommerce Subscriptions ବ୍ୟବହାରକୁ ବାଧ୍ୟ କରିବାକୁ ଅନୁମତି ଦିଅନ୍ତୁ।

ଡିଫଲ୍ଟ ଭାବରେ add-on ଯାଞ୍ଚ କରେ ଯେ (୧) WooCommerce Subscriptions ଉପସ୍ଥିତ ଅଛି କି (ସମ୍ପୂର୍ଣ୍ଣ plugin କିମ୍ବା ବଣ୍ଡଲ୍ core), ତାପରେ (୨) WooCommerce Subscriptions ବ୍ୟବହାର ସକ୍ରିୟ କରୁଥିବା ସେଟିଂକୁ ଯାଞ୍ଚ କରେ।

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | ଯଦି ବର୍ତ୍ତମାନ ଆମକୁ Woo Subs ବ୍ୟବହାର କରିବାକୁ ପଡ଼ୁଛି। |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | ବର୍ତ୍ତମାନର object। |

### ଉତ୍ସ {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ରେ ୩୬୧ ନମ୍ବର ପଙ୍କ୍ତିରେ ପରିଭାଷିତ


## ଫେରାଇଥାଏ {#returns}
WooCommerce Subs ବ୍ୟବହାର କରିବାକୁ true, ନ ବ୍ୟବହାର କରିବାକୁ false।
