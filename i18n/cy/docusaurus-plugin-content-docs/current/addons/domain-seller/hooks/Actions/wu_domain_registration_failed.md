---
id: wu_domain_registration_failed
title: Gweithred - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Gweithred: wu_domain_registration_failed

Yn tanio ar ôl i ymgais i gofrestru parth fethu.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Y taliad a sbardunodd y cofrestru. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata cofrestru gan gynnwys status=failed ac error_message. |
| $error_message | `string` | Neges gwall ddarllenadwy gan bobl gan y cofrestrydd. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Diffinnir yn [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ar linell 1250
