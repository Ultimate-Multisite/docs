---
id: wu_minimum_password_length
title: 필터 - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# 필터: wu_minimum_password_length

최소 비밀번호 길이를 필터링합니다.

wu_enforce_password_rules가 true일 때만 적용됩니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | 최소 비밀번호 길이. 기본값은 12 (Defender Pro와 일치). |
| $defender_active | `bool` | Defender Pro Strong Password가 활성화되어 있는지 여부. |

### Since

- 2.4.0

### Source

정의된 위치: [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) 라인 543
