---
title: ඔබේ ලියාපදිංචි පෝරමය වෙනස් කිරීම
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# ඔබේ ලියාපදිංචි කිරීමේ පෝරමය වෙනස් කර ගැනීම

WordPress වේදිකාව මත ගොඩනගා ඇති අනෙකුත් සියලුම SaaS වලට වඩා ඔබේ ජාලය අද්විතීය ලෙස පෙනීමට අවශ්‍ය නම්, Ultimate Multisite මඟින් අපගේ **Checkout Forms** විශේෂාංගය සමඟ ඔබේ ලියාපදිංචි කිරීමේ සහ පිවිසුම් පිටු tùyize කිරීමට ඔබට ඉඩ සලසයි.

නව පාරිභෝගිකයන් පරිවර්තනය කිරීමට විවිධ ප්‍රවේශයන් අත්හදා බැලීම සඳහා මෙය පහසු සහ නම්‍යශීලී ක්‍රමයක් වුවද, එය බොහෝ දුරට පුද්ගලීකරණය කළ ලියාපදිංචි කිරීමේ පෝරම නිර්මාණය කිරීමට භාවිතා කරයි. මෙම ලිපිය මඟින් ඔබට එය කරන්නේ කෙසේද යන්න පෙන්වීමට අපේක්ෂා කෙරේ.

## පිවිසුම් සහ ලියාපදිංචි කිරීමේ පිටු:

Ultimate Multisite ස්ථාපනය කිරීමෙන් පසු, ඔබේ ප්‍රධාන වෙබ් අඩවියෙහි ස්වයංක්‍රීයව පරිශීලකයන් සඳහා විශේෂිත පිවිසුම් සහ ලියාපදිංචි කිරීමේ පිටු නිර්මාණය වේ. ඔබේ **Ultimate Multisite > Settings > Login & Registration** පිටුව යට ගොස් ඕනෑම වෙලාවක මෙම පෙරනිමි පිටු වෙනස් කළ හැකිය.

![Login and Registration settings page](/img/config/settings-general.png)

පිවිසුම් සහ ලියාපදිංචි කිරීමේ සැකසුම් පිටුවේ සම්පූර්ණ දර්ශනය මෙන්න:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

**Login & Registration** පිටුවේ ඔබට tùyize කළ හැකි සෑම විකල්පයක්ම බලමු:

  * **Enable registration (ලියාපදිංචිය සක්‍රීය කිරීම):** මෙම විකල්පය මඟින් ඔබේ ජාලයේ ලියාපදිංචිය ක්‍රියාත්මක කිරීමට හෝ අක්‍රිය කිරීමට ඉඩ සලසයි. එය ක්‍රියා විරහිත කර ඇත්නම්, ඔබේ පාරිභෝගිකයින්ට ඔවුන්ගේ නිෂ්පාදන සඳහා ලියාපදිංචි වී දායක වීමට නොහැකි වනු ඇත.

  * **Enable email verification (ඊමේල් තහවුරු කිරීම සක්‍රීය කිරීම):** මෙම විකල්පය ක්‍රියාත්මක කර ඇත්නම්, නොමිලේ සැලැස්මක් හෝ අත්හදා බැලීමේ කාලයක් සහිත ගෙවන සැලැස්මක් සඳහා දායක වන පාරිභෝගිකයින්ට තහවුරු කිරීමේ ඊමේලයක් ලැබෙනු ඇති අතර ඔවුන්ගේ වෙබ් අඩවි නිර්මාණය කිරීමට එම තහවුරු කිරීමේ සබැඳිය ක්ලික් කළ යුතුය.

