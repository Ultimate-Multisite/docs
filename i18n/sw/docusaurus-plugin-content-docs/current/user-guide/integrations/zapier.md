---
title: Muunganisho wa Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Kuunganisha Ultimate Multisite na Zapier {#integrating-ultimate-multisite-with-zapier}

Katika mojawapo ya makala, tulijadili [Webhooks](webhooks.md) na jinsi zinavyoweza kutumika kuunganisha na programu za wahusika wengine.

Kutumia webhooks ni changamano kidogo kwa kuwa kunahitaji ujuzi wa juu wa kuandika code na kunasa payloads. Kutumia **Zapier** ni njia ya kukwepa hilo.

Zapier ina muunganisho na zaidi ya apps 5000+ ambayo hurahisisha mawasiliano kati ya programu tofauti.

Unaweza kuunda **Triggers** ambazo zitaanzishwa matukio yanapotokea kwenye mtandao wako (mfano account inapoundwa na kuanzisha tukio la account_create) au kuzalisha **Actions** kwenye mtandao wako zikijibu matukio ya nje (mfano kuunda membership mpya ya account kwenye mtandao wako wa Ultimate Multisite).

Hili linawezekana kwa sababu **triggers za Ultimate Multisite Zapier** na actions zinaendeshwa na [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Jinsi ya kuanza {#how-to-start}

Kwanza, tafuta Ultimate Multisite katika orodha ya app za Zapier. Vinginevyo, unaweza kubofya [kiungo hiki](https://zapier.com/apps/wp-ultimo/integrations).

Nenda kwenye dashboard yako na ubonyeze kitufe cha **+** **Unda Zap** kwenye utepe wa kushoto ili kusanidi Zap mpya.

![Dashboard ya Zapier yenye kitufe cha Unda Zap](/img/admin/webhooks-list.png)

Utaelekezwa kwenye ukurasa wa kuunda Zap.

Katika kisanduku cha kutafuta andika "wp ultimo". Bofya kuchagua chaguo la toleo la **Beta**.

![Kutafuta WP Ultimo katika orodha ya app za Zapier](/img/admin/webhooks-list.png)

Baada ya kuchagua app yetu, chagua tukio linalopatikana: **New Ultimate Multisite Event**.

![Kuchagua trigger ya New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Sasa tunahitaji kuipa Zapier ufikiaji wa **mtandao wako**. Kubofya **Sign in** kutafungua dirisha jipya linalohitaji **API credentials**.

![Kidokezo cha Zapier cha Sign in kwa API credentials](/img/admin/webhooks-list.png)

Nenda kwenye paneli ya msimamizi wa mtandao wako na uende kwenye **Ultimate Multisite > Settings** > **API & Webhooks** na utafute sehemu ya API Settings.

Chagua chaguo la **Enable API** kwa kuwa linahitajika ili muunganisho huu ufanye kazi.

![Mipangilio ya API and Webhooks yenye chaguo za API Settings na Enable API](/img/admin/settings-api-webhooks.png)

Tumia aikoni ya **Copy to Clipboard** kwenye sehemu za API Key na API Secret na ubandike thamani hizo kwenye skrini ya muunganisho.

Kwenye sehemu ya URL, weka URL kamili ya mtandao wako, ikijumuisha itifaki (HTTP au HTTPS).

![Skrini ya muunganisho wa Zapier yenye sehemu za API Key, Secret, na URL](/img/admin/webhooks-list.png)

Bofya kitufe cha **Yes, Continue** ili kuendelea kwenye hatua inayofuata. Ikiwa kila kitu kitafanya kazi, unapaswa kukaribishwa na account yako mpya iliyounganishwa! Bofya **Continue** ili kuunda trigger mpya.

## Jinsi ya kuunda Trigger mpya {#how-to-create-a-new-trigger}

Sasa kwa kuwa account yako imeunganishwa unaweza kuona matukio yanayopatikana. Hebu tuchague tukio la **payment_received** kwa mafunzo haya.

![Kuchagua tukio la payment_received katika trigger ya Zapier](/img/admin/webhooks-list.png)

Baada ya tukio kuchaguliwa na kubofya **continue** , **hatua ya jaribio** itaonekana.

![Hatua ya jaribio ya Zapier kwa trigger](/img/admin/webhooks-list.png)

Katika hatua hii, Zapier itajaribu kama Zap yako inaweza **kuchota payload mahususi ya tukio hilo**. Katika matukio ya baadaye ya aina hiyo hiyo, taarifa zenye muundo huu huu zitatumwa.

![Jaribio la trigger ya Zapier limekamilika kwa mafanikio likiwa na payload](/img/admin/webhooks-list.png)

Katika mafunzo yetu jaribio **lilikamilika kwa mafanikio** na kurudisha taarifa ya mfano wa payload. Taarifa hii ya mfano itakuwa muhimu kutuongoza tunapounda actions. Trigger yako sasa imeundwa na iko tayari kuunganishwa na programu nyingine.

## Jinsi ya kuunda Actions {#how-to-create-actions}

Actions hutumia taarifa kutoka triggers nyingine kuunda maingizo mapya kwenye mtandao wako.

Katika **hatua ya kuunda action** utachagua Ultimate Multisite **Beta** na chaguo la **Create Items on Ultimate Multisite**.

![Kuunda action kwa Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Katika hatua inayofuata utaweza kuunda uthibitishaji wako, kama tulivyofanya katika **Jinsi ya kuanza** , au kuchagua uthibitishaji ulioundwa. Katika mafunzo haya tutachagua uthibitishaji ule ule ulioundwa awali.

![Kuchagua uthibitishaji kwa action ya Zapier](/img/admin/webhooks-list.png)

### Kusanidi Action {#setting-up-the-action}

Hii ndiyo **hatua kuu ya action** na hapa mambo ni tofauti kidogo. Taarifa ya kwanza utakayochagua ni **Item**. Item ni **modeli ya taarifa** ya mtandao wako kama vile **Customers, Payments, Sites, Emails** na nyinginezo.

![Kuchagua aina ya Item kwa action ya Zapier](/img/admin/webhooks-list.png)

Unapochagua item, fomu **itajipanga upya kuleta sehemu zinazohitajika na za hiari** kwa item iliyochaguliwa.

Kwa mfano, unapochagua item **Customer** , sehemu za fomu zitaleta kila kitu kinachohitajika kujazwa ili kuunda Customer mpya kwenye mtandao.

![Sehemu za item ya Customer katika usanidi wa action ya Zapier](/img/admin/webhooks-list.png)

Baada ya kujaza sehemu zote zilizowekwa alama kama **required** na kubofya continue, skrini ya mwisho itakuonyesha sehemu zilizojazwa na sehemu zilizoachwa bila kujazwa.

![Jaribio la action ya Zapier likionyesha sehemu zilizojazwa na zisizojazwa](/img/admin/webhooks-list.png)

Mara tu jaribio lako linapokamilika na kufanikiwa action yako imesanidiwa. Pia ni muhimu kuangalia kwenye mtandao wako kama item iliundwa kwa jaribio la action yako.
