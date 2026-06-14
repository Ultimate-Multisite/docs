---
title: Mwayi wa Kufotokozera
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Mwaya wa Kufotokozera (v2)

_**KUFOTOKOZERA KUKUNDULIRA: Iye nkhani iyi ikufotokozera Ultimate Multisite version 2.x.**_

Mwayi angayesetsa mwayi wanu m'mwayi wanu. Angathe kuteteza fomu ya kufotokozera yanu kapena link yomwe mungafotokozere plan iliyonkhulupirira. Pamene, tikufotokozera kuti mwayi wanji angafotokozera m'mwayi wanu monga mwayi wanu ndi njira zomwe zili pansi ndipo zomwe zimayambira pamba ndi momwe zimayambira pamba m'mwayi wanu.

## Kufotokozera kwa Fomu ya Kufotokozera:

Iyi ndi njira yomwe imayambira. Mumapanga ndauji ya kufotokozera ndi **checkout form** ndipo ndi pano zomwe mwayi wanji adzakhala kuti afotokozere m'mwayi wanu ndi kupanga plan. Mungathe kuteteza ndauji zambiri, zomwe zina ndi fomu ya kufotokozera yomwe ndi yomwe.

Ndauji yomwe imayambira yomwe ndi [_**yourdomain.com/register**_](http://yourdomain.com/register), koma mungutse momwe munguyendetsedwe m'Ultimate Multisite > Settings > Login & Registration > Default Registration Page.

Poyamba mwayi amapita pa ndauji ya kufotokozera yanu (kuti nthawi zambiri ndi kupanga button ya **Sign in** kapena **Buy now**), adzakhala kuti awone fomu ya kufotokozera yanu pano.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Iyi ndi mfaranso ya checkout form monga momwe imayambira pamba:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Zomwe adzakhala kukumanga ndi kupanga zonse zomwe zili kukhulupirira - email, username, password, ndi zina... - ndipo kupanga plan kapena kuthibitira boma la email lawo ngati tikufotokozera plan yosangalatsa kapena plan yomwe ndi m'trial period osati mukuphuka mawu.

Pambuyo pa ndauji ya "Thank you", adzakhala kuti awone mwayi wopereka zomwe zikufotokozera ngati mukucheza boma la email kapena kuti website yanu imayamba kupangidwa ndipo mungayambe kuyendetsa.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Kodi ya email inachifukiza, mwanafunzi anahitaji kwenda kwenye inbox yake na kukumbuka link ya kuthibitisha (verification link). Website yao hatakuwa yamefunguliwa ikiwa anachangamka (verify) maili yao haijafanyika.

Ikiwa wamejiandikisha kwa mpango wa kulipia au uthibitishaji wa email hauhitajiki kwenye mtandao wako, website yao itafunguliwa mara tu baada ya malipo na wataone link ya kuingia kwenye dashboard yao.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Kutumia Link Inayoweza Kushirikiwe (Using a Shareable Link):

Mchakato wa kujisajili kwa kutumia link inayoweza kushirikiwa ni sawa na fomu ya kujisajili, tofauti pekee ni kwamba kwa kutumia link hiyo, wateja wako wanaweza kuwa na template au bidhaa fulani iliyochaguliwa tayari kwenye fomu ya malipo (angalia sehemu Pre-selecting products and templates via URL parameters) au labda kuongeza kodi ya punguzo (coupon code) (angalia sehemu Using URL Parameters).

Mchakato wa kujisajili utakuwa sawa: watahitaji kujaza jina lao, jina la mtumiaji (username), anwani ya email, jina la website na kichwa chake, n.k... lakini mpango au template ya tovuti itakuwa imechaguliwa tayari kwa ajili yao.

### Kujisajili Kwa Malipo ya Manwani (Registering Using Manual Payments):

Ikiwa hutaki kutumia PayPal, Stripe au njia nyingine yoyote ya malipo inayotolewa na Ultimate Multisite au vifaa vyake vya ziada (add-on integrations), unaweza kutumia malipo ya manwani kwa wateja wako. Hii inamfanya uweze kuunda risiti (invoice) kwa ajili yao kulipa kwenye kiwanda chako cha malipo unachokipenda baada ya kujisajili kwenye mtandao wako.

Mchakato wa kujisajili utakuwa sawa kabisa kama hapo juu, lakini kwenye ukurasa wa kujisajili wateja wako watakuta ujumbe unaoambia kwamba watapokea email na maelekezo mengine ya kukamilisha malipo.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Kuti pamene pa kuli mwayi, mwayi ang makamene kuwambiri (payment instructions) omwe wamupanga (you set), koma awu wamupanga wamupangawo (receive it on their email).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Kuti mwayi pamene kuwambiri, mwayi ang **Ultimate Multisite > Settings > Payments** koma mwayi kuli omwe wamupanga **Manual** payment option:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Kuti wamupanga (your customers) wamukwambiri pamene manual payment koma wamupanga kuwamba (send you the confirmation), mwayi **manually confirm** (kufakira kwa inu) payment omwe uliyiye kuti utseze membership ya wamukwamba ndi website.

Kuti utiwe, ndi yera ku **Ultimate Multisite > Payments** koma mwayi kuli customer payment. Kuti siyo, kumayamba kuyamba **Pending** status.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Mwayi pa payment number (payment id), mwayi mwayi kuti utseze status yake ku **Completed**.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Kuti utseze status yake ku **Completed**, mwayi mwayi utiwe message ya **Activate membership**. Toggle option iyi **on** kuti utseze membership ndi website yomwe yomwe ndi customer iye. Kodi mwayi kuli kuti **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Customer ya inu mwayi mwayi kuti akukumbutsa dashboard ndi onse pa features omwe anayamba (subscribed to).
