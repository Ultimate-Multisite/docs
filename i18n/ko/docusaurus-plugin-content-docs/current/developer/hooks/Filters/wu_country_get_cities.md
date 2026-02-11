---
id: wu_country_get_cities
title: 필터 - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# 필터: wu_country_get_cities

상태의 도시 목록을 반환합니다.

## 매개변수

| 이름 | 유형 | 설명 |
|------|------|------|
| $cities | `array` | 상태 도시 이름 목록. 키가 없습니다. |
| $country_code | `string` | 국가의 두 글자 ISO 코드. |
| $state_code | `string` | 주의 두 글자 ISO 코드. |
| $current_country | `\WP_Ultimo\Country\Country` | 현재 클래스 인스턴스. |

### 버전

- 2.0.11

### 소스

다음에서 정의됨: [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) 146번째 줄

## 반환값

필터링된 주 목록.
