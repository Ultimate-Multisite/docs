---
id: wu_domain_registration_failed
title: Tumindak - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Tumindak: wu_domain_registration_failed

Kepicu sawisé upaya ndhaptar domain gagal.

## Paramèter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pambayaran sing micu pendaftaran. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata pendaftaran kalebu status=failed lan error_message. |
| $error_message | `string` | Pesen kesalahan sing bisa diwaca manungsa saka registrar. |

### Wiwit {#since}

- 2.0.0
### Sumber {#source}

Ditetepaké ing [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ing baris 1250
