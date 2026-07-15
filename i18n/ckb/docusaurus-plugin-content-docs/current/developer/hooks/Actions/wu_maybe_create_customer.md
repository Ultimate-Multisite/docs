---
id: wu_maybe_create_customer
title: کردار - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

ڕێگە بە گەشەپێدەرانی plugin دەدات شتی زیادە ئەنجام بدەن کاتێک کڕیار زیاد دەکرێت.

لێرەدا شوێنی ئەوەیە کە hooks زیاد دەکەین بۆ زیادکردنی customer-&gt;user بۆ ماڵپەڕی سەرەکییش، بۆ نموونە.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $customer | `\Customer` | ئەو کڕیارەی کە ڕەنگە دروست کرابێت. |
| $checkout | `\Checkout` | پۆلی checkout ـی ئێستا. |

### لە وەشانەوە {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسە کراوە لە [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) لە هێڵی 1156
