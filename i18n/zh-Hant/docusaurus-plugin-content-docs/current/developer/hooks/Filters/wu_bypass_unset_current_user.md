---
id: wu_bypass_unset_current_user
title: 過濾器 - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# 篩選器：wu_bypass_unset_current_user

讓開發人員能夠繞過清除目前登入使用者（unset current user）的程式碼。

如果回傳的值不是 `null`，就會繞過清除目前登入使用者的動作。這在某些情境下會很有用，例如當您處理被用作管理員面板的子站點時。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $null_or_bypass | `mixed` | 如果傳入 `null` 則繼續執行，否則則繞過清除動作。 |
| $current_user | `false\|\WP_User` | 目前的使用者物件。 |

### 自

- 2.0.11
### 來源

定義於 [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) 的第 221 行。

## 回傳值
