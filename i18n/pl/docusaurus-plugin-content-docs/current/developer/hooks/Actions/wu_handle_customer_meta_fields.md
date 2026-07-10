---
id: wu_handle_customer_meta_fields
title: Akcja - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Umożliwia twórcom wtyczek zapisywanie metadanych na różne sposoby, jeśli zajdzie taka potrzeba.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Lista pól metadanych, ustrukturyzowana jako klucz => wartość. |
| $customer | `\Customer` | Obiekt klienta Ultimate Multisite. |
| $checkout | `\Checkout` | Klasa obsługująca proces kasy. |

### Since {#since}

- 2.0.0
### Source {#source}

Zdefiniowane w [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) w linii 1211
