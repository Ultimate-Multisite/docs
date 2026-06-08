---
id: wu_domain_registration_failed
title: Kitendo - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Inafanya kazi baada ya jaribio la usajili wa neno la eneo (domain) kushindwa.

## Vigezo

| Jina | Aina | Maelezo |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Malipo yaliyoamua usajili huo. |
| $registration_data | `array<string,mixed>` | Data za meta za usajili zikiwemo `status=failed` na `error_message`. |
| $error_message | `string` | Ujumbe wa makosa ambao binadamu anaweza kusoma kutoka kwa shirika la usajili (registrar). |

### Tangu

- 2.0.0
### Chanzo

Imefafanuliwa katika [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) kwenye mstari wa 1250
