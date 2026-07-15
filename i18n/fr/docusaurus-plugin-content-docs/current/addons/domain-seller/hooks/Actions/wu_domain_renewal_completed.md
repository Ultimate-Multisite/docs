---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Se déclenche après qu'un domaine a été renouvelé avec succès.

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Le paiement qui a déclenché le renouvellement. |
| $renewal_data | `array<string,mixed>` | Les métadonnées de renouvellement (nom_domaine, années, customer_id, etc.). |
| $result | `array<string,mixed>` | Le tableau de résultats brut renvoyé par l'enregistreur, incluant la nouvelle `expiry_date`. |

### Depuis {#since}

- 2.0.0
### Source {#source}

Défini dans [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) à la ligne 594
