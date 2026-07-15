---
id: wu_domain_seller_complete_registration
title: Ação - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Ação: wu_domain_seller_complete_registration

Dispara quando um pagamento transita para um estado que deve acionar o registo do domínio.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O objeto de pagamento. |
| $old_status | `string` | O estado de pagamento anterior antes da transição. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) na linha 266
