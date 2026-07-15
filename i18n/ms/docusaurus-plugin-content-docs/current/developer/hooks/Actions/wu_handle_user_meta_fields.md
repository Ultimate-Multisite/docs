---
id: wu_handle_user_meta_fields
title: Tindakan - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Membenarkan pembangun plugin untuk menyimpan data meta pengguna dengan cara yang berbeza jika mereka memerlukannya.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Senarai medan meta, distrukturkan dalam format kunci => nilai. |
| $user | `\WP_User` | Objek pengguna WordPress. |
| $customer | `\Customer` | Objek pelanggan Ultimate Multisite. |
| $checkout | `\Checkout` | Kelas checkout. |

### Since {#since}

- 2.0.4
### Source {#source}

Ditakrifkan dalam [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) pada baris 1244
