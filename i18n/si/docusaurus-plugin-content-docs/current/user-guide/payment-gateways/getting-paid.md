---
title: මුදල් ලබා ගැනීම
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# ගෙවීම් ලබා ගැනීම (v2)

_**වැදගත් සටහන: මෙම ලිපිය Ultimate Multisite version 2.x සම්බන්ධ වේ.**_

Ultimate Multisite එකේ ඇතුළත් සාමාජිකත්ව සහ බිල්පත් පද්ධතියක් තිබෙනවා. අපගේ බිල්පත් පද්ධතිය ක්‍රියාත්මක වීමට නම්, අපි e-commerce වල බහුලව භාවිතා වන ගෙවීම් දොරටු (payment gateways) ඒකාබද්ධ කර තිබෙනවා. Ultimate Multisite හි පෙරනිමිය ගෙවීම් දොරටු වන්නේ _Stripe_, _PayPal_ සහ අතින් කරන ගෙවීම් (Manual Payment) ය. ඔවුන්ගේ අදාළ add-ons ස්ථාපනය කිරීමෙන් ඔබට _WooCommerce_, _GoCardless_ සහ _Payfast_ භාවිතා කර ගෙවීම් ලබා ගත හැකියි.

## මූලික සැකසුම්

Ultimate Multisite හි ගෙවීම් සැකසුම් (payment settings) යටතේ මෙම ගෙවීම් දොරටු වලින් ඕනෑම එකක් වින්‍යාස කළ හැකියි. එය **Ultimate Multisite menu > Settings > Payments** වෙත ගොස් ඔබට සොයාගත හැකියි.

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

ඔබේ ගෙවීම් දොරටුව සැකසීමට පෙර, ඔබට වින්‍යාස කළ හැකි මූලික ගෙවීම් සැකසුම් පිළිබඳව බැලිය යුතු කරුණු කිහිපයක් මෙන්න:

**Force auto-renew w:** මෙය පරිශීලකයා තෝරාගත් බිල්පත් සංඛ්‍යාතය අනුව සෑම බිල්පත් චක්‍රයක අවසානයේම ගෙවීම ස්වයංක්‍රීයව නැවත සිදු වනු ඇතැයි සහතික කරයි.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 මගින්, ස්වයංක්‍රීය අලුත් කිරීම (auto-renewal) සක්‍රිය කර ඇති නැවත සිදු කරන සාමාජිකත්වයක් සුරැකීමට පෙර ක්‍රියාකාරී දොරටුවට නැවත භාවිතා කළ හැකි අලුත් කිරීමේ තොරතුරු (reusable renewal credential) තිබේදැයි පරීක්ෂා කරයි. අලුත් කිරීමේ තොරතුරක් යනු ගෙවීම් දොරටු දායකත්වයක්, බිල්පත් ගිවිසුමක්, සුරැකූ vault token එකක් හෝ සමාන නැවත භාවිතා කළ හැකි ගෙවීම් ක්‍රමයක් විය හැකිය. දොරටුවෙන් භාවිත කළ හැකි තොරතුරක් නොමැති බව වාර්තා කරන්නේ නම්, Ultimate Multisite සාමාජිකත්වය සුරැකීමට වුවද ස්වයංක්‍රීය අලුත් කිරීම ක්‍රියා විරහිත කරන අතර, පරිපාලකයෙකුට හෝ සහායක කණ්ඩායමකට අලුත් කිරීමේ දිනයට පෙර පාරිභෝගිකයාගෙන් ගෙවීම නැවත අවසර ලබා දීමට ඉල්ලා සිටීමට අවශ්‍ය තොරතුරු (missing-credential state) වාර්තා කරයි.

මෙය ගේට්වේ එකට එක් වරක් පමණක් ගෙවීම් ලබා ගැනීමට හැකි විට සාමාජිකත්වයක් ස්වයංක්‍රීයව අලුත් නොවන බව තහවුරු කරයි. ගේට්වේ add-ons මගින් නැවත නැවත සිදුවන ගෙවීම් (recurring checkouts) සඳහා නැවත භාවිතා කළ හැකි හැඳුනුම්පතක් (reusable credential) සුරැකීමට සහතික විය යුතුය, විශේෂයෙන් ගේට්වේ එකෙන් එක් වරක් ලබා ගැනීම (one-time capture) සහ භාණ්ඩාගාරික/ස subscripsion ගෙවීම් ක්‍රම දෙකම සඳහා සහාය දක්වන විට.

