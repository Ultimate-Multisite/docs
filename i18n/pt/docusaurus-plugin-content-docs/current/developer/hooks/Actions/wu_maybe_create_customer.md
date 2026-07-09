---
id: wu_maybe_create_customer
title: Ação - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Ação: wu_maybe_create_customer

Permite que developers de plugin façam ações adicionais quando o cliente é adicionado.

É aqui que adicionamos os hooks para adicionar o customer-&gt;user também ao site principal, por exemplo.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $customer | `\Customer` | O cliente que talvez tenha sido criado. |
| $checkout | `\Checkout` | A classe de checkout atual. |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) na linha 1156
