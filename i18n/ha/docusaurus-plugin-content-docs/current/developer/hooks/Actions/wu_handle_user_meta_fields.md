---
id: wu_handle_user_meta_fields
title: Aiki - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Aiki: wu_handle_user_meta_fields

Ba wa masu haɓaka plugin damar adana bayanan user meta ta hanyoyi daban-daban idan suna buƙata.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Jerin meta fields, an tsara su da key =&gt; value. |
| $user | `\WP_User` | Abun WordPress user. |
| $customer | `\Customer` | Abun Ultimate Multisite abokin ciniki. |
| $checkout | `\Checkout` | Checkout class. |

### Tun daga

- 2.0.4
### Tushen

An bayyana a cikin [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) a layi 1244
