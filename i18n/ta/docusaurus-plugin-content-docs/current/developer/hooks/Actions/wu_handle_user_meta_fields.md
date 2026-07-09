---
id: wu_handle_user_meta_fields
title: செயல்பாடு - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

plugin உருவாக்குநர்கள் தேவைப்பட்டால் பயனர் மெட்டா தரவை வெவ்வேறு வழிகளில் சேமிக்க இது அனுமதிக்கிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $meta_repository | `array` | மெட்டா ஃபீல்டுகளின் பட்டியல், இது key => value என்ற அமைப்பில் கட்டமைக்கப்பட்டுள்ளது. |
| $user | `\WP_User` | WordPress பயனர் பொருள் (object). |
| $customer | `\Customer` | Ultimate Multisite வாடிக்கையாளர் பொருள் (object). |
| $checkout | `\Checkout` | செக்அவுட் வகுப்பு (class). |

### எப்போது இருந்து (Since) {#since}

- 2.0.4
### மூலம் (Source) {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) என்ற கோப்பில் 1244 வரியில் வரையறுக்கப்பட்டுள்ளது.
