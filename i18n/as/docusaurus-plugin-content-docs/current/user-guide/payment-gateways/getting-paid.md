---
title: পইচা পোৱা
sidebar_position: 15
_i18n_hash: 4d43609c920fa8085a3cea69343ad2fa
---
# পইচা লাভ কৰা (v2)

_**গুৰুত্বপূৰ্ণ টোকা: এই article টো Ultimate Multisiteৰ version 2.x লৈ কথা পাতে।**_

Ultimate Multisite-ত এটা বিল্ট-ইন মেম্বৰশ্বিপ আৰু বিলিং ব্যৱস্থা আছে। আমাৰ বিলিং ব্যৱস্থাটো সক্ৰিয় হ'বলৈ, আমি ই-কমার্সত ব্যৱহৃত আটাইতকৈ সাধাৰণ পেমেন্ট গেটৱেসমূহ ইন্টিগ্রেট কৰিছো। Ultimate Multisite-ৰ ডিফল্ট পেমেন্ট গেটৱেবোৰ হ'ল _Stripe_ , _PayPal_ , আৰু Manual Payment। আপুনি তেওঁলোকৰ নিজ নিজ add-on install কৰি _WooCommerce_ , _GoCardless_ আৰু _Payfast_ ব্যৱহাৰ কৰিও পেমেন্ট গ্ৰহণ কৰিব পাৰে।

## মৌলিক সেটিংছ (Basic Settings)

আপুনি Ultimate Multisite পেমেন্ট সেটিংছৰ অধীনত এই গেটৱেবোৰৰ যিকোনো এটা কনফিগাৰ কৰিব পাৰে। আপুনি **Ultimate Multisite মেনু > Settings > Payments** লৈ গৈ ইয়াক বিচাৰি পাব।

