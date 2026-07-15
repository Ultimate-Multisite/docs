---
title: Zapier ඒකාබද්ධ කිරීම
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite ကို Zapier နဲ့ සම්බන්ධ කිරීම

එක ලිපියකදී අපි [Webhooks](webhooks.md) ගැන සාකච්ඡා කළා, ඒවා තෙවන පාර්ශවීය යෙදුම් සමඟ සම්බන්ධ කිරීමට භාවිතා කළ හැකි ආකාරය ගැන.

webhooks භාවිතා කිරීම ටිකක් සංකීර්ණයි, මොකද ඒ සඳහා කේතකරණය පිළිබඳ උසස් දැනුමක් සහ payload (දත්ත) හසුරුවන දක්ෂතාවයක් අවශ්‍ය වෙනවා. **Zapier** භාවිතා කිරීමෙන් ඔබට ඒ ගැටලුව මඟ හැරිය හැකියි.

Zapier එකේ 5000කට වඩා වැඩි යෙදුම් සමඟ සම්බන්ධතා තිබීම නිසා විවිධ යෙදුම් අතර සන්නිවේදනය පහසු වෙනවා.

ඔබට **Triggers** නිර්මාණය කළ හැකියි, ඒවා ඔබේ ජාලයේ සිදුවන සිදුවීම් මත ක්‍රියාත්මක වේ (උදාහරණයක් ලෙස ගිණුමක් නිර්මාණය වීම සහ `account_create` සිදුවීම). නැතිනම් බාහිර සිදුවීම්වලට ප්‍රතිචාර දැක්වීමට **Actions** ජනනය කළ හැකියි (උදාහරණයක් ලෙස ඔබේ Ultimate Multisite ජාලයේ නව ගිණුම් සාමාජිකත්වයක් නිර්මාණය කිරීම).

