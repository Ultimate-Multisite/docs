---
id: wu_handle_user_meta_fields
title: Aksi - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Aksi: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Ngidinan pamekar plugin pikeun nyimpen data meta pamaké ku rupa-rupa cara lamun diperlukeun.

## Paraméter {#parameters}

| Ngaran | Tipe | Déskripsi |
|------|------|-------------|
| $meta_repository | `array` | Daptar widang meta, disusun key =&gt; value. |
| $user | `\WP_User` | Objék pamaké WordPress. |
| $customer | `\Customer` | Objék palanggan Ultimate Multisite. |
| $checkout | `\Checkout` | Kelas checkout. |

### Ti saprak {#since}

- 2.0.4
### Sumber {#source}

Ditetepkeun dina [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) dina garis 1244
