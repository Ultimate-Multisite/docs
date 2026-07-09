---
title: পেমেন্ট গ্রহণ
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# পেমেন্ট গ্রহণ (v2)

_**গুরুত্বপূর্ণ নোট: এই নিবন্ধটি Ultimate Multisite সংস্করণ 2.x সম্পর্কে।**_

Ultimate Multisite-এ বিল্ট-ইন সদস্যপদ ও বিলিং সিস্টেম আছে। আমাদের বিলিং সিস্টেম কাজ করার জন্য, আমরা ই-কমার্সে ব্যবহৃত সবচেয়ে প্রচলিত payment gatewayগুলো যুক্ত করেছি। Ultimate Multisite-এর ডিফল্ট payment gateway হলো _Stripe_ , _PayPal_ , এবং Manual Payment। আপনি তাদের নিজ নিজ add-on ইনস্টল করে পেমেন্ট গ্রহণের জন্য _WooCommerce_ , _GoCardless_ এবং _Payfast_ ব্যবহার করতে পারেন।

## প্রাথমিক সেটিংস

Ultimate Multisite payment settings-এর অধীনে আপনি এই payment gatewayগুলোর যেকোনোটি কনফিগার করতে পারেন। এটি পেতে **Ultimate Multisite menu > Settings > Payments**-এ যান।

![Ultimate Multisite-এ Payments settings page, যেখানে Payments panel দেখা যাচ্ছে](/img/config/payments-settings-page.png)

আপনার payment gateway সেটআপ করার আগে, কনফিগার করা যায় এমন প্রাথমিক payment settingsগুলো দেখে নিন:

**স্বয়ংক্রিয় নবায়ন বাধ্যতামূলক করু** **ন:** ব্যবহারকারী যে billing frequency নির্বাচন করেছেন, তার ভিত্তিতে প্রতিটি billing cycle শেষে পেমেন্ট স্বয়ংক্রিয়ভাবে পুনরাবৃত্ত হবে—এটি নিশ্চিত করবে।

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 auto-renewal চালু থাকা recurring membership সংরক্ষণের আগে সক্রিয় gateway-তে পুনর্ব্যবহারযোগ্য renewal credential আছে কি না তা পরীক্ষা করে। renewal credential হতে পারে gateway subscription, billing agreement, সংরক্ষিত vault token, অথবা সমতুল্য পুনর্ব্যবহারযোগ্য payment method। gateway যদি জানায় যে ব্যবহারযোগ্য কোনো credential নেই, Ultimate Multisite membership সংরক্ষণ করে, কিন্তু auto-renewal বন্ধ করে দেয় এবং missing-credential state রেকর্ড করে, যাতে administrator বা support flow renewal date-এর আগে customer-কে payment পুনরায় authorize করতে বলতে পারে।

এতে এমন পরিস্থিতি এড়ানো যায় যেখানে membership দেখে মনে হয় auto-renew হবে, কিন্তু gateway কেবল one-time payment সংগ্রহ করতে পারে। Gateway add-onগুলোর নিশ্চিত করা উচিত যে recurring checkout পুনর্ব্যবহারযোগ্য credential সংরক্ষণ করছে, বিশেষ করে যখন gateway একসঙ্গে one-time capture এবং vaulted/subscription payment mode সমর্থন করে।

**পেমেন্ট** **method ছাড়া trial অনুমোদন করুন:** এই option চালু থাকলে registration process চলাকালীন আপনার client-কে কোনো আর্থিক তথ্য যোগ করতে হবে না। trial period শেষ হলে তবেই এটি প্রয়োজন হবে।

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**পেমেন্ট নিশ্চিত হলে invoice পাঠান:** পেমেন্টের পরে invoice পাঠাবেন কি না, তা বেছে নেওয়ার option এটি দেয়। মনে রাখবেন, ব্যবহারকারীরা তাদের subsite dashboard-এর অধীনে payment history দেখতে পারবেন। এই option Manual Gateway-এর ক্ষেত্রে প্রযোজ্য নয়।

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoice numbering scheme:** এখানে আপনি payment reference code অথবা sequential number scheme নির্বাচন করতে পারেন। আপনি যদি আপনার invoice-এর জন্য payment reference code ব্যবহার করতে চান, তাহলে কিছু কনফিগার করার দরকার নেই। আপনি যদি sequential number scheme ব্যবহার করতে চান, তাহলে **next invoice number** (সিস্টেমে তৈরি হওয়া পরবর্তী invoice-এর invoice number হিসেবে এই number ব্যবহার করা হবে। প্রতিবার নতুন invoice তৈরি হলে এটি এক করে বাড়ে। invoice sequential number নির্দিষ্ট value-তে reset করতে আপনি এটি পরিবর্তন করে save করতে পারেন) এবং **invoice number prefix** কনফিগার করতে হবে।

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Gateway কোথায় পাবেন:

