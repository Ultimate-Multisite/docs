---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Se déclenche lorsqu'une tentative de renouvellement de domaine échoue.

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Le paiement qui a déclenché le renouvellement. |
| $renewal_data | `array<string,mixed>` | Métadonnées de renouvellement (nom du domaine, années, etc.). |
| $error_message | `string` | Message d'erreur lisible par l'utilisateur provenant de l'registrar. |

### Depuis {#since}

- 2.0.0
### Source {#source}

Défini dans [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) à la ligne 630
