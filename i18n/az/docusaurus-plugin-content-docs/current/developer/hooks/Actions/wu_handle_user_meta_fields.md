---
id: wu_handle_user_meta_fields
title: Hərəkət - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Eklenti (plugin) geliştiricilərin istifadəçi meta məlumatlarını ehtiyac duyarsa, müxtəlif yollarla saxlamağa imkan verir.

## Parametrlər {#parameters}

| Ad | Növ | Təsvir |
|------|------|-------------|
| $meta_repository | `array` | Meta sahələrinin siyahısı, açar => dəyər strukturu ilə təşkil edilmişdir. |
| $user | `\WP_User` | WordPress istifadəçi obyektidir. |
| $customer | `\Customer` | Ultimate Multisite müştəri obyektidir. |
| $checkout | `\Checkout` | Ödəniş (checkout) sinifidir. |

### Nə vaxtdan {#since}

- 2.0.4
### Mənbə {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) faylında 1244-cü sətirdə təyin edilmişdir
