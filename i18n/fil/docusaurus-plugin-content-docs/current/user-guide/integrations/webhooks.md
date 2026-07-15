---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Unang Pagtingin sa Webhooks (v2)

_**PAALALA: Tandaan na ang feature o artikulong ito ay para sa advanced users.**_

Ang **webhook** ay isang paraan para sa isang app o software tulad ng Ultimate Multisite na magbigay sa ibang mga application ng real-time na impormasyon. Naghahatid ang webhook ng data o payloads sa ibang mga application habang nangyayari ito, ibig sabihin **nakukuha mo agad ang data.**

Makakatulong ito kung kailangan mong mag-integrate o magpasa ng partikular na data mula sa Ultimate Multisite papunta sa ibang CRM o system tuwing may na-trigger na event. Halimbawa, kailangan mong ipadala ang pangalan at email address ng user sa isang mailing list tuwing may nagagawang bagong user account.

## Paano gumawa ng webhook {#how-to-create-a-webhook}

Para gumawa ng webhook, pumunta sa iyong network admin dashboard. I-click ang **Ultimate Multisite > Webhooks > Add New Webhook.**

![Pahinang listahan ng Webhooks na walang laman na may Add New Webhook button](/img/admin/webhooks-list-empty.png)

Maaari mo nang i-edit ang configuration ng webhook:

![Form ng Add New Webhook na may mga field na Name, Event, at URL](/img/admin/webhook-add-modal.png)

Kapag gumagawa ng bagong webhook, hihingan ka ng impormasyon tulad ng **Name, URL,** at **Event**. Maaari kang gumamit ng anumang pangalan na gusto mo para sa iyong webhook. Ang pinakamahahalagang field ay ang URL at Event.

![Interface ng pag-edit ng webhook na nagpapakita ng URL field at preview ng payload](/img/admin/webhook-url-field.png)

Ang URL ay ang **endpoint o ang destinasyon** kung saan ipapadala ng Ultimate Multisite ang **payload o data**. Ito ang application na tatanggap ng data.

Ang Zapier ang pinakakaraniwang solusyon na ginagamit ng user para gawing mas madali ang integration sa 3rd party application. Kung walang platform tulad ng Zapier, kakailanganin mong manu-manong gumawa ng custom function na sasalo sa data at magpoproseso nito. Tingnan ang artikulong ito tungkol sa **paano gamitin ang Ultimate Multisite webhook kasama ang Zapier.**

Sa artikulong ito, titingnan natin ang pangunahing konsepto kung paano gumagana ang webhook at ang mga event na available sa Ultimate Multisite. Gagamit tayo ng 3rd party site na tinatawag na [requestbin.com](https://requestbin.com/). Papayagan tayo ng site na ito na gumawa ng endpoint at saluhin ang payload nang hindi gumagawa ng anumang coding. _**Disclaimer: ang gagawin lang nito ay ipakita sa atin na natanggap na ang data.**_ Walang pagpoproseso o anumang uri ng aksyon na gagawin sa payload.

Pumunta sa [requestbin.com](https://requestbin.com/) at i-click ang Create Request Bin.

Pagkatapos i-click ang button na iyon, hihingin nito sa iyo na mag-log in kung mayroon ka nang account o mag-sign up. Kung mayroon ka nang account, dadalhin ka nito diretso sa kanilang dashboard. Sa kanilang dashboard, makikita mo agad ang endpoint o URL na maaari mong gamitin sa paggawa ng iyong Ultimate Multisite webhook.

Sige, kopyahin ang URL at bumalik sa Ultimate Multisite. Ilagay ang endpoint sa URL field at pumili ng event mula sa dropdown. Sa halimbawang ito, pipiliin natin ang **Payment Received**.

Nati-trigger ang event na ito tuwing nagbabayad ang isang user. Nakalista sa ibaba ng pahina ang lahat ng available na event, ang kanilang paglalarawan, at mga payload. I-click ang **Add New Webhook** button para i-save ang webhook.

![Dropdown ng webhook event na may napiling Payment Received](/img/admin/webhook-event-picker.png)

Maaari na tayong magpadala ng test event sa endpoint para makita natin kung gumagana ang webhook na ginawa natin. Magagawa natin ito sa pamamagitan ng pag-click sa **Send Test Event** sa ilalim ng webhook na ginawa natin.

![Listahan ng Webhooks na nagpapakita ng isang naka-configure na webhook at Send Test action](/img/admin/webhooks-list-populated.png)

Nagpapakita ito ng confirmation window na nagsasabing matagumpay ang test.

![Resulta ng webhook test event pagkatapos magpadala ng test payload](/img/admin/webhook-test-result.png)

Ngayon kung babalik tayo sa _Requestbin_ site, makikita natin na natanggap na ang payload na naglalaman ng ilang test data.

Ito ang pangunahing prinsipyo kung paano gumagana ang webhook at mga endpoint. Kung gagawa ka ng custom endpoint, kakailanganin mong gumawa ng custom function para iproseso ang data na natatanggap mo mula sa Ultimate Multisite.
