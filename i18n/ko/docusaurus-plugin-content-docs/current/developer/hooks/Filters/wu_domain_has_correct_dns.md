---
id: wu_domain_has_correct_dns
title: 필터 - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# 필터: wu_domain_has_correct_dns

플러그인 개발자가 결과를 정의하기 위해 새로운 검사를 추가할 수 있도록 허용합니다.

## Parameters

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $result | `bool` | 현재 결과입니다. |
| $domain | `self` | 현재 도메인 인스턴스입니다. |
| $domains_and_ips | `array` | DNS 조회에서 찾은 도메인 및 IP 목록입니다. |

### 버전

- 2.0.4

### 출처

정의 위치: [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) 455번째 줄

## 반환값

DNS가 올바르게 설정되었는지 여부를 반환합니다.
