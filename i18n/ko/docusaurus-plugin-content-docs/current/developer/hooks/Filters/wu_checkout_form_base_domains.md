---
id: wu_checkout_form_base_domains
title: 필터 - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# 필터: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

매핑된 도메인 레코드가 되면 안 되는 공유 체크아웃 양식 기본 도메인을 필터링합니다.

통합이 체크아웃 양식 **Site URL** 필드에 추가 기본 도메인을 제공할 때 이 필터를 사용하세요. 이 필터가 반환한 도메인은 사이트별 사용자 지정 도메인 대신 공유 등록 호스트로 처리됩니다.

## 매개변수 {#parameters}

| 이름 | 유형 | 설명 |
|------|------|-------------|
| $domains | `array` | 체크아웃 양식 구성에서 수집된 공유 기본 도메인입니다. |

### 이후 버전 {#since}

- 2.13.0

### 소스 {#source}

`inc/functions/domain.php`에 정의되어 있습니다.


## 반환값 {#returns}

정규화된 체크아웃 양식 기본 도메인의 배열입니다.
