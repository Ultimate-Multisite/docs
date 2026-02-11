---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

이 플랜에서 주어진 폼 유형이 허용되는지 확인합니다. 플러그인 개발자는 반환 값을 필터링할 수 있습니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | 폼 유형이 한도를 초과했는지 여부 |
| $form_type | `string` | 검사 중인 폼 유형 |
| $form_count | `int` | 현재 폼 수 |
| $quota | `int` | 허용된 할당량 |

### Since

- 1.0.0

### Source

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
