---
id: wu_handle_user_meta_fields
title: Әрекет - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Әрекет: wu_handle_user_meta_fields

Plugin әзірлеушілеріне қажет болса, пайдаланушы meta деректерін әртүрлі тәсілдермен сақтауға мүмкіндік береді.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $meta_repository | `array` | Meta өрістерінің тізімі, key =&gt; value құрылымында. |
| $user | `\WP_User` | WordPress пайдаланушы нысаны. |
| $customer | `\Customer` | Ultimate Multisite тұтынушы нысаны. |
| $checkout | `\Checkout` | Checkout класы. |

### Бастап {#since}

- 2.0.4
### Дереккөз {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) файлында 1244-жолда анықталған.
