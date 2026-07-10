---
id: wu_bypass_checkout_form
title: 過濾器 - wu_bypass_checkout_form
sidebar_label: wu_bypass_checkout_form
_i18n_hash: ad57eddbc5463e999d4896a31ed368a3
---
# 篩選器：wu_bypass_checkout_form {#filter-wubypasscheckoutform}

允許開發人員繞過預設的輸出，並設定新的內容。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $bypass | `string\|bool` | 如果我們應該繞過結帳表單，則傳入 `true`；否則，傳入一個字串，作為替代表單的內容。 |
| $atts | `array` | 結帳區塊/短代碼的參數。 |

### 來源 {#source}

定義於 [`inc/ui/class-checkout-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-checkout-element.php#L327) 的第 327 行。
