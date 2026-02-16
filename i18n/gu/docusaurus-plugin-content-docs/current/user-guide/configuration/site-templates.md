---
title: સાઇટ ટેમ્પલેટ્સ
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# સાઇટ ટેમ્પ્લેટ્સ (v2)

_**નોંધ: આ લેખ Ultimate Multisite version 2.x માટે છે. જો તમે version 1.x વાપરતા હો,**_ **આ લેખ જુઓ** _**.**_

Ultimate Multisite વડે પ્રીમિયમ નેટવર્ક બનાવતી વખતે અમારું લક્ષ્ય છે કે શક્ય એટલી પ્રક્રિયાઓ સ્વચાલિત કરીએ અને સાથે સાથે અમારા ક્લાયન્ટ્સને તેમની વેબસાઇટ્સ બનાવતી વખતે લવચીકતા અને વિવિધ વિકલ્પો આપીએ. આ સંતુલન હાંસલ કરવાનો એક સરળ રસ્તો છે Ultimate Multisite Site Templates ફીચરનો ઉપયોગ કરવો.

## Site Template શું છે?

નામ પ્રમાણે, Site Template એ એક બોઇલરપ્લેટ સાઇટ છે જેનો ઉપયોગ તમારા નેટવર્કમાં નવી સાઇટ્સ બનાવતી વખતે આધાર તરીકે થઈ શકે છે.

એટલે કે તમે એક બેઝ સાઇટ બનાવી શકો છો, જુદા જુદા plugins સક્રિય કરી શકો છો, એક્ટિવ theme સેટ કરી શકો છો, અને તેને તમારી રીતે કસ્ટમાઇઝ કરી શકો છો. પછી, જ્યારે તમારો ગ્રાહક નવું એકાઉન્ટ બનાવે છે, ત્યારે તેને કોઈ અર્થપૂર્ણ કન્ટેન્ટ વિનાની ડિફોલ્ટ WordPress સાઇટ મળવાને બદલે, તેને તમારી બેઝ સાઇટની કોપી મળશે જેમાં બધા કસ્ટમાઇઝેશન્સ અને કન્ટેન્ટ પહેલેથી જ હશે.

આ તો સરસ લાગે છે, પણ હું નવું site template કેવી રીતે બનાવું? આ ખૂબ જ સરળ છે.

## નવું Site Template બનાવવું અને એડિટ કરવું

Site Templates તમારા નેટવર્ક પર સામાન્ય સાઇટ્સ જ છે. નવું template બનાવવા માટે તમે સીધા **Network Admin > Ultimate Multisite > Sites > Add Site** પર જઈ શકો છો.

**![Sites list page પર Add site button](/img/config/site-templates-list.png)**

આનાથી એક modal window ખુલશે જ્યાં **Site title, Site Domain/path,** અને **Site type** પૂછવામાં આવશે. **Site Type** drop-down ફીલ્ડમાં ખાતરી કરો કે તમે **Site Template** પસંદ કરો *.*

_![Site type dropdown સાથે Add site template modal](/img/config/site-templates-list.png)_

ફોર્મના તળિયે તમે **Copy Site** toggle switch જોશો. આનાથી તમે હાલના site template ના આધારે નવું site template બનાવી શકો છો, જે શરૂઆતથી site template બનાવવાને બદલે તમારો સમય બચાવશે.

![Copy site toggle સાથે Add site template modal](/img/config/site-templates-list.png)

### Site Template ના કન્ટેન્ટ કસ્ટમાઇઝ કરવા

તમારું site template કસ્ટમાઇઝ કરવા માટે, સીધા તેના dashboard panel પર જાઓ અને જરૂરી ફેરફારો કરો. તમે નવી posts, pages બનાવી શકો છો, plugins સક્રિય કરી શકો છો અને active theme બદલી શકો છો. તમે Customizer પર જઈને પણ ઘણા બધા customization options બદલી શકો છો.

જ્યારે કોઈ ગ્રાહક એ Site Template ના આધારે નવી સાઇટ બનાવે છે ત્યારે આ બધો ડેટા કોપી થઈ જશે.

### Advanced Options

જો તમને કસ્ટમ કોડિંગનો અનુભવ હોય, તો તમે અમારા Search and Replace API નો ઉપયોગ કરીને નવી સાઇટ બન્યા પછી તેમાં આપમેળે માહિતી રિપ્લેસ કરી શકો છો. આ About page પર કંપનીના નામ બદલવા, Contact page પર contact email બદલવા જેવી બાબતો માટે ઉપયોગી છે.

### Site Templates નો ઉપયોગ કરવો

ઠીક, તો તમે જુદા જુદા designs, themes અને settings સાથે ઘણા Site Templates બનાવ્યા. હવે તેમને તમારા નેટવર્કમાં ઉપયોગી કેવી રીતે બનાવશો?

