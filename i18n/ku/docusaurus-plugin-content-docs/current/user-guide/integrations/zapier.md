---
title: Integrasi Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integration of Ultimate Multisite with Zapier

بۆ یەکێک لە بابەتەکاندا، باس لە [Webhooks](webhooks.md) کرد و چۆن دەتوانرێت بۆ پەیوەندی لەگەڵ ئەپڵیکاتەکانی تری بەکاربهێنرێت.

فێربوونی Webhooks شوێنێکی کەمایەنی نییە چونکە پێویستی بە زانینی پڕۆگرامکاری پیشەنگ و گەیشتن بە ناوەڕۆکی داتاکان هەیە. بەکاریبەرگرتنی **Zapier** ڕێگەیەکی دەدات بۆ ئەوەی ئەمە لە خوارەوە بکەیت.

Zapier پەیوەندی لەگەڵ زیاتر لە 5000+ ئەپڵیکات هەیە کە پەیوەندیکردن لە نێوان ئەپڵیکات جیاواز ئاسانتر دەکات.

تۆ دەتوانی **Triggers** دروست بکەیت کە کاتێک ڕووداوێک لە تۆڕەکەت ڕوودەدات (بۆ نموونە یەک شێرخۆدا دروست بکرێت و واکەئای `account_create` بڵاوبکاتەوە) یان **Actions** دروست بکەیت لە تۆڕەکەت کە وەڵام دەدەنەوە بۆ ڕووداوە دەرەکییەکان (بۆ نموونە ئەندازی نوێی ئەندازی شێرخۆدا لە تۆڕی Ultimate Multisite دروست بکەیت).

