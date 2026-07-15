---
title: Zapier એકીકરણ
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite ને Zapier સાથે સંકલિત કરવું

એક લેખમાં, અમે [Webhooks](webhooks.md) અને 3rd party applications સાથે સંકલન કરવા માટે તેનો કેવી રીતે ઉપયોગ કરી શકાય તેની ચર્ચા કરી હતી.

webhooks નો ઉપયોગ થોડો જટિલ છે કારણ કે તેના માટે coding અને payloads પકડવામાં અદ્યતન જ્ઞાન જરૂરી છે. **Zapier** નો ઉપયોગ કરવો એ તમારા માટે આમાંથી બહાર નીકળવાનો એક માર્ગ છે.

Zapier પાસે 5000+ થી વધુ apps સાથે સંકલન છે, જે અલગ-અલગ applications વચ્ચે સંચારને વધુ સરળ બનાવે છે.

તમે એવા **Triggers** બનાવી શકો છો જે તમારા network પર events થાય ત્યારે શરૂ થશે (દા.ત. Account બનાવાય છે અને account_create event ને trigger કરે છે) અથવા બાહ્ય events ને પ્રતિસાદ આપીને તમારા network પર **Actions** બનાવી શકો છો (દા.ત. તમારા Ultimate Multisite network માં નવું Account membership બનાવો).

આ શક્ય છે કારણ કે **Ultimate Multisite Zapier's triggers** અને actions [REST API](https://developer.ultimatemultisite.com/api/docs/) દ્વારા સંચાલિત છે.

## કેવી રીતે શરૂ કરવું {#how-to-start}

