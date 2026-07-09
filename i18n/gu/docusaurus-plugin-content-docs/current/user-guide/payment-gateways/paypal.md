---
title: PayPal સેટ અપ કરવું
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Gateway સેટ અપ કરવું (v2) {#setting-up-the-paypal-gateway-v2}

_**મહત્વપૂર્ણ નોંધ: આ લેખ Ultimate Multisite version 2.x ને સંદર્ભિત કરે છે.**_

તમે અમારા ચુકવણી સેટિંગ્સ પેજ પર ચુકવણીની ચાર પદ્ધતિઓ સુધી સક્રિય કરી શકો છો: Stripe, Stripe Checkout, PayPal અને Manual. આ લેખમાં, આપણે **PayPal** સાથે કેવી રીતે સંકલન કરવું તે જોશું.

Stripe જેવી જ રીતે, PayPal ઓનલાઈન ચુકવણીઓ માટે વ્યાપક રીતે વપરાય છે, ખાસ કરીને WordPress વેબસાઇટ્સ પર. આ લેખ તમને તમારા નેટવર્ક પર ઉપલબ્ધ ચુકવણી પદ્ધતિ તરીકે PayPal નો ઉપયોગ કેવી રીતે કરવો તેની માર્ગદર્શિકા આપશે.

નોંધ કરો કે આ સંકલન માટે જરૂરી API ઓળખપત્ર મેળવવા માટે તમારી પાસે **PayPal Business account** હોવું જરૂરી છે.

## તમારા નેટવર્ક પર PayPal સક્રિય કરવું {#enabling-paypal-on-your-network}

તમારા નેટવર્ક પર ઉપલબ્ધ ચુકવણી પદ્ધતિ તરીકે PayPal સક્રિય કરવા માટે, **Ultimate Multisite > Settings > Payments** ટેબ પર જાઓ અને PayPal ની બાજુમાં આવેલ બોક્સને ટિક કરો.

![સક્રિય ચુકવણી ગેટવેઝમાં PayPal સક્રિય કરવું](/img/config/settings-payment-gateways.png)

## માર્ગદર્શિત સેટઅપ વિઝાર્ડનો ઉપયોગ કરવો {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 ચુકવણી Gateway સેટિંગ્સમાં માર્ગદર્શિત PayPal સેટઅપ વિઝાર્ડ ઉમેરે છે. PayPal સક્રિય કર્યા પછી, Gateway ને કેવી રીતે કનેક્ટ કરવો છે તે પસંદ કરવા અને સેવ કરતા પહેલાં કયા ઓળખપત્રો હજુ જરૂરી છે તે પુષ્ટિ કરવા માટે **Ultimate Multisite > Settings > Payments** પર વિઝાર્ડનો ઉપયોગ કરો.

વિઝાર્ડ બે સેટઅપ માર્ગોને સપોર્ટ કરે છે:

* **મેન્યુઅલ ઓળખપત્ર એન્ટ્રી**: જ્યારે તમારી પાસે પહેલેથી PayPal API ઓળખપત્રો હોય, જ્યારે OAuth સેટઅપ તમારા Account માટે ઉપલબ્ધ ન હોય, અથવા જ્યારે તમે PayPal માંથી ઓળખપત્રો જાતે કોપી કરવાનું પસંદ કરો ત્યારે આ માર્ગનો ઉપયોગ કરો. PayPal ફીલ્ડ્સમાં API Username, API Password, અને API Signature દાખલ કરો, પછી ચુકવણી સેટિંગ્સ સેવ કરો.
* **OAuth કનેક્શન ગેટ**: આ માર્ગનો ઉપયોગ ફક્ત ત્યારે કરો જ્યારે OAuth વિકલ્પ તમારા install માટે ઉપલબ્ધ અને સક્ષમ હોય. વિઝાર્ડ OAuth પ્રવાહને feature flag પાછળ બતાવે છે, તેથી flag વગરના નેટવર્ક્સ મેન્યુઅલ ઓળખપત્ર એન્ટ્રી ફીલ્ડ્સનો ઉપયોગ ચાલુ રાખે છે.

જો તમને વિઝાર્ડમાં OAuth વિકલ્પ ન દેખાય, તો નીચેનો મેન્યુઅલ ઓળખપત્ર એન્ટ્રી પ્રવાહ પૂર્ણ કરો. Gateway અગાઉના Ultimate Multisite 2.x રિલીઝ જેવી જ PayPal Business API ઓળખપત્રો સાથે કાર્ય કરે છે.

## PayPal API ઓળખપત્રો મેળવવા {#getting-the-paypal-api-credentials}

એકવાર PayPal ચુકવણી Gateway તરીકે સક્રિય થઈ જાય, પછી તમારે PayPal API **Username** , PayPal API **Password** અને PayPal API **Signature** માટેના ફીલ્ડ્સ ભરવા પડશે.

તમે તમારા PayPal [Live](https://www.paypal.com/home) અથવા [Sandbox](https://www.sandbox.paypal.com/home) Account માં લોગિન કરીને આ મેળવી શકો છો.

(યાદ રાખો કે તમે ચુકવણીઓનું પરીક્ષણ કરવા અને Gateway યોગ્ય રીતે સેટ અપ થયું છે કે નહીં તે જોવા માટે **sandbox mode** નો ઉપયોગ કરી શકો છો. ફક્ત સંબંધિત વિભાગમાં ટોગલ ચાલુ કરો.)

![PayPal API ઓળખપત્ર ફીલ્ડ્સ અને sandbox mode ટોગલ](/img/config/settings-payment-gateways.png)

તમારા PayPal Account માટે API Signature અથવા Certificate ઓળખપત્રો વિનંતી કરવા માટે:

  1. તમારા [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) પર જાઓ.

  2. **API access** વિભાગમાં, **Update** પર ક્લિક કરો.
![API access વિભાગ સાથે PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** હેઠળ, **Manage API credentials** પર ક્લિક કરો.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * જો તમે પહેલેથી જ API Signature અથવા Certificate જનરેટ કર્યું હોય, તો તમને એવા પેજ પર રીડાયરેક્ટ કરવામાં આવશે જ્યાં તમે તમારા ઓળખપત્રો શોધી શકો છો.

     * _**નોંધ:** જો તમને તમારા PayPal Account ચકાસવા માટે કહેવામાં આવે, તો સ્ક્રીન પરની સૂચનાઓ અનુસરો._

  4. નીચેના વિકલ્પોમાંથી _એક_ પસંદ કરો, પછી **Agree and Submit** પર ક્લિક કરો.

     * **Request API Signature** – API Signature પ્રમાણીકરણ માટે પસંદ કરો.

     * **Request API Certificate** – API Certificate પ્રમાણીકરણ માટે પસંદ કરો.

  5. PayPal તમારા API ઓળખપત્રો નીચે મુજબ જનરેટ કરે છે:
![PayPal દ્વારા જનરેટ કરાયેલા API ઓળખપત્રો](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** માં API Username, API Password, અને Signature શામેલ છે, જેની સમયસીમા સમાપ્ત થતી નથી. વધારાની સુરક્ષા માટે આ મૂલ્યો ડિફોલ્ટ રીતે છુપાયેલા હોય છે. તેમને ચાલુ અને બંધ ટોગલ કરવા માટે **Show/Hide** પર ક્લિક કરો. પૂર્ણ થયા પછી, **Done** પર ક્લિક કરો.

     * **API Certificate credentials** માં API Username, API Password, અને Certificate શામેલ છે, જે ત્રણ વર્ષ પછી આપમેળે સમાપ્ત થાય છે. API Certificate ને તમારા ડેસ્કટોપ પર સેવ કરવા માટે **Download Certificate** પર ક્લિક કરો.

બસ એટલું જ, તમારું PayPal ચુકવણી સંકલન પૂર્ણ થયું છે!

જો તમને PayPal સેટિંગ્સ અંગે કોઈ પ્રશ્નો હોય, તો તમે PayPal ના [Help Center](https://www.paypal.com/br/smarthelp/home) નો સંદર્ભ લઈ શકો છો.
