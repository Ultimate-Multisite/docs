---
id: wu_domain_registration_completed
title: Әрекет - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Домен сәтті тіркелгеннен кейін іске қосылады.

## Параметрлер

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Тіркеуді іске қосқан төлем. |
| $registration_data | `array&lt;string,mixed&gt;` | Тіркеу метадеректері (domain_name, provider_id, years, expiry_date, т.б.). |
| $result | `array&lt;string,mixed&gt;` | Registrar қайтарған өңделмеген нәтиже массиві. |

### Бастап

- 2.0.0
### Дереккөзі

1204-жолда [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ішінде анықталған.
