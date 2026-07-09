---
id: wu_domain_registration_failed
title: Аракет - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Аракет: wu_domain_registration_failed

Доменди каттоо аракети ишке ашпай калгандан кийин иштейт.

## Параметрлер

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Каттоону иштеткен төлөм. |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed жана error_message камтыган каттоо метаберилиштери. |
| $error_message | `string` | Каттоочудан келген адам окуй ала турган ката билдирүүсү. |

### Чыгарылган версиясы

- 2.0.0
### Булак

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) файлында 1250-сапта аныкталган.
