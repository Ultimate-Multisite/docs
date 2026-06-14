---
title: API අවසාන ලක්ෂ්‍යය ලියාපදිංචි කරන්න
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# The Ultimate Multisite Register API endpoint

මේ නිබන්ධනයේදී, ඔබේ ජාලයේ නව පාරිභෝගිකයෙකු සඳහා සම්පූර්ණ ඇතුළත් කිරීමේ ක්‍රියාවලිය (onboarding process) නිර්මාණය කිරීමට සහ එය Zapier සමඟ කරන්නේ කෙසේද යන්න Ultimate Multisite /register API endpoint භාවිතා කරන ආකාරය ඔබට ඉගෙන ගැනීමට හැකි වනු ඇත.

මෙම endpoint එක POST ක්‍රමය භාවිතා කරන අතර, එය _**https://yoursite.com/wp-json/wu/v2/register**_ ලෙස හැඳින්වේ. මෙම ඇමතුම තුළ ඔබේ ජාලය තුළ ක්‍රියාවලීන් 4ක් සිදු වේ:

  * නව WordPress පරිශීලකයෙකු හෝ පරිශීලක ID හරහා එහි හඳුනාගැනීම මගින් එය නිර්මාණය වේ.

  * Ultimate Multisite හි නව පාරිභෝගිකයෙකු හෝ පාරිභෝගික ID හරහා එහි හඳුනාගැනීම මගින් එය නිර්මාණය වේ.

  * WordPress ජාලයේ නව වෙබ් අඩවියක් නිර්මාණය වේ.

  * අවසානයේ, Ultimate Multisite හි නව සාමාජිකත්වයක් (Membership) නිර්මාණය වේ.

මෙම ක්‍රියාවලිය සඳහා ඔබට ඔබේ API credentials අවශ්‍ය වනු ඇත. ඒවා ලබා ගැනීමට, ඔබේ ජාල පරිපාලක පැනලය වෙත ගොස් **Ultimate Multisite > Settings** > **API & Webhooks**, සහ API සැකසුම් කොටස සොයා බලන්න.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

API සැකසුම් පිටුවේ සම්පූර්ණ දර්ශනය මෙන්න:

![API settings full page](/img/config/settings-api-full.png)

**Enable API** තෝරාගෙන ඔබේ API credentials ලබා ගන්න.

දැන්, අපි endpoint එක ගවේෂණය කර පසුව Zapier හි ලියාපදිංචි කිරීමේ ක්‍රියාවක් (registration action) නිර්මාණය කර බලමු.

## Endpoint body parameters

endpoint එකට යැවීමට අපට අවශ්‍ය අවම තොරතුරු පිළිබඳ දළ විශ්ලේෂණයක් කර ගනිමු. මෙම ලිපියේ අවසානයේදී, සම්පූර්ණ ඇමතුම ඔබට සොයාගත හැක.

### Customer

මෙය පරිශීලකයෙකු (User) සහ Ultimate Multisite පාරිභෝගිකයෙකු නිර්මාණය කිරීමේ ක්‍රියාවලිය සඳහා අවශ්‍ය තොරතුරුයි:

"customer_id" : integer

ඔබේ ජාලයේ නිර්මාණය කරන ලද පාරිභෝගික ID යැවීම කළ හැකිද? එසේ නොයන්නේ නම්, පහත තොරතුරු නව පාරිභෝගිකයෙකු සහ නව WordPress පරිශීලකයෙකු නිර්මාණය කිරීමට භාවිතා කරනු ඇත. පරිශීලක ID ද පාරිභෝගික ID මෙන්ම එම ආකාරයෙන් යැවිය හැකිය.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

අපට අවශ්‍ය තොරතුරු මේ වස්තුවේ තිබිය යුත්තේ සාමාජිකත්ව තත්ත්වය (Membership Status) පමණි.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" වලින් එකක් },

### **Products**

නිෂ්පාදන සඳහා ඔබේ ජාලයෙන් නිෂ්පාදන ID 1 හෝ වැඩි ගණනකින් සහිත array එකක් ලබා දේ. අවධානය යොමු කරන්න, මෙම endpoint මගින් නිෂ්පාදන නිර්මාණය නොකරයි. නිෂ්පාදන නිර්මාණය කිරීම පිළිබඳEndpoint වඩා හොඳින් තේරුම් ගැනීමට Ultimate Multisite හි ලේඛන පරීක්ෂා කරන්න.

**"products" : [1,2],**

### Payment

සාමාජිකත්වය වැනිම, අපට අවශ්‍ය වන්නේ තත්ත්වය පමණි.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" වලින් එකක් },**

### Site

සහ අවසානයට, අපට අවශ්‍ය වන්නේ වෙබ් අඩවියේ URL සහ මාතෘකාව (Title) ය. මේ දෙකම Site වස්තුව ඇතුළත තිබිය යුතුය.

**"site" : { "site_url" : "string", "site_title" : "string" }**

