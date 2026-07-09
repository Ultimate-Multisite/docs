---
id: wu_domain_renewal_completed
title: Гамәл - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Гамәл: wu_domain_renewal_completed

Домен уңышлы яңартылганнан соң эшли.

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Яңартуны башлап җибәргән түләү. |
| $renewal_data | `array&lt;string,mixed&gt;` | Яңарту метамәгълүматлары (domain_name, years, customer_id һ.б.). |
| $result | `array&lt;string,mixed&gt;` | Регистратор кайтарган, яңа expiry_date да кергән чиста нәтиҗә массивы. |

### Кайсы версиядән

- 2.0.0
### Чыганак

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) файлында 594 нче юлда билгеләнгән.
