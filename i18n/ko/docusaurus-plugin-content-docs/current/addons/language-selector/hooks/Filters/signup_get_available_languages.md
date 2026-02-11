---
id: signup_get_available_languages
title: 필터 - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: abfd9a9381c23503be93e034d42f32c8
---
# Filter: signup_get_available_languages

프런트엔드 사이트 가입을 위한 사용 가능한 언어 목록을 필터링합니다.

빈 배열을 이 훅에 전달하면 가입 양식에서 설정 출력이 비활성화되고, 사이트를 생성할 때 기본 언어가 사용됩니다. 이미 설치되지 않은 언어는 제거됩니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | 사용 가능한 언어들. |

### 버전

- 4.4.0

### 소스

정의됨 [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L125) 125번째 줄에서
