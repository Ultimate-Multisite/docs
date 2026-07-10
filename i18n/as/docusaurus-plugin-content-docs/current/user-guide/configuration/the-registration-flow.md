---
title: নাম লেখাত লোৱাৰ প্ৰক্ৰিয়া
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# The Registration Flow (v2) {#the-registration-flow-v2}

_**গুৰুত্বপূৰ্ণ টোকা: এই article টো Ultimate Multisiteৰ version 2.x লৈ কথা পাতে।**_

আপোনাৰ নেটৱৰ্কত ব্যৱমূহ বিভিন্ন ধৰণেৰে নাম লেখাব পাৰে। তেওঁলোকে আপোনাৰ registration form ব্যৱহাৰ কৰিব পাৰে বা এটা আগতে বাছনি কৰা plan-লৈ এটা shareable link ব্যৱহাৰ কৰিব পাৰে। ইয়াত আমি দেখুৱাম যে আপোনাৰ ग्राहकসকলে উপলব্ধ পথসমূহ ব্যৱহাৰ কৰি আপোনাৰ নেটৱৰ্কত কেনেকৈ নাম লেখাব পাৰে আৰু তেওঁলোকে নাম লেখোৱাৰ পিছত কি কি হ'ব।

## Using the Registration Form: {#using-the-registration-form}

এইটো হৈছে সাধাৰণ নাম লেখাওঁ প্ৰক্ৰিয়া। আপুনি এটা **checkout form** লৈ এটা registration page সৃষ্টি কৰে আৰু এই ঠাইখন হৈছে য'ত আপোনাৰ ग्राहकসকলে আপোনাৰ নেটৱৰ্কত নাম লেখাবলৈ আৰু এটা plan-ত সাবস্ক্রাইব কৰিবলৈ যাব। যদি আপুনি বিচাৰে তেন্তে আপুনি একাধিক registration page থাকিব পাৰে, প্ৰত্যেকটোতে এটা বেলেগ registration form থাকিব পাৰে।