**ගෙවීමකින් තොරව අත්හදා බැලීම් වලට අවසර දීම** **ක්‍රමය:** මෙම විකල්පය සක්‍රිය කළ විට, ඔබේ පාරිභෝගිකයා ලියාපදිංචි කිරීමේ ක්‍රියාවලියේදී කිසිදු මූල්‍ය තොරතුරු ඇතුළත් කිරීමට අවශ්‍ය නොවේ. එය අත්හදා බැලීමේ කාලය අවසන් වූ පසු එක් වරක් පමණක් අවශ්‍ය වනු ඇත.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**ගෙවීම් තහවුරු කිරීමේදී ඉන්වොයිසිය යැවීම:** ගෙවීමෙන් පසු ඉන්වොයිසියක් යැවීමට ඔබට විකල්පයක් ලැබේ. පාරිභෝගිකයින්ට ඔවුන්ගේ subsite dashboard එක හරහා ඔවුන්ගේ ගෙවීම් ඉතිහාසයට ප්‍රවේශ විය හැකි බව සටහනක් ගන්න. මෙම විකල්පය Manual Gateway සඳහා අදාළ නොවේ.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**ඉන්වොයිස් අංක සැකිල්ල:** මෙහිදී, ඔබට ගෙවීම් යොමු කේතයක් (payment reference code) හෝ අනුක්‍රමික අංක ක්‍රමයක් තෝරා ගත හැකිය. ඔබ ඔබේ ඉන්වොයිසි සඳහා ගෙවීම් යොමු කේතයක් භාවිතා කිරීමට තීරණය කරන්නේ නම්, ඔබට කිසිවක් වින්‍යාස කිරීමට අවශ්‍ය නැත. ඔබ අනුක්‍රමික අංක ක්‍රමයක් භාවිතා කිරීමට තෝරා ගන්නේ නම්, ඔබට **ඊළඟ ඉන්වොයිස් අංකය** (මෙම අංකය පද්ධතියෙන් ජනනය වන ඊළඟ ඉන්වොයිසිය සඳහා ඉන්වොයිස් අංකයක් ලෙස භාවිතා වේ. නව ඉන්වොයිසියක් නිර්මාණය කරන සෑම අවස්ථාවකදීම එය එකකින් වැඩි කරයි. ඔබට එය වෙනස් කර එය සුරැකීමට හැකි අතර, එමගින් ඉන්වොයිස් අනුක්‍රමික අංකය නිශ්චිත අගයකට නැවත සැකසිය හැකිය) සහ **ඉන්වොයිස් අංක පෙරනිමි ප්‍රියතෘ (invoice number prefix)** වින්‍යාස කිරීමට අවශ්‍ය වේ.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Sequential Number තෝරාගත් විට මීළඟ ඉන්වොයිස් අංකය සහ ඉන්වොයිස් අංක පූර්වය පිරවුම් ක්ෂේත්‍ර පෙන්වා ඇත -->

## ගේට්වේ (Gateways) සොයාගත හැකි ස්ථාන:

ඔබට ගෙවීම් ගේට්වේ එකතු කළ හැක්කේ එකම පිටුව තුළ (**Ultimate Multisite > Settings > Payments**). **active payment gateways** යටතේ, ඔබට පහත දේවල් දැකගත හැකිය: _Stripe_, _Stripe_ Checkout, _PayPal_ සහ _Manual_.

![Stripe, Stripe Checkout, PayPal සහ Manual පෙන්වන Active Payment Gateways කොටස](/img/config/payments-active-gateways.png)

ගෙවීම් ගේට්වේ එකක් සැකසීම පිළිබඳ පියවර ඔබට මඟ පෙන්වීමට අපට වෙනම ලිපියක් තිබෙනවා. ඒවා පහත ඇති සබැඳිවලින් ඔබට සොයාගත හැකියි.

ඔබට ගෙවීම් විස්තර බැලීමට සහ සංස්කරණය කිරීමට පුළුවන්:

![ගෙවීම් සංස්කරණ අතුරුමුහුණත](/img/admin/payment-edit.png)

මෙන්න ගෙවීම් සංස්කරණ පිටුවේ සම්පූර්ණ දර්ශනය:

![ගෙවීම් සංස්කරණ සම්පූර්ණ අතුරුමුහුණත](/img/admin/payment-edit-full.png)

ගෙවීම් ගේට්වේ සැකසුම්වල සම්පූර්ණ දර්ශනය මෙන්න:

![ගෙවීම් ගේට්වේ සැකසුම් සම්පූර්ණ පිටුව](/img/config/settings-payments-gateways-full.png)

**Stripe gateway එක සැකසීම**

**PayPal gateway එක සැකසීම**** **

**Manual ගෙවීම් සැකසීම**

දැන්, ඔබ _WooCommerce_, _GoCardless_ හෝ _Payfast_ ඔබේ ගෙවීම් ගේට්වේ එක ලෙස භාවිතා කිරීමට අවශ්‍ය නම්, ඔබට ඒවායේ add-ons (අමතර කොටස්) **install කර configure කළ යුතුයි**.

### WooCommerce add-on එක ස්ථාපනය කරන්නේ කෙසේද:

සමහර රටවල _Stripe_ සහ _PayPal_ නොමැති වීම නිසා Ultimate Multisite පරිශීලකයින්ට අපගේ plugin effectively භාවිතා කිරීමට සීමා හෝ බාධාවක් ඇති බව අපි අවබෝධ කරගෙන සිටිමු. ඒ නිසා, ඉතා ජනප්‍රිය e-commerce plugin එකක් වන _WooCommerce_ සමඟ ඒකාබද්ධ කිරීම සඳහා අපි add-on එකක් නිර්මාණය කළෙමු. ලොව පුරා සංවර්ධකයින් විසින් විවිධ ගෙවීම් ගේට්වේ එකතු කිරීමට add-ons නිර්මාණය කර ඇත. Ultimate Multisite බිලින් පද්ධතිය සමඟ භාවිතා කළ හැකි ගෙවීම් ගේට්වේ ව්‍යාප්ත කිරීම සඳහා අපි මේක උපයෝගී කරගත්තා.

