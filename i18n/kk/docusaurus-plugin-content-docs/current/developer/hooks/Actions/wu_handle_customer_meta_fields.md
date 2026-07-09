---
id: wu_handle_customer_meta_fields
title: Әрекет - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Плагин әзірлеушілеріне қажет болса, мета деректерді әртүрлі тәсілдермен сақтауға мүмкіндік береді.

## Параметрлер

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $meta_repository | `array` | Мета өрістерінің тізімі, key =&gt; value құрылымында. |
| $customer | `\Customer` | Ultimate Multisite тұтынушы нысаны. |
| $checkout | `\Checkout` | Рәсімдеу сыныбы. |

### Бастап

- 2.0.0
### Дереккөзі

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ішінде, 1211-жолда анықталған.
