---
title: ଅନୁଦାନ ମିଳିବା
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# డబ్బు பெறுதல் (v2)

_**গুরুত্বপূর্ণ দ্রষ্টব্য: এই নিবন্ধটি Ultimate Multisite ভার্সন ২.x এর জন্য প্রযোজ্য।**_

Ultimate Multisite-এ সদস্যপদ এবং বিলিংয়ের একটি নিজস্ব ব্যবস্থা আছে। আমাদের বিলিং সিস্টেম যাতে কাজ করতে পারে তার জন্য, আমরা ই-কমার্সে সবচেয়ে বেশি ব্যবহৃত পেমেন্ট গেটওয়েগুলো যুক্ত করেছি। Ultimate Multisite-এর ডিফল্ট পেমেন্ট গেটওয়েগুলি হলো _Stripe_, _PayPal_ এবং ম্যানুয়াল পেমেন্ট। আপনি তাদের নিজ নিজ অ্যাড-অন ইনস্টল করে _WooCommerce_, _GoCardless_ এবং _Payfast_ ব্যবহার করেও পেমেন্ট গ্রহণ করতে পারেন।

## প্রাথমিক সেটিংস

আপনি Ultimate Multisite-এর পেমেন্ট সেটিংসে এই গেটওয়েগুলোর যেকোনো একটি কনফিগার করতে পারবেন। এটি খুঁজে পেতে **Ultimate Multisite মেনু > Settings > Payments** এ যেতে পারেন।

![Ultimate Multisite-এ পেমেন্ট সেটিংস পেজ যেখানে Payments প্যানেল দেখানো হয়েছে](/img/config/payments-settings-page.png)

আপনার পেমেন্ট গেটওয়ে সেটআপ করার আগে, আপনি যে প্রাথমিক পেমেন্ট সেটিংসগুলো কনফিগার করতে পারবেন তা দেখে নিন:

**Force auto-renew w:** এটি নিশ্চিত করবে যে ব্যবহারকারী নির্বাচিত বিলিং ফ্রিকোয়েন্সির উপর নির্ভর করে প্রতিটি বিলিং চক্রের শেষে পেমেন্ট স্বয়ংক্রিয়ভাবে পুনরাবৃত্তি হবে।

<!-- Screenshot unavailable: Payments settings page-এ Force Auto-Renew টগল সেটিংস -->

Ultimate Multisite v2.13.0 পরীক্ষা করে দেখে যে সক্রিয় গেটওয়েতে একটি পুনঃব্যবহারযোগ্য নবায়ন প্রমাণ (reusable renewal credential) আছে কিনা, তারপর স্বয়ংক্রিয় নবায়ন সক্ষম রেখে একটি পুনরাবৃত্ত সদস্যপদ সংরক্ষণ করে। একটি পুনঃব্যবহারযোগ্য নবায়ন প্রমাণ হতে পারে একটি গেটওয়ে সাবস্ক্রিপশন, বিলিং চুক্তি, সেভড ভল্ট টোকেন বা এর সমতুল্য পুনঃব্যবহারযোগ্য পেমেন্ট পদ্ধতি। যদি গেটওয়ে রিপোর্ট করে যে কোনো ব্যবহারযোগ্য প্রমাণ নেই, তবে Ultimate Multisite সদস্যপদটি সংরক্ষণ করবে কিন্তু স্বয়ংক্রিয় নবায়ন বন্ধ করে দেবে এবং অনুপস্থিত প্রমাণের অবস্থা রেকর্ড করবে যাতে অ্যাডমিনিস্ট্রেটর বা সাপোর্ট ফ্লো গ্রাহককে নবায়নের তারিখের আগে পুনরায় অনুমোদন করতে বলতে পারে।

