---
id: wu_password_require_special
title: 過濾器 - wu_password_require_special
sidebar_label: wu_password_require_special
_i18n_hash: 87f845abf068a92161fb7db01f88ee99
---
# Filter: wu_password_require_special

用來判斷是否需要密碼包含特殊字元。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $require | `bool` | 是否需要特殊字元。當規則強制執行時，預設為 `true`。 |
| $defender_active | `bool` | Defender Pro Strong Password 是否啟用。 |

### Since {#since}

- 2.4.0
### Source {#source}

定義於 [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L583) 第 583 行
