---
title: Mga Webhook
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Unsa nga Panan-aw sa Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**PAHINUMANG: Atensyon, kining feature o artikulo kay para sa mga advanced user lang.**_

Ang **webhook** usa ka paagi kung asa ang usa ka app o software sama sa Ultimate Multisite makahatag og real-time nga impormasyon sa ubang mga application. Ang webhook nagpadala og data o payload ngadto sa ubang mga application samtang kini nanghitabo, meaning ikaw **makadawat dayon sa data.**

Kini makatabang nimo kung kinahanglan nimo i-integrate o ipadala ang pipila ka data gikan sa Ultimate Multisite padulong sa laing CRM o system matag higayon nga adunay event. Pananglitan, kinahanglan nimo ipadala ang ngalan ug email address sa user sa mailing list kada adunay bag-ong account sa user nga gi-create.

## Unsaon paghimo og webhook {#how-to-create-a-webhook}

Aron makahimo og webhook, padulong sa imong network admin dashboard. I-click ang **Ultimate Multisite > Webhooks > Add New Webhook.**

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

Unya pwede nimo i-edit ang configuration sa webhook:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

Sa paghimo og bag-ong webhook, ipangutana kanimo og impormasyon sama sa **Name, URL,** ug **Event**. Pwede kang mogamit bisan unsang ngalan nga gusto nimo para sa imong webhook. Ang pinakaimportante nga mga field mao ang URL ug Event.

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

Ang URL mao ang **endpoint o ang destinasyon** diin ipadala sa Ultimate Multisite ang **payload o data**. Kini ang application nga modawat sa data.

Ang Zapier mao ang labing kasagaran nga solusyon nga gigamit sa mga user aron mas dali ang integration sa 3rd party application. Kung walay platform sama sa Zapier, kinahanglan nimo nga maghimo manual og custom function nga mosakop sa data ug magproseso niini. Tan-awa kining artikulo bahin kung **unsaon paggamit sa Ultimate Multisite webhook uban sa Zapier.**

Ni sulod ni article, atong tan-awon ang basic nga konsepto kung unsa paglihok sa usa ka webhook ug ang mga event nga anaa sa Ultimate Multisite. Gamiton nato ang usa ka 3rd party site nga [requestbin.com](https://requestbin.com/). Kining site magtugot kanato sa paghimo og endpoint ug pagkuha sa payload bisan wala mag-code. _**Disclaimer: ang buhaton ra ni mao ang ipakita kanato nga nadawat na ang data.**_ Walay processing o bisan unsang aksyon nga himuon sa payload.

Punta sa [requestbin.com](https://requestbin.com/) ug i-click ang Create Request Bin.

Pagkahuman nimo i-click kana nga button, mangayo kini kanimo og login kung naa kay account na o mag-sign up. Kung naa ka na og account, dad-an ka direkta sa ilang dashboard. Sa ilang dashboard, dayon makita nimo ang endpoint o URL nga pwede nimong gamiton sa paghimo sa imong Ultimate Multisite webhook.

Kopyaha na ang URL ug balik sa Ultimate Multisite. Ibutang ang endpoint sa field sa URL ug pili og event gikan sa dropdown menu. Sa panig-amat, pilion nato ang **Payment Received**.

Kining event ma-trigger kung adunay user nga magbayad. Ang tanang available nga events, ilang deskripsyon, ug payloads anaa sa ubos sa pahina. I-click ang button nga **Add New Webhook** aron ma-save ang webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Karon pwede natong magpadala og test event sa endpoint para makita nato kung nagtrabaho ba ang webhook nga atong gihimo. Mahimo nato kini pinaagi sa pag-click sa **Send Test Event** ubos sa webhook nga atong gihimo.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Kini nagpakita og confirmation window nga ang test nagmalampuson.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Kung mobalik ta sa _Requestbin_ site, makita nato nga ang payload na nadawat na kini nga adunay pipila ka test data.

Kini ang basic principle kung unsa pag-trabaho ang webhook ug endpoints. Kung gusto nimo maghimo og custom endpoint, kinahanglan nimo maghimo og custom function para proseso ang data nga imong madawat gikan sa Ultimate Multisite.
