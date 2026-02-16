---
title: ચુકવણી મેળવવી
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# પેમેન્ટ મેળવવું (v2)

_**મહત્વની નોંધ: આ લેખ Ultimate Multisite વર્ઝન 2.x માટે છે.**_

Ultimate Multisite માં બિલ્ટ-ઇન મેમ્બરશિપ અને બિલિંગ સિસ્ટમ છે. અમારી બિલિંગ સિસ્ટમ કામ કરે તે માટે, અમે e-commerce માં સૌથી વધુ વપરાતા payment gateways ને integrate કર્યા છે. Ultimate Multisite માં default payment gateways _Stripe_, _PayPal_ અને Manual Payment છે. તમે _WooCommerce_, _GoCardless_ અને _Payfast_ નો ઉપયોગ કરીને પણ પેમેન્ટ મેળવી શકો છો, તેમના respective add-ons ઇન્સ્ટોલ કરીને.

## મૂળભૂત સેટિંગ્સ

તમે Ultimate Multisite payment settings હેઠળ આમાંથી કોઈપણ payment gateway ને configure કરી શકો છો. તમે તેને **Ultimate Multisite menu > Settings > Payments** પર જઈને શોધી શકો છો.

![Ultimate Multisite માં Payment settings પેજ](/img/config/settings-payment-gateways.png)

તમે payment gateway સેટઅપ કરો તે પહેલાં, કૃપા કરીને મૂળભૂત payment settings પર એક નજર નાખો જે તમે configure કરી શકો છો:

**Force auto-renew:** આ સુનિશ્ચિત કરશે કે યુઝરે પસંદ કરેલી billing frequency ના આધારે દરેક billing cycle ના અંતે પેમેન્ટ આપમેળે recur થશે.

