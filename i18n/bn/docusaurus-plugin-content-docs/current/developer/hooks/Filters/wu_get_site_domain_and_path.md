---
id: wu_get_site_domain_and_path
title: ফিল্টার - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

ডেভেলপারদের ডোমেইন/পাথ জোড়া পরিবর্তন করার সুযোগ দেয়।

এটি অনেক কিছুর জন্য কাজে আসতে পারে, যেমন কোনো ধরনের স্টেজিং সলিউশন (staging solution) বা ভিন্ন সার্ভার সেটআপ করা।

## প্যারামিটারসমূহ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | ডোমেইন এবং পাথ কী ধারণকারী বর্তমান অবজেক্টটি। |
| $path_or_subdomain | `string` | ফাংশনে পাস করা আসল পাথ/সাবডোমেইন। |

### শুরু (Since) {#since}

- 2.0.0
### উৎস (Source) {#source}

[inc/functions/site.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) এ লাইন ২৩৫-এ সংজ্ঞায়িত করা হয়েছে।


## রিটার্ন করে (Returns) {#returns}
ডোমেইন এবং পাথ কী ধারণকারী একটি অবজেক্ট।
