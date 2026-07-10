---
id: wu_domain_seller_complete_registration
title: Acción - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Acción: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Se dispara cuando un pago pasa a un estado que debe activar el registro de dominio.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | El objeto de pago. |
| $old_status | `string` | El estado anterior del pago antes de la transición. |

### Desde {#since}

- 2.0.0
### Fuente {#source}

Definido en [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) en la línea 266
