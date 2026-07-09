---
id: wu_apply_signup_fee
title: Filter - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee {#filter-wuapplysignupfee}

এই ফিল্টাৰে নিৰ্ধাৰণ কৰে যে সাইনআপ ফি (signup fee) প্ৰযোজ্য হ'ব নে নহ'ব।

## পাৰামিটাৰসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $add_signup_fee | `bool` | সাইনআপ ফি যোগ কৰিব নে নহ'ব। |
| $product | `object` | মেম্বৰশ্বিপ লেভেল অবজেক্ট। |
| $this | `\WP_Ultimo\Checkout\Cart` | ৰেজিষ্ট্ৰেচন অবজেক্ট। |

### তাৰ পৰা {#since}

- 3.1
### উৎস {#source}

এটা সংজ্ঞায়িত কৰা হৈছে [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) ত ১৭৬৯ নং লাইনত।
