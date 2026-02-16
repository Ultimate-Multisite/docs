---
title: GitHub স্নিপেটস
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# GitHub রিপোজিটরিতে Ultimate Multisite স্নিপেট কীভাবে ব্যবহার করবেন

GitHub রিপোজিটরিতে কিছু কোড স্নিপেট পাওয়া যায় যেগুলো Ultimate Multisite ব্যবহারকারীরা প্রায়ই চেয়ে থাকেন। এগুলো দিয়ে ছোটখাটো কাজ করা যায়, যেমন সাইন-আপ পেজে Google Analytics স্ক্রিপ্ট যোগ করা বা অ্যাডমিন dashboard থেকে কোনো meta box লুকিয়ে রাখা।

এই আর্টিকেলে আমরা দেখাবো কীভাবে এই কোডগুলো ব্যবহার করতে হয়, বিশেষ করে এগুলো কোথায় বসাতে হবে।

নিচের লিংকে স্নিপেটগুলো পাবেন।

https://github.com/next-press/wp-ultimo-snippets/

কোড যোগ করার ২টি উপায় আছে

  1. আপনার theme-এর functions.php ফাইলে।

  2. Must-Use Plugins (mu-plugins)

# theme-এর functions.php ফাইলে স্নিপেট কীভাবে যোগ করবেন

  1. আপনার WordPress Network অ্যাডমিন dashboard-এ লগইন করুন এবং Themes > Theme Editor-এ যান (নিচের স্ক্রিনশট দেখুন)।

  2. "Edit Themes" পেজে, স্ক্রিনের ডান দিকে উপরের dropdown ফিল্ডে আপনার সক্রিয় theme সিলেক্ট করা আছে কিনা নিশ্চিত হন (নিচের স্ক্রিনশটে #3 দেখুন)।

  3. "Theme Files" সেকশনের নিচে functions.php ফাইলে ক্লিক করুন যাতে ফাইলটি লোড হয়। একদম নিচে স্ক্রল করুন এবং GitHub রিপোজিটরি থেকে পাওয়া Ultimate Multisite স্নিপেট পেস্ট করুন।

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) কীভাবে তৈরি করবেন

WordPress-এ একটি ফিচার আছে যা দিয়ে কাস্টম ফাংশনালিটি লোড করা যায়, এটাকে বলে "Must-Use Plugins", সংক্ষেপে "mu-plugins"।

এই বিশেষ mu-plugins গুলো অন্য সব সাধারণ plugin-এর আগে লোড হয়, এবং এগুলো নিষ্ক্রিয় করা যায় না। multisite network-এ, এই mu-plugins-এর কোড আপনার ইনস্টলেশনের সব সাইটে লোড হবে।

1\. আপনার WordPress ইনস্টলের ফাইল সিস্টেমে প্রবেশ করতে FTP বা SSH ব্যবহার করুন।

2\. আপনার WordPress ইনস্টলের wp-content ডিরেক্টরির ভিতরে mu-plugins নামে একটি নতুন ডিরেক্টরি তৈরি করুন।

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. আপনার কম্পিউটারে Notepad বা যেকোনো কোড এডিটর ব্যবহার করে wu-snippet.php নামে একটি নতুন PHP ফাইল তৈরি করুন।

4\. GitHub রিপোজিটরি থেকে পাওয়া Ultimate Multisite কোড স্নিপেট ফাইলে বসান এবং সেভ করুন। আপনার mu plugin-এ লেবেল দিতে কোড স্নিপেটের উপরে এই কোডটিও যোগ করতে পারেন।
