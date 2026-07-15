---
id: get_blogs_of_user
title: 過濾器 - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# 篩選器：get_blogs_of_user

此處重現了原始的 WP Filter，以確保功能完整。

用於篩選使用者所屬的站點列表。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $sites | `object[]` | 屬於該使用者的站點物件陣列。 |
| $user_id | `int` | 使用者 ID。 |
| $all | `bool` | 決定回傳的站點陣列是否應包含所有站點，包括標記為「已刪除」、「已歸檔」或「垃圾郵件」的站點。預設為 false。 |

### 可用自 {#since}

- 2.0.11
### 來源 {#source}

定義於 [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) 的第 851 行
