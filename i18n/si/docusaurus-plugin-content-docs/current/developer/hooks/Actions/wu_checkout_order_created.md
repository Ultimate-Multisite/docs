---
id: wu_checkout_order_created
title: ක්‍රියාව - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

ගෙවීම් අවසන් කිරීමේ ඇණවුම සම්පූර්ණයෙන් සකස් වූ පසු ක්‍රියාත්මක වේ.

ස්වාධීන බිල්පත් චක්‍ර ඇති නිෂ්පාදන සඳහා ද්විතීයික සාමාජිකත්ව නිර්මාණය කිරීමට Addons මෙය භාවිත කළ හැක.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | කරත්තය/ඇණවුම් object එක. |
| $customer | `\WP_Ultimo\Models\Customer` | ගනුදෙනුකරු. |
| $membership | `\WP_Ultimo\Models\Membership` | ප්‍රාථමික සාමාජිකත්වය. |
| $payment | `\WP_Ultimo\Models\Payment` | ගෙවීම. |

### සිට {#since}

- 2.5.0
### මූලාශ්‍රය {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) තුළ 891 පේළියේ අර්ථ දක්වා ඇත.
