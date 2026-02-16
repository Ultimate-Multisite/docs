---
title: V1 থেকে মাইগ্রেট করা
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 থেকে মাইগ্রেশন

## Ultimate Multisite তার মূল 1.x সিরিজ থেকে 2.x সিরিজে আপগ্রেড হয়েছে।

Ultimate Multisite ভার্সন 2.0 এবং এর পরবর্তী সংস্করণগুলো পুরোপুরি নতুন করে লেখা হয়েছে। অর্থাৎ, পুরনো এবং নতুন ভার্সনের মধ্যে খুব কম জিনিসই মিল আছে। তাই 1.x থেকে 2.x-এ আপগ্রেড করার সময়, আপনার ডেটা এমন একটি ফরম্যাটে রূপান্তর করতে হবে যা নতুন ভার্সন বুঝতে পারে।

সুখবর হলো, Ultimate Multisite 2.0+ এর কোরে **একটি মাইগ্রেটর বিল্ট-ইন** আছে যা পুরনো ভার্সনের ডেটা স্বয়ংক্রিয়ভাবে শনাক্ত করে নতুন ফরম্যাটে রূপান্তর করতে পারে। এই মাইগ্রেশন প্রক্রিয়াটি ভার্সন 2.0+ এর **সেটআপ উইজার্ডে** সম্পন্ন হয়।

এই লেসনে আমরা দেখবো মাইগ্রেটর কীভাবে কাজ করে, সমস্যা হলে কী করতে হবে এবং এই প্রক্রিয়ায় কোনো সমস্যা দেখা দিলে কীভাবে সমাধান করা যায়।

_**গুরুত্বপূর্ণ: ভার্সন 1.x থেকে 2.0-এ আপগ্রেড শুরু করার আগে অবশ্যই আপনার সাইটের ডেটাবেজের একটি ব্যাকআপ নিয়ে রাখুন**_

## প্রথম ধাপ

প্রথমে plugin এর .zip ফাইলটি ডাউনলোড করুন এবং আপনার network admin dashboard-এ ভার্সন 2.0 ইনস্টল করুন।

[ভার্সন 2.0 ইনস্টল ও অ্যাক্টিভেট](../getting-started/installing-ultimate-multisite.md) করার পর, সিস্টেম স্বয়ংক্রিয়ভাবে বুঝতে পারবে যে আপনার Multisite পুরনো ভার্সনে চলছে এবং plugin পেজের উপরে এই মেসেজটি দেখতে পাবেন।

_**নোট:** যদি আপনার Multisite-এ Ultimate Multisite 1.x ইনস্টল করা থাকে, তাহলে বর্তমান plugin-টি আপনার আপলোড করা ভার্সন দিয়ে প্রতিস্থাপন করার অপশন পাবেন। **Replace current with uploaded**-এ ক্লিক করুন।_

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

পরবর্তী পেজে আপনাকে জানানো হবে ভার্সন 1.x এর সাথে কোন কোন লেগ্যাসি add-on ইনস্টল করা আছে। সেখানে নির্দেশনা থাকবে যে আপনার বর্তমান ভার্সন 2.0 এর সাথে সামঞ্জস্যপূর্ণ কিনা, অথবা মাইগ্রেশনের পর add-on এর আপগ্রেড ভার্সন ইনস্টল করতে হবে কিনা।

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

এগিয়ে যাওয়ার জন্য প্রস্তুত হলে, **Visit the Installer to finish the upgrade** বাটনে ক্লিক করুন।

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

এটি আপনাকে ইনস্টলেশন উইজার্ড পেজে নিয়ে যাবে যেখানে কিছু স্বাগত বার্তা দেখতে পাবেন। পরবর্তী পেজে যেতে শুধু **Get Started**-এ ক্লিক করুন।

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started**-এ ক্লিক করার পর, আপনাকে Pre-install Checks পেজে নিয়ে যাওয়া হবে। এখানে আপনার System Information এবং WordPress ইনস্টলেশন দেখানো হবে এবং জানানো হবে এটি **Ultimate Multisite-এর প্রয়োজনীয়তা** পূরণ করে কিনা।

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

পরবর্তী ধাপে আপনার Ultimate Multisite লাইসেন্স কী দিন এবং plugin অ্যাক্টিভেট করুন। এতে add-on সহ সব ফিচার আপনার সাইটে ব্যবহার করা যাবে।

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

কী দেওয়ার পর, **Agree & Activate**-এ ক্লিক করুন।

লাইসেন্স অ্যাক্টিভেশনের পর, পরবর্তী পেজে **Install**-এ ক্লিক করে প্রকৃত ইনস্টলেশন শুরু করতে পারবেন। এতে ভার্সন 2.0 চালানোর জন্য প্রয়োজনীয় ফাইল এবং ডেটাবেজ স্বয়ংক্রিয়ভাবে তৈরি হয়ে যাবে।

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## এবার মাইগ্রেশন

মাইগ্রেটরে একটি বিল্ট-ইন সেফটি ফিচার আছে যা আপনার পুরো multisite চেক করে নিশ্চিত করবে যে আপনার সব Ultimate Multisite ডেটা কোনো সমস্যা ছাড়াই মাইগ্রেট করা যাবে। প্রক্রিয়া শুরু করতে **Run Check** বাটনে ক্লিক করুন।

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

চেক সম্পন্ন হলে দুটি সম্ভাবনা আছে: ফলাফল হয় **error সহ** অথবা **error ছাড়া**।

### Error পাওয়া গেলে

যদি কোনো error মেসেজ পান, তাহলে আমাদের support টিমের সাথে যোগাযোগ করতে হবে যাতে তারা সমস্যাটি ঠিক করতে সাহায্য করতে পারে। টিকেট তৈরির সময় অবশ্যই **error log দিন**। আপনি log ডাউনলোড করতে পারেন অথবা contact our support team লিঙ্কে ক্লিক করতে পারেন। এতে পেজের ডানদিকে help widget খুলবে যেখানে ফিল্ডগুলো আগে থেকেই পূরণ করা থাকবে, description-এ error logs সহ।

_**যেহেতু সিস্টেম একটি error খুঁজে পেয়েছে, আপনি ভার্সন 2.0-এ মাইগ্রেট করতে পারবেন না। error ঠিক না হওয়া পর্যন্ত আপনার নেটওয়ার্ক চালু রাখতে ভার্সন 1.x-এ ফিরে যেতে পারেন।**_

### Error না পাওয়া গেলে

যদি সিস্টেম কোনো error না পায়, তাহলে একটি সাফল্যের মেসেজ এবং নিচে একটি **Migrate** বাটন দেখতে পাবেন যা আপনাকে মাইগ্রেশন করতে দেবে। এই পেজে আপনাকে মনে করিয়ে দেওয়া হবে এগিয়ে যাওয়ার আগে ডেটাবেজের ব্যাকআপ নিতে, যা আমরা জোরালোভাবে সুপারিশ করি। ব্যাকআপ থাকলে **Migrate**-এ ক্লিক করুন।

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

ব্যস, এটুকুই!

এখন আপনি হয় Wizard সেটআপ চালিয়ে যেতে পারেন আপনার নেটওয়ার্কের লোগো এবং অন্যান্য জিনিস আপডেট করতে, অথবা সরাসরি Ultimate Multisite ভার্সন 2.0 মেনু এবং এর নতুন ইন্টারফেস ঘুরে দেখতে পারেন। উপভোগ করুন!
