---
title: Ama-webhook
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Ukubuka Kokuqala kuma-Webhooks (v2)

_**QAPHELA: Qaphela ukuthi lesi sici noma lesi sihloko senzelwe abasebenzisi abathuthukile.**_

I-**webhook** iyindlela yokuthi i-app noma isoftware efana ne-Ultimate Multisite inikeze ezinye izinhlelo zokusebenza ulwazi lwesikhathi sangempela. I-webhook iletha idatha noma ama-payload kwezinye izinhlelo zokusebenza njengoba kwenzeka, okusho ukuthi **uthola idatha ngokushesha.**

Lokhu kuyasiza uma kudingeka uhlanganise noma udlulise idatha ethile esuka ku-Ultimate Multisite iya kwenye i-CRM noma uhlelo njalo lapho umcimbi uqaliswa. Isibonelo, kudingeka uthumele igama lomsebenzisi nekheli le-imeyili kuhlu lokuthumela njalo lapho kudalwa i-account entsha yomsebenzisi.

## Indlela yokudala i-webhook

Ukuze udale i-webhook, iya ku-dashboard yomphathi wenethiwekhi yakho. Chofoza ku-**Ultimate Multisite > Webhooks > Add New Webhook.**

![Ikhasi lohlu lwama-Webhooks elingenalutho elinenkinobho ethi Add New Webhook](/img/admin/webhooks-list-empty.png)

Ungabe usuhlela ukumiswa kwe-webhook:

![Ifomu le-Add New Webhook elinezinkambu ze-Name, Event, ne-URL](/img/admin/webhook-add-modal.png)

Lapho udala i-webhook entsha uzocelwa ulwazi olufana ne-**Name, URL,** kanye ne-**Event**. Ungasebenzisa noma yiliphi igama olifunayo le-webhook yakho. Izinkambu ezibaluleke kakhulu yi-URL ne-Event.

![Isixhumi esibonakalayo sokuhlela i-webhook esibonisa inkambu ye-URL nokubuka kuqala kwe-payload](/img/admin/webhook-url-field.png)

I-URL yi-**endpoint noma indawo okuyiwa kuyo** lapho i-Ultimate Multisite izothumela khona **i-payload noma idatha**. Lolu uhlelo lokusebenza oluzokwamukela idatha.

I-Zapier iyisixazululo esivame kakhulu abasebenzisi abasisebenzisayo ukwenza ukuhlanganisa nohlelo lokusebenza lomuntu wesithathu kube lula. Ngaphandle kweplathifomu efana ne-Zapier, kuzodingeka udale mathupha i-function yangokwezifiso ezobamba idatha bese iyicubungula. Bona lesi sihloko mayelana **nendlela yokusebenzisa i-webhook ye-Ultimate Multisite ne-Zapier.**

Kulesi sihloko, sizobheka umqondo oyisisekelo wokuthi i-webhook isebenza kanjani kanye nemicimbi etholakala ku-Ultimate Multisite. Sizosebenzisa isayithi lomuntu wesithathu elibizwa ngokuthi [requestbin.com](https://requestbin.com/). Leli sayithi lizosivumela ukuthi sidale i-endpoint futhi sibambe i-payload ngaphandle kokwenza noma iyiphi ikhodi. _**Isitatimende sokuzikhulula: konke elizokwenza ukusibonisa ukuthi idatha yamukelwe.**_ Ngeke kube khona ukucubungula noma noma yiluphi uhlobo lwesenzo olwenziwa ku-payload.

Iya ku-[requestbin.com](https://requestbin.com/) bese uchofoza okuthi Create Request Bin.

Ngemuva kokuchofoza leyo nkinobho, izokucela ukuthi ungene ngemvume uma usuvele une-account noma ubhalise. Uma usuvele une-account izokuholela ngqo ku-dashboard yabo. Ku-dashboard yabo, uzobona ngokushesha i-endpoint noma i-URL ongayisebenzisa ekudaleni i-webhook yakho ye-Ultimate Multisite.

Qhubeka ukopishe i-URL bese ubuyela ku-Ultimate Multisite. Faka i-endpoint enkambini ye-URL bese ukhetha umcimbi kusuka ku-dropdown. Kulesi sibonelo, sizokhetha **Payment Received**.

Lo mcimbi uqaliswa noma nini lapho umsebenzisi enza inkokhelo. Yonke imicimbi etholakalayo, incazelo yayo, nama-payloads kubhalwe phansi ekugcineni kwekhasi. Chofoza inkinobho ethi **Add New Webhook** ukuze ulondoloze i-webhook.

![I-dropdown yomcimbi we-webhook ene-Payment Received ekhethiwe](/img/admin/webhook-event-picker.png)

Manje singathumela umcimbi wokuhlola ku-endpoint ukuze sibone ukuthi i-webhook esiyidalile iyasebenza yini. Singakwenza lokhu ngokuchofoza **Send Test Event** ngaphansi kwe-webhook esiyidalile.

![Uhlu lwama-Webhooks olubonisa i-webhook eyodwa emisiwe nesenzo se-Send Test](/img/admin/webhooks-list-populated.png)

Lokhu kubonisa iwindi lokuqinisekisa elisho ukuthi ukuhlola kuphumelele.

![Umphumela womcimbi wokuhlola we-webhook ngemva kokuthumela i-payload yokuhlola](/img/admin/webhook-test-result.png)

Manje uma sibuyela kusayithi le-_Requestbin_ sizobona ukuthi i-payload yamukelwe iqukethe idatha ethile yokuhlola.

Lona umgomo oyisisekelo wokuthi ama-webhook nama-endpoint asebenza kanjani. Uma uzodala i-endpoint yangokwezifiso, kuzodingeka udale i-function yangokwezifiso ukuze ucubungule idatha oyithola ku-Ultimate Multisite.
