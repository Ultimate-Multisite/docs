---
id: wu_magic_link_enforce_ip
title: ফিল্টার - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

আইপি অ্যাড্রেস যাচাইকরণบังคับ করা হবে কিনা তা ফিল্টার করে।

যদি আপনি এটিকে `false` সেট করেন, তাহলে টোকেনগুলি বিভিন্ন নেটওয়ার্ক থেকে কাজ করতে পারবে। এতে নিরাপত্তার কিছুটা ক্ষতি হবে, তবে ব্যবহারযোগ্যতা অনেক বেড়ে যাবে (যেমন, মোবাইল ব্যবহারকারীরা যখন নেটওয়ার্ক পরিবর্তন করেন)।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | আইপি অ্যাড্রেস মিল কিনা তাบังคับ করা হবে কিনা। |

### Since

- 2.0.0
### Source

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422)-এ লাইন ৪২২-এ সংজ্ঞায়িত।
