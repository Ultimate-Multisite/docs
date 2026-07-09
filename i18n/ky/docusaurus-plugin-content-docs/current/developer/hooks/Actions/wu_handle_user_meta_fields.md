---
id: wu_handle_user_meta_fields
title: Аракет - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Аракет: wu_handle_user_meta_fields

Plugin иштеп чыгуучуларына зарыл болсо, колдонуучунун мета маалыматтарын ар кандай жолдор менен сактоого уруксат берет.

## Параметрлер

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $meta_repository | `array` | Мета талаалардын тизмеси, key =&gt; value түзүмүндө. |
| $user | `\WP_User` | WordPress колдонуучу объекти. |
| $customer | `\Customer` | Ultimate Multisite кардар объекти. |
| $checkout | `\Checkout` | Төлөмдү аяктоо классы. |

### Чыккан версиясы

- 2.0.4
### Булак

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ичинде 1244-сапта аныкталган.
