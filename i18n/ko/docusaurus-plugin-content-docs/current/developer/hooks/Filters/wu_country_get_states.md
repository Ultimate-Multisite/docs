---
id: wu_country_get_states
title: 필터 - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# 필터: wu_country_get_states

이 국가의 주 목록을 반환합니다.

## 매개변수

| 이름 | 형식 | 설명 |
|------|------|------|
| $states | `array` | XX => Name 형식의 주 목록. |
| $country_code | `string` | 국가의 두 글자 ISO 코드. |
| $current_country | `\WP_Ultimo\Country\Country` | 현재 클래스의 인스턴스. |

### 버전

- 2.0.11

### 소스

정의된 위치: [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) 86번째 줄

## 반환값

필터링된 주 목록.
