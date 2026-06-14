---
title: یەکگرتووکردنی Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integration of Ultimate Multisite with Zapier

In one of our articles, we discussed [Webhooks](webhooks.md) and how they can be used to integrate with third-party applications.

Using webhooks is a bit complicated because it requires advanced knowledge in coding and catching payloads. Using **Zapier** is a way for you to get around that.

Zapier has integration with over 5000+ apps, which makes communication between different applications easier.

You can create **Triggers** that will be set off when events happen on your network (for example, an account is created and triggers the `account_create` event) or generate **Actions** on your network reacting to external events (for example, creating a new account membership in your Ultimate Multisite network).

This is possible because **Ultimate Multisite Zapier's triggers** and actions are powered by the [REST API](https://developer.ultimatemultisite.com/api/docs/).

## How to start

First, search for Ultimate Multisite in the Zapier app list. Alternatively, you can click [this link](https://zapier.com/apps/wp-ultimo/integrations).

Go to your dashboard and press the **+** **Create Zap** button on the left sidebar to set up a new Zap.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

You will be redirected to the Zap creation page.

In the search box type "wp ultimo". Click to choose the **Beta** version option.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

After selecting our app, choose the available event: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Now we need to give Zapier access to **your network**. Clicking on **Sign in** will open a new window requiring the **API credentials**.

![Prompt for Sign in to Zapier API credentials](/img/admin/webhooks-list.png)

Bi navigatî panel administratorin netwirkiya xwe û ji **Ultimate Multisite > Settings** > **API & Webhooks** bi naveda li girêdaya API (API Settings) bibîne.

Rojên **Enable API** (Aktivekirina API) bi seçîna wê bibîne, chunke ev ji bo karbirina vê porsê ne hewce ye.

![Settings for API and Webhooks with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Ji berên vê yekê, ji aliyên **Copy to Clipboard** li felên API Key û API Secret bi kopîkirin û wê valuriyan li ser ekranê agrejê (integration screen) bistîrin.

Li felên URL, URL-a gelek netwirka xwe bipêjin, ku piştî protokolê (HTTP an HTTPS) jî tê dame kirin.

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Ji berê, ji bo pêşve xistin **Yes, Continue** (Ew, davam bike) butonê bi klik bibîne. Hever tişt dikare bi rastî bibe, hûn bi hesabê nû ya xwe yê hatine pênkarî bi destpêkê dîtin! Ji bo nirxinkirina nû ya trigger, ji bo **Continue** (Davam bike) bi klik bibîne.

## Çawa ji bo nirxinkirina nûyê Trigger (Trigger) kirin

Niha ku hesabê we hatine pênkarî ye, hûn dikarin vê gelekî ji aliyên ku hewce ne li berînê binên. Ji bo ev dersê, em **payment_received** event-ê (gelekî pêwînî) bi seçîna wê bibînin.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Dema ku gelekî hatine seçe û hûn bi **continue** (davam bike) klik dikin, yek **test step** (pêşnînga test) derê dabehine.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Li vê etapê de, Zapier têkîna wê dike ku tu çawa karê we dikare **payload-a taybetî ya wê event-ê bişîne**. Li gelekî dinên heman tipe, maghalingan bi ev same şem (structure) derê kirin.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

لە ڕێگەی ئەم ڕێنماییەدا، تاقیکردنەوەکە بە سەرکەوتوویی تەواو بووە و زانیاریی نموونەی پەیامەکە دەگەڕێتەوە. ئەم زانیارییە نموونەییە یارمەتی ئێمە دەدات لە کاتی دروستکردنی اکشنەکاندا. تریگرەکەت ئێستا دروستکراوە و ئامادەیە بۆ پەیوەستکردن بە ئەپڵیکاتەکانی دیکە.

## چۆن اکشن (Action) دروست بکەین

اکشنەکان زانیاری لە تریگرەکانی دیکە بەکاری دەهێنن بۆ دروستکردنی نوێی پۆلێسداکەت (network).

لە **درستکردنی هەنگاوی اکشنەکە**، تۆ Ultimate Multisite **Beta** و ئەو ئەوپەڕووشەی **Create Items on Ultimate Multisite** دەبنە چاودێری.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

لە هەنگاوەکەی دوای ئەمە، یان خودی تایبەتمەندکردنی خۆت (authentication) دروست دەکەیت، وەک ئەوەی لە **How to start** کردین، یان یان تایبەتمەندکردنێکی پێشتر دروستکراو دەبنە چاودێری. لەم ڕێنماییەدا ئێمە هەمان تایبەتمەندکردنی پێشتر دروستکراون بەکاری دەهێنین.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### ڕێکخستنی اکشنەکە (Setting up the Action)

ئەمە **هەنگاوی سەرەکیی اکشنەکە**یە و لێرەدا شتەکان کەمێک جیاوازن. یەکەم زانیارییەک کە دەبنە چاودێری، **Item** (بۆشکن). Item بریتییە لە **مۆدێلی زانیاریی تۆی تۆڕەکە** وەک **Customers, Payments, Sites, Emails** و دیکە.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

کاتێک دەبنە چاودێری، فۆرمەکە **پێشوەختەی پێویست و باوەکان بۆ ئەو Itemە هەڵدەگرێت کە هەڵبژاردووە**.

بۆ نموونە، کاتێک **Customer** (کڕیار) دەبنە چاودێری، فیلدەکانی فۆرمەکە هەموو ئەو شتە دەهێنن کە پێویستە بۆ دروستکردنی کڕیاری نوێ لە تۆڕەکەدا.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

پاش پڕکردنەوەی هەموو فیلدەکانی **required** (پێویست) و 클릭 کردن بەردەوامبوون، شاشەیەکی کۆتایی دەبینیت کە ئەو فیلدە پڕکراون و ئەو فیلدانەی پڕ نەکراون دەردەخات.

![Test aksion wisa kirtin u boka a le niza](https://example.com/img/admin/webhooks-list.png)

Dema ku te testê wekîtoya we bi serketin û sasil e, aksiyona we hatine ravasandin (configured). Guherîtiye jî ji kerê xwe li neteweyê xwe çêkirin lê vê mîtirê bi testê aksiyona we hatibû çêkirin.
