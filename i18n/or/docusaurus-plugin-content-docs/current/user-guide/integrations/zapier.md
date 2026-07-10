---
title: ଜାପିର୍ ଇଣ୍ଟିଗ୍ରେସନ୍
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite ને Zapier સાથે જોડવું {#integrating-ultimate-multisite-with-zapier}

એક લેખમાં, આપણે [Webhooks](webhooks.md) વિશે ચર્ચા કરી હતી અને તે કેવી રીતે થર્ડ પાર્ટી એપ્લિકેશન્સ સાથે જોડાવા માટે ઉપયોગી થઈ શકે છે તેના વિશે વાત કરી હતી.

વેબહુક્સનો ઉપયોગ કરવો થોડો જટિલ છે કારણ કે તેમાં કોડિંગમાં અદ્યતન જ્ઞાનની જરૂર પડે છે અને પેલોડ્સ (payloads) પકડવાની પણ જરૂર પડે છે. **Zapier** નો ઉપયોગ કરવાથી તમે આમાંથી બચો શકો છો.

Zapier પાસે 5000+ એપ્સ સાથે ઇન્ટિગ્રેશન છે જે વિવિધ એપ્લિકેશન્સ વચ્ચે વાતચીત કરવાનું સરળ બનાવે છે.

તમે **Triggers** બનાવી શકો છો જે તમારા નેટવર્ક પરની ઘટનાઓ થાય ત્યારે ચાલુ થશે (દા.ત., એક એકાઉન્ટ બનાવવામાં આવે અને તે `account_create` ઇવેન્ટ ટ્રિગર કરે) અથવા તમારી એપ્લિકેશન પરના **Actions** જનરેટ કરી શકો છો જે બાહ્ય ઘટનાઓ પ્રત્યે પ્રતિક્રિયા આપે છે (દા.ત., તમારા Ultimate Multisite નેટવર્કમાં એક નવો એકાઉન્ટ સભ્યપદ બનાવવો).

આ શક્ય છે કારણ કે **Ultimate Multisite Zapier ના Triggers** અને Actions [REST API](https://developer.ultimatemultisite.com/api/docs/) દ્વારા ચલાવવામાં આવે છે.

## શરૂઆત કેવી રીતે કરવી {#how-to-start}

સૌ પ્રથમ, Zapier એપ લિસ્ટમાં Ultimate Multisite શોધો. વૈકલ્પિક રીતે, તમે [આ લિંક](https://zapier.com/apps/wp-ultimo/integrations) પર ક્લિક કરી શકો છો.

તમારા ડેશબોર્ડ પર જાઓ અને નવા Zap ને સેટ કરવા માટે ડાબી બાજુના સાઇડબારમાં **+** **Create Zap** બટન દબાવો.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

તમને Zap ક્રિએશન પેજ પર રીડાયરેક્ટ કરવામાં આવશે.

સર્ચ બોક્સમાં "wp ultimo" ટાઇપ કરો. **Beta** વર્ઝન વિકલ્પ પસંદ કરવા માટે ક્લિક કરો.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

અમારી એપ પસંદ કર્યા પછી, ઉપલબ્ધ ઇવેન્ટ પસંદ કરો: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

હવે આપણે Zapier ને **તમારા નેટવર્ક** સુધી પહોંચાડવાની જરૂર છે. **Sign in** માં ક્લિક કરવાથી એક નવી વિન્ડો ખુલશે જેમાં **API credentials** ની જરૂર પડશે.

![API credentials ପାଇଁ Zapier sign in prompt](/img/admin/webhooks-list.png)

ଆପଣଙ୍କ ନେଟୱର୍କ ଇନଷ୍ଟ୍ରମେଣ୍ଟ୍ ପ୍ୟାନେଲରେ ଯାଆନ୍ତୁ ଏବଂ **Ultimate Multisite > Settings** > **API & Webhooks** କୁ ବାହାରନ୍ତୁ ଏବଂ API Settings ଅକ୍ଷରକୁ ଦେଖନ୍ତୁ।

ଏହି ସଂଯୋଗ କାର୍ଯ୍ୟ କରିବା ପାଇଁ **Enable API** ବିକଳ୍ପଟି ବାଛନ୍ତୁ, ଯାହା ଆବଶ୍ୟକ।

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

API Key ଏବଂ API Secret ଫିଲ୍ଡଗୁଡ଼ିକରେ **Copy to Clipboard** ଆଇକନ୍ ବ୍ୟବହାର କରି ସେହି ମୂଲ୍ୟଗୁଡ଼ିକୁ integration screen ରେ ପେଷ୍ଟ କରନ୍ତୁ।

URL ଫିଲ୍ଡରେ, ପ୍ରୋଟୋକଲ (HTTP ବା HTTPS) ସହିତ ଆପଣଙ୍କ ନେଟୱର୍କର ପୂର୍ଣ୍ଣ URL ରଖନ୍ତୁ।

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

ଗେରୁଡ଼ିବା ପାଇଁ **Yes, Continue** ବଟନ୍ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ। ଯଦି ସବୁ ଭଲ ହୋଇଯାଏ, ଆପଣଙ୍କ ନୂଆ ସଂଯୁକ୍ତ ଆକାଉଣ୍ଟ ଦେଖିପାରିବେ! ନୂଆ trigger ସୃଷ୍ଟି କରିବା ପାଇଁ **Continue** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

## ଏକ ନୂଆ Trigger କିପରି ସୃଷ୍ଟି କରିବେ {#how-to-create-a-new-trigger}

ଆପଣଙ୍କ ଆକାଉଣ୍ଟ ଯୋଡ଼ିବା ପରେ, ଆପଣ ଆବଶ୍ୟକ ବିଷୟଗୁଡ଼ିକ ଦେଖିପାରିବେ। ଏହି tutorial ପାଇଁ ଆମେ **payment_received** event ကို ବାଛନ୍ତୁ।

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

ଏଭେଣ୍ଟଟି ବାଛပြီး କ୍ଲିକ୍ କରିବା ପରେ, ଏକ **test step** ଦେଖାଯିବ।

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

ଏହି ମୁହୂର୍ତ୍ତରେ, Zapier ଯାଞ୍ଚ କରିବ ଯେ ଆପଣଙ୍କର Zap ତାହାକୁ **ସମ୍ପର୍କିତ event ପାଇଁ ନିର୍ଦ୍ଦିଷ୍ଟ payload** ଠାରୁ ଆଣିପାରିବ କି ନାହିଁ। ଏକ ସମାନ ପ୍ରକାରର ଭବିଷ୍ୟତ eventଗୁଡ଼ିକରେ, ଏହି ସମାନ ଢାଞ୍ଜର ସୂଚନା ପଠାଯିବ।

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

ଆମ 튜ଟୋରିଆଲରେ ଟେଷ୍ଟଟି **ସଫଳତାର ସହ ସମାପ୍ତ ହୋଇଥିଲା** ଏବଂ ପେଲୋଡ୍ ଉଦାହରଣୀ ତଥ୍ୟ ପ୍ରଦାନ କରିଥିଲା। ଏହି ଉଦାହରଣୀ ତଥ୍ୟ ଆମକୁ କାର୍ଯ୍ୟ (actions) ସୃଷ୍ଟି କରିବା ସମୟରେ ମାର୍ଗଦର୍ଶନ କରିବାରେ ଉପଯୋଗୀ ହେବ। ଆପଣଙ୍କର ट्रିଗର ବର୍ତ୍ତମାନ ସୃଷ୍ଟି ହୋଇଛି ଏବଂ ଅନ୍ୟ ଆପ୍ପିକେସନଗୁଡ଼ିକ ସହିତ ଯୋଡିବା ପାଇଁ ପ୍ରସ୍ତୁତ।

## ॲକ୍ସନ୍ (Actions) କିପରି ସୃଷ୍ଟି କରିବା {#how-to-create-actions}

ଆକ୍ସନ୍ଗୁଡ଼ିକ ଆପଣଙ୍କ ନେଟୱାର୍କରେ ନୂଆ ପ୍ରବେଶ ସୃଷ୍ଟି କରିବା ପାଇଁ ଅନ୍ୟ ट्रିଗରରୁ ତଥ୍ୟ ବ୍ୟବହାର କରେ।

**ॲକ୍ସନ୍ ସ୍ଟେପ୍ ସୃଷ୍ଟି କରୁଥିବା** ବିଷୟରେ, ଆପଣ Ultimate Multisite **Beta** ଏବଂ **Create Items on Ultimate Multisite** ଅପ୍ସନଟିକୁ ଚୟନ କରିବେ।

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

ପରବର୍ତ୍ତୀ ସ୍ଟେପରେ, ଆପଣ କିମ୍ବା **How to start** ରେ ଯେମିତି କରିଥିଲେ, ନିଜ ପାଇଁ ଅଥେନ୍ଟିଫିକେସନ (authentication) ସୃଷ୍ଟି କରିବେ, କିମ୍ବା ଏକ ସୃଷ୍ଟି ହୋଇଥିବା ଅଥେନ୍ଟିଫିକେସନକୁ ଚୟନ କରିବେ। ଏହି 튜ଟୋରିଆଲରେ ଆମେ ପୂର୍ବରୁ ସୃଷ୍ଟି କରିଥିବା ସେହି ଅଥେନ୍ଟିଫିକେସନଟିକୁ ବାଛିବା।

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### ॲକ୍ସନ୍ ସେଟଅପ୍ କରିବା {#setting-up-the-action}

ଏହା ହେଉଛି **ॲକ୍ସନ୍ ର ମୁଖ୍ୟ ପଦକ୍ଷେପ** ଏବଂ ଏଠାରେ କିଛି ଜିନିଷ ଟିକେ ଭିନ୍ନ। ଆପଣ ପ୍ରଥମେ ଯାହା ବାଛିବେ, ତାହା ହେଉଛି **Item**। Item ହେଉଛି ଆପଣଙ୍କ ନେଟୱାର୍କର **ତଥ୍ୟ ମଡେଲ୍**, ଯେପରିକି **Customers (ଗ୍ରାହକ), Payments (ଅନୁମୋଦନ), Sites (ସାଇଟ୍), Emails** ଏବଂ ଅନ୍ୟଗୁଡ଼ିକ।

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Item ବାଛିବା ସମୟରେ, ଫର୍ମଟି ଆପଣଙ୍କ ପାଇଁ ଚାହିଦା କରାଯାଇଥିବା ଏବଂ ଅତିରିକ୍ତ (optional) ଫିଲ୍ଡଗୁଡ଼ିକକୁ ଆସିବା ପାଇଁ **ପ୍ରକାରଭାଙ୍ଗିତ ହୋଇଯିବ**।

ଉଦାହରଣ ସ୍ୱରୂପ, Item ଭାବରେ **Customer** ବାଛିଲେ, ଫର୍ମଟି ନେଟୱାର୍କରେ ଏକ ନୂଆ Customer ସୃଷ୍ଟି କରିବା ପାଇଁ ଆବଶ୍ୟକଥିବା ସବୁ ଜିନିଷ ଆସିବ।

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

**required** ଭାବରେ ଚିହ୍ନଟ କରାଯାଇଥିବା ସମସ୍ତ ଫିଲ୍ଡ ପୂରଣ କରି ଏବଂ continue ଉପରେ କ୍ଲିକ୍ କରିବା ପରେ, ଆପଣଙ୍କୁ ପୂର୍ବରୁ ଭରିଥିବା ଫିଲ୍ଡଗୁଡ଼ିକ ଏବଂ ଯେଉଁ ଫିଲ୍ଡଗୁଡ଼ିକ ଭରିନାହାନ୍ତି ସେହି ଫିଲ୍ଡଗୁଡ଼ିକ ଦେଖାଯିବ।

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

ଯେତେବେଳେ ଆପଣଙ୍କର ଟେଷ୍ଟ ସଫଳ ହୋଇပြီး ସମାପ୍ତ ହୋଇଯାଏ, ଆପଣଙ୍କର ॲକ୍ସନ୍ କନଫିଗରେ ରହିଯାଏ। ଏହା ମଧ୍ୟ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଯେ ଆପଣ ନିଜ ନେଟୱାର୍କରେ ଯାଞ୍ଚ କରିବେ ଯେ ଆପଣଙ୍କ ॲକ୍ସନ୍‌ର ଟେଷ୍ଟ ସହିତ ବିଷୟଟି ସୃଷ୍ଟି ହୋଇଛି କି ନାହିଁ।
