---
id: wu_minimum_password_length
title: 過濾器 - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# 過濾器：wu_minimum_password_length

用來過濾設定最短密碼長度。

此過濾器僅在 `wu_enforce_password_rules` 為 `true` 時才會生效。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $min_length | `int` | 最短密碼長度。預設為 12（與 Defender Pro 相同）。 |
| $defender_active | `bool` | 判斷 Defender Pro 強密碼功能是否啟用。 |

### 適用版本 {#since}

- 2.4.0
### 來源 {#source}

定義於 [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) 第 543 行
