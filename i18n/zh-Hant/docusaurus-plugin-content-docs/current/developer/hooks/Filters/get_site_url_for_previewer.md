---
id: get_site_url_for_previewer
title: 過濾器 - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

允許外掛開發人員過濾預覽器（previewer）中使用的 URL。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $domain | `string` | 目前正在使用的預設網域，適用於進行各種操作。 |
| $domain_options | `array` | 在 Ultimate Multisite 設定 > 網路設定 > 網域選項中輸入的所有網域選項列表。 |

### 自

- 1.7.2
### 來源

定義於 [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) 的第 812 行。

## 回傳值
將要使用的新的網域。
