---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

국가 행정 하위 구역의 보기 좋은 이름을 반환합니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | 분할 이름. 보통 주, 도, 지역 등과 같은 것. |
| $country_code | `string` | 국가의 두 글자 ISO 코드. |
| $state_code | `string` | 주(도)의 두 글자 ISO 코드. |
| $ucwords | `bool` | 단어를 대문자로 변환할지 여부. |
| $current_country | `\WP_Ultimo\Country\Country` | 현재 클래스의 인스턴스. |

### Since

- 2.0.11

### Source

정의 위치: [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) 250번째 줄

## Returns
수정된 분할 이름.
