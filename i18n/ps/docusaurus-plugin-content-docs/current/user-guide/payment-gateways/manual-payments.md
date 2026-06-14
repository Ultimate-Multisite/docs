---
title: د manuāl payment تنظیمول
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# دستی পেমেন্ট সেটআপ করা (v2)

_**গুরুত্বপূর্ণ নোট: এই নিবন্ধটি Ultimate Multisite সংস্করণের ২.x এর জন্য প্রযোজ্য।**_

ম্যানুয়াল পেমেন্ট হলো এমন একটি উপায় যার মাধ্যমে আপনি যদি আপনার ব্যবহারকারীদের জন্য **Stripe** বা **PayPal** উপলব্ধ না থাকে, তবে তাদের অন্য কোনো পেমেন্ট পদ্ধতি অফার করতে পারেন। এটি হতে পারে ওয়্যার ট্রান্সফার বা ব্যাংক ট্রান্সফার অথবা আপনার ব্যবহারকারীদের স্থানীয়ভাবে উপলব্ধ যেকোনো পেমেন্ট পদ্ধতি।

## ম্যানুয়াল পেমেন্ট কিভাবে চালু করবেন

ম্যানুয়াল পেমেন্ট সেটআপ করা খুব সহজ। আপনাকে শুধু পেমেন্ট গেটওয়েগুলির অধীনে এটি চালু করতে হবে এবং ব্যবহারকারীকে কীভাবে অর্থ পাঠাতে হবে তার বিস্তারিত নির্দেশাবলী দিতে হবে।

প্রথমে, **Ultimate Multisite > Settings > Payments** এ যান। **Payment Gateways** এর নিচে, **Manual** অপশনটি অন (on) করুন। আপনি দেখতে পাবেন যে আপনার জন্য একটি **Payment Instructions** বক্স দেখা যাবে।

এই বক্সে সেই তথ্য যোগ করুন যা আপনার গ্রাহককে পেমেন্ট করার জন্য প্রয়োজন হবে। সেখানে আপনার ব্যাংক অ্যাকাউন্টের বিবরণ এবং আপনার ইমেল অন্তর্ভুক্ত করতে পারেন যাতে গ্রাহক আপনাকে পেমেন্টের নিশ্চিতকরণ পাঠাতে পারে, উদাহরণস্বরূপ।

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

এখানে ম্যানুয়াল গেটওয়ে সেটিংস ইন্টারফেসটি দেখুন:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

সেটআপ করার পরে, শুধু **Save Settings** এ ক্লিক করুন এবং কাজ শেষ। যখন ব্যবহারকারীরা আপনার নেটওয়ার্কে নিবন্ধন করবে, তখন তারা একটি বার্তা দেখতে পাবে যে তারা কেনাকাটা সম্পন্ন করার জন্য আপনার কাছ থেকে নির্দেশাবলী পাবে।

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

এবং তারা আপনার **Thank You** পেজেও আপনার পেমেন্ট নির্দেশাবলী সহ একটি বার্তা পাবে।

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## ম্যানুয়াল পেমেন্ট নিশ্চিত করা

د manuall payment (لکهي لوړی) کی تایید لپاره، لاسو (left bar) کې **Payments** منيو ته ورچوئ. اتر ته تاسو کولی شئ د خپل شبکه په ټولولو او د دوی جزئیاتو، په ګداار **status** سره وګورئ. یو manuall payment هم تر هغه وخته پورې **Pending** status لري تر هغه چې تاسو یې manuall रूपमा بدل نه کړئ.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

د **reference code** (حواله کوډ) باندې کلیک गरेर د لوړی صفحه ته ورسوئ. په دې صفحه کې ستاسو د Pending payment ټول جزئیات شتون لري، لکه reference ID، محصولات، وختونه او نور.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

په درته ستونل کې، تاسو کولی شئ د لوړی status بدل کړئ. دا Status ته **Completed** (تام پوره شوې) بدولو او **Activate Membership** (مجموعه فعال کړئ) خپله انتخاب toggling کولو له لارې ستاسو کارندوي سایت فعال کیږي او دویको सदस्यता فعال کیږي.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