আপনি একই page-এ payment gateway সেটআপ করতে পারেন ( **Ultimate Multisite > Settings > Payments**)। **active payment gateways**-এর ঠিক নিচে আপনি দেখতে পাবেন: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ এবং _Manual_।

![Active Payment Gateways section, যেখানে Stripe, Stripe Checkout, PayPal এবং Manual তালিকাভুক্ত](/img/config/payments-active-gateways.png)

প্রতিটি payment gateway-এর জন্য আমাদের আলাদা নিবন্ধ আছে, যা সেটআপ করার ধাপগুলোতে আপনাকে নির্দেশনা দেবে। নিচের linkগুলোতে সেগুলো পাবেন।

আপনি payment details দেখতে ও edit করতে পারেন:

![Payment edit interface](/img/admin/payment-edit.png)

এখানে payment edit page-এর পূর্ণ view দেওয়া হলো:

![Payment edit full interface](/img/admin/payment-edit-full.png)

এছাড়াও payment gateway settings-এর পূর্ণ view এখানে দেওয়া হলো:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe gateway সেটআপ করা**

**PayPal gateway সেটআপ করা**** **

**Manual payment সেটআপ করা**

এখন, আপনি যদি আপনার payment gateway হিসেবে _WooCommerce_ , _GoCardless_ অথবা _Payfast_ ব্যবহার করতে চান, তাহলে আপনাকে **তাদের add-on ইনস্টল ও কনফিগার করতে হবে**।

### WooCommerce add-on কীভাবে ইনস্টল করবেন:

আমরা বুঝি যে _Stripe_ এবং _PayPal_ কিছু দেশে উপলভ্য নয়, যা Ultimate Multisite ব্যবহারকারীদের কার্যকরভাবে আমাদের plugin ব্যবহার সীমিত বা বাধাগ্রস্ত করে। তাই আমরা _WooCommerce,_ যুক্ত করার জন্য একটি add-on তৈরি করেছি, যা খুব জনপ্রিয় একটি e-commerce plugin। সারা বিশ্বের developerরা এতে বিভিন্ন payment gateway যুক্ত করার জন্য add-on তৈরি করেছেন। Ultimate Multisite billing system-এর সঙ্গে ব্যবহারযোগ্য payment gateway বাড়াতে আমরা এই সুযোগটি কাজে লাগিয়েছি।

_**গুরুত্বপূর্ণ:** Ultimate Multisite: WooCommerce Integration-এর জন্য অন্তত আপনার main site-এ WooCommerce সক্রিয় থাকতে হবে।_

প্রথমে add-ons page-এ যান। এটি পেতে **Ultimate Multisite > Settings**-এ যান। সেখানে **Add-ons** table দেখতে পাবেন। **Check our Add-ons**-এ click করুন।

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Check our Add-ons**-এ click করার পরে, আপনাকে add-ons page-এ নিয়ে যাওয়া হবে। এখানে আপনি সব Ultimate Multisite add-on পাবেন। **Ultimate Multisite: WooCommerce Integration** add-on-এ click করুন।

![Add-ons page, যেখানে WooCommerce Integration-সহ Ultimate Multisite add-onগুলো তালিকাভুক্ত](/img/addons/addons-page.png)

একটি উইন্ডোতে অ্যাড-অনের বিবরণ দেখা যাবে। শুধু **এখনই ইনস্টল করুন**-এ ক্লিক করুন।

<!-- স্ক্রিনশট অনুপলব্ধ: এখনই ইনস্টল করুন বোতামসহ Ultimate Multisite WooCommerce Integration অ্যাড-অনের বিবরণ ডায়ালগ -->

