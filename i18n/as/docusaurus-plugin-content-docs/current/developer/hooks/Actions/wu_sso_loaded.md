---
id: wu_sso_loaded
title: Action - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

প্লাগইন ডেভেলপাৰসকলে যদি প্ৰয়োজন হয়, তেন্তে ইয়াত আৰু কিছুমান হুক যোগ কৰিব পাৰে।

এইটো `init` লৈকে স্থগিত কৰিব লাগিব, কাৰণ SSO এটা এনে কিছুমান যি 'sunrise' সময়ত কাৰ্য্য কৰে।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | SSO ক্লাছটো। |

### Since

- 2.0.0
### Source

[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) ত লাইন ২৮৫ নম্বৰত সংজ্ঞায়িত কৰা হৈছে
