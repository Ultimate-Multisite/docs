---
title: મૂળભૂત ખ્યાલો
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# મૂળભૂત ખ્યાલો

નવા WordPress Multisite વપરાશકર્તા અને Ultimate Multisite નો ઉપયોગ હમણાં જ શરૂ કરનાર વ્યક્તિ માટે, શરૂઆતમાં ઘણા નવા શબ્દો અને phrases સમજવાના હોય છે. આ શીખવું એક મહત્વપૂર્ણ કાર્ય છે કારણ કે તમારે platform અને તે સંપૂર્ણ રીતે કેવી રીતે કામ કરે છે તે સમજવાની જરૂર પડશે.

આ લેખમાં, અમે WordPress ના કેટલાક મુખ્ય ખ્યાલોને વ્યાખ્યાયિત અને સમજાવવાનો પ્રયાસ કરીશું. આમાંના કેટલાક વપરાશકર્તાઓ માટે વધુ સંબંધિત છે, કેટલાક developers માટે, અને કેટલાક બંને માટે.

## WordPress Multisite

WordPress **Multisite** એ WordPress installation નો એક પ્રકાર છે જે તમને એક જ WordPress dashboard માંથી બહુવિધ websites નું network બનાવવા અને manage કરવાની મંજૂરી આપે છે. તમે sites ની સંખ્યા, features, themes અને user roles સહિત બધું manage કરી શકો છો. સેંકડો અને હજારો sites manage કરવું શક્ય છે.

## Network

WordPress ના સંદર્ભમાં, multisite network એ છે જ્યાં એક જ dashboard માંથી ઘણી **subsites** manage કરી શકાય છે. જોકે multisite network બનાવવું hosting providers વચ્ચે અલગ અલગ હોય છે, અંતિમ પરિણામ સામાન્ય રીતે **wp-config.php** file માં થોડા વધારાના directives હોય છે જે WordPress ને જણાવે છે કે તે આ ચોક્કસ mode માં કામ કરી રહ્યું છે.

multisite network અને stand-alone WordPress installation વચ્ચે ઘણા અલગ તફાવતો છે જેની અમે ટૂંકમાં ચર્ચા કરીશું.

## Database

Database એ data નો structured, organized set છે. computing terminology માં, database એ data store અને organize કરવા માટે વપરાતા software ને refer કરે છે. તેને file cabinet તરીકે વિચારો જ્યાં તમે tables નામના વિવિધ વિભાગોમાં data store કરો છો.

WordPress Multisite એક database નો ઉપયોગ કરે છે અને દરેક subsite ને prefix માં blog id સાથે પોતાના tables મળે છે, તેથી એકવાર તમે network installation install કરો અને subsite બનાવો, તમારી પાસે આ tables હોવી જોઈએ:

_wp_1_options_ \- પ્રથમ subsite માટે options table

_wp_2_options_ \- બીજી subsite માટે options table

## Hosting provider

Hosting provider એ એક company છે જે businesses અને વ્યક્તિઓને World Wide Web દ્વારા તેમની websites ઉપલબ્ધ કરાવવામાં સક્ષમ બનાવે છે. web hosting providers જે services આપે છે તે અલગ અલગ હશે પરંતુ સામાન્ય રીતે website design, host પર storage space, અને Internet સાથે connectivity સામેલ હોય છે.

## Domain

