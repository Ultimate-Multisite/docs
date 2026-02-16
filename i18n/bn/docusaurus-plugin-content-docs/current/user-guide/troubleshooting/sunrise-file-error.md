---
title: Sunrise ফাইল ত্রুটি
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise ফাইল ইনস্টল করতে সমস্যা

sunrise.php ফাইলটি একটি বিশেষ ফাইল যা WordPress নিজে চালু হওয়ার সময় খোঁজে। WordPress যাতে sunrise.php ফাইলটি খুঁজে পায়, সেজন্য এটি অবশ্যই **wp-content ফোল্ডারের** ভেতরে থাকতে হবে।

আপনি যখন Ultimate Multisite সক্রিয় করেন এবং স্ক্রিনশটে দেখানো setup wizard-এর ধাপগুলো অনুসরণ করেন, তখন Ultimate Multisite আমাদের sunrise.php ফাইলটি wp-content ফোল্ডারে কপি করার চেষ্টা করে।

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

বেশিরভাগ সময় আমরা সফলভাবে ফাইলটি কপি করতে পারি এবং সব ঠিকঠাক কাজ করে। তবে, যদি কিছু সঠিকভাবে সেট আপ করা না থাকে (যেমন ফোল্ডার permission), তাহলে এমন পরিস্থিতি হতে পারে যেখানে Ultimate Multisite ফাইলটি কপি করতে পারে না।

Ultimo-এর দেওয়া error message পড়লে আপনি দেখবেন এখানে ঠিক সেটাই হয়েছে: **Sunrise copy failed**।

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

এটি ঠিক করতে, আপনি সহজেই wp-ultimo plugin ফোল্ডারের ভেতর থেকে sunrise.php ফাইলটি কপি করে আপনার wp-content ফোল্ডারে পেস্ট করতে পারেন। এটি করার পর, wizard পেজটি রিলোড করুন এবং চেকগুলো পাস হয়ে যাওয়া উচিত।

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> যাই হোক, ভবিষ্যতে সমস্যা এড়াতে (শুধু Ultimate Multisite নয়, অন্যান্য plugin এবং theme-এর ক্ষেত্রেও) আপনার ফোল্ডার permission-গুলো একবার সামগ্রিকভাবে পরীক্ষা করে দেখা ভালো।

WordPress-এর অন্তর্ভুক্ত **Health Check টুল** (আপনার main site-এর **admin panel > Tools > Health Check** থেকে এটি অ্যাক্সেস করতে পারবেন) আপনাকে জানাতে পারবে যদি আপনার ফোল্ডার permission এমন মানে সেট করা থাকে যা WordPress-এ সমস্যা তৈরি করতে পারে।

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
