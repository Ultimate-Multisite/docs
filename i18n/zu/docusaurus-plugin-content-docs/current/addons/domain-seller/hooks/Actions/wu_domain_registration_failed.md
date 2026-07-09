---
id: wu_domain_registration_failed
title: Isenzo - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Isenzo: wu_domain_registration_failed

Senzeka ngemva kokuthi umzamo wokubhalisa isizinda uhlulekile.

## Amapharamitha

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Inkokhelo eqalise ukubhalisa. |
| $registration_data | `array&lt;string,mixed&gt;` | I-metadata yokubhalisa ehlanganisa status=failed kanye ne-error_message. |
| $error_message | `string` | Umlayezo wephutha ofundeka umuntu ovela kumregistrar. |

### Kusukela

- 2.0.0
### Umthombo

Kuchazwe ku-[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) emgqeni 1250
