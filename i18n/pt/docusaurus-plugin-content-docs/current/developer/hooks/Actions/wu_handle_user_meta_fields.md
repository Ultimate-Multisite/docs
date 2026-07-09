---
id: wu_handle_user_meta_fields
title: Ação - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Ação: wu_handle_user_meta_fields

Permite que os programadores de plugins guardem metadados de utilizador de formas diferentes, se precisarem.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $meta_repository | `array` | A lista de campos de meta, estruturada como key =&gt; value. |
| $user | `\WP_User` | O objeto de utilizador WordPress. |
| $customer | `\Customer` | O objeto de cliente Ultimate Multisite. |
| $checkout | `\Checkout` | A classe de checkout. |

### Desde

- 2.0.4
### Fonte

Definido em [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) na linha 1244
