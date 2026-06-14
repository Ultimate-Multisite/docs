---
title: අතින් ගෙවීම් සැකසීම
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# අතින් ගෙවීම් සැකසීම (v2)

_**වැදගත් සටහන: මෙම ලිපිය Ultimate Multisite version 2.x වෙත යොමු වේ.**_

ඔබේ පරිශීලකයින් සඳහා **Stripe** හෝ **PayPal** වැනි ක්‍රම නොමැති අවස්ථාවක, අතින් ගෙවීම් (Manual payments) ලබා දීමට මෙය ඔබට හැකි වන ක්‍රමයකි. එය බැංකු මාරු කිරීමක් (wire transfer), බැංකු ගනුදෙනුවක් හෝ ඔබේ පරිශීලකයින්ට ප්‍රාදේශීයව තිබිය හැකි වෙනත් ඕනෑම ගෙවීම් ක්‍රමයක් විය හැකිය.

## අතින් ගෙවීම් ක්‍රියාත්මක කරන්නේ කෙසේද

අතින් ගෙවීම් සැකසීම ඉතා පහසුයි. ඔබට එය Payment Gateways යටතේ සක්‍රීය කිරීමට අවශ්‍ය වන අතර, පරිශීලකයා ගෙවීම සිදු කළ යුතු ආකාරය පිළිබඳ විස්තරාත්මක උපදෙස් එහි ඇතුළත් කළ යුතුය.

පළමුව, **Ultimate Multisite > Settings > Payments** වෙත යන්න. **Payment Gateways** යටතේ, **Manual** එක 'on' කරන්න (ක්‍රියාත්මක කරන්න). එවිට ඔබට **Payment Instructions** කොටුවක් දිස්වනු ඇත.

ඔබේ පාරිභෝගිකයා ගෙවීම සිදු කිරීමට අවශ්‍ය තොරතුරු මෙම කොටුවට එක් කරන්න. උදාහරණයක් ලෙස, ඔබේ බැංකු ගිණුම් විස්තර සහ ඔබේ විද්‍යුත් තැපෑල (email) ඇතුළත් කළ හැකිය. එවිට පාරිභෝගිකයාට ඔබට ගෙවීම තහවුරු කිරීමේ පණිවිඩ යැවීමට හැකි වේ.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

අතින් ගෙවීම් සැකසීමේ අතුරුමුහුණත මෙන්න:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

එය සැකසූ පසු, **Save Settings** ක්ලික් කිරීමෙන් සියල්ල අවසන් වේ. පරිශීලකයින් ඔබේ ජාලයට ලියාපදිංචි වන විට, ඔවුන්ට මිලදී ගැනීම සම්පූර්ණ කිරීමට ඔබ ලබා දෙන උපදෙස් ලැබෙන බව පවසන පණිවිඩයක් පෙන්වනු ඇත.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

එමෙන්ම, ඔවුන්ට ඔබේ **Thank You** පිටුවේ ගෙවීම් උපදෙස් සමඟ පණිවිඩයක් ද ලැබෙනු ඇත.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## අතින් ගෙවීම් තහවුරු කිරීම

අතින් කරන ගෙවීමක් තහවුරු කිරීමට, වම් පස ඇති **Payments** මෙනුවට යන්න. එහිදී ඔබට ඔබේ ජාලයේ ඇති සියලුම ගෙවීම් සහ ඒවායේ **status** ඇතුළු විස්තර දැකගත හැකියි. ඔබ එය අතින් වෙනස් කරන තුරු අතින් කරන සෑම ගෙවීමකටම සැමවිටම **Pending** තත්ත්වය තිබෙනු ඇත.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** ක්ලික් කිරීමෙන් ගෙවීම් පිටුවට ඇතුළු වන්න. මෙම පිටුවේ, reference ID, නිෂ්පාදන, කාල සටහන් සහ තවත් බොහෝ දේ වැනි සැකසුම් සහිත පවතින ගෙවීම් පිළිබඳ සියලු විස්තර ඔබට ලැබේ.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

දකුණු තීරුවේ, ඔබට ගෙවීමේ තත්ත්වය වෙනස් කළ හැකියි. එය **Completed** ලෙස වෙනස් කිරීම සහ **Activate Membership** විකල්පය ක්‍රියාත්මක කිරීමෙන් ඔබේ පාරිභෝගිකයාගේ වෙබ් අඩවිය සක්‍රීය වන අතර ඔවුන්ගේ සාමාජිකත්වය ද ක්‍රියාත්මක වේ.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
