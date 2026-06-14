---
title: PayPal සැකසීම
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# પે-පෝල් ගේට්වේ එක සකස් කිරීම (v2)

_**වැදගත් සටහන: මෙම ලිපිය Ultimate Multisite version 2.x වෙත යොමු වේ.**_

ඔබට අපගේ ගෙවීම් සැකසුම් පිටුවේ Stripe, Stripe Checkout, PayPal සහ Manual යන ක්‍රමයන්ගෙන් උපරිම හතරක් සක්‍රීය කළ හැකියි. මෙම ලිපියේදී අපි **PayPal** සමඟ සම්බන්ධ කරන්නේ කෙසේදැයි බලමු.

Stripe මෙන්ම, විශේෂයෙන් WordPress වෙබ් අඩවි සඳහා දන්තිය (online payments) සඳහා PayPal පුළුල් ලෙස භාවිතා වේ. ඔබේ ජාලයේ ඇති ගෙවීම් ක්‍රමයක් ලෙස PayPal භාවිතා කරන්නේ කෙසේද යන්න මෙම ලිපිය ඔබට මඟ පෙන්වනු ඇත.

මෙම සම්බන්ධතාවය සඳහා අවශ්‍ය API විස්තර ලබා ගැනීමට ඔබට **PayPal Business account** එකක් තිබිය යුතු බව සටහනක් ගන්න.

## ඔබේ ජාලයේ PayPal සක්‍රීය කිරීම

ඔබේ ජාලයේ ඇති ගෙවීම් ක්‍රමයක් ලෙස PayPal සක්‍රීය කිරීමට, **Ultimate Multisite > Settings > Payments** වෙත යන්න සහ PayPal අසල ඇති කොටුව තිත් කරන්න (tick).

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## මඟ පෙන්වන සැකසුම් වැඩසටහන භාවිතා කිරීම

Ultimate Multisite 2.10.0 හි ගෙවීම් ගේට්වේ සැකසුම් සඳහා මඟ පෙන්වන PayPal setup wizard එකක් එක් කර ඇත. ඔබ PayPal සක්‍රීය කළ පසු, ගේට්වේ සම්බන්ධ කිරීමට ඔබට අවශ්‍ය ආකාරය තෝරා ගැනීමට සහ සුරැකීමට පෙර තවමත් අවශ්‍ය විස්තර මොනවාද යන්න තහවුරු කිරීමට **Ultimate Multisite > Settings > Payments** හි මඟ පෙන්වන වැඩසටහන භාවිතා කරන්න.

මෙම වැඩසටහන සැකසුම් මාර්ග දෙකක් සඳහා සහාය වේ:

* **අතින් ක්‍රෙඩන්ෂල් ඇතුළත් කිරීම (Manual credential entry)**: ඔබට දැනටමත් PayPal API ක්‍රෙඩන්ෂල් තිබේ නම්, ඔබගේ ගිණුම සඳහා OAuth සැකසීම (OAuth setup) ලබා ගත නොහැකි නම්, නැතිනම් ඔබ විසින්ම PayPal වෙතින් ක්‍රෙඩන්ෂල් පිටපත් කිරීමට කැමති නම් මෙම මාර්ගය භාවිතා කරන්න. PayPal ක්ෂේත්‍රවල API Username, API Password සහ API Signature ඇතුළත් කර ගෙවීම් සැකසුම් සුරකින්න.
* **OAuth සම්බන්ධතා දොරටු (OAuth connection gate)**: ඔබගේ ස්ථාපනය සඳහා OAuth විකල්පය තිබේ නම් පමණක් මෙම මාර්ගය භාවිතා කරන්න. මයික්‍රෝසොෆ්ට් (wizard) තුළ ඇති විශේෂාංගフラග් එකක් (feature flag) පිටුපස OAuth ප්‍රවාහය පෙන්වන බැවින්, එම ෆ්ලෑග් නොමැති ජාල වලට අතින් ක්‍රෙඩන්ෂල් ඇතුළත් කිරීමේ ක්ෂේත්‍ර භාවිතා කිරීමට අවශ්‍ය වේ.

