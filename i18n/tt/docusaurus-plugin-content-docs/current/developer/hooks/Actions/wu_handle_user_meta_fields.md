---
id: wu_handle_user_meta_fields
title: Гамәл - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Гамәл: wu_handle_user_meta_fields

Плагин эшләүчеләргә, кирәк булса, кулланучы мета мәгълүматларын төрле ысуллар белән сакларга мөмкинлек бирә.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $meta_repository | `array` | key =&gt; value рәвешендә төзелгән мета кырлар исемлеге. |
| $user | `\WP_User` | WordPress кулланучы объекты. |
| $customer | `\Customer` | Ultimate Multisite клиент объекты. |
| $checkout | `\Checkout` | Сатып алуны рәсмиләштерү классы. |

### Версиядән башлап {#since}

- 2.0.4
### Чыганак {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) эчендә 1244 нче юлда билгеләнгән.
