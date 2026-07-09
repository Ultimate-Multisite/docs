---
id: wu_domain_registration_failed
title: Δράση - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Εκτελείται αφού αποτύχει μια προσπάθεια καταχώρισης domain.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Η πληρωμή που προκάλεσε την καταχώριση. |
| $registration_data | `array&lt;string,mixed&gt;` | Μεταδεδομένα καταχώρισης που περιλαμβάνουν status=failed και error_message. |
| $error_message | `string` | Το μήνυμα λάθρου σε αναγνώσιμη μορφή από τον καταχωρητή (registrar). |

### Since {#since}

- 2.0.0
### Source {#source}

Ορίζεται στο [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) στην γραμμή 1250
