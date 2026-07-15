---
id: wu_domain_seller_process_purchase
title: 액션 - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

체크아웃 완료 후 도메인 구매가 처리될 때 실행됩니다.

## 매개변수 {#parameters}

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 결제 객체입니다. |
| $checkout_data | `array&lt;string,mixed&gt;` | 회원가입 폼의 전체 체크아웃 데이터입니다. |

### 지원 시작 버전 {#since}

- 2.0.0
### 출처 {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246)의 246번째 줄에 정의되어 있습니다.