මයික්‍රෝසොෆ්ට් (wizard) තුළ ඔබ OAuth විකල්පය නොපෙනේ නම්, පහත අතින් ක්‍රෙඩන්ෂල් ඇතුළත් කිරීමේ ක්‍රියාවලිය සම්පූර්ණ කරන්න. මෙම ගේට්වේ එක පෙර Ultimate Multisite 2.x සංස්කරණවල ඇති PayPal Business API ක්‍රෙඩන්ෂල් සමඟම ක්‍රියා කරයි.

## PayPal API ක්‍රෙඩන්ෂල් ලබා ගැනීම (Getting the PayPal API credentials)

PayPal ගෙවීම් දොරටුවක් ලෙස සක්‍රිය කළ පසු, ඔබ PayPal API **Username**, PayPal API **Password** සහ PayPal API **Signature** සඳහා ඇති ක්ෂේත්‍ර පුරවන්නට අවශ්‍ය වනු ඇත.

ඔබට මෙය කරන්නේ ඔබේ PayPal [Live](https://www.paypal.com/home) හෝ [Sandbox](https://www.sandbox.paypal.com/home) ගිණුමට ලොග් වීමෙන් ලබා ගත හැකිය.

(ගෙවීම් පරීක්ෂා කිරීමට සහ ගේට්වේ එක නිවැරදිව සැකසී තිබේදැයි බැලීමට ඔබට **sandbox mode** භාවිතා කළ හැකි බව මතක තබා ගන්න. අදාළ කොටස ක්‍රියාත්මක කරන්න.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

ඔබේ PayPal ගිණුම සඳහා API Signature හෝ සහතික (Certificate) ක්‍රෙඩන්ෂල් ඉල්ලීමට:

  1. ඔබේ [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) වෙත යන්න.

  2. **API access** කොටසේ, **Update** ක්ලික් කරන්න.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. **NVP/SOAP API integration (Classic)** යටතේ, **Manage API credentials** ක්ලික් කරන්න.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * ඔබ දැනටමත් API Signature හෝ Certificate ජනනය කර ඇත්නම්, ඔබේ විස්තර සොයාගත හැකි පිටුවකට ඔබව යොමු කරනු ඇත.

     * _**සටහන:** ඔබගේ PayPal ගිණුම තහවුරු කිරීමට ඉල්ලා සිටින්නේ නම්, එවිට තිරයේ ඇති උපදෙස් අනුගමනය කරන්න._

  4. පහත සඳහන් විකල්ප වලින් **එකක්** තෝරාගෙන, පසුව **Agree and Submit** ක්ලික් කරන්න.

     * **Request API Signature** – API Signature認証 සඳහා මෙය තෝරන්න.

     * **Request API Certificate** – API Certificate認証 සඳහා මෙය තෝරන්න.

  5. PayPal ඔබගේ API විස්තර පහත පරිදි ජනනය කරයි:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** වලට API Username, API Password සහ Signature ඇතුළත් වේ, එය කිසි විටෙක අවසන් නොවේ. ආරක්ෂාව වැඩි කිරීම සඳහා මෙම අගයන් පෙරනිමයෙන් සැඟවී ඇත. ඒවා ක්‍රියාත්මක කිරීමට සහ නැවැත්වීමට **Show/Hide** ක්ලික් කරන්න. අවසන් වූ පසු, **Done** ක්ලික් කරන්න.

     * **API Certificate credentials** වලට API Username, API Password සහ Certificate ඇතුළත් වේ, එය වසර තුනකට පසු ස්වයංක්‍රීයව අවසන් වේ. API Certificate ඔබේ පරිගණකයේ සුරැකීමට **Download Certificate** ක්ලික් කරන්න.

ඒ තරම්මයි, ඔබගේ PayPal ගෙවීම් ඒකාබද්ධ කිරීම සම්පූර්ණ කර ඇත!

PayPal සැකසුම් සම්බන්ධයෙන් ඔබට කිසියම් ප්‍රශ්න ඇත්නම්, ඔබට PayPal හි [Help Center](https://www.paypal.com/br/smarthelp/home) වෙත යොමු විය හැකිය.
