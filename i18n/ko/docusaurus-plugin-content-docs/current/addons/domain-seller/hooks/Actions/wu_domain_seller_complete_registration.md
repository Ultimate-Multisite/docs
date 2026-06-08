---
id: wu_domain_seller_complete_registration
title: 액션 - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

결제 상태가 도메인 등록을 유발해야 하는 상태로 변경될 때 실행됩니다.

## 매개변수

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 결제 객체입니다. |
| $old_status | `string` | 상태가 변경되기 전의 이전 결제 상태입니다. |

### 버전

- 2.0.0
### 출처

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266)의 266번째 줄에서 정의되었습니다.
