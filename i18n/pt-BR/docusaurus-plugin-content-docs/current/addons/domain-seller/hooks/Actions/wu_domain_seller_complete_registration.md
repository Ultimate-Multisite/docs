---
id: wu_domain_seller_complete_registration
title: Ação - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

É acionado quando um pagamento muda para um status que deve disparar o registro de domínio.

## Parâmetros

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O objeto do pagamento. |
| $old_status | `string` | O status anterior do pagamento antes da transição. |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) na linha 266
