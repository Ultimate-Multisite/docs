---
title: Closte-এ Sunrise Constant সেট করা
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-এ Sunrise constant true সেট করা

কিছু হোস্ট প্রোভাইডার নিরাপত্তার কারণে wp-config.php ফাইলটি লক করে রাখে। এর মানে হলো Ultimate Multisite স্বয়ংক্রিয়ভাবে এই ফাইলটি এডিট করতে পারে না, যেটা domain mapping এবং অন্যান্য ফিচার কাজ করানোর জন্য প্রয়োজনীয় constants যোগ করতে দরকার হয়। Closte এমনই একটি হোস্ট।

তবে Closte একটি নিরাপদ উপায়ে wp-config.php-এ constants যোগ করার সুবিধা দেয়। শুধু নিচের ধাপগুলো অনুসরণ করুন:

## Closte dashboard-এ

প্রথমে, [আপনার Closte অ্যাকাউন্টে লগইন করুন](https://app.closte.com/), Sites মেনুতে ক্লিক করুন, তারপর আপনি যে সাইটে কাজ করছেন সেটির Dashboard লিংকে ক্লিক করুন:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

স্ক্রিনের বাম পাশে কিছু নতুন মেনু আইটেম দেখতে পাবেন। সেই মেনু থেকে **Settings** পেজে যান:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

এরপর **Settings** পেজে WP-Config ট্যাব খুঁজে বের করুন, এবং সেই ট্যাবে "Additional wp-config.php content" ফিল্ডটি খুঁজুন:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite ইনস্টল করার ক্ষেত্রে, আপনাকে সেই ফিল্ডে sunrise constant যোগ করতে হবে। শুধু একটি নতুন লাইনে নিচের কোডটি পেস্ট করুন। তারপর **Save All** বাটনে ক্লিক করুন।

define('SUNRISE', true);

ব্যস, এটুকুই। এখন Ultimate Multisite install wizard-এ ফিরে যান এবং পেজ রিফ্রেশ করে প্রক্রিয়াটি চালিয়ে যান।
