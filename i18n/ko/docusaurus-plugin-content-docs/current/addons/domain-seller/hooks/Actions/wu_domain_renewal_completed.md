---
id: wu_domain_renewal_completed
title: 액션 - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

도메인 갱신이 성공적으로 완료된 후에 실행됩니다.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 갱신을 유발한 결제 정보입니다. |
| $renewal_data | `array<string,mixed>` | 갱신 메타데이터 (도메인 이름, 기간, 고객 ID 등)입니다. |
| $result | `array<string,mixed>` | 레지스트라(등록 기관)가 반환하는 원본 결과 배열입니다. 새로운 만료일(expiry_date)이 포함됩니다. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) at line 594
