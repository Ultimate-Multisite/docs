---
id: wu_magic_link_enforce_user_agent
title: 過濾器 - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# 篩選器：wu_magic_link_enforce_user_agent

篩選器是否強制執行使用者代理人驗證。

將其設定為 false，可以讓 token 在不同瀏覽器/設備上正常運作。這會降低安全性，但能提高使用便利性。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $enforce | `bool` | 是否強制匹配使用者代理人。 |

### 適用版本

- 2.0.0
### 來源

定義於 [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) 的第 410 行
