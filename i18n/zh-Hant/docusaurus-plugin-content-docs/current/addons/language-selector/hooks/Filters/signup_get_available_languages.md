---
id: signup_get_available_languages
title: 過濾器 - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

用來過濾前端網站註冊時可用的語言列表。

如果傳遞一個空陣列給此鉤子 (hook)，將會禁用註冊表單上該設定的輸出，並且在建立網站時會使用預設語言。任何尚未安裝的語言都會被移除。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $available_languages | `array` | 可用的語言列表。 |

### 自

- 4.4.0
### 來源

定義於 [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) 的第 117 行