මෙය කළ හැකි වන්නේ **Ultimate Multisite Zapier triggers** සහ actions [REST API](https://developer.ultimatemultisite.com/api/docs/) මගින් බල ගැන්වෙන බැවිනි.

## ආරම්භ කරන්නේ කෙසේද {#how-to-start}

පළමුව, Zapier app list එකේ Ultimate Multisite සොයන්න. නැතිනම් ඔබට [මෙම සබැඳිය](https://zapier.com/apps/wp-ultimo/integrations) ක්ලික් කළ හැකියි.

ඔබේ dashboard එකට ගොස් වම් පස ඇති **+** **Create Zap** බොත්තම ඔබා නව Zap එකක් සැකසිය හැකියි.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

ඔබ Zap නිර්මාණය කිරීමේ පිටුවට යොමු කරනු ඇත.

සෙවුම් කොටුවේ "wp ultimo" ලෙස ටයිප් කරන්න. **Beta** අනුවාදය තෝරා ගැනීමට ක්ලික් කරන්න.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

අපේ යෙදුම තෝරාගත් පසු, ලබා ගත හැකි සිදුවීම තෝරන්න: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

දැන් අපට Zapier එකට **ඔබේ ජාලයට** ප්‍රවේශය දිය යුතුයි. **Sign in** හි ක්ලික් කිරීමෙන් **API credentials** අවශ්‍ය වන නව කවුළුවක් විවෘත වේ.

![API යතුර සහ API රහස සඳහා Zapier පිවිසුම් ප්‍රොම්ප්ට් එක](/img/admin/webhooks-list.png)

ඔබේ ජාල පරිපාලක පැනලය (network admin panel) වෙත ගොස් **Ultimate Multisite > Settings** > **API & Webhooks** වෙත යන්න, එහි API සැකසුම් කොටස සොයා බලන්න.

මෙම සම්බන්ධතාව ක්‍රියාත්මක වීමට අවශ්‍ය නිසා **Enable API** විකල්පය තෝරන්න.

![API සහ Webhooks සැකසුම් සමඟ API සැකසුම් සහ Enable API විකල්ප පෙන්වන රූපය](/img/admin/settings-api-webhooks.png)

API Key සහ API Secret ක්ෂේත්‍රවල ඇති **Copy to Clipboard** අයිකනය භාවිතා කර එම අගයන් integration තිරයේ (integration screen) අලවන්න.

URL ක්ෂේත්‍රයේ, HTTP හෝ HTTPS වැනි ප්‍රොටෝකෝලය ඇතුළුව ඔබේ ජාල සම්පූර්ණ URL එක ඇතුළත් කරන්න.

![API Key, Secret සහ URL ක්ෂේත්‍ර සහිත Zapier integration තිරය](/img/admin/webhooks-list.png)

ඊළඟ පියවරට යාමට **Yes, Continue** බොත්තම ක්ලික් කරන්න. සියල්ල සාර්ථක වුවහොත්, ඔබගේ නව සම්බන්ධිත ගිණුම ඔබට පිළිගැනීමෙන් (greet) ලැබෙනු ඇත! නව trigger එකක් නිර්මාණය කිරීමට **Continue** ක්ලික් කරන්න.

## නව Trigger එකක් නිර්මාණය කරන්නේ කෙසේද {#how-to-create-a-new-trigger}

ඔබේ ගිණුම සම්බන්ධ වූ පසු, ඔබට තිබිය හැකි සිදුවීම් (events) දැකගත හැකියි. මෙම නිබන්ධනය සඳහා අපි **payment_received** සිදුවීම තෝරමු.

![Zapier trigger හි payment_received සිදුවීම තෝරා ගැනීම](/img/admin/webhooks-list.png)

සිදුවීම තෝරාගෙන ඔබ **continue** ක්ලික් කළ පසු, **test step** එකක් දිස්වනු ඇත.

![Trigger සඳහා Zapier test step පෙන්වන රූපය](/img/admin/webhooks-list.png)

මෙම අවස්ථාවේදී, ඔබේ Zap එකට එම සිදුවීමට අදාළ නිශ්චිත payload එක ලබාගත හැකිද යන්න Zapier විසින් පරීක්ෂා කරනු ඇත. එම වර්ගයේ අනාගත සිදුවීම් සඳහා ද මෙම ව්‍යුහය සහිත තොරතුරු යවනු ලැබේ.

![Payload සමඟ Zapier trigger test සාර්ථකව අවසන් කිරීම](/img/admin/webhooks-list.png)

අපගේ නිබන්ධනයේදී පරීක්ෂණය **සාර්ථකව අවසන් වූ අතර** එය දත්ත උදාහරණ තොරතුරු ලබා දුන්නේය. මෙම උදාහරණ තොරතුරු ක්‍රියා (actions) නිර්මාණය කිරීමේදී අපට මඟ පෙන්වීම සඳහා ප්‍රයෝජනවත් වනු ඇත. ඔබේ trigger එක දැන් නිර්මාණය කර ඇති අතර වෙනත් යෙදුම් සමඟ සම්බන්ධ කිරීමට සූදානම්ය.

## Actions නිර්මාණය කරන්නේ කෙසේද {#how-to-create-actions}

Actions වල තොරතුරු ලබා ගැනීමෙන් ඔබේ ජාලයේ නව ඇතුළත් කිරීම් (entries) නිර්මාණය කෙරේ.

**action step එකක් නිර්මාණය කිරීමේදී**, ඔබ Ultimate Multisite **Beta** එක සහ **Create Items on Ultimate Multisite** යන විකල්පය තෝරා ගනු ඇත.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

ඊළඟ පියවරේදී, ඔබට ආරම්භ කළ ආකාරයටම ඔබේ認証 (authentication) නිර්මාණය කිරීමට හෝ දැනටමත් නිර්මාණය කර ඇති එකක් තෝරා ගැනීමට හැකිය. මෙම නිබන්ධනයේදී අපි මීට පෙර නිර්මාණය කළ එම authentication එකම තෝරා ගනිමු.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action එක සැකසීම (Setting up the Action) {#setting-up-the-action}

මෙය **action එකේ ප්‍රධාන පියවරයි** එහිදී දේවල් ටිකක් වෙනස් වේ. ඔබ මුලින්ම තෝරාගනු ලබන්නේ **Item** යන්නයි. Item යනු ඔබේ ජාලයේ **Customers, Payments, Sites, Emails** වැනි **information model** (තොරතුරු ආකෘතිය) වේ.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Item එකක් තෝරා ගන්නා විට, එම Item සඳහා අවශ්‍ය සහ අත්‍යවශ්‍ය නොවන ක්ෂේත්‍ර (fields) ගෙන ඒම සඳහා පෝරමය **ප්‍රමාණය වෙනස් වේ**.

උදාහරණයක් ලෙස, **Customer** item එක තෝරා ගන්නා විට, ජාලයේ නව Customer කෙනෙකු නිර්මාණය කිරීමට අවශ්‍ය සියල්ල පිරවීම සඳහා පෝරමය ක්ෂේත්‍ර ගෙන එනු ඇත.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

**required** ලෙස සලකුණු කරන ලද සියලුම ක්ෂේත්‍ර පුරවාပြီး continue (ඉදිරියට යන්න) ක්ලික් කළ පසු, පිරුණු ක්ෂේත්‍ර සහ හිස්ව ඇති ක්ෂේත්‍ර ඔබට පෙන්වන අවසාන තිරය දිස්වේ.

![Zapier ක්‍රියාව සවි කිරීම පෙන්වන රූපය, සම්පූර්ණ සහ හිස් ක්ෂේත්‍ර පෙන්වයි](/img/admin/webhooks-list.png)

ඔබේ පරීක්ෂණය සාර්ථක වූ වහාම ඔබේ ක්‍රියාව (action) සකසා ඇත. ඔබගේ ක්‍රියාවේ පරීක්ෂාවෙන් අදාළ දේ නිර්මාණය වී ඇත්දැයි ඔබේ ජාලය (network) හරහා පරීක්ෂා කිරීම ද වැදගත් වේ.
