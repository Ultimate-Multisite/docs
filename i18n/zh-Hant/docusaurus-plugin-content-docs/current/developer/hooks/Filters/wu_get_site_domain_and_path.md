---
id: wu_get_site_domain_and_path
title: 篩選器 - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# 過濾器：wu_get_site_domain_and_path

允許開發人員修改網域/路徑的組合。

這在許多情境下都非常有用，例如實作某種預覽環境、多個伺服器等。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $d | `object` | 包含網域和路徑鍵的當前物件。 |
| $path_or_subdomain | `string` | 傳遞給此函式的原始路徑/子網域。 |

### 自 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) 的第 235 行


## 回傳值 {#returns}
一個包含網域和路徑鍵的物件。