Domain name એ એક address છે જેનો ઉપયોગ લોકો તમારી site ની મુલાકાત લેવા માટે કરે છે. તે web browser ને જણાવે છે કે તમારી site ક્યાં શોધવી. જેમ street address હોય છે, તેમ domain એ છે કે લોકો online તમારી website ની મુલાકાત કેવી રીતે લે છે. અને, તમારી દુકાન સામે sign હોવા જેવું. જો તમે અમારી website ની મુલાકાત લેવા માંગો છો, તો તમારે તમારા browser ના address bar માં અમારું web address type કરવું પડશે જે છે [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ જ્યાં [**ultimatemultisite.com**](http://ultimatemultisite.com) એ domain name છે.

## Subdomain

Subdomain એ main domain હેઠળ website hierarchy નો એક પ્રકાર છે, પરંતુ website પર content organize કરવા માટે folders નો ઉપયોગ કરવાને બદલે, તેને પોતાની website મળે છે. તે [**https://site1.domain.com/**](https://site1.domain.com/) તરીકે રજૂ થાય છે જ્યાં _site1_ subdomain name છે અને [_domain.com_](http://domain.com) main domain છે.

## Subdirectory

Subdirectory એ root domain હેઠળ website hierarchy નો એક પ્રકાર છે જે website પર content organize કરવા માટે folders નો ઉપયોગ કરે છે. Subdirectory એ subfolder જેવું જ છે અને આ નામો એકબીજાના બદલે વાપરી શકાય છે. તે [**https://domain.com/site1**](https://domain.com/site1) તરીકે રજૂ થાય છે જ્યાં _site1_ subdirectory name છે અને [_domain.com_](http://domain.com) main domain છે.

## Subsite

Subsite એ child site છે જે તમે Multisite network પર બનાવો છો. તમારું WordPress Multisite installation કેવી રીતે configure થયેલું છે તેના આધારે તે **subdomain** અથવા **subdirectory** હોઈ શકે છે.

## Super Admin

WordPress Super Admin એ user role છે જેની પાસે Multisite network પર તમામ subsites manage કરવાની સંપૂર્ણ ક્ષમતાઓ છે. Multisite users માટે, આ **સૌથી ઉચ્ચ સ્તરની access** છે જે તમે તમારા WordPress installation ને આપી શકો છો.

## Plugin

સામાન્ય રીતે, plugin એ code નો set છે જે તમારી WordPress site માં વધારાની functionality ઉમેરે છે. આ login logo બદલવા જેટલું સરળ અથવા e-commerce functionality ઉમેરવા જેટલું complex હોઈ શકે છે. _Woocommerce અને Contact Form_ plugin ના ઉદાહરણો છે.

WordPress Multisite પર, plugins ફક્ત Super Admin દ્વારા network admin dashboard માંથી install કરી શકાય છે. Subsite Admins ફક્ત તેમની subsite માં plugins activate અને deactivate કરી શકે છે.

## Themes

WordPress theme એ files નો group છે (_graphics, style sheets, અને code_) જે site ના overall દેખાવને નિર્ધારિત કરે છે. તે font styling, page layout, colors, વગેરે જેવા તમામ front-end stylings પ્રદાન કરે છે.

plugins ની જેમ, WordPress Multisite માં themes ફક્ત Super Admin દ્વારા install કરી શકાય છે અને subsite admins દ્વારા subsite level પર activate કરી શકાય છે.

## Site Template

**Site Template** એ boilerplate site છે જેનો ઉપયોગ તમારા network માં નવી sites બનાવતી વખતે base તરીકે કરી શકાય છે.

આનો અર્થ છે કે તમે base site બનાવી શકો છો, વિવિધ plugins activate કરી શકો છો, active theme set કરી શકો છો, અને તેને તમને ગમે તે રીતે customize કરી શકો છો. પછી, જ્યારે તમારો customer નવું account બનાવે છે, ત્યારે અંદર કોઈ meaningful content વિનાની default WordPress site મળવાને બદલે, તેમને તમારી base site ની copy મળશે જેમાં બધા customizations અને contents પહેલેથી જ સ્થાને હશે.

## Domain Mapping

WordPress સાથે **Domain mapping** એ website ના address દ્વારા users ને યોગ્ય host પર redirect કરવાની રીત છે. WordPress Multisite માં, subsites subdirectory અથવા subdomain નો ઉપયોગ કરીને બનાવવામાં આવે છે. Domain mapping શું કરે છે તે એ છે કે તે subsite users ને [**joesbikeshop.com**](http://joesbikeshop.com) જેવા top-level domain નો ઉપયોગ કરવાની મંજૂરી આપે છે જેથી તેમનું site address વધુ professional દેખાય.

## SSL

SSL એટલે **Secure Sockets Layer**. તે digital certificate છે જે web site ની identity authenticate કરે છે અને encrypted connection સક્ષમ કરે છે. આજકાલ તેનો ઉપયોગ internet connection સુરક્ષિત રાખવા અને બે systems વચ્ચે મોકલવામાં આવતા કોઈપણ sensitive data ની સુરક્ષા માટે standard technology તરીકે થાય છે, criminals ને transfer થતી કોઈપણ માહિતી, સંભવિત personal details સહિત, વાંચવા અને modify કરવાથી અટકાવે છે. Modern browsers SSL ની જરૂર પડે છે જે website બનાવતી અને ચલાવતી વખતે તેને આવશ્યક બનાવે છે.

## Media

Media એ images, audio, video, અને અન્ય files છે જે website બનાવે છે.

WordPress Multisite માં Network sites એક database share કરે છે, તેઓ media files માટે filesystem પર અલગ paths જાળવે છે.

Standard WordPress location (wp-content/uploads) રહે છે; જો કે, તેનો path network site ના unique ID ને reflect કરવા માટે બદલાય છે. પરિણામે network site માટે media files wp-contents/uploads/site/[id] તરીકે દેખાય છે.

## Permalinks

Permalinks એ તમારી site માંના individual blog post અથવા page ના permanent URLs છે. Permalinks ને **pretty links** તરીકે પણ ઓળખવામાં આવે છે. Default રીતે, WordPress URLs query string format નો ઉપયોગ કરે છે જે કંઈક આના જેવું દેખાય છે:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite એ WordPress plugin છે, WordPress Multisite installs માટે બનાવેલ, જે તમારા WordPress install ને sites ના premium network માં રૂપાંતરિત કરે છે – [WordPress.com](https://WordPress.com) જેવું – clients ને monthly, quarterly, અથવા yearly fees દ્વારા sites બનાવવાની મંજૂરી આપે છે (તમે Free plans પણ બનાવી શકો છો).

## Checkout Form

Checkout Form એ single અથવા multi-step order form છે જેમાં Ultimate Multisite registration દ્વારા subsite, membership, અને user accounts ની રચનાનો સમાવેશ થાય છે. તેમાં વિવિધ fields અને payment forms હોય છે જે user ને sign-up process દરમિયાન submit કરવા પડે છે.

## Webhook

Webhook (જેને web callback અથવા HTTP push API પણ કહેવાય છે) એ app માટે અન્ય applications ને real-time information પ્રદાન કરવાની રીત છે. Webhook જ્યારે data થાય ત્યારે અન્ય applications ને deliver કરે છે, એટલે કે તમને data તરત જ મળે છે.

**Ultimate Multisite webhooks** અનંત શક્યતાઓ ખોલે છે, network admins ને તમામ પ્રકારના crazy-but-useful integrations કરવાની મંજૂરી આપે છે, ખાસ કરીને જો _Zapier અને IFTTT_ જેવી services સાથે conjunction માં ઉપયોગ કરવામાં આવે.

## Events

Event એ action છે જે user અથવા અન્ય source action ના પરિણામે થાય છે, જેમ કે mouse click. Ultimate Multisite તમારા સમગ્ર network માં થતા તમામ events અને logs નો record રાખે છે. તે તમારી multisite માં થતી વિવિધ activities track કરે છે, જેમ કે plan changes.
