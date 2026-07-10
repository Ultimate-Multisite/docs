---
title: ସୂର୍ଯ୍ୟୋଦୟ ଫାଇଲ୍ ତ୍ରୁଟି
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise ফাইল ইনস্টল করার ত্রুটি {#error-installing-the-sunrise-file}

sunrise.php ফাইলটি একটি বিশেষ ফাইল যা ওয়ার্ডপ্রেস নিজেকে চালু (bootstrap) করার সময় খোঁজে। ওয়ার্ডপ্রেসে sunrise.php ফাইলটি সনাক্ত করতে হলে, এটিকে **wp-content ফোল্ডারের** ভেতরে থাকতে হবে।

যখন আপনি Ultimate Multisite সক্রিয় করেন এবং স্ক্রিনশটের মতো সেটআপ উইজার্ডের মাধ্যমে এগিয়ে যান, তখন Ultimate Multisite আমাদের sunrise.php ফাইলটিকে wp-content ফোল্ডারে কপি করার চেষ্টা করে।

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

বেশিরভাগ সময় আমরা ফাইলটি সফলভাবে কপি করতে পারি এবং সবকিছু ঠিকঠাক কাজ করে। তবে, যদি কিছু সঠিকভাবে সেটআপ করা না থাকে (যেমন ফোল্ডার পারমিশন), তাহলে এমন পরিস্থিতি আসতে পারে যেখানে Ultimate Multisite ফাইলটি কপি করতে পারছে না।

যদি Ultimo আপনাকে যে ত্রুটি বার্তা দেয় তা পড়েন, তবে আপনি দেখতে পাবেন এখানে ঠিক কী ঘটেছে: **Sunrise copy failed**।

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

এটি ঠিক করার জন্য, আপনি শুধু wp-ultimo প্লাগইন ফোল্ডারের ভেতরে থাকা sunrise.php ফাইলটি কপি করে আপনার wp-content ফোল্ডারে পেস্ট করতে পারেন। এটা করার পরে, উইজার্ড পেজটি রিফ্রেশ করুন এবং পরীক্ষাগুলো পাস করা উচিত।

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> যাই হোক না কেন, ভবিষ্যতে সমস্যা এড়াতে আপনার ফোল্ডার পারমিশনগুলো একবার ভালোভাবে পরীক্ষা করে নেওয়া ভালো (শুধু Ultimate Multisite নয়, অন্যান্য প্লাগইন এবং থিমগুলোর জন্যও)।

ওয়ার্ডপ্রেসের অংশ **Health Check tool** (আপনি আপনার প্রধান সাইটের **admin panel > Tools > Health Check** এর মাধ্যমে এটি অ্যাক্সেস করতে পারেন) আপনাকে জানাতে সক্ষম যে আপনার ফোল্ডার পারমিশনগুলো এমন মান সেট করা আছে কিনা যা ওয়ার্ডপ্রেসের সাথে সমস্যা সৃষ্টি করতে পারে।

<!-- స్క్రీన్ ଅବଗତ ନୁହେଁ: WordPress Health Check ଟୁଲ୍ ଦର୍ଶାଉଛି ఫోల్ଡର ପରିମାଣ ସ୍tଥିତି -->
