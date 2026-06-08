---
title: Site Templates-ত স্বয়ংক্রিয় Search and Replace
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Site Templates-ত স্বয়ংক্রিয় Search and Replace (v2)

_**এই টিউটোরিয়ালটোৰ বাবে WP UItimo version 2.x প্ৰয়োজন।**_

Ultimate Multisite-ৰ আটাইতকৈ শক্তিশালী বৈশিষ্ট্যসমূহৰ অন্যতম হৈছে ৰেজিষ্ট্ৰেচন ফৰ্মত arbitrary text, color, আৰু select field যোগ কৰাৰ ক্ষমতা। আমি যেতিয়া এই তথ্যসমূহ সংগ্ৰহ কৰো, তেতিয়া আমি ইয়াক ব্যৱহাৰ কৰি নিৰ্দিষ্ট কিছুমান site template-ৰ বিষয়বস্তু পূৰণ কৰিব পাৰোঁ। তাৰ পিছত, নতুন site টি প্ৰকাশ কৰাৰ সময়ত, Ultimate Multisite-এ placeholders সমূহক ৰেজিষ্ট্ৰেচনৰ সময়ত প্ৰৱেশ কৰা আচল তথ্যৰে সলনি কৰিব।

উদাহৰণস্বৰূপে, আপুনি placeholders ব্যৱহাৰ কৰি নিজৰ template site সমূহ বনাব পাৰে। Placeholders সমূহক double curly braces - {{placeholder_name}} - ৰ দ্বাৰা আৱৰি থকা উচিত।

তাৰ পিছত, আপুনি সেই তথ্য সংগ্ৰহ কৰিবলৈ এটা মিল থকা registration field যোগ কৰিব পাৰে।

আপোনাৰ গ্ৰাহকে তেতিয়া সেই field ত তথ্য ভৰিব পাৰিব।

Ultimate Multisite-এ স্বয়ংক্রিয়ভাৱে placeholders সমূহক গ্ৰাহকে দিয়া তথ্যৰে সলনি কৰিব।

## **"টেমপ্লেটত কেৱল placeholders থকা" সমস্যা সমাধান কৰা**

এই সকলোবোৰ কথা ভাল, কিন্তু আমি এটা বেয়া সমস্যাৰ সন্মুখীন হওঁ: এতিয়া আমাৰ site template সমূহ—যিটো আমাৰ গ্ৰাহকে ভ্ৰমণ কৰিব পাৰে—সেবোৰ বেয়া placeholdersৰে ভৰি আছে যিয়ে বিশেষ কিছু নিদিয়ে।

এই সমস্যাটো সমাধান কৰিবলৈ, আমি placeholders-ৰ বাবে নকল (fake) মান (values) সেট কৰাৰ বিকল্প আগবঢ়াওঁ, আৰু গ্ৰাহকে ভ্ৰমণ কৰোঁতে আমি সেই মানসমূহ ব্যৱহাৰ কৰি template site সমূহৰ বিষয়বস্তু Search and Replace কৰোঁ।

আপুনি **Ultimate Multisite > Settings > Sites** লৈ গৈ, আৰু তাৰ পিছত, sidebar ত, Edit Placeholders link ক্লিক কৰি template placeholders editor-লৈ যাব পাৰিব।

![Edit Placeholders link in the Sites settings sidebar](/img/config/settings-sites.png)

এনেক কৰিলে আপোনাক placeholders-ৰ content editor-লৈ লৈ যাব, য'ত আপুনি placeholders আৰু তেওঁলোকৰ নিজ নিজ বিষয়বস্তু যোগ কৰিব পাৰে।

![Placeholders content editor with placeholder names and values](/img/config/settings-sites.png)
