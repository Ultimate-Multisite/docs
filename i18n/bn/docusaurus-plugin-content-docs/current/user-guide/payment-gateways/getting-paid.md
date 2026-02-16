---
title: পেমেন্ট পাওয়া
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# পেমেন্ট গ্রহণ (v2)

_**গুরুত্বপূর্ণ নোট: এই আর্টিকেলটি Ultimate Multisite ভার্সন 2.x এর জন্য প্রযোজ্য।**_

Ultimate Multisite-এ একটি বিল্ট-ইন মেম্বারশিপ ও বিলিং সিস্টেম রয়েছে। আমাদের বিলিং সিস্টেম সঠিকভাবে কাজ করার জন্য, আমরা ই-কমার্সে সবচেয়ে বেশি ব্যবহৃত পেমেন্ট গেটওয়েগুলো ইন্টিগ্রেট করেছি। Ultimate Multisite-এর ডিফল্ট পেমেন্ট গেটওয়ে হলো _Stripe_, _PayPal_ এবং Manual Payment। এছাড়াও আপনি _WooCommerce_, _GoCardless_ এবং _Payfast_ ব্যবহার করে পেমেন্ট নিতে পারবেন—এর জন্য সংশ্লিষ্ট অ্যাড-অনগুলো ইনস্টল করতে হবে।

## বেসিক সেটিংস

এই পেমেন্ট গেটওয়েগুলোর যেকোনোটি Ultimate Multisite পেমেন্ট সেটিংসে গিয়ে কনফিগার করতে পারবেন। এটি পেতে **Ultimate Multisite মেনু > Settings > Payments**-এ যান।

![Ultimate Multisite-এর পেমেন্ট সেটিংস পেজ](/img/config/settings-payment-gateways.png)

পেমেন্ট গেটওয়ে সেটআপ করার আগে, কিছু বেসিক পেমেন্ট সেটিংস দেখে নিন যা আপনি কনফিগার করতে পারবেন:

**Force auto-renew:** এটি নিশ্চিত করে যে ব্যবহারকারীর বেছে নেওয়া বিলিং ফ্রিকোয়েন্সি অনুযায়ী প্রতিটি বিলিং সাইকেলের শেষে পেমেন্ট স্বয়ংক্রিয়ভাবে রিনিউ হবে।

