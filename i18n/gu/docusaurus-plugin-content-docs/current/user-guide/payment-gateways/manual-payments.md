---
title: મેન્યુઅલ પેમેન્ટ્સ સેટ અપ કરવું
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# મેન્યુઅલ પેમેન્ટ્સ સેટ કરવું (v2)

_**મહત્વની નોંધ: આ લેખ Ultimate Multisite version 2.x વિશે છે.**_

જો તમારા users માટે **Stripe** કે **PayPal** ઉપલબ્ધ ન હોય, તો મેન્યુઅલ પેમેન્ટ્સ દ્વારા તમે અન્ય પેમેન્ટ પદ્ધતિઓ ઓફર કરી શકો છો. આ વાયર કે બેંક ટ્રાન્સફર હોઈ શકે છે, અથવા તમારા users માટે સ્થાનિક રીતે ઉપલબ્ધ કોઈપણ અન્ય પેમેન્ટ પદ્ધતિ હોઈ શકે છે.

## મેન્યુઅલ પેમેન્ટ્સ કેવી રીતે enable કરવું

મેન્યુઅલ પેમેન્ટ સેટ કરવું ખૂબ જ સરળ છે. તમારે ફક્ત payment gateways હેઠળ તેને enable કરવું પડશે અને user ને પેમેન્ટ કેવી રીતે મોકલવું તેની વિગતવાર સૂચનાઓ લખવી પડશે.

સૌ પ્રથમ, **Ultimate Multisite > Settings > Payments** પર જાઓ. **Payment Gateways** ની નીચે, **Manual** ને toggle કરીને on કરો. તમે જોશો કે **Payment Instructions** બોક્સ દેખાશે.

આ બોક્સમાં તમારા customer ને પેમેન્ટ કરવા માટે જરૂરી માહિતી ઉમેરો. ઉદાહરણ તરીકે, તમારા બેંક એકાઉન્ટની વિગતો અને તમારો email, જેથી customer તમને પેમેન્ટ confirmation મોકલી શકે.

![Manual payment gateway toggle અને payment instructions box](/img/config/settings-payment-gateways.png)

સેટઅપ પૂર્ણ થયા પછી, ફક્ત **Save Settings** પર ક્લિક કરો અને થઈ ગયું. જ્યારે users તમારા network પર register કરશે, ત્યારે તેમને એક સંદેશ દેખાશે કે તેઓ ખરીદી પૂર્ણ કરવા માટે તમારી સૂચનાઓ પ્રાપ્ત કરશે.

![Registration દરમિયાન દર્શાવેલ manual payment સંદેશ](/img/config/settings-payment-gateways.png)

અને તેમને તમારા **Thank You** page પર પણ તમારી payment instructions સાથેનો સંદેશ મળશે.

![Payment instructions દર્શાવતો Thank You page](/img/config/settings-payment-gateways.png)

## મેન્યુઅલ પેમેન્ટ્સની પુષ્ટિ કરવી

મેન્યુઅલ પેમેન્ટની પુષ્ટિ કરવા માટે, ડાબી બાજુના bar પર **Payments** menu પર જાઓ. ત્યાં તમે તમારા network પરના તમામ payments અને તેમની વિગતો જોઈ શકો છો, જેમાં તેમની **status** પણ સામેલ છે. મેન્યુઅલ payment હંમેશા **Pending** status ધરાવે છે જ્યાં સુધી તમે તેને manually બદલતા નથી.

![Pending manual payment દર્શાવતી Payments list](/img/admin/payments-list.png)

**reference code** પર ક્લિક કરીને payment page માં પ્રવેશ કરો. આ page પર તમને pending payment ની તમામ વિગતો મળશે, જેમ કે reference ID, products, timestamps અને વધુ.

![Reference code અને products સાથેનો Payment details page](/img/admin/payments-list.png)

જમણી column માં, તમે payment ની status બદલી શકો છો. તેને **Completed** માં બદલવાથી અને **Activate Membership** option ને toggle કરવાથી તમારા customer ની site enable થશે અને તેમની membership active થઈ જશે.

![Activate Membership toggle સાથે Payment status ને Completed માં બદલવું](/img/admin/payments-list.png)
