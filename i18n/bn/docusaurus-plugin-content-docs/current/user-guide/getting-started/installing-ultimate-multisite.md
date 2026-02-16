---
title: Ultimate Multisite ইনস্টল করা
sidebar_position: 12
_i18n_hash: 400c7f9fc01ce3a8275a1710ef7e903a
---
# Ultimate Multisite ইনস্টল করা

:::note
এই টিউটোরিয়ালে ধরে নেওয়া হয়েছে যে আপনার WordPress Multisite আগে থেকেই ইনস্টল ও কনফিগার করা আছে। কীভাবে করবেন জানতে WP Beginner-এর [এই টিউটোরিয়ালটি](https://www.wpbeginner.com/glossary/multisite/) দেখুন।
:::

## Plugin ইনস্টল করা

Ultimate Multisite বিনামূল্যে পাওয়া যায় [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/)-এ।

আপনার **Network Admin Dashboard** থেকে **Plugins → Add New Plugin**-এ যান।

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** সার্চ করুন (হুবহু মিল পেতে উদ্ধৃতি চিহ্ন সহ) এবং এটি প্রথম রেজাল্ট হিসেবে দেখা যাবে। **Install Now**-এ ক্লিক করুন।

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

ইনস্টল হয়ে গেলে, আপনার পুরো নেটওয়ার্কে plugin-টি সক্রিয় করতে **Network Activate**-এ ক্লিক করুন।

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

সক্রিয় করার পর, আপনাকে স্বয়ংক্রিয়ভাবে Setup Wizard-এ নিয়ে যাওয়া হবে।

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard প্রায় ১০ মিনিটের মধ্যে Ultimate Multisite কনফিগার করতে আপনাকে গাইড করবে।

### স্বাগতম

শুরু করতে **Get Started**-এ ক্লিক করুন।

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### প্রাক-ইনস্টল পরীক্ষা

এই ধাপে আপনার সিস্টেম ইনফরমেশন এবং WordPress ইনস্টলেশন পরীক্ষা করা হয় যাতে এটি Ultimate Multisite-এর প্রয়োজনীয়তা পূরণ করে কিনা নিশ্চিত হওয়া যায়। সব ঠিক থাকলে **Go to the Next Step**-এ ক্লিক করুন।

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

### ইনস্টলেশন

ইনস্টলার প্রয়োজনীয় database টেবিল তৈরি করবে এবং Ultimate Multisite-এর কাজ করার জন্য দরকারি `sunrise.php` ফাইল ইনস্টল করবে। এগিয়ে যেতে **Install**-এ ক্লিক করুন।

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### আপনার কোম্পানি

আপনার কোম্পানির তথ্য দিন এবং আপনার ডিফল্ট মুদ্রা সেট করুন। এই তথ্য আপনার পুরো WaaS প্ল্যাটফর্মে ব্যবহৃত হবে। হয়ে গেলে **Continue**-এ ক্লিক করুন।

![Your Company configuration step](/img/installation/wizard-your-company.png)

### ডিফল্ট কনটেন্ট

এই ধাপে আপনি পূর্বনির্ধারিত টেমপ্লেট, প্রোডাক্ট এবং অন্যান্য স্টার্টার কনটেন্ট ইনস্টল করতে পারবেন। Ultimate Multisite-এর ফিচারগুলোর সাথে পরিচিত হওয়ার জন্য এটি দারুণ একটি উপায়। ডিফল্ট কনটেন্ট যোগ করতে **Install**-এ ক্লিক করুন, অথবা শূন্য থেকে শুরু করতে চাইলে এই ধাপ এড়িয়ে যান।

![Default content installation step](/img/installation/wizard-default-content.png)

### প্রস্তাবিত Plugin

ঐচ্ছিকভাবে প্রস্তাবিত সহযোগী plugin গুলো ইনস্টল করুন। যোগ করতে **Install**-এ ক্লিক করুন অথবা এড়িয়ে যেতে skip করুন।

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### প্রস্তুত!

ব্যস! আপনার Ultimate Multisite ইনস্টলেশন সম্পন্ন হয়েছে। আপনি এখন **Network Admin Dashboard** থেকে আপনার Website as a Service প্ল্যাটফর্ম তৈরি শুরু করতে পারেন।

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

এবার মজা করুন!