**වැදගත්:** Ultimate Multisite: WooCommerce එක ඔබේ ප්‍රධාන වෙබ් අඩවියේ අවම වශයෙන් සක්‍රීය කර තිබිය යුතුය.

මුලින්ම, කරුණාකර add-ons පිටුවට යන්න. ඔබට එය **Ultimate Multisite > Settings** වෙත ගොස් සොයාගත හැකියි. එහිදී ඔබට **Add-ons** වගුව දැකගත හැක. **Check our Add-ons** ක්ලික් කරන්න.

<!-- Screenshot unavailable: Ultimate Multisite Settings sidebar එකේ Add-ons table සහ Check our Add-ons link පෙන්වන රූපය -->

**Check our Add-ons** ක්ලික් කිරීමෙන්, ඔබ add-ons පිටුවට යනු ඇත. මෙහිදී ඔබට Ultimate Multisite add-ons සියල්ල සොයාගත හැකියි. **Ultimate Multisite: WooCommerce Integration** add-on එක ක්ලික් කරන්න.

![WooCommerce Integration ඇතුළු Ultimate Multisite add-ons ලැයිස්තුව පෙන්වන Add-ons පිටුව](/img/addons/addons-page.png)

add-on විස්තර සහිත කවුළුවක් දිස්වනු ඇත. එහිදී **Install Now** ක්ලික් කරන්න.

<!-- Screenshot unavailable: Install Now බොත්තම සහිත Ultimate Multisite WooCommerce Integration add-on විස්තර ද්වාරය -->

සැකසීම අවසන් වූ පසු, ඔබ plugins පිටුවට යනු ඇත. මෙහිදී, **Network Activate** ක්ලික් කිරීමෙන් WooCommerce add-on එක ඔබේ ජාලයේ සක්‍රීය කරනු ලැබේ.

<!-- Screenshot unavailable: WooCommerce Integration add-on සඳහා Network Activate link සහිත Plugins පිටුව -->

එය සක්‍රීය කළ පසු, ඔබ වෙබ් අඩවියේ WooCommerce plugin එක තවමත් ස්ථාපනය කර ක්‍රියාත්මක කර නොමැති නම්, ඔබට මතක් කිරීමක් ලැබෙනු ඇත.

<!-- Screenshot unavailable: WooCommerce plugin එක ස්ථාපනය කිරීමට සහ සක්‍රීය කිරීමට පරිපාලකයාට මතක් කරන Admin notice එකේ රූපය -->

WooCommerce Integration add-on ගැන වැඩිදුර දැන ගැනීමට, **මෙතන ක්ලික් කරන්න**.

### GoCardless add-on ස්ථාපනය කරන්නේ කෙසේද:

_GoCardless_ add-on එක ස්ථාපනය කරන පියවර _WooCommerce_ add-on එකට සමානයි. කරුණාකර add-ons පිටුවට ගොස් **Ultimate Multisite: GoCardless Gateway** add-on එක තෝරන්න.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on එක ඉස්මතු කළ Add-ons පිටුව -->

add-on විවෘත වේ. **Install Now** මත ක්ලික් කරන්න.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on විස්තර ද්වාරය Install Now බොත්තම සහිත -->

ස්ථාපනය අවසන් වූ පසු, ඔබ plugins පිටුවට යොමු වනු ඇත. මෙහිදී, **Network Activate** මත ක්ලික් කරන්න, එවිට _GoCardless_ add-on එක ඔබේ ජාලයේ සක්‍රීය වේ.

<!-- Screenshot unavailable: GoCardless Gateway add-on සඳහා Network Activate සබැඳිය සහිත Plugins පිටුව -->

_GoCardless_ gateway සමඟ ආරම්භ කරන්නේ කෙසේදැයි දැන ගැනීමට, **මෙම ලිපිය කියවන්න**.

### Payfast add-on එක ස්ථාපනය කරන්නේ කෙසේද:

add-ons පිටුවට ගොස් **Ultimate Multisite: Payfast Gateway** add-on එක තෝරන්න.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on එක ඉස්මතු කළ Add-ons පිටුව -->

add-on විවෘත වේ. **Install Now** මත ක්ලික් කරන්න.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on විස්තර ද්වාරය Install Now බොත්තම සහිත -->

ස්ථාපනය අවසන් වූ පසු, ඔබ plugins පිටුවට යොමු වනු ඇත. මෙහිදී, **Network Activate** මත ක්ලික් කරන්න, එවිට _Payfast_ add-on එක ඔබේ ජාලයේ සක්‍රීය වේ.

<!-- Screenshot unavailable: Payfast Gateway add-on සඳහා Network Activate සබැඳිය සහිත Plugins පිටුව -->
