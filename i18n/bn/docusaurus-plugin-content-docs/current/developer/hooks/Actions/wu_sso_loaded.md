---
id: wu_sso_loaded
title: অ্যাকশন - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

প্লাগইন ডেভেলপারদের প্রয়োজন হলে অতিরিক্ত হুক যোগ করার সুযোগ দেয়।

যেহেতু SSO (Single Sign-On) একটি প্রক্রিয়া যা `sunrise`-এ চলে, তাই এটি `init` পর্যন্ত বিলম্বিত করা প্রয়োজন।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | SSO ক্লাস। |

### Since

- 2.0.0
### Source

লাইন ২৮৫-এ [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285)-এ সংজ্ঞায়িত।