![Force auto-renew টগল সেটিং](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** এই অপশন চালু থাকলে আপনার ক্লায়েন্টকে রেজিস্ট্রেশনের সময় কোনো পেমেন্ট তথ্য দিতে হবে না। ট্রায়াল পিরিয়ড শেষ হলেই কেবল এটি প্রয়োজন হবে।

![Allow trials without payment method টগল](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** এই অপশন দিয়ে ঠিক করতে পারবেন পেমেন্টের পর ইনভয়েস পাঠাতে চান কি না। মনে রাখবেন, ব্যবহারকারীরা তাদের সাবসাইট ড্যাশবোর্ড থেকে পেমেন্ট হিস্ট্রি দেখতে পাবেন। এই অপশনটি Manual Gateway-এর ক্ষেত্রে প্রযোজ্য নয়।

![Send invoice on payment confirmation টগল](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** এখানে আপনি পেমেন্ট রেফারেন্স কোড অথবা সিকোয়েন্সিয়াল নম্বর স্কিম বেছে নিতে পারবেন। ইনভয়েসের জন্য পেমেন্ট রেফারেন্স কোড ব্যবহার করতে চাইলে আলাদা কিছু কনফিগার করতে হবে না। সিকোয়েন্সিয়াল নম্বর স্কিম ব্যবহার করতে চাইলে আপনাকে **next invoice number** (সিস্টেমে পরবর্তী ইনভয়েসের জন্য এই নম্বরটি ব্যবহৃত হবে। প্রতিটি নতুন ইনভয়েস তৈরি হলে এটি এক বাড়ে। আপনি এটি পরিবর্তন করে সেভ করলে ইনভয়েস সিকোয়েন্সিয়াল নম্বর নির্দিষ্ট মানে রিসেট হবে) এবং **invoice number prefix** কনফিগার করতে হবে।

![Invoice numbering scheme সিলেকশন](/img/config/settings-payment-gateways.png)

![সিকোয়েন্সিয়াল ইনভয়েস নম্বর এবং প্রিফিক্স সেটিংস](/img/config/settings-payment-gateways.png)

## গেটওয়েগুলো কোথায় পাবেন:

একই পেজে (**Ultimate Multisite > Settings > Payments**) পেমেন্ট গেটওয়ে সেটআপ করতে পারবেন। **active payment gateways**-এর ঠিক নিচে দেখতে পাবেন: _Stripe_, _Stripe Checkout_, _PayPal_ এবং _Manual_।

![অ্যাক্টিভ পেমেন্ট গেটওয়ের তালিকা](/img/config/settings-payment-gateways.png)

প্রতিটি পেমেন্ট গেটওয়ে সেটআপ করার ধাপে ধাপে গাইড নিয়ে আমাদের আলাদা আর্টিকেল রয়েছে, যা নিচের লিংকগুলোতে পাবেন।

**Stripe গেটওয়ে সেটআপ করা**

**PayPal গেটওয়ে সেটআপ করা**

**Manual payments সেটআপ করা**

এখন, আপনি যদি _WooCommerce_, _GoCardless_ বা _Payfast_ পেমেন্ট গেটওয়ে হিসেবে ব্যবহার করতে চান, তাহলে **তাদের অ্যাড-অনগুলো ইনস্টল এবং কনফিগার করতে হবে**।

### WooCommerce অ্যাড-অন কীভাবে ইনস্টল করবেন:

আমরা জানি যে _Stripe_ এবং _PayPal_ কিছু দেশে পাওয়া যায় না, যা Ultimate Multisite ব্যবহারকারীদের আমাদের প্লাগইন কার্যকরভাবে ব্যবহার করতে বাধা দেয়। তাই আমরা _WooCommerce_ ইন্টিগ্রেট করার জন্য একটি অ্যাড-অন তৈরি করেছি, যা একটি অত্যন্ত জনপ্রিয় ই-কমার্স প্লাগইন। সারা বিশ্বের ডেভেলপাররা এতে বিভিন্ন পেমেন্ট গেটওয়ে ইন্টিগ্রেট করার জন্য অ্যাড-অন তৈরি করেছেন। Ultimate Multisite বিলিং সিস্টেমে ব্যবহারযোগ্য পেমেন্ট গেটওয়ের সংখ্যা বাড়াতে আমরা এই সুবিধাটি কাজে লাগিয়েছি।

_**গুরুত্বপূর্ণ:** Ultimate Multisite: WooCommerce Integration-এর জন্য অন্তত আপনার মূল সাইটে WooCommerce সক্রিয় থাকতে হবে।_

প্রথমে, অ্যাড-অন পেজে যান। **Ultimate Multisite > Settings**-এ গিয়ে এটি পাবেন। সেখানে **Add-ons** টেবিল দেখতে পাবেন। **Check our Add-ons**-এ ক্লিক করুন।

![অ্যাড-অন সেকশনসহ সেটিংস পেজ](/img/config/settings-general.png)

**Check our Add-ons**-এ ক্লিক করলে অ্যাড-অন পেজে রিডাইরেক্ট হবেন। এখানে Ultimate Multisite-এর সব অ্যাড-অন পাবেন। **Ultimate Multisite: WooCommerce Integration** অ্যাড-অনে ক্লিক করুন।

![উপলব্ধ অ্যাড-অনের তালিকাসহ অ্যাড-অন পেজ](/img/config/settings-general.png)

অ্যাড-অনের বিস্তারিত সহ একটি উইন্ডো পপ আপ হবে। শুধু **Install Now**-এ ক্লিক করুন।

![WooCommerce অ্যাড-অন ইনস্টল ডায়ালগ](/img/config/settings-general.png)

ইনস্টলেশন সম্পন্ন হলে প্লাগইন পেজে রিডাইরেক্ট হবেন। এখানে শুধু **Network Activate**-এ ক্লিক করুন এবং WooCommerce অ্যাড-অন আপনার নেটওয়ার্কে সক্রিয় হয়ে যাবে।

![WooCommerce অ্যাড-অন Network Activate করুন](/img/config/settings-general.png)

সক্রিয় করার পর, যদি আপনার ওয়েবসাইটে WooCommerce প্লাগইন ইনস্টল ও সক্রিয় না থাকে, তাহলে একটি রিমাইন্ডার দেখতে পাবেন।

![WooCommerce অ্যাক্টিভেশন রিমাইন্ডার নোটিশ](/img/config/settings-general.png)

WooCommerce Integration অ্যাড-অন সম্পর্কে আরও জানতে, **এখানে ক্লিক করুন**।

### GoCardless অ্যাড-অন কীভাবে ইনস্টল করবেন:

_GoCardless_ অ্যাড-অন ইনস্টল করার ধাপগুলো _WooCommerce_ অ্যাড-অনের মতোই। অ্যাড-অন পেজে গিয়ে **Ultimate Multisite: GoCardless Gateway** অ্যাড-অন সিলেক্ট করুন।

![উপলব্ধ অ্যাড-অনের তালিকাসহ অ্যাড-অন পেজ](/img/config/settings-general.png)

অ্যাড-অন উইন্ডো পপ আপ হবে। **Install Now**-এ ক্লিক করুন।

![GoCardless অ্যাড-অন ইনস্টল ডায়ালগ](/img/config/settings-general.png)

ইনস্টলেশন সম্পন্ন হলে প্লাগইন পেজে রিডাইরেক্ট হবেন। এখানে শুধু **Network Activate**-এ ক্লিক করুন এবং _GoCardless_ অ্যাড-অন আপনার নেটওয়ার্কে সক্রিয় হয়ে যাবে।

![GoCardless অ্যাড-অন Network Activate করুন](/img/config/settings-general.png)

_GoCardless_ গেটওয়ে দিয়ে শুরু করতে, **এই আর্টিকেলটি পড়ুন**।

### Payfast অ্যাড-অন কীভাবে ইনস্টল করবেন:

অ্যাড-অন পেজে গিয়ে **Ultimate Multisite: Payfast Gateway** অ্যাড-অন সিলেক্ট করুন।

![উপলব্ধ অ্যাড-অনের তালিকাসহ অ্যাড-অন পেজ](/img/config/settings-general.png)

অ্যাড-অন উইন্ডো পপ আপ হবে। **Install Now**-এ ক্লিক করুন।

![Payfast অ্যাড-অন ইনস্টল ডায়ালগ](/img/config/settings-general.png)

ইনস্টলেশন সম্পন্ন হলে প্লাগইন পেজে রিডাইরেক্ট হবেন। এখানে শুধু **Network Activate**-এ ক্লিক করুন এবং _Payfast_ অ্যাড-অন আপনার নেটওয়ার্কে সক্রিয় হয়ে যাবে।

![Payfast অ্যাড-অন Network Activate করুন](/img/config/settings-general.png)