ইনস্টলেশন শেষ হলে আপনাকে প্লাগইন পৃষ্ঠায় নিয়ে যাওয়া হবে। এখানে শুধু **নেটওয়ার্কে সক্রিয় করুন**-এ ক্লিক করুন, এবং WooCommerce অ্যাড-অনটি আপনার নেটওয়ার্কে সক্রিয় হয়ে যাবে।

<!-- স্ক্রিনশট অনুপলব্ধ: WooCommerce Integration অ্যাড-অনের জন্য নেটওয়ার্কে সক্রিয় করুন লিংকসহ প্লাগইন পৃষ্ঠা -->

এটি সক্রিয় করার পরও যদি আপনার ওয়েবসাইটে WooCommerce প্লাগইন ইনস্টল ও সক্রিয় না থাকে, তাহলে আপনি একটি স্মারক বার্তা পাবেন।

<!-- স্ক্রিনশট অনুপলব্ধ: WooCommerce প্লাগইন ইনস্টল ও সক্রিয় করতে প্রশাসককে স্মরণ করিয়ে দেওয়া অ্যাডমিন নোটিশ -->

WooCommerce Integration অ্যাড-অন সম্পর্কে আরও পড়তে, **এখানে ক্লিক করুন**।

### GoCardless অ্যাড-অন কীভাবে ইনস্টল করবেন:

_GoCardless_ অ্যাড-অন ইনস্টল করার ধাপগুলো প্রায় _WooCommerce_ অ্যাড-অনের মতোই। অনুগ্রহ করে অ্যাড-অন পৃষ্ঠায় যান এবং **Ultimate Multisite: GoCardless Gateway** অ্যাড-অন নির্বাচন করুন।

<!-- স্ক্রিনশট অনুপলব্ধ: Ultimate Multisite GoCardless Gateway অ্যাড-অন হাইলাইট করা অ্যাড-অন পৃষ্ঠা -->

অ্যাড-অন উইন্ডোটি দেখা যাবে। **এখনই ইনস্টল করুন**-এ ক্লিক করুন।

<!-- স্ক্রিনশট অনুপলব্ধ: এখনই ইনস্টল করুন বোতামসহ Ultimate Multisite GoCardless Gateway অ্যাড-অনের বিবরণ ডায়ালগ -->

ইনস্টলেশন শেষ হলে আপনাকে প্লাগইন পৃষ্ঠায় নিয়ে যাওয়া হবে। এখানে শুধু **নেটওয়ার্কে সক্রিয় করুন**-এ ক্লিক করুন, এবং _GoCardless_ অ্যাড-অনটি আপনার নেটওয়ার্কে সক্রিয় হয়ে যাবে।

<!-- স্ক্রিনশট অনুপলব্ধ: GoCardless Gateway অ্যাড-অনের জন্য নেটওয়ার্কে সক্রিয় করুন লিংকসহ প্লাগইন পৃষ্ঠা -->

_GoCardless_ gateway দিয়ে কীভাবে শুরু করবেন তা জানতে, **এই নিবন্ধটি পড়ুন**।

### Payfast অ্যাড-অন কীভাবে ইনস্টল করবেন:

অ্যাড-অন পৃষ্ঠায় যান এবং **Ultimate Multisite: Payfast Gateway** অ্যাড-অন নির্বাচন করুন।

<!-- স্ক্রিনশট অনুপলব্ধ: Ultimate Multisite Payfast Gateway অ্যাড-অন হাইলাইট করা অ্যাড-অন পৃষ্ঠা -->

অ্যাড-অন উইন্ডোটি দেখা যাবে। **এখনই ইনস্টল করুন।**-এ ক্লিক করুন।

<!-- স্ক্রিনশট অনুপলব্ধ: এখনই ইনস্টল করুন বোতামসহ Ultimate Multisite Payfast Gateway অ্যাড-অনের বিবরণ ডায়ালগ -->

ইনস্টলেশন শেষ হলে আপনাকে প্লাগইন পৃষ্ঠায় নিয়ে যাওয়া হবে। এখানে শুধু **নেটওয়ার্কে সক্রিয় করুন**-এ ক্লিক করুন, এবং _Payfast_ অ্যাড-অনটি আপনার নেটওয়ার্কে সক্রিয় হয়ে যাবে।

<!-- স্ক্রিনশট অনুপলব্ধ: Payfast Gateway অ্যাড-অনের জন্য নেটওয়ার্কে সক্রিয় করুন লিংকসহ প্লাগইন পৃষ্ঠা -->
