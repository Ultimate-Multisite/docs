---
id: wu_return_url
title: 過濾器 - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# 篩選器：wu_return_url

允許開發人員更改結帳流程完成後使用的閘道（gateway）回傳 URL。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $return_url | `string` | 處理流程完成後要重新導向的 URL。 |
| $gateway | `self` | 閘道實例。 |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite 付款實例。 |
| $cart | `\WP_Ultimo\Checkout\Cart` | 當前的 Ultimate Multisite 購物車訂單。 |

### 自

- 2.0.20
### 來源

定義於 [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) 的第 683 行。

## 回傳值
