---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Фільтр - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Дазваляе рэалізавальнікам прымусова выкарыстоўваць WooCommerce Subscriptions.

Па спілкуванні add-on праверяе, ці (1) прысутні WooCommerce Subscriptions (чы ў поўнай форме plugin, чи ўбудаваны core), а потым (2) праверяе ўnastроэнні, якое дазваляе выкарыстоўваць WooCommerce Subscriptions.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Калі нам зараз трэба выкарыстоўваць Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Бядужытны (актуальны) аб'ект. |

### Выказчык {#source}

Вызначаны ў [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) на 361-й кропцы.

## Павяртае {#returns}
true, каб выкарыстоўваць WooCommerce Subs; false — каб не выкарыстоўваць.
