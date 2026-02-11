---
id: wu_limits_is_fluent_form_above_limit
title: フィルタ - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# フィルタ: wu_limits_is_fluent_form_above_limit

このプランで指定されたフォームタイプが許可されているかどうかを確認します。プラグイン開発者は戻り値をフィルタリングできます。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | フォームタイプが上限を超えているかどうか |
| $form_type | `string` | チェック対象のフォームタイプ |
| $form_count | `int` | 現在のフォーム数 |
| $quota | `int` | 許可されたクォータ |

### 以降

- 1.0.0

### ソース

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
