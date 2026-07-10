---
id: wu_handle_user_meta_fields
title: Aðgerð - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Aðgerð: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Leyfðu plugin-hönnuðum að vista lýsigögn notenda á mismunandi hátt ef þeir þurfa þess.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $meta_repository | `array` | Listinn yfir lýsigagnareiti, uppbyggður sem lykill =&gt; gildi. |
| $user | `\WP_User` | WordPress notandahluturinn. |
| $customer | `\Customer` | Ultimate Multisite viðskiptavinahluturinn. |
| $checkout | `\Checkout` | Afgreiðsluklasinn. |

### Frá útgáfu {#since}

- 2.0.4
### Uppruni {#source}

Skilgreint í [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) á línu 1244
