---
title: ඩොමේන් මැපින් එක වින්‍යාස කරන්නේ කෙසේද
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# ડોમેન મેપિંગ કેવી રીતે સેટ કરવું (v2)

_**મહત્વપૂર્ણ નોંધ: આ લેખ Ultimate Multisite version 2.x નો ઉલ્લેખ કરે છે.**_

એક પ્રીમિયમ નેટવર્કની સૌથી શક્તિશાળી સુવિધાઓમાં એક એ છે કે તમે તમારા ક્લાયન્ટ્સને તેમની સાઇટ્સ સાથે ટોપ-લેવલ ડોમેન જોડવાની તક આપી શકો છો. ખરેખર, કોણ વધુ પ્રોફેશનલ લાગે છે: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) કે [_**joesbikeshop.com**_? આ જ કારણ છે કે Ultimate Multisite આ સુવિધાને સીધી આપે છે, જેના માટે તૃતીય-પક્ષ પ્લગિન્સનો ઉપયોગ કરવાની જરૂર નથી.

## ડોમેન મેપિંગ શું છે?

નામ સૂચવે છે તેમ, ડોમેન મેપિંગ એ Ultimate Multisite દ્વારા કસ્ટમ ડોમેન માટેની વિનંતી લેવાની અને તે વિનંતીને નેટવર્કમાં સંબંધિત સાઇટ સાથે જોડવાની ક્ષમતા છે જેમાં તે ચોક્કસ ડોમેન જોડાયેલ હોય.

### તમારા Ultimate Multisite નેટવર્ક પર ડોમેન મેપિંગ કેવી રીતે સેટ કરવું

ડોમેન મેપિંગ કામ કરવા માટે તમારી તરફથી કેટલીક સેટિંગ્સની જરૂર પડે છે. ખુશીની વાત એ છે કે, Ultimate Multisite તમારા માટે આ મુશ્કેલ કામ આપોઆપ કરે છે જેથી તમે સરળતાથી જરૂરિયાતો પૂરી કરી શકો.

Ultimate Multisite ઇન્સ્ટોલેશન દરમિયાન, વિઝાર્ડ આપમેળે **sunrise.php** ને નિર્દિત ફોલ્ડરમાં કોપી અને ઇન્સ્ટોલ કરશે. **આ પગલું પૂર્ણ ન થાય ત્યાં સુધી વિઝાર્ડ તમને આગળ વધવાની મંજૂરી આપશે નહીં**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

આનો અર્થ એ છે કે એકવાર Ultimate Multisite ઇન્સ્ટોલેશન વિઝાર્ડ તમારા નેટવર્કને સેટ કરી દે, પછી તમે તરત જ કસ્ટમ ડોમેન મેપિંગ શરૂ કરી શકો છો.

ધ્યાનમાં રાખો કે Ultimate Multisite માં ડોમેન મેપિંગ ફરજિયાત નથી. તમારી પાસે WordPress Multisite ના મૂળ ડોમેન મેપિંગ ફંક્શન અથવા અન્ય કોઈ ડોમેન મેપિંગ સોલ્યુશનનો ઉપયોગ કરવાનો વિકલ્પ છે.

ඔබට Ultimate Multisite හි ડોමේන් මැපින් (domain mapping) අක්‍රිය කිරීමට අවශ්‍ය නම්, වෙනත් ડોමේන් මැපින් විසඳුම් සඳහා ඉඩ දීමට, ඔබට **Ultimate Multisite > Settings > Domain Mapping** යටතේ මෙම විශේෂාංගය අක්‍රිය කළ හැකිය.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

මෙම විකල්පයටठीक පහළින් ඔබට **Force Admin Redirect** (අවශ්‍ය පරිදි පරිපාලක ප්‍රතිලෝම කිරීම බලහත්කාරයෙන් සිදු කිරීම) යන විකල්පය ද දැකගත හැකිය. මෙම විකල්පය මඟින් ඔබේ පාරිභෝගිකයින්ට ඔවුන්ගේ කස්ටම් ડોමේන් සහ උප-โดเมන් දෙකෙහිම පරිපාලක දත්ත පුවරුව (admin dashboard) වෙත ප්‍රවේශ විය හැකිද නැද්ද යන්න ඔබට පාලනය කිරීමට ඉඩ සලසයි.

ඔබ **Force redirect to mapped domain** (මැප කළ ડોමේන්ට බලහත්කාරයෙන් ප්‍රතිලෝම කිරීම) තෝරා ගන්නේ නම්, ඔබේ පාරිභෝගිකයින්ට ඔවුන්ගේ කස්ටම් ડોමේන්වල පමණක් පරිපාලක දත්ත පුවරුව වෙත ප්‍රවේශ විය හැකිය.

**Force redirect to network domain** (ජාල ડોමේන්ට බලහත්කාරයෙන් ප්‍රතිලෝම කිරීම) යන විකල්පය සම්පූර්ණයෙන්ම ප්‍රතිවිරුද්ධ ක්‍රියාව කරයි - ඔවුන් කස්ටම් ડોමේන්වල පිවිසීමට උත්සාහ කළද, ඔවුන්ගේ උප-โดเมන්වල පමණක් දත්ත පුවරුව වෙත ප්‍රවේශ වීමට අවසර ලැබේ.

එසේම **Allow access to the admin by both mapped domain domain and network domain** (මැප කළ ડોමේන් සහ ජාල ડોමේන් දෙකෙන් පරිපාලකයට ප්‍රවේශ වීම අවසර ඇත) යන විකල්පය මඟින් ඔවුන්ට උප-โดเมන් සහ කස්ටම් ડોමේන් දෙකෙහිම දත්ත පුවරුව වෙත ප්‍රවේශ වීමට ඉඩ සලසයි.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

කස්ටම් ડોමේන් එකක් මැප කිරීමට ක්‍රම දෙකක් තිබේ. පළನೆಯది ඔබේ ජාල පරිපාලක දත්ත පුවරුවේ සිට සුපිරි පරිපාලකයා (super admin) ලෙස එම ડોමේන් නාමය මැප කිරීම සහ දෙවැන්න ගිණුම් පිටුව යටතේ උප-සයිට් පරිපාලක දත්ත පුවරුව හරහා සිදු කිරීමයි.

නමුත් ඔබේ ජාලයේ ඇති උප-සයිට් වලින් එකකට කස්ටම් ડોමේන් එක මැප කිරීමට පෙර, එම ડોමේන් නාමයේ **DNS සැකසුම්** නිවැරදිව වින්‍යාස කර තිබේදැයි ඔබ තහවුරු කර ගත යුතුය.

###

### ડોමේන් DNS සැකසුම් නිවැරදිව වින්‍යාස කිරීම සහතික කිරීම

મેપિંગ કામ કરવા માટે, તમે જે ડોમેન મેપ કરવાનું વિચારી રહ્યા છો તે તમારા નેટવર્કના IP સરનામા તરફ નિર્દેશ કરે છે તેની ખાતરી કરવી જરૂરી છે. નોંધไว้કે તમારે નેટવર્ક IP સરનામું - Ultimate Multisite ઇન્સ્ટોલ કરેલા ડોમેનનું IP સરનામું - તમારી કસ્ટમ ડોમેન જે મેપ કરવાની છે તેનું IP સરનામું નહીં જોઈએ. કોઈ ચોક્કસ ડોમેનના IP સરનામાને શોધવા માટે, અમે તમને [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) પર જવાની સલાહ આપીએ છીએ, ઉદાહરણ તરીકે.

ડોમેન યોગ્ય રીતે મેપ કરવા માટે, તમારે તમારા **DNS** સેટિંગ્સમાં તે **IP સરનામા** તરફ નિર્દેશ કરતું એક **A RECORD** ઉમેરવું પડશે. વિવિધ ડોમેન રજિસ્ટ્રાર વચ્ચે DNS મેનેજમેન્ટમાં ઘણો ફરક પડે છે, પરંતુ જો તમે " _Creating A Record on XXXX_ " (જ્યાં XXXX તમારો ડોમેન રજિસ્ટ્રાર છે, ઉદાહરણ તરીકે: " _Creating A Record on_ _GoDaddy_ ") શોધીને સર્ચ કરો તો તેના માટે ઘણી ટ્યુટોરિયલ્સ ઓનલાઇન ઉપલબ્ધ છે.

જો તમને આ કામ કરવામાં મુશ્કેલી પડતી હોય, તો **તમારા ડોમેન રજિસ્ટ્રાર સપોર્ટનો સંપર્ક કરો** અને તેઓ તમને આ ભાગમાં મદદ કરી શકશે.

જો તમે તમારા ક્લાયન્ટ્સને તેમના પોતાના ડોમેન્સ મેપ કરવાની મંજૂરી આપવાનું વિચારી રહ્યા હોવ, તો તેમને આ ભાગ પર પોતાનું કામ કરવું પડશે. જો તેઓ A Record બનાવી શકતા નથી તેમ લાગે તો તેમને તેમના રજિસ્ટ્રાર સપોર્ટ સિસ્ટમ તરફ નિર્દેશ કરો.

### સુપર એડમિન તરીકે કસ્ટમ ડોમેન નામ મેપ કરવો

જ્યારે તમે તમારા નેટવર્કમાં સુપર એડમિન તરીકે લોગ ઇન કરો છો, ત્યારે તમે **Ultimate Multisite > Domains** હેઠળ સરળતાથી કસ્ટમ ડોમેન નામો ઉમેરી અને તેનું સંચાલન કરી શકો છો.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

මෙම පිටුව යටතේ, ඉහළ ඇති **Add Domain** බොත්තම මත ක්ලික් කළ හැකිය. එවිට මෝඩල් කවුළුවක් විවෘත වේ. එහිදී ඔබට අවශ්‍ය **custom domain name**, ඔබ එම custom domain එක යොදා ගැනීමට බලාපොරොත්තු වන **subsite**, සහ එය **primary domain** ලෙස සැකසිය යුතුද නැද්ද යන්න තීරණය කළ හැකිය (සටහන: එක් subsite එකකට දාමයන් කිහිපයක් map කිරීමට ඔබට හැකිය).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

සියලු තොරතුරු ඇතුළත් කිරීමෙන් පසු, පහළ ඇති **Add Existing Domain** බොත්තම මත ක්ලික් කළ හැකිය.

මෙය custom domain එකේ DNS තොරතුරු සත්‍යාපනය කර ලබා ගැනීමේ ක්‍රියාවලිය ආරම්භ කරයි. මෙම ක්‍රියාවලිය අවසන් කිරීමට මිනිත්තු කිහිපයක් ගත විය හැකිය. ඔබ හරහා ගමන් කරන ක්‍රියාවලිය නිරීක්ෂණය කිරීමට පිටුවේ පහළින් ලොග් එකක් ද ඔබට දැකගත හැකිය.

Ultimate Multisite v2.13.0 මගින් නව site එකක් host එකක නිර්මාණය කරන විට, එය per-site domain ලෙස සැලකිය යුතු අවස්ථාවලදී ස්වයංක්‍රීයව internal domain record එකක් සාදයි. එම host එක ජාලයේ ප්‍රාථමික domain එක නම්, නැතහොත් **Site URL** ක්ෂේත්‍රයක වෙන් කර ඇති shared checkout-form base domains වලින් එකක් නම්, ඒ සඳහා ස්වයංක්‍රීයව map කරන ලද domain record එක මඟ හැරේ. එවිට එම shared base domain සියලුම site වලට භාවිතා කිරීමට තිබිය හැකිය.

සියල්ල නිසි ලෙස සැකසී ඇත්නම් **Stage** හෝ තත්ත්වය **Checking DNS** සිට **Ready** දක්වා වෙනස් වේ.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

ඔබ domain name එක මත ක්ලික් කළ විට, එහි ඇති විකල්ප කිහිපයක් ඔබට දැකගත හැකිය. ඒවා ඉක්මනින් බලමු:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** මේක තමයි ඔබේ ડોමේන් එකේ තත්ත්වය. ඔබ මුලින්ම ડોමේන් එක එකතු කරන විට, එය බොහෝ විට **Checking DNS** (DNS පරීක්ෂා කිරීම) යන මට්ටමේ තිබිය හැකියි. මෙම ක්‍රියාවලිය DNS ඇතුළත් කිරීම් පරීක්ෂා කර ඒවා නිවැරදි දැයි තහවුරු කරයි. ඉන්පසු, එම ડોමේන් එක **Checking SSL** (SSL පරීක්ෂා කිරීම) මට්ටමට ගෙන එනු ලැබේ. Ultimate Multisite විසින් ඔබේ ડોමේන්ට SSL තිබේද නැද්ද යන්න පරීක්ෂා කර එය **Ready** හෝ **Ready (without SSL)** ලෙස වර්ගීකරණය කරයි.

**Site:** මේ ડોමේනයට සම්බන්ධ උප-โดเมන් එකයි. සිතියම්ගත කරන ලද (mapped) ડોමේනයෙන් මෙම නිශ්චිත වෙබ් අඩවියේ අන්තර්ගතය පෙනේ.

**Active:** ඔබට මෙම විකල්පය ක්‍රියාත්මක කිරීමට හෝ අක්‍රිය කිරීමට හැකිය.

**Is Primary Domain?:** එක් එක් වෙබ් අඩවිය සඳහා ඔබේ පාරිභෝගිකයින්ට සිතියම්ගත කළ (mapped) ડોමේන් එකකට වඩා වැඩි ගණනක් තිබිය හැකිය. මෙය එම නිශ්චිත වෙබ් අඩවිය සඳහා ප්‍රාථමික (primary) ડોමේනය ලෙස තෝරා ගැනීමට භාවිතා කරන්න.

**Is Secure?:** Ultimate Multisite මගින් SSL සහතිකයක් (SSL certificate) තිබේදැයි පරීක්ෂා කර එය ක්‍රියාත්මක කිරීමට පෙර ඔබට එය අතින් තෝරාගත හැකිය. වෙබ් අඩවියට SSL සහතිකය නොමැති නම්, ඔබ SSL සමඟ පැටවීමට උත්සාහ කළහොත් දෝෂ ඇති විය හැකි බව සලකන්න.

### උප-සite පරිශීලකයා ලෙස කස්ටම් ડોමේන් නාමය සිතියම්ගත කිරීම (Mapping custom domain name as Subsite user)

උප-සite පරිපාලකයින්ට ඔවුන්ගේ උප-සite පරිපාලක දත්ත පුවරුවේ සිට කස්ටම් ડોමේන් නම් සිතියම්ගත කළ හැකිය.

මුලින්ම, **Domain mapping** සැකසුම් යටතේ මෙම විකල්පය ක්‍රියාත්මක කර ඇති බව තහවුරු කර ගත යුතුය. පහත ස්ක්‍රීන්ෂොට් එක බලන්න.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

ඔබට **Ultimate Multisite > Products** හි **Plan** මට්ටමේ හෝ නිෂ්පාදන විකල්ප යටතේ මෙම විකල්පය සැකසිය හැකිය.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

ඔබේ උපසම (subsite) පරිශීලකයාට කස්ටම් ડોමේන් නම් කිරීමට අවසර දී ඇති අතර එම විකල්ප වලින් එකක් සක්‍රිය කර ඇත්නම්, උපසම පරිශීලකයාට **Account** පිටුව යට **Domains** නමින් මෙටාබොක්ස් (metabox) එකක් දැකගත හැකිය.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

පරිශීලකයාට **Add Domain** බොත්තම ක්ලික් කළ හැකි අතර එය උපසම පරිශීලකයින් සඳහා DNS A-record උපදෙස් සහිත මෝඩල් කවුළුවක් (modal window) පෙන්වනු ඇත.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

ඉන්පසු පරිශීලකයාට **Next Step** ක්ලික් කර කස්ටම් ડોමේන් නාමය එක් කිරීමට ඉදිරියට යා හැකිය. මෙය ප්‍රාථමික (primary) ડોමේන් වේද නැද්ද යන්න තෝරා ගැනීමට ද ඔවුන්ට හැකිය.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** ක්ලික් කිරීමෙන් කස්ටම් ડોමේන්ගේ DNS තොරතුරු සත්‍යාපනය කර ලබා ගැනීමට ක්‍රියාවලිය ආරම්භ වේ.

### Domain Syncing ගැන

Domain Syncing කියන්නේ Ultimate Multisite එක ඔබේ හෝස්ටිං ගිණුමට අමතර ડોමේන් (add-on domain) ලෙස කස්ටම් ડોමේන් නාමය එක් කරන ක්‍රියාවලියක් වන අතර, එය **ඩොමේන් මැප කිරීම ක්‍රියාත්මක වීමට** අවශ්‍ය වේ.

ඔබේ හෝස්ටිං සපයන්නා Ultimate Multisite ඩොමේන් මැප කිරීමේ විශේෂාංග සමඟ ඒකාබද්ධ කර ඇත්නම්, Domain syncing ස්වයංක්‍රීයව සිදුවේ. දැනට මෙම හෝස්ටිං සපයන්නන් වන්නේ _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ සහ _Cpanel._

හෝස්ට්-සපයන්නා ඒකාබද්ධ කිරීම ක්‍රියාත්මක වන විට, Ultimate Multisite එක විසින් නව වෙබ් අඩවි සඳහා සපයන්නා පැත්තෙන් DNS හෝ උප-โดเมන් නිර්මාණය කිරීමේ කාර්යය (task) ද ඇතුළත් කළ හැකිය. එම කාර්යය සඳහා කිසිදු ඒකාබද්ධතාවක් නොමැති නම්, no-op queue entries ඇතිවීම වැළැක්වීම සඳහා පසුබිම් රැකියාව (background job) මඟ හැරේ. මැප කරන ලද ડોමේන් සඳහා DNS සහ SSL පරීක්ෂා සාමාන්‍ය ඩොමේන් අවධියේ ක්‍රියාවලිය හරහා දිගටම සිදු වේ.

Ultimate Multisite සැකසුම් වල **Integration** ටැබය යට මෙම ඒකාබද්ධ කිරීම සක්‍රිය කිරීමට ඔබට අවශ්‍ය වනු ඇත.

![Ultimate Multisite සැකසුම් වල Integrations tab එක පෙන්වන රූපය](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Integrations settings tab එකේ Hosting provider Configuration link එක පෙන්වන රූපය -->

_සටහනක් ලෙස, ඔබගේ හොස්ටිං සපයන්නා ඉහත සඳහන් කළ සපයන්නන්ගෙන් කෙනෙකු නොවේ නම්, **ඔබේ හොස්ටිං ගිණුමට අතින්ම (manually) දෝමেইন නාමය සමමුහුර්ත (sync) කිරීමට හෝ එකතු කිරීමට** ඔබට අවශ්‍ය වනු ඇත._
