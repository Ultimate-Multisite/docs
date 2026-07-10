---
title: وەب‌هۆکەکان
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Navojîna Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**TAVİZE: Liistek an evê ku an jî li ser vê materyal ji bo estefedariyên avadî ye.**_

**Webhook** mîna rêyek e ku yek aplikasyon an jî yazılım wek Ultimate Multisite ji aliyê aplikasyona din ve hatibe berxistin. Webhook maghsalên data an payloads ji aliyê aplikasyona din hîn jî di nav de, li wî tê wateya ku tu **data bi rastî û bi hewcedariyê dît.**

Ev ji bo weyî gelek maddeye ye ku tu hewce dikî integrasyon bikînin an data yên taybetî ji Ultimate Multisite bi her welat ku yekîrê (event) hatibe vekirin. Li felka, tu hewce yî ku nav û adresa e-mailê gelek listeyê peyabûnê bi her welat ku yekîrê nû ya kartekî (user account) hatibe çêkir.

## Çawa webhook çêbikînin {#how-to-create-a-webhook}

Ji bo çêkirina webhook, ji dashboard-a admin yê neteweyê xwe baziribe. Li ser **Ultimate Multisite > Webhooks > Add New Webhook** klik dikirin.

![Pajaya li listek bê webhooks bi butona Add New Webhook](/img/admin/webhooks-list-empty.png)

Tu دشî bi paşê konfigurasyona webhook ji maddeyan wekî **Name, URL,** û **Event** bedewar bikî.

![Forma Add New Webhook bi felên Name, Event û URL](/img/admin/webhook-add-modal.png)

Dema çêkirina webhook nûyî, ji tu dê maghna li ser maddeyan wekî **Name, URL** û **Event** bipirsin. Tu dikarin navekî ku hûn dixwazin ji bo webhook-a xwe bikar bînin. Girên girîngin an jî URL û Event in.

![Girtuşa edit yê Webhook ku felên URL û preview ya payload nîşan da](/img/admin/webhook-url-field.png)

URL e **endpoint an destgihê** ku Ultimate Multisite data an payloads ji ber wê bişije parve bike. Ev aplikasyona ye ku data re bixwîne.

Zapier girîngترین چارەسەرە ku karê estefedariyê bi aplikasyona xuretiyê (3rd party application) bi rastî bikin bi hêsانتر دەکات. Bi heman ku platforma wek Zapier ne hebe, tu hewce dikî ji manu njëya custom bike ku data re bişîne û parase bike. Li vê materyalê li ser **çawa ji Ultimate Multisite webhook bi Zapier vezînin** bibîne.

لە ئەم بابەتەدا، دەبینین کە چۆن کارکردنی webhookی بنەڕەتی و ڕووداوەکان لە Ultimate Multisite چیین. ئێمە پەیامی یەکەم بەکار دێنین [requestbin.com](https://requestbin.com/) کە ئەو شوێنەیە دەبێت بۆ دروستکردنی endpoint و گرتکردنەوەی payload بێ ئەوەی پێویستیان بە کۆدنووسین هەبێت. _**تێبینی: هەموو کارەکەی بریتییە لە نیشاندانی ئەوەی داتاکە لەسەرەتادا دەستپێکراوە.**_ هیچ جۆرە پرۆسێسێک یان کارکردنێک لەسەر payload ئەنجام دەدرێت.

بڕۆ بۆ [requestbin.com](https://requestbin.com/) و پەڕەی Create Request Bin بکە.

پاش klik کردن بەو دۆم، پێشت دەڵێت کە ئایا تۆ ئەکاونتێکت هەیە یان تۆمار بکەیت. ئەگەر ئەکاونتێک هەبێت، ڕاستەوخۆ دەبات بۆ داشبۆردەکەی. لە داشبۆردەکەی، بە خێرایی دەبینیت endpoint یان URL کە دەتوانیت لە دروستکردنی webhookی Ultimate Multisite بکەیت.

ئێستا URL یەکە بکە و بگەڕەەوە بۆ Ultimate Multisite. Endpoint-ەکە لە فیلدی URL دابنێ و ڕووداوێک لە دراپداونەکە هەڵبژێرە. لەم نموونەدا، ئێمە **Payment Received** (پایلامان وەربگرترا) دەبینین.

ئەم ڕووداوە هەر کاتێک یەکێک لە بەکارهێنەران پارە دابەش دەکات چالاک دەبێت. هەموو ئەو ڕووداوانەی هەن، وەسفیان، و payloadی نووسراوەکان لە خاڵی خوارەوەی پەڕەکەدا لیست کراوە. بۆ شۆڕکردنی webhookەکە، پەڕەی **Add New Webhook** بکە.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

ئێستا دەتوانین یەک ڕووداوی تاقیکردنەوە بۆ endpointی بفرێربکەین بۆ ئەوەی ببینین کە webhookی دروستکراوە کار دەکات یان نا. دەتوانین ئەمە بکەین بە klik کردن لەسەر **Send Test Event** لە خواردا webhookی دروستکراوەکەت.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

ئەمە پەنجەرەیەکی پشکنینی دەردەخات کە دەڵێت تاقیکردنەوەکە سەرکەوتوو بووە.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

ئەمانەیەک ئەگەر بگەڕێین بۆ سێتی _Requestbin_ دەبینیت کە بارکردنەکە (payload) وەربگرۆڵا و لەخۆداخۆ هەندێك داتا تستی هەیە.

ئەمە بنەڕەتە چۆنیەتی کارکردنی webhook و endpointsە. ئەگەر تۆ دەتەوێت یەک endpoint تایبەت دروست بکەیت، پێویستە فانکشنێکی تایبەت دروست بکەیت بۆ پرۆسێسکردنی داتایەک کە لە Ultimate Multisite دەبینیت.
