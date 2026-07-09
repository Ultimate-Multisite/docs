---
title: ડોમેન મેપિંગ કેવી રીતે કન્ફિગર કરવું
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# ડોમેન મેપિંગ કેવી રીતે કૉન્ફિગર કરવું (v2)

_**મહત્વપૂર્ણ નોંધ: આ લેખ Ultimate Multisite સંસ્કરણ 2.x માટે છે.**_

પ્રીમિયમ નેટવર્કની સૌથી શક્તિશાળી સુવિધાઓમાંથી એક એ છે કે અમારા ક્લાયન્ટ્સને તેમની સાઇટ્સ સાથે ટોપ-લેવલ ડોમેન જોડવાની તક આપવી. અંતે, વધુ વ્યાવસાયિક શું લાગે છે: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) કે [_**joesbikeshop.com**_](http://joesbikeshop.com)? આ કારણે Ultimate Multisite તૃતીય-પક્ષ plugins વાપરવાની જરૂરિયાત વિના, આ સુવિધા બિલ્ટ-ઇન આપે છે.

## ડોમેન મેપિંગ શું છે?

નામ સૂચવે છે તેમ, ડોમેન મેપિંગ એ Ultimate Multisite દ્વારા આપવામાં આવતી ક્ષમતા છે, જેમાં કસ્ટમ ડોમેન માટેની વિનંતી સ્વીકારીને તે વિનંતીને નેટવર્કમાં તે ચોક્કસ ડોમેન જોડાયેલી સંબંધિત સાઇટ સાથે મેપ કરવામાં આવે છે.

### તમારા Ultimate Multisite નેટવર્ક પર ડોમેન મેપિંગ કેવી રીતે સેટઅપ કરવું

ડોમેન મેપિંગ કામ કરે તે માટે તમારી તરફથી થોડું સેટિંગ કરવું જરૂરી છે. સદભાગ્યે, Ultimate Multisite તમારા માટે મુશ્કેલ કામ આપમેળે કરે છે જેથી તમે જરૂરિયાતોને સરળતાથી પૂરી કરી શકો.

Ultimate Multisite ઇન્સ્ટોલેશન દરમિયાન, વિઝાર્ડ આપમેળે **sunrise.php** ને નિર્ધારિત ફોલ્ડરમાં કૉપી અને ઇન્સ્ટોલ કરશે. **આ પગલું પૂર્ણ ન થાય ત્યાં સુધી વિઝાર્ડ તમને આગળ વધવા દેશે નહીં**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

આનો અર્થ એ છે કે Ultimate Multisite ઇન્સ્ટોલેશન વિઝાર્ડ તમારા નેટવર્કનું સેટઅપ પૂર્ણ કર્યા પછી, તમે તરત જ કસ્ટમ ડોમેન મેપ કરવાનું શરૂ કરી શકો છો.

નોંધ લો કે Ultimate Multisite માં ડોમેન મેપિંગ ફરજિયાત નથી. તમારી પાસે WordPress Multisite ની મૂળ ડોમેન મેપિંગ સુવિધા અથવા અન્ય કોઈપણ ડોમેન મેપિંગ સોલ્યુશન વાપરવાનો વિકલ્પ છે.

જો તમને અન્ય ડોમેન મેપિંગ સોલ્યુશન્સ માટે જગ્યા આપવા Ultimate Multisite ડોમેન મેપિંગ અક્ષમ કરવાની જરૂર હોય, તો તમે આ સુવિધાને **Ultimate Multisite > સેટિંગ્સ > ડોમેન મેપિંગ** હેઠળ અક્ષમ કરી શકો છો.

![એડમિન રીડાયરેક્ટ, મેપિંગ સંદેશ અને DNS વિકલ્પો બતાવતું ડોમેન મેપિંગ સેટિંગ્સ પેજ](/img/config/domain-mapping-settings.png)

આ વિકલ્પની બરાબર નીચે, તમે **ફોર્સ એડમિન રીડાયરેક્ટ** વિકલ્પ પણ જોઈ શકો છો. આ વિકલ્પ તમને નિયંત્રિત કરવાની મંજૂરી આપે છે કે તમારા ગ્રાહકો તેમના custom domain અને subdomain બંને પર તેમના એડમિન Dashboard ઍક્સેસ કરી શકશે કે માત્ર તેમાંથી એક પર.

જો તમે **મેપ કરેલા ડોમેન પર ફરજિયાત રીડાયરેક્ટ કરો** પસંદ કરો, તો તમારા ગ્રાહકો તેમના કસ્ટમ ડોમેન્સ પર જ તેમના એડમિન Dashboard ઍક્સેસ કરી શકશે.

**નેટવર્ક ડોમેન પર ફરજિયાત રીડાયરેક્ટ કરો** વિકલ્પ બિલકુલ વિપરીત કરશે - તમારા ગ્રાહકો તેમના કસ્ટમ ડોમેન્સ પર સાઇન ઇન કરવાનો પ્રયાસ કરે તો પણ, તેમને માત્ર તેમના subdomain પર જ તેમના Dashboards ઍક્સેસ કરવાની મંજૂરી મળશે.

અને **મેપ કરેલા ડોમેન અને નેટવર્ક ડોમેન બંને દ્વારા એડમિન ઍક્સેસ કરવાની મંજૂરી આપો** વિકલ્પ તેમને subdomain અને custom domain બંને પર તેમના એડમિન Dashboards ઍક્સેસ કરવાની મંજૂરી આપે છે.

![ત્રણ રીડાયરેક્ટ વિકલ્પો બતાવતું વિસ્તૃત એડમિન રીડાયરેક્ટ ડ્રોપડાઉન](/img/config/domain-mapping-redirect-options.png)

કસ્ટમ ડોમેન મેપ કરવાની બે રીતો છે. પ્રથમ રીત super admin તરીકે તમારા નેટવર્ક એડમિન Dashboard માંથી ડોમેન નામ મેપ કરવાની છે અને બીજી રીત Account પેજ હેઠળ subsite એડમિન Dashboard દ્વારા છે.

પરંતુ તમે તમારા નેટવર્કની કોઈ એક subsites સાથે કસ્ટમ ડોમેન મેપ કરવાનું શરૂ કરો તે પહેલાં, તમારે ખાતરી કરવાની રહેશે કે ડોમેન નામની **DNS settings** યોગ્ય રીતે કૉન્ફિગર થયેલી છે.

###

### ડોમેન DNS settings યોગ્ય રીતે કૉન્ફિગર થયેલી છે તેની ખાતરી કરવી

મેપિંગ કામ કરે તે માટે, તમારે ખાતરી કરવાની જરૂર છે કે તમે જે ડોમેન મેપ કરવાની યોજના બનાવી રહ્યા છો તે તમારા નેટવર્કના IP address તરફ નિર્દેશ કરે છે. નોંધ લો કે તમને નેટવર્ક IP address જોઈએ છે - એટલે કે જ્યાં Ultimate Multisite ઇન્સ્ટોલ છે તે ડોમેનનો IP address - તમે જે કસ્ટમ ડોમેન મેપ કરવા માંગો છો તેનો IP address નહીં. ઉદાહરણ તરીકે, કોઈ ચોક્કસ ડોમેનનો IP address શોધવા માટે, અમે [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) પર જવાનું સૂચવીએ છીએ.

ડોમેનને યોગ્ય રીતે મેપ કરવા માટે, તમારે તમારી **DNS** કૉન્ફિગરેશનમાં તે **IP address** તરફ નિર્દેશ કરતો **A RECORD** ઉમેરવાની જરૂર છે. DNS મેનેજમેન્ટ અલગ-અલગ ડોમેન રજિસ્ટ્રાર્સ વચ્ચે ઘણું બદલાય છે, પરંતુ જો તમે " _XXXX પર A Record બનાવવું_ " માટે શોધો, જ્યાં XXXX તમારો ડોમેન રજિસ્ટ્રાર છે (દા.ત.: " _GoDaddy પર_ _A Record બનાવવું_ "), તો આ વિષય પર ઑનલાઇન ઘણી ટ્યુટોરિયલ્સ ઉપલબ્ધ છે.

જો તમને આ કામ કરાવવામાં મુશ્કેલી આવે, તો **તમારા ડોમેન રજિસ્ટ્રાર સપોર્ટનો સંપર્ક કરો** અને તેઓ આ ભાગમાં તમારી મદદ કરી શકશે.

જો તમે તમારા ક્લાયન્ટ્સને તેમના પોતાના ડોમેન્સ મેપ કરવાની મંજૂરી આપવાની યોજના બનાવો છો, તો તેમને આ ભાગનું કામ પોતે કરવું પડશે. જો તેઓ A Record બનાવી શકતા ન હોય, તો તેમને તેમના રજિસ્ટ્રાર સપોર્ટ સિસ્ટમ તરફ દોરો.

### Super Admin તરીકે કસ્ટમ ડોમેન નામ મેપ કરવું

જ્યારે તમે તમારા નેટવર્ક પર super admin તરીકે લૉગ ઇન હો, ત્યારે તમે **Ultimate Multisite > ડોમેન્સ** હેઠળ જઈને કસ્ટમ ડોમેન નામો સરળતાથી ઉમેરી અને સંચાલિત કરી શકો છો.

![Ultimate Multisite માં ડોમેન્સ સૂચિ પેજ](/img/admin/domains-list.png)

આ પેજ હેઠળ, તમે ઉપરના **ડોમેન ઉમેરો** બટન પર ક્લિક કરી શકો છો અને તે એક મોડલ વિન્ડો ખોલશે, જ્યાં તમે **કસ્ટમ ડોમેન નામ** , **તે subsite** જેને તમે કસ્ટમ ડોમેન નામ લાગુ કરવા માંગો છો, તે સેટ અને ભરી શકો છો, અને તમે તેને **મુખ્ય ડોમેન** નામ તરીકે સેટ કરવા માંગો છો કે નહીં તે નક્કી કરી શકો છો (નોંધ લો કે તમે **એક subsite માટે અનેક ડોમેન નામો મેપ** કરી શકો છો).

![ડોમેન નામ, સાઇટ પસંદગીકાર અને મુખ્ય ડોમેન ટૉગલ સાથે ડોમેન ઉમેરો મોડલ](/img/admin/domain-add-modal.png)

બધી માહિતી નાખ્યા પછી, તમે નીચેના **હાલનું ડોમેન ઉમેરો** બટન પર ક્લિક કરી શકો છો.

આ કસ્ટમ ડોમેનની DNS માહિતી ચકાસવાની અને મેળવવાની પ્રક્રિયા શરૂ કરશે. તમે પ્રક્રિયા કયા તબક્કામાંથી પસાર થઈ રહી છે તે અનુસરવા માટે પેજના તળિયે લૉગ પણ જોશો. આ પ્રક્રિયા પૂર્ણ થવામાં થોડા મિનિટ લાગી શકે છે.

Ultimate Multisite v2.13.0 પણ નવા site ને એવા host પર બનાવવામાં આવે ત્યારે આંતરિક domain રેકોર્ડ આપમેળે બનાવે છે જેને પ્રતિ-site domain તરીકે ગણવો જોઈએ. જો host network નો primary domain હોય, અથવા **Site URL** field પર રૂપરેખાંકિત shared checkout-form base domains માંથી એક હોય, તો automatic mapped-domain record છોડવામાં આવે છે જેથી shared base domain તેનો ઉપયોગ કરતી દરેક site માટે ઉપલબ્ધ રહે.

જ્યારે customer Domain Seller v1.3.0 અથવા તેનાથી નવીન દ્વારા નવો domain નોંધાવે છે, ત્યારે Ultimate Multisite મૂળભૂત રીતે નોંધાયેલ domain ને customer ની network site સાથે આપમેળે map કરે છે. સફળ નોંધણી પછી administrators ને હવે અલગ mapped-domain record ઉમેરવાની જરૂર નથી, જો સુધી તેઓ primary-domain flag, activation state, અથવા SSL handling જેવા options સમાયોજિત કરવા માંગતા ન હોય.

જો બધું યોગ્ય રીતે set up થયેલું હોય, તો **Stage** અથવા status **Checking DNS** થી **Ready** માં બદલાવું જોઈએ.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

જો તમે domain name પર click કરો, તો તમે તેની અંદર કેટલાક options જોઈ શકશો. ચાલો તેમનું ઝડપી અવલોકન કરીએ:

![stage, site, active, primary અને SSL toggles સાથેનું Domain detail page](/img/admin/domain-edit.png)

**Stage:** આ domain જે stage પર છે તે છે. જ્યારે તમે પ્રથમ વખત domain ઉમેરશો, ત્યારે તે કદાચ **Checking DNS** stage પર હશે. પ્રક્રિયા DNS entries તપાસશે અને તે યોગ્ય છે તેની પુષ્ટિ કરશે. ત્યારબાદ, domain ને **Checking SSL** stage પર મૂકવામાં આવશે. Ultimate Multisite તપાસશે કે domain પાસે SSL છે કે નહીં અને તમારા domain ને **Ready** અથવા **Ready (without SSL)** તરીકે વર્ગીકૃત કરશે.

**Site:** આ domain સાથે સંકળાયેલ subdomain. mapped domain આ ચોક્કસ site ની content બતાવશે.

**Active:** domain ને activate અથવા deactivate કરવા માટે તમે આ option ને on અથવા off કરી શકો છો.

**Is Primary Domain?:** તમારા customers પાસે દરેક site માટે એક કરતાં વધુ mapped domain હોઈ શકે છે. આ ચોક્કસ site માટે આ primary domain છે કે નહીં તે પસંદ કરવા માટે આ option નો ઉપયોગ કરો.

**Is Secure?:** Ultimate Multisite domain ને enable કરતા પહેલાં તેની પાસે SSL certificate છે કે નહીં તે તપાસે છે છતાં, તમે domain ને SSL certificate સાથે અથવા વગર load કરવા માટે હાથેથી પસંદ કરી શકો છો. નોંધો કે જો website પાસે SSL certificate ન હોય અને તમે તેને SSL સાથે force load કરવાનો પ્રયાસ કરો, તો તે તમને errors આપી શકે છે.

### Subsite user તરીકે custom domain name mapping કરવું

Subsite administrators તેમના subsite admin dashboard માંથી પણ custom domain names map કરી શકે છે.

સૌપ્રથમ, તમારે ખાતરી કરવી પડશે કે તમે **Domain mapping** settings હેઠળ આ option enable કર્યું છે. નીચેનો screenshot જુઓ.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

તમે આ option ને **Plan** level હેઠળ અથવા **Ultimate Multisite > Products** પર product options માં પણ set અથવા configure કરી શકો છો.

![product edit page પર Custom Domains section](/img/config/product-custom-domains.png)

જ્યારે તેમાંથી કોઈપણ options enable હોય અને subsite user ને custom domain names map કરવાની મંજૂરી હોય, ત્યારે subsite user ને **Account** page હેઠળ **Domains** કહેવાતું metabox દેખાવું જોઈએ.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

user **Add Domain** button પર click કરી શકે છે અને તે કેટલીક instructions સાથે modal window લાવશે.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

user પછી **Next Step** પર click કરી custom domain name ઉમેરવા આગળ વધી શકે છે. તેઓ આ primary domain હશે કે નહીં તે પણ પસંદ કરી શકે છે.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** પર click કરવાથી custom domain ની DNS information ચકાસવાની અને મેળવવાની પ્રક્રિયા શરૂ થશે.

### Domain Syncing વિશે

Domain Syncing એ એવી પ્રક્રિયા છે જેમાં Ultimate Multisite તમારા hosting account માં custom domain name ને add-on domain તરીકે ઉમેરે છે **જેથી domain mapping કામ કરે**.

જો તમારા hosting provider પાસે Ultimate Multisite domain mapping feature સાથે integration હોય, તો domain syncing આપમેળે થાય છે. હાલમાં, આ hosting providers _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ અને _Cpanel_ છે.

જ્યારે host-provider integration active હોય, ત્યારે Ultimate Multisite newly created sites માટે provider-side DNS અથવા subdomain creation task ને પણ enqueue કરી શકે છે. જો કોઈ integration તે task માટે listening ન હોય, તો no-op queue entries ટાળવા માટે background job skip કરવામાં આવે છે. mapped domains માટે DNS અને SSL checks સામાન્ય domain-stage process દ્વારા ચાલુ રહે છે.

તમારે **Integration** tab હેઠળ Ultimate Multisite settings પર આ integration activate કરવું પડશે.

![hosting providers બતાવતું Ultimate Multisite settings માં Integrations tab](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_નોંધો કે જો તમારો hosting provider ઉપર ઉલ્લેખિત providers માંથી એક નથી, તો **તમારે domain name ને તમારા hosting account સાથે manually sync અથવા add કરવું પડશે**._
