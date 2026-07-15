---
title: Magparehistro og Account pinaagi sa Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Mag-register og account pinaagi gamit ang Zapier

Sa artikulo nga [Integrating Ultimate Multisite with Zapier](zapier.md), gihisgutan nato kung unsaon paggamit sa Zapier para maghimo og lain-laing mga aksyon sulod sa Ultimate Multisite base sa triggers ug events. Niining artikulo, ipakita nato kung paano nimo i-integrate ang mga third-party application. Gamiton nato ang Google Sheets isip source sa data ug ipadala kini sa Ultimate Multisite para mag-register og account.

Sa dili pa magkonektar sa Zapier, padulong sa **Ultimate Multisite > Settings > API & Webhooks** ug kumpirmaha nga ang API enabled na. Kopyaha ang API Key ug API Secret gikan niining screen kung mangutana ang Zapier para sa Ultimate Multisite account credentials.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Una, kinahanglan nimo maghimo og **Google Sheet** ubos sa imong Google Drive. Siguraduhon nga maayo nimo i-define ang matag column aron dali nimo mapamapa (mapa-mapa) ang data unya.

Human paghimo og Google sheet, pwede ka na mag-login sa imong Zapier account ug magsugod sa paghimo og zap.

Sa ilalom sa search field para sa **"App event"** piliha ang **"Google Sheets"**.

Dayon alang sa field nga "**Event**", piliha ang "**New spreadsheet row**" ug i-click ang "**Continue**".

Ang sunod nga lakang mangutana kanimo sa pagpili og **Google Account** diin gipundo (saved) ang **Google Sheet**. Busa siguroa lang nga ang husto nga google account ang gi-specify.

Sa ilalom sa **"Set up trigger"**, kinahanglan nimo pilion ug i-specify ang google spreadsheet ug worksheet nga imong gamiton kung asa magagikan ang data. Padayon lang sa pagpuno niini ug i-click ang "**Continue**".

Sunod mao ang "**test your trigger**" aron masiguro nga maayo ang koneksyon sa imong google sheet.

Kung malampuson ang imong test, makakita ka sa resulta nga nagpakita og pipila ka mga value gikan sa imong spreadsheets. I-click ang "**Continue**" aron magpadayon.

Ang sunod nga lakang kay mag-set up sa ikaduha nga aksyon nga maghimo o magparehistro og account sa Ultimate Multisite. Sa search field, piliha ang "**Ultimate Multisite(2.0.2)** ".

Sa ilawom sa field nga "**Event** ", piliha ang "**Register an Account in Ultimate Multisite** " dayon i-click ang "**Continue** " button.

Sa ilawom sa "**Set up an action** ", makita nimo og lain-laing mga field para sa data sa customer, memberships, products, ug uban pa. Mahimo nimong i-map (i-assign) ang mga values gikan sa imong google sheet ug ihatag kini sa husto nga field diin kinahanglan kini mapuno sama sa gipakita sa screenshot sa ubos.

Human ma-map nimo ang mga values, mahimo nimong i-test ang aksyon.
