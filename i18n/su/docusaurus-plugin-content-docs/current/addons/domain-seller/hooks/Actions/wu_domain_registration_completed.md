---
id: wu_domain_registration_completed
title: Aksi - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Aksi: wu_domain_registration_completed

Dijalankeun sanggeus domain hasil didaptarkeun.

## Paraméter {#parameters}

| Ngaran | Jinis | Katerangan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pamayaran anu micu pendaptaran. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata pendaptaran (domain_name, provider_id, years, expiry_date, jsb.). |
| $result | `array&lt;string,mixed&gt;` | Array hasil atah anu dipulangkeun ku registrar. |

### Ti saprak {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) dina garis 1204
