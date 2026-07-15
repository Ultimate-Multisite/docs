---
id: wu_minimum_password_strength
title: 過濾器 - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

用來篩選所需的最低密碼強度（zxcvbn 分數）。

強度等級：- 0, 1：非常弱 - 2：弱 - 3：中等 - 4：強（預設）

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | 所需的最低強度等級。 |
| $strength_setting | `string` | 管理員設定的值（medium, strong, super_strong）。 |

### Since {#since}

- 2.4.0
### Source {#source}

定義於 [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) 第 516 行
