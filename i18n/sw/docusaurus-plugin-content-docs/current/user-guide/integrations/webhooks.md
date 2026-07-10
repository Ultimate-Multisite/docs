---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Mtazamo wa Kwanza kuhusu Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**TAHADHARI: Kumbuka kwamba kipengele au makala hii ni kwa watumiaji wa kiwango cha juu.**_

**webhook** ni njia ya programu au software kama Ultimate Multisite kutoa taarifa za muda halisi kwa applications nyingine. webhook hupeleka data au payloads kwa applications nyingine tukio linapotokea, ikimaanisha **unapata data mara moja.**

Hii ni muhimu ikiwa unahitaji kuunganisha au kupitisha data fulani kutoka Ultimate Multisite kwenda kwenye CRM nyingine au mfumo kila wakati tukio linapoanzishwa. Kwa mfano, unahitaji kutuma jina na anwani ya barua pepe ya mtumiaji kwenye orodha ya barua kila wakati akaunti mpya ya mtumiaji inapoundwa.

## Jinsi ya kuunda webhook {#how-to-create-a-webhook}

Ili kuunda webhook, nenda kwenye dashboard ya msimamizi wa mtandao wako. Bofya **Ultimate Multisite > Webhooks > Add New Webhook.**

![Ukurasa tupu wa orodha ya Webhooks wenye kitufe cha Add New Webhook](/img/admin/webhooks-list-empty.png)

Kisha unaweza kuhariri usanidi wa webhook:

![Fomu ya Add New Webhook yenye nyuga za Name, Event, na URL](/img/admin/webhook-add-modal.png)

Unapounda webhook mpya utaombwa taarifa kama **Name, URL,** na **Event**. Unaweza kutumia jina lolote unalotaka kwa webhook yako. Nyuga muhimu zaidi ni URL na Event.

![Kiolesura cha kuhariri webhook kinachoonyesha uga wa URL na hakikisho la payload](/img/admin/webhook-url-field.png)

URL ni **endpoint au mahali pa mwisho** ambapo Ultimate Multisite itatuma **payload au data**. Hii ndiyo application itakayopokea data.

Zapier ndiyo suluhisho la kawaida zaidi ambalo mtumiaji hutumia kufanya muunganisho na application ya 3rd party kuwa rahisi zaidi. Bila jukwaa kama Zapier, utahitaji kuunda mwenyewe function maalum itakayokamata data na kuichakata. Tazama makala hii kuhusu **jinsi ya kutumia webhook ya Ultimate Multisite na Zapier.**

Katika makala hii, tutaangalia dhana ya msingi ya jinsi webhook inavyofanya kazi na matukio yanayopatikana katika Ultimate Multisite. Tutatumia site ya 3rd party inayoitwa [requestbin.com](https://requestbin.com/). Site hii itaturuhusu kuunda endpoint na kukamata payload bila kufanya coding yoyote. _**Kanusho: itakachofanya tu ni kutuonyesha kwamba data imepokelewa.**_ Hakutakuwa na uchakataji au aina yoyote ya kitendo kitakachofanywa kwenye payload.

Nenda [requestbin.com](https://requestbin.com/) na ubofye Create Request Bin.

Baada ya kubofya kitufe hicho, itakuomba uingie ikiwa tayari una account au ujisajili. Ikiwa tayari una account itakupeleka moja kwa moja kwenye dashboard yao. Kwenye dashboard yao, utaona mara moja endpoint au URL unayoweza kutumia katika kuunda webhook yako ya Ultimate Multisite.

Endelea na unakili URL kisha urudi Ultimate Multisite. Weka endpoint kwenye uga wa URL na uchague event kutoka kwenye dropdown. Katika mfano huu, tutachagua **Payment Received**.

Event hii huanzishwa kila mtumiaji anapofanya malipo. Events zote zinazopatikana, maelezo yake, na payloads zimeorodheshwa chini ya ukurasa. Bofya kitufe cha **Add New Webhook** ili kuhifadhi webhook.

![Dropdown ya event ya webhook ikiwa Payment Received imechaguliwa](/img/admin/webhook-event-picker.png)

Sasa tunaweza kutuma event ya majaribio kwenye endpoint ili tuone kama webhook tuliyounda inafanya kazi. Tunaweza kufanya hivi kwa kubofya **Send Test Event** chini ya webhook tuliyounda.

![Orodha ya Webhooks ikionyesha webhook moja iliyosanidiwa na kitendo cha Send Test](/img/admin/webhooks-list-populated.png)

Hii inaonyesha dirisha la uthibitisho likisema kwamba jaribio limefanikiwa.

![Matokeo ya event ya majaribio ya webhook baada ya kutuma payload ya majaribio](/img/admin/webhook-test-result.png)

Sasa tukirudi kwenye site ya _Requestbin_ tutaona kwamba payload imepokelewa ikiwa na baadhi ya data ya majaribio.

Hii ndiyo kanuni ya msingi ya jinsi webhook na endpoints zinavyofanya kazi. Ikiwa utaenda kuunda endpoint maalum, utahitaji kuunda function maalum ya kuchakata data unayopokea kutoka Ultimate Multisite.
