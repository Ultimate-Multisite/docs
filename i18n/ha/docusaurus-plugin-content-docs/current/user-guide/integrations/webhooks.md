---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# B Ga'a Farko Game da Webhooks (v2)

_**GABARDA: Ka kunya wannan ƙarin ko rubutun ya dace ga masu amfani da girma.**_

Wannan **webhook** wajen in samar da wata manhaja ko software kamar Ultimate Multisite su ba wasu manhajoji daban-daban bayanan da ke cikin gaggawa (real-time). Webhook yana isar da data ko payloads ga wasu manhajoji yayin da abubuwa ke faruwa, wanda ma'anarsa ita ce **kana samun data nan take.**

Wannan zai taimaka maka idan kana buƙatar haɗa ko tura wani abu daga Ultimate Multisite zuwa CRM ko tsarin wani kowace lokacin da wata matsala ta faru. Misali, kana buƙatar a tura sunan amfanin da aka yi wa kai da imel ɗin sa ga babban jerin masu karɓar imel kowace lokacin da aka ƙirƙira sabon asusun amfani.

## Yadda ake ƙirƙirar webhook {#how-to-create-a-webhook}

Don ƙirƙirar webhook, tafiya zuwa dashboard na gudanar da ayyukan ku (network admin dashboard). Danna kan **Ultimate Multisite > Webhooks > Add New Webhook.**

![Wurin lissafin Webhooks da babbar hanyar Add New Webhook](/img/admin/webhooks-list-empty.png)

Daga wannan lokacin za ka iya gyara tsarin webhook:

![Shigar wani Add New Webhook tare da makamakin Name, Event, da URL](/img/admin/webhook-add-modal.png)

Lokacin da kake ƙirƙirar sabon webhook, za a tambaye ka bayanai kamar **Name, URL,** da **Event**. Za ka iya amfani da wani sunan kake so don wannan webhook ɗin. Ma'aikatan mafi muhimmanci sune URL da Event.

![Wurin gyara Webhook yana nuna makamakin URL da bayanin data (payload preview)](/img/admin/webhook-url-field.png)

URL shine **endpoint ko wuri na ƙarshe** da Ultimate Multisite za ta aiko da tura **payload ko data**. Wannan shi ne manhajar da za ta karɓi data ɗin.

Zapier ita ce mafi yawan matsakaici da masu amfani ke amfani don sauƙaƙe haɗa tare da manhajoji na waje (3rd party application). Ba tare da wata babban tsari kamar Zapier ba, za ka buƙaci ƙirƙirar wani shafi na musamman (custom function) dake karɓar data da kuma lissafa shi. Ka gani wannan rubutun game da **yadda ake amfani da Ultimate Multisite webhook tare da Zapier.**

لە ئەم بابەتەدا، ئێمە دەبینین کە چۆن کار دەکات بەشی بنەڕەتیی webhook و ئەو ڕووداوەکانەی لە Ultimate Multisite هەن. ئێمە واژینێکی سێی یارییەکی ناوی [requestbin.com](https://requestbin.com/) بەکاردەهێنین. ئەم سایتان دەبێت بێت بۆ ئەوەی بتوانین endpointێک دروست بکەین و payload (داتای گواستراو) وەربگرین بەبێ ئەوەی هیچ کۆدی بنووسین. _**تێبینی: هەمووی ئەو کارەی دەکات ئەوەیە کە نیشان بدات کە داتاکە لەسەربرد.**_ هیچ جۆرە پرۆسێسین یان کارێک بۆ payload ئەنجام دەدرێت.

بڕۆ بۆ [requestbin.com](https://requestbin.com/) و پەڕە بکە بەسەر دڵنیایی داواکارییەکە (Create Request Bin).

پاش پەڕاندنی ئەو بٹنە، پێشت دەدات کە Login بکەیت ئەگەر یەکەم جار نیشانەی هەژمارت نییە یان تۆمار بکە. ئەگەر یەکەم جار هەژماری هەیە، ڕێدەبێت بۆ داش보ارەکە بگات. لەو داشبۆارەدا، بە خێرایی دەبینیت endpoint یان URL کە دەتوانیت لە دروستکردنی webhookی Ultimate Multisite بکەیت بەکاربهێنیت.

ئێستا URL یەکە بکۆ و بدۆشەوە بۆ Ultimate Multisite. Endpoint-ەکە لە فیلدی URL دابنێ و ڕووداوێک لەسەر دراپداون هەڵبژێرە. لەم نموونەدا، ئێمە **Payment Received** (پارەم پێدراوە) دەبینین.

ئەم ڕووداوە هەر کاتێک یەکێک لە بەکارهێنەران پارە دابنێت. هەموو ئەو ڕووداوانەی هەن، وەسفیان، و payloadیەکانیان لە خاڵی نیشتەورەوەی لاپەڕەکەدا لیست کراون. بۆ شۆڕاندنی webhookەکە، پەڕە بکە بەسەر دڵنیایی داواکارییەک (Add New Webhook).

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

ئێستا دەتوانین ڕووداوێکی تاقیکردنەوە بۆ endpointەکە بفرێربکەین بۆ ئەوەی ببینین کە webhookی دروست کردووین کار دەکات یان نا. دەتوانین ئەمە بکەین بە پەڕاندنی **Send Test Event** لە خوارەوەی webhookی دروست کردووین.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

ئەمە نافەندییەکی دەربڕینە کە تاقیکردنەوەکە سەرکەوتوو بووە.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Idan muka koma wajen wurin _Requestbin_, za mu ga cewa payload ya karɓi yana da wasu bayanai na gwaji.

Wannan shi ne ka'idar asali na yadda webhook da endpoints ke aiki. Idan kana so ka ƙirƙira endpoint na musamman, dole ne ka ƙirƙira wani shiri na musamman don lura da bayanai da kake karɓar daga Ultimate Multisite.
