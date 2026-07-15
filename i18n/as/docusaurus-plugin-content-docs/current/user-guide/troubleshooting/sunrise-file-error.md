---
title: Sunrise ফাইল ত্রুটি
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# sunrise ফাইল ইনস্টল কৰাত ভুল

`sunrise.php` ফাইলটো এটা বিশেষ ফাইল, যিটো WordPress নিজে আৰম্ভ হ’ব (bootstraps) বুলি কঁকালি। WordPress-ক এই `sunrise.php` ফাইলটো চিনাক্ত কৰিবলৈ, ইয়াক **wp-content ফোল্ডাৰ**ৰ ভিতৰত থকাটো প্ৰয়োজনীয়।

যেতিয়া আপুনি Ultimate Multisite অ্যাক্টিভেট কৰে আৰু স্ক্রিনশ্বটত দেখুওৱা ধৰণৰ setup wizard-ৰ মাজেৰে যায়, তেতিয়া Ultimate Multisite লে আমাৰ `sunrise.php` ফাইলটো `wp-content` ফোল্ডাৰলৈ কপি কৰিবলৈ চেষ্টা কৰে।

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

বেছিভাগ সময়তে, আমি ফাইলটো সফলভাৱে কপি কৰিব পাৰোঁ আৰু সকলো ঠিক থাকে। কিন্তু, যদি কিবা এটা সঠিকভাৱে সেট নহ'ল (উদাহৰণস্বৰূপে, ফোল্ডাৰ অনুমতি বা folder permissions), তেন্তে এনে এটা পৰিস্থিতিৰ সন্মুখীন হ'ব পাৰে, য'ত Ultimate Multisite ফাইলটো কপি কৰিব নোৱारे।

যদি আপুনি Ultimo-ৰ ভুল (error) মেছেজটো পঢ়ে, তেন্তে আপুনি দেখিব যে ঠিক এইটোৱেই হৈছে: **Sunrise copy failed**।

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

ইয়া সমস্যাটো সমাধান কৰিবলৈ, আপুনি কেৱল `wp-ultimo` প্লাগইন ফোল্ডাৰৰ ভিতৰত থকা `sunrise.php` ফাইলটো কপি কৰি আপোনাৰ `wp-content` ফোল্ডাৰত পেষ্ট কৰিব পাৰে। ইমান কৰাৰ পিছত, wizard পৃষ্ঠাটো reload কৰক আৰু চেকিংবোৰ পাৰ হৈ যোৱা উচিত।

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> যিকোনো ক্ষেত্ৰতে, ভৱিষ্যতে সমস্যা এৰাবলৈ আপোনাৰ ফোল্ডাৰ অনুমতি (folder permissions)ৰ এটা সাধাৰণ পৰীক্ষা কৰাটো বাঞ্ছনীয় (এইটো কেৱল Ultimate Multisite লগত নহয়, আন প্লাগইন আৰু থীমৰ লগতও)।

WordPress-ৰ অংশ **Health Check tool** (আপুনি ইয়াক আপোনাৰ মূল সাইটৰ **admin panel > Tools > Health Check** बाट অ্যাক্সেছ কৰিব পাৰে) ব্যৱস্থা কৰি দিয়ে যে আপোনাৰ ফোল্ডাৰ অনুমতিবোৰ এনে কোনো মানত সেট হৈ আছে নেকি, যাৰ বাবে WordPress-লৈ সমস্যা হ'ব পাৰে।

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
