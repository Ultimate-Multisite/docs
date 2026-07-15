---
id: wu_domain_transfer_completed
title: Action - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed

Déclenché après qu'un transfert de domaine est terminé.

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | L'objet domaine. |
| $transfer_data | `array` | Les données d'achèvement du transfert. |

### Depuis {#since}

- 2.1.0
### Source {#source}

Défini dans [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) à la ligne 690
