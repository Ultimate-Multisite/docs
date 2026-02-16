---
title: Uunganisho wa Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Kuunganisha Ultimate Multisite na Zapier

Katika moja ya makala, tulijadili [Webhooks](webhooks.md) na jinsi zinavyoweza kutumika kuunganisha programu za wahusika wengine.

Kutumia webhooks ni ngumu kidogo kwani kunahitaji ujuzi wa hali ya juu wa kuprogramu na kunasa payloads. Kutumia **Zapier** ni njia ya kukusaidia kuepuka ugumu huo.

Zapier ina muunganiko na programu zaidi ya 5000+ ambayo inafanya mawasiliano kati ya programu mbalimbali kuwa rahisi.

Unaweza kutengeneza **Triggers** ambazo zitaanzishwa matukio yanapotokea kwenye mtandao wako (mfano akaunti inaundwa na kuanzisha tukio la account_create) au kutengeneza **Actions** kwenye mtandao wako kuitikia matukio ya nje (mfano kuunda uanachama mpya wa akaunti kwenye mtandao wako wa Ultimate Multisite).

Hii inawezekana kwa sababu **triggers** na actions za **Ultimate Multisite Zapier** zinaendeshwa na [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Jinsi ya kuanza

Kwanza, tafuta Ultimate Multisite kwenye orodha ya programu za Zapier. Vinginevyo, unaweza kubofya [kiungo hiki](https://zapier.com/apps/wp-ultimo/integrations).

Nenda kwenye dashboard yako na bonyeza kitufe cha **+** **Create Zap** kwenye upau wa pembeni kushoto ili kusanidi Zap mpya.

![Dashboard ya Zapier yenye kitufe cha Create Zap](/img/admin/webhooks-list.png)

Utaelekezwa kwenye ukurasa wa kuunda Zap.

Kwenye kisanduku cha kutafuta andika "wp ultimo". Bofya kuchagua chaguo la toleo la **Beta**.

![Kutafuta WP Ultimo kwenye orodha ya programu za Zapier](/img/admin/webhooks-list.png)

Baada ya kuchagua programu yetu, chagua tukio linalopatikana: **New Ultimate Multisite Event**.

![Kuchagua trigger ya New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Sasa tunahitaji kumpa Zapier ruhusa ya kufikia **mtandao wako**. Kubofya **Sign in** kutafungua dirisha jipya linalohitaji **vitambulisho vya API**.

![Kidokezo cha Zapier cha Sign in kwa vitambulisho vya API](/img/admin/webhooks-list.png)

Nenda kwenye paneli ya msimamizi wa mtandao wako na uende **Ultimate Multisite > Settings** > **API & Webhooks** na utafute sehemu ya API Settings.

Chagua chaguo la **Enable API** kwani linahitajika ili muunganiko huu ufanye kazi.

![Mipangilio ya API yenye chaguo la Enable API katika Ultimate Multisite](/img/admin/webhooks-list.png)

Tumia ikoni ya **Copy to Clipboard** kwenye sehemu za API Key na API Secret na ubandike thamani hizo kwenye skrini ya muunganiko.

Kwenye sehemu ya URL, weka URL kamili ya mtandao wako, ikiwa ni pamoja na itifaki (HTTP au HTTPS).

![Skrini ya muunganiko wa Zapier yenye sehemu za API Key, Secret, na URL](/img/admin/webhooks-list.png)

Bofya kitufe cha **Yes, Continue** kuendelea hatua inayofuata. Kama kila kitu kimefanikiwa, utakaribishwa na akaunti yako mpya iliyounganishwa! Bofya **Continue** kuunda trigger mpya.

## Jinsi ya kuunda Trigger mpya

Sasa kwa kuwa akaunti yako imeunganishwa unaweza kuona matukio yanayopatikana. Hebu tuchague tukio la **payment_received** kwa mafunzo haya.

![Kuchagua tukio la payment_received katika trigger ya Zapier](/img/admin/webhooks-list.png)

Mara tukio limechaguliwa na ubofye **continue**, **hatua ya majaribio** itaonekana.

![Hatua ya majaribio ya Zapier kwa trigger](/img/admin/webhooks-list.png)

Katika hatua hii, Zapier itajaribu kama Zap yako inaweza **kuleta payload maalum kwa tukio hilo**. Katika matukio ya baadaye ya aina hiyo hiyo, taarifa zenye muundo huu huu zitatumwa.

![Jaribio la trigger la Zapier limekamilika kwa mafanikio na payload](/img/admin/webhooks-list.png)

Katika mafunzo yetu jaribio **limekamilika kwa mafanikio** na limerudisha taarifa za mfano wa payload. Taarifa hizi za mfano zitakuwa muhimu kutuongoza tunapounda actions. Trigger yako sasa imeundwa na iko tayari kuunganishwa na programu nyingine.

## Jinsi ya kuunda Actions

Actions zinatumia taarifa kutoka kwa triggers nyingine kuunda entries mpya kwenye mtandao wako.

Katika **hatua ya kuunda action** utachagua Ultimate Multisite **Beta** na chaguo la **Create Items on Ultimate Multisite**.

![Kuunda action na Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Katika hatua inayofuata utaunda uthibitishaji wako, kama tulivyofanya katika **Jinsi ya kuanza**, au kuchagua uthibitishaji ulioundwa. Katika mafunzo haya tutachagua uthibitishaji ule ule uliotengenezwa awali.

![Kuchagua uthibitishaji kwa action ya Zapier](/img/admin/webhooks-list.png)

### Kusanidi Action

Hii ni **hatua kuu ya action** na hapa mambo ni tofauti kidogo. Taarifa ya kwanza utakayochagua ni **Item**. Item ni **modeli ya taarifa** ya mtandao wako kama vile **Customers, Payments, Sites, Emails** na nyinginezo.

![Kuchagua aina ya Item kwa action ya Zapier](/img/admin/webhooks-list.png)

Unapochagua item, fomu ita **jipanga upya kuleta sehemu zinazohitajika na za hiari** kwa item iliyochaguliwa.

Kwa mfano, unapochagua item ya **Customer**, sehemu za fomu zitaleta kila kitu kinachohitajika kujazwa ili kuunda Customer mpya kwenye mtandao.

![Sehemu za item ya Customer katika usanidi wa action ya Zapier](/img/admin/webhooks-list.png)

Baada ya kujaza sehemu zote zilizowekwa alama kuwa **zinazohitajika** na kubofya kuendelea, skrini ya mwisho itakuonyesha sehemu zilizojazwa na sehemu ambazo hazikujazwa.

![Jaribio la action ya Zapier linaonyesha sehemu zilizojazwa na zisizojazwa](/img/admin/webhooks-list.png)

Mara jaribio lako linakamilika na kufanikiwa action yako imesanidiwa. Ni muhimu pia kuangalia kwenye mtandao wako kama item iliundwa na jaribio la action yako.
