---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Επιτρέπει στους developers να αναγκάσουν τη χρήση του WooCommerce Subscriptions.

Ερχόμενα, το add-on ελέγχει αν (1) υπάρχει το WooCommerce Subscriptions (είτε ως πλήρες plugin είτε ως ενσωματωμένο core), και στη συνέχεια (2) ελέγχει τη ρύθμιση που ενεργοποιεί τη χρήση του WooCommerce Subscriptions.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Αν χρειάζεται να χρησιμοποιήσουμε αυτή τη στιγμή τα Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Το τρέχον object. |

### Source {#source}

Ορίζεται στο [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) στην γραμμή 361

## Returns {#returns}
true για τη χρήση του WooCommerce Subs, false για τη μη χρήση του.