ئەمە بەهۆی ئەوەیە کە **triggers و actions ی Zapier-ی Ultimate Multisite** بە پێی [REST API](https://developer.ultimatemultisite.com/api/docs/) کاردەکەن.

## چۆن دەستپێکردن

پێوەرە سەرەکی، بۆ Ultimate Multisite لە لیستەکەدا یەکجار بخەرەوە (search) لە Zapier دا. بە شێوەیەکی دیکە، دەتوانیت ئەم [لینک](https://zapier.com/apps/wp-ultimo/integrations) بکەیت.

بڕۆ بۆ داشبۆردەکەت و د assuming **+** د assuming **Create Zap** د assuming **Create Zap** د لایەنی لایەنی لێ (left sidebar) بۆ ڕێکخستنی Zapێکی نوێ.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

تۆ دەبیت بە ڕێگەی پەیج دروستکردنی Zapەوە وەڵام دەدەیتەوە.

لە ناو خاڵی گەڕان (search box)دا "wp ultimo" بنووسە. بۆ هەڵبژاردنی ئەو بژاردەیە کە پێویستە، سەرنجی بە وردەکاری **Beta** بدە.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

پاش هەڵبژاردنی ئەپڵیکاتەکەمان، ڕووداوە بەکارهێنراوەکان (event) کە دەتوانیت هەڵبژێریت: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

ئێستا پێویستە Zapier ڕێگە بدە بە **تۆڕەکەت**. کلیککردن لەسەر **Sign in** دەکرێت پەنجەرەیەکی نوێ بکاتەوە کە پێویستی بە **API credentials** هەیە.

![Prompt for Sign in to Zapier using API credentials](/img/admin/webhooks-list.png)

بۆ پاندۆشنی ئامێرە تۆڕیەکەت (network admin panel) بگواشبە و بچۆ بۆ **Ultimate Multisite > Settings** > **API & Webhooks** و بەدوای بەشی API Settings بگەڕێ.

راستکردنەوەی آپشنەکە کە دەبێت بۆ کارکردنی ئەم پەیوەندییە پێویستە هەڵبگرە.

![Settings of API and Webhooks with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

لە فیلداي API Key و API Secret، ئایکۆنی **Copy to Clipboard** بەکاربهێنە و ئەو بەهایانە لەسەر شاشەی یەکگرتوو (integration screen) چێ بکە.

لە فیلداي URL، پڕکردنەوەی تەواوی URL-ی تۆڕی خۆت بنووسە، لەگەڵ پرۆتۆکۆڵی (HTTP یان HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

بۆ پێشچوونەوەی هەنگاوەکەت، پەڕە **Yes, Continue** چێ بکە بۆ پڕۆشتنی هەنگاوە دوایینەکە. ئەگەر هەموو شتێک بە باشی بێت، دەتوانیت بە یاری نوی خۆت ڕابگرێیت! بۆ دروستکردنی triggerیەکی نوێ، چێی **Continue** بکە.

## چۆن triggerیەکی نوێ دروست بکەیت

ئێستا کە یەکگرتووت کردووە دەتوانیت ئەو واژینە (events) بەکاربهێنراوەکان ببینیت. بۆ ئەم ڕێنماییە، بڕۆین بۆ واژینی **payment_received**.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

کاتێک واژینەکە هەڵبگرت و چێی **continue** کرد، **test step** (هەنگاوی تاقیکردنەوە) دەردەکەوێت.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

لە ئەم قۆناغدا، Zapier دەدات تاقیکردنی ئەوەی ئایا دەتوانرێت **payload تایبەتی ئەو واژینە بۆ ئەو واژینە وەربگرێت**. لە واژینیەکانی دیکەی هەمان جۆر، زانیارییەکی هاوشێوە بەم شێواز دەفرستێت.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

لە ڕێنماییەکەماندا، تاقیکردنەوەکە بە سەرکەوتنی تەواو ئەنجام دووەم و زانیاریی نموونەی پەیامەکە دەگەڕێتەوە. ئەم زانیارییە نموونەییە یارمەتیدەر دەبێت بۆ ڕێنمایی ئێمە لە کاتی دروستکردنی actions (اکشنەکان). Trigger (دایگر) ئێستا دروستکراوە و ئامادەیە بۆ پەیوەستکردن بە ئەپڵیکەیشنی دیکەکان.

## چۆن Action دروست بکەین

Actions زانیاری لە triggerەکانی تر وەردەگرن بۆ دروستکردنی نوێی دەربڕین لە تۆڕەکەتدا.

لە کاتی **درستکردنی ایکشنێک (creating an action step)**، تۆ Ultimate Multisite **Beta** و ئەو پڕۆسەیەی **Create Items on Ultimate Multisite** هەڵدەبگریت.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

لە هەنگاوە دوایەکەدا یان خودی ئۆتنتیکەیشنی خۆت دروست دەکەیت، وەک ئەوەی لە **How to start** کردین، یان ئۆتنتیکەیشنی دروستکراوێک هەڵدەبگریت. لەم ڕێنماییەدا ئێمە هەمان ئۆتنتیکەیشنی پێشتر دروستکراوەکە دەبینینەوە.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### ڕێکخستنی Action (Setting up the Action)

ئەمە **هەنگاوی سەرەکیی ایکشنەکە**یە و لێرە شتەکان کەمێک جیاوازن. یەکەم زانیارییەک کە دەبگریت بریتییە لە **Item**. Item بریتییە لە **مۆدێلی زانیاریی تۆڕەکەت** وەک **Customers (کڕیارەکان)، Payments (پایداکردن/فەرمییەکان)، Sites (سایتەکان)، Emails (ئەیلەکان)** و دیکە.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

کاتێک دەبگریت یەکێک لەو Items، فۆرمەکە **دابەش دەبێت بۆ ئەوەی ئەو فیلدە پێویست و ئاسایی** بۆ ئەو Item هەڵبگرێت کە هەڵبگرتوویت.

بۆ نموونە، کاتێک Item-ی **Customer (کڕیار)** هەڵدەگریت، فیلدەکانی فۆرمەکە هەموو ئەو شتان دەهێنن کە پێویستن بۆ ئەوەی کڕیاری نوێ لە تۆڕەکەتدا دروست بکەیت.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

پاش پڕکردنەوەی هەموو فیلدەکانی **required (پێویست)** و 클릭 کردن بە continue، شاشەیەکی کۆتایی دەبینیت کە ئەو فیلدە پڕکراوەکان و ئەو فیلدانەی پڕ نەکراون دەردەخات.

![تست اکشنی زاپیر کە فیلدەکانی پڕ و پڕ نەکراون دەردەخات](/img/admin/webhooks-list.png)

کاتێک تستی سەرکەوتوو تەواو بوو، اکشنت ڕێکخراوە. گرنگە لەسەر تۆڕەکەت چاک بکەیتەوە کە ئەگەر ئەو بابەتە بە تستی اکشنت دروستکراوە یان نا.
