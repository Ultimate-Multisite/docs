---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: 필터 - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

개발자가 WooCommerce Subscriptions 사용을 강제하도록 허용합니다.

기본적으로 애드온은 (1) WooCommerce Subscriptions가 존재하는지(전체 플러그인 또는 번들 코어) 확인하고, (2) WooCommerce Subscriptions 사용을 활성화하는 설정을 확인합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $enable_woocommerce_subscription_integration | `bool` | 현재 Woo Subs를 사용해야 하는지 여부 |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | 현재 객체 |

### 소스

정의된 위치: [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) 361번째 줄

## 반환값

true는 WooCommerce Subs를 사용하고, false는 사용하지 않음을 의미합니다.
