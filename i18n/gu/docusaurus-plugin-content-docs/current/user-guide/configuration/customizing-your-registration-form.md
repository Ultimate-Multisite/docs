---
title: તમારા નોંધણી ફોર્મને કસ્ટમાઇઝ કરવું
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# તમારા રજિસ્ટ્રેશન ફોર્મને કસ્ટમાઇઝ કરવું

તમારા network ને WordPress platform પર બનેલા અન્ય SaaS થી અલગ દેખાડવા માટે, Ultimate Multisite તમને અમારી **Checkout Forms** સુવિધા દ્વારા તમારા રજિસ્ટ્રેશન અને લોગિન પેજને કસ્ટમાઇઝ કરવાની મંજૂરી આપે છે.

જોકે નવા ગ્રાહકોને કન્વર્ટ કરવા માટે વિવિધ અભિગમો અજમાવવાની આ એક સરળ અને લવચીક રીત છે, તેમ છતાં તેનો મુખ્ય ઉપયોગ વ્યક્તિગત રજિસ્ટ્રેશન ફોર્મ બનાવવા માટે થાય છે. આ લેખમાં અમે તમને બતાવીશું કે તમે આ કેવી રીતે કરી શકો છો.

## લોગિન અને રજિસ્ટ્રેશન પેજ:

Ultimate Multisite ઇન્સ્ટોલ કરતી વખતે, તે આપમેળે તમારી મુખ્ય સાઇટ પર કસ્ટમ લોગિન અને રજિસ્ટ્રેશન પેજ બનાવે છે. તમે આ ડિફોલ્ટ પેજને ગમે ત્યારે **Ultimate Multisite > Settings > Login & Registration** પેજ પર જઈને બદલી શકો છો.

![Login and Registration settings page](/img/config/settings-general.png)

ચાલો **Login & Registration** પેજ પર તમે કસ્ટમાઇઝ કરી શકો તે દરેક વિકલ્પ જોઈએ:

  * **Enable registration:** આ વિકલ્પ તમારા network પર રજિસ્ટ્રેશન ચાલુ અથવા બંધ કરશે. જો તે બંધ હોય, તો તમારા ગ્રાહકો રજિસ્ટર થઈ શકશે નહીં અને તમારા products સબ્સ્ક્રાઇબ કરી શકશે નહીં.

  * **Enable email verification:** જો આ વિકલ્પ ચાલુ હોય, તો free plan અથવા trial period સાથેના paid plan માટે સબ્સ્ક્રાઇબ કરનારા ગ્રાહકોને verification email મળશે અને તેમની websites બનાવવા માટે તેમને verification link પર ક્લિક કરવું પડશે.

  * **Default registration page:** આ રજિસ્ટ્રેશન માટેનું ડિફોલ્ટ પેજ છે. આ પેજ તમારી website પર પબ્લિશ થયેલું હોવું જોઈએ અને તેમાં registration form (checkout form તરીકે પણ ઓળખાય છે) હોવું જોઈએ - જ્યાં તમારા clients તમારા products સબ્સ્ક્રાઇબ કરશે. તમે જેટલા રજિસ્ટ્રેશન પેજ અને checkout forms બનાવવા માંગો તેટલા બનાવી શકો છો, ફક્ત યાદ રાખો કે checkout form shortcode રજિસ્ટ્રેશન પેજ પર મૂકવો જોઈએ, નહીંતર તે દેખાશે નહીં.

  * **Use custom login page:** આ વિકલ્પ તમને ડિફોલ્ટ wp-login.php પેજ સિવાય કસ્ટમાઇઝ્ડ લોગિન પેજ વાપરવાની મંજૂરી આપે છે. જો આ વિકલ્પ ચાલુ હોય, તો તમે **Default login page** વિકલ્પ (નીચે) માં પસંદ કરી શકો છો કે કયું પેજ લોગિન માટે વપરાશે.

  * **Obfuscate the original login url (wp-login.php):** જો તમે મૂળ login URL છુપાવવા માંગો છો, તો તમે આ વિકલ્પ ચાલુ કરી શકો છો. brute-force attacks રોકવા માટે આ ઉપયોગી છે. જો આ વિકલ્પ ચાલુ હોય, તો જ્યારે કોઈ user મૂળ wp-login.php link ઍક્સેસ કરવાનો પ્રયાસ કરશે ત્યારે Ultimate Multisite 404 error બતાવશે.

  * **Force synchronous site publication:** જ્યારે ગ્રાહક network પર product સબ્સ્ક્રાઇબ કરે છે, ત્યારે નવી pending site ને real network site માં રૂપાંતરિત કરવાની જરૂર પડે છે. publishing process Job Queue દ્વારા asynchronously થાય છે. signup ની સાથે જ publication થાય તે માટે આ વિકલ્પ ચાલુ કરો.