* **ප්‍රධාන ලියාපදිංචි පිටුව (Default registration page):** මෙය ලියාපදිංචිය සඳහා වන පෙරනිම පිටුවයි. මෙම පිටුව ඔබේ වෙබ් අඩවියේ ප්‍රකාශයට පත් කළ යුතු අතර, එහි ලියාපදිංචි කිරීමේ පෝරමය (checkout form ලෙසද දන්නා) තිබිය යුතුය - එහිදී ඔබේ පාරිභෝගිකයින් ඔබේ නිෂ්පාදන සඳහා ලියාපදිංචි වනු ඇත. ඔබට අවශ්‍ය පරිදි ලියාපදිංචි පිටු සහ checkout forms ඕනෑ තරම් නිර්මාණය කරගත හැකිය, නමුත් මතක තබා ගන්න, ඔබ checkout form එකේ shortcode එක ලියාපදිංචි පිටුවෙහි ඇතුළත් කළ යුතුය, නැතිනම් එය පෙනෙන්නේ නැත.

  * **අභිරුචි පිවිසුම් පිටුවක් භාවිතා කරන්න (Use custom login page):** මෙම විකල්පය මගින් පෙරනිම wp-login.php පිටුව වෙනුවට අභිරුචි කළ පිවිසුම් පිටුවක් භාවිතා කිරීමට ඔබට ඉඩ සලසයි. මෙම විකල්පය ක්‍රියාත්මක කළහොත්, **Default login page** (යටින් දකුණේ ඇති) විකල්පයේදී පිවිසීමට කුමන පිටුව භාවිතා කළ යුතුද යන්න තෝරාගත හැකිය.

  * **මුල් පිවිසුම් URL එක සැඟවීම (Obfuscate the original login url - wp-login.php):** ඔබ මුල් පිවිසුම් URL එක සඟවා ගැනීමට කැමති නම්, ඔබට මෙම විකල්පය ක්‍රියාත්මක කළ හැකිය. මෙය brute-force ප්‍රහාර වැළැක්වීමට ප්‍රයෝජනවත් වේ. මෙම විකල්පය සක්‍රිය කළහොත්, පරිශීලකයෙකු මුල් wp-login.php සබැඳියට පිවිසීමට උත්සාහ කරන විට Ultimate Multisite විසින් 404 දෝෂයක් පෙන්වනු ඇත.

  * **සමකාලීන වෙබ් අත්පිටපත් කිරීම බල කිරීම (Force synchronous site publication):** ජාලයක නිෂ්පාදනයක් සඳහා පාරිභෝගිකයෙකු ලියාපදිංචි වූ පසු, නව තාවකාලික වෙබ් අඩවිය සැබෑ ජාල වෙබ් අඩවියක් බවට පරිවර්තනය කළ යුතුය. මෙම ප්‍රකාශන ක්‍රියාවලිය Job Queue හරහා අසමකාලීනව (asynchronously) සිදු වේ. ලියාපදිංචි කිරීම සමඟ එකම ඉල්ලීම තුළ ප්‍රකාශනය සිදුවීමට බල කිරීමට මෙම විකල්පය සක්‍රිය කරන්න.

දැන්, පිවිසුම් සහ ලියාපදිංචි කිරීමේ ක්‍රියාවලියට තවමත් අදාළ වන වෙනත් විකල්ප බලමු. ඒවා එම Login & registration පිටුවේ **Other options** යටතේ ඇත:

  * **ප්‍රධාන භූමිකාව (Default role):** ලියාපදිංචි කිරීමේ ක්‍රියාවලියෙන් පසු ඔබේ පාරිභෝගිකයින් ඔවුන්ගේ වෙබ් අඩවියේ ලැබෙන භූමිකාව මෙයයි.

* **Jumper සක්‍රීය කිරීම:** මෙය admin area එකේ Jumper කෙටිමඟ (shortcut) ක්‍රියාත්මක කරයි. Jumper මගින් පරිපාලකයින්ට සෑම මෙනුවක් හරහාම බැලීමට අවශ්‍ය නැතිව Ultimate Multisite තිර, network objects සහ වෙනත් සහානාගත ගමනාන්ත වෙත ඉක්මනින් යාමට ඉඩ සලසයි. එම වේගවත් නාවික මෙවලම admin interface එකෙන් සැඟවීමට කැමති නම් එය අක්‍රිය කරන්න.

* **ප්‍රධාන වෙබ් අඩවියට පරිශීලකයන් එක් කිරීම ද:** මෙම විකල්පය ක්‍රියාත්මක කිරීමෙන්, ලියාපදිංචි කිරීමේ ක්‍රියාවලියෙන් පසු එම පරිශීලකයාව ඔබේ network එකේ ප්‍රධාන වෙබ් අඩවියටද එක් කරයි. ඔබ මෙම විකල්පය සක්‍රීය කළහොත්, පහළින්ම මෙම පරිශීලකයින්ගේ **default role** (ප්‍රධාන භූමිකාව) සැකසීමට ඇති විකල්පයක් ද දිස්වනු ඇත.

