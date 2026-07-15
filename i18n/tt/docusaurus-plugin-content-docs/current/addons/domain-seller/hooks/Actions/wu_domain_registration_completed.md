---
id: wu_domain_registration_completed
title: Гамәл - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Гамәл: wu_domain_registration_completed

Домен уңышлы теркәлгәннән соң эшли.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Теркәлүне башлап җибәргән түләү. |
| $registration_data | `array&lt;string,mixed&gt;` | Теркәлү метамәгълүматлары (domain_name, provider_id, years, expiry_date һ.б.). |
| $result | `array&lt;string,mixed&gt;` | Теркәтүче кайтарган чимал нәтиҗә массивы. |

### Кайчаннан бирле {#since}

- 2.0.0
### Чыганак {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) эчендә 1204 нче юлда билгеләнгән
