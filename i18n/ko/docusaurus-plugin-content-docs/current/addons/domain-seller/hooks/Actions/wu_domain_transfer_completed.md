---
id: wu_domain_transfer_completed
title: 액션 - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed

도메인 이전이 완료된 후 실행되는 액션입니다.

## 매개변수 {#parameters}

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | 도메인 객체입니다. |
| $transfer_data | `array` | 이전 완료 데이터입니다. |

### 지원 시작 버전 {#since}

- 2.1.0
### 출처 {#source}

[`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690)의 690번째 줄에서 정의되었습니다.