ଏହା ଏକ ମେମ୍ବରସିପ୍ (membership) ଆଟୋ-ରିନୁଅ (auto-renew) ହେବାକୁ ଦେଖାଉଥିବା ସମୟରେ ବ୍ୟାପାରଗତ ଗେଟୱେୟାର (gateway) କେବଳ ଏକଥର ପଇସା ହିସାବ କରିପାରିବାରେ ରୋକିଦେବ। ଯେତେବେଳେ ଗେଟୱେୟାରରେ ଏକଥର ପଇସା ଏବଂ ବାଉର୍ଟିଡ୍/ସବସ୍କ୍ରିପ୍ସନ୍ (subscription) ପଇସା—ଏଭଳି ଦୁଇ ପ୍ରକାର ମୋଡ୍ ସମସ୍ତ ସମର୍ଥନ କରେ—ସେତେବେଳେ ଗେଟୱେୟାର ଅପରେସନ୍ଗ୍‌କୁ ଏକ ବ୍ୟବହାରୀ (reusable) କ୍ରେଡେନସିଆଲ୍ (credential) ସଞ୍ଚାର କରିବା ଆବଶ୍ୟକ।

**ଅପେକ୍ଷା ପାଇଁ ମଧ୍ୟ ପଇସା ପ୍ରଣାଳୀ ଅନୁମତି ଦିଅନ୍ତୁ (Allow trials without payment)** **ମେଥଡ୍:** ଏହି ବିକଳ୍ପଟି ଖୋଲିଲେ, ଆପଣଙ୍କ କ୍ଲାଇଏଣ୍ଟକୁ ନିଜର రిజిଷ୍ଟ୍ରେସନ୍ ପ୍ରକ୍ରିୟାରେ କୌଣସି ଆର୍ଥିକ ସୂଚନା ଦେବାକୁ ପଡ଼ିବ ନାହିଁ। ଏହା କେବଳ ଟ୍ରାଏଲ୍ ପରିଅଧିକାର ଶେଷ ହେବା ପରେ ଆବଶ୍ୟକ ହେବ।

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**ପଇସା ପ୍ରମାଣିକତା ସୁନିଶ୍ଚିତ କରିବା ପରେ ଇନଭଏସ୍ (Send invoice on payment confirmation):** ଏହା ଆପଣଙ୍କୁ ପଇସା ଦେବା ପରେ ଇନଭଏସ୍ ପଠାଇବାର ଅଧିକାର ମିଳିବ କି ନାହିଁ, ସେ ବିଷୟରେ ବାଛିବାର ବିକଳ୍ପ ଦିଏ। ଲୋକମାନେ ନିଜର ପଇସା ଇତିହାସ (payment history) ନିଜ ସବସାଇଟ୍ ଡାଶବୋର୍ଡରେ ଦେଖିପାରିବେ। ଏହି ବିକଳ୍ପଟି ମ୍ୟାନୁଆଲ୍ ଗେଟୱେୟାର (Manual Gateway) ପାଇଁ ପ୍ରଯୁଜ୍ୟ ନୁହେଁ।

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**ଇନଭଏସ୍ ନମ୍ବରୀଂ ସ୍କିମ୍ (Invoice numbering scheme):** ଏଠାରେ, ଆପଣ କିଛି ପଇସା ରେଫରେନ୍ସ କୋଡ୍ ବା ଏକ ଅନୁମୋଚିତ ସଂଖ୍ୟା ସିମ୍ (sequential number scheme) ମଧ୍ୟରୁ ଗୋଟିଏ ବାଛିପାରିବେ। ଯଦି ଆପଣ ଆପଣଙ୍କ ଇନଭଏସ୍ ପାଇଁ ପଇସା ରେଫରେନ୍ସ କୋଡ୍ ବ୍ୟବହାର କରିବାକୁ ଚାହାଁନ୍ତି, ତେବେ ଆପଣ କୌଣସି ବିକଳ୍ପ ସେଟ୍ କରିବାର ଆବଶ୍ୟକ ନୁହେଁ। ଯଦି ଆପଣ ଏକ ଅନୁମୋଚିତ ସଂଖ୍ୟା ସିମ୍ ବ୍ୟବହାର କରିବାକୁ ଚାହାଁନ୍ତି, ତେବେ ଆପଣଙ୍କୁ **ପରବର୍ତ୍ତୀ ଇନଭଏସ୍ ନମ୍ବର** (This number will be used as the invoice number for the next invoice generated on the system. It is incremented by one every time a new invoice is created. You can change it and save it to reset the invoice sequential number to a specific value) ଏବଂ **ଇନଭଏସ୍ ନମ୍ବର ପ୍ରିଫିକ୍ସ** (invoice number prefix) ସେଟ୍ କରିବାକୁ ପଡ଼ିବ।

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## গেটওয়েগুলো কোথায় পাবেন:

