---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

允許開發人員跳過網路啟用檢查。

當您使用基於 composer 或其他自訂設定（例如 Bedrock）時，這會很有用，因為在這些環境中，使用 mu-plugins 已經是常規做法。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | 是否跳過檢查，預設為 false。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) 第 272 行


## Returns {#returns}
如果希望跳過檢查，則回傳 true，否則回傳 false。
