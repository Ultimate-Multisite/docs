---
title: Mga Webhook
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Un Paunang Tingin sa Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**PAUNAWA: Tandaan na ang feature o artikulong ito ay para sa mga advanced user.**_

Ang **webhook** ay isang paraan kung paano magbibigay ang isang app o software tulad ng Ultimate Multisite ng real-time na impormasyon sa ibang mga application. Ang webhook ay nagdadala ng data o payload sa ibang mga application habang nangyayari, ibig sabihin, **makukuha mo agad ang data.**

Makatutulong ito kung kailangan mong mag-integrate o magpadala ng ilang partikular na data mula sa Ultimate Multisite patungo sa ibang CRM o system tuwing may mangyayaring event. Halimbawa, kailangan mong ipadala ang pangalan at email address ng user sa isang mailing list tuwing may bagong account ng user na ginawa.

## Paano gumawa ng webhook {#how-to-create-a-webhook}

Para gumawa ng webhook, pumunta ka sa network admin dashboard mo. I-click ang **Ultimate Multisite > Webhooks > Add New Webhook.**

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

Pagkatapos ay maaari mong i-edit ang configuration ng webhook:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

Kapag gumagawa ka ng bagong webhook, hihingin sa iyo ang mga impormasyon tulad ng **Name, URL,** at **Event**. Maaari kang gumamit ng anumang pangalan na gusto mo para sa iyong webhook. Ang pinakamahalagang mga field ay ang URL at Event.

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

Ang URL ay ang **endpoint o destinasyon** kung saan ipapadala ng Ultimate Multisite ang **payload o data**. Ito ang application na tatanggap ng data.

Ang Zapier ang pinakakaraniwang solusyon na ginagamit ng mga user para mas mapadali ang integration sa third-party application. Kung wala kang platform tulad ng Zapier, kakailanganin mong manu-manong gumawa ng custom function na makakakuha at magpoproseso ng data. Tingnan itong artikulo tungkol sa **paano gamitin ang Ultimate Multisite webhook kasama ang Zapier.**

Sa artikulong ito, titingnan natin ang pangunahing konsepto kung paano gumagana ang webhook at ang mga available na events sa Ultimate Multisite. Gagamitin natin ang isang third-party site na tinatawag na [requestbin.com](https://requestbin.com/). Ang site na ito ay magbibigay-daan sa atin na gumawa ng endpoint at makatanggap ng payload nang hindi kailangang mag-code. _**Disclaimer: ang gagawin lang nito ay ipakita sa atin na natanggap ang data.**_ Walang pagpoproseso o anumang uri ng aksyon ang gagawin sa payload.

Pumunta sa [requestbin.com](https://requestbin.com/) at i-click ang Create Request Bin.

Pagkatapos mag-click sa button na iyan, hihingi ito ng login kung mayroon ka nang account o magre-register. Kung mayroon ka nang account, dadalhin ka agad sa kanilang dashboard. Sa dashboard nila, makikita mo agad ang endpoint o URL na maaari mong gamitin sa paggawa ng iyong Ultimate Multisite webhook.

Kopyahin mo na lang ang URL at bumalik sa Ultimate Multisite. Ilagay ang endpoint sa field na URL at piliin ang isang event mula sa dropdown. Sa halimbawang ito, pipiliin natin ang **Payment Received**.

Ang event na ito ay magsisimula kapag may gumawa ng bayad ang isang user. Ang lahat ng available na events, ang kanilang paglalarawan, at ang mga payload ay nakalista sa ibaba ng pahina. I-click ang button na **Add New Webhook** para i-save ang webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Ngayon, maaari tayong magpadala ng test event sa endpoint para makita kung gumagana ba ang webhook na ginawa natin. Maaari nating gawin ito sa pamamagitan ng pag-click sa **Send Test Event** sa ilalim ng webhook na ginawa mo.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Ito ay magpapakita ng isang confirmation window na nagsasabing matagumpay ang test.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Kapag bumalik tayo sa _Requestbin_ site, makikita natin na natanggap ng payload ang ilang test data.

Ito ang pangunahing prinsipyo kung paano gumagana ang webhook at endpoints. Kung gagawa ka ng custom endpoint, kailangan mong gumawa ng custom function para iproseso ang data na natatanggap mo mula sa Ultimate Multisite.
