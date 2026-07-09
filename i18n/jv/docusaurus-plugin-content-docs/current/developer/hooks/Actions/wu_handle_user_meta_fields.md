---
id: wu_handle_user_meta_fields
title: Aksi - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Ngidini pangembang plugin nyimpen data meta pangguna kanthi cara sing beda yen dibutuhake.

## Paramèter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Dhaptar field meta, disusun key =&gt; value. |
| $user | `\WP_User` | Objek pangguna WordPress. |
| $customer | `\Customer` | Objek pelanggan Ultimate Multisite. |
| $checkout | `\Checkout` | Kelas checkout. |

### Wiwit {#since}

- 2.0.4
### Sumber {#source}

Ditetepake ing [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ing baris 1244
