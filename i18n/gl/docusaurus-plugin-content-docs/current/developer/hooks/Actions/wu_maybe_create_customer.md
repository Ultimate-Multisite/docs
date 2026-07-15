---
id: wu_maybe_create_customer
title: Acción - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Permite aos desenvolvedores de plugins facer cousas adicionais cando se engade o cliente.

Aquí é onde engadimos os ganchos para engadir tamén o customer-&gt;user ao sitio principal, por exemplo.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $customer | `\Customer` | O cliente que talvez se creou. |
| $checkout | `\Checkout` | A clase de checkout actual. |

### Desde {#since}

- 2.0.0
### Orixe {#source}

Definido en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) na liña 1156
