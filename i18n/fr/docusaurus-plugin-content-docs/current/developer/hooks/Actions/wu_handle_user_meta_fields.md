---
id: wu_handle_user_meta_fields
title: Action - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Permet aux développeurs de plugins de sauvegarder les métadonnées utilisateur de différentes manières s'ils en ont besoin.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | La liste des champs méta, structurée clé =&gt; valeur. |
| $user | `\WP_User` | L'objet utilisateur WordPress. |
| $customer | `\Customer` | L'objet client Ultimate Multisite. |
| $checkout | `\Checkout` | La classe de paiement. |

### Since

- 2.0.4

### Source

Défini dans [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) à la ligne 1244
