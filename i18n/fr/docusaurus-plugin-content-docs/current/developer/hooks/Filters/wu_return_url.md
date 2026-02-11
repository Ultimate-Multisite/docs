---
id: wu_return_url
title: Filtre - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Permet aux développeurs de modifier l'URL de retour de la passerelle utilisée après les processus de paiement.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | l'URL vers laquelle rediriger après le processus. |
| $gateway | `self` | l'instance de la passerelle. |
| $payment | `\WP_Ultimo\Models\Payment` | l'instance de paiement Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | la commande de panier actuelle d'Ultimate Multisite. |

### Since

- 2.0.20

### Source

Défini dans [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) à la ligne 683


## Returns
