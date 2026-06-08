---
id: wu_domain_transfer_completed
title: Acțiune - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed

Se declanșează după ce transferul de domeniu este finalizat.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Obiectul de domeniu. |
| $transfer_data | `array` | Datele de finalizare a transferului. |

### De la

- 2.1.0
### Sursă

Definit în [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) la linia 690
