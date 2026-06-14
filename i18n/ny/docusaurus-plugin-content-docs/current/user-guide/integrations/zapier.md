---
title: Kukonza kwa Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Kukhaza Ultimate Multisite ndi Zapier

M'moyo mwa maulendo, tulizama za [Webhooks](webhooks.md) ndipo tikufunsa kuti zikwanira kutumikidwa kudzera kwa applications zingine.

Kutumikiza webhooks ndi chinthu chomwe chimapambana kwambiri komwe kumakufuna kuti muli ndi luso la kulimbikitsa (coding) ndipo mumakukumbutsa payloads. Kukhala ndi **Zapier** ndi njira yomwe mungape kudzera ku nthawi yomwezi.

Zapier imana ndi integration ndi zambiri zopambana 5000+ zomwe zimapangitsa kuti mwayi wopereka m'moyo wosiyanasiyana wamphamvu (applications) kulimbikitsa kudzera kwa applications kwachitika.

Mungathe kupanga **Triggers** zomwe zimapambana pamene zinthu zikuyenera pam'moyo wanu (mwachitsancho, m'moyo wopereka wamphamvu woneka ndipo imapambana event ya account_create) kapena kupanga **Actions** pam'moyo wanu zomwe zimapambana ndi zinthu zosiyanasiyana (mwachitsancho, kupanga membership watsopano m'moyo wanu wa Ultimate Multisite).

Izi zimakwanira chifukwa cha kuti **Ultimate Multisite Zapier's triggers** ndi actions zimapangidwa ndi [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Kodi mungutse bwanji

Mmodzi, simukumbutsa Ultimate Multisite m'moyo wa Zapier. Mwachitsancho, mungupambane ku [this link](https://zapier.com/apps/wp-ultimo/integrations).

Tiyeni pa dashboard yanu ndipo mupambana button ya **+** **Create Zap** pamene m'moyo wopereka (left sidebar) kuti mupanga Zap watsopano.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Mungapambanidwa pa ndiyo ya kupanga Zap.

M'moyo wa search chitsancho "wp ultimo". Mupambana kuti mupambane option ya **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Pambuyo pa kuyesa application yanu, mupambana event yomwe imakwanira: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Nkhawa tikufuna kuti Zapier ikwaniritsidwe ndi **m'moyo wanu**. Kupambana m'Sign in kumapanga window lili lili ndi **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Tumpa kuya kuenda ku panel ya admin ya network, uenda ku **Ultimate Multisite > Settings** > **API & Webhooks** na uleli mbele kwa sehemu ya API Settings.

Chagua chaguo la **Enable API** ndilo lina lazima ili uhusiano huu uweze kufanya kazi.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Tumia ikoni ya **Copy to Clipboard** kwenye sehemu za API Key na API Secret, kisha uweke zile thamani hizo kwenye skrini ya integration.

Kwenye sehemu ya URL, weka URL yako yote ya network, ikiwemo protocol (HTTP au HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Chagua kitufe cha **Yes, Continue** ili kuendelea na hatua inayofuata. Kuti zote zikifanya kazi vizuri, utapokea salamu kutoka kwa akaunti yako mpya iliyounganishwa! Chagua **Continue** ili kutengeneza trigger mpya.

## Ujuzi wa kutengeneza Trigger mpya

Sasa uko na akaunti iliyounganishwa, unaweza kuona matukio yanayopatikana. Tuachue tukio la **payment_received** kwa ajili ya hapa tutorial hii.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Baada ya kuchagua tukio hilo na kubonyeza **continue**, utaona hatua ya **test**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Katika hatua hii, Zapier itachunguza kama unaweza **kupata payload maalum kwa tukio hilo**. Katika matukio mengine yanayofanana na hili, taarifa zenye muundo huu itatumiwa.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

M'mulo m'mulo, mu ntchito wa tutorial wathu, uli **ulopanga bwino** ndipo ulipereka mfundo za payload. Mfundo izi zikukonza kuti muwoneze mwayi pamene mukugwira actions. Trigger wanu umene wakhulupanga ndi kukhala wokhazikitsa ndi applications zina.

## Kodi muli bwanji mwagwira Actions?

Actions zimayendetsa mwayi wathu monga momwe zikugwira triggers, kuti zikukonza zinthu zatsopano m'mwayi wanu.

M'mwayi wa **ulopanga action step**, mudzakhwera Ultimate Multisite **Beta** ndipo chinthu cha **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

M'mwayi wosiyanasi, muli ndi kuyesa authentication wanu, monga momwe tili yomwe tikugwira m'**How to start**, kapena muli ndi authentication yomwe yali yopanga. M'tutorial iyi, tili tikukonza authentication yomwe yali yopanga.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Kukhazikitsa Action

Iyi ndi **mwayi wofunika wa action** ndipo m'mwayi wosiyanasi, zinthu zimakhala ziri ndi momwe zikuyendetsa. Mfundo yoyamba yomwe mudzakhwera ndi **Item**. Item ndi **model ya mwayi wanu** monga **Customers, Payments, Sites, Emails** ndi zina.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Pamene mukukonza item, form iye idzakhazikitsa kuti zinthu zomwe zifunika ndi zomwe si zifunika (optional) za item yomwe muli m'kukhonza.

Mwachitsanzo, pamene muli m'kukhonza item **Customer**, fields za form zidzakhazikitsa zonse zomwe zimene kukhala kofunika kuti muwoneze Customer watsopano m'mwayi wanu.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Pambuyo pomwe mudzakhonza zinthu zonse zomwe zimene **required** ndipo muli ndi continue, screen lili lili ndi zinthu zomwe mumugwira ndi zomwe si zifunika (optional).

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Meneza monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga monga m
