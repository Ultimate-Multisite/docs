---
title: Ultimate Multisite অনুবাদ করা
sidebar_position: 19
_i18n_hash: a433d81386db16579adeb9a60f6af240
---
# Ultimate Multisite অনুবাদ করা

Ultimate Multisite ইংরেজিতে ডেভেলপ করা হয়েছে, তবে প্লাগইনটি সম্পূর্ণ অনুবাদযোগ্য এবং আমরা অনুবাদে অবদান রাখতে আগ্রহীদের সাদর স্বাগত জানাই।

## মূল প্লাগইন অনুবাদ

মূল Ultimate Multisite প্লাগইনটি অফিসিয়াল **WordPress.org অনুবাদ প্ল্যাটফর্মের** মাধ্যমে অনুবাদ করা হয়:

**[translate.wordpress.org/projects/wp-plugins/ultimate-multisite/](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)**

এটি WordPress কমিউনিটির স্ট্যান্ডার্ড অনুবাদ সিস্টেম। যখন অনুবাদগুলো পর্যাপ্ত অনুমোদনের সীমায় পৌঁছায়, সেগুলো স্বয়ংক্রিয়ভাবে WordPress প্লাগইন আপডেটের মাধ্যমে সব Ultimate Multisite ব্যবহারকারীদের কাছে পৌঁছে যায়।

**আপনার সাহায্য দরকার!** আপনি যদি ইংরেজি ছাড়া অন্য কোনো ভাষায় কথা বলেন, অনুগ্রহ করে অনুবাদে অবদান রাখার কথা ভাবুন। এমনকি কয়েকটি স্ট্রিং অনুবাদ করলেও তা সাহায্য করে। শুরু করতে:

1. [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/) ভিজিট করুন
2. আপনার ভাষা সিলেক্ট করুন
3. "Contribute Translation" এ ক্লিক করুন
4. আপনার একটি বিনামূল্যের WordPress.org অ্যাকাউন্ট লাগবে

আপনি যদি আপনার ভাষার জন্য অনুবাদ এডিটর হতে চান (যিনি অনুবাদ অনুমোদন করতে পারেন), [GitHub Discussions](https://github.com/Ultimate-Multisite/ultimate-multisite/discussions) এর মাধ্যমে যোগাযোগ করুন।

## Addon অনুবাদ

Addon প্লাগইনগুলো আলাদাভাবে অনুবাদ করা হয়:

**[translate.ultimatemultisite.com](https://translate.ultimatemultisite.com/)**

Addon অনুবাদগুলো বর্তমানে শুরুর ভিত্তি হিসেবে AI-এর মাধ্যমে তৈরি করা হয়েছে। এগুলো সমস্ত সমর্থিত ভাষা কভার করে, তবে এতে বিশ্রী বাক্য গঠন বা ভুল থাকতে পারে। আমরা মানব অনুবাদকদের স্বাগত জানাই যারা রিভিউ করে এগুলো আরও স্বাভাবিক ও সঠিক করতে পরামর্শ দিতে পারেন।

## লোকাল অনুবাদ

আপনি যদি upstream-এ অবদান না রেখে নিজের প্রজেক্টের জন্য লোকালি অনুবাদ তৈরি করতে চান, দুটি উপায় আছে:

### Poedit ব্যবহার করে

আপনি **[Poedit](https://poedit.net)** ডেস্কটপ অ্যাপ্লিকেশন দিয়ে `.pot` ফাইল অনুবাদ করতে পারেন:

1. [poedit.net](https://poedit.net) থেকে Poedit ডাউনলোড করুন
2. `wp-content/plugins/ultimate-multisite/lang/` থেকে `.pot` ফাইলটি ওপেন করুন
3. Poedit ইন্টারফেসে স্ট্রিংগুলো অনুবাদ করুন
4. সেভ করুন -- Poedit `.po` এবং `.mo` ফাইল তৈরি করে দেবে
5. আউটপুট ফাইলগুলো `lang` ফোল্ডারে রাখুন

### Loco Translate ব্যবহার করে

**[Loco Translate](https://wordpress.org/plugins/loco-translate/)** WordPress প্লাগইন আপনাকে কোনো ডেস্কটপ টুল ছাড়াই সরাসরি অ্যাডমিন প্যানেল থেকে অনুবাদ করতে দেয়। এটি আপনার জন্য অনুবাদ ফাইল তৈরি এবং কম্পাইল করার কাজ সামলে নেয়।