![Force auto-renew toggle setting](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** આ વિકલ્પ enabled હોય ત્યારે તમારા client ને registration process દરમિયાન કોઈ financial information ઉમેરવાની જરૂર નહીં પડે. આ ફક્ત trial period સમાપ્ત થયા પછી જ જરૂરી બનશે.

![Allow trials without payment method toggle](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** આ તમને પેમેન્ટ પછી invoice મોકલવો કે નહીં તેનો વિકલ્પ આપે છે. નોંધ કરો કે users તેમના subsite dashboard હેઠળ તેમના payment history ને access કરી શકશે. આ વિકલ્પ Manual Gateway ને લાગુ પડતો નથી.

![Send invoice on payment confirmation toggle](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** અહીં, તમે payment reference code અથવા sequential number scheme માંથી કોઈ એક પસંદ કરી શકો છો. જો તમે તમારા invoices માટે payment reference code વાપરવાનું પસંદ કરો, તો તમારે કંઈ configure કરવાની જરૂર નથી. જો તમે sequential number scheme વાપરવાનું પસંદ કરો, તો તમારે **next invoice number** configure કરવો પડશે (આ નંબર system પર generate થનાર આગલા invoice માટે invoice number તરીકે વપરાશે. દરેક વખતે નવો invoice create થાય ત્યારે તે એકથી વધે છે. તમે તેને change કરી શકો છો અને invoice sequential number ને ચોક્કસ value પર reset કરવા save કરી શકો છો) અને **invoice number prefix.**

![Invoice numbering scheme selection](/img/config/settings-payment-gateways.png)

![Sequential invoice number અને prefix settings](/img/config/settings-payment-gateways.png)

## Gateways ક્યાં શોધવા:

તમે એ જ પેજ પર payment gateways સેટઅપ કરી શકો છો (**Ultimate Multisite > Settings > Payments**). **active payment gateways** ની નીચે, તમે જોઈ શકશો: _Stripe_, _Stripe Checkout_, _PayPal_ અને _Manual_.

![Active payment gateways list](/img/config/settings-payment-gateways.png)

અમારી પાસે દરેક payment gateway માટે એક dedicated લેખ છે જે તમને તેને સેટઅપ કરવાના steps માં guide કરશે, જે તમે નીચેની links પર શોધી શકો છો.

**Stripe gateway સેટઅપ કરવું**

**PayPal gateway સેટઅપ કરવું**

**Manual payments સેટઅપ કરવું**

હવે, જો તમે _WooCommerce_, _GoCardless_ અથવા _Payfast_ ને તમારા payment gateway તરીકે વાપરવા માંગો છો, તો તમારે **તેમના add-ons ઇન્સ્ટોલ અને configure કરવા પડશે**.

### WooCommerce add-on કેવી રીતે ઇન્સ્ટોલ કરવું:

અમે સમજીએ છીએ કે _Stripe_ અને _PayPal_ કેટલાક દેશોમાં ઉપલબ્ધ નથી જે Ultimate Multisite users ને અમારા plugin નો અસરકારક રીતે ઉપયોગ કરવામાં મર્યાદિત કરે છે અથવા અવરોધે છે. તેથી અમે _WooCommerce_ ને integrate કરવા માટે એક add-on બનાવ્યું, જે એક ખૂબ જ લોકપ્રિય e-commerce plugin છે. દુનિયાભરના developers એ તેમાં વિવિધ payment gateways integrate કરવા માટે add-ons બનાવ્યા છે. અમે Ultimate Multisite billing system સાથે તમે વાપરી શકો તે payment gateways ને extend કરવા માટે આનો ફાયદો ઉઠાવ્યો.

_**મહત્વનું:** Ultimate Multisite: WooCommerce Integration ને ઓછામાં ઓછું તમારી main site પર WooCommerce activated હોવું જરૂરી છે._

પહેલાં, કૃપા કરીને add-ons પેજ પર જાઓ. તમે તેને **Ultimate Multisite > Settings** પર જઈને શોધી શકો છો. તમને **Add-ons** table દેખાશે. **Check our Add-ons** પર ક્લિક કરો.

![Add-ons section સાથે Settings પેજ](/img/config/settings-general.png)

**Check our Add-ons** પર ક્લિક કર્યા પછી, તમને add-ons પેજ પર redirect કરવામાં આવશે. અહીં તમે બધા Ultimate Multisite add-ons શોધી શકો છો. **Ultimate Multisite: WooCommerce Integration** add-on પર ક્લિક કરો.

![ઉપલબ્ધ add-ons ની યાદી સાથે Add-ons પેજ](/img/config/settings-general.png)

add-on details સાથે એક window pop up થશે. ફક્ત **Install Now** પર ક્લિક કરો.

![WooCommerce add-on install dialog](/img/config/settings-general.png)

installation પૂર્ણ થયા પછી, તમને plugins પેજ પર redirect કરવામાં આવશે. અહીં, ફક્ત **Network Activate** પર ક્લિક કરો અને WooCommerce add-on તમારા network પર activated થઈ જશે.

![WooCommerce add-on ને Network Activate કરો](/img/config/settings-general.png)

તેને activate કર્યા પછી, જો તમારી website પર હજી WooCommerce plugin ઇન્સ્ટોલ અને activated નથી, તો તમને એક reminder મળશે.

![WooCommerce activation reminder notice](/img/config/settings-general.png)

WooCommerce Integration add-on વિશે વધુ વાંચવા માટે, **અહીં ક્લિક કરો**.

### GoCardless add-on કેવી રીતે ઇન્સ્ટોલ કરવું:

_GoCardless_ add-on ઇન્સ્ટોલ કરવાના steps લગભગ _WooCommerce_ add-on જેવા જ છે. કૃપા કરીને add-ons પેજ પર જાઓ અને **Ultimate Multisite: GoCardless Gateway** add-on પસંદ કરો.

![ઉપલબ્ધ add-ons ની યાદી સાથે Add-ons પેજ](/img/config/settings-general.png)

add-on window pop up થશે. **Install Now** પર ક્લિક કરો.

![GoCardless add-on install dialog](/img/config/settings-general.png)

installation પૂર્ણ થયા પછી, તમને plugins પેજ પર redirect કરવામાં આવશે. અહીં, ફક્ત **Network Activate** પર ક્લિક કરો અને _GoCardless_ add-on તમારા network પર activated થઈ જશે.

![GoCardless add-on ને Network Activate કરો](/img/config/settings-general.png)

_GoCardless_ gateway સાથે શરૂઆત કેવી રીતે કરવી તે જાણવા માટે, **આ લેખ વાંચો**.

### Payfast add-on કેવી રીતે ઇન્સ્ટોલ કરવું:

add-ons પેજ પર જાઓ અને **Ultimate Multisite: Payfast Gateway** add-on પસંદ કરો.

![ઉપલબ્ધ add-ons ની યાદી સાથે Add-ons પેજ](/img/config/settings-general.png)

add-on window pop up થશે. **Install Now** પર ક્લિક કરો.

![Payfast add-on install dialog](/img/config/settings-general.png)

installation પૂર્ણ થયા પછી, તમને plugins પેજ પર redirect કરવામાં આવશે. અહીં, ફક્ત **Network Activate** પર ક્લિક કરો અને _Payfast_ add-on તમારા network પર activated થઈ જશે.

![Payfast add-on ને Network Activate કરો](/img/config/settings-general.png)
