---
title: زپیئر همغږي
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite-و زپیر (Zapier) هم آمیختن {#integrating-ultimate-multisite-with-zapier}

په یو له مقاله کې، موږ په [Webhooks](webhooks.md) درته خبره کړې چې څنګه دوی کولی شي د üçüncü اړخ کے اپلیکیشنونو سره مرسته وکړي.

د Webhooks کارول یو څه پیچلی دی ځکه چې دا د کوډ کولو او پېډلونه (payloads) ترلاسه کولو لپاره بلکې علم ته اړتیا لري. **Zapier** هغه راهیک دی چې تاسو کولی شئ له دې څخه وېرو شئ.

Zapier د ۵۰۰۰+ اپلیکیشنونو سره هم آمیختنه لري چې د مختلف اپلیکیشنونو ترمنځ ارتباط آسانوي.

ستاسو کولی شئ **Triggers** جوړ کړئ چې کله د ستاسو شبکه کې وقایع پیل کیږي (د مثال په توګه، یوه اکاونه جوړه کیږي او `account_create` 이벤트 پیل کوي) یا **Actions** جوړ کړئ چې د ستاسو شبکه ته بیرته ځواب ورکول لپاره له بیرونی وقایع څخه کار واخلي (د مثال په توګه، ستاسو Ultimate Multisite شبکه کې یو نوی اکاونه सदस्यता جوړول).

دا ممکن دی ځکه چې **Ultimate Multisite Zapier triggers** او actions د [REST API](https://developer.ultimatemultisite.com/api/docs/) له لارې کار کوي.

## څنګه پیل کړئ {#how-to-start}

پله، په Zapier اپلیکیشن لیست کې Ultimate Multisite کو غوښتل. بدونه، تاسو کولی شئ د دې [اینټیګریشن لینک](https://zapier.com/apps/wp-ultimo/integrations) باندې کلیک وکړئ.

د ستاسو dashboard ته لاړ شئ او لاندېतिर रहेको **+** **Create Zap** د چپ اړخ څخه فشار ورکړئ ترڅو یو نوی Zap جوړ کړئ.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

تاسو به ورته د Zap جوړولو صفحې ته رانده شئ.

په търار کې "wp ultimo" 입력 کړئ. انتخاب لپاره **Beta** نسخه غوره کړئ.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

د ستاسو اپلیکیشن غوره کولو وروسته، موجود رویداد غوره کړئ: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

خاورې ته اوس موږ باید Zapier ته **ستاسو شبکه** ورته رامنځته کړو. په **Sign in** کې کلیک کول یو نوی پټه (window) खुماره کړي چې د **API credentials** لپاره اړتیا لري.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

دې کارولار کې، خپل نټوৰ নেটৱৰ্ক অ্যাডমিন প্যানেলত जानुहोस् আৰু **Ultimate Multisite > Settings** > **API & Webhooks** ত যাওক আৰু API Settings অংশটো বিচাৰিব।

এই সংযোগ কাম কৰিবলৈ **Enable API** অপচনটো বাছনি কৰক, কাৰণ ই প্ৰয়োজনীয়।

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

API Key আৰু API Secret ফিল্ডবোৰত रहेको **Copy to Clipboard** আইকন ব্যৱহাৰ কৰি সেই মানবোৰ কপি কৰক আৰু ইন্টিগ্ৰেচন স্ক্ৰীণত সেই মানবোৰ পেষ্ট কৰক।

URL ফিল্ডত, আপোনাৰ নেটৱৰ্কৰ সম্পূৰ্ণ URL টা লিখক, ইয়াতে প্ৰটোকলটো (HTTP বা HTTPS) অন্তৰ্ভুক্ত থাকিব লাগিব।

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

প্ৰতিটো পদক্ষেপ আগবাঢ়ি যোৱাৰ বাবে **Yes, Continue** বাটনটো ক্লিক কৰক। সকলো ঠিক চলিলে, আপোনাৰ নতুন সংযোগ কৰা অ্যাকাউন্টটো আপোনাক স্বাগতম জনাই থাকিব! এটা নতুন ট্ৰিগাৰ (trigger) সৃষ্টি কৰিবলৈ **Continue** ত ক্লিক কৰক।

## নতুন Trigger কেনেকৈ সৃষ্টি কৰিব লাগে {#how-to-create-a-new-trigger}

আপোনাৰ অ্যাকাউন্ট সংযুক্ত হোৱাৰ পিছত, আপুনি উপলব্ধ ইভেন্টবোৰ চাব পাৰিব। এই টিউটোরিয়ালটোৰ বাবে আমি **payment_received** ইভেন্টটো বাছনি কৰোঁ আহক।

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

ইভেন্টটো বাছনি কৰি আৰু আপুনি **continue** ত ক্লিক কৰাৰ পিছত, এটা **test step** দেখিবলৈ থাকিব।

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

এই পৰ্যায়ত, Zapier পৰীক্ষা কৰিব যে আপোনাৰ Zapটোৱে সেই ইভেন্টটোৰ বাবে **নির্দিষ্ট payloadটো পেলাব পাৰে** নে নাই। একেধৰণৰ ভৱিষ্যত ইভেন্টবোৰৰ ক্ষেত্ৰত এই একে ধৰণৰ গঠনৰ সৈতে তথ্য প্ৰেৰণ কৰা হ'ব।

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

په زمو درس کې، آزموینه **د بریالیت سره پوره شو** او مثال معلوماتو پېژندنه کړل. دا مثال معلومات موږ ته کارونه جوړولو په وخت کې مرسته ورکول لپاره ګټور به وي. ستاسو trigger اوس جوړ شوی دی او نورو اپلیکیشنونو سره تړلو لپاره چمتو دی.

## څنګه Action جوړ کړئ {#how-to-create-actions}

Actions د نورو triggers څخه معلومات کار کوي ترڅو په خپل شبکه کې نوي ننوتلونه جوړ کړي.

په **Action step جوړولو** کې، تاسو Ultimate Multisite **Beta** او **Create Items on Ultimate Multisite** خيار غوره کوئ.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

په راتلونکي مرحله کې، ستاسو احراز性の (authentication) جوړول یا هغه احرازیت غوره کړئ چې موږ **How to start** کې کړی و، یا یو پہلے جوړ شوی احرازیت غوره کړئ. په دې درس کې، موږ هم هغه احرازیت غوره کوو چې پخوانی وخت کې جوړ شوی و.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action تنظیمول {#setting-up-the-action}

دا **Action اصلي مرحله ده** او دلته شیان یو څه توپیر لري. په لومبي معلومات چې تاسو یې غوره کوئ، هغه **Item** دی. Item ستاسو شبکهको **معلوماتو ماډل** دی، لکه **Customers (کارونکي)، Payments (پرداختونه)، Sites (مکانونه)، Emails (ای میلونه)** او نور.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

کله چې تاسو یو item غوره کوئ، فرمولار هغه اړین او اختیاري (optional) معلومات هم راټولوي چې ستاسو انتخاب شوی item د شبکه کې نوی کارو جوړولو لپاره لازم دي.

د مثال په توګه، کله چې تاسو **Customer** item غوره کوئ، فرمولار د شبکه کې نوی Customer جوړولو لپاره اړتیا وړ ټول معلومات راټولوي.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

هغه सबै معلومات چې **required (لازم)** هم دی پوره کړئ او continue باندې کلیک وکړئ، یو وروستی سکرین تاسو ته پوره شوي معلومات او هغه معلومات ښیي چې پوره نه دي.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

د دې امتحان د پوره کیدو او بریالي کیدو وروسته، ستاسو عمل تنظیم شوې ده. دا هم مهم دی چې په خپل نټو کې وګورئ که آیا هغه شی د ستاسو عمل پرستی (test) سره جوړ شوی و یا نه.
