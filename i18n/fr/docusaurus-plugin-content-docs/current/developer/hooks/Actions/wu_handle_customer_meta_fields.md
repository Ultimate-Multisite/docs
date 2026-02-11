---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Permettre aux développeurs de plugins de sauvegarder les métadonnées de différentes manières s'ils en ont besoin.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | La liste des champs méta, structurée clé => valeur. |
| $customer | `\Customer` | L'objet client Ultimate Multisite. |
| $checkout | `\Checkout` | La classe de paiement. |

### Since

- 2.0.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) at line 1211
