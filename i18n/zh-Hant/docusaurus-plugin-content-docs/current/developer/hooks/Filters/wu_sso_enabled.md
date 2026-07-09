---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled {#filter-wussoenabled}

用來啟用或停用跨網域單點登入（single-sign-on）功能。

您可以透過修改此值，完全關閉單點登入，或設定條件式地啟用它。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | 是否要啟用 SSO？`true` 代表開啟，`false` 代表關閉。 |

### Since {#since}

- 2.0.11
### Source {#source}

定義於 [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) 的第 110 行


## Returns {#returns}
回傳單點登入（SSO）是否已啟用。
