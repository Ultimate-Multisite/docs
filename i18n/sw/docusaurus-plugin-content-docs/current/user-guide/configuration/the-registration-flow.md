---
title: Mtiririko wa Usajili
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Mtiririko wa Usajili (v2)

_**KUMBUKA MUHIMU: Makala hii inarejelea Ultimate Multisite toleo la 2.x.**_

Watumiaji wanaweza kujisajili kwenye mtandao wako kwa njia tofauti. Wanaweza kutumia fomu yako ya usajili au kiungo kinachoweza kushirikiwa cha plan iliyochaguliwa mapema. Hapa tutakuonyesha jinsi wateja wako wanavyoweza kujisajili kwenye mtandao wako kwa kutumia njia zilizopo na kinachotokea baada ya kujisajili kwenye mtandao wako.

## Kutumia Fomu ya Usajili: {#using-the-registration-form}

Huu ndio mchakato wa kawaida wa usajili. Unaunda ukurasa wa usajili wenye **fomu ya malipo** na hapa ndipo wateja wako watakapokwenda kujisajili kwenye mtandao wako na kujiunga na plan. Unaweza kuwa na kurasa nyingi za usajili, kila moja ikiwa na fomu tofauti ya usajili ikiwa unataka.

Ukurasa chaguomsingi wa usajili ni [_**yourdomain.com/register**_](http://yourdomain.com/register), lakini unaweza kubadilisha hili wakati wowote kwenye **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Baada ya mtumiaji kufika kwenye ukurasa wako wa usajili (kwa kawaida kwa kubofya kitufe cha **Ingia** au **Nunua sasa**), wataona fomu yako ya usajili hapo.

![Fomu ya usajili iliyoonyeshwa kwenye ukurasa wa usajili](/img/frontend/registration-form.png)

Huu hapa ni mfano wa fomu ya malipo kama inavyoonekana kwenye frontend:

![Fomu ya usajili ya malipo ya frontend](/img/config/checkout-frontend-registration.png)

Wanachopaswa kufanya ni kujaza sehemu zote za lazima - barua pepe, jina la mtumiaji, nenosiri, n.k... - na kulipia plan au kuthibitisha anwani yao ya barua pepe ikiwa wanajisajili kwa plan ya bure au plan ya kulipia yenye kipindi cha majaribio bila taarifa za malipo.

Kwenye ukurasa wa "Asante", wataona ujumbe unaowaambia ikiwa wanahitaji kuthibitisha anwani yao ya barua pepe au ikiwa tovuti yao tayari imewashwa na wanaweza kuanza kuitumia.

![Ukurasa wa Asante baada ya usajili](/img/frontend/registration-thank-you.png)

Ikiwa uthibitisho wa anwani ya barua pepe unahitajika, watahitaji kwenda kwenye kikasha chao cha barua pepe na kubofya kiungo cha uthibitishaji. Tovuti yao haitawashwa ikiwa anwani yao ya barua pepe haijathibitishwa.

Ikiwa wamejisajili kwenye plan ya kulipia au uthibitishaji wa barua pepe si wa lazima kwenye mtandao wako, tovuti yao itawashwa mara tu baada ya malipo na wataonyeshwa kiungo cha kuingia kwenye Dashboard yao.

![Tovuti imewashwa ikiwa na kiungo cha kuingia kwenye Dashboard](/img/frontend/site-activated.png)

## Kutumia Kiungo Kinachoweza Kushirikiwa: {#using-a-shareable-link}

Mchakato wa kujisajili kwa kutumia kiungo kinachoweza kushirikiwa kimsingi ni sawa na fomu ya usajili, tofauti pekee ni kwamba kwa kutumia kiungo kinachoweza kushirikiwa, wateja wako wanaweza kuwa na bidhaa au kiolezo cha tovuti kilichochaguliwa mapema kwenye fomu ya malipo (rejelea sehemu ya Kuchagua mapema bidhaa na violezo kupitia vigezo vya URL) au labda msimbo wa kuponi ulioongezwa (rejelea sehemu ya Kutumia Vigezo vya URL).

Mchakato wa usajili utakuwa uleule: watahitaji kujaza jina lao, jina la mtumiaji, anwani ya barua pepe, jina na kichwa cha tovuti, n.k... lakini plan au kiolezo cha tovuti kitakuwa tayari kimechaguliwa mapema kwa ajili yao.

### Kujisajili Kwa Kutumia Malipo ya Mkono: {#registering-using-manual-payments}

Ikiwa hutaki kutumia PayPal, Stripe au lango lingine lolote la malipo linalotolewa na Ultimate Multisite au miunganisho yake ya add-on, unaweza kutumia malipo ya mkono kwa wateja wako. Kwa njia hii, unaweza kuwatengenezea ankara ili walipe kwenye kichakataji chako cha malipo unachopendelea baada ya kujisajili kwenye mtandao wako.

Mchakato wa usajili utakuwa sawa kabisa na hapo juu, lakini kwenye ukurasa wa usajili wateja wako wataona ujumbe unaosema kwamba watapokea barua pepe yenye maelekezo zaidi ya kukamilisha malipo.

![Ujumbe wa malipo ya mkono wakati wa usajili](/img/frontend/registration-manual-notice.png)

Na baada ya usajili kukamilika, wataona maelekezo ya malipo uliyoweka (na pia watayapokea kwenye barua pepe yao).

![Maelekezo ya malipo yanayoonyeshwa baada ya usajili](/img/frontend/registration-payment-instructions.png)

Maelekezo ya malipo yanaweza kubadilishwa kwenye **Ultimate Multisite > Settings > Payments** baada ya kuwasha chaguo la malipo la **Mkono**:

![Kiwashio cha malipo ya mkono chenye sehemu ya maelekezo ya malipo](/img/config/manual-gateway-settings.png)

Baada ya wateja wako kukamilisha malipo ya mkono na kukutumia uthibitisho, unahitaji **kuthibitisha malipo kwa mkono** ili kuamsha uanachama na tovuti ya mteja.

Ili kufanya hivyo, nenda kwenye **Ultimate Multisite > Payments** na utafute malipo ya mteja. Bado yanapaswa kuonyesha hali ya **Inasubiri**.

![Orodha ya malipo yenye malipo ya mkono yanayosubiri](/img/admin/payments-list.png)

Bofya nambari ya malipo na utaweza kubadilisha hali yake kuwa **Imekamilika**.

![Ukurasa wa maelezo ya malipo](/img/admin/payment-edit.png)

![Kubadilisha hali ya malipo kuwa Imekamilika](/img/admin/payment-status-completed.png)

Baada ya kubadilisha hali yake kuwa **Imekamilika** , unapaswa kuona ujumbe wa **Washa uanachama**. Washa chaguo hili **on** ili kuamsha uanachama na tovuti inayohusishwa na mteja huyu. Kisha, bofya **Hifadhi Malipo**.

![Kiwashio cha Washa uanachama na kitufe cha Hifadhi Malipo](/img/admin/payment-activate-membership.png)

Mteja wako sasa anapaswa kuweza kufikia Dashboard na vipengele vyote alivyojiunga navyo.
