---
id: wu_domain_seller_search_delay
title: 필터 - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# 필터: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

도메인 검색의 디바운스 지연 시간(밀리초)을 필터링합니다.

이 값을 늘리면 느린 연결 환경에서 API 호출 횟수를 줄일 수 있습니다.

## 매개변수 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | 밀리초 단위의 디바운스 지연 시간. 기본값은 500입니다. |

### 적용 버전 {#since}

- 2.1.0
### 출처 {#source}

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854)의 854번째 줄에 정의되어 있습니다.
