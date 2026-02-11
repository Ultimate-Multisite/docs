---
id: wu_pending_payment_message
title: Filtre - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filtre : wu_pending_payment_message

Permettre à l'utilisateur de modifier le message concernant les paiements en attente.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $message | `string` | Le message à afficher. |
| $customer | `\WP_Ultimo\Models\Customer` | Le client actuel. |
| $pending_payments | `array` | Une liste de paiements en attente. |

### Depuis

- 2.0.19

### Source

Défini dans [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) à la ligne 244