নাম লেখাওঁৰ বাবে ডিফল্ট page হৈছে [_**yourdomain.com/register**_](http://yourdomain.com/register), কিন্তু আপুনি **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** ত যিকোনো সময়ত ইয়াক সলনি কৰিব পাৰে।

এজন ব্যৱমিয়ে আপোনাৰ registration page লৈ গ'লে (সাধাৰণতে এটা **Sign in** বা **Buy now** বাটনত ক্লিক কৰি), তেওঁলোকে তাত আপোনাৰ registration form দেখিব।

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

ইয়াত checkout form-টো কেনেকৈ দেখায় তাৰ এটা উদাহৰণ:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

তেওঁলোকক কেৱল বাধ্যতামূলক ফিল্ডসমূহ—ইমেইল, username, password, আদি—পূৰণ কৰিব লাগিব আৰু plan-টোৰ বাবে ধন পৰিশোধ কৰিব লাগিব, অথবা যদি তেওঁলোকে কোনো free plan বা কোনো পেমেন্ট তথ্য নোহোৱা trial period-ৰ লগত কোনো paid plan-ৰ বাবে নাম লেখাই থাকে তেন্তে তেওঁলোকৰ ইমেইল ঠিকনা নিশ্চিত কৰিব লাগিব।

"Thank you" page-ত, তেওঁলোকে এটা বাৰ্তা দেখিব যে তেওঁলোকক তেওঁলোকৰ ইমেইল ঠিকনা নিশ্চিত কৰিব লাগিব নে তেওঁলোকৰ website ইতিমধ্যে active হৈ আছে আৰু তেওঁলোকে ব্যৱহাৰ কৰিবলৈ আৰম্ভ কৰিব পাৰে।

![Thank You page after registration](/img/frontend/registration-thank-you.png)

যদি ইমেইল ঠিকনা নিশ্চিত কৰাটো প্ৰয়োজনীয় হয়, তেন্তে তেওঁলোকে তেওঁলোকৰ ইমেইল ইনবক্সলৈ গৈ verification link-ত ক্লিক কৰিব লাগিব। যদি তেওঁলোকৰ ইমেইল ঠিকনা verify নহয়, তেন্তে তেওঁলোকৰ website active নহ'ব।

যদি তেওঁলোকে এটা paid plan-ত নাম লেখাই থাকে বা আপোনাৰ নেটৱৰ্কত ইমেইল verification বাধ্যতামূলক নহয়, তেন্তে checkout কৰাৰ ঠিক পিছতে তেওঁলোকৰ website active হৈ যাব আৰু তেওঁলোকক তেওঁলোকৰ dashboard লৈ sign in কৰিবলৈ এটা link দেখুৱাব।

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Using a Shareable Link: {#using-a-shareable-link}

এটা shareable link ব্যৱহাৰ কৰি নাম লেখাওঁ প্ৰক্ৰিয়াটো বেছিভাগেই registration form-ৰ দৰেই, এটামাত্ৰ পাৰ্থক্য হ'ল যে shareable link ব্যৱহাৰ কৰি, আপোনাৰ ग्राहकসকলে checkout form-ত এটা product বা website template আগতে বাছনি কৰা (refer to the section Pre-selecting products and templates via URL parameters) বা হয়তো এটা coupon code যোগ কৰা (refer to the section Using URL Parameters) হ'ব পাৰে।

নাম লেখাওঁ প্ৰক্ৰিয়াটো একেই থাকিব: তেওঁলোকে নিজৰ নাম, username, ইমেইল ঠিকনা, website নাম আৰু title আদি পূৰণ কৰিব লাগিব... কিন্তু plan বা site template-টো তেওঁলোকৰ বাবে আগতে বাছনি কৰা থাকিব।

### Registering Using Manual Payments: {#registering-using-manual-payments}

যদি আপুনি Ultimate Multisite বা ইয়াৰ add-on integrations দ্বাৰা দিয়া PayPal, Stripe বা আন কোনো payment gateway ব্যৱহাৰ কৰিব বিচাৰिन्न, তেন্তে আপুনি আপোনাৰ ग्राहकসকলৰ বাবে manual payments ব্যৱহাৰ কৰিব পাৰে। এইদৰে, আপুনি তেওঁলোকে আপোনাৰ নেটৱৰ্কত নাম লেখোৱাৰ পিছত তেওঁলোকক পৰিশোধ কৰিবলৈ এটা invoice সৃষ্টি কৰিব পাৰে।

নাম লেখাওঁ প্ৰক্ৰিয়াটো ওপৰৰ দৰেই হ'ব, কিন্তু registration page-ত আপোনাৰ ग्राहकসকলে এটা বাৰ্তা দেখিব যে তেওঁলোকে পেমেন্ট সম্পূৰ্ণ কৰিবলৈ আৰু অধিক নিৰ্দেশনা সহ এটা ইমেইল পাব।

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

আৰু নাম লেখাওঁ সম্পূৰ্ণ হোৱাৰ পিছত, তেওঁলোকে আপুনি সেট কৰা পেমেন্ট নিৰ্দেশনা দেখিব (আৰু তেওঁলোকৰ ইমেইলতো পাব)।

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

পেমেন্ট নিৰ্দেশনাটো **Ultimate Multisite > Settings > Payments** ত **Manual** পেমেন্ট বিকল্পটো অন কৰি সলনি কৰিব পাৰি:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

আপোনাৰ ग्राहकসকলে manual payment সম্পূৰ্ণ কৰি আৰু আপোনাক নিশ্চিতকৰণ (confirmation) পঠিয়াই দিলে, আপুনি সদস্যপদ আৰু website active কৰিবলৈ **নিজে পেমেন্টটো নিশ্চিত কৰিব** লাগিব।

ইয়াৰ বাবে, **Ultimate Multisite > Payments** লৈ যাওক আৰু ग्राहकৰ পেমেন্টটো বিচাৰক। ইয়াত এতিয়াও এটা **Pending** status দেখুৱাব লাগিব।

![Payments list with pending manual payment](/img/admin/payments-list.png)

পেমেন্ট নম্বৰটোত ক্লিক কৰক আৰু আপুনি ইয়াৰ status लाई **Completed** কৰিব পাৰিব।

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Status लाई **Completed** কৰাৰ পিছত, আপুনি এটা **Activate membership** বাৰ্তা দেখিব। এই বিকল্পটো **on** কৰি সদস্যপদ আৰু এই ग्राहकৰ লগত জড়িত website active কৰক। তাৰ পিছত, **Save Payment** কৰিবলৈ ক্লিক কৰক।

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

এতিয়া আপোনাৰ ग्राहकজনে dashboard আৰু তেওঁলোকে সাবস্ক্রাইব কৰা সকলো feature ব্যৱহাৰ কৰিব পাৰিব।
