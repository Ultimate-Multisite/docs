---
id: wu_domain_seller_complete_registration
title: Acción - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Acción: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Dispárase cando un pagamento pasa a un estado que debería activar o rexistro do dominio.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O obxecto de pagamento. |
| $old_status | `string` | O estado de pagamento anterior antes da transición. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) na liña 266
