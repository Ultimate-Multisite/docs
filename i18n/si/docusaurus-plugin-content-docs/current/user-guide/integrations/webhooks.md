---
title: වෙබ් හුක්ස්
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks පිළිබඳ පළමු හැඳින්වීම (v2) {#a-first-look-on-webhooks-v2}

_**සැලකිල්ල: මෙම විශේෂාංගය හෝ ලිපිය උසස් පරිශීලකයින් සඳහා පමණක් බව සටහන් කරන්න.**_

**Webhook** කියන්නේ Ultimate Multisite වැනි යෙදුමක් වෙනත් යෙදුම්වලට තත්‍ය කාලීන තොරතුරු ලබා දීමට භාවිතා කරන ක්‍රමයක්. Webhook එකක් මගින් සිදුවීම් ඇතිවන සෑම අවස්ථාවකදීම, දත්ත හෝ පේලෝඩ් (payload) වෙනත් යෙදුම් වෙත ක්ෂණිකව යවනු ලැබේ, එනම් ඔබට **දත්ත වහාම ලබාගත හැකියි.**

උදාහරණයක් ලෙස, Ultimate Multisite එකෙන් සිදුවන සෑම සිදුවීමක් (event) සඳහාම, නව පරිශීලක ගිණුමක් නිර්මාණය වූ සෑම අවස්ථාවකදීම, එම පරිශීලකයාගේ නම සහ විද්‍යුත් තැපැල් ලිපිනය mailing list එකකට යැවීමට ඔබට අවශ්‍ය විය හැකියි.

## Webhook එකක් නිර්මාණය කරන්නේ කෙසේද? {#how-to-create-a-webhook}

Webhook එකක් නිර්මාණය කිරීමට, ඔබේ network admin dashboard එකට යන්න. **Ultimate Multisite > Webhooks > Add New Webhook** ක්ලික් කරන්න.

![Add New Webhook button on the empty Webhooks list page](/img/admin/webhooks-list-empty.png)

ඉන්පසු ඔබට webhook configuration එක සංස්කරණය කළ හැකිය:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

නව webhook එකක් නිර්මාණය කිරීමේදී ඔබට **Name (නම), URL (URL),** සහ **Event (සිදුවීම)** වැනි තොරතුරු ඇතුළත් කිරීමට ඉල්ලා සිටිනු ඇත. ඔබේ webhook සඳහා ඕනෑම නමක් භාවිතා කළ හැකියි. URL සහ Event කියන්නේ වඩාත්ම වැදගත් ක්ෂේත්‍ර දෙකයි.

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

URL යනු Ultimate Multisite එකෙන් **payload හෝ දත්ත** යැවීමට යන **endpoint එක හෝ ගමනාන්තය** වේ. එම දත්ත ලැබෙන යෙදුම තමයි එය.

Zapier කියන්නේ තෙවන පාර්ශවීය යෙදුම් සමඟ සම්බන්ධතා (integration) පහසු කිරීමට පරිශීලකයින් බහුලව භාවිතා කරන විසඳුමයි. Zapier වැනි වේදිකාවක් නොමැතිව, දත්ත අල්ලාගෙන එය සැකසීමට ඔබට අතින්ම කස්ටම් function එකක් නිර්මාණය කළ යුතු වෙනවා. **Ultimate Multisite webhook සමඟ Zapier භාවිතා කරන්නේ කෙසේද** යන්න පිළිබඳ මෙම ලිපිය බලන්න.

මෙම ලිපියෙන්, webhook එකක් ක්‍රියා කරන මූලික සංකල්පය සහ Ultimate Multisite හි ඇති සිදුවීම් (events) පිළිබඳව අපි බලමු. මේ සඳහා අපි [requestbin.com](https://requestbin.com/) නමින් තුන්වන පාර්ශවයක වෙබ් අඩවියක් භාවිතා කරන්නෙමු. මෙම වෙබ් අඩවිය මඟින් අපට කේත ලිවීමකින් තොරව endpoint එකක් නිර්මාණය කිරීමට සහ payload එක ලබා ගැනීමට ඉඩ සලසයි. _**ප්‍රකාශය: එය කළ යුත්තේ දත්ත ලැබී ඇති බව අපට පෙන්වීම පමණි.**_ කිසිදු සැකසුමක් හෝ payload එකට කිසිදු ක්‍රියාවක් සිදු නොවේ.

[requestbin.com](https://requestbin.com/) වෙත ගොස් Create Request Bin ක්ලික් කරන්න.

එම බොත්තම ක්ලික් කිරීමෙන් පසු, ඔබට දැනට ගිණුමක් තිබේ නම් ලොග් වීමට හෝ අලුතින් ලියාපදිංචි වීමට ඉල්ලා සිටිනු ඇත. ඔබට දැනට ගිණුමක් තිබේ නම් එය ඔබව ඔවුන්ගේ dashboard එකට කෙලින්ම යොමු කරනු ඇත. ඔවුන්ගේ dashboard එකේ, ඔබේ Ultimate Multisite webhook නිර්මාණය කිරීමට භාවිතා කළ හැකි endpoint හෝ URL එක ඔබට වහාම දැකගත හැකිය.

URL එක පිටපත් කර Ultimate Multisite වෙත නැවත යන්න. එම endpoint එක URL ක්ෂේත්‍රයේ තබා, පහළ ඇති dropdown එකෙන් සිදුවීමක් (event) තෝරන්න. මෙම උදාහරණයේදී, අපි **Payment Received** තෝරා ගනිමු.

පාරිභෝගිකයෙකු ගෙවීමක් කරන සෑම අවස්ථාවකම මෙම සිදුවීම ක්‍රියාත්මක වේ. ලබා ගත හැකි සියලුම සිදුවීම්, ඒවායේ විස්තර සහ payload එකතු පහළ පිටුවේ ලැයිස්තුගත කර ඇත. webhook එක සුරැකීමට **Add New Webhook** බොත්තම ක්ලික් කරන්න.

![Payment Received තෝරාගත් Webhook event dropdown පෙන්වන රූපය](/img/admin/webhook-event-picker.png)

අප නිර්මාණය කළ webhook එක ක්‍රියාත්මක දැයි බැලීම සඳහා අපට test event එකක් endpoint එකට යැවිය හැකියි. අපි මෙය කරන්නේ අප විසින් නිර්මාණය කරන ලද webhook එක යටින් **Send Test Event** ක්ලික් කිරීමෙන්ය.

![සංවිධානය කරන ලද webhook එකක් සහ Send Test ක්‍රියාව පෙන්වන Webhooks list රූපය](/img/admin/webhooks-list-populated.png)

මෙය test එක සාර්ථක බව පවසන confirmation window එකක් පෙන්වයි.

![test payload යැවීමෙන් පසු Webhook test event ප්‍රතිඵලය පෙන්වන රූපය](/img/admin/webhook-test-result.png)

අපි නැවත _Requestbin_ වෙබ් අඩවියට ගියොත් පේනවා payload එක ලැබී ඇති බව සහ ඒකේ ටෙස්ට් දත්ත කිහිපයක් ඇතුළත් වී ඇති බව.

Webhook සහ endpoints ක්‍රියා කරන මූලික මූලධර්මය මෙයයි. ඔබ කස්ටම් endpoint එකක් නිර්මාණය කිරීමට අවශ්‍ය නම්, Ultimate Multisite වෙතින් ඔබට ලැබෙන දත්ත සැකසීමට කස්ටම් function එකක් නිර්මාණය කළ යුතුයි.
