---
id: wu_domain_renewal_failed
title: 動作 - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

當網域續訂嘗試失敗時觸發。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 觸發續訂的付款資訊。 |
| $renewal_data | `array&lt;string,mixed&gt;` | 續訂的元數據（例如：網域名稱、年數等）。 |
| $error_message | `string` | 來自註冊商、人類可讀的錯誤訊息。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) 第 630 行