![Ultimate Multisite-ত Payments সেটিংছ পৃষ্ঠা, য'ত Payments প্যানেল দেখা গৈছে](/img/config/payments-settings-page.png)

আপুনি আপোনাৰ পেমেন্ট গেটৱে সেটআপ কৰাৰ আগতে, আপুনি কনফিগাৰ কৰিব পৰা মৌলিক পেমেন্ট সেটিংছসমূহলৈ চমুহে চাব পাৰিব:

**Force auto-renew:** ই নিশ্চিত কৰে যে ব্যৱহাৰকাৰীয়ে যি বিলিং ফ্ৰিকৱেঞ্চি বাছি লৈছে, তাৰ ওপৰত নিৰ্ভৰ কৰি প্ৰতিটো বিলিং চক্ৰৰ শেষত পেমেন্টটো স্বয়ংক্রিয়ভাৱে পুনৰাবৃত্তি হ'ব।

![Payments সেটিংছ পৃষ্ঠাৰ Payments গেটৱেৰত Force Auto-Renew টগল সেটিং](/img/config/payments-force-auto-renew.png)

**Allow trials without payment method:** এই অপচনটো সক্ৰিয় কৰিলে, আপোনাৰ ক্লায়েন্টক ৰেজিষ্ট্ৰেচন প্ৰক্ৰিয়াত কোনো বিত্তীয় তথ্য যোগ কৰিবলগীয়া নহ'ব। এইটো কেৱল ট্রায়াল পইৰিয়ডটো শেষ হোৱাৰ পিছতহে প্ৰয়োজনীয় হ'ব।

![Payments সেটিংছ পৃষ্ঠাৰ Payments গেটৱেৰত Allow Trials Without Payment Method টগল](/img/config/payments-allow-trials.png)

**Send invoice on payment confirmation:** ই আপোনাক পেমেন্ট হোৱাৰ পিছত ইনভয়েছ প্ৰেৰণ কৰিব নে নহ'ব, সেইটো অপচন দিয়ে। মন কৰিব যে ব্যৱহাৰকাৰীসকলে তেওঁলোকৰ subsite dashboard ত তেওঁলোকৰ পেমেন্ট ইতিহাস চাব পাৰিব। এই অপচনটো Manual Gateway-লৈ প্ৰযোজ্য নহয়।

![Payments সেটিংছ পৃষ্ঠাৰ Payments গেটৱেৰত Send Invoice on Payment Confirmation টগল](/img/config/payments-send-invoice.png)

**Invoice numbering scheme:** ইয়াত, আপুনি পেমেন্ট ৰেফৰেন্স কোড (payment reference code) বা ক্ৰম অনুসৰি সংখ্যাৰ ব্যৱস্থা (sequential number scheme) দুটাৰ কোনো এটা বাছি ল'ব পাৰে। যদি আপুনি ইনভয়েছৰ বাবে পেমেন্ট ৰেফৰেন্স কোড ব্যৱহাৰ কৰিবলৈ বাছি লয়, তেন্তে আপুনি কোনো কিছু কনফিগাৰ কৰিবলগীয়া নহ'ব। যদি আপুনি ক্ৰম অনুসৰি সংখ্যাৰ ব্যৱস্থা ব্যৱহাৰ কৰিবলৈ বাছি লয়, তেন্তে আপুনি **next invoice number** (এই সংখ্যাটোৱে ব্যৱস্থাটোত সৃষ্টি হোৱা পৰৱৰ্তী ইনভয়েছৰ বাবে ইনভয়েছ সংখ্যা হিচাপে ব্যৱহাৰ কৰা হ'ব। নতুন ইনভয়েছ সৃষ্টি কৰোঁতে ই প্ৰতিবাৰ এটা বাঢ়ে। আপুনি ইয়াক সলনি কৰি এটা নিৰ্দিষ্ট মানদণ্ডলৈ ইনভয়েছৰ ক্ৰম সংখ্যাটো রিসেট কৰিবলৈ সেভ কৰিব পাৰে) আৰু **invoice number prefix** কনফিগাৰ কৰিব লাগিব।

![Payment Reference Code আৰু Sequential Number অপচন সহ Invoice numbering scheme dropdown](/img/config/payments-invoice-scheme.png)

![Sequential Number বাছি লয় তাৰ সময়ত দেখা যায় এমন Next invoice number আৰু invoice number prefix ফিল্ড](/img/config/payments-invoice-sequential.png)

## গেটৱেবোৰ ক'ত বিচাৰি পাব:

আপুনি একেটা পৃষ্ঠাৰ ওপৰত পেমেন্ট গেটৱেবোৰ সেটআপ কৰিব পাৰে ( **Ultimate Multisite > Settings > Payments**)। **active payment gateways** ত অলপ তলত, আপুনি _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ আৰু _Manual_ দেখা পাব।

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

পেমেন্ট গেটৱে সেটআপ কৰাৰ বাবে আমাৰ প্ৰতিটো পেমেন্ট গেটৱেৰৰ বাবে এটা নিৰ্দিষ্ট article আছে, য'ত আপুনি তলৰ লিংকসমূহত বিচাৰি পাব।

আপুনি পেমেন্টৰ বিৱৰণ চাওঁক আৰু সম্পাদনা কৰিব পাৰে:

![Payment edit interface](/img/admin/payment-edit.png)

ইয়াত পেমেন্ট সম্পাদনা পৃষ্ঠাৰ এটা সম্পূৰ্ণ দৃশ্য দিয়া হৈছে:

![Payment edit full interface](/img/admin/payment-edit-full.png)

পেমেন্ট গেটৱে সেটিংছৰো এটা সম্পূৰ্ণ দৃশ্য ইয়াত দিয়া হৈছে:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe গেটৱে সেটআপ কৰা**

**PayPal গেটৱে সেটআপ কৰা**

**ম্যানুৱেল পেমেন্ট সেটআপ কৰা**

এতিয়া, যদি আপুনি আপোনাৰ পেমেন্ট গেটৱে হিচাপে _WooCommerce_ , _GoCardless_ বা _Payfast_ ব্যৱহাৰ কৰিব বিচাৰে, তেন্তে আপুনি **তেওঁলোকৰ add-ons install আৰু configure কৰিব লাগিব**।

### WooCommerce add-on install কৰাৰ পদ্ধতি:

আমি বুজিছো যে _Stripe_ আৰু _PayPal_ কিছুমান দেশত উপলব্ধ নহয়, যাৰ ফলত Ultimate Multisite ব্যৱহাৰকাৰীসকলে আমাৰ plugin ব্যৱহাৰ কৰাত বাধাৰ সন্মুখীন হ'ব পাৰে। সেয়েহে আমি _WooCommerce_ ইন্টিগ্রেট কৰিবলৈ এটা add-on সৃষ্টি কৰিছো, যি এটা অতি জনপ্ৰিয় ই-কমার্স plugin। বিশ্বৰ বিভিন্ন উন্নয়নকাৰীসকলে ইয়াত বিভিন্ন পেমেন্ট গেটৱে ইন্টিগ্রেট কৰিবলৈ add-on বনাইছে। আমি এই সুযোগ লৈ Ultimate Multisite বিলিং ব্যৱস্থাত ব্যৱহাৰ কৰিব পৰা পেমেন্ট গেটৱেৰসমূহক বঢ়াই তুলিছো।

_**গুৰুত্বপূৰ্ণ:** Ultimate Multisite: WooCommerce Integration ব্যৱহাৰ কৰিবলৈ আপোনাৰ মূল সাইটত (main site) WooCommerce সক্ৰিয় (activated) হোৱাটো প্ৰয়োজনীয়।_

প্ৰথমে, আপুনি add-ons পৃষ্ঠা লৈ যোৱা। আপুনি **Ultimate Multisite > Settings** লৈ গৈ ইয়াক বিচাৰি পাব। আপুনি **Add-ons** টেবুলটো দেখা উচিত। **Check our Add-ons** ওপৰত ক্লিক কৰক।

![Ultimate Multisite Settings sidebar-ত Add-ons টেবুল আৰু Check our Add-ons লিংক](/img/config/settings-addons-table.png)

**Check our Add-ons** ওপৰত ক্লিক কৰাৰ পিছত, আপোনাক add-ons পৃষ্ঠালৈ redirecট কৰা হ'ব। ইয়াত আপুনি Ultimate Multisiteৰ সকলো add-ons বিচাৰি পাব। **Ultimate Multisite: WooCommerce Integration** add-on ওপৰত ক্লিক কৰক।

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

add-on বিৱৰণৰ সৈতে এটা উইন্ডো পপ আউট হ'ব। কেৱল **Install Now** ওপৰত ক্লিক কৰক।

![Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button](/img/addons/addon-install-woocommerce.png)

install কৰা শেষ হোৱাৰ পিছত, আপোনাক plugins পৃষ্ঠালৈ redirecট কৰা হ'ব। ইয়াত, কেৱল **Network Activate** ওপৰত ক্লিক কৰক আৰু WooCommerce add-on টো আপোনাৰ network ত সক্ৰিয় হ'ব।

![Plugins page with the Network Activate link for the WooCommerce Integration add-on](/img/addons/addon-network-activate-woocommerce.png)

সক্ৰিয় কৰাৰ পিছতো, যদি আপোনাৰ ওয়েবসাইটত WooCommerce plugin install আৰু activate হোৱা নাই, তেন্তে আপুনি এটা অনুস্মৰণ (reminder) পাব।

![Admin notice reminding the administrator to install and activate the WooCommerce plugin](/img/addons/addon-woocommerce-reminder.png)

WooCommerce Integration add-onৰ বিষয়ে আৰু জানিবলৈ, **ইয়াত ক্লিক কৰক**।

### GoCardless add-on install কৰাৰ পদ্ধতি:

_GoCardless_ add-on install কৰাৰ পদক্ষেপবোৰ _WooCommerce_ add-onৰ পদক্ষেপবোৰৰ দৰেই। অনুগ্ৰহ কৰি add-ons পৃষ্ঠা লৈ যোৱা আৰু **Ultimate Multisite: GoCardless Gateway** add-on বাছি লওক।

![Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted](/img/addons/addons-page-gocardless.png)

add-on উইন্ডো পপ আউট হ'ব। **Install Now** ওপৰত ক্লিক কৰক।

![Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button](/img/addons/addon-install-gocardless.png)

install কৰা শেষ হোৱাৰ পিছত, আপোনাক plugins পৃষ্ঠালৈ redirecট কৰা হ'ব। ইয়াত, কেৱল **Network Activate** ওপৰত ক্লিক কৰক আৰু _GoCardless_ add-on টো আপোনাৰ network ত সক্ৰিয় হ'ব।

![Plugins page with the Network Activate link for the GoCardless Gateway add-on](/img/addons/addon-network-activate-gocardless.png)

_GoCardless_ গেটৱেৰে কেনেকৈ আৰম্ভ কৰিব লাগে সেয়া জানিবলৈ, **এই article টো পঢ়ক**।

### Payfast add-on install কৰাৰ পদ্ধতি:

add-ons পৃষ্ঠা লৈ যোৱা আৰু **Ultimate Multisite: Payfast Gateway** add-on বাছি লওক।

![Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted](/img/addons/addons-page-payfast.png)

add-on উইন্ডো পপ আউট হ'ব। **Install Now.** ওপৰত ক্লিক কৰক।

![Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button](/img/addons/addon-install-payfast.png)

install কৰা শেষ হোৱাৰ পিছত, আপোনাক plugins পৃষ্ঠালৈ redirecট কৰা হ'ব। ইয়াত, কেৱল **Network Activate** ওপৰত ক্লিক কৰক আৰু _Payfast_ add-on টো আপোনাৰ network ত সক্ৰিয় হ'ব।

![Plugins page with the Network Activate link for the Payfast Gateway add-on](/img/addons/addon-network-activate-payfast.png)
