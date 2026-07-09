---
id: wu_apply_plan_limits
title: ফিল্টাৰ - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

প্লাগইন ডেভেলপাৰসকলক সীমা (limitations) বাইপাস কৰিবলৈ অনুমতি দিয়ে।

আপুনি এই ফিল্টাৰটো ব্যৱহাৰ কৰি কোনো সীমা আৰম্ভ হোৱাৰ আগতে যিকোনো কোড (arbitrary code) চলিবলৈ দিব পাৰে। যদি ফিল্টাৰে কোনো 'truthy' মান (value) ঘূৰাই দিয়ে, তেন্তে প্ৰক্ৰিয়াটো আগুৱাই যাব; যদি ই কোনো 'falsy' মান ঘূৰাই দিয়ে, তেন্তে কোডটোৱে নিজকে ৰখা দিয়ে আৰু তলৰ কোনো হুক (hook) চলিব নোৱাৰিব।

### Since {#since}

- 1.7.0
### Source {#source}

- [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) ফাইলৰ ৫২ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে
- [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) ফাইলৰ ৯৮ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে
## Returns {#returns}
