---
id: wu_pending_payment_message
title: පෙරහන - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# පෙරහන: wu_pending_payment_message

අපේක්ෂිත ගෙවීම් පිළිබඳ පණිවිඩය වෙනස් කිරීමට පරිශීලකයාට ඉඩ දෙයි.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $message | `string` | මුද්‍රණය කළ යුතු පණිවිඩය. |
| $customer | `\WP_Ultimo\Models\Customer` | වත්මන් පාරිභෝගිකයා. |
| $pending_payments | `array` | අපේක්ෂිත ගෙවීම් සහිත ලැයිස්තුවක්. |

### සිට {#since}

- 2.0.19
### මූලාශ්‍රය {#source}

244 වන පේළියේ [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) තුළ අර්ථ දක්වා ඇත.