* **බහු ගිණුම් ක්‍රියාත්මක කිරීම:** එකම email ලිපිනයකින් ඔබේ network එකේ වෙනත් වෙබ් අඩවි වල පරිශීලකයින්ට ගිණුම් තිබිය හැකි වන පරිදි මෙය ඉඩ දෙන්න. මෙම විකල්පය නිසි ලෙස ක්‍රියාත්මක නොකළහොත්, එම email ලිපිනය සහිත ඔබේ network එකේ වෙනත් වෙබ් අඩවිවල ඇති වෙබ් අඩවි වල පාරිභෝගිකයින්ට ගිණුමක් නිර්මාණය කිරීමට නොහැකි වනු ඇත.

මෙන්න login සහ registration සම්බන්ධ සියලුම විකල්ප මෙහි තිබෙන අතර ඔබට අවශ්‍ය පරිදි ඒවා tùy chỉnh කළ හැකිය! සංස්කරණය අවසන් කිරීමෙන් පසු ඔබේ සැකසුම් සුරැකීමට අමතක නොකරන්න.

## බහු ලියාපදිංචි පෝරම භාවිතා කිරීම:

Ultimate Multisite 2.0 හි checkout form editor එකක් තිබෙනවා. එය ඔබට අවශ්‍ය පරිදි විවිධ fields, දීමනා සහිත නිෂ්පාදන වැනි වෙනස් වූ field ගණනින් පෝරම නිර්මාණය කිරීමට ඉඩ සලසයි.

login සහ registration පිටු දෙකම shortcodes සමඟ ඇතුළත් කර ඇත: login පිටුව සඳහා **[wu_login_form]** සහ registration පිටුව සඳහා **[wu_checkout]**. checkout forms (පෝරම) ගොනු නිර්මාණය කිරීමෙන් ඔබට registration පිටුව තවදුරටත් tùy chỉnh කළ හැකියි.

මෙම විශේෂාංගයට පිවිසීමට, වම් පැත්තේ sidebar එකේ ඇති **Checkout Forms** මෙනුව වෙත යන්න.

![Sidebar එකේ Checkout Forms මෙනුව](/img/config/checkout-forms-list.png)

මෙම පිටුවේ ඔබට ඔබ නිර්මාණය කර ඇති සියලුම checkout forms දැකගත හැකියි.

ඔබට අලුත් එකක් නිර්මාණය කිරීමට අවශ්‍ය නම්, පිටුවේ ඉහළින් **Add Checkout Form** ක්ලික් කරන්න.

ඔබට ආරම්භ කිරීමට මෙම විකල්ප තුනෙන් එකක් තෝරා ගත හැකිය: single step (එක පියවර), multi-step (බහු පියවර) හෝ blank (හිස්). ඉන්පසු, **Go to the Editor** ක්ලික් කරන්න.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

විකල්ප ලෙස, ඔබ දැනට ඇති පෝරම සංස්කරණය කිරීමට හෝ පිටපත් කිරීමට එහි නාමය යටතේ ඇති විකල්ප ක්ලික් කිරීමෙන් කළ හැකිය. එහිදී ඔබට පෝරමෙහි shortcode පිටපත් කිරීමට හෝ පෝරමය මකා දැමීමට ද විකල්ප සොයාගත හැක.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

ඔබ single step හෝ multi-step තෝරා ගන්නේ නම්, checkout පෝරමය එය ක්‍රියාත්මක වීමට අවශ්‍ය මූලික පියවර සමඟ දැනටමත් පුරවා ඇත. ඉන්පසු ඔබට අවශ්‍ය නම්, ඔබට අමතර පියවර එකතු කළ හැකිය.

### Checkout Form එකක් සංස්කරණය කිරීම:

අපි කලින් සඳහන් කළ පරිදි, විවිධ අරමුණු සඳහා checkout forms නිර්මාණය කළ හැකියි. මෙම උදාහරණයේදී අපි ලියාපදිංචි වීමේ පෝරමයක් (registration form) ගැන වැඩ කරමු.

checkout form editor එකට ගිය පසු, ඔබේ පෝරමකට නමක් දෙන්න (එය අභ්‍යන්තර යොමු කිරීම් සඳහා පමණක් භාවිතා වේ) සහ slug එකක් දෙන්න (උදාහරණයක් ලෙස shortcodes නිර්මාණය කිරීමට භාවිතා කරයි).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Forms පියවර සහ fields වලින් සමන්විත වේ. **Add New Checkout Step** ක්ලික් කිරීමෙන් ඔබට නව පියවරක් එකතු කළ හැකිය.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

