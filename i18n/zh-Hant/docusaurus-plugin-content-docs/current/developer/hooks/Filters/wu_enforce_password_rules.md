---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

過濾器是否要強制執行額外的密碼規則。

當此過濾器為 `true` 時，系統會強制執行最短長度和字元要求。如果設定為「超強」或 Defender Pro 的「強密碼」功能啟用，此過濾器會自動啟用。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | 是否要強制執行額外的規則。 |
| $strength_setting | `string` | 管理員設定的值。 |
| $defender_active | `bool` | 是否啟用了 Defender Pro 的強密碼功能。 |

### Since {#since}

- 2.4.0
### Source {#source}

定義於 [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) 第 531 行
