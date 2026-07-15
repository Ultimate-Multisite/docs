---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) પર પ્રથમ નજર

_**ધ્યાન આપો: નોંધ લો કે આ સુવિધા અથવા લેખ અદ્યતન વપરાશકર્તાઓ માટે છે.**_

**webhook** એ Ultimate Multisite જેવી કોઈ એપ અથવા સોફ્ટવેર માટે અન્ય એપ્લિકેશનોને રિયલ-ટાઇમ માહિતી પૂરી પાડવાનો એક માર્ગ છે. webhook અન્ય એપ્લિકેશનોને ડેટા અથવા પેલોડ્સ ઘટના બનતી વખતે પહોંચાડે છે, એટલે કે તમે **તરત જ ડેટા મેળવો છો.**

જ્યારે દરેક વખતે કોઈ ઇવેન્ટ ટ્રિગર થાય ત્યારે Ultimate Multisite માંથી ચોક્કસ ડેટા બીજી CRM અથવા સિસ્ટમમાં એકીકૃત કરવાની અથવા મોકલવાની જરૂર હોય ત્યારે આ મદદરૂપ છે. ઉદાહરણ તરીકે, દરેક વખતે નવું વપરાશકર્તા Account બનાવવામાં આવે ત્યારે તમારે વપરાશકર્તાનું નામ અને ઇમેઇલ સરનામું મેઇલિંગ યાદીમાં મોકલવું પડશે.

## webhook કેવી રીતે બનાવવો {#how-to-create-a-webhook}

webhook બનાવવા માટે, તમારા નેટવર્ક એડમિન dashboard પર જાઓ. **Ultimate Multisite > Webhooks > Add New Webhook** પર ક્લિક કરો.

![Add New Webhook બટન સાથે ખાલી Webhooks યાદી પેજ](/img/admin/webhooks-list-empty.png)

પછી તમે webhook રૂપરેખાંકન સંપાદિત કરી શકો છો:

![Name, Event, અને URL ફીલ્ડ્સ સાથે Add New Webhook ફોર્મ](/img/admin/webhook-add-modal.png)

નવો webhook બનાવતી વખતે તમને **Name, URL,** અને **Event** જેવી માહિતી પૂછવામાં આવશે. તમારા webhook માટે તમે તમારી ઇચ્છાનું કોઈપણ નામ વાપરી શકો છો. સૌથી મહત્વપૂર્ણ ફીલ્ડ્સ URL અને Event છે.

![URL ફીલ્ડ અને પેલોડ પૂર્વાવલોકન બતાવતું webhook સંપાદન ઇન્ટરફેસ](/img/admin/webhook-url-field.png)

URL એ **endpoint અથવા destination** છે જ્યાં Ultimate Multisite **payload અથવા data** મોકલશે. આ એ એપ્લિકેશન છે જે ડેટા પ્રાપ્ત કરશે.

Zapier સૌથી સામાન્ય ઉકેલ છે જેનો ઉપયોગ વપરાશકર્તા 3rd party એપ્લિકેશન સાથે એકીકરણ સરળ બનાવવા માટે કરે છે. Zapier જેવા પ્લેટફોર્મ વિના, તમારે ડેટા પકડે અને તેને પ્રોસેસ કરે તેવું કસ્ટમ ફંક્શન હાથેથી બનાવવું પડશે. **Ultimate Multisite webhook નો Zapier સાથે ઉપયોગ કેવી રીતે કરવો** તે અંગેનો આ લેખ જુઓ.

આ લેખમાં, અમે webhook કેવી રીતે કામ કરે છે તેની મૂળભૂત સંકલ્પના અને Ultimate Multisite માં ઉપલબ્ધ ઇવેન્ટ્સ જોઈશું. અમે [requestbin.com](https://requestbin.com/) નામની 3rd party સાઇટનો ઉપયોગ કરીશું. આ સાઇટ અમને કોઈ કોડિંગ કર્યા વિના endpoint બનાવવાની અને payload પકડવાની મંજૂરી આપશે. _**અસ્વીકરણ: તે ફક્ત અમને બતાવશે કે ડેટા પ્રાપ્ત થયો છે.**_ payload પર કોઈ પ્રોસેસિંગ અથવા કોઈપણ પ્રકારની ક્રિયા કરવામાં આવશે નહીં.

[requestbin.com](https://requestbin.com/) પર જાઓ અને Create Request Bin પર ક્લિક કરો.

તે બટન પર ક્લિક કર્યા પછી, જો તમારી પાસે પહેલેથી Account હોય તો તે તમને લૉગ ઇન કરવા અથવા સાઇન અપ કરવા પૂછશે. જો તમારી પાસે પહેલેથી Account હોય તો તે તમને સીધા તેમના dashboard પર લઈ જશે. તેમના dashboard પર, તમે તરત જ endpoint અથવા URL જોશો જેનો ઉપયોગ તમે તમારો Ultimate Multisite webhook બનાવવા માટે કરી શકો છો.

આગળ વધો અને URL કૉપી કરો અને Ultimate Multisite પર પાછા જાઓ. endpoint ને URL ફીલ્ડમાં મૂકો અને dropdown માંથી કોઈ event પસંદ કરો. આ ઉદાહરણમાં, અમે **Payment Received** પસંદ કરીશું.

જ્યારે પણ કોઈ વપરાશકર્તા ચુકવણી કરે છે ત્યારે આ event ટ્રિગર થાય છે. ઉપલબ્ધ તમામ events, તેમનું વર્ણન, અને payloads પેજના તળિયે સૂચિબદ્ધ છે. webhook સેવ કરવા માટે **Add New Webhook** બટન પર ક્લિક કરો.

![Payment Received પસંદ કરેલું webhook event dropdown](/img/admin/webhook-event-picker.png)

અમે બનાવેલો webhook કામ કરે છે કે નહીં તે જોવા માટે હવે endpoint પર ટેસ્ટ event મોકલી શકીએ છીએ. અમે બનાવેલા webhook હેઠળ **Send Test Event** પર ક્લિક કરીને આ કરી શકીએ છીએ.

![એક રૂપરેખાંકિત webhook અને Send Test ક્રિયા બતાવતી Webhooks યાદી](/img/admin/webhooks-list-populated.png)

આ પુષ્ટિ વિન્ડો બતાવે છે કે ટેસ્ટ સફળ રહ્યો હતો.

![ટેસ્ટ payload મોકલ્યા પછી webhook ટેસ્ટ event પરિણામ](/img/admin/webhook-test-result.png)

હવે જો અમે _Requestbin_ સાઇટ પર પાછા જઈએ તો જોશું કે payload કેટલાક ટેસ્ટ ડેટા સાથે પ્રાપ્ત થયો છે.

webhook અને endpoints કેવી રીતે કામ કરે છે તેનો આ મૂળભૂત સિદ્ધાંત છે. જો તમે કસ્ટમ endpoint બનાવવા માંગતા હો, તો Ultimate Multisite માંથી તમે પ્રાપ્ત કરેલા ડેટાને પ્રોસેસ કરવા માટે તમારે કસ્ટમ ફંક્શન બનાવવું પડશે.
