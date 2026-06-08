---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

செக்அவுட் ஆர்டர் முழுமையாக உருவாக்கப்பட்ட பிறகு இது செயல்படும்.

தனித்தனி பில்லிங் சுழற்சிகளைக் கொண்ட தயாரிப்புகளுக்கு இரண்டாம் நிலை உறுப்பினர் சேர்க்கைகளை உருவாக்க Addons இதை பயன்படுத்தலாம்.

## அளவுருக்கள்

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | கார்ட்/ஆர்டர் ஆப்ஜெக்ட். |
| $customer | `\WP_Ultimo\Models\Customer` | வாடிக்கையாளர். |
| $membership | `\WP_Ultimo\Models\Membership` | முதன்மை உறுப்பினர் சேர்க்கை. |
| $payment | `\WP_Ultimo\Models\Payment` | பணம் செலுத்துதல். |

### எப்போது இருந்து

- 2.5.0
### மூலம்

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
