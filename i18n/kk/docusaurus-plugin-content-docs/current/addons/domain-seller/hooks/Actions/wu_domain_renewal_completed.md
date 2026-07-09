---
id: wu_domain_renewal_completed
title: Әрекет - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Әрекет: wu_domain_renewal_completed

Домен сәтті ұзартылғаннан кейін іске қосылады.

## Параметрлер

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ұзартуды іске қосқан төлем. |
| $renewal_data | `array&lt;string,mixed&gt;` | Ұзарту метадеректері (domain_name, years, customer_id, т.б.). |
| $result | `array&lt;string,mixed&gt;` | Тіркеуші қайтарған, жаңа expiry_date мәнін қамтитын өңделмеген нәтиже массиві. |

### Бастап

- 2.0.0
### Дереккөз

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) файлында 594-жолда анықталған.
