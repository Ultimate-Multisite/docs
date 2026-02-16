---
title: Zapier દ્વારા એકાઉન્ટ રજીસ્ટર કરો
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# ઇવેન્ટ: Zapier દ્વારા એકાઉન્ટ રજિસ્ટર કરો

[Ultimate Multisite ને Zapier સાથે જોડવું](zapier.md) લેખમાં, અમે ચર્ચા કરી હતી કે triggers અને events ના આધારે Ultimate Multisite માં વિવિધ ક્રિયાઓ કરવા માટે Zapier નો ઉપયોગ કેવી રીતે કરવો. આ લેખમાં, અમે બતાવીશું કે તમે 3rd party એપ્લિકેશન્સને કેવી રીતે જોડી શકો છો. અમે Google Sheets ને ડેટાના સ્ત્રોત તરીકે વાપરીશું અને એકાઉન્ટ રજિસ્ટર કરવા માટે માહિતી Ultimate Multisite ને મોકલીશું.

સૌ પ્રથમ, તમારે તમારા Google Drive હેઠળ એક **Google Sheet** બનાવવી પડશે. ખાતરી કરો કે તમે દરેક column ને યોગ્ય રીતે define કરો જેથી તમે પછીથી ડેટાને સરળતાથી map કરી શકો.

![ગ્રાહક ડેટા માટેના columns સાથે Google Sheet](/img/admin/webhooks-list.png)Google sheet બનાવ્યા પછી, તમે તમારા Zapier એકાઉન્ટમાં લોગ ઇન કરી શકો છો અને zap બનાવવાનું શરૂ કરી શકો છો.

![Zap બનાવવાનું શરૂ કરવા માટે Zapier dashboard](/img/admin/webhooks-list.png)**"App event"** માટેના search field હેઠળ **"Google Sheets"** પસંદ કરો

![App event તરીકે Google Sheets પસંદ કરવું](/img/admin/webhooks-list.png)

પછી "**Event**" field માટે "**New spreadsheet row**" પસંદ કરો અને "**Continue**" પર ક્લિક કરો

![Zapier માં New spreadsheet row event પસંદ કરવું](/img/admin/webhooks-list.png)આગળના પગલામાં તમને **Google Account** પસંદ કરવાનું કહેવામાં આવશે જ્યાં **Google Sheet** સેવ કરેલ છે. તો ખાતરી કરો કે યોગ્ય google account specified છે.

![Google Sheet માટે Google Account પસંદ કરવું](/img/admin/webhooks-list.png)

**"Set up trigger"** હેઠળ, તમારે google spreadsheet અને worksheet પસંદ કરવી અને specify કરવી પડશે જેનો તમે ઉપયોગ કરશો જ્યાંથી ડેટા આવશે. આગળ વધો અને તે બધું ભરો અને "**Continue**" પર ક્લિક કરો

![Spreadsheet અને worksheet પસંદગી સાથે trigger સેટ અપ કરો](/img/admin/webhooks-list.png)આગળનું પગલું છે "**test your trigger**" એ ખાતરી કરવા માટે કે તમારી google sheet યોગ્ય રીતે જોડાયેલ છે.

![Zapier માં Test your trigger પગલું](/img/admin/webhooks-list.png)જો તમારો test સફળ થાય, તો તમને તમારી spreadsheets માંથી કેટલાક values બતાવતું result દેખાશે. આગળ વધવા માટે "**Continue**" પર ક્લિક કરો.

![Spreadsheet values બતાવતો સફળ trigger test](/img/admin/webhooks-list.png)આગળનું પગલું છે બીજી action સેટ અપ કરવી જે Ultimate Multisite માં એકાઉન્ટ બનાવશે અથવા રજિસ્ટર કરશે. Search field માં "**Ultimate Multisite(2.0.2)**" પસંદ કરો

![Action app તરીકે Ultimate Multisite પસંદ કરવું](/img/admin/webhooks-list.png)

"**Event**" field હેઠળ, "**Register an Account in Ultimate Multisite**" પસંદ કરો અને પછી "**Continue**" button પર ક્લિક કરો.

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)"**Set up an action**" હેઠળ, તમને ગ્રાહક ડેટા, memberships, products, વગેરે માટે વિવિધ fields ઉપલબ્ધ દેખાશે. તમે તમારી google sheet હેઠળના values ને map કરી શકો છો અને નીચેના screenshot માં બતાવ્યા પ્રમાણે તેમને યોગ્ય field માં assign કરી શકો છો જ્યાં તેઓ populate થવા જોઈએ.

![Google Sheet values ને Ultimate Multisite fields સાથે mapping કરવું](/img/admin/webhooks-list.png)

Values map કર્યા પછી, તમે action ને test કરી શકો છો.

![Register account Zapier action ને testing કરવું](/img/admin/webhooks-list.png)
