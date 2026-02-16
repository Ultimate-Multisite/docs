---
title: PayPal સેટ કરવું
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal Gateway સેટઅપ કરવું (v2)

_**મહત્વની નોંધ: આ લેખ Ultimate Multisite version 2.x માટે છે.**_

તમે અમારા payment settings પેજ પર ચાર પેમેન્ટ મેથડ્સ એક્ટિવ કરી શકો છો: Stripe, Stripe Checkout, PayPal અને Manual. આ લેખમાં, આપણે **PayPal** સાથે કેવી રીતે integrate કરવું તે જોઈશું.

Stripe ની જેમ જ, PayPal ઓનલાઇન પેમેન્ટ્સ માટે ખૂબ વપરાય છે, ખાસ કરીને WordPress વેબસાઇટ્સ પર. આ લેખ તમને તમારા network પર PayPal ને પેમેન્ટ મેથડ તરીકે કેવી રીતે ઉપયોગ કરવો તે અંગે માર્ગદર્શન આપશે.

નોંધ લો કે આ integration માટે જરૂરી API credential મેળવવા માટે તમારી પાસે **PayPal Business account** હોવું જરૂરી છે.

## તમારા network પર PayPal enable કરવું

તમારા network પર PayPal ને ઉપલબ્ધ પેમેન્ટ મેથડ તરીકે enable કરવા માટે, **Ultimate Multisite > Settings > Payments** tab પર જાઓ અને PayPal ની બાજુના બોક્સ પર ટિક કરો.

![Active payment gateways માં PayPal enable કરવું](/img/config/settings-payment-gateways.png)

## PayPal API credentials મેળવવી

PayPal ને payment gateway તરીકે enable કર્યા પછી, તમારે PayPal API **Username**, PayPal API **Password** અને PayPal API **Signature** ના ફીલ્ડ્સ ભરવાની જરૂર પડશે.

તમે આ તમારા PayPal [Live](https://www.paypal.com/home) અથવા [Sandbox](https://www.sandbox.paypal.com/home) account માં login કરીને મેળવી શકો છો.

(યાદ રાખો કે તમે **sandbox mode** નો ઉપયોગ પેમેન્ટ્સ ટેસ્ટ કરવા અને gateway યોગ્ય રીતે સેટઅપ થયું છે કે નહીં તે જોવા માટે કરી શકો છો. ફક્ત સંબંધિત section ને toggle on કરો.)

![PayPal API credentials ફીલ્ડ્સ અને sandbox mode toggle](/img/config/settings-payment-gateways.png)

તમારા PayPal account માટે API Signature અથવા Certificate credentials રિક્વેસ્ટ કરવા માટે:

  1. તમારી [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) પર જાઓ.

  2. **API access** section માં, **Update** પર ક્લિક કરો.  
![API access section સાથે PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** હેઠળ, **Manage API credentials** પર ક્લિક કરો.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * જો તમે પહેલેથી API Signature અથવા Certificate generate કરેલ છે, તો તમને એક પેજ પર રીડાયરેક્ટ કરવામાં આવશે જ્યાં તમે તમારી credentials શોધી શકો છો.

     * _**નોંધ:** જો તમને તમારું PayPal account verify કરવાનું કહેવામાં આવે, તો સ્ક્રીન પરની સૂચનાઓ અનુસરો._

  4. નીચેના વિકલ્પોમાંથી _એક_ પસંદ કરો, પછી **Agree and Submit** પર ક્લિક કરો.

     * **Request API Signature** – API Signature authentication માટે પસંદ કરો.

     * **Request API Certificate** – API Certificate authentication માટે પસંદ કરો.

  5. PayPal તમારી API credentials આ રીતે generate કરે છે:  
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** માં API Username, API Password, અને Signature શામેલ છે, જે expire થતી નથી. વધારાની સુરક્ષા માટે આ values default રીતે છુપાયેલી હોય છે. તેમને on અને off toggle કરવા માટે **Show/Hide** પર ક્લિક કરો. સમાપ્ત કર્યા પછી, **Done** પર ક્લિક કરો.

     * **API Certificate credentials** માં API Username, API Password, અને Certificate શામેલ છે, જે ત્રણ વર્ષ પછી આપમેળે expire થાય છે. API Certificate ને તમારા desktop પર save કરવા માટે **Download Certificate** પર ક્લિક કરો.

બસ, તમારું PayPal payment integration પૂર્ણ થયું!

જો તમને PayPal settings અંગે કોઈ પ્રશ્નો હોય, તો તમે PayPal ના [Help Center](https://www.paypal.com/br/smarthelp/home) નો સંદર્ભ લઈ શકો છો.
