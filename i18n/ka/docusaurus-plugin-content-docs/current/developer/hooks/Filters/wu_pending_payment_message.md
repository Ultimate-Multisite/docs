---
id: wu_pending_payment_message
title: ფილტრი - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# ფილტრი: wu_pending_payment_message

საშუალება მიეცით მომხმარებელს, შეცვალოს შეტყობინება მომლოდინე გადახდების შესახებ.

## პარამეტრები

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | დასაბეჭდი შეტყობინება. |
| $customer | `\WP_Ultimo\Models\Customer` | მიმდინარე მომხმარებელი. |
| $pending_payments | `array` | სია მომლოდინე გადახდებით. |

### ვერსიიდან

- 2.0.19
### წყარო

განსაზღვრულია [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244)-ში, 244-ე ხაზზე
