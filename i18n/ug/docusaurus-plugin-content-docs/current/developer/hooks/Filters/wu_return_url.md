---
id: wu_return_url
title: سۈزگۈچ - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

ئىجادكارلارغا checkout جەريانلىرىدىن كېيىن ئىشلىتىلىدىغان دەرۋازا قايتىش URL نى ئۆزگەرتىشكە يول قويىدۇ.

## پارامېتىرلار

| نامى | تىپى | چۈشەندۈرۈشى |
|------|------|-------------|
| $return_url | `string` | جەرياندىن كېيىن يۆتكەيدىغان URL. |
| $gateway | `self` | دەرۋازا instanceى. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite ھەق تۆلەش instanceى. |
| $cart | `\WP_Ultimo\Checkout\Cart` | نۆۋەتتىكى Ultimate Multisite سېۋەت زاكازى. |

### باشلاپ

- 2.0.20
### مەنبە

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) دا 683-قۇردا ئېنىقلانغان


## قايتۇرىدۇ
