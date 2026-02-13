---
id: wu_return_url
title: 필터 - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# 필터: wu_return_url

개발자가 결제 프로세스 후에 사용되는 게이트웨이 반환 URL을 변경할 수 있도록 허용합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $return_url | `string` | 프로세스 후 리디렉션할 URL |
| $gateway | `self` | 게이트웨이 인스턴스 |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite 결제 인스턴스 |
| $cart | `\WP_Ultimo\Checkout\Cart` | 현재 Ultimate Multisite 장바구니 주문 |

### 버전

- 2.0.20

### 소스

다음 파일에서 정의됨: [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) (라인 683)

## 반환값
