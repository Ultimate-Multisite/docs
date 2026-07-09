---
id: wu_return_url
title: පෙරහන - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# පෙරහන: wu_return_url {#filter-wureturnurl}

checkout ක්‍රියාවලිවලින් පසු භාවිත කරන ගෙවීම් ද්වාර ආපසු යැවීමේ URL එක වෙනස් කිරීමට සංවර්ධකයින්ට ඉඩ දෙයි.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $return_url | `string` | ක්‍රියාවලියෙන් පසු යළි යොමු කළ යුතු URL එක. |
| $gateway | `self` | ගෙවීම් ද්වාර instance එක. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite ගෙවීම් instance එක. |
| $cart | `\WP_Ultimo\Checkout\Cart` | වත්මන් Ultimate Multisite කරත්ත ඇණවුම. |

### සිට {#since}

- 2.0.20
### මූලාශ්‍රය {#source}

683 වන පේළියේ [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) තුළ නිර්වචනය කර ඇත


## ප්‍රතිදාන {#returns}