আপনি একই পেজে পেমেন্ট গেটওয়ে সেটআপ করতে পারেন (**Ultimate Multisite > Settings > Payments**)। **active payment gateways** এর ঠিক নিচে আপনি দেখতে পাবেন: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ এবং _Manual_।

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

প্রতিটি পেমেন্ট গেটওয়ের জন্য আমাদের একটি আলাদা আর্টিকেল আছে যা আপনাকে সেটি সেটআপ করার ধাপগুলো বুঝতে সাহায্য করবে। আপনি নিচের লিঙ্কগুলোতে সেগুলো খুঁজে পাবেন।

আপনি পেমেন্টের বিবরণ দেখতে এবং এডিট করতে পারেন:

![Payment edit interface](/img/admin/payment-edit.png)

পেমেন্ট এডিট পেজের সম্পূর্ণ ভিউ এখানে দেখুন:

![Payment edit full interface](/img/admin/payment-edit-full.png)

পেমেন্ট গেটওয়ে সেটিংসের সম্পূর্ণ ভিউটিও এখানে আছে:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe গেটওয়ে সেটআপ করা**

**PayPal গেটওয়ে সেটআপ করা**** **

**ম্যানুয়াল পেমেন্ট সেটআপ করা**

এখন, আপনি যদি _WooCommerce_ , _GoCardless_ বা _Payfast_ কে আপনার পেমেন্ট গেটওয়ে হিসেবে ব্যবহার করতে চান, তবে আপনাকে তাদের অ্যাড-অনগুলো **ইনস্টল এবং কনফিগার** করতে হবে।

### WooCommerce অ্যাড-অন কিভাবে ইনস্টল করবেন:

আমরা বুঝতে পারছি যে কিছু দেশে _Stripe_ এবং _PayPal_ পাওয়া যায় না যা Ultimate Multisite ব্যবহারকারীদের আমাদের প্লাগইন কার্যকরভাবে ব্যবহার করতে বাধা দেয় বা সীমিত করে। তাই আমরা একটি অ্যাড-অন তৈরি করেছি যা _WooCommerce_-এর সাথে ইন্টিগ্রেট করে, যা একটি খুব জনপ্রিয় ই-কমার্স প্লাগইন। সারা বিশ্বের ডেভেলপাররা এটিকে বিভিন্ন পেমেন্ট গেটওয়ের সাথে যুক্ত করার জন্য অ্যাড-অন তৈরি করেছেন। আমরা এর সুবিধা নিয়ে Ultimate Multisite বিলিং সিস্টেমে আপনি যে পেমেন্ট গেটওয়েগুলো ব্যবহার করতে পারবেন তা প্রসারিত করেছি।

_**ମହତ୍ତ୍ୱପୂର୍ଣ୍ଣ:** Ultimate Multisite: ଆପଣଙ୍କ ମୁଖ୍ୟ ସାଇଟ୍‌ରେ WooCommerce କୁ ଅତିକ୍ରିତ (activated) କରିବା ଆବଶ୍ୟକ, ଯାହାଦ୍ୱାରା Ultimate Multisite-ର WooCommerce Integration ବ୍ୟବହାର କରିବାକୁ ପାଏ._

ପ୍ରଥମେ, ଦୟାକରି add-ons page ରେ ଯାଆନ୍ତୁ। ଏହାକୁ **Ultimate Multisite > Settings** ଯାଇ ମିଳିବ। ଆପଣ **Add-ons** ଟେବଲ୍ଟି ଦେଖିପାରିବେ। **Check our Add-ons** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

<!-- Screenshot unavailable: Ultimate Multisite Settings sidebar ରେ Add-ons table ଏବଂ Check our Add-ons ଲिंक ସହିତ Add-ons ଟେବଲ୍ -->

**Check our Add-ons** ଉପରେ କ୍ଲିକ୍ କରିବା ପରେ, ଆପଣ add-ons page ରେ ଯିବେ। ଏଠାରେ ଆପଣ Ultimate Multisite ର ସମସ୍ତ add-on ଟି ଦେଖିପାରିବେ। **Ultimate Multisite: WooCommerce Integration** add-on ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