પ્રથમ, Zapier app list માં Ultimate Multisite માટે શોધો. વિકલ્પ તરીકે, તમે [આ લિંક](https://zapier.com/apps/wp-ultimo/integrations) પર ક્લિક કરી શકો છો.

તમારા dashboard પર જાઓ અને નવો Zap સેટ કરવા માટે ડાબી sidebar પર **+** **Create Zap** button દબાવો.

![Create Zap button સાથે Zapier dashboard](/img/admin/webhooks-list.png)

તમને Zap બનાવવાની page પર રીડાયરેક્ટ કરવામાં આવશે.

search box માં "wp ultimo" લખો. **Beta** version option પસંદ કરવા માટે ક્લિક કરો.

![Zapier app list માં WP Ultimo માટે શોધવું](/img/admin/webhooks-list.png)

અમારી app પસંદ કર્યા પછી, ઉપલબ્ધ event પસંદ કરો: **New Ultimate Multisite Event**.

![New Ultimate Multisite Event trigger પસંદ કરવું](/img/admin/webhooks-list.png)

હવે અમારે Zapier ને **તમારા network** ની access આપવી પડશે. **Sign in** પર ક્લિક કરવાથી **API credentials** જરૂરી હોય તેવી નવી window ખુલશે.

![API credentials માટે Zapier Sign in prompt](/img/admin/webhooks-list.png)

તમારા network admin panel પર જાઓ અને **Ultimate Multisite > Settings** > **API & Webhooks** પર navigate કરો અને API Settings section શોધો.

આ connection કામ કરે તે માટે જરૂરી હોવાથી **Enable API** option પસંદ કરો.

![API Settings અને Enable API options સાથે API અને Webhooks settings](/img/admin/settings-api-webhooks.png)

API Key અને API Secret fields પર **Copy to Clipboard** icon નો ઉપયોગ કરો અને integration screen પર તે values paste કરો.

URL field માં, protocol (HTTP અથવા HTTPS) સહિત તમારા network નો full URL મૂકો.

![API Key, Secret, અને URL fields સાથે Zapier integration screen](/img/admin/webhooks-list.png)

આગલા step પર જવા માટે **Yes, Continue** button પર ક્લિક કરો. જો બધું સારું ચાલે, તો તમને તમારું નવું connected Account દેખાશે! નવો trigger બનાવવા માટે **Continue** પર ક્લિક કરો.

## નવો Trigger કેવી રીતે બનાવવો {#how-to-create-a-new-trigger}

હવે તમારું Account connected છે તેથી તમે ઉપલબ્ધ events જોઈ શકો છો. આ tutorial માટે ચાલો **payment_received** event પસંદ કરીએ.

![Zapier trigger માં payment_received event પસંદ કરવું](/img/admin/webhooks-list.png)

event પસંદ થઈ જાય અને તમે **continue** પર ક્લિક કરો પછી, એક **test step** દેખાશે.

![trigger માટે Zapier test step](/img/admin/webhooks-list.png)

આ stage માં, Zapier test કરશે કે તમારો Zap **તે event માટે ચોક્કસ payload fetch કરી શકે છે કે નહીં**. એ જ type ના future events માં, આ જ structure સાથેની information મોકલવામાં આવશે.

![payload સાથે Zapier trigger test સફળતાપૂર્વક પૂર્ણ](/img/admin/webhooks-list.png)

અમારા tutorial માં test **સફળતાપૂર્વક પૂર્ણ** થયો અને payload example information પરત કરી. actions બનાવતી વખતે અમને માર્ગદર્શન આપવા માટે આ example information ઉપયોગી રહેશે. તમારો trigger હવે બનાવાઈ ગયો છે અને અન્ય applications સાથે connect થવા માટે તૈયાર છે.

## Actions કેવી રીતે બનાવવી {#how-to-create-actions}

Actions તમારા network માં નવી entries બનાવવા માટે અન્ય triggers માંથી information નો ઉપયોગ કરે છે.

**action step બનાવતી વખતે** તમે Ultimate Multisite **Beta** અને **Create Items on Ultimate Multisite** option પસંદ કરશો.

![Create Items on Ultimate Multisite સાથે action બનાવવું](/img/admin/webhooks-list.png)

આગલા step માં તમે **How to start** માં જેમ કર્યું તેમ તમારું authentication બનાવશો, અથવા બનાવેલ authentication પસંદ કરશો. આ tutorial માં અમે અગાઉ બનાવેલ એ જ authentication પસંદ કરીશું.

![Zapier action માટે authentication પસંદ કરવું](/img/admin/webhooks-list.png)

### Action સેટ અપ કરવી {#setting-up-the-action}

આ **action નો મુખ્ય step** છે અને અહીં વસ્તુઓ થોડી અલગ છે. તમે પસંદ કરશો તે પ્રથમ information **Item** છે. Item એ તમારા network નું **information model** છે જેમ કે **Customers, Payments, Sites, Emails** અને અન્ય.

![Zapier action માટે Item type પસંદ કરવું](/img/admin/webhooks-list.png)

item પસંદ કરતી વખતે, form પસંદ કરેલ item માટે **જરૂરી અને વૈકલ્પિક fields લાવવા માટે ફરી ગોઠવાશે**.

ઉદાહરણ તરીકે, item **Customer** પસંદ કરતી વખતે, form fields network માં નવો Customer બનાવવા માટે જરૂરી બધું લાવશે.

![Zapier action setup માં Customer item fields](/img/admin/webhooks-list.png)

**required** તરીકે ચિહ્નિત કરેલા બધા fields ભર્યા પછી અને continue પર ક્લિક કર્યા પછી, છેલ્લી screen તમને ભરેલા fields અને ખાલી છોડી દેવાયેલા fields બતાવશે.

![ભરેલા અને ખાલી fields બતાવતો Zapier action test](/img/admin/webhooks-list.png)

તમારો test પૂર્ણ થઈ જાય અને સફળ થાય તે જ સમયે તમારી action configured થઈ જાય છે. તમારી action ના test સાથે item બનાવાયો હતો કે નહીં તે તમારા network પર તપાસવું પણ મહત્વપૂર્ણ છે.
