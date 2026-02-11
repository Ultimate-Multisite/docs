---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Azione: wu_handle_customer_meta_fields

Consenti agli sviluppatori di plugin di salvare i meta dati in diversi modi se necessario.

## Parameters

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $meta_repository | `array` | L'elenco dei campi meta, strutturato come chiave => valore. |
| $customer | `\Customer` | L'oggetto cliente Ultimate Multisite. |
| $checkout | `\Checkout` | La classe checkout. |

### Since

- 2.0.0

### Source

Definito in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) alla riga 1211
