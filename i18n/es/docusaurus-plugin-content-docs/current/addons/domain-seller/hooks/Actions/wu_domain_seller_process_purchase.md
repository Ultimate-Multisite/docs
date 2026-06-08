---
id: wu_domain_seller_process_purchase
title: Acción - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Acción: wu_domain_seller_process_purchase

Se dispara cuando se está procesando la compra de un dominio después de completar el pago.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | El objeto de pago. |
| $checkout_data | `array<string,mixed>` | Datos completos del proceso de pago del formulario de registro. |

### Desde

- 2.0.0
### Fuente

Definido en [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) en la línea 246
