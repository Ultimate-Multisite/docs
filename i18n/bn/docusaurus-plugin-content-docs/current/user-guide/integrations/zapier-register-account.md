---
title: Zapier এর মাধ্যমে একটি অ্যাকাউন্ট নিবন্ধন করুন
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# ইভেন্ট: Zapier-এর মাধ্যমে অ্যাকাউন্ট রেজিস্টার করুন

[Zapier-এর সাথে Ultimate Multisite ইন্টিগ্রেশন](zapier.md) আর্টিকেলে আমরা আলোচনা করেছি কীভাবে Zapier ব্যবহার করে বিভিন্ন ট্রিগার ও ইভেন্টের উপর ভিত্তি করে Ultimate Multisite-এ বিভিন্ন অ্যাকশন সম্পাদন করা যায়। এই আর্টিকেলে আমরা দেখাব কীভাবে আপনি থার্ড পার্টি অ্যাপ্লিকেশনগুলো ইন্টিগ্রেট করতে পারেন। আমরা Google Sheets-কে ডেটার উৎস হিসেবে ব্যবহার করব এবং সেই তথ্য Ultimate Multisite-এ পাঠিয়ে একটি অ্যাকাউন্ট রেজিস্টার করব।

প্রথমে, আপনার Google Drive-এ একটি **Google Sheet** তৈরি করুন। প্রতিটি কলাম সঠিকভাবে সংজ্ঞায়িত করুন যাতে পরবর্তীতে সহজেই ডেটা ম্যাপ করতে পারেন।

![কাস্টমার ডেটার জন্য কলামসহ Google Sheet](/img/admin/webhooks-list.png)Google Sheet তৈরি করার পর, আপনার Zapier অ্যাকাউন্টে লগ ইন করুন এবং একটি zap তৈরি করা শুরু করুন।

![Zap তৈরি শুরু করার জন্য Zapier ড্যাশবোর্ড](/img/admin/webhooks-list.png)**"App event"**-এর সার্চ ফিল্ডে **"Google Sheets"** সিলেক্ট করুন

![App event হিসেবে Google Sheets সিলেক্ট করা](/img/admin/webhooks-list.png)

তারপর "**Event**" ফিল্ডে "**New spreadsheet row**" সিলেক্ট করুন এবং "**Continue**" বাটনে ক্লিক করুন

![Zapier-এ New spreadsheet row ইভেন্ট সিলেক্ট করা](/img/admin/webhooks-list.png)পরবর্তী ধাপে আপনাকে সেই **Google Account** সিলেক্ট করতে বলা হবে যেখানে **Google Sheet** সেভ করা আছে। সঠিক Google অ্যাকাউন্ট নির্বাচন করা হয়েছে কিনা নিশ্চিত করুন।

![Google Sheet-এর জন্য Google Account সিলেক্ট করা](/img/admin/webhooks-list.png)

**"Set up trigger"**-এ আপনাকে সেই Google spreadsheet এবং worksheet সিলেক্ট ও নির্দিষ্ট করতে হবে যেখান থেকে ডেটা আসবে। এগুলো পূরণ করুন এবং "**Continue**" বাটনে ক্লিক করুন

![Spreadsheet ও worksheet সিলেকশনসহ ট্রিগার সেটআপ](/img/admin/webhooks-list.png)এরপর "**test your trigger**" ধাপে আপনার Google Sheet সঠিকভাবে কানেক্ট হয়েছে কিনা তা নিশ্চিত করুন।

![Zapier-এ আপনার ট্রিগার টেস্ট করার ধাপ](/img/admin/webhooks-list.png)টেস্ট সফল হলে, আপনি আপনার spreadsheet থেকে কিছু ভ্যালু দেখতে পাবেন। সামনে এগিয়ে যেতে "**Continue**" বাটনে ক্লিক করুন।

![Spreadsheet-এর ভ্যালু দেখাচ্ছে সফল ট্রিগার টেস্ট](/img/admin/webhooks-list.png)পরবর্তী ধাপ হলো দ্বিতীয় অ্যাকশন সেটআপ করা যা Ultimate Multisite-এ একটি অ্যাকাউন্ট তৈরি বা রেজিস্টার করবে। সার্চ ফিল্ডে "**Ultimate Multisite(2.0.2)**" সিলেক্ট করুন

![অ্যাকশন অ্যাপ হিসেবে Ultimate Multisite সিলেক্ট করা](/img/admin/webhooks-list.png)

"**Event**" ফিল্ডে "**Register an Account in Ultimate Multisite**" সিলেক্ট করুন এবং "**Continue**" বাটনে ক্লিক করুন।

![Ultimate Multisite-এ অ্যাকাউন্ট রেজিস্টার করার অ্যাকশন ইভেন্ট](/img/admin/webhooks-list.png)"**Set up an action**"-এ আপনি কাস্টমার ডেটা, মেম্বারশিপ, প্রোডাক্ট ইত্যাদির জন্য বিভিন্ন ফিল্ড দেখতে পাবেন। আপনি আপনার Google Sheet-এর ভ্যালুগুলো ম্যাপ করে সঠিক ফিল্ডে অ্যাসাইন করতে পারেন, যেমনটি নিচের স্ক্রিনশটে দেখানো হয়েছে।

![Google Sheet-এর ভ্যালু Ultimate Multisite ফিল্ডে ম্যাপ করা](/img/admin/webhooks-list.png)

ভ্যালুগুলো ম্যাপ করার পর, আপনি অ্যাকশনটি টেস্ট করতে পারেন।

![অ্যাকাউন্ট রেজিস্টার Zapier অ্যাকশন টেস্ট করা](/img/admin/webhooks-list.png)