![Ultimate Multisite add-ons page ଯେଉଁଥିରେ WooCommerce Integration ସହିତ Ultimate Multisite add-ons ଦର୍ଶାଯାଇଛି](/img/addons/addons-page.png)

ଏକ ବିନ୍ଦୋ (window) ଖୋଲିବ, ଯେଉଁଥିରେ add-on ର ବିବରଣୀ ଦେଖାଯିବ। କେବଳ **Install Now** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog ରେ Install Now ବଟନ୍ -->

ଇନଷ୍ଟଲେସନ୍ ସରିଗଲା ପରେ, ଆପଣ plugins page ରେ ଯାଇଥିବେ। ଏଠାରେ କେବଳ **Network Activate** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ, ଏବଂ WooCommerce add-on ଆପଣଙ୍କ ନେଟୱାର୍କରେ ଅତିକ୍ରିତ ହୋଇଯିବ।

<!-- Screenshot unavailable: WooCommerce Integration add-on ପାଇଁ Network Activate ଲिंक ସହିତ Plugins page -->

ଏହାକୁ କ୍ଲିକ୍ କରିବା ପରେ, ଯଦି ଆପଣଙ୍କର ୱେବସାଇଟ୍‌ରେ ଆଜି ବି WooCommerce plugin install ଓ activate ହୋଇନାହିଁ, ତେବେ ଆପଣଙ୍କୁ ଏକ ସମୟରେ ରିମାଇଣ୍ଡ ମିଳିବ।

<!-- Screenshot unavailable: Administrator କୁ WooCommerce plugin install ଓ activate କରିବାକୁ ରିମାଇଣ୍ଡ ଦେଉଥିବା Admin notice -->

WooCommerce Integration add-on ବିଷୟରେ ଆହୁରି ଜାଣିବା ପାଇଁ, **ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ**।

### GoCardless add-on କିପରି install କରିବ:

_GoCardless_ add-ଅଡଉନ (add-on) ଇନଷ୍ଟଲ୍ କରିବାର ପଦକ୍ଷେପଗୁଡ଼ିକ _WooCommerce_ ଅଡଉନ ସହିତ ବହୁତ ସମାନ। ଆପଣ add-ons page ରେ ଯାଇ **Ultimate Multisite: GoCardless Gateway** ଅଡଉନଟିକୁ ଚୟନ କରନ୍ତୁ।

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on highlighted with the Add-ons page -->

ଅଡଉନର ୱିଣ୍ഡോ୍ ଖୋଲିବ। **Install Now** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

ଇନଷ୍ଟଲ୍ କରିବା ପରେ, ଆପଣ plugins page ରେ ରିଡିରେକ୍ଟ ହେବେ। ଏଠାରେ, କେବଳ **Network Activate** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ଏବଂ _GoCardless_ ଅଡଉନଟି ଆପଣଙ୍କ ନେଟୱାର୍କରେ ସକ୍ରିୟ (activated) ହୋଇଯିବ।

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

_GoCardless_ ଗେଟୱେୟାର ସହିତ କିପରି ଆରମ୍ଭ କରିବାକୁ ହୁଏ, ଜାଣିବା ପାଇଁ **ଏହି ଲେଖାଟି ପଢନ୍ତୁ**।

### Payfast ଅଡଉନଟି କିପରି ଇନଷ୍ଟଲ୍ କରିବେ:

add-ons page ରେ ଯାଇ **Ultimate Multisite: Payfast Gateway** ଅଡଉନଟିକୁ ଚୟନ କରନ୍ତୁ।

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on highlighted with the Add-ons page -->

ଅଡଉନର ୱିଣ୍ഡോ୍ ଖୋଲିବ। **Install Now** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

ଇନଷ୍ଟଲ୍ କରିବା ପରେ, ଆପଣ plugins page ରେ ରିଡିରେକ୍ଟ ହେବେ। ଏଠାରେ, କେବଳ **Network Activate** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ଏବଂ _Payfast_ ଅଡଉନଟି ଆପଣଙ୍କ ନେଟୱାର୍କରେ ସକ୍ରିୟ (activated) ହୋଇଯିବ।
