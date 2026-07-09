---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) সম্পৰ্কে প্ৰথম দৃষ্টি

_**মনোযোগ: মনত ৰাখিব যে এই feature বা প্ৰবন্ধটো উন্নত ব্যৱহাৰকাৰীৰ বাবে।**_

**webhook** হৈছে Ultimate Multisite-ৰ দৰে কোনো app বা software-এ আন application-সমূহক real-time তথ্য প্ৰদান কৰাৰ এটা উপায়। webhook-এ ঘটনা ঘটাৰ লগে লগে আন application-সমূহলৈ data বা payloads পঠিয়ায়, অৰ্থাৎ আপুনি **তথ্য তৎক্ষণাত পায়।**

Ultimate Multisite-ৰ পৰা কোনো event trigger হোৱাৰ প্ৰতিবাৰতে আন এটা CRM বা system-লৈ নিৰ্দিষ্ট তথ্য সংহত বা পঠিয়াবলগীয়া হ’লে ই সহায়ক। উদাহৰণস্বৰূপে, প্ৰতিবাৰ নতুন ব্যৱহাৰকাৰী Account সৃষ্টি হ’লে আপুনি ব্যৱহাৰকাৰীৰ নাম আৰু email ঠিকনা এখন mailing list-লৈ পঠিয়াব লাগিব।

## এটা webhook কেনেকৈ সৃষ্টি কৰিব

এটা webhook সৃষ্টি কৰিবলৈ, আপোনাৰ network admin dashboard-লৈ যাওক। **Ultimate Multisite > Webhooks > Add New Webhook**-ত click কৰক।

![Add New Webhook button থকা খালী Webhooks তালিকা পৃষ্ঠা](/img/admin/webhooks-list-empty.png)

তাৰ পাছত আপুনি webhook configuration সম্পাদনা কৰিব পাৰে:

![Name, Event, আৰু URL field থকা Add New Webhook form](/img/admin/webhook-add-modal.png)

নতুন webhook সৃষ্টি কৰাৰ সময়ত আপোনাক **Name, URL,** আৰু **Event**-ৰ দৰে তথ্য সোধা হ’ব। আপোনাৰ webhook-ৰ বাবে আপুনি যিকোনো নাম ব্যৱহাৰ কৰিব পাৰে। আটাইতকৈ গুৰুত্বপূৰ্ণ field হৈছে URL আৰু Event।

![URL field আৰু payload preview দেখুওৱা Webhook সম্পাদনা interface](/img/admin/webhook-url-field.png)

URL হৈছে সেই **endpoint বা গন্তব্যস্থান** য’লৈ Ultimate Multisite-এ **payload বা data** পঠিয়াব। এইটো হৈছে data গ্ৰহণ কৰা application।

3rd party application-ৰ সৈতে integration সহজ কৰিবলৈ ব্যৱহাৰকাৰীয়ে সাধাৰণতে ব্যৱহাৰ কৰা আটাইতকৈ প্ৰচলিত solution হৈছে Zapier। Zapier-ৰ দৰে platform নাথাকিলে, আপুনি data ধৰিবলৈ আৰু process কৰিবলৈ নিজে এটা custom function সৃষ্টি কৰিব লাগিব। **Zapier-ৰ সৈতে Ultimate Multisite webhook কেনেকৈ ব্যৱহাৰ কৰিব** সেই বিষয়ে এই প্ৰবন্ধটো চাওক।

এই প্ৰবন্ধত, আমি webhook কেনেকৈ কাম কৰে তাৰ মূল ধাৰণা আৰু Ultimate Multisite-ত উপলব্ধ events চাম। আমি [requestbin.com](https://requestbin.com/) নামৰ এটা 3rd party site ব্যৱহাৰ কৰিম। এই site-এ কোনো coding নকৰাকৈ এটা endpoint সৃষ্টি কৰি payload ধৰিবলৈ আমাক অনুমতি দিব। _**Disclaimer: ই কেৱল data গ্ৰহণ কৰা হৈছে বুলি আমাক দেখুৱাব।**_ payload-ৰ ওপৰত কোনো processing বা কোনো ধৰণৰ action কৰা নহ’ব।

[requestbin.com](https://requestbin.com/)-লৈ যাওক আৰু Create Request Bin-ত click কৰক।

সেই button-ত click কৰাৰ পাছত, আপোনাৰ ইতিমধ্যে Account থাকিলে log in কৰিবলৈ বা sign up কৰিবলৈ সুধিব। আপোনাৰ ইতিমধ্যে Account থাকিলে ই আপোনাক পোনে পোনে তেওঁলোকৰ dashboard-লৈ লৈ যাব। তেওঁলোকৰ dashboard-ত, আপুনি আপোনাৰ Ultimate Multisite webhook সৃষ্টি কৰোঁতে ব্যৱহাৰ কৰিব পৰা endpoint বা URL তৎক্ষণাত দেখিব।

এতিয়া URL copy কৰক আৰু Ultimate Multisite-লৈ উভতি যাওক। URL field-ত endpoint ৰাখক আৰু dropdown-ৰ পৰা এটা event বাছনি কৰক। এই উদাহৰণত, আমি **Payment Received** বাছনি কৰিম।

ব্যৱহাৰকাৰীয়ে payment কৰাৰ প্ৰতিবাৰ এই event trigger হয়। উপলব্ধ সকলো events, সিহঁতৰ বিৱৰণ, আৰু payloads পৃষ্ঠাৰ তলত তালিকাভুক্ত কৰা হৈছে। webhook save কৰিবলৈ **Add New Webhook** button-ত click কৰক।

![Payment Received বাছনি কৰা Webhook event dropdown](/img/admin/webhook-event-picker.png)

আমি সৃষ্টি কৰা webhook-টো কাম কৰি আছে নে নাই চাবলৈ এতিয়া endpoint-লৈ এটা test event পঠিয়াব পাৰোঁ। আমি সৃষ্টি কৰা webhook-ৰ তলত **Send Test Event**-ত click কৰি এইটো কৰিব পাৰোঁ।

![এটা configured webhook আৰু Send Test action দেখুওৱা Webhooks তালিকা](/img/admin/webhooks-list-populated.png)

ই test সফল হৈছে বুলি কোৱা এটা confirmation window দেখুৱায়।

![test payload পঠিওৱাৰ পাছত Webhook test event result](/img/admin/webhook-test-result.png)

এতিয়া যদি আমি _Requestbin_ site-লৈ উভতি যাওঁ, তেন্তে কিছু test data থকা payload গ্ৰহণ কৰা হৈছে বুলি দেখিম।

এইটো webhook আৰু endpoints কেনেকৈ কাম কৰে তাৰ মূল নীতি। যদি আপুনি এটা custom endpoint সৃষ্টি কৰিব বিচাৰে, তেন্তে Ultimate Multisite-ৰ পৰা গ্ৰহণ কৰা data process কৰিবলৈ আপুনি এটা custom function সৃষ্টি কৰিব লাগিব।
