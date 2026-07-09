---
id: wu_handle_customer_meta_fields
title: Darbība - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Darbība: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Ļauj plugin izstrādātājiem saglabāt meta datus dažādos veidos, ja tas nepieciešams.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Meta lauku saraksts, strukturēts kā atslēga =&gt; vērtība. |
| $customer | `\Customer` | Ultimate Multisite klienta objekts. |
| $checkout | `\Checkout` | Checkout klase. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) 1211. rindā
