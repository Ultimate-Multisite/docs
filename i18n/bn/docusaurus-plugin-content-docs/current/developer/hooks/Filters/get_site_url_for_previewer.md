---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

প্লাগইন ডেভেলপারদের প্রিভিউয়ারে ব্যবহৃত URL ফিল্টার করার সুযোগ দেয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | বিবরণ |
|------|------|-------------|
| $domain | `string` | বর্তমানে ব্যবহৃত ডিফল্ট ডোমেইন। এটি বিভিন্ন পরিবর্তন বা ম্যানিপুলেশনের জন্য কাজে লাগে। |
| $domain_options | `array` | Ultimate Multisite Settings -> Network Settings -> Domain Options-এ প্রবেশ করানো সমস্ত ডোমেইন অপশনগুলির তালিকা। |

### শুরু {#since}

- 1.7.2
### উৎস {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) এ সংজ্ঞায়িত করা হয়েছে, লাইন ৮১২-এ।

## রিটার্ন করে {#returns}
ব্যবহার করার জন্য নতুন ডোমেইন।
