---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

এই ফিল্টাৰটোৱে ডেভেলপাৰসকলক ডোমেইন আৰু পাথৰ জোড়া (pairs) সলনি কৰাৰ সুবিধা দিয়ে।

ই বিভিন্ন কামৰ বাবে ব্যৱহাৰিক হ'ব পাৰে, যেনে কোনো ধৰণৰ staging solution বা বেলেগ ছাৰ্ভাৰ ব্যৱস্থা কৰা।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | বৰ্তমানৰ object য'ত এটা domain আৰু path key থাকে। |
| $path_or_subdomain | `string` | ফাংচনলৈ দিয়া মূল path/subdomain। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## Returns {#returns}
এটা object য'ত এটা domain আৰু path key থাকে।
