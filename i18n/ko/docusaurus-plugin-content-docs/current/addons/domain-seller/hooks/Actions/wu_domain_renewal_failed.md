---
id: wu_domain_renewal_failed
title: 액션 - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

도메인 갱신 시도가 실패했을 때 실행됩니다.

## 매개변수 {#parameters}

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 갱신을 유발한 결제 정보입니다. |
| $renewal_data | `array&lt;string,mixed&gt;` | 갱신 관련 메타데이터 (도메인 이름, 연도 등). |
| $error_message | `string` | 레지스트라(도메인 등록 기관)에서 제공하는 사람이 읽을 수 있는 오류 메시지입니다. |

### 도입 버전 {#since}

- 2.0.0
### 출처 {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630)의 630번째 줄에 정의되어 있습니다.
