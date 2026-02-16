---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Mtazamo wa Kwanza kuhusu Webhooks (v2)

_**TAHADHARI: Kumbuka kuwa kipengele hiki au makala hii ni kwa watumiaji wa hali ya juu.**_

**Webhook** ni njia ya programu au software kama Ultimate Multisite kutoa taarifa za papo hapo kwa programu nyingine. Webhook inatuma data au payloads kwa programu nyingine mara tu inapotokea, maana yake **unapata data mara moja.**

Hii inasaidia ikiwa unahitaji kuunganisha au kupitisha data fulani kutoka Ultimate Multisite kwenda CRM au mfumo mwingine kila wakati tukio linapotokea. Kwa mfano, unahitaji kutuma jina na anwani ya barua pepe ya mtumiaji kwenye orodha ya barua pepe kila wakati akaunti mpya ya mtumiaji inapotengenezwa.

## Jinsi ya kutengeneza webhook

Ili kutengeneza webhook, nenda kwenye dashibodi yako ya network admin. Bofya **Ultimate Multisite > Webhooks > Add New Webhook.**

![Ukurasa wa orodha ya Webhooks wenye kitufe cha Add New Webhook](/img/admin/webhooks-list.png)

Unapotengeneza webhook mpya utaulizwa taarifa kama **Name, URL,** na **Event**. Unaweza kutumia jina lolote unalotaka kwa webhook yako. Sehemu muhimu zaidi ni URL na Event.

![Fomu ya webhook mpya yenye sehemu za Name, URL, na Event](/img/admin/webhooks-list.png)

URL ni **endpoint au mahali pa mwisho** ambapo Ultimate Multisite itatuma **payload au data**. Hii ndiyo programu itakayopokea data.

Zapier ndiyo suluhisho la kawaida ambalo watumiaji hutumia kufanya muunganisho na programu za wahusika wengine kuwa rahisi zaidi. Bila jukwaa kama Zapier, utahitaji kutengeneza function maalum ambayo itakamata data na kuichakata. Soma makala hii kuhusu **jinsi ya kutumia webhook ya Ultimate Multisite na Zapier.**

Katika makala hii, tutaangalia dhana ya msingi ya jinsi webhook inavyofanya kazi na matukio yanayopatikana katika Ultimate Multisite. Tutatumia tovuti ya mhusika mwingine inayoitwa [requestbin.com](https://requestbin.com/). Tovuti hii itatuwezesha kutengeneza endpoint na kukamata payload bila kuandika msimbo wowote. _**Onyo: kinachofanya ni kutuonyesha kuwa data imepokelewa.**_ Hakutakuwa na uchakataji au kitendo chochote kitakachofanywa kwa payload.

Nenda [requestbin.com](https://requestbin.com/) na bofya Create Request Bin.

![Tovuti ya RequestBin kitufe cha Create Request Bin](/img/admin/webhooks-list.png)

Baada ya kubofya kitufe hicho, itakuuliza uingie ikiwa tayari una akaunti au ujisajili. Ikiwa tayari una akaunti itakupeleka moja kwa moja kwenye dashibodi yao. Kwenye dashibodi yao, utaona mara moja endpoint au URL unayoweza kutumia kutengeneza webhook yako ya Ultimate Multisite.

![Dashibodi ya RequestBin inayoonyesha URL ya endpoint](/img/admin/webhooks-list.png)

Endelea na kunakili URL na urudi Ultimate Multisite. Weka endpoint kwenye sehemu ya URL na uchague tukio kutoka kwenye dropdown. Katika mfano huu, tutachagua **Payment Received**.

Tukio hili linasababishwa kila wakati mtumiaji anapofanya malipo. Matukio yote yanayopatikana, maelezo yake, na payloads zimeorodheshwa chini ya ukurasa. Bofya kitufe cha **Add New Webhook** ili kuhifadhi webhook.

![Webhook iliyosanidiwa na tukio la Payment Received](/img/admin/webhooks-list.png)

Sasa tunaweza kutuma tukio la majaribio kwenye endpoint ili tuone kama webhook tuliyotengeneza inafanya kazi. Tunaweza kufanya hivi kwa kubofya **Send Test Event** chini ya webhook tuliyotengeneza.

![Chaguo la Send Test Event chini ya webhook](/img/admin/webhooks-list.png)

Hii inaonyesha dirisha la uthibitisho linalosema kuwa jaribio limefanikiwa.

![Uthibitisho wa mafanikio ya tukio la majaribio la webhook](/img/admin/webhooks-list.png)

Sasa tukurudi kwenye tovuti ya _Requestbin_ tutaona kuwa payload imepokelewa ikiwa na data za majaribio.

![RequestBin inayoonyesha data ya payload ya webhook iliyopokelewa](/img/admin/webhooks-list.png)

Hii ndiyo kanuni ya msingi ya jinsi webhook na endpoints zinavyofanya kazi. Ikiwa utatengeneza endpoint yako mwenyewe, utahitaji kutengeneza function maalum ya kuchakata data unayopokea kutoka Ultimate Multisite.
