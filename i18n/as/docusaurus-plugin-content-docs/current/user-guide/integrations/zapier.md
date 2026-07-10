---
title: Zapier একত্ৰীকৰণ
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite-ৰ সৈতে Zapier সংহতি কৰা {#integrating-ultimate-multisite-with-zapier}

লেখাসমূহৰ এটাত, আমি [Webhooks](webhooks.md) আৰু সেইবোৰ কেনেকৈ 3rd party application-ৰ সৈতে সংহতি কৰিবলৈ ব্যৱহাৰ কৰিব পাৰি, সেই বিষয়ে আলোচনা কৰিছিলোঁ।

webhooks ব্যৱহাৰ কৰাটো অলপ জটিল, কাৰণ ইয়াৰ বাবে coding আৰু payload ধৰা সম্পৰ্কে উন্নত জ্ঞানৰ প্ৰয়োজন হয়। **Zapier** ব্যৱহাৰ কৰাটো আপোনাৰ বাবে সেই অসুবিধা এৰাই চলাৰ এটা উপায়।

Zapier-ৰ 5000+ তকৈও অধিক app-ৰ সৈতে integration আছে, যিয়ে বিভিন্ন application-ৰ মাজত যোগাযোগ সহজ কৰি তোলে।

আপুনি **Triggers** সৃষ্টি কৰিব পাৰে, যিবোৰ আপোনাৰ network-ত event ঘটিলে আৰম্ভ হ’ব (যেনে এটা Account সৃষ্টি হয় আৰু account_create event trigger কৰে), অথবা বাহ্যিক event-ৰ প্ৰতিক্ৰিয়াত আপোনাৰ network-ত **Actions** সৃষ্টি কৰিব পাৰে (যেনে আপোনাৰ Ultimate Multisite network-ত এটা নতুন Account membership সৃষ্টি কৰা)।

এইটো সম্ভৱ কাৰণ **Ultimate Multisite Zapier's triggers** আৰু actions [REST API](https://developer.ultimatemultisite.com/api/docs/)-ৰ দ্বাৰা চালিত।

## কেনেকৈ আৰম্ভ কৰিব {#how-to-start}

প্ৰথমে, Zapier app list-ত Ultimate Multisite বিচাৰক। বিকল্পভাৱে, আপুনি [এই link](https://zapier.com/apps/wp-ultimo/integrations) ক্লিক কৰিব পাৰে।

আপোনাৰ Dashboard-লৈ যাওক আৰু এটা নতুন Zap set up কৰিবলৈ বাওঁ sidebar-ত থকা **+** **Zap সৃষ্টি কৰক** button টিপক।

![Zapier Dashboard-ত Zap সৃষ্টি কৰক button](/img/admin/webhooks-list.png)

আপোনাক Zap creation page-লৈ redirect কৰা হ’ব।

search box-ত "wp ultimo" type কৰক। **Beta** version option বাছনি কৰিবলৈ ক্লিক কৰক।

![Zapier app list-ত WP Ultimo সন্ধান কৰা](/img/admin/webhooks-list.png)

আমাৰ app নিৰ্বাচন কৰাৰ পিছত, উপলব্ধ event বাছনি কৰক: **নতুন Ultimate Multisite Event**।

![New Ultimate Multisite Event trigger নিৰ্বাচন কৰা](/img/admin/webhooks-list.png)

এতিয়া Zapier-এ **আপোনাৰ network**-ত access পোৱাৰ প্ৰয়োজন। **Sign in**-ত ক্লিক কৰিলে **API credentials** বিচৰা এটা নতুন window খোল খাব।

![API credentials-ৰ বাবে Zapier Sign in prompt](/img/admin/webhooks-list.png)

আপোনাৰ network admin panel-লৈ যাওক আৰু **Ultimate Multisite > Settings** > **API & Webhooks**-লৈ navigate কৰক আৰু API Settings section বিচাৰক।

এই connection কাম কৰিবলৈ প্ৰয়োজনীয় হোৱাৰ বাবে **Enable API** option নিৰ্বাচন কৰক।

![API Settings আৰু Enable API option-ৰ সৈতে API আৰু Webhooks settings](/img/admin/settings-api-webhooks.png)

API Key আৰু API Secret field-ত থকা **Copy to Clipboard** icon ব্যৱহাৰ কৰক আৰু সেই value-সমূহ integration screen-ত paste কৰক।

URL field-ত, protocol (HTTP বা HTTPS) সহ আপোনাৰ network-ৰ সম্পূৰ্ণ URL দিয়ক।

![API Key, Secret, আৰু URL field-ৰ সৈতে Zapier integration screen](/img/admin/webhooks-list.png)

পৰৱৰ্তী step-লৈ যাবলৈ **Yes, Continue** button ক্লিক কৰক। যদি সকলো ঠিকঠাক কাম কৰে, তেন্তে আপোনাৰ নতুন connected Account-এ আপোনাক স্বাগতম জনাব! এটা নতুন trigger সৃষ্টি কৰিবলৈ **Continue** ক্লিক কৰক।

## নতুন Trigger কেনেকৈ সৃষ্টি কৰিব {#how-to-create-a-new-trigger}

এতিয়া আপোনাৰ Account connected হোৱাৰ পিছত আপুনি উপলব্ধ event-সমূহ চাব পাৰে। এই tutorial-ৰ বাবে **payment_received** event বাছনি কৰোঁ।

![Zapier trigger-ত payment_received event নিৰ্বাচন কৰা](/img/admin/webhooks-list.png)

event নিৰ্বাচন কৰাৰ পিছত আৰু আপুনি **continue** ক্লিক কৰিলে, এটা **test step** দেখা দিব।

![trigger-ৰ বাবে Zapier test step](/img/admin/webhooks-list.png)

এই stage-ত, Zapier-এ পৰীক্ষা কৰিব যে আপোনাৰ Zap-এ **সেই event-লৈ নিৰ্দিষ্ট payload fetch কৰিব পাৰে নে নোৱাৰে**। একে type-ৰ future event-ত, একে structure-ৰ তথ্য পঠিওৱা হ’ব।

![payload-ৰ সৈতে Zapier trigger test সফলভাৱে সম্পূৰ্ণ হৈছে](/img/admin/webhooks-list.png)

আমাৰ tutorial-ত testটো **সফলভাৱে সম্পূৰ্ণ** হৈছিল আৰু payload example information ঘূৰাই দিছিল। এই example information-এ actions সৃষ্টি কৰাৰ সময়ত আমাক পথ দেখুৱাবলৈ উপযোগী হ’ব। আপোনাৰ trigger এতিয়া সৃষ্টি হৈছে আৰু অন্য application-ৰ সৈতে connected হ’বলৈ সাজু।

## Actions কেনেকৈ সৃষ্টি কৰিব {#how-to-create-actions}

Actions-এ আপোনাৰ network-ত নতুন entry সৃষ্টি কৰিবলৈ অন্য trigger-ৰ পৰা তথ্য ব্যৱহাৰ কৰে।

**action step সৃষ্টি কৰা**ত আপুনি Ultimate Multisite **Beta** আৰু **Ultimate Multisite-ত Item সৃষ্টি কৰক** option বাছনি কৰিব।

![Create Items on Ultimate Multisite-ৰ সৈতে action সৃষ্টি কৰা](/img/admin/webhooks-list.png)

পৰৱৰ্তী step-ত আপুনি **কেনেকৈ আৰম্ভ কৰিব**-ত আমি কৰা দৰে আপোনাৰ authentication সৃষ্টি কৰিব, অথবা এটা সৃষ্টি কৰা authentication নিৰ্বাচন কৰিব। এই tutorial-ত আমি আগতে সৃষ্টি কৰা একে authentication বাছনি কৰিম।

![Zapier action-ৰ বাবে authentication নিৰ্বাচন কৰা](/img/admin/webhooks-list.png)

### Action set up কৰা {#setting-up-the-action}

এইটো **action-ৰ main step** আৰু ইয়াত কথাবোৰ অলপ বেলেগ। আপুনি বাছনি কৰিবলগীয়া প্ৰথম তথ্য হৈছে **Item**। Item হৈছে আপোনাৰ network-ৰ **information model**, যেনে **Customers, Payments, Sites, Emails** আৰু অন্যান্য।

![Zapier action-ৰ বাবে Item type বাছনি কৰা](/img/admin/webhooks-list.png)

এটা item নিৰ্বাচন কৰিলে, form-টোৱে selected item-ৰ বাবে **required আৰু optional fields আনিবলৈ rearrange** কৰিব।

উদাহৰণস্বৰূপে, **Customer** item নিৰ্বাচন কৰিলে, form fields-এ network-ত এটা নতুন Customer সৃষ্টি কৰিবলৈ পূৰণ কৰিবলগীয়া সকলো প্ৰয়োজনীয় বস্তু আনিব।

![Zapier action setup-ত Customer item fields](/img/admin/webhooks-list.png)

**required** হিচাপে চিহ্নিত সকলো field পূৰণ কৰাৰ পিছত আৰু continue-ত ক্লিক কৰিলে, এটা শেষ screen-এ আপোনাক পূৰণ কৰা fields আৰু খালী ৰৈ যোৱা fields দেখুৱাব।

![পূৰণ কৰা আৰু খালী fields দেখুওৱা Zapier action test](/img/admin/webhooks-list.png)

আপোনাৰ test সম্পূৰ্ণ আৰু সফল হোৱাৰ লগে লগে আপোনাৰ action configured হয়। আপোনাৰ action-ৰ test-ৰ সৈতে itemটো সৃষ্টি হৈছিল নে নাই, সেয়া আপোনাৰ network-ত check কৰাটোও গুৰুত্বপূর্ণ।
