---
id: wu_domain_registration_completed
title: Acció - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Acció: wu_domain_registration_completed

S'executa després que un domini hagi estat registrat amb èxit.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | El pagament que va desencallar el registre. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadades de registre (domain\_name, provider\_id, years, expiry\_date, etc.). |
| $result | `array&lt;string,mixed&gt;` | Array de resultats brut returnat pel registrador. |

### Des

- 2.0.0
### Font

Definit en [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) a la línia 1204
