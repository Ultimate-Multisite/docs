---
id: wu_return_url
title: வடிகட்டி - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

செக்அவுட் செயல்முறைகள் முடிந்த பிறகு பயன்படுத்தப்படும் கேட்வே திரும்பும் URL-ஐ (gateway return URL) மாற்ற டெவலப்பர்களுக்கு இது அனுமதிக்கிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | செயல்முறை முடிந்த பிறகு திருப்பி விட வேண்டிய URL. |
| $gateway | `self` | கேட்வே நிகழ்வு (gateway instance). |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite payment நிகழ்வு. |
| $cart | `\WP_Ultimo\Checkout\Cart` | தற்போதைய Ultimate Multisite கார்ட் ஆர்டர். |

### Since {#since}

- 2.0.20
### Source {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) என்ற கோப்பில், 683 வரியில் வரையறுக்கப்பட்டுள்ளது.


## Returns {#returns}
(இந்த ஃபில்டர் எந்த மதிப்பையும் திருப்பி அனுப்பாது.)
