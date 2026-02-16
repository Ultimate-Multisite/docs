---
title: Zapier એકીકરણ
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite ને Zapier સાથે જોડવું

અમારા એક લેખમાં, અમે [Webhooks](webhooks.md) વિશે ચર્ચા કરી હતી અને તેનો ઉપયોગ 3rd party એપ્લિકેશન્સ સાથે કેવી રીતે કરી શકાય તે જોયું હતું.

Webhooks નો ઉપયોગ થોડો જટિલ છે કારણ કે તેમાં coding અને payloads ને catch કરવાનું advanced જ્ઞાન જરૂરી છે. **Zapier** નો ઉપયોગ કરીને તમે આ મુશ્કેલીને ટાળી શકો છો.

Zapier માં 5000+ થી વધુ apps સાથે integration છે જે વિવિધ applications વચ્ચે communication ને સરળ બનાવે છે.

તમે **Triggers** બનાવી શકો છો જે તમારા network પર events થાય ત્યારે activate થશે (દા.ત. account બને અને account_create event trigger થાય) અથવા external events ના response માં તમારા network પર **Actions** generate કરી શકો છો (દા.ત. તમારા Ultimate Multisite network માં નવું account membership બનાવો).

આ શક્ય છે કારણ કે **Ultimate Multisite Zapier ના triggers** અને actions [REST API](https://developer.ultimatemultisite.com/api/docs/) દ્વારા સંચાલિત છે.

## કેવી રીતે શરૂ કરવું

સૌ પ્રથમ, Zapier app list માં Ultimate Multisite શોધો. વૈકલ્પિક રીતે, તમે [આ link](https://zapier.com/apps/wp-ultimo/integrations) પર click કરી શકો છો.

તમારા dashboard પર જાઓ અને નવો Zap set up કરવા માટે ડાબી sidebar પર **+** **Create Zap** button દબાવો.

![Create Zap button સાથે Zapier dashboard](/img/admin/webhooks-list.png)

તમને Zap creation page પર redirect કરવામાં આવશે.

Search box માં "wp ultimo" ટાઇપ કરો. **Beta** version option પસંદ કરવા click કરો.

![Zapier app list માં WP Ultimo શોધવું](/img/admin/webhooks-list.png)

અમારી app પસંદ કર્યા પછી, ઉપલબ્ધ event પસંદ કરો: **New Ultimate Multisite Event**.

![New Ultimate Multisite Event trigger પસંદ કરવું](/img/admin/webhooks-list.png)

હવે અમારે Zapier ને **તમારા network** ની access આપવાની જરૂર છે. **Sign in** પર click કરવાથી **API credentials** માંગતી નવી window ખૂલશે.

![API credentials માટે Zapier Sign in prompt](/img/admin/webhooks-list.png)

તમારા network admin panel પર જાઓ અને **Ultimate Multisite > Settings** > **API & Webhooks** પર navigate કરો અને API Settings section શોધો.

**Enable API** option પસંદ કરો કારણ કે આ connection કામ કરવા માટે તે જરૂરી છે.

![Ultimate Multisite માં Enable API option સાથે API Settings](/img/admin/webhooks-list.png)

API Key અને API Secret fields પર **Copy to Clipboard** icon નો ઉપયોગ કરો અને તે values ને integration screen પર paste કરો.

URL field માં, protocol (HTTP અથવા HTTPS) સહિત તમારા network નું full URL મૂકો.

![API Key, Secret, અને URL fields સાથે Zapier integration screen](/img/admin/webhooks-list.png)

આગળના step પર જવા માટે **Yes, Continue** button click કરો. જો બધું બરાબર થાય, તો તમને તમારું નવું connected account દેખાશે! નવો trigger બનાવવા માટે **Continue** પર click કરો.

## નવો Trigger કેવી રીતે બનાવવો

હવે જ્યારે તમારું account connected છે, તમે ઉપલબ્ધ events જોઈ શકો છો. આ tutorial માટે **payment_received** event પસંદ કરીએ.

![Zapier trigger માં payment_received event પસંદ કરવું](/img/admin/webhooks-list.png)

Event પસંદ થયા પછી અને તમે **continue** પર click કરો, ત્યારે **test step** દેખાશે.

![Trigger માટે Zapier test step](/img/admin/webhooks-list.png)

આ stage માં, Zapier test કરશે કે તમારો Zap **તે event માટે specific payload fetch** કરી શકે છે કે નહીં. ભવિષ્યમાં સમાન type ના events માં, આ જ structure ની information મોકલવામાં આવશે.

![Payload સાથે Zapier trigger test સફળતાપૂર્વક પૂર્ણ](/img/admin/webhooks-list.png)

અમારા tutorial માં test **સફળતાપૂર્વક પૂર્ણ** થયો અને example payload information return થઈ. આ example information actions બનાવતી વખતે અમને guide કરવામાં ઉપયોગી થશે. તમારો trigger હવે બનાવવામાં આવ્યો છે અને અન્ય applications સાથે connect થવા માટે તૈયાર છે.

## Actions કેવી રીતે બનાવવા

Actions અન્ય triggers ની information નો ઉપયોગ કરીને તમારા network માં નવી entries બનાવે છે.

**Creating an action step** માં તમે Ultimate Multisite **Beta** અને **Create Items on Ultimate Multisite** નો option પસંદ કરશો.

![Create Items on Ultimate Multisite સાથે action બનાવવું](/img/admin/webhooks-list.png)

આગળના step માં તમે કાં તો નવું authentication બનાવશો, જેમ કે અમે **How to start** માં કર્યું હતું, અથવા પહેલેથી બનાવેલું authentication પસંદ કરશો. આ tutorial માં અમે પહેલાં બનાવેલું authentication પસંદ કરીશું.

![Zapier action માટે authentication પસંદ કરવું](/img/admin/webhooks-list.png)

### Action Set Up કરવું

આ **action નું main step** છે અને અહીં વસ્તુઓ થોડી અલગ છે. તમે પહેલી information **Item** પસંદ કરશો. Item તમારા network નું **information model** છે જેમ કે **Customers, Payments, Sites, Emails** અને અન્ય.

![Zapier action માટે Item type પસંદ કરવું](/img/admin/webhooks-list.png)

Item પસંદ કરતી વખતે, form **પસંદ કરેલા item માટે required અને optional fields લાવવા માટે rearrange** થશે.

ઉદાહરણ તરીકે, **Customer** item પસંદ કરતી વખતે, form fields network માં નવો Customer બનાવવા માટે જરૂરી બધું લાવશે.

![Zapier action setup માં Customer item fields](/img/admin/webhooks-list.png)

**required** તરીકે marked બધા fields ભર્યા પછી અને continue પર click કર્યા પછી, છેલ્લી screen તમને ભરેલા fields અને ખાલી છોડેલા fields બતાવશે.

![ભરેલા અને ખાલી fields બતાવતું Zapier action test](/img/admin/webhooks-list.png)

જેવો તમારો test complete થાય અને successful થાય, તમારું action configured છે. તમારા network પર check કરવું પણ મહત્વપૂર્ણ છે કે તમારા action ના test સાથે item બનાવવામાં આવ્યું છે કે નહીં.
