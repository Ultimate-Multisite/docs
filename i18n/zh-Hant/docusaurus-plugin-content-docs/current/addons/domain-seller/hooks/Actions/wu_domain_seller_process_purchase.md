---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

當網域購買在結帳完成後進行處理時會觸發。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 付款物件。 |
| $checkout_data | `array&lt;string,mixed&gt;` | 來自註冊表單的完整結帳資料。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) 的第 246 行
