---
id: wu_domain_registration_failed
title: Akce - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Akce: wu_domain_registration_failed

Spustí se, když selže pokus o registraci domény.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Úhrada, která spustila registraci. |
| $registration_data | `array&lt;string,mixed&gt;` | Metainformace o registraci, včetně stavu `failed` a zprávy chyby `error_message`. |
| $error_message | `string` | Lze číst pro člověka zpráva chyby od registračního poskytovatele. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) na řádku 1250
