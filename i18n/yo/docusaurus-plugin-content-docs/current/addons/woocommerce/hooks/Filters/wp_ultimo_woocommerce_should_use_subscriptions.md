---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Àlẹmọ - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Àlẹmọ: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Gba àwọn olùdàgbàsókè laaye láti fi ipa mú lílo WooCommerce Subscriptions.

Ní ìbẹ̀rẹ̀, add-on náà máa ń ṣàyẹ̀wò bóyá (1) WooCommerce Subscriptions wà níbẹ̀ (yálà plugin kíkún tàbí core tí a ṣàkójọpọ̀), lẹ́yìn náà (2) ó máa ń ṣàyẹ̀wò ètò tó ń jẹ́ kí lílo WooCommerce Subscriptions ṣiṣẹ́.

## Àwọn Parameter {#parameters}

| Orúkọ | Iru | Àpèjúwe |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Tí a bá nílò láti lo Woo Subs lọ́wọ́lọ́wọ́. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Object lọ́wọ́lọ́wọ́ náà. |

### Orísun {#source}

A ṣàlàyé rẹ̀ nínú [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ní ila 361


## Àwọn ìpadà {#returns}
true láti lo WooCommerce Subs, false láti má ṣe lò ó.
