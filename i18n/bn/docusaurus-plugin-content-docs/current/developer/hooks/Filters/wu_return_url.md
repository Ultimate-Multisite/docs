---
id: wu_return_url
title: ফিল্টার - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

ডেভেলপমেন্ট করার সময় ডেভেলপারদের চেকআউট প্রক্রিয়া শেষ হওয়ার পরে ব্যবহৃত গেটওয়ে রিটার্ন URL পরিবর্তন করার সুযোগ দেয়।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | প্রক্রিয়া শেষে রিডাইরেক্ট করার জন্য URL। |
| $gateway | `self` | গেটওয়ে ইনস্ট্যান্স। |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite পেমেন্ট ইনস্ট্যান্স। |
| $cart | `\WP_Ultimo\Checkout\Cart` | বর্তমান Ultimate Multisite কার্ট অর্ডার। |

### Since {#since}

- 2.0.20
### Source {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683)-এ লাইন ৬৮৩-এ সংজ্ঞায়িত করা হয়েছে।


## Returns {#returns}
