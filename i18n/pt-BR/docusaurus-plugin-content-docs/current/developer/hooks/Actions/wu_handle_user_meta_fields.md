---
id: wu_handle_user_meta_fields
title: Ação - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Permitir que desenvolvedores de plugins salvem dados de meta do usuário de diferentes maneiras, se necessário.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | A lista de campos de meta, estruturada como chave =&gt; valor. |
| $user | `\WP_User` | O objeto do usuário do WordPress. |
| $customer | `\Customer` | O objeto do cliente do Ultimate Multisite. |
| $checkout | `\Checkout` | A classe de checkout. |

### Since

- 2.0.4
### Source

Definido em [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) na linha 1244
