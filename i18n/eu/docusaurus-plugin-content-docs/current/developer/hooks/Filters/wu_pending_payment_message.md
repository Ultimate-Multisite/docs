---
id: wu_pending_payment_message
title: Iragazkia - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Iragazkia: wu_pending_payment_message

Erabiltzaileari zain dauden ordainketei buruzko mezua aldatzeko aukera ematen dio.

## Parametroak

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $message | `string` | Inprimatu beharreko mezua. |
| $customer | `\WP_Ultimo\Models\Customer` | Uneko bezeroa. |
| $pending_payments | `array` | Zain dauden ordainketen zerrenda. |

### Noiztik

- 2.0.19
### Iturburua

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) fitxategian definitua, 244. lerroan.
