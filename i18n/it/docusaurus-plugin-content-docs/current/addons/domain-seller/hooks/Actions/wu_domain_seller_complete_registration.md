---
id: wu_domain_seller_complete_registration
title: Azione - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Azione: wu_domain_seller_complete_registration

Si attiva quando un pagamento passa a uno stato che dovrebbe innescare la registrazione del dominio.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | L'oggetto pagamento. |
| $old_status | `string` | Lo stato precedente del pagamento prima della transizione. |

### Da

- 2.0.0
### Sorgente

Definito in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) alla riga 266
