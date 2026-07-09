---
id: wu_handle_user_meta_fields
title: Ekintza - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Ekintza: wu_handle_user_meta_fields

Plugin garatzaileei erabiltzailearen meta datuak behar izanez gero modu desberdinetan gordetzeko aukera ematen die.

## Parametroak

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $meta_repository | `array` | Meta eremuen zerrenda, key =&gt; value egiturarekin. |
| $user | `\WP_User` | WordPress erabiltzaile objektua. |
| $customer | `\Customer` | Ultimate Multisite bezero objektua. |
| $checkout | `\Checkout` | Ordainketa-prozesuaren klasea. |

### Noiztik

- 2.0.4
### Iturburua

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) fitxategian definitua, 1244. lerroan.
