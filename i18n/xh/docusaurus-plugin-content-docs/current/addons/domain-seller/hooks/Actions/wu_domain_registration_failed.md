---
id: wu_domain_registration_failed
title: Isenzo - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Isenzo: wu_domain_registration_failed

Sivuswa emva kokuba umzamo wokubhalisa idomeyini usilele.

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazo |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Intlawulo ebangele ubhaliso. |
| $registration_data | `array&lt;string,mixed&gt;` | Imethadatha yobhaliso equka status=failed kunye ne-error_message. |
| $error_message | `string` | Umyalezo wempazamo ofundeka lula ebantwini ovela kumregistrar. |

### Ukususela {#since}

- 2.0.0
### Umthombo {#source}

Ichazwe kwi [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) kumgca 1250
