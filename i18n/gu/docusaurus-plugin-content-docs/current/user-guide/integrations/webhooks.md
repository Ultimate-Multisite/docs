---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Webhooks (v2) પર પ્રથમ નજર

_**ધ્યાન આપો: આ feature અથવા લેખ advanced users માટે છે.**_

**Webhook** એ Ultimate Multisite જેવી app અથવા software માટે અન્ય applications ને real-time માહિતી પૂરી પાડવાનો એક રસ્તો છે. Webhook data અથવા payloads ને અન્ય applications ને તરત જ પહોંચાડે છે જ્યારે તે થાય છે, એટલે કે તમને **તરત જ data મળે છે.**

આ ત્યારે ઉપયોગી છે જ્યારે તમારે Ultimate Multisite માંથી અમુક data ને બીજા CRM અથવા system માં મોકલવાની જરૂર હોય જ્યારે પણ કોઈ event trigger થાય. ઉદાહરણ તરીકે, જ્યારે પણ નવું user account બને ત્યારે તમારે user નું નામ અને email address mailing list માં મોકલવાની જરૂર હોય.

## Webhook કેવી રીતે બનાવવું

Webhook બનાવવા માટે, તમારા network admin dashboard પર જાઓ. **Ultimate Multisite > Webhooks > Add New Webhook** પર ક્લિક કરો.

![Add New Webhook button સાથે Webhooks list page](/img/admin/webhooks-list.png)

નવું webhook બનાવતી વખતે તમને **Name, URL,** અને **Event** જેવી માહિતી માટે પૂછવામાં આવશે. તમે તમારા webhook માટે કોઈપણ નામ વાપરી શકો છો. સૌથી મહત્વપૂર્ણ fields URL અને Event છે.

![Name, URL, અને Event fields સાથે નવું webhook form](/img/admin/webhooks-list.png)

URL એ **endpoint અથવા destination** છે જ્યાં Ultimate Multisite **payload અથવા data** મોકલશે. આ તે application છે જે data receive કરશે.

Zapier એ સૌથી સામાન્ય solution છે જેનો users 3rd party application સાથે integration સરળ બનાવવા માટે ઉપયોગ કરે છે. Zapier જેવા platform વિના, તમારે manually એક custom function બનાવવું પડશે જે data ને catch કરશે અને process કરશે. **Zapier સાથે Ultimate Multisite webhook કેવી રીતે વાપરવું** તે માટે આ લેખ જુઓ.

આ લેખમાં, આપણે webhook કેવી રીતે કામ કરે છે તેની basic concept અને Ultimate Multisite માં ઉપલબ્ધ events જોઈશું. આપણે [requestbin.com](https://requestbin.com/) નામની 3rd party site વાપરીશું. આ site આપણને કોઈ coding વિના endpoint બનાવવા અને payload catch કરવાની મંજૂરી આપશે. _**Disclaimer: આ ફક્ત આપણને બતાવશે કે data receive થયો છે.**_ Payload પર કોઈ processing અથવા કોઈ પણ પ્રકારની action નહીં થાય.

[requestbin.com](https://requestbin.com/) પર જાઓ અને Create Request Bin પર ક્લિક કરો.

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

તે button પર ક્લિક કર્યા પછી, જો તમારી પાસે પહેલેથી account હોય તો તે તમને log in કરવાનું કહેશે અથવા sign up કરવાનું કહેશે. જો તમારી પાસે પહેલેથી account હોય તો તે તમને સીધા તેમના dashboard પર લઈ જશે. તેમના dashboard પર, તમે તરત જ endpoint અથવા URL જોશો જેનો ઉપયોગ તમે Ultimate Multisite webhook બનાવવામાં કરી શકો છો.

![Endpoint URL બતાવતું RequestBin dashboard](/img/admin/webhooks-list.png)

URL copy કરો અને Ultimate Multisite પર પાછા જાઓ. URL field માં endpoint મૂકો અને dropdown માંથી event select કરો. આ ઉદાહરણમાં, આપણે **Payment Received** select કરીશું.

આ event ત્યારે trigger થાય છે જ્યારે user payment કરે છે. બધા ઉપલબ્ધ events, તેમનું description, અને payloads page ના તળિયે list કરેલા છે. Webhook save કરવા માટે **Add New Webhook** button પર ક્લિક કરો.

![Payment Received event સાથે configure કરેલું Webhook](/img/admin/webhooks-list.png)

હવે આપણે endpoint પર test event મોકલી શકીએ છીએ જેથી આપણે જોઈ શકીએ કે આપણે બનાવેલું webhook કામ કરે છે કે નહીં. આપણે આ કરી શકીએ છીએ આપણે બનાવેલા webhook હેઠળ **Send Test Event** પર ક્લિક કરીને.

![Webhook હેઠળ Send Test Event option](/img/admin/webhooks-list.png)

આ એક confirmation window બતાવે છે જે કહે છે કે test successful હતો.

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

હવે જો આપણે _Requestbin_ site પર પાછા જઈએ તો આપણે જોઈશું કે payload receive થયો છે જેમાં કેટલાક test data છે.

![Received webhook payload data બતાવતું RequestBin](/img/admin/webhooks-list.png)

આ webhook અને endpoints કેવી રીતે કામ કરે છે તેનો basic principle છે. જો તમે custom endpoint બનાવવા માંગો છો, તો તમારે Ultimate Multisite માંથી receive થતા data ને process કરવા માટે custom function બનાવવું પડશે.
