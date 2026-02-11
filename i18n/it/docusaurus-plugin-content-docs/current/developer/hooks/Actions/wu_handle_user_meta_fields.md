---
id: wu_handle_user_meta_fields
title: Azione - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Azione: wu_handle_user_meta_fields

Consenti agli sviluppatori di plugin di salvare i metadati utente in diversi modi se necessario.

## Parameters

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $meta_repository | `array` | L'elenco dei campi meta, strutturato come chiave => valore. |
| $user | `\WP_User` | L'oggetto utente WordPress. |
| $customer | `\Customer` | L'oggetto cliente Ultimate Multisite. |
| $checkout | `\Checkout` | La classe checkout. |

### Da

- 2.0.4

### Fonte

Definito in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
