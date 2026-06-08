---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

WooCommerce Subscriptions ഉപയോഗിക്കാൻ നിർബന്ധമാക്കാൻ ഡെവലപ്പർമാർക്ക് ഇത് അനുവദിക്കുന്നു.

ഡിഫോൾട്ടായി, ഈ add-on രണ്ട് കാര്യങ്ങൾ പരിശോധിക്കുന്നു: (1) WooCommerce Subscriptions ലഭ്യമാണോ (പൂർണ്ണമായ plugin ആണോ അതോ bundled core ആണോ), തുടർന്ന് (2) WooCommerce Subscriptions ഉപയോഗിക്കാനുള്ള സെറ്റിംഗ് ഓൺ ആണോ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | നിലവിൽ നമുക്ക് Woo Subs ഉപയോഗിക്കേണ്ടതുണ്ടോ. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | നിലവിലെ object. |

### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) at line 361

## Returns
WooCommerce Subs ഉപയോഗിക്കണമെങ്കിൽ `true`, ഉപയോഗിക്കണ്ടെങ്കിൽ `false` എന്ന് തിരികെ നൽകുന്നു.
