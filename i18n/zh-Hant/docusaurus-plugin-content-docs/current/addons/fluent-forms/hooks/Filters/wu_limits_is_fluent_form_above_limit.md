---
id: wu_limits_is_fluent_form_above_limit
title: 過濾器 - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# 篩選器：wu_limits_is_fluent_form_above_limit

用於檢查給定的表單類型是否可以在此方案中使用。允許外掛開發人員過濾回傳值。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $value | `bool` | 如果表單類型是否超過限制。 |
| $form_type | `string` | 正在檢查的表單類型。 |
| $form_count | `int` | 當前的表單數量。 |
| $quota | `int` | 允許的配額。 |

### 適用版本 {#since}

- 1.0.0
### 來源 {#source}

- 定義於 [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56)，第 56 行
- 定義於 [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89)，第 89 行
