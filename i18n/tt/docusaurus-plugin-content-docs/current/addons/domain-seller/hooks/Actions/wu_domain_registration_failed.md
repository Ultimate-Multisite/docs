---
id: wu_domain_registration_failed
title: Гамәл - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Гамәл: wu_domain_registration_failed

Домен теркәү омтылышы уңышсыз тәмамланганнан соң эшли.

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Теркәүне башлап җибәргән түләү. |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed һәм error_message кертеп, теркәү метамәгълүматлары. |
| $error_message | `string` | Регистратордан кеше укый алырлык хата хәбәре. |

### Кайчаннан

- 2.0.0
### Чыганак

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) эчендә 1250 нче юлда билгеләнгән.