મૂળભૂત રીતે, હવે તમે બે રીતો વાપરી શકો છો (એક સાથે નહીં):

  * દરેક Plan સાથે એક Site Template જોડવું

**અથવા**

  * તમારા ક્લાયન્ટ્સને sign-up દરમિયાન site templates જાતે પસંદ કરવા દેવા.

#### Mode 1: Site Template Assign કરવું

આ mode માં, તમારા ક્લાયન્ટ્સ એકાઉન્ટ બનાવતી વખતે template પસંદ કરી શકશે નહીં, પરંતુ તમે દરેક Plan માટે કયું template વાપરવું તે નક્કી કરશો.

આ કરવા માટે, **Ultimate Multisite > Products > Edit** પર જાઓ.

![Site template assign કરવા product edit કરો](/img/config/product-site-templates.png)

આનાથી તમે **Edit Product** page પર આવશો. **Product Options** section હેઠળ, **Site template** tab શોધો અને drop-down ફીલ્ડમાંથી **Assign Site Template** option પસંદ કરો. આનાથી ઉપલબ્ધ site templates ની યાદી દેખાશે અને તમે product માટે ફક્ત એક site template પસંદ કરી શકશો.

![Assign site template option સાથે Product site template tab](/img/config/product-site-templates.png)

#### Mode 2: Available Site Template પસંદ કરવા દો

આ mode માં, તમે sign-up પ્રક્રિયા દરમિયાન તમારા ક્લાયન્ટ્સને પસંદગી આપશો. તેઓ product settings હેઠળ તમે નિર્ધારિત કરેલા જુદા જુદા site templates માંથી પસંદ કરી શકશે. પસંદ કરેલા product હેઠળ તેઓ કયા site templates માંથી પસંદ કરી શકે તે મર્યાદિત કરવાનો વિકલ્પ છે. આનાથી તમે દરેક product હેઠળ site templates ના જુદા જુદા સેટ રાખી શકો છો, જે વધુ કિંમતના product માટે જુદા functions અને features highlight કરવા માટે આદર્શ છે.

**Edit Product** page પર, **Product Options** section હેઠળ, **Site template** tab શોધો અને drop-down ફીલ્ડમાંથી **Choose Available Site Template** option પસંદ કરો. આનાથી ઉપલબ્ધ site templates ની યાદી દેખાશે અને તમે કયા site templates ઉપલબ્ધ કરવા તે પસંદ કરી શકશો. આ તેના Behavior પસંદ કરીને કરી શકાય: **Available** જો તમે site template ને યાદીમાં સામેલ કરવા માંગો. _**Not Available**_ જો તમે site template ને option તરીકે ન બતાવવા માંગો. અને **Pre-selected** જો તમે કોઈ એક site template ને default selected રાખવા માંગો.

![Behavior options સાથે available site templates પસંદ કરો](/img/config/product-site-templates.png)

### Default Mode: Checkout form પર Site template selection

જો તમે ઇચ્છો કે રજિસ્ટ્રેશન દરમિયાન તમારા બધા site templates ઉપલબ્ધ હોય, અથવા દરેક product હેઠળ site templates assign કરવાનું અથવા specify કરવાનું વધારાનું કામ ન કરવા માંગતા હો, તો તમે સીધું **Checkout Form** હેઠળ site template selection સેટ કરી શકો છો. આ કરવા માટે, **Ultimate Multisite > Checkout Forms** પર જાઓ. પછી તમે જે form configure કરવા માંગો છો તેની નીચે **Edit** ક્લિક કરો.

![Checkout forms list page](/img/config/checkout-forms-list.png)

આનાથી **Edit Checkout Form** page ખુલશે. **Template Selection** field શોધો અને તેની નીચે **Edit** ક્લિક કરો.

![Template selection field સાથે Checkout form editor](/img/config/checkout-form-editor.png)

એક modal window દેખાશે. **Template Sites** field હેઠળ તમે રજિસ્ટ્રેશન દરમિયાન ઉપલબ્ધ કરવા માંગતા હો તે બધા site templates પસંદ કરી શકો છો. અહીંથી તમે specify કરો તે site templates user ગમે તે product પસંદ કરે તો પણ ઉપલબ્ધ રહેશે.

![Checkout form editor માં Template sites field](/img/config/checkout-form-step.png)

### Site Template Options

Ultimate Multisite settings હેઠળ અન્ય site templates functions ઉપલબ્ધ છે જે તમે ચાલુ કે બંધ કરી શકો છો.

![Ultimate Multisite settings માં Site template options](/img/config/settings-sites.png)

#### Template Switching ને મંજૂરી આપો

