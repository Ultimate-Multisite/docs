---
title: Closte-ত Sunrise Constant স্থাপন কৰা
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte मा Sunrise constant लाई true কৰা {#setting-the-sunrise-constant-to-true-on-closte}

কিছুমান হোষ্ট প্ৰোভাইডেৰে নিৰাপত্তা কাৰণত `wp-config.php` ফাইলটো লক কৰি ৰাখে। ইয়াৰ অৰ্থ হ'ল যে Ultimate Multisite-ৰ বাবে ডোমেইন ম্যাপিং আৰু আন বৈশিষ্ট্যসমূহ কাৰ্য্য কৰিবলৈ প্ৰয়োজনীয় constant সমূহ স্বয়ংক্রিয়ভাৱে ফাইলটোত সম্পাদনা কৰিব নোৱৰে। Closte এনে এটা হোষ্ট।

তাৰিপাল্টাৰ, Closte লেহৰা ধৰণৰ এটা উপায় দিয়ে যাতে আপুনি নিৰাপদভাৱে `wp-config.php` ত constant যোগ কৰিব পাৰে। আপুনি কেৱল তলত দিয়া পদক্ষেপসমূহ অনুসৰণ কৰিব লাগিব:

## Closte dashboard ত {#on-the-closte-dashboard}

প্ৰথমে, [আপোনাৰ Closte একাউণ্টত লগ ইন কৰক](https://app.closte.com/)। Sites মেনু আইটেমটোত ক্লিক কৰক, তাৰ পিছত আপুনি যিটো সাইটত কাম কৰি আছে, তাৰ Dashboard লিংকটোত ক্লিক কৰক:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

আপোনাৰ স্ক্ৰীণৰ বাঁহফালে কেইবাটাও নতুন মেনু আইটেম দেখা যাব। সেই মেনু ব্যৱহাৰ কৰি **Settings** পৃষ্ঠাখনলৈ যাওক:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

তাৰ পিছত, **Settings** ত, WP-Config ট্ৰি (tab) খন বিচাৰি উলিয়াব, আৰু তাৰ পিছত সেই ট্ৰিৰ "Additional wp-config.php content" ফিল্ডটো বিচাৰক:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite স্থাপন কৰাৰ প্ৰসংগত, আপুনি সেই ফিল্ডটোত sunrise constant যোগ কৰিব লাগিব। কেৱল এটা নতুন লাইন যোগ কৰক আৰু তলৰ লাইনটো পেষ্ট কৰক। তাৰ পিছত, **Save All** বাটনটোত ক্লিক কৰক।

define('SUNRISE', true);

ইমানহে, আপুনি সাজু। Ultimate Multisite install wizard লৈ ঘূৰি আহক আৰু প্ৰক্ৰিয়াক অব্যাহত ৰাখিবলৈ পৃষ্ঠাখন Refresh কৰক।
