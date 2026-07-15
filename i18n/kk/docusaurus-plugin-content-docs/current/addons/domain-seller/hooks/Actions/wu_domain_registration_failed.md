---
id: wu_domain_registration_failed
title: Әрекет - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Әрекет: wu_domain_registration_failed

Доменді тіркеу әрекеті сәтсіз аяқталғаннан кейін іске қосылады.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Тіркеуді іске қосқан төлем. |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed және error_message қамтитын тіркеу метадеректері. |
| $error_message | `string` | Тіркеушіден келген адамға түсінікті қате хабары. |

### Бастап {#since}

- 2.0.0
### Дереккөз {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ішінде 1250-жолда анықталған.
