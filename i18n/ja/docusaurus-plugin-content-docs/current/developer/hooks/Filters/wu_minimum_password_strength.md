---
id: wu_minimum_password_strength
title: フィルタ - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# フィルタ: wu_minimum_password_strength

Filter the minimum password strength required (zxcvbn score).  
必要な最小パスワード強度をフィルタします (zxcvbn スコア)。

Strength levels:  
- 0, 1: Very weak  
- 2: Weak  
- 3: Medium  
- 4: Strong (default)  
強度レベル:  
- 0, 1: 非常に弱い  
- 2: 弱い  
- 3: 中程度  
- 4: 強い (デフォルト)

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $min_strength | `int` | 必要な最小強度レベル。 |
| $strength_setting | `string` | 管理者設定値 (medium, strong, super_strong)。 |

### 導入

- 2.4.0

### ソース

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516  
定義は [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) の 516 行目にあります
