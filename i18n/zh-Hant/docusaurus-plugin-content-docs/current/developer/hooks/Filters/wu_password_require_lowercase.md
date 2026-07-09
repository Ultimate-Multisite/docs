---
id: wu_password_require_lowercase
title: 過濾器 - wu_password_require_lowercase
sidebar_label: wu_password_require_lowercase
_i18n_hash: 5afaa63a8b318dc2167edd1bba3e0b27
---
# Filter: wu_password_require_lowercase {#filter-wupasswordrequirelowercase}

用來判斷密碼是否需要包含小寫字母。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $require | `bool` | 是否需要小寫字母。若啟用規則檢查，預設為 `true`。 |
| $defender_active | `bool` | 是否啟用了 Defender Pro Strong Password。 |

### Since {#since}

- 2.4.0
### Source {#source}

定義於 [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L563) 第 563 行
