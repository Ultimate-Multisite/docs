---
id: wu_get_checkout_variables
title: Filtre - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filtre : wu_get_checkout_variables

Permet aux développeurs de plugins de filtrer les préréglages d'une page de paiement.

Attention, l'absence de clés peut complètement casser le paiement côté client.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $variables | `array` | Variables localisées. |
| $checkout | `\Checkout` | La classe de paiement. |

### Depuis

- 2.0.0

### Source

Défini dans [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) à la ligne 1970

## Retour

Le nouveau tableau de variables.