આ option ચાલુ કરવાથી તમારા ક્લાયન્ટ્સ એકાઉન્ટ અને સાઇટ બન્યા પછી sign-up પ્રક્રિયા દરમિયાન પસંદ કરેલું template બદલી શકશે. ક્લાયન્ટના દ્રષ્ટિકોણથી આ ઉપયોગી છે કારણ કે જો તેમને પછીથી ખબર પડે કે તેમની મૂળ પસંદગી તેમની ચોક્કસ જરૂરિયાતો માટે શ્રેષ્ઠ નહોતી, તો તેઓ template ફરીથી પસંદ કરી શકે છે.

#### Users ને તેમની Site ને templates તરીકે વાપરવા દો

subsite users એ તેમની પોતાની સાઇટ બનાવવા અને ડિઝાઇન કરવામાં સમય આપ્યો છે, તેથી તેઓ તમારા નેટવર્ક પર બીજી subsite બનાવતી વખતે તેને clone કરીને site templates તરીકે વાપરવા માંગી શકે છે. આ option તેમને તે કરવાની મંજૂરી આપશે.

#### Template Duplication પર Media Copy કરો

આ option ચેક કરવાથી template site પર upload થયેલ media નવી બનેલી site પર copy થશે. આને દરેક plan પર override કરી શકાય છે.

#### **Search Engines ને Site Templates index કરતા અટકાવો**

આ લેખમાં ચર્ચા કર્યા મુજબ Site templates boilerplate છે પણ હજુ પણ તમારા નેટવર્કનો ભાગ છે, એટલે search engines તેને શોધી શકે છે. આ option તમને site templates છુપાવવાની મંજૂરી આપે છે જેથી search engines તેમને index ન કરે.

## Auto search-and-replace સાથે Site Templates pre-populate કરવા

Ultimate Multisite ની સૌથી શક્તિશાળી features માંની એક છે registration form પર arbitrary text, color, અને select fields ઉમેરવાની ક્ષમતા. એકવાર અમે તે ડેટા capture કરી લઈએ, પછી અમે તેનો ઉપયોગ પસંદ કરેલા site template ના અમુક ભાગોમાં content pre-populate કરવા માટે કરી શકીએ. પછી, જ્યારે નવી સાઇટ publish થઈ રહી હોય, ત્યારે Ultimate Multisite placeholders ને registration દરમિયાન દાખલ કરેલી ખરેખરી માહિતીથી replace કરશે.

ઉદાહરણ તરીકે, જો તમે registration દરમિયાન તમારા end-user ની company name મેળવવા અને home page પર company name આપમેળે મૂકવા માંગો છો. તમારા template site ના home page પર તમારે placeholders ઉમેરવા પડશે, નીચેની image માં બતાવ્યા પ્રમાણે (placeholders double curly braces થી ઘેરાયેલા હોવા જોઈએ - {{placeholder_name}}).

![Curly braces માં placeholder text સાથે Homepage](/img/config/site-templates-list.png)

પછી, તમે તે data capture કરવા માટે તમારા checkout form પર matching registration field ઉમેરી શકો છો:

![Matching registration field સાથે Checkout form](/img/config/checkout-form-editor.png)

તમારો customer registration દરમિયાન તે field ભરી શકશે.

![Customer દ્વારા ભરેલું Registration field](/img/config/checkout-form-step.png)

![Registration form નું Preview](/img/config/checkout-form-editor.png)

Ultimate Multisite પછી placeholders ને customer દ્વારા આપેલા data સાથે આપમેળે replace કરશે.

![Site પર customer data સાથે replace થયેલા Placeholders](/img/config/site-templates-list.png)

### "Placeholders થી ભરેલું template" સમસ્યાનો ઉકેલ

આ બધું સરસ છે, પણ આપણે એક ખરાબ સમસ્યામાં ફસાઈ જઈએ છીએ: હવે આપણા site templates - જે આપણા customers જોઈ શકે છે - બધા ખરાબ દેખાતા placeholders થી ભરેલા છે જે ઘણું બધું કહેતા નથી.

આ ઉકેલવા માટે, અમે placeholders માટે fake values સેટ કરવાનો વિકલ્પ આપીએ છીએ, અને અમે તે values નો ઉપયોગ template sites પર તેમના contents ને search and replace કરવા માટે કરીએ છીએ જ્યારે તમારા customers visit કરી રહ્યા હોય.

Template placeholders editor access કરવા માટે **Ultimate Multisite > Settings > Sites** પર જાઓ, અને પછી, sidebar પર, **Edit Placeholders** link ક્લિક કરો.

![Sites settings page હેઠળ Placeholder settings](/img/config/settings-sites.png)

આનાથી તમે placeholders content editor પર આવશો, જ્યાં તમે placeholders અને તેમના respective content ઉમેરી શકો છો.

![Template placeholders content editor](/img/config/settings-sites.png)
