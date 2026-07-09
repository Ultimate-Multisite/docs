---
id: wu_domain_seller_process_purchase
title: Acción - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Acción: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Dispárase cando se está procesando a compra dun dominio tras completarse o checkout.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O obxecto de pagamento. |
| $checkout_data | `array&lt;string,mixed&gt;` | Datos completos do checkout do formulario de rexistro. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) na liña 246
