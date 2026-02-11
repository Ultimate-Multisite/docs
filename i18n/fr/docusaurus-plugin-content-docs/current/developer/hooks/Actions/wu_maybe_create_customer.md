---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Permet aux développeurs de plugins de faire des choses supplémentaires lorsque le client est ajouté.

Voici où nous ajoutons les hooks pour ajouter le client->utilisateur au site principal également, par exemple.

## Parameters

| Nom | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | Le client qui a peut-être été créé. |
| $checkout | `\Checkout` | La classe de paiement actuelle. |

### Since

- 2.0.0

### Source

Défini dans `inc/checkout/class-checkout.php` à la ligne 1156
