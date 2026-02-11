---
id: wu_enforce_password_rules
title: 필터 - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# 필터: wu_enforce_password_rules

추가 비밀번호 규칙을 적용할지 여부를 필터링합니다.  
true일 경우 최소 길이 및 문자 요구 사항을 적용합니다. 'Super Strong' 설정이거나 Defender Pro의 Strong Password 기능이 활성화된 경우 자동으로 활성화됩니다.

## Parameters

| 이름 | 유형 | 설명 |
|------|------|------|
| $enforce_rules | `bool` | 추가 규칙을 적용할지 여부. |
| $strength_setting | `string` | 관리자 설정 값. |
| $defender_active | `bool` | Defender Pro Strong Password가 활성화되어 있는지 여부. |

### 버전

- 2.4.0

### 출처

다음에서 정의됨: [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) 라인 531
