---
id: wu_domain_seller_process_purchase
title: Ação - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Dispara quando uma compra de domínio está sendo processada após a conclusão do checkout.

## Parâmetros

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O objeto de pagamento. |
| $checkout_data | `array&lt;string,mixed&gt;` | Dados completos do checkout do formulário de cadastro. |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) na linha 246
