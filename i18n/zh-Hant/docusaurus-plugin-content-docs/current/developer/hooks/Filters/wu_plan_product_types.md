---
id: wu_plan_product_types
title: 過濾器 - wu_plan_product_types
sidebar_label: wu_plan_product_types
_i18n_hash: 8aabbc879ded9ee68419d20dc6b94ec5
---
# 過濾器：wu_plan_product_types

用來過濾出應該被視為「方案」的產品類型。

此過濾器允許外掛註冊額外的產品類型，讓系統在進行驗證和區分時，也能將這些類型識別為方案。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $plan_types | `array` | 傳入一個產品類型陣列，這些類型將被視為方案。 |

### 適用版本

- 2.3.0
### 來源

定義於 [`inc/functions/product.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/product.php#L196) 的第 196 行


## 回傳值
