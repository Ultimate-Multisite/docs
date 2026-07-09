---
id: wu_checkout_form_base_domains
title: 過濾器 - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

篩選不應成為對應網域記錄的共用結帳表單基礎網域。

當整合為結帳表單 **Site URL** 欄位提供額外的基礎網域時，請使用此 filter。此 filter 回傳的網域會被視為共用註冊主機，而不是每個網站各自的自訂網域。

## 參數 {#parameters}

| 名稱 | 類型 | 說明 |
|------|------|-------------|
| $domains | `array` | 從結帳表單設定收集的共用基礎網域。 |

### 自 {#since}

- 2.13.0

### 來源 {#source}

定義於 `inc/functions/domain.php`。


## 回傳 {#returns}

正規化的結帳表單基礎網域陣列。
