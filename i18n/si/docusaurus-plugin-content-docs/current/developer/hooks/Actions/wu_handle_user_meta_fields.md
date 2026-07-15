---
id: wu_handle_user_meta_fields
title: ක්‍රියාව - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# ක්‍රියාව: wu_handle_user_meta_fields

plugin සංවර්ධකයන්ට අවශ්‍ය නම් පරිශීලක meta දත්ත වෙනස් ආකාරවලින් සුරැකීමට ඉඩ දෙයි.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $meta_repository | `array` | meta fields ලැයිස්තුව, key =&gt; value ව්‍යුහයෙන්. |
| $user | `\WP_User` | WordPress පරිශීලක object එක. |
| $customer | `\Customer` | Ultimate Multisite පාරිභෝගික object එක. |
| $checkout | `\Checkout` | checkout class එක. |

### සිට {#since}

- 2.0.4
### මූලාශ්‍රය {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) තුළ 1244 පේළියේ අර්ථ දක්වා ඇත.
