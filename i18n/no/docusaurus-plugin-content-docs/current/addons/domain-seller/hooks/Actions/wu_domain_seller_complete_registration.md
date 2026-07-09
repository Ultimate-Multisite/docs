---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Utløses når en betaling går til en status som skal utløse domenergistrering.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalingsobjektet. |
| $old_status | `string` | Den forrige betalingsstatusen før overgangen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) på linje 266
