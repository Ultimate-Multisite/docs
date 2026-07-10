---
id: wu_handle_customer_meta_fields
title: Tindakan - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Ngidini pangembang plugin kanggo nyimpen data meta kanthi cara sing beda yen perlu.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Dhaptar kolom meta, kanthi struktur key =&gt; value. |
| $customer | `\Customer` | Objek pelanggan Ultimate Multisite. |
| $checkout | `\Checkout` | Kelas checkout. |

### Wiwit {#since}

- 2.0.0
### Sumber {#source}

Ditetepake ing [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ing baris 1211
