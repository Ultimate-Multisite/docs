---
title: ৱেবহুকছ
sidebar_position: 15
_i18n_hash: 2246e3cc1ed172d701d898e04088bf29
---
# Webhooks লৈ প্ৰথম চমু আভাস (v2)

_**মন কৰিব: এই বৈশিষ্ট্য বা article টি কেৱল উন্নত ব্যৱহাৰকাৰীসকলৰ বাবে।**_

এটা **webhook** হৈছে Ultimate Multisite जस्तो কোনো App বা Software-ৰ দ্বাৰা আন কোনো Application-লৈ real-time তথ্য প্ৰদান কৰাৰ এটা পদ্ধতি। এটা webhook কোনো ঘটনা (event) সংঘটিত হোৱাৰ লগে লগে ডাটা বা payload আন Application-লৈ প্ৰেৰণ কৰে, যাৰ অৰ্থ হ'ল আপুনি **তাৎক্ষণিকভাৱে ডাটা লাভ কৰে।**

যদি আপোনাক Ultimate Multisiteৰ পৰা কোনো ডাটা আন কোনো CRM বা System-লৈ ইন্টিগ্রেট কৰিব বা প্ৰেৰণ কৰিবলগীয়া হয়, তেন্তে এইটো অতি সহায়ক। উদাহৰণস্বৰূপে, নতুন কোনো user account সৃষ্টি হোৱাৰ লগে লগে আপুনি user-ৰ নাম আৰু email address এটা mailing list-লৈ পঠিয়াব লাগিব।

## Webhook কেনেকৈ সৃষ্টি কৰিব

এটা webhook সৃষ্টি কৰিবলৈ, আপুনি নিজৰ network admin dashboard লৈ যাব। **Ultimate Multisite > Webhooks > Add New Webhook** ওপৰত ক্লিক কৰক।

![Webhooks list page with Add New Webhook button](/img/admin/webhooks-list.png)

তাৰ পিছত আপুনি webhook configuration সম্পাদনা কৰিব পাৰিব:

![Webhook edit interface](/img/admin/webhook-edit.png)

নতুন webhook সৃষ্টি কৰোঁতে আপোনাক **Name, URL,** আৰু **Event** আদি তথ্যৰ বাবে কোৱা হ'ব। আপুনি নিজৰ webhook-ৰ বাবে যিকোনো নাম ব্যৱহাৰ কৰিব পাৰে। আটাইতকৈ গুৰুত্বপূৰ্ণ field সমূহ হৈছে URL আৰু Event।

![New webhook form with Name, URL, and Event fields](/img/admin/webhooks-list.png)

URL হৈছে সেই **endpoint বা গন্তব্যস্থল** য'লৈ Ultimate Multisite-এ **payload বা ডাটা** প্ৰেৰণ কৰিব। এইটো সেই Application যিয়ে ডাটাটো লাভ কৰিব।

Zapier হৈছে আটাইতকৈ সাধাৰণ সমাধান যি ব্যবহারকাৰীসকলে ৩rd party Application লগত ইন্টিগ্ৰেট কৰিবলৈ ব্যৱহাৰ কৰে। Zapier जस्तो কোনো platform নোহোৱা হ'লে, আপুনি ডাটা ধৰি প্ৰক্ৰিয়াকৰণ কৰিবলৈ এটা custom function হাতেৰে সৃষ্টি কৰিব লাগিব। **how to use Ultimate Multisite webhook with Zapier** লৈ এই article টি চাওক।

এই article ত, আমি webhook কেনেকৈ কাম কৰে তাৰ মৌলিক ধাৰণা আৰু Ultimate Multisite-ত উপলব্ধ event সমূহৰ ওপৰত আলোকপাত কৰিম। আমি [requestbin.com](https://requestbin.com/) নামৰ এটা ৩rd party site ব্যৱহাৰ কৰিম। এই site টোৱে কোনো coding নকৰাকৈ এটা endpoint সৃষ্টি কৰাত আৰু payload ধৰাত আমাক সহায় কৰিব। _**Disclaimer: ই কেৱল ডাটা লাভ কৰা হৈছে বুলি দেখুৱাব।**_ payload-লৈ কোনো প্ৰক্ৰিয়াকৰণ বা কোনো ধৰণৰ কাৰ্য্য কৰা নহ'ব।

[requestbin.com](https://requestbin.com/) লৈ যোৱা আৰু Create Request Bin ওপৰত ক্লিক কৰা।

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

এই বাটনটোত ক্লিক কৰাৰ পিছত, যদি আপুনি ইতিমধ্যে কোনো account ৰ ব্যৱহাৰকাৰী হয় তেন্তে লগ ইন কৰিবলৈ বা sign up কৰিবলৈ কোৱা হ'ব। যদি আপোনাৰ ইতিমধ্যে কোনো account আছে, তেন্তে ই আপোনাক পোনপটীয়াকৈ তেওঁলোকৰ dashboard লৈ লৈ যাব। তেওঁলোকৰ dashboard ত, আপুনি তাৎক্ষণিকভাৱে সেই endpoint বা URL পাব যিটো আপুনি Ultimate Multisite webhook সৃষ্টি কৰাত ব্যৱহাৰ কৰিব পাৰিব।

![RequestBin dashboard showing the endpoint URL](/img/admin/webhooks-list.png)

যোৱা আৰু URL টো কপি কৰি Ultimate Multisite-লৈ ঘূৰি আহক। endpoint টো URL field ত স্থান দি, dropdown बाट এটা event বাছি লওক। এই উদাহৰণত, আমি **Payment Received** বাছি ল'ম।

এই event টো কোনো user-এ পেমেন্ট কৰাৰ লগে লগে trigger হয়। উপলব্ধ সকলো event, তেওঁলোকৰ description, আৰু payloads page-ৰ তলত তালিকাভুক্ত কৰা হৈছে। webhook টি সেভ কৰিবলৈ **Add New Webhook** বাটনটো ক্লিক কৰক।

![Webhook configured with Payment Received event](/img/admin/webhooks-list.png)

এতিয়া আমি এটা test event endpoint লৈ পঠিয়াব পাৰোঁ যাতে আমি দেখিব পাৰোঁ যে আমি সৃষ্টি কৰা webhook টি কাম কৰি আছে নেকি। আমি এইটো কৰিব পাৰোঁ webhook টোৰ তলত থকা **Send Test Event** ওপৰত ক্লিক কৰি।

![Send Test Event option under the webhook](/img/admin/webhooks-list.png)

এইটোৱে এটা confirmation window দেখুৱায় যে test টি সফল হৈছে।

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

এতিয়া যদি আমি _Requestbin_ site লৈ ঘূৰি যাওঁ, তেন্তে আমি দেখিব পাৰিম যে payload টো কিছু test data লৈ লাভ কৰা হৈছে।

![RequestBin showing received webhook payload data](/img/admin/webhooks-list.png)

এইটোৱেই webhook আৰু endpoints কেনেকৈ কাম কৰে তাৰ মৌলিক নীতি। যদি আপুনি এটা custom endpoint সৃষ্টি কৰিবলগীয়া হয়, তেন্তে Ultimate Multisite-ৰ পৰা লাভ কৰা ডাটা প্ৰক্ৰিয়াকৰণ কৰিবলৈ আপুনি এটা custom function সৃষ্টি কৰিব লাগিব।
