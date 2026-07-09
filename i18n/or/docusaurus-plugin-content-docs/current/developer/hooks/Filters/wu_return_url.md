---
id: wu_return_url
title: ଫିଲ୍ଟର - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# ଫିଲ୍ଟର: wu_return_url

ଚେକ୍‌ଆଉଟ୍ ପ୍ରକ୍ରିୟା ପରେ ବ୍ୟବହୃତ ଗେଟୱେ ରିଟର୍ନ URL ବଦଳାଇବାକୁ ଡେଭେଲପର୍‌ମାନଙ୍କୁ ଅନୁମତି ଦିଏ।

## ପାରାମିଟର୍‌ଗୁଡ଼ିକ

| ନାମ | ପ୍ରକାର | ବିବରଣୀ |
|------|------|-------------|
| $return_url | `string` | ପ୍ରକ୍ରିୟା ପରେ ପୁନଃନିର୍ଦ୍ଦେଶ କରିବା ପାଇଁ URL। |
| $gateway | `self` | ଗେଟୱେ ଇନ୍‌ଷ୍ଟାନ୍ସ। |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite ପେମେଣ୍ଟ ଇନ୍‌ଷ୍ଟାନ୍ସ। |
| $cart | `\WP_Ultimo\Checkout\Cart` | ବର୍ତ୍ତମାନର Ultimate Multisite କାର୍ଟ ଅର୍ଡର୍। |

### ଆରମ୍ଭ

- 2.0.20
### ସ୍ରୋତ

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ଭିତରେ 683 ନମ୍ବର ଲାଇନ୍‌ରେ ପରିଭାଷିତ


## ଫେରତ ମୂଲ୍ୟ
