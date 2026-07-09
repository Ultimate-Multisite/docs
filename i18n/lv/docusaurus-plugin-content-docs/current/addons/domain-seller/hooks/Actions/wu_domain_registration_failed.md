---
id: wu_domain_registration_failed
title: Darbība - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Darbība: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Tiek palaists pēc tam, kad domēna reģistrācijas mēģinājums neizdodas.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksājums, kas izraisīja reģistrāciju. |
| $registration_data | `array&lt;string,mixed&gt;` | Reģistrācijas metadati, tostarp status=failed un error_message. |
| $error_message | `string` | Cilvēkam saprotams kļūdas ziņojums no reģistrētāja. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) 1250. rindā