ලියාපදිංචි කිරීමේ endpoint එකෙන් ලැබෙන ප්‍රතිචාරය නව සාමාජිකත්ව තොරතුරු සහිත array එකක් ලෙස ලැබේ.

## Zapier හි ක්‍රියාවක් (Action) නිර්මාණය කිරීම

මෙම අලුත් සහ වඩාත් ශක්තිමත් ගිණුම් නිර්මාණය කිරීමේ endpoint එක හඳුන්වා දීමත් සමඟ, ඔබට Zapier තුළ නව ක්‍රියාවක් (action) වෙත ප්‍රවේශ විය හැකිය.

නව Zapier අනුවාදය මගින් ලබා දෙන සියල්ල භාවිතා කර භුක්ති විඳින්නේද? මෙතන තවත් ඉගෙන ගන්න. (link?)

### ක්‍රියාවක් නිර්මාණය කිරීම

Zapier සමඟ registration endpoint එක භාවිතා කරන ආකාරය වඩාත් හොඳින් පෙන්වීමට, අපි Google Forms සමඟ integration එකක් සාදමු. මෙම form එක සෑම විටම පුරවා තොරතුරු form එකේ answer sheet එකේ සුරැකූ විට, Ultimate Multisite ජාලයේ නව සාමාජිකත්වයක් (membership) නිර්මාණය වනු ඇත.

Google Forms වලදී, ජාලයේ නව සාමාජිකත්වයක් නිර්මාණය කිරීමට අවශ්‍ය අවම ක්ෂේත්‍ර (fields) සහිත form එකක් සාදන්න.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

දැන් Zapier එකේ අලුත් Zap එකක් සාදා, දත්ත සුරැකෙන spreadsheet එක හරහා Google හි නිර්මාණය කළ form එක සම්බන්ධ කරන්න.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

හරි! Google Forms form එක Zapier සමඟ සම්බන්ධ කර ඇති අතර ජාලයට integrate කිරීමට සූදානම්ය. දැන් Trigger එක මගින් සෑම විටම පුරවන විට සිදුවන Action එකට යමු.

Ultimate Multisite app එක සොයා එය තෝරා ගන්න. මෙවැනි Zap සඳහා Register option එක තෝරන්න.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

මෙම පළමු පියවරෙන් පසු, මෙම Zap සමඟ සම්බන්ධ වීමට අවශ්‍ය ගිණුම (account) තෝරන්න.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

මේක මුළු ක්‍රියාවලියේම වඩාත්ම සංවේදී කොටසයි. Google Forms එකෙන් ලැබුණු ක්ෂේත්‍ර (fields) පෙර ලිපියේ ඇති පරිදි register endpoint සඳහා අවශ්‍ය අවම ක්ෂේත්‍ර සමඟ ගැලපිය යුතුයි.

මෙම උදාහරණයේදී, අපට username, email, password, name සහ වෙබ් අඩවියේ URL එක වැනි දේවල් configure කිරීමට පමණක් අවශ්‍ය වේ. ඉතිරිය පෙර තීරණය කර ඇත, එවිට මෙම Google Forms මගින් ජනනය වන සියලුම සාමාජිකත්වයන් එකම නිෂ්පාදන රටාව (product pattern) සහ තත්ත්වය (status) අනුගමනය කරයි.

<!-- ස්ක්‍රීන්ෂොට් ලබා ගත නොහැක: Google Forms සහ Ultimate Multisite ලියාපදිංචි කිරීමේ අවසාන ලක්ෂ්‍යය අතර Zapier ක්ෂේත්‍ර සිතියම -->

තොරතුරු සැකසීම අවසන් වූ පසු, අවසාන පරීක්ෂාවට යන්න. අවසාන තිරයේ ඔබට එන්ටෙන්ට් પોයින්ට් එකට යවන සියලුම ක්ෂේත්‍ර සහ ඒවායේ අදාළ තොරතුරු මෙන්ම හිස්ව යවන ක්ෂේත්‍ර ද දැකගත හැකිය.<!-- ස්ක්‍රීන්ෂොට් ලබා ගත නොහැක: ලියාපදිංචි කිරීමේ අවසාන ලක්ෂ්‍යයට යවන සියලුම ක්ෂේත්‍ර පෙන්වන Zapier පරීක්ෂණ තිරය -->

ඔබේ නව Zap එක පරීක්ෂා කරන්න, එය සාර්ථකව අවසන් විය යුතුය. කිසියම් දෝෂයක් සිදුවුවහොත්, සියලුම ක්ෂේත්‍ර පරීක්ෂා කර ඒවා නිවැරදිව යවා ඇත්දැයි බලන්න. තොරතුරු රාශියක් තිබෙන නිසා සමහර දේවල් නොසලකා හැරීමට ඉඩ ඇත.

### සම්පූර්ණ අවසාන ලක්ෂ්‍යพරාමිතීන් (Complete endpoint parameters)

මෙය සම්පූර්ණ ඇමතුම සහ යැවිය හැකි ක්ෂේත්‍ර සියල්ල මෙන්න.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
