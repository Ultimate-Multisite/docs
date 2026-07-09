---
title: Ii-Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Ukujonga Okokuqala kwi-Webhooks (v2)

_**QAPHELA: Qaphela ukuba eli nqaku okanye eli nqaku lolabasebenzisi abaphambili.**_

I-**webhook** yindlela yokuba i-app okanye isoftware efana ne-Ultimate Multisite inike ezinye ii-aplikheyishini ngolwazi lwexesha langoku. I-webhook ihambisa idatha okanye i-payloads kwezinye ii-aplikheyishini njengoko kusenzeka, oko kuthetha ukuba **ufumana idatha kwangoko.**

Oku kuyanceda ukuba kufuneka udibanise okanye udlulise idatha ethile esuka kwi-Ultimate Multisite iye kwenye i-CRM okanye isistim ngalo lonke ixesha isiganeko siqaliswa. Umzekelo, kufuneka uthumele igama lomsebenzisi kunye nedilesi ye-imeyile kuluhlu lokuposa ngalo lonke ixesha kusenziwa i-akhawunti entsha yomsebenzisi.

## Uyenza njani i-webhook

Ukwenza i-webhook, yiya kwi-dashboard yakho yomlawuli wenethiwekhi. Cofa ku-**Ultimate Multisite > Webhooks > Add New Webhook.**

![Iphepha loluhlu lwe-Webhooks elingenanto elineqhosha elithi Add New Webhook](/img/admin/webhooks-list-empty.png)

Emva koko ungahlela uqwalaselo lwe-webhook:

![Ifomu ethi Add New Webhook enamasimi e-Name, Event, kunye ne-URL](/img/admin/webhook-add-modal.png)

Xa usenza i-webhook entsha uya kucelwa ulwazi olufana ne-**Name, URL,** kunye ne-**Event**. Ungasebenzisa naliphi na igama olifunayo kwi-webhook yakho. Amasimi abaluleke kakhulu yi-URL kunye ne-Event.

![Ujongano lokuhlela i-webhook olubonisa intsimi ye-URL kunye nemboniso ye-payload](/img/admin/webhook-url-field.png)

I-URL yi-**endpoint okanye indawo ekujoliswe kuyo** apho i-Ultimate Multisite iya kuthumela khona **i-payload okanye idatha**. Le yi-aplikheyishini eya kufumana idatha.

I-Zapier sesona sisombululo sixhaphakileyo abasebenzisi abasisebenzisayo ukwenza udibaniso ne-aplikheyishini yomntu wesithathu lube lula. Ngaphandle kweqonga elifana ne-Zapier, kuya kufuneka wenze ngesandla umsebenzi olungiselelweyo oza kubamba idatha aze ayiqhube. Bona eli nqaku malunga **nendlela yokusebenzisa i-webhook ye-Ultimate Multisite kunye ne-Zapier.**

Kweli nqaku, siza kujonga umxholo osisiseko wendlela i-webhook esebenza ngayo kunye neziganeko ezikhoyo kwi-Ultimate Multisite. Siza kusebenzisa isayithi yomntu wesithathu ebizwa [requestbin.com](https://requestbin.com/). Le sayithi iya kusivumela ukuba senze i-endpoint size sibambe i-payload ngaphandle kokwenza nakuphi na ukukhowuda. _**Isilumkiso: konke eza kukwenza kukusibonisa ukuba idatha ifunyenwe.**_ Akuyi kubakho kuqhutywa okanye naluphi na uhlobo lwesenzo olwenziwayo kwi-payload.

Yiya ku-[requestbin.com](https://requestbin.com/) uze ucofe u-Create Request Bin.

Emva kokucofa elo qhosha, iya kukucela ukuba ungene ukuba sele unayo i-akhawunti okanye ubhalise. Ukuba sele unayo i-akhawunti iya kukusa ngqo kwi-dashboard yabo. Kwi-dashboard yabo, uya kubona kwangoko i-endpoint okanye i-URL onokuyisebenzisa ekudaleni i-webhook yakho ye-Ultimate Multisite.

Qhubeka ukope i-URL uze ubuyele kwi-Ultimate Multisite. Beka i-endpoint kwintsimi ye-URL uze ukhethe isiganeko kwi-dropdown. Kulo mzekelo, siza kukhetha **Payment Received**.

Esi siganeko siqaliswa nanini na umsebenzisi esenza intlawulo. Zonke iziganeko ezikhoyo, inkcazelo yazo, kunye nee-payloads zidweliswe emazantsi ephepha. Cofa iqhosha elithi **Add New Webhook** ukugcina i-webhook.

![I-dropdown yesiganeko se-webhook enokhetho lwe-Payment Received olukhethiweyo](/img/admin/webhook-event-picker.png)

Ngoku singathumela isiganeko sovavanyo kwi-endpoint ukuze sibone ukuba i-webhook esiyenzileyo iyasebenza. Singakwenza oku ngokucofa **Send Test Event** phantsi kwe-webhook esiyenzileyo.

![Uluhlu lwe-Webhooks olubonisa i-webhook enye eqwalaselweyo kunye nesenzo se-Send Test](/img/admin/webhooks-list-populated.png)

Oku kubonisa ifestile yokuqinisekisa ethi uvavanyo luphumelele.

![Isiphumo sesiganeko sovavanyo lwe-webhook emva kokuthumela i-payload yovavanyo](/img/admin/webhook-test-result.png)

Ngoku ukuba sibuyela kwisayithi ye-_Requestbin_ siya kubona ukuba i-payload ifunyenwe iqulethe idatha ethile yovavanyo.

Lo ngumgaqo osisiseko wendlela i-webhook kunye nee-endpoints ezisebenza ngayo. Ukuba uza kudala i-endpoint elungiselelweyo, kuya kufuneka wenze umsebenzi olungiselelweyo wokuqhuba idatha oyifumana kwi-Ultimate Multisite.
