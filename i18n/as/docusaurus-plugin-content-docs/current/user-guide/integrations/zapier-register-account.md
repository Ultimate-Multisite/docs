---
title: Zapier-ৰ জৰিয়তে একাউণ্ট ৰেজিষ্টাৰ কৰা
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# ইভেন্ট: Zapier যোগে একাউণ্ট রেজিস্টাৰ কৰা

[Integrating Ultimate Multisite with Zapier](zapier.md) এই article ত, আমি আলোচনা কৰিছিলো যে কেনেকৈ Zapier ব্যৱহাৰ কৰি Ultimate Multisite भितৰত triggers আৰু eventsৰ ওপৰত ভিত্তি কৰি বিভিন্ন কাৰ্য্য সম্পাদন কৰিব পাৰি। এই article ত, আমি দেখুৱাব যে আপুনি কেনেকৈ ত্ৰিটিয়াৰ্টি (3rd party) application সমূহ ইন্টিগ্রেট কৰিব পাৰে। আমি ডেটাৰ উৎস হিচাপে Google Sheets ব্যৱহাৰ কৰিম আৰু একাউণ্ট রেজিস্টাৰ কৰিবলৈ সেই তথ্য Ultimate Multisite লৈ পঠিয়াব।

প্ৰথমে, আপুনি নিজৰ Google Drive ত এটা **Google Sheet** সৃষ্টি কৰিব লাগিব। নিশ্চিত কৰক যে আপুনি প্ৰতিটো কলাম সঠিকভাৱে সংজ্ঞায়িত কৰিছে, যাতে পিছত আপুনি ডেটা সহজে ম্যাপ (map) কৰিব পাৰে।

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)এটা Google Sheet সৃষ্টি কৰাৰ পিছত, আপুনি নিজৰ Zapier account লৈ লগ ইন কৰি এটা zap সৃষ্টি কৰিবলৈ আৰম্ভ কৰিব পাৰে।

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png) **"App event"** search field ত **"Google Sheets"** সিলেক্ট কৰক

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

তাৰ পাছত, "**Event** " field ত "**New spreadsheet row** " সিলেক্ট কৰক আৰু "**Continue** " টোকাটো চাপক।

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)পৰৱৰ্তী পদক্ষেপত আপোনাক এটা **Google Account** সিলেক্ট কৰিবলৈ কোৱা হ'ব, য'ত **Google Sheet** টি সেভ কৰা আছে। গতিকে কেৱল নিশ্চিত কৰক যে সঠিক google account টি উল্লেখ কৰা হৈছে।

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

**"Set up trigger** "ৰ তলত, আপুনি সেই google spreadsheet আৰু worksheet সিলেক্ট আৰু স্পেসিফাই কৰিব লাগিব য'ত ডেটা আহিব। কেৱল আগুৱাই যোৱা আৰু সেইবোৰ ভৰাই "**Continue** " টোকাটো চাপক।

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)তাৰ পাছত, নিশ্চিত কৰিবলৈ যে আপোনাৰ google sheet টি সঠিকভাৱে সংযোগ হৈছে, আপুনি "**test your trigger** " কৰিব লাগিব।

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)যদি আপোনাৰ test সফল হয়, তেন্তে আপুনি আপোনাৰ spreadsheet সমূহৰ কিছুমান মান (values) দেখিবলৈ পাব। আগুৱাই যাবলৈ "**Continue** " ক্লিক কৰক।

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)পৰৱৰ্তী পদক্ষেপটো হ'ল দ্বিতীয় কাৰ্য্য (action) সেট কৰা, যিয়ে Ultimate Multisite ত একাউণ্ট সৃষ্টি বা রেজিস্টাৰ কৰিব। search field ত "**Ultimate Multisite(2.0.2)** " সিলেক্ট কৰক।

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

"**Event** " fieldৰ তলত, "**Register an Account in Ultimate Multisite** " সিলেক্ট কৰক আৰু তাৰ পাছত "**Continue** " বাটনটো ক্লিক কৰক।

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png) "**Set up an action** "ৰ তলত, আপুনি customer data, memberships, products আদিৰ বাবে বিভিন্ন field উপলব্ধ হ'ব। আপুনি আপোনাৰ google sheetৰ মানবোৰ ম্যাপ (map) কৰি সঠিক field ত যোগ কৰিব লাগিব, য'ত সেইবোৰ ভৰণ কৰা হ'ব, যেনে তলৰ screenshot ত দেখুওৱা হৈছে।

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

মানবোৰ ম্যাপ কৰাৰ পিছত, আপুনি action টি test কৰিব পাৰে।

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
