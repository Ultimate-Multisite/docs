---
title: Zapier મારફતે Account રજીસ્ટર કરો
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# ઇવેન્ટ: Zapier દ્વારા Account નોંધણી કરો

લેખ [Ultimate Multisite ને Zapier સાથે એકીકૃત કરવું](zapier.md) માં, અમે ચર્ચા કરી હતી કે ટ્રિગર્સ અને ઇવેન્ટ્સના આધારે Ultimate Multisite માં વિવિધ ક્રિયાઓ કરવા માટે Zapier નો ઉપયોગ કેવી રીતે કરવો. આ લેખમાં, અમે બતાવીશું કે તમે 3rd party એપ્લિકેશન્સને કેવી રીતે એકીકૃત કરી શકો છો. અમે ડેટાના સ્ત્રોત તરીકે Google Sheets નો ઉપયોગ કરીશું અને Account નોંધણી કરવા માટે માહિતી Ultimate Multisite ને મોકલીશું.

Zapier કનેક્ટ કરતાં પહેલાં, **Ultimate Multisite > Settings > API & Webhooks** પર જાઓ અને API સક્ષમ છે તેની ખાતરી કરો. જ્યારે Zapier Ultimate Multisite Account ઓળખપત્રો માટે પૂછે ત્યારે આ સ્ક્રીનમાંથી API Key અને API Secret કૉપિ કરો.

![API Key, API Secret, અને Enable API વિકલ્પો સાથે API અને Webhooks સેટિંગ્સ](/img/admin/settings-api-webhooks.png)

પ્રથમ, તમારે તમારા Google Drive હેઠળ **Google Sheet** બનાવવાની જરૂર છે. ખાતરી કરો કે તમે દરેક કૉલમને યોગ્ય રીતે વ્યાખ્યાયિત કરો જેથી તમે પછીથી ડેટા સરળતાથી મેપ કરી શકો.

Google sheet બનાવ્યા પછી, તમે તમારા Zapier Account માં લૉગ ઇન કરી શકો છો અને zap બનાવવાનું શરૂ કરી શકો છો.

**"App event"** માટેના શોધ ફીલ્ડ હેઠળ **"Google Sheets"** પસંદ કરો


પછી "**Event** " ફીલ્ડ માટે "**New spreadsheet row** " પસંદ કરો અને "**Continue** " દબાવો

આગલું પગલું તમને **Google Account** પસંદ કરવા કહેશે જ્યાં **Google Sheet** સાચવેલ છે. તેથી માત્ર ખાતરી કરો કે યોગ્ય google Account નિર્દિષ્ટ છે.


**"Set up trigger** " હેઠળ, તમારે google spreadsheet અને worksheet પસંદ કરીને નિર્દિષ્ટ કરવાની જરૂર પડશે જ્યાંથી ડેટા આવશે. બસ આગળ વધો અને તે ભરો અને "**Continue** " દબાવો

આગલું છે "**test your trigger** " જેથી ખાતરી કરી શકાય કે તમારી google sheet યોગ્ય રીતે કનેક્ટ થયેલ છે.

જો તમારો ટેસ્ટ સફળ થાય, તો તમને તમારી spreadsheets માંથી કેટલીક કિંમતો દર્શાવતું પરિણામ દેખાવું જોઈએ. આગળ વધવા માટે "**Continue** " ક્લિક કરો.

આગલું પગલું બીજી ક્રિયા સેટ કરવાની છે જે Ultimate Multisite માં Account બનાવશે અથવા નોંધણી કરશે. શોધ ફીલ્ડમાં "**Ultimate Multisite(2.0.2)** " પસંદ કરો


"**Event** " ફીલ્ડ હેઠળ, "**Register an Account in Ultimate Multisite** " પસંદ કરો પછી "**Continue** " બટન ક્લિક કરો.

"**Set up an action** " હેઠળ, તમને ગ્રાહક ડેટા, સદસ્યતાઓ, ઉત્પાદનો વગેરે માટે ઉપલબ્ધ વિવિધ ફીલ્ડ્સ દેખાશે. તમે તમારી google sheet હેઠળની કિંમતોને મેપ કરી શકો છો અને નીચેના સ્ક્રીનશૉટમાં બતાવ્યા મુજબ તેમને યોગ્ય ફીલ્ડમાં સોંપી શકો છો જ્યાં તેઓ ભરાવા જોઈએ.


કિંમતો મેપ કર્યા પછી, તમે ક્રિયા ટેસ્ટ કરી શકો છો.
