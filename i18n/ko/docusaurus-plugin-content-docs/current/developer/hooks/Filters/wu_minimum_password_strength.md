---
id: wu_minimum_password_strength
title: 필터 - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

필터: 최소 비밀번호 강도 필터 (zxcvbn 점수).

Strength levels: - 0, 1: Very weak - 2: Weak - 3: Medium - 4: Strong (default)

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | 최소 강도 수준입니다. |
| $strength_setting | `string` | 관리자 설정 값 (medium, strong, super_strong)입니다. |

### Since

- 2.4.0

### Source

정의된 위치: [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) 라인 516에서
