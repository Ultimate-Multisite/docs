---
id: signup_get_available_languages
title: 필터 - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# 필터: signup_get_available_languages

프런트엔드 사이트 가입에 사용할 수 있는 언어 목록을 필터링합니다.

이 훅에 빈 배열을 전달하면 가입 양식에서 이 설정 출력이 비활성화되며, 사이트를 생성할 때 기본 언어가 사용됩니다. 이미 설치되지 않은 언어는 제거됩니다.

## 매개변수

| 이름 | 유형 | 설명 |
|------|------|-------------|
| $available_languages | `array` | 사용할 수 있는 언어입니다. |

### 도입 버전

- 4.4.0
### 소스

[`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117)의 117번째 줄에 정의됨
