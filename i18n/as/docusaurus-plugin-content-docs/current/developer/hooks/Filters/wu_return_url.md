---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

ডেভেলপাৰসকলক চেকাউট প্ৰচেছৰ পিছত ব্যৱহৃত গেটৱেৰৰ ৰিটৰ্ণ URL সলনি কৰিবলৈ অনুমতি দিয়ে।

## পৰিটাৰী (Parameters) {#parameters}

| Name | Type | বৰ্ণনা (Description) |
|------|------|-------------|
| $return_url | `string` | প্ৰচেছৰ পিছত পুনৰ স্থানান্তৰিত কৰিবলগীয়া URL। |
| $gateway | `self` | গেটৱেৰৰ প্ৰতিলিপি (gateway instance)। |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite পেমেন্টৰ প্ৰতিলিপি। |
| $cart | `\WP_Ultimo\Checkout\Cart` | বৰ্তমানৰ Ultimate Multisite ক্ৰিচাৰ অৰ্ডাৰ। |

### তাৰ পৰা (Since) {#since}

- 2.0.20
### উৎস (Source) {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ত ৬୮৩ নং লাইনত সংজ্ঞায়িত কৰা হৈছে।


## ঘূৰি আহে (Returns) {#returns}
