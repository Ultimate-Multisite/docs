---
id: wu_maybe_create_customer
title: Ação - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Permitir que desenvolvedores de plugins façam coisas adicionais quando o cliente é adicionado.

Aqui é onde adicionamos os hooks para adicionar o cliente->usuário ao site principal também, por exemplo.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | O cliente que pode ter sido criado. |
| $checkout | `\Checkout` | A classe de checkout atual. |

### Since

- 2.0.0

### Source

Definido em `inc/checkout/class-checkout.php` na linha 1156
