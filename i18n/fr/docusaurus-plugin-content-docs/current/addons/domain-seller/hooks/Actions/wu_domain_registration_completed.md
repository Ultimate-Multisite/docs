---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Se déclenche après qu'un domaine a été enregistré avec succès.

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Le paiement qui a déclenché l'enregistrement. |
| $registration_data | `array&lt;string,mixed&gt;` | Métadonnées d'enregistrement (domain_name, provider_id, years, expiry_date, etc.). |
| $result | `array&lt;string,mixed&gt;` | Tableau de résultats brut renvoyé par l'enregistreur. |

### Depuis {#since}

- 2.0.0
### Source {#source}

Défini dans [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) à la ligne 1204