මෝඩල් කවුළුවේ පළමු ටැබ් එකේ, ඔබේ පෝරමයේ පියවරෙහි අන්තර්ගතය පුරවන්න. එයට ID එකක්, නමක් සහ විස්තරයක් දෙන්න. මෙම දේවල් බොහෝ විට අභ්‍යන්තර භාවිතය සඳහා භාවිතා වේ.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

ඊළඟට, පියවරේ දෘශ්‍යතාව (visibility) සැකසීමට යොමු වන්න. ඔබට **Always show** (සෑම විටම පෙන්වන්න), **Only show for logged in users** (ලියාපදිංචි වූ පරිශීලකයින් සඳහා පමණක් පෙන්වන්න) හෝ **Only show for guests** (අමුත්තන් සඳහා පමණක් පෙන්වන්න) අතර තෝරා ගත හැකිය.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

අවසාන වශයෙන්, ස්ටෙප් එකේ විලාසය (step style) වින්‍යාස කරන්න. මේවා අනිවාර්ය නොවන ක්ෂේත්‍ර (optional fields) වේ.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

දැන්, අපේ පළමු ස්ටෙප් එකට ක්ෂේත්‍ර (fields) එකතු කිරීමට කාලයයි. **Add New Field** ක්ලික් කර ඔබට අවශ්‍ය කොටසේ වර්ගය තෝරන්න.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

සෑම ක්ෂේත්‍රයකටම පුරවන්න ඕන විවිධ පරාමිති (parameters) තිබෙනවා. මේ පළමු ඇතුළුවීම සඳහා, අපි **Username** ක්ෂේත්‍රය තෝරා ගනිමු.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

ඔබට අවශ්‍ය පරිදි ස්ටෙප් සහ ක්ෂේත්‍ර ඕනෑ තරම් එකතු කළ හැකියි. ඔබේ නිෂ්පාදන පාරිභෝගිකයින් තෝරා ගැනීමට දැක්වීමට, Pricing Table ක්ෂේත්‍රය භාවිතා කරන්න. ඔබට ඔබේ සේවාදායකයින්ට සැකිල්ලක් (template) තෝරා ගැනීමට ඉඩ දීමට අවශ්‍ය නම්, Template Selection ක්ෂේත්‍රය එකතු කරන්න. සහ ඒ වගේ දේවල්.

_**සටහන:** ඔබ checkout form එක නිර්මාණය කිරීමෙන් පසු නිෂ්පාදනයක් නිර්මාණය කළහොත්, ඔබට එය Pricing table කොටසේ එක් කිරීමට සිදුවනු ඇත. ඔබ එය නොඑකතු කළහොත්, ලියාපදිංචි පිටුවේ ඔබේ පාරිභෝගිකයින්ට එම නිෂ්පාදනය දිස්ව නොයනු ඇත._

_**සටහන 2:** checkout form එකක් නිර්මාණය කිරීම සඳහා username, email, password, site title, site URL, order summary, payment සහ submit button යනු අනිවාර්ය ක්ෂේත්‍ර වේ._

ඔබ ඔබේ checkout form එක සමඟ වැඩ කරන අතරතුර, පාරිභෝගිකයින්ට එම form එක පෙනෙන ආකාරය බැලීමට Preview බොත්තම භාවිතා කළ හැකිය. දැනට සිටින පරිශීලකයෙකු ලෙස හෝ සංචාරකයෙකු ලෙස ද දැකීමට ඔබට වෙනස් කරගත හැකිය.

අවසාන වශයෙන්, **Advanced Options** (උසස් විකල්ප) තුළ ඔබ **Thank You** පිටුව සඳහා පණිවිඩය සැකසිය හැකියි, පරිවර්තන (conversions) නිරීක්ෂණය කිරීමට කොටස් එකතු කළ හැකියි, ඔබේ checkout form එකට කස්ටම් CSS එකක් එක් කළ හැකියි හෝ යම් රටවල් සඳහා එය සීමා කළ හැකියි.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

දකුණු තීරුවේ ඇති මෙම විකල්පය ක්‍රියාත්මක කිරීමෙන් ඔබට ඔබේ checkout form එක අතින් පණිවිඩයක් දීමට හෝ එය ස්වයංක්‍රීයව ක්‍රියාත්මක කිරීමට (enable/disable) හැකිය, නැතිනම් එම form එක ස්ථිරවම මකා දැමිය හැකියි.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

