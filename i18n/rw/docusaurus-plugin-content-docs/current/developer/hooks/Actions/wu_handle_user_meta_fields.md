---
id: wu_handle_user_meta_fields
title: Igikorwa - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Igikorwa: wu_handle_user_meta_fields

Emerera abategura plugin kubika amakuru ya meta y'umukoresha mu buryo butandukanye niba babikeneye.

## Ibipimo

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $meta_repository | `array` | Urutonde rw'imirima ya meta, rutunganijwe nka key =&gt; value. |
| $user | `\WP_User` | Ikintu cy'umukoresha wa WordPress. |
| $customer | `\Customer` | Ikintu cy'umukiriya wa Ultimate Multisite. |
| $checkout | `\Checkout` | Icyiciro cya checkout. |

### Kuva

- 2.0.4
### Inkomoko

Byasobanuwe muri [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ku murongo 1244