હવે, લોગિન અને રજિસ્ટ્રેશન પ્રક્રિયા સાથે સંબંધિત અન્ય વિકલ્પો જોઈએ. તે એ જ Login & registration પેજ પર **Other options** ની નીચે છે:

  * **Default role:** signup process પછી તમારા ગ્રાહકોને તેમની website પર આ role મળશે.

  * **Add users to the main site as well:** આ વિકલ્પ ચાલુ કરવાથી signup process પછી user ને તમારા network ની main site માં પણ ઉમેરવામાં આવશે. જો તમે આ વિકલ્પ ચાલુ કરો, તો તમારી website પર આ users નો **default role** સેટ કરવાનો વિકલ્પ પણ નીચે દેખાશે.

  * **Enable multiple accounts:** users ને સમાન email address સાથે તમારા network ની વિવિધ sites પર accounts રાખવાની મંજૂરી આપો. જો આ વિકલ્પ બંધ હોય, તો તમારા ગ્રાહકો સમાન email address સાથે તમારા network પર ચાલતી અન્ય websites પર account બનાવી શકશે નહીં.

અને લોગિન અને રજિસ્ટ્રેશન સંબંધિત તમે કસ્ટમાઇઝ કરી શકો તે બધા વિકલ્પો આ છે! editing પૂરી કર્યા પછી તમારી settings save કરવાનું ભૂલશો નહીં.

## બહુવિધ રજિસ્ટ્રેશન ફોર્મ વાપરવા:

Ultimate Multisite 2.0 એક checkout form editor આપે છે જે તમને વિવિધ fields, ઓફર પરના products વગેરે સાથે જેટલા forms બનાવવા હોય તેટલા બનાવવાની મંજૂરી આપે છે.

login અને registration બંને પેજ shortcodes સાથે embedded છે: login પેજ પર **[wu_login_form]** અને registration પેજ માટે **[wu_checkout]**. તમે checkout forms બનાવીને અથવા build કરીને registration પેજને વધુ કસ્ટમાઇઝ કરી શકો છો.

આ સુવિધા ઍક્સેસ કરવા માટે, ડાબી side-bar પર **Checkout Forms** menu પર જાઓ.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

આ પેજ પર, તમે તમારા બધા checkout forms જોઈ શકો છો.

જો તમે નવો બનાવવા માંગો છો, તો પેજની ટોચ પર **Add Checkout Form** પર ક્લિક કરો.

તમે શરૂઆતના બિંદુ તરીકે આ ત્રણમાંથી એક વિકલ્પ પસંદ કરી શકો છો: single step, multi-step અથવા blank. પછી, **Go to the Editor** પર ક્લિક કરો.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

વૈકલ્પિક રીતે, તમે તેના નામ નીચેના options પર ક્લિક કરીને તમારી પાસે પહેલેથી હોય તે forms ને edit અથવા duplicate કરી શકો છો. ત્યાં, તમને form નો shortcode copy કરવાનો અથવા form delete કરવાનો વિકલ્પ પણ મળશે.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

જો તમે single step અથવા multi-step પસંદ કરો, તો checkout form કામ કરવા માટે જરૂરી basic steps સાથે પહેલેથી pre-populated હશે. પછી, જો તમે ઇચ્છો, તો તેમાં વધારાના steps ઉમેરી શકો છો.

### Checkout Form ને Edit કરવું:

જેમ અમે પહેલા જણાવ્યું, તમે વિવિધ હેતુઓ માટે checkout forms બનાવી શકો છો. આ ઉદાહરણમાં આપણે registration form પર કામ કરીશું.

checkout form editor પર navigate કર્યા પછી, તમારા form ને એક નામ આપો (જે ફક્ત internal reference માટે વપરાશે) અને એક slug (shortcodes બનાવવા માટે વપરાય છે, ઉદાહરણ તરીકે).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Forms steps અને fields થી બનેલા હોય છે. તમે **Add New Checkout Step** પર ક્લિક કરીને નવો step ઉમેરી શકો છો.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

modal window ના પહેલા tab પર, તમારા form ના step નું content ભરો. તેને ID, name અને description આપો. આ items મોટે ભાગે internally વપરાય છે.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

આગળ, step ની visibility સેટ કરો. તમે **Always show**, **Only show for logged in users** અથવા **Only show for guests** વચ્ચે પસંદ કરી શકો છો.

![Checkout step visibility options](/img/config/checkout-form-step.png)

છેલ્લે, step style configure કરો. આ optional fields છે.

![Checkout step style configuration](/img/config/checkout-form-step.png)

હવે, આપણા પહેલા step માં fields ઉમેરવાનો સમય છે. બસ **Add New Field** પર ક્લિક કરો અને તમને જોઈતા section નો type પસંદ કરો.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