ඔබේ checkout form එක සුරැකීමට අමතක නොකරන්න!

![Save Checkout Form button](/img/config/checkout-form-save.png)

ඔබේ form එකේ shortcode ලබා ගැනීමට, **Generate Shortcode** (Shortcode ජනනය කරන්න) වෙත ක්ලික් කර modal window එකේ පෙන්වන ප්‍රතිඵලය පිටපත් කරන්න.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**සටහන:** මෙම checkout form එක ඔබේ registration page එකට එක් කිරීමට නම්, ඔබ මෙම shortcode එක එහි එක් කළ යුතුය._

## URL parameters හරහා නිෂ්පාදන සහ template (තේමා) පෙර තෝරා ගැනීම:

ඔබට ඔබේ නිෂ්පාදන සඳහා කස්ටම් මිල ගණන් වගු නිර්මාණය කර ගැනීමට අවශ්‍ය නම් සහ checkout form එකේදී පාරිභෝගිකයා තමන්ගේ මිල ගණන් වගුවෙන් හෝ template පිටුවෙන් තෝරා ගන්නා නිෂ්පාදනය හෝ template එක පෙර තෝරා ගැනීමට අවශ්‍ය නම්, මේ සඳහා URL parameters භාවිතා කළ හැකියි.

### **plans (plans/සැලසුම්) සඳහා:**

**Ultimate Multisite > Products > Select a plan** වෙත යන්න. එහි පිටුවේ ඉහළින් ඔබට **Click to copy Shareable Link** (පිටපත් කිරීමට බෙදාගත හැකි සබැඳිය ක්ලික් කරන්න) බොත්තම දැකගත හැකියි. ඔබේ checkout form එකේදී මෙම නිශ්චිත plan එක පෙර තෝරා ගැනීමට ඔබට භාවිතා කළ හැකි සබැඳිය මෙයයි.

![Product page with shareable link button](/img/config/products-list.png)

මෙම බෙදාගත හැකි සබැඳිය **Planes** සඳහා පමණක් වලංගු බව කරුණාවෙන් සලකන්න. පැකේජ හෝ සේවාවන් සඳහා බෙදාගත හැකි සබැඳි භාවිතා කළ නොහැක.

### Template සඳහා:

ඔබට ඔබේ checkout form එකේ වෙබ් අඩවි template එක කලින් තෝරා ගැනීමට අවශ්‍ය නම්, ඔබට ඔබේ registration page URL එකේ **?template_id=X** යන parameter එක භාවිතා කළ හැකිය. එහි "X" වෙනුවට **site template ID number** එක ආදේශ කළ යුතුය. මෙම අංකය ලබා ගැනීමට, **Ultimate Multisite > Sites** වෙත යන්න.

ඔබ භාවිතා කිරීමට අවශ්‍ය site template එකට පහළින් ඇති **Manage** ක්ලික් කරන්න. ඔබට SITE ID අංකය පෙනෙනු ඇත. ඔබේ checkout form එකේ එම නිශ්චිත site template එක කලින් තෝරා ගැනීමට මෙම අංකය පමණක් භාවිතා කරන්න. අපගේ අවස්ථාවේදී, URL parameter එක වනුයේ **?template_id=2** යන්නයි.

![Sites list showing site template ID](/img/config/site-templates-list.png)

අපගේ ජාල වෙබ් අඩවිය [**www.mynetwork.com**](http://www.mynetwork.com) නම් සහ අපගේ checkout form එක සහිත registration page එක **/register** පිටුවෙහි පිහිටා ඇත්නම්, මෙම site template කලින් තෝරාගෙන ඇති සම්පූර්ණ URL එක මෙලෙස පෙනේ: [**www.mynetwork.com/register/?template_id=2**](http://www.mynetwork.com/register/?template)**_id=2**.

ඔබට අවශ්‍ය නම්, ඔබේ checkout form එකේ නිෂ්පාදන (products) සහ template දෙකම කලින් තෝරා ගත හැකිය. ඔබ කළ යුත්තේ plan එකේ shareable link එක පිටපත් කර template parameter එක අවසානයේ ඇලවීම පමණි. එය මෙලෙස පෙනේ: [**www.mynetwork.com/register/premium-plan/?template_id=2**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
