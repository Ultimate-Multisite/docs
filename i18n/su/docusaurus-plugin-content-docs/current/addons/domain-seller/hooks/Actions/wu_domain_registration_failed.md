---
id: wu_domain_registration_failed
title: Aksi - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Dipicu sanggeus usaha daptar domain gagal.

## Parameter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pamayaran anu micu pendaptaran. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata pendaptaran kaasup status=failed jeung error_message. |
| $error_message | `string` | Talatah kasalahan anu gampang kaharti ku manusa ti registrar. |

### Ti saprak {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) dina garis 1250
