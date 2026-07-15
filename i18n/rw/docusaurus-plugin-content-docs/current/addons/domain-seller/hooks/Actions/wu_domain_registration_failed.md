---
id: wu_domain_registration_failed
title: Igikorwa - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Igikorwa: wu_domain_registration_failed

Gitangira nyuma y’uko igerageza ryo kwandikisha domain rinaniwe.

## Ibigenderwaho {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ubwishyu bwateje iyandikisha. |
| $registration_data | `array&lt;string,mixed&gt;` | Amakuru ajyanye n’iyandikisha arimo status=failed na error_message. |
| $error_message | `string` | Ubutumwa bw’ikosa busomwa n’umuntu buturutse kuri registrar. |

### Kuva {#since}

- 2.0.0
### Inkomoko {#source}

Byasobanuwe muri [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ku murongo wa 1250
