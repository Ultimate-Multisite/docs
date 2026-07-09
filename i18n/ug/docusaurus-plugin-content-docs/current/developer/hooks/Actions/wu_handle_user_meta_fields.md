---
id: wu_handle_user_meta_fields
title: مەشغۇلات - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# ھەرىكەت: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

plugin ئاچقۇچىلار ئېھتىياجى بولسا، ئىشلەتكۈچى meta سانلىق مەلۇماتلىرىنى ئوخشىمىغان ئۇسۇللاردا ساقلىيالايدۇ.

## پارامېتىرلار {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | meta بۆلەكلىرىنىڭ تىزىمى، key =&gt; value قۇرۇلمىسىدا. |
| $user | `\WP_User` | WordPress ئىشلەتكۈچى ئوبيېكتى. |
| $customer | `\Customer` | Ultimate Multisite خېرىدار ئوبيېكتى. |
| $checkout | `\Checkout` | checkout سىنىپى. |

### دىن باشلاپ {#since}

- 2.0.4
### مەنبە {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) دا، 1244-قۇردا ئېنىقلانغان.
