---
title: Mga Webhook
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Unang Tingin sa Webhooks (v2)

_**PAALALA: Tandaan na ang feature o artikulong ito ay para sa mga advanced na user.**_

Ang **webhook** ay isang paraan para sa isang app o software tulad ng Ultimate Multisite na magbigay ng real-time na impormasyon sa ibang mga application. Ang webhook ay naghahatid ng data o payloads sa ibang mga application habang nangyayari ito, ibig sabihin **nakukuha mo kaagad ang data.**

Nakakatulong ito kung kailangan mong mag-integrate o magpasa ng partikular na data mula sa Ultimate Multisite papunta sa ibang CRM o system sa tuwing may ma-trigger na event. Halimbawa, kailangan mong ipadala ang pangalan at email address ng user sa isang mailing list sa tuwing may bagong user account na nalilikha.

## Paano gumawa ng webhook

Para gumawa ng webhook, pumunta sa iyong network admin dashboard. I-click ang **Ultimate Multisite > Webhooks > Add New Webhook.**

![Webhooks list page na may Add New Webhook button](/img/admin/webhooks-list.png)

Kapag gumagawa ng bagong webhook, hihilingin sa iyo ang impormasyon tulad ng **Name, URL,** at **Event**. Maaari kang gumamit ng kahit anong pangalan na gusto mo para sa iyong webhook. Ang pinakamahalagang field ay ang URL at Event.

![New webhook form na may Name, URL, at Event fields](/img/admin/webhooks-list.png)

Ang URL ay ang **endpoint o destinasyon** kung saan ipapadala ng Ultimate Multisite ang **payload o data**. Ito ang application na makakatanggap ng data.

Ang Zapier ang pinakakaraniwang solusyon na ginagamit ng mga user para mas madaling gumawa ng integration sa mga 3rd party application. Kung wala kang platform tulad ng Zapier, kakailanganin mong manu-manong gumawa ng custom function na kukuha ng data at magpo-process nito. Tingnan ang artikulong ito tungkol sa **paano gamitin ang Ultimate Multisite webhook kasama ang Zapier.**

Sa artikulong ito, titingnan natin ang pangunahing konsepto kung paano gumagana ang webhook at ang mga event na available sa Ultimate Multisite. Gagamit tayo ng isang 3rd party site na tinatawag na [requestbin.com](https://requestbin.com/). Ang site na ito ay magpapahintulot sa atin na gumawa ng endpoint at makuha ang payload nang hindi nag-co-code. _**Disclaimer: ang gagawin lang nito ay ipakita sa atin na natanggap ang data.**_ Walang magaganap na processing o anumang uri ng action sa payload.

Pumunta sa [requestbin.com](https://requestbin.com/) at i-click ang Create Request Bin.

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

Pagkatapos i-click ang button na iyon, hihilingin nito sa iyo na mag-log in kung mayroon ka nang account o mag-sign up. Kung mayroon ka nang account, didiretso ka sa kanilang dashboard. Sa kanilang dashboard, makikita mo kaagad ang endpoint o URL na maaari mong gamitin sa paggawa ng iyong Ultimate Multisite webhook.

![RequestBin dashboard na nagpapakita ng endpoint URL](/img/admin/webhooks-list.png)

Kopyahin ang URL at bumalik sa Ultimate Multisite. Ilagay ang endpoint sa URL field at pumili ng event mula sa dropdown. Sa halimbawang ito, pipiliin natin ang **Payment Received**.

Ang event na ito ay nati-trigger sa tuwing may user na nagbabayad. Lahat ng available na event, ang kanilang paglalarawan, at payloads ay nakalista sa ibaba ng page. I-click ang **Add New Webhook** button para i-save ang webhook.

![Webhook na naka-configure na may Payment Received event](/img/admin/webhooks-list.png)

Maaari na nating magpadala ng test event sa endpoint para makita natin kung gumagana ang webhook na ginawa natin. Magagawa natin ito sa pamamagitan ng pag-click ng **Send Test Event** sa ilalim ng webhook na ginawa natin.

![Send Test Event option sa ilalim ng webhook](/img/admin/webhooks-list.png)

Nagpapakita ito ng confirmation window na nagsasabing matagumpay ang test.

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

Ngayon kung babalik tayo sa _Requestbin_ site, makikita natin na natanggap ang payload na naglalaman ng ilang test data.

![RequestBin na nagpapakita ng natanggap na webhook payload data](/img/admin/webhooks-list.png)

Ito ang pangunahing prinsipyo kung paano gumagana ang webhook at endpoints. Kung gagawa ka ng custom endpoint, kakailanganin mong gumawa ng custom function para i-process ang data na natatanggap mo mula sa Ultimate Multisite.
