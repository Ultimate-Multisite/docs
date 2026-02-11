---
id: wu_woocommerce_line_item_params
title: 필터 - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# 필터: wu_woocommerce_line_item_params

WooCommerce Cart에서 라인 아이템을 생성하는 데 사용되는 매개변수를 필터링합니다. 고객을 WooCommerce checkout으로 리디렉션하기 전에.

## 매개변수

| 이름 | 유형 | 설명 |
|------|------|-------------|
| $line_item_params | `array` | 장바구니 라인 아이템 매개변수. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite 라인 아이템 인스턴스. |
| $wc_product | `\WC_Product` | WooCommerce 제품. |

### 버전

- 2.0.0

### 소스

다음에서 정의됨: [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) 662번째 줄에서

## 반환값

수정된 라인 아이템 매개변수.