દરેક field માં ભરવા માટે અલગ અલગ parameters હોય છે. આ પહેલી entry માટે, આપણે **Username** field પસંદ કરીશું.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

તમને જેટલા steps અને fields જોઈએ તેટલા ઉમેરી શકો છો. તમારા ગ્રાહકોને products પસંદ કરવા માટે બતાવવા, Pricing Table field વાપરો. જો તમે તમારા clients ને template પસંદ કરવા દેવા માંગો છો, તો Template Selection field ઉમેરો. અને એમ જ આગળ.

_**નોંધ:** જો તમે checkout form બનાવ્યા પછી product બનાવો, તો તમારે product ને Pricing table section માં ઉમેરવું પડશે. જો તમે તેને ઉમેરશો નહીં, તો product registration પેજ પર તમારા ગ્રાહકોને દેખાશે નહીં._

_**નોંધ 2:** checkout form બનાવવા માટે username, email, password, site title, site URL, order summary, payment, અને submit button ફરજિયાત fields છે._

જ્યારે તમે તમારા checkout form પર કામ કરી રહ્યા હો, ત્યારે તમે હંમેશા Preview button વાપરીને જોઈ શકો છો કે તમારા clients form કેવી રીતે જોશે. તમે existing user અથવા visitor તરીકે view વચ્ચે પણ બદલી શકો છો.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

છેલ્લે, **Advanced Options** માં તમે **Thank You** page માટે message configure કરી શકો છો, conversions track કરવા snippets ઉમેરી શકો છો, તમારા checkout form માં custom CSS ઉમેરી શકો છો અથવા તેને ચોક્કસ દેશો સુધી restrict કરી શકો છો.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

તમે જમણી column માં આ option toggle કરીને તમારા checkout form ને manually enable અથવા disable કરી શકો છો, અથવા form કાયમ માટે delete કરી શકો છો.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

તમારો checkout form save કરવાનું ભૂલશો નહીં!

![Save Checkout Form button](/img/config/checkout-form-save.png)

તમારા form નો shortcode મેળવવા માટે **Generate Shortcode** પર ક્લિક કરો અને modal window માં બતાવેલ result copy કરો.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**નોંધ:** આ checkout form ને registration page માં ઉમેરવા માટે તમારે આ shortcode તમારા registration page પર ઉમેરવો પડશે._

## URL parameters દ્વારા products અને templates પ્રી-સિલેક્ટ કરવા:

જો તમે તમારા products માટે customized pricing tables બનાવવા માંગો છો અને checkout form પર તમારા ગ્રાહક તમારા pricing table અથવા templates page પરથી પસંદ કરેલ product અથવા template પ્રી-સિલેક્ટ કરવા માંગો છો, તો તમે આ માટે URL parameters વાપરી શકો છો.

### **Plans માટે:**

**Ultimate Multisite > Products > Select a plan** પર જાઓ. પેજની ટોચ પર તમને **Click to copy Shareable Link** button દેખાશે. આ link છે જેનો ઉપયોગ તમે તમારા checkout form પર આ ચોક્કસ plan પ્રી-સિલેક્ટ કરવા માટે કરી શકો છો.

![Product page with shareable link button](/img/config/products-list.png)

નોંધ કરો કે આ shareable link ફક્ત **Plans** માટે માન્ય છે. તમે packages અથવા services માટે shareable links વાપરી શકતા નથી.

### Templates માટે:

જો તમે તમારા checkout form પર site templates પ્રી-સિલેક્ટ કરવા માંગો છો, તો તમે તમારા registration page URL પર parameter: **?template_id=X** વાપરી શકો છો. "X" ને **site template ID number** થી બદલવાની જરૂર છે. આ number મેળવવા માટે, **Ultimate Multisite > Sites** પર જાઓ.

તમે વાપરવા માંગો છો તે site template ની નીચે **Manage** પર ક્લિક કરો. તમને SITE ID number દેખાશે. ફક્ત આ number વાપરો જેથી આ ચોક્કસ site template તમારા checkout form પર પ્રી-સિલેક્ટ થાય. અહીં આપણા કિસ્સામાં, URL parameter **?template_id=2** હશે.

![Sites list showing site template ID](/img/config/site-templates-list.png)

ચાલો કહીએ કે આપણી network website [**www.mynetwork.com**](http://www.mynetwork.com) છે અને આપણું checkout form ધરાવતું registration page **/register** page પર છે. આ site template પ્રી-સિલેક્ટેડ સાથે આખું URL [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2** જેવું દેખાશે.

અને જો તમે ઇચ્છો, તો તમે તમારા checkout form પર products અને templates બંને પ્રી-સિલેક્ટ કરી શકો છો. તમારે ફક્ત plan ની shareable link copy કરવાની અને અંતે template parameter paste કરવાની જરૂર છે. તે [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2** જેવું દેખાશે.
