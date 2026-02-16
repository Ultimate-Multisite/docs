---
title: চেকআউট ফর্মসমূহ
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# চেকআউট ফর্ম

নতুন গ্রাহকদের রূপান্তর করার জন্য বিভিন্ন পদ্ধতি পরীক্ষা করতে চেকআউট ফর্ম একটি সহজ এবং নমনীয় উপায়।

Ultimate Multisite 2.0-এ একটি চেকআউট ফর্ম এডিটর রয়েছে যা দিয়ে আপনি যত খুশি ফর্ম তৈরি করতে পারবেন — বিভিন্ন ফিল্ড, বিভিন্ন পণ্য অফার ইত্যাদি সহ।

এই ফিচারে যেতে বাম সাইডবারে Checkout Forms মেনুতে ক্লিক করুন।

![Checkout Forms list](/img/config/checkout-forms-list.png)

এই পেজে আপনি আপনার সব চেকআউট ফর্ম দেখতে পাবেন।

নতুন ফর্ম তৈরি করতে চাইলে পেজের উপরে Add Checkout Form-এ ক্লিক করুন।

শুরুর জন্য তিনটি অপশন থেকে একটি বেছে নিতে পারেন: single step, multi-step অথবা blank। এরপর Go to the Editor-এ ক্লিক করুন।

![Checkout Form editor](/img/config/checkout-form-editor.png)

এছাড়াও, আগে তৈরি করা ফর্মগুলো এডিট বা ডুপ্লিকেট করতে পারবেন ফর্মের নামের নিচের অপশনগুলোতে ক্লিক করে। সেখানে ফর্মের shortcode কপি করা বা ফর্ম ডিলিট করার অপশনও পাবেন।

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### চেকআউট ফর্ম এডিট করা

বিভিন্ন উদ্দেশ্যে চেকআউট ফর্ম তৈরি করতে পারেন। এই উদাহরণে আমরা একটি রেজিস্ট্রেশন ফর্ম নিয়ে কাজ করব।

চেকআউট ফর্ম এডিটরে যাওয়ার পর, আপনার ফর্মের একটি নাম দিন (শুধুমাত্র অভ্যন্তরীণ ব্যবহারের জন্য) এবং একটি slug দিন (যেমন shortcode তৈরিতে ব্যবহৃত হয়)।

![Checkout Form editor](/img/config/checkout-form-editor.png)

ফর্মগুলো step এবং field দিয়ে তৈরি। নতুন step যোগ করতে Add New Checkout Step-এ ক্লিক করুন।

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

মডাল উইন্ডোর প্রথম ট্যাবে আপনার ফর্মের step-এর কন্টেন্ট পূরণ করুন। একটি ID, নাম এবং বিবরণ দিন। এগুলো মূলত অভ্যন্তরীণ কাজে ব্যবহৃত হয়।

![Checkout form step](/img/config/checkout-form-step.png)

এরপর, step-এর visibility সেট করুন। তিনটি অপশন থেকে বেছে নিতে পারেন: "Always show", "Only show for logged in users" অথবা "Only show for guests"।

![Checkout form step](/img/config/checkout-form-step.png)

সবশেষে, step-এর স্টাইল কনফিগার করুন। এগুলো ঐচ্ছিক ফিল্ড।

![Checkout form step](/img/config/checkout-form-step.png)

এখন আমাদের প্রথম step-এ field যোগ করার সময়। Add New Field-এ ক্লিক করে যে ধরনের সেকশন চান সেটি সিলেক্ট করুন।

![Checkout form step with fields](/img/config/checkout-form-step.png)

প্রতিটি field-এ বিভিন্ন প্যারামিটার পূরণ করতে হয়। এই প্রথম এন্ট্রির জন্য আমরা "Username" field সিলেক্ট করব।

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

আপনার প্রয়োজন অনুযায়ী যত খুশি step এবং field যোগ করতে পারেন। গ্রাহকদের পণ্য বেছে নেওয়ার জন্য দেখাতে চাইলে Pricing Table field ব্যবহার করুন। ক্লায়েন্টদের টেমপ্লেট বাছাই করতে দিতে চাইলে Template Selection field যোগ করুন। এভাবে চলতে থাকবে।

_**নোট:** username, email, password, site title, site URL, order summary, payment, এবং submit button — চেকআউট ফর্ম তৈরির জন্য এই field গুলো বাধ্যতামূলক।_

চেকআউট ফর্মে কাজ করার সময় Preview বাটন ব্যবহার করে দেখতে পারেন আপনার ক্লায়েন্টরা ফর্মটি কীভাবে দেখবে। existing user বা visitor হিসেবে দেখার মধ্যে পরিবর্তনও করতে পারেন।

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

সবশেষে, Advanced Options-এ আপনি "Thank You" পেজের মেসেজ কনফিগার করতে পারেন, conversion ট্র্যাক করার জন্য snippet যোগ করতে পারেন, চেকআউট ফর্মে custom CSS যোগ করতে পারেন বা নির্দিষ্ট দেশে সীমাবদ্ধ করতে পারেন।

![Advanced Options](/img/config/checkout-form-advanced.png)

ডান কলামের toggle অপশন ব্যবহার করে আপনার চেকআউট ফর্ম ম্যানুয়ালি সক্রিয় বা নিষ্ক্রিয় করতে পারেন, অথবা স্থায়ীভাবে ফর্মটি ডিলিট করতে পারেন।

![Active toggle](/img/config/checkout-form-active.png)

আপনার চেকআউট ফর্ম সেভ করতে ভুলবেন না!

![Save button](/img/config/checkout-form-save.png)

আপনার ফর্মের shortcode পেতে Generate Shortcode-এ ক্লিক করুন এবং মডাল উইন্ডোতে দেখানো ফলাফল কপি করুন।

![Save button with shortcode](/img/config/checkout-form-save.png)
