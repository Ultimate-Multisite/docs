---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Developer-on ne network activation check ko bypass (skip) karne ki ijazat deta hai.

Yeh tab bahut kaam aata hai jab aap composer-based aur anya custom setups, jaise ki Bedrock, istemal kar rahe hon, jahan mu-plugins ko plugins ke taur par istemal karna aam baat hai.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Agar hamein check skip karna hai ya nahi, default value false hai. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) mein line 272 par define kiya gaya hai.


## Returns {#returns}
Agar aap check skip karna chahte hain to `true`, varna `false`.
